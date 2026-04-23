---
title: "StiIndicator Class"
---

## StiIndicator Class

**Namespace:** `Stimulsoft.Report.Components`

### Inheritance

Implements: [IStiJsonReportObject](../../Stimulsoft_Base/JsonReportObject/IStiJsonReportObject.md), [IAsIs](../../Stimulsoft_System/IAsIs.md)  

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **implements** | any[] |  |
| **loadFromJsonObject** | void |  |
| **loadFromJsonObjectInternal** `static` | [StiIndicator](StiIndicator.md) |  |
| **loadFromXml** *(+1 overloads)* | void |  |
| **meta** | [StiMeta](../../Stimulsoft_Base/Meta/StiMeta.md)[] |  |
| **saveToJsonObject** | [StiJson](../../Stimulsoft_Base/StiJson.md) |  |

---

### Method Details

#### implements

**implements**(): any[]

**Returns** any[]


---

#### loadFromJsonObject

**loadFromJsonObject**(**jObject**: [StiJson](../../Stimulsoft_Base/StiJson.md)): void

**Parameters**

- **jObject** ([StiJson](../../Stimulsoft_Base/StiJson.md))  


---

#### loadFromJsonObjectInternal `static`

**loadFromJsonObjectInternal**(**jObject**: [StiJson](../../Stimulsoft_Base/StiJson.md)): [StiIndicator](StiIndicator.md)

**Parameters**

- **jObject** ([StiJson](../../Stimulsoft_Base/StiJson.md))  

**Returns** [StiIndicator](StiIndicator.md)


---

#### loadFromXml

**loadFromXml**(**xmlNode**: [XmlNode](../../Stimulsoft_System/Xml/XmlNode.md)): void

**Parameters**

- **xmlNode** ([XmlNode](../../Stimulsoft_System/Xml/XmlNode.md))  

---

**loadFromXml**(**text**: string): [StiIndicator](StiIndicator.md)

**Parameters**

- **text** (string)  

**Returns** [StiIndicator](StiIndicator.md)


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
