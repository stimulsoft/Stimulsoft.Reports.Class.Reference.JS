---
title: "StiFilter Class"
---

## StiFilter Class

**Namespace:** `Stimulsoft.Report.Components`

### Inheritance

Implements: [ICloneable](../../Stimulsoft_System/ICloneable.md), [IStiJsonReportObject](../../Stimulsoft_Base/JsonReportObject/IStiJsonReportObject.md)  

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **value1** | string |  |
| **value2** | string |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | [StiFilter](StiFilter.md) |  |
| **implements** | any[] |  |
| **loadFromJsonObject** | void |  |
| **loadFromXml** | void |  |
| **meta** | [StiMeta](../../Stimulsoft_Base/Meta/StiMeta.md)[] |  |
| **saveToJsonObject** | [StiJson](../../Stimulsoft_Base/StiJson.md) |  |

---

### Method Details

#### clone

**clone**(): [StiFilter](StiFilter.md)

**Returns** [StiFilter](StiFilter.md)


---

#### implements

**implements**(): any[]

**Returns** any[]


---

#### loadFromJsonObject

**loadFromJsonObject**(**jObject**: [StiJson](../../Stimulsoft_Base/StiJson.md)): void

**Parameters**

- **jObject** ([StiJson](../../Stimulsoft_Base/StiJson.md))  


---

#### loadFromXml

**loadFromXml**(**xmlNode**: [XmlNode](../../Stimulsoft_System/Xml/XmlNode.md)): void

**Parameters**

- **xmlNode** ([XmlNode](../../Stimulsoft_System/Xml/XmlNode.md))  


---

#### meta

**meta**(): [StiMeta](../../Stimulsoft_Base/Meta/StiMeta.md)[]

**Returns** [StiMeta](../../Stimulsoft_Base/Meta/StiMeta.md)[]


---

#### saveToJsonObject

**saveToJsonObject**(**mode**: [StiJsonSaveMode](../../Stimulsoft_Base/StiJsonSaveMode.md)): [StiJson](../../Stimulsoft_Base/StiJson.md)

**Parameters**

- **mode** ([StiJsonSaveMode](../../Stimulsoft_Base/StiJsonSaveMode.md))  

**Returns** [StiJson](../../Stimulsoft_Base/StiJson.md)


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **_hash** | [StiMeta](../../Stimulsoft_Base/Meta/StiMeta.md)[] |  |
