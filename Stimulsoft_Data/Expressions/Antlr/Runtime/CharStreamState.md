---
title: "CharStreamState Class"
---

## CharStreamState Class

**Namespace:** `Stimulsoft.Data.Expressions.Antlr.Runtime`

When walking ahead with cyclic DFA or for syntactic predicates,
 we need to record the state of the input stream (char index,
 line, etc...) so that we can rewind the state after scanning ahead.
 This is the complete state of a stream.
