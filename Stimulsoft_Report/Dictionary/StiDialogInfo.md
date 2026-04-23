---
title: "StiDialogInfo Class"
---

## StiDialogInfo Class

**Namespace:** `Stimulsoft.Report.Dictionary`

### Inheritance

Implements: [IStiJsonReportObject](../../Stimulsoft_Base/JsonReportObject/IStiJsonReportObject.md), [ICloneable](../../Stimulsoft_System/ICloneable.md)  

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **validationSettings** | [StiValidationSettings](StiValidationSettings.md) |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | [StiDialogInfo](StiDialogInfo.md) |  |
| **convert** `static` | string |  |
| **getDialogInfoItems** | [StiDialogInfoItem](../StiDialogInfoItem.md)[] |  |
| **loadFromJsonObject** | void |  |
| **loadFromXml** | void |  |
| **meta** | [StiMeta](../../Stimulsoft_Base/Meta/StiMeta.md)[] |  |
| **orderBy** | [StiDialogInfoItem](../StiDialogInfoItem.md)[] |  |
| **saveToJsonObject** | [StiJson](../../Stimulsoft_Base/StiJson.md) |  |
| **setDialogInfoItems** | void |  |

---

### Method Details

#### clone

**clone**(): [StiDialogInfo](StiDialogInfo.md)

**Returns** [StiDialogInfo](StiDialogInfo.md)


---

#### convert `static`

**convert**(**value**: any): string

**Parameters**

- **value** (any)  

**Returns** string


---

#### getDialogInfoItems

**getDialogInfoItems**(**type**: [Stimulsoft.System.Type](../../Stimulsoft_System/Type.md)): [StiDialogInfoItem](../StiDialogInfoItem.md)[]

**Parameters**

- **type** ([Stimulsoft.System.Type](../../Stimulsoft_System/Type.md))  

**Returns** [StiDialogInfoItem](../StiDialogInfoItem.md)[]


---

#### loadFromJsonObject

**loadFromJsonObject**(**jObject**: [StiJson](../../Stimulsoft_Base/StiJson.md), **report**: [StiReport](../StiReport.md)): void

**Parameters**

- **jObject** ([StiJson](../../Stimulsoft_Base/StiJson.md))  
- **report** ([StiReport](../StiReport.md))  


---

#### loadFromXml

**loadFromXml**(**xmlNode**: [XmlNode](../../Stimulsoft_System/Xml/XmlNode.md), **report**: [StiReport](../StiReport.md)): void

**Parameters**

- **xmlNode** ([XmlNode](../../Stimulsoft_System/Xml/XmlNode.md))  
- **report** ([StiReport](../StiReport.md))  


---

#### meta

**meta**(): [StiMeta](../../Stimulsoft_Base/Meta/StiMeta.md)[]

**Returns** [StiMeta](../../Stimulsoft_Base/Meta/StiMeta.md)[]


---

#### orderBy

**orderBy**(**items**: [StiDialogInfoItem](../StiDialogInfoItem.md)[]): [StiDialogInfoItem](../StiDialogInfoItem.md)[]

**Parameters**

- **items** ([StiDialogInfoItem](../StiDialogInfoItem.md)[])  

**Returns** [StiDialogInfoItem](../StiDialogInfoItem.md)[]


---

#### saveToJsonObject

**saveToJsonObject**(**mode**: [StiJsonSaveMode](../../Stimulsoft_Base/StiJsonSaveMode.md)): [StiJson](../../Stimulsoft_Base/StiJson.md)

**Parameters**

- **mode** ([StiJsonSaveMode](../../Stimulsoft_Base/StiJsonSaveMode.md))  

**Returns** [StiJson](../../Stimulsoft_Base/StiJson.md)


---

#### setDialogInfoItems

**setDialogInfoItems**(**items**: [StiDialogInfoItem](../StiDialogInfoItem.md)[], **type**: [Stimulsoft.System.Type](../../Stimulsoft_System/Type.md)): void

**Parameters**

- **items** ([StiDialogInfoItem](../StiDialogInfoItem.md)[])  
- **type** ([Stimulsoft.System.Type](../../Stimulsoft_System/Type.md))  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **_hash** | [StiMeta](../../Stimulsoft_Base/Meta/StiMeta.md)[] |  |
