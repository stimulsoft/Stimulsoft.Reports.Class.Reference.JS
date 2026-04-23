---
title: "StiFunction Class"
---

## StiFunction Class

**Namespace:** `Stimulsoft.Report.Dictionary`

### Inheritance

Implements: [IComparable](../../Stimulsoft_System/IComparable.md), IStiAppFunction  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(string category, string groupFunctionName, string functionName, string description, string typeOfFunction, [Type](../../Stimulsoft_System/Type.md) returnType, any returnDescription, [Type](../../Stimulsoft_System/Type.md)[] argumentTypes, string[] argumentNames, string[] argumentDescriptions) |  |

**constructor**(**category**: string, **groupFunctionName**: string, **functionName**: string, **description**: string, **typeOfFunction**: string, **returnType**: [Type](../../Stimulsoft_System/Type.md), **returnDescription**: any, **argumentTypes**: [Type](../../Stimulsoft_System/Type.md)[], **argumentNames**: string[], **argumentDescriptions**: string[])

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


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **argumentDescriptions** | string[] |  |
| **argumentNames** | string[] |  |
| **argumentTypes** | [Type](../../Stimulsoft_System/Type.md)[] |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **compareTo** | number |  |
| **convertTypeToString** | string |  |
| **getFunctionString** | string |  |
| **getKey** | string |  |
| **getLongFunctionString** | string |  |
| **getName** | string |  |
| **implements** | any[] |  |
| **invoke** | any |  |
| **setKey** | void |  |
| **toString** | string |  |

---

### Method Details

#### compareTo

**compareTo**(**func**: [StiFunction](StiFunction.md)): number

**Parameters**

- **func** ([StiFunction](StiFunction.md))  

**Returns** number


---

#### convertTypeToString

**convertTypeToString**(**typeT**: [Type](../../Stimulsoft_System/Type.md), **language**: [StiReportLanguageType](../StiReportLanguageType.md)): string

**Parameters**

- **typeT** ([Type](../../Stimulsoft_System/Type.md))  
- **language** ([StiReportLanguageType](../StiReportLanguageType.md))  

**Returns** string


---

#### getFunctionString

**getFunctionString**(**language**: [StiReportLanguageType](../StiReportLanguageType.md), **addFunctionName**: any): string

**Parameters**

- **language** ([StiReportLanguageType](../StiReportLanguageType.md))  
- **addFunctionName** (any)  

**Returns** string


---

#### getKey

**getKey**(): string

**Returns** string


---

#### getLongFunctionString

**getLongFunctionString**(**language**: [StiReportLanguageType](../StiReportLanguageType.md)): string

**Parameters**

- **language** ([StiReportLanguageType](../StiReportLanguageType.md))  

**Returns** string


---

#### getName

**getName**(): string

**Returns** string


---

#### implements

**implements**(): any[]

**Returns** any[]


---

#### invoke

**invoke**(**args**: any[]): any

**Parameters**

- **args** (any[])  

**Returns** any


---

#### setKey

**setKey**(**key**: string): void

**Parameters**

- **key** (string)  


---

#### toString

**toString**(): string

**Returns** string

