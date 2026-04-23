---
title: "StiMetaTag Class"
---

## StiMetaTag Class

**Namespace:** `Stimulsoft.Report`

### Inheritance

Implements: [ICloneable](../Stimulsoft_System/ICloneable.md), [IStiJsonReportObject](../Stimulsoft_Base/JsonReportObject/IStiJsonReportObject.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(string name, string tag) |  |

**constructor**(**name**: string, **tag**: string)

**Parameters**

- **name** (string)  
- **tag** (string)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | any | Creates a new object that is a copy of the current instance. |
| **implements** | any[] |  |
| **loadFromJsonObject** | void |  |
| **loadFromXml** | void |  |
| **saveToJsonObject** | [StiJson](../Stimulsoft_Base/StiJson.md) |  |

---

### Method Details

#### clone

**clone**(): any

Creates a new object that is a copy of the current instance.

**Returns** any — A new object that is a copy of this instance.


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

**loadFromXml**(**xmlNode**: [XmlNode](../Stimulsoft_System/Xml/XmlNode.md)): void

**Parameters**

- **xmlNode** ([XmlNode](../Stimulsoft_System/Xml/XmlNode.md))  


---

#### saveToJsonObject

**saveToJsonObject**(**mode**: [StiJsonSaveMode](../Stimulsoft_Base/StiJsonSaveMode.md)): [StiJson](../Stimulsoft_Base/StiJson.md)

**Parameters**

- **mode** ([StiJsonSaveMode](../Stimulsoft_Base/StiJsonSaveMode.md))  

**Returns** [StiJson](../Stimulsoft_Base/StiJson.md)

