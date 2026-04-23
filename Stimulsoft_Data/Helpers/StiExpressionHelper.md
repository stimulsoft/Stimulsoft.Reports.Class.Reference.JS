---
title: "StiExpressionHelper Class"
---

## StiExpressionHelper Class

**Namespace:** `Stimulsoft.Data.Helpers`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **compile** `static` | [LogicalExpression](../Expressions/NCalc/Domain/LogicalExpression.md) |  |
| **escapeExpression** `static` | string |  |
| **fetchBlocksFromExpression** `static` | string[] |  |
| **getArguments** `static` | string[] |  |
| **getFirstArgumentFromExpression** `static` | string |  |
| **getFunction** `static` | string |  |
| **isAggregationFunctionPresent** `static` | boolean |  |
| **isExpression** `static` | boolean |  |
| **isFunctionPresent** `static` | boolean |  |
| **isPercentOfGrandTotal** `static` | boolean |  |
| **isThisExpression** `static` | boolean |  |
| **isTimeExpression** `static` | boolean |  |
| **newExpression** `static` | [Stimulsoft.Data.Expressions.NCalc.Expression](../Expressions/NCalc/Expression.md) |  |
| **parseReportExpression** `static` | string |  |
| **prepareExpression** `static` | string |  |
| **removeFunction** `static` | string |  |
| **removeRelations** `static` | string |  |
| **replaceExpressionBlocksByValues** `static` | string |  |
| **replaceFunction** `static` | string |  |

---

### Method Details

#### compile `static`

**compile**(**expression**: string): [LogicalExpression](../Expressions/NCalc/Domain/LogicalExpression.md)

**Parameters**

- **expression** (string)  

**Returns** [LogicalExpression](../Expressions/NCalc/Domain/LogicalExpression.md)


---

#### escapeExpression `static`

**escapeExpression**(**expression**: string): string

**Parameters**

- **expression** (string)  

**Returns** string


---

#### fetchBlocksFromExpression `static`

**fetchBlocksFromExpression**(**inputExpression**: string): string[]

**Parameters**

- **inputExpression** (string)  

**Returns** string[]


---

#### getArguments `static`

**getArguments**(**expression**: string): string[]

**Parameters**

- **expression** (string)  

**Returns** string[]


---

#### getFirstArgumentFromExpression `static`

**getFirstArgumentFromExpression**(**expression**: string): string

**Parameters**

- **expression** (string)  

**Returns** string


---

#### getFunction `static`

**getFunction**(**expression**: string): string

**Parameters**

- **expression** (string)  

**Returns** string


---

#### isAggregationFunctionPresent `static`

**isAggregationFunctionPresent**(**expression**: string): boolean

**Parameters**

- **expression** (string)  

**Returns** boolean


---

#### isExpression `static`

**isExpression**(**str**: string): boolean

**Parameters**

- **str** (string)  

**Returns** boolean


---

#### isFunctionPresent `static`

**isFunctionPresent**(**expression**: string): boolean

**Parameters**

- **expression** (string)  

**Returns** boolean


---

#### isPercentOfGrandTotal `static`

**isPercentOfGrandTotal**(**expression**: string): boolean

**Parameters**

- **expression** (string)  

**Returns** boolean


---

#### isThisExpression `static`

**isThisExpression**(**str**: string): boolean

**Parameters**

- **str** (string)  

**Returns** boolean


---

#### isTimeExpression `static`

**isTimeExpression**(**str**: string): boolean

**Parameters**

- **str** (string)  

**Returns** boolean


---

#### newExpression `static`

**newExpression**(**expression**: string): [Stimulsoft.Data.Expressions.NCalc.Expression](../Expressions/NCalc/Expression.md)

**Parameters**

- **expression** (string)  

**Returns** [Stimulsoft.Data.Expressions.NCalc.Expression](../Expressions/NCalc/Expression.md)


---

#### parseReportExpression `static`

**parseReportExpression**(**report**: IStiReport, **text**: string, **withBraces**: boolean, **allowReturnNull**: any): string

**Parameters**

- **report** (IStiReport)  
- **text** (string)  
- **withBraces** (boolean)  
- **allowReturnNull** (any)  

**Returns** string


---

#### prepareExpression `static`

**prepareExpression**(**expression**: string): string

**Parameters**

- **expression** (string)  

**Returns** string


---

#### removeFunction `static`

**removeFunction**(**expression**: string): string

**Parameters**

- **expression** (string)  

**Returns** string


---

#### removeRelations `static`

**removeRelations**(**expression**: string, **dataSources**: IStiAppDataSource[]): string

**Parameters**

- **expression** (string)  
- **dataSources** (IStiAppDataSource[])  

**Returns** string


---

#### replaceExpressionBlocksByValues `static`

**replaceExpressionBlocksByValues**(**inputExpression**: string, **values**: string[]): string

**Parameters**

- **inputExpression** (string)  
- **values** (string[])  

**Returns** string


---

#### replaceFunction `static`

**replaceFunction**(**expression**: string, **newFunction**: string): string

**Parameters**

- **expression** (string)  
- **newFunction** (string)  

**Returns** string

