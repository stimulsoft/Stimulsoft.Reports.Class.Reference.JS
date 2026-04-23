#!/usr/bin/env node
// Parse index.md and generate sidebar.json for client-side rendering.
// Only includes items up to MAX_SIDEBAR_DEPTH levels (1=assembly, 2=namespace, 3=class).
// Keeping depth=2 means the sidebar shows Assembly → Namespace only; individual class
// pages are still reachable via namespace index pages.

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const INDEX = path.join(ROOT, "index.md");
const JSON_OUTPUT = path.join(ROOT, "sidebar.json");

// Maximum depth to include in the sidebar tree (1 = top-level only, 2 = two levels, etc.)
const MAX_SIDEBAR_DEPTH = 2;

const ITEM_RE = /^( *)- \[([^\]]+)\]\(([^)]+)\)/;

function loadExcludeTitles() {
  const configPath = path.join(ROOT, "_config.yml");
  if (!fs.existsSync(configPath)) return [];
  const text = fs.readFileSync(configPath, "utf-8");
  const m = text.match(/^exclude_from_menu:\s*\[([^\]]*)\]/m);
  if (!m || !m[1].trim()) return [];
  return m[1].split(",").map(s => s.trim().replace(/^"|"$/g, "")).filter(Boolean);
}

const EXCLUDE_TITLES = loadExcludeTitles();

function toUrl(filePath) {
  let url = "/" + filePath.replace(/\\/g, "/");
  if (url.endsWith("/index.md")) {
    url = url.slice(0, -"index.md".length);
  } else if (url.endsWith(".md")) {
    url = url.slice(0, -3);
  }
  return url;
}

function parseSidebar(text) {
  const items = [];
  // stack entries: { indent, list }
  const stack = [];
  let excludeUntilIndent = -1;

  for (const line of text.split("\n")) {
    const m = ITEM_RE.exec(line);
    if (!m) continue;

    const indent = m[1].length;

    // If we're inside an excluded block, skip until indent goes back up
    if (excludeUntilIndent >= 0) {
      if (indent > excludeUntilIndent) continue;
      else excludeUntilIndent = -1;
    }

    // Check if this item should be excluded by title
    if (EXCLUDE_TITLES.length > 0 && EXCLUDE_TITLES.includes(m[2])) {
      excludeUntilIndent = indent;
      continue;
    }
    const title = m[2];
    const url = toUrl(m[3]);
    const node = { title, url };

    if (stack.length === 0) {
      items.push(node);
      stack.push({ indent, list: items });
    } else {
      // Pop until we find a level strictly less than current indent
      while (stack.length > 1 && stack[stack.length - 1].indent >= indent) {
        stack.pop();
      }

      const top = stack[stack.length - 1];
      if (indent > top.indent) {
        // Child of last node in top.list
        const parent = top.list[top.list.length - 1];
        if (!parent.children) parent.children = [];
        parent.children.push(node);
        stack.push({ indent, list: parent.children });
      } else {
        top.list.push(node);
      }
    }
  }

  return items;
}

// Prune tree to MAX_SIDEBAR_DEPTH levels, but keep children array for nodes that
// have children so the JS can still render a chevron/expand button if needed.
function pruneDepth(items, depth = 1) {
  if (!items) return undefined;
  return items.map(item => {
    const node = { title: item.title, url: item.url };
    if (item.children && item.children.length > 0 && depth < MAX_SIDEBAR_DEPTH) {
      node.children = pruneDepth(item.children, depth + 1);
    }
    return node;
  });
}

function countItems(items) {
  if (!items) return 0;
  return items.reduce((n, item) => n + 1 + countItems(item.children), 0);
}

const text = fs.readFileSync(INDEX, "utf-8");
const fullSidebar = parseSidebar(text);
const sidebar = pruneDepth(fullSidebar);

const totalFull = countItems(fullSidebar);
const totalPruned = countItems(sidebar);

// Output JSON for client-side sidebar rendering
fs.writeFileSync(JSON_OUTPUT, JSON.stringify(sidebar, null, 2), "utf-8");
console.log(`Generated ${JSON_OUTPUT} with ${totalPruned} items (pruned from ${totalFull} at depth ${MAX_SIDEBAR_DEPTH})`);
