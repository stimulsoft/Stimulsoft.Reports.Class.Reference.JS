---
title: "StiFunctions Class"
---

## StiFunctions Class

**Namespace:** `Stimulsoft.Report.Dictionary`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **StiFunctions** `static` | void |  |
| **addFunction** `static` | [StiFunction](StiFunction.md) |  |
| **getAssebliesOfFunctions** `static` | string[] |  |
| **getCategories** `static` | string[] |  |
| **getFunctions** `static` | [StiFunction](StiFunction.md)[] |  |
| **getFunctionsEx** `static` | [StiFunction](StiFunction.md)[] |  |
| **getFunctionsGrouppedInCategories** `static` | [Hashtable](../../Stimulsoft_System/Collections/Hashtable.md)<string, [StiFunction](StiFunction.md)[]> |  |
| **getFunctionsList** `static` | [StiFunction](StiFunction.md)[] |  |
| **removeFunction** `static` | void |  |

---

### Method Details

#### StiFunctions `static`

**StiFunctions**(): void


---

#### addFunction `static`

**addFunction**(**category**: string, **groupFunctionName**: string, **functionName**: string, **description**: string, **typeOfFunction**: string, **returnType**: [Type](../../Stimulsoft_System/Type.md), **returnDescription**: any, **argumentTypes**: [Type](../../Stimulsoft_System/Type.md)[], **argumentNames**: string[], **argumentDescriptions**: string[], **jsFunction**: Function): [StiFunction](StiFunction.md)

**Parameters**

- **category** (string)  
- **groupFunctionName** (string)  
- **functionName** (string)  
- **description** (string)  
- **typeOfFunction** (string)  
- **returnType** ([Type](../../Stimulsoft_System/Type.md))  
- **returnDescription** (any)  
- **argumentTypes** ([Type](../../Stimulsoft_System/Type.md)[])  
- **argumentNames** (string[])  
- **argumentDescriptions** (string[])  
- **jsFunction** (Function)  

**Returns** [StiFunction](StiFunction.md)


---

#### getAssebliesOfFunctions `static`

**getAssebliesOfFunctions**(): string[]

**Returns** string[]


---

#### getCategories `static`

**getCategories**(): string[]

**Returns** string[]


---

#### getFunctions `static`

**getFunctions**(**categoryOrIsCompile**: string | boolean): [StiFunction](StiFunction.md)[]

**Parameters**

- **categoryOrIsCompile** (string | boolean)  

**Returns** [StiFunction](StiFunction.md)[]


---

#### getFunctionsEx `static`

**getFunctionsEx**(**report**: [StiReport](../StiReport.md), **functionName**: string, **isCompile**: boolean): [StiFunction](StiFunction.md)[]

**Parameters**

- **report** ([StiReport](../StiReport.md))  
- **functionName** (string)  
- **isCompile** (boolean)  

**Returns** [StiFunction](StiFunction.md)[]


---

#### getFunctionsGrouppedInCategories `static`

**getFunctionsGrouppedInCategories**(): [Hashtable](../../Stimulsoft_System/Collections/Hashtable.md)<string, [StiFunction](StiFunction.md)[]>

**Returns** [Hashtable](../../Stimulsoft_System/Collections/Hashtable.md)<string, [StiFunction](StiFunction.md)[]>


---

#### getFunctionsList `static`

**getFunctionsList**(**functionName**: string): [StiFunction](StiFunction.md)[]

**Parameters**

- **functionName** (string)  

**Returns** [StiFunction](StiFunction.md)[]


---

#### removeFunction `static`

**removeFunction**(**functionName**: string): void

**Parameters**

- **functionName** (string)  

