---
title: "IToken Interface"
---

## IToken Interface

**Namespace:** `Stimulsoft.Data.Expressions.Antlr.Runtime`

### Fields

| Field | Type | Description |
| --- | --- | --- |
| **channel** | number |  |
| **charPositionInLine** | number | The index of the first character relative to the beginning of the line 0..n-1 |
| **inputStream** | ICharStream | From what character stream was this token created? You don't have to implement but it's nice to know where a Token comes from if you have include files etc... on the input. |
| **line** | number | The line number on which this token was matched; line=1..n |
| **startIndex** | number |  |
| **stopIndex** | number |  |
| **text** | string | Get the text of the token |
| **tokenIndex** | number | An index from 0..n-1 of the token object in the input stream. This must be valid in order to use the ANTLRWorks debugger. |
| **type** | number |  |
