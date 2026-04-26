---
title: "StiEvent Class"
---

## StiEvent Class

**Namespace:** `Stimulsoft.Report.Events`

### Inheritance

Implements: [ICloneable](../Stimulsoft_System/ICloneable.md)  

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **isBlockly** | boolean |  |
| **isScript** | boolean |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | any |  |
| **implements** | any[] |  |
| **loadFromJsonObject** | void |  |
| **loadFromXml** | void |  |
| **saveToJsonObject** | [StiJson](../Stimulsoft_Base/StiJson.md) |  |

---

### Method Details

#### clone

**clone**(): any

**Returns** any


---

#### implements

**implements**(): any[]

**Returns** any[]


---

#### loadFromJsonObject

**loadFromJsonObject**(**jObject**: [StiJson](../Stimulsoft_Base/StiJson.md)): void

**Parameters**

- **jObject** ([StiJson](../Stimulsoft_Base/StiJson.md))  


---

#### loadFromXml

**loadFromXml**(**xmlNode**: [XmlNode](../Stimulsoft_System_Xml/XmlNode.md)): void

**Parameters**

- **xmlNode** ([XmlNode](../Stimulsoft_System_Xml/XmlNode.md))  


---

#### saveToJsonObject

**saveToJsonObject**(**mode**: [StiJsonSaveMode](../Stimulsoft_Base/StiJsonSaveMode.md)): [StiJson](../Stimulsoft_Base/StiJson.md)

**Parameters**

- **mode** ([StiJsonSaveMode](../Stimulsoft_Base/StiJsonSaveMode.md))  

**Returns** [StiJson](../Stimulsoft_Base/StiJson.md)


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **script** | any |  |
