---
title: "StiDataLink Class"
---

## StiDataLink Class

**Namespace:** `Stimulsoft.Data.Engine`

### Inheritance

Implements: [IStiJsonReportObject](../Stimulsoft_Base_JsonReportObject/IStiJsonReportObject.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(string parentTable, string childTable, string[] parentColumns, string[] childColumns, boolean active, [StiDataJoinType](../Stimulsoft_Base/StiDataJoinType.md) joinType, string key) |  |

**constructor**(**parentTable**: string, **childTable**: string, **parentColumns**: string[], **childColumns**: string[], **active**: boolean, **joinType**: [StiDataJoinType](../Stimulsoft_Base/StiDataJoinType.md), **key**: string)

**Parameters**

- **parentTable** (string)  
- **childTable** (string)  
- **parentColumns** (string[])  
- **childColumns** (string[])  
- **active** (boolean)  
- **joinType** ([StiDataJoinType](../Stimulsoft_Base/StiDataJoinType.md))  
- **key** (string)  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **childKeys** | string[] |  |
| **parentKeys** | string[] |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **loadFromJson** `static` | [StiDataLink](StiDataLink.md) |  |
| **loadFromJsonObject** | void |  |
| **loadFromXml** *(+1 overloads)* | void |  |
| **meta** | [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[] |  |
| **saveToJsonObject** | [StiJson](../Stimulsoft_Base/StiJson.md) |  |
| **toString** | string |  |

---

### Method Details

#### loadFromJson `static`

**loadFromJson**(**json**: [StiJson](../Stimulsoft_Base/StiJson.md)): [StiDataLink](StiDataLink.md)

**Parameters**

- **json** ([StiJson](../Stimulsoft_Base/StiJson.md))  

**Returns** [StiDataLink](StiDataLink.md)


---

#### loadFromJsonObject

**loadFromJsonObject**(**j**: [StiJson](../Stimulsoft_Base/StiJson.md)): void

**Parameters**

- **j** ([StiJson](../Stimulsoft_Base/StiJson.md))  


---

#### loadFromXml

**loadFromXml**(**xn**: [XmlNode](../Stimulsoft_System_Xml/XmlNode.md)): void

**Parameters**

- **xn** ([XmlNode](../Stimulsoft_System_Xml/XmlNode.md))  

---

**loadFromXml**(**xmlNode**: [XmlNode](../Stimulsoft_System_Xml/XmlNode.md)): [StiDataLink](StiDataLink.md)

**Parameters**

- **xmlNode** ([XmlNode](../Stimulsoft_System_Xml/XmlNode.md))  

**Returns** [StiDataLink](StiDataLink.md)


---

#### meta

**meta**(): [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[]

**Returns** [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[]


---

#### saveToJsonObject

**saveToJsonObject**(**mode**: [StiJsonSaveMode](../Stimulsoft_Base/StiJsonSaveMode.md)): [StiJson](../Stimulsoft_Base/StiJson.md)

**Parameters**

- **mode** ([StiJsonSaveMode](../Stimulsoft_Base/StiJsonSaveMode.md))  

**Returns** [StiJson](../Stimulsoft_Base/StiJson.md)


---

#### toString

**toString**(): string

**Returns** string


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **_hash** | [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[] |  |
| **active** | boolean |  |
| **childColumns** | string[] |  |
| **childTable** | string |  |
| **joinType** | any | Specifies the type of data join operation that merges two data sources into one. Used only in Dashboards data. |
| **key** | string | Gets or sets the key to the data relation in the report dictionary. |
| **parentColumns** | string[] |  |
| **parentTable** | string |  |
