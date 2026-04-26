---
title: "StiUserFunction Class"
---

## StiUserFunction Class

**Namespace:** `Stimulsoft.Report.Dictionary`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(any name, any category, any returnType) |  |

**constructor**(**name**: any, **category**: any, **returnType**: any)

**Parameters**

- **name** (any)  
- **category** (any)  
- **returnType** (any)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | [StiUserFunction](StiUserFunction.md) |  |
| **getFullScript** | string |  |
| **meta** | [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[] |  |

---

### Method Details

#### clone

**clone**(): [StiUserFunction](StiUserFunction.md)

**Returns** [StiUserFunction](StiUserFunction.md)


---

#### getFullScript

**getFullScript**(**language**: [StiReportLanguageType](../Stimulsoft_Report/StiReportLanguageType.md)): string

**Parameters**

- **language** ([StiReportLanguageType](../Stimulsoft_Report/StiReportLanguageType.md))  

**Returns** string


---

#### meta

**meta**(): [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[]

**Returns** [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[]


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **arguments** | any |  |
| **category** | any |  |
| **customCategory** | any | Gets or sets a category of the function. |
| **description** | any | Gets or sets a description of the function. |
| **name** | any | Gets or sets a name of the function. |
| **returnType** | any |  |
| **scriptBlockly** | any |  |
| **scriptCSharp** | any |  |
| **scriptJS** | any |  |
| **scriptVB** | any |  |
