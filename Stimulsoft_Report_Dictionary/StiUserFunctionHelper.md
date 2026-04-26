---
title: "StiUserFunctionHelper Class"
---

## StiUserFunctionHelper Class

**Namespace:** `Stimulsoft.Report.Dictionary`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **convertArgumentTypeToString** `static` | string |  |
| **generateArguments** `static` | string |  |
| **generateFirstLineScript** `static` | string |  |
| **generateFunctionNameForDictionary** `static` | string |  |
| **getArgumentType** `static` | [Type](../Stimulsoft_System/Type.md) |  |
| **getCategoryName** `static` | string |  |
| **getReturnTypeScript** `static` | string |  |
| **invokeFunction** `static` | any |  |
| **isNameCorrectly** `static` | boolean |  |

---

### Method Details

#### convertArgumentTypeToString `static`

**convertArgumentTypeToString**(**type**: [StiUserFunctionArgumentType](StiUserFunctionArgumentType.md), **language**: [StiReportLanguageType](../Stimulsoft_Report/StiReportLanguageType.md)): string

**Parameters**

- **type** ([StiUserFunctionArgumentType](StiUserFunctionArgumentType.md))  
- **language** ([StiReportLanguageType](../Stimulsoft_Report/StiReportLanguageType.md))  

**Returns** string


---

#### generateArguments `static`

**generateArguments**(**language**: [StiReportLanguageType](../Stimulsoft_Report/StiReportLanguageType.md), **functionn**: [StiUserFunction](StiUserFunction.md)): string

**Parameters**

- **language** ([StiReportLanguageType](../Stimulsoft_Report/StiReportLanguageType.md))  
- **functionn** ([StiUserFunction](StiUserFunction.md))  

**Returns** string


---

#### generateFirstLineScript `static`

**generateFirstLineScript**(**language**: [StiReportLanguageType](../Stimulsoft_Report/StiReportLanguageType.md), **functionn**: [StiUserFunction](StiUserFunction.md)): string

**Parameters**

- **language** ([StiReportLanguageType](../Stimulsoft_Report/StiReportLanguageType.md))  
- **functionn** ([StiUserFunction](StiUserFunction.md))  

**Returns** string


---

#### generateFunctionNameForDictionary `static`

**generateFunctionNameForDictionary**(**functionn**: [StiUserFunction](StiUserFunction.md)): string

**Parameters**

- **functionn** ([StiUserFunction](StiUserFunction.md))  

**Returns** string


---

#### getArgumentType `static`

**getArgumentType**(**argumentType**: [StiUserFunctionArgumentType](StiUserFunctionArgumentType.md)): [Type](../Stimulsoft_System/Type.md)

**Parameters**

- **argumentType** ([StiUserFunctionArgumentType](StiUserFunctionArgumentType.md))  

**Returns** [Type](../Stimulsoft_System/Type.md)


---

#### getCategoryName `static`

**getCategoryName**(**functionn**: [StiUserFunction](StiUserFunction.md)): string

**Parameters**

- **functionn** ([StiUserFunction](StiUserFunction.md))  

**Returns** string


---

#### getReturnTypeScript `static`

**getReturnTypeScript**(**language**: [StiReportLanguageType](../Stimulsoft_Report/StiReportLanguageType.md), **functionn**: [StiUserFunction](StiUserFunction.md)): string

**Parameters**

- **language** ([StiReportLanguageType](../Stimulsoft_Report/StiReportLanguageType.md))  
- **functionn** ([StiUserFunction](StiUserFunction.md))  

**Returns** string


---

#### invokeFunction `static`

**invokeFunction**(**func**: [StiUserFunction](StiUserFunction.md), **report**: [StiReport](../Stimulsoft_Report/StiReport.md), **args**: any[]): any

**Parameters**

- **func** ([StiUserFunction](StiUserFunction.md))  
- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **args** (any[])  

**Returns** any


---

#### isNameCorrectly `static`

**isNameCorrectly**(**name**: string): boolean

**Parameters**

- **name** (string)  

**Returns** boolean


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **isfirst** | any |  |
| **isfirst** | any |  |
| **isfirst** | any |  |
| **isfirst** | any |  |
