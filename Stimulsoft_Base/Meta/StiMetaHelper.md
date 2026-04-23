---
title: "StiMetaHelper Class"
---

## StiMetaHelper Class

**Namespace:** `Stimulsoft.Base.Meta`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **loadFromJsonObject** `static` | void |  |
| **loadFromXml** `static` | void |  |
| **saveToJsonObject** `static` | [StiJson](../StiJson.md) |  |

---

### Method Details

#### loadFromJsonObject `static`

**loadFromJsonObject**(**jObject**: [StiJson](../StiJson.md), **obj**: any): void

**Parameters**

- **jObject** ([StiJson](../StiJson.md))  
- **obj** (any)  


---

#### loadFromXml `static`

**loadFromXml**(**xmlNode**: [XmlNode](../../Stimulsoft_System/Xml/XmlNode.md), **obj**: any): void

**Parameters**

- **xmlNode** ([XmlNode](../../Stimulsoft_System/Xml/XmlNode.md))  
- **obj** (any)  


---

#### saveToJsonObject `static`

**saveToJsonObject**(**mode**: [StiJsonSaveMode](../StiJsonSaveMode.md), **obj**: { meta(): StiMeta[] }, **jObject**: any): [StiJson](../StiJson.md)

**Parameters**

- **mode** ([StiJsonSaveMode](../StiJsonSaveMode.md))  
- **obj** ({ meta(): StiMeta[] })  
- **jObject** (any)  

**Returns** [StiJson](../StiJson.md)

