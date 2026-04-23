---
title: "Expression Class"
---

## Expression Class

**Namespace:** `Stimulsoft.Data.Expressions.NCalc`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**() | Textual representation of the expression to evaluate. |

**constructor**()

Textual representation of the expression to evaluate.


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **cacheEnabled** `static` | boolean |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **compile** `static` | [LogicalExpression](Domain/LogicalExpression.md) |  |
| **create1** `static` | [Expression](Expression.md) |  |
| **create2** `static` | [Expression](Expression.md) |  |
| **evaluate** | any |  |
| **hasErrors** | boolean | Pre-compiles the expression in order to check syntax errors. If errors are detected, the Error property contains the message. |

---

### Method Details

#### compile `static`

**compile**(**expression**: string, **nocache**: boolean): [LogicalExpression](Domain/LogicalExpression.md)

**Parameters**

- **expression** (string)  
- **nocache** (boolean)  

**Returns** [LogicalExpression](Domain/LogicalExpression.md)


---

#### create1 `static`

**create1**(**expression**: string, **options**: [EvaluateOptions](EvaluateOptions.md)): [Expression](Expression.md)

**Parameters**

- **expression** (string)  
- **options** ([EvaluateOptions](EvaluateOptions.md))  

**Returns** [Expression](Expression.md)


---

#### create2 `static`

**create2**(**expression**: [LogicalExpression](Domain/LogicalExpression.md), **options**: [EvaluateOptions](EvaluateOptions.md)): [Expression](Expression.md)

**Parameters**

- **expression** ([LogicalExpression](Domain/LogicalExpression.md))  
- **options** ([EvaluateOptions](EvaluateOptions.md))  

**Returns** [Expression](Expression.md)


---

#### evaluate

**evaluate**(): any

**Returns** any


---

#### hasErrors

**hasErrors**(): boolean

Pre-compiles the expression in order to check syntax errors.
If errors are detected, the Error property contains the message.

**Returns** boolean — True if the expression syntax is correct, otherwiser False


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **originalExpression** | string |  |
| **parameterEnumerators** | Dictionary<string, any[]> |  |
| **parametersBackup** | Dictionary<string, any> |  |
