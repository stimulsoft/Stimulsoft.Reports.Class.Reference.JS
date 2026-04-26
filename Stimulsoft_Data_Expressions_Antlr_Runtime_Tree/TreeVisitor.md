---
title: "TreeVisitor Class"
---

## TreeVisitor Class

**Namespace:** `Stimulsoft.Data.Expressions.Antlr.Runtime.Tree`

Do a depth first walk of a tree, applying pre() and post() actions as we go.

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([ITreeAdaptor](ITreeAdaptor.md) adaptor) |  |

**constructor**(**adaptor**: [ITreeAdaptor](ITreeAdaptor.md))

**Parameters**

- **adaptor** ([ITreeAdaptor](ITreeAdaptor.md))  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **visit** | void | Visit every node in tree t and trigger an action for each node before/after having visited all of its children. Bottom up walk. Execute both actions even if t has no children. Ignore return results from transforming children since they will have altered the child list of this node (their parent). Return result of applying post action to this node. |

---

### Method Details

#### visit

**visit**(**t**: any, **action**: [ITreeVisitorAction](ITreeVisitorAction.md)): void

Visit every node in tree t and trigger an action for each node
 before/after having visited all of its children.  Bottom up walk.
 Execute both actions even if t has no children.  Ignore return
 results from transforming children since they will have altered
 the child list of this node (their parent).  Return result of
 applying post action to this node.

**Parameters**

- **t** (any)  
- **action** ([ITreeVisitorAction](ITreeVisitorAction.md))  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **adaptor** | [ITreeAdaptor](ITreeAdaptor.md) |  |
| **t** | any |  |
| **t** | any |  |
