---
title: "StiChartLegendTitle Class"
---

## StiChartLegendTitle Class

**Namespace:** `Stimulsoft.Dashboard.Components.Chart`

### Inheritance

Implements: [IStiJsonReportObject](../Stimulsoft_Base_JsonReportObject/IStiJsonReportObject.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([Font](../Stimulsoft_Base_Dashboard/Font.md) font, string text, [Color](../Stimulsoft_System_Drawing/Color.md) color) |  |

**constructor**(**font**: [Font](../Stimulsoft_Base_Dashboard/Font.md), **text**: string, **color**: [Color](../Stimulsoft_System_Drawing/Color.md))

**Parameters**

- **font** ([Font](../Stimulsoft_Base_Dashboard/Font.md))  
- **text** (string)  
- **color** ([Color](../Stimulsoft_System_Drawing/Color.md))  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | any | Creates a new object that is a copy of the current instance. |
| **loadFromJsonObject** | void |  |
| **loadFromXml** | void |  |
| **meta** | [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[] |  |
| **saveToJsonObject** | [StiJson](../Stimulsoft_Base/StiJson.md) |  |

---

### Method Details

#### clone

**clone**(): any

Creates a new  object that is a copy of the current instance.

**Returns** any — A new object that is a copy of this instance.


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
| **color** | any | Gets or sets color which will be used for title drawing. |
| **font** | any | Gets or set font which will be used for axis title drawing. |
| **text** | any | Gets or sets title text. |
