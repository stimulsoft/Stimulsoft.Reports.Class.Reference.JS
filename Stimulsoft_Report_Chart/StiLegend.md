---
title: "StiLegend Class"
---

## StiLegend Class

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
| **allowApplyStyle** | boolean |  |
| **columns** | number |  |
| **propName** | string |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | [StiLegend](StiLegend.md) |  |
| **implements** | any[] |  |
| **loadFromJsonObject** | void |  |
| **loadFromJsonObjectInternal** `static` | IStiLegend |  |
| **loadFromXml** | void |  |
| **loadLabelsFromXml** `static` | [StiLegend](StiLegend.md) |  |
| **meta** | [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[] |  |
| **saveToJsonObject** | [StiJson](../Stimulsoft_Base/StiJson.md) |  |

---

### Method Details

#### clone

**clone**(): [StiLegend](StiLegend.md)

**Returns** [StiLegend](StiLegend.md)


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

#### loadFromJsonObjectInternal `static`

**loadFromJsonObjectInternal**(**jObject**: [StiJson](../Stimulsoft_Base/StiJson.md), **chart**: IStiChart): IStiLegend

**Parameters**

- **jObject** ([StiJson](../Stimulsoft_Base/StiJson.md))  
- **chart** (IStiChart)  

**Returns** IStiLegend


---

#### loadFromXml

**loadFromXml**(**xn**: [XmlNode](../Stimulsoft_System_Xml/XmlNode.md)): void

**Parameters**

- **xn** ([XmlNode](../Stimulsoft_System_Xml/XmlNode.md))  


---

#### loadLabelsFromXml `static`

**loadLabelsFromXml**(**xmlNode**: [XmlNode](../Stimulsoft_System_Xml/XmlNode.md), **chart**: IStiChart): [StiLegend](StiLegend.md)

**Parameters**

- **xmlNode** ([XmlNode](../Stimulsoft_System_Xml/XmlNode.md))  
- **chart** (IStiChart)  

**Returns** [StiLegend](StiLegend.md)


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
| **IStiLegend** | any |  |
| **_hash** | [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[] |  |
| **borderColor** | any |  |
| **brush** | [StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md) |  |
| **chart** | IStiChart |  |
| **columnWidth** | any |  |
| **core** | StiLegendCoreXF |  |
| **direction** | any |  |
| **font** | any |  |
| **hideSeriesWithEmptyTitle** | any |  |
| **horAlignment** | any |  |
| **horSpacing** | any |  |
| **labelsColor** | any |  |
| **markerAlignment** | any |  |
| **markerBorder** | any |  |
| **markerSize** | any |  |
| **markerVisible** | any |  |
| **showShadow** | any |  |
| **size** | SizeD |  |
| **title** | any |  |
| **titleColor** | any |  |
| **titleFont** | any |  |
| **vertAlignment** | any |  |
| **vertSpacing** | any |  |
| **visible** | any |  |
| **wordWrap** | any |  |
