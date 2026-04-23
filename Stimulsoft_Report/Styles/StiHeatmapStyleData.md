---
title: "StiHeatmapStyleData Class"
---

## StiHeatmapStyleData Class

**Namespace:** `Stimulsoft.Report.Styles`

### Inheritance

Implements: [IStiJsonReportObject](../../Stimulsoft_Base/JsonReportObject/IStiJsonReportObject.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([Color](../../Stimulsoft_System/Drawing/Color.md) color, [Color](../../Stimulsoft_System/Drawing/Color.md) zeroColor, [StiHeatmapFillMode](StiHeatmapFillMode.md) mode) |  |

**constructor**(**color**: [Color](../../Stimulsoft_System/Drawing/Color.md), **zeroColor**: [Color](../../Stimulsoft_System/Drawing/Color.md), **mode**: [StiHeatmapFillMode](StiHeatmapFillMode.md))

**Parameters**

- **color** ([Color](../../Stimulsoft_System/Drawing/Color.md))  
- **zeroColor** ([Color](../../Stimulsoft_System/Drawing/Color.md))  
- **mode** ([StiHeatmapFillMode](StiHeatmapFillMode.md))  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | any |  |
| **implements** | any[] |  |
| **loadFromJsonObject** | void |  |
| **loadFromXml** | void |  |
| **meta** | [StiMeta](../../Stimulsoft_Base/Meta/StiMeta.md)[] |  |
| **saveToJsonObject** | [StiJson](../../Stimulsoft_Base/StiJson.md) |  |

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

**loadFromJsonObject**(**jObject**: [StiJson](../../Stimulsoft_Base/StiJson.md)): void

**Parameters**

- **jObject** ([StiJson](../../Stimulsoft_Base/StiJson.md))  


---

#### loadFromXml

**loadFromXml**(**xmlNode**: [XmlNode](../../Stimulsoft_System/Xml/XmlNode.md)): void

**Parameters**

- **xmlNode** ([XmlNode](../../Stimulsoft_System/Xml/XmlNode.md))  


---

#### meta

**meta**(): [StiMeta](../../Stimulsoft_Base/Meta/StiMeta.md)[]

**Returns** [StiMeta](../../Stimulsoft_Base/Meta/StiMeta.md)[]


---

#### saveToJsonObject

**saveToJsonObject**(**mode**: [StiJsonSaveMode](../../Stimulsoft_Base/StiJsonSaveMode.md)): [StiJson](../../Stimulsoft_Base/StiJson.md)

**Parameters**

- **mode** ([StiJsonSaveMode](../../Stimulsoft_Base/StiJsonSaveMode.md))  

**Returns** [StiJson](../../Stimulsoft_Base/StiJson.md)


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **_hash** | [StiMeta](../../Stimulsoft_Base/Meta/StiMeta.md)[] |  |
