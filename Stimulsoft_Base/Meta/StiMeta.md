---
title: "StiMeta<T> Class"
---

## StiMeta<T> Class

**Namespace:** `Stimulsoft.Base.Meta`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(string \| string[] originalName) |  |

**constructor**(**originalName**: string | string[])

**Parameters**

- **originalName** (string | string[])  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **check** | [StiMeta](StiMeta.md)<T> |  |
| **loadFromJsonObject** | void |  |
| **loadFromXml** | void |  |
| **saveToJsonObject** | void |  |
| **setXml** | [StiMeta](StiMeta.md)<T> |  |

---

### Method Details

#### check

**check**(**checkValue**: (mode?: StiJsonSaveMode)): [StiMeta](StiMeta.md)<T>

**Parameters**

- **checkValue** ((mode?: StiJsonSaveMode))  

**Returns** [StiMeta](StiMeta.md)<T>


---

#### loadFromJsonObject

**loadFromJsonObject**(**property**: [StiJson](../StiJson.md), **obj**: [IStiJsonReportObject](../JsonReportObject/IStiJsonReportObject.md)): void

**Parameters**

- **property** ([StiJson](../StiJson.md))  
- **obj** ([IStiJsonReportObject](../JsonReportObject/IStiJsonReportObject.md))  


---

#### loadFromXml

**loadFromXml**(**node**: [XmlNode](../../Stimulsoft_System/Xml/XmlNode.md), **obj**: [IStiJsonReportObject](../JsonReportObject/IStiJsonReportObject.md)): void

**Parameters**

- **node** ([XmlNode](../../Stimulsoft_System/Xml/XmlNode.md))  
- **obj** ([IStiJsonReportObject](../JsonReportObject/IStiJsonReportObject.md))  


---

#### saveToJsonObject

**saveToJsonObject**(**jObject**: [StiJson](../StiJson.md), **obj**: any, **mode**: [StiJsonSaveMode](../StiJsonSaveMode.md)): void

**Parameters**

- **jObject** ([StiJson](../StiJson.md))  
- **obj** (any)  
- **mode** ([StiJsonSaveMode](../StiJsonSaveMode.md))  


---

#### setXml

**setXml**(**setValueXml**: (value: XmlNode)): [StiMeta](StiMeta.md)<T>

**Parameters**

- **setValueXml** ((value: XmlNode))  

**Returns** [StiMeta](StiMeta.md)<T>

