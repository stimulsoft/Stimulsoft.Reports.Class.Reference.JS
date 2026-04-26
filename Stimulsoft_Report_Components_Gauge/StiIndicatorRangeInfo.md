---
title: "StiIndicatorRangeInfo Class"
---

## StiIndicatorRangeInfo Class

**Namespace:** `Stimulsoft.Report.Components.Gauge`

### Inheritance

Implements: [ICloneable](../Stimulsoft_System/ICloneable.md), [IStiIndicatorRangeInfo](IStiIndicatorRangeInfo.md), [IStiJsonReportObject](../Stimulsoft_Base_JsonReportObject/IStiJsonReportObject.md)  

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **propName** | string |  |
| **rangeListType** | [StiBarRangeListType](../Stimulsoft_Report_Gauge/StiBarRangeListType.md) |  |
| **value** | number |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | any |  |
| **loadFromJsonObject** | void |  |
| **loadFromXml** | void |  |
| **meta** | [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[] |  |
| **saveToJsonObject** | [StiJson](../Stimulsoft_Base/StiJson.md) |  |

---

### Method Details

#### clone

**clone**(): any

**Returns** any


---

#### loadFromJsonObject

**loadFromJsonObject**(**j**: [StiJson](../Stimulsoft_Base/StiJson.md)): void

**Parameters**

- **j** ([StiJson](../Stimulsoft_Base/StiJson.md))  


---

#### loadFromXml

**loadFromXml**(**xmlNode**: [XmlNode](../Stimulsoft_System_Xml/XmlNode.md), **report**: [StiReport](../Stimulsoft_Report/StiReport.md)): void

**Parameters**

- **xmlNode** ([XmlNode](../Stimulsoft_System_Xml/XmlNode.md))  
- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  


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

