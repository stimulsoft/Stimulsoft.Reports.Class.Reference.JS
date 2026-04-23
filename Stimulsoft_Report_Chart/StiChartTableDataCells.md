---
title: "StiChartTableDataCells Class"
---

## StiChartTableDataCells Class

**Namespace:** `Stimulsoft.Report.Chart`

### Inheritance

Implements: IStiChartTableDataCells, [IStiJsonReportObject](../Stimulsoft_Base/JsonReportObject/IStiJsonReportObject.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(any shrinkFontToFit, any shrinkFontToFitMinimumSize, [Font](../Stimulsoft_Base/Dashboard/Font.md) font, any 8) |  |

**constructor**(**shrinkFontToFit**: any, **shrinkFontToFitMinimumSize**: any, **font**: [Font](../Stimulsoft_Base/Dashboard/Font.md), **8**: any)

**Parameters**

- **shrinkFontToFit** (any)  
- **shrinkFontToFitMinimumSize** (any)  
- **font** ([Font](../Stimulsoft_Base/Dashboard/Font.md))  
- **8** (any)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | [StiChartTableDataCells](StiChartTableDataCells.md) |  |
| **loadFromJsonObject** | void |  |
| **loadFromXml** | void |  |
| **meta** | [StiMeta](../Stimulsoft_Base/Meta/StiMeta.md)[] |  |
| **saveToJsonObject** | [StiJson](../Stimulsoft_Base/StiJson.md) |  |

---

### Method Details

#### clone

**clone**(): [StiChartTableDataCells](StiChartTableDataCells.md)

**Returns** [StiChartTableDataCells](StiChartTableDataCells.md)


---

#### loadFromJsonObject

**loadFromJsonObject**(**j**: [StiJson](../Stimulsoft_Base/StiJson.md)): void

**Parameters**

- **j** ([StiJson](../Stimulsoft_Base/StiJson.md))  


---

#### loadFromXml

**loadFromXml**(**xn**: [XmlNode](../Stimulsoft_System/Xml/XmlNode.md)): void

**Parameters**

- **xn** ([XmlNode](../Stimulsoft_System/Xml/XmlNode.md))  


---

#### meta

**meta**(): [StiMeta](../Stimulsoft_Base/Meta/StiMeta.md)[]

**Returns** [StiMeta](../Stimulsoft_Base/Meta/StiMeta.md)[]


---

#### saveToJsonObject

**saveToJsonObject**(**m**: [StiJsonSaveMode](../Stimulsoft_Base/StiJsonSaveMode.md)): [StiJson](../Stimulsoft_Base/StiJson.md)

**Parameters**

- **m** ([StiJsonSaveMode](../Stimulsoft_Base/StiJsonSaveMode.md))  

**Returns** [StiJson](../Stimulsoft_Base/StiJson.md)


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **_hash** | [StiMeta](../Stimulsoft_Base/Meta/StiMeta.md)[] |  |
