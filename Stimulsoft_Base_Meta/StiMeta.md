---
title: "StiMeta<T> Class"
---

## StiMeta<T> Class

**Namespace:** `Stimulsoft.Base.Meta`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(string \| string[] originalName) |  |

**constructor**(**originalName**: string \| string[])

**Parameters**

- **originalName** (string \| string[])  


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

**loadFromJsonObject**(**property**: [StiJson](../Stimulsoft_Base/StiJson.md), **obj**: [IStiJsonReportObject](../Stimulsoft_Base_JsonReportObject/IStiJsonReportObject.md)): void

**Parameters**

- **property** ([StiJson](../Stimulsoft_Base/StiJson.md))  
- **obj** ([IStiJsonReportObject](../Stimulsoft_Base_JsonReportObject/IStiJsonReportObject.md))  


---

#### loadFromXml

**loadFromXml**(**node**: [XmlNode](../Stimulsoft_System_Xml/XmlNode.md), **obj**: [IStiJsonReportObject](../Stimulsoft_Base_JsonReportObject/IStiJsonReportObject.md)): void

**Parameters**

- **node** ([XmlNode](../Stimulsoft_System_Xml/XmlNode.md))  
- **obj** ([IStiJsonReportObject](../Stimulsoft_Base_JsonReportObject/IStiJsonReportObject.md))  


---

#### saveToJsonObject

**saveToJsonObject**(**jObject**: [StiJson](../Stimulsoft_Base/StiJson.md), **obj**: any, **mode**: [StiJsonSaveMode](../Stimulsoft_Base/StiJsonSaveMode.md)): void

**Parameters**

- **jObject** ([StiJson](../Stimulsoft_Base/StiJson.md))  
- **obj** (any)  
- **mode** ([StiJsonSaveMode](../Stimulsoft_Base/StiJsonSaveMode.md))  


---

#### setXml

**setXml**(**setValueXml**: (value: XmlNode)): [StiMeta](StiMeta.md)<T>

**Parameters**

- **setValueXml** ((value: XmlNode))  

**Returns** [StiMeta](StiMeta.md)<T>


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **originalName** | string[] |  |
