---
title: "ITreeVisitorAction Interface"
---

## ITreeVisitorAction Interface

**Namespace:** `Stimulsoft.Data.Expressions.Antlr.Runtime.Tree`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **post** | any | Execute an action after visiting children of t. Return t or a rewritten t. It is up to the visitor to decide what to do with the return value. |
| **pre** | any | Execute an action before visiting children of t. Return t or a rewritten t. It is up to the visitor to decide what to do with the return value. Children of returned value will be visited if using TreeVisitor.visit(). |

---

### Method Details

#### post

**post**(**t**: any): any

Execute an action after visiting children of t.  Return t or
 a rewritten t.  It is up to the visitor to decide what to do
 with the return value.

**Parameters**

- **t** (any)  

**Returns** any


---

#### pre

**pre**(**t**: any): any

Execute an action before visiting children of t.  Return t or
 a rewritten t.  It is up to the visitor to decide what to do
 with the return value.  Children of returned value will be
 visited if using TreeVisitor.visit().

**Parameters**

- **t** (any)  

**Returns** any

