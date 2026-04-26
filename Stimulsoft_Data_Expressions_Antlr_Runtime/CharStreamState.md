---
title: "CharStreamState Class"
---

## CharStreamState Class

**Namespace:** `Stimulsoft.Data.Expressions.Antlr.Runtime`

When walking ahead with cyclic DFA or for syntactic predicates,
 we need to record the state of the input stream (char index,
 line, etc...) so that we can rewind the state after scanning ahead.
 This is the complete state of a stream.

### Fields

| Field | Type | Description |
| --- | --- | --- |
| **charPositionInLine** | number | What char position 0..n-1 in line is scanner before processing buffer[p]? |
| **line** | number | What line number is the scanner at before processing buffer[p]? |
| **p** | number | Index into the char stream of next lookahead char |
