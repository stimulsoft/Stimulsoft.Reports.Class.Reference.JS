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
| **saveToJsonObject** `static` | [StiJson](../Stimulsoft_Base/StiJson.md) |  |

---

### Method Details

#### loadFromJsonObject `static`

**loadFromJsonObject**(**jObject**: [StiJson](../Stimulsoft_Base/StiJson.md), **obj**: any): void

**Parameters**

- **jObject** ([StiJson](../Stimulsoft_Base/StiJson.md))  
- **obj** (any)  


---

#### loadFromXml `static`

**loadFromXml**(**xmlNode**: [XmlNode](../Stimulsoft_System_Xml/XmlNode.md), **obj**: any): void

**Parameters**

- **xmlNode** ([XmlNode](../Stimulsoft_System_Xml/XmlNode.md))  
- **obj** (any)  


---

#### saveToJsonObject `static`

**saveToJsonObject**(**mode**: [StiJsonSaveMode](../Stimulsoft_Base/StiJsonSaveMode.md), **obj**: { meta(): StiMeta[] }, **jObject**: any): [StiJson](../Stimulsoft_Base/StiJson.md)

**Parameters**

- **mode** ([StiJsonSaveMode](../Stimulsoft_Base/StiJsonSaveMode.md))  
- **obj** ({ meta(): StiMeta[] })  
- **jObject** (any)  

**Returns** [StiJson](../Stimulsoft_Base/StiJson.md)


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **metas** | any |  |
| **metas** | any |  |
| **metas** | any |  |
| **nodes** | any |  |
