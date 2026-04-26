---
title: "StiBookmark Class"
---

## StiBookmark Class

**Namespace:** `Stimulsoft.Report.Components`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(any text, any parentComponent) |  |

**constructor**(**text**: any, **parentComponent**: any)

**Parameters**

- **text** (any)  
- **parentComponent** (any)  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **bookmarks** | StiBookmarksCollection |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **add** | void |  |
| **loadFromJsonObject** | void |  |
| **loadFromXml** | void |  |
| **meta** | [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[] |  |
| **saveToJsonObject** | [StiJson](../Stimulsoft_Base/StiJson.md) |  |

---

### Method Details

#### add

**add**(**name**: string): void

**Parameters**

- **name** (string)  


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

#### meta

**meta**(): [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[]

**Returns** [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[]


---

#### saveToJsonObject

**saveToJsonObject**(**mode**: [StiJsonSaveMode](../Stimulsoft_Base/StiJsonSaveMode.md)): [StiJson](../Stimulsoft_Base/StiJson.md)

**Parameters**

- **mode** ([StiJsonSaveMode](../Stimulsoft_Base/StiJsonSaveMode.md))  

**Returns** [StiJson](../Stimulsoft_Base/StiJson.md)


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **_hash** | [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[] |  |
| **bookmarkText** | any |  |
| **componentGuid** | string |  |
| **isManualBookmark** | any |  |
| **pageIndex** | any |  |
| **parentComponent** | any |  |
| **text** | any |  |
