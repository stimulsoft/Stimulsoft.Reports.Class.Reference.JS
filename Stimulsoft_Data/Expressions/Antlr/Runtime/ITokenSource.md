---
title: "ITokenSource Interface"
---

## ITokenSource Interface

**Namespace:** `Stimulsoft.Data.Expressions.Antlr.Runtime`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **nextToken** | [IToken](IToken.md) | Return a Token object from your input stream (usually a CharStream). Do not fail/return upon lexing error; keep chewing on the characters until you get a good one; errors are not passed through to the parser. |

---

### Method Details

#### nextToken

**nextToken**(): [IToken](IToken.md)

Return a Token object from your input stream (usually a CharStream).
 Do not fail/return upon lexing error; keep chewing on the characters
 until you get a good one; errors are not passed through to the parser.

**Returns** [IToken](IToken.md)

