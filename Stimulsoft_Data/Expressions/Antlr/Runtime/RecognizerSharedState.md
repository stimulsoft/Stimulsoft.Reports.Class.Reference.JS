---
title: "RecognizerSharedState Class"
---

## RecognizerSharedState Class

**Namespace:** `Stimulsoft.Data.Expressions.Antlr.Runtime`

The set of fields needed by an abstract recognizer to recognize input
 and recover from errors etc...  As a separate state object, it can be
 shared among multiple grammars; e.g., when one grammar imports another.
 These fields are publically visible but the actual state pointer per
 parser is protected.

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**() |  |

**constructor**()


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **recognizerSharedState** `static` | [RecognizerSharedState](RecognizerSharedState.md) |  |

---

### Method Details

#### recognizerSharedState `static`

**recognizerSharedState**(**state**: [RecognizerSharedState](RecognizerSharedState.md)): [RecognizerSharedState](RecognizerSharedState.md)

**Parameters**

- **state** ([RecognizerSharedState](RecognizerSharedState.md))  

**Returns** [RecognizerSharedState](RecognizerSharedState.md)

