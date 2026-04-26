---
title: "TreePatternLexer Class"
---

## TreePatternLexer Class

**Namespace:** `Stimulsoft.Data.Expressions.Antlr.Runtime.Tree`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(string pattern) |  |

**constructor**(**pattern**: string)

**Parameters**

- **pattern** (string)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **nextToken** | number |  |

---

### Method Details

#### nextToken

**nextToken**(): number

**Returns** number


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **c** | number | Current char |
| **error** | any |  |
| **n** | number | How long is the pattern in char? |
| **p** | any | Index into input string |
| **pattern** | string | The tree pattern to lex like "(A B C)" |
| **sval** | any | Set when token type is ID or ARG (name mimics Java's StreamTokenizer) |
