---
title: "StiChartTable Class"
---

## StiChartTable Class

**Namespace:** `Stimulsoft.Report.Chart`

### Inheritance

Implements: [IStiJsonReportObject](../Stimulsoft_Base_JsonReportObject/IStiJsonReportObject.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**() |  |

**constructor**()


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **font** | [Font](../Stimulsoft_Base_Dashboard/Font.md) |  |
| **propName** | string |  |
| **textColor** | [Color](../Stimulsoft_System_Drawing/Color.md) |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | [StiChartTable](StiChartTable.md) |  |
| **implements** | any[] |  |
| **loadFromJsonObject** | void |  |
| **loadFromXml** | void |  |
| **meta** | [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[] |  |
| **saveToJsonObject** | [StiJson](../Stimulsoft_Base/StiJson.md) |  |

---

### Method Details

#### clone

**clone**(): [StiChartTable](StiChartTable.md)

**Returns** [StiChartTable](StiChartTable.md)


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

**saveToJsonObject**(**m**: [StiJsonSaveMode](../Stimulsoft_Base/StiJsonSaveMode.md)): [StiJson](../Stimulsoft_Base/StiJson.md)

**Parameters**

- **m** ([StiJsonSaveMode](../Stimulsoft_Base/StiJsonSaveMode.md))  

**Returns** [StiJson](../Stimulsoft_Base/StiJson.md)


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **ICloneable** | any |  |
| **_hash** | [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[] |  |
| **allowApplyStyle** | any |  |
| **chart** | IStiChart |  |
| **core** | StiChartTableCoreXF |  |
| **dataCells** | [StiChartTableDataCells](StiChartTableDataCells.md) |  |
| **format** | any |  |
| **gridLineColor** | any |  |
| **gridLinesHor** | any |  |
| **gridLinesVert** | any |  |
| **gridOutline** | any |  |
| **header** | IStiChartTableHeader |  |
| **markerVisible** | any |  |
| **visible** | any |  |
