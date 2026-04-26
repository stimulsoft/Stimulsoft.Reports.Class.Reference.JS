---
title: "StiValidationSettings Class"
---

## StiValidationSettings Class

**Namespace:** `Stimulsoft.Report.Dictionary`

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **isEmpty** | boolean |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **createFromXml** `static` | [StiValidationSettings](StiValidationSettings.md) |  |
| **parse** `static` | [StiValidationSettings](StiValidationSettings.md) |  |
| **saveToXml** `static` | string |  |
| **toString** `static` | string |  |
| **validate** | void |  |

---

### Method Details

#### createFromXml `static`

**createFromXml**(**xmlNode**: [XmlNode](../Stimulsoft_System_Xml/XmlNode.md)): [StiValidationSettings](StiValidationSettings.md)

**Parameters**

- **xmlNode** ([XmlNode](../Stimulsoft_System_Xml/XmlNode.md))  

**Returns** [StiValidationSettings](StiValidationSettings.md)


---

#### parse `static`

**parse**(**validationString**: string): [StiValidationSettings](StiValidationSettings.md)

**Parameters**

- **validationString** (string)  

**Returns** [StiValidationSettings](StiValidationSettings.md)


---

#### saveToXml `static`

**saveToXml**(**settings**: [StiValidationSettings](StiValidationSettings.md)): string

**Parameters**

- **settings** ([StiValidationSettings](StiValidationSettings.md))  

**Returns** string


---

#### toString `static`

**toString**(**settings**: [StiValidationSettings](StiValidationSettings.md)): string

**Parameters**

- **settings** ([StiValidationSettings](StiValidationSettings.md))  

**Returns** string


---

#### validate

**validate**(**value**: any, **type**: [Type](../Stimulsoft_System/Type.md), **report**: [StiReport](../Stimulsoft_Report/StiReport.md), **variable**: StiVariable): void

**Parameters**

- **value** (any)  
- **type** ([Type](../Stimulsoft_System/Type.md))  
- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **variable** (StiVariable)  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **expression** | any |  |
| **expressionLevel** | any |  |
| **expressionMessage** | any |  |
| **max** | any |  |
| **min** | any |  |
| **patternLevel** | any |  |
| **patternMessage** | any |  |
| **patternRegex** | any |  |
| **patternType** | any |  |
| **rangeLevel** | any |  |
| **rangeMessage** | any |  |
| **required** | any |  |
| **settings** | any |  |
