---
title: "RewriteOperation Class"
---

## RewriteOperation Class

**Namespace:** `Stimulsoft.Data.Expressions.Antlr.Runtime`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(TokenRewriteStream stream, number index, string text) |  |

**constructor**(**stream**: TokenRewriteStream, **index**: number, **text**: string)

**Parameters**

- **stream** (TokenRewriteStream)  
- **index** (number)  
- **text** (string)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **execute** | number | Execute the rewrite operation by possibly adding to the buffer. Return the index of the next token to operate on. |
| **toString** | string |  |

---

### Method Details

#### execute

**execute**(**buf**: string): number

Execute the rewrite operation by possibly adding to the buffer.
 Return the index of the next token to operate on.

**Parameters**

- **buf** (string)  

**Returns** number


---

#### toString

**toString**(): string

**Returns** string


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **stream** | TokenRewriteStream |  |
