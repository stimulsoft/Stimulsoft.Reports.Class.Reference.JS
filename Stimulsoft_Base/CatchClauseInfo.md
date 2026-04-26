---
title: "CatchClauseInfo Class"
---

## CatchClauseInfo Class

**Namespace:** `Stimulsoft.Base`

Represents information about a catch clause in a try-catch-finally statement.

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(Type \| null catchType, string \| null variableName, [TokenState](TokenState.md) blockStart) |  |

**constructor**(**catchType**: Type \| null, **variableName**: string \| null, **blockStart**: [TokenState](TokenState.md))

**Parameters**

- **catchType** (Type \| null)  
- **variableName** (string \| null)  
- **blockStart** ([TokenState](TokenState.md))  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **blockStart** | [TokenState](TokenState.md) |  |
| **catchType** | Type | null |  |
| **variableName** | string | null |  |
