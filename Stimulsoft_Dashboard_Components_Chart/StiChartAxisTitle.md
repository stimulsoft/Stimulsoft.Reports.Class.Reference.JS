---
title: "StiChartAxisTitle Class"
---

## StiChartAxisTitle Class

**Namespace:** `Stimulsoft.Dashboard.Components.Chart`

### Inheritance

Implements: [IStiJsonReportObject](../Stimulsoft_Base_JsonReportObject/IStiJsonReportObject.md), [IAsIs](../Stimulsoft_System/IAsIs.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([Font](../Stimulsoft_Base_Dashboard/Font.md) font, string text, [Color](../Stimulsoft_System_Drawing/Color.md) color, [StringAlignment](../Stimulsoft_System_Drawing/StringAlignment.md) alignment, [StiTitlePosition](../Stimulsoft_Report_Chart/StiTitlePosition.md) position, boolean visible) |  |

**constructor**(**font**: [Font](../Stimulsoft_Base_Dashboard/Font.md), **text**: string, **color**: [Color](../Stimulsoft_System_Drawing/Color.md), **alignment**: [StringAlignment](../Stimulsoft_System_Drawing/StringAlignment.md), **position**: [StiTitlePosition](../Stimulsoft_Report_Chart/StiTitlePosition.md), **visible**: boolean)

**Parameters**

- **font** ([Font](../Stimulsoft_Base_Dashboard/Font.md))  
- **text** (string)  
- **color** ([Color](../Stimulsoft_System_Drawing/Color.md))  
- **alignment** ([StringAlignment](../Stimulsoft_System_Drawing/StringAlignment.md))  
- **position** ([StiTitlePosition](../Stimulsoft_Report_Chart/StiTitlePosition.md))  
- **visible** (boolean)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | any | Creates a new object that is a copy of the current instance. |
| **implements** | any[] |  |
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

#### implements

**implements**(): any[]

**Returns** any[]


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
| **alignment** | any | Gets or sets title text alignment. |
| **color** | any | Gets or sets color which will be used for title drawing. |
| **font** | any | Gets or set font which will be used for axis title drawing. |
| **position** | any | Gets or sets title text position. |
| **text** | any | Gets or sets title text. |
| **visible** | any | Gets or sets visibility of axis. |
