---
title: "StiRangeBase Class"
---

## StiRangeBase Class

**Namespace:** `Stimulsoft.Report.Components.Gauge.Primitives`

### Inheritance

Implements: [ICloneable](../Stimulsoft_System/ICloneable.md), [IStiRangeBase](../Stimulsoft_Report_Components_Gauge/IStiRangeBase.md), [IStiJsonReportObject](../Stimulsoft_Base_JsonReportObject/IStiJsonReportObject.md)  

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **borderBrush** | [StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md) |  |
| **borderWidth** | number |  |
| **brush** | [StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md) |  |
| **endValue** | number |  |
| **endWidth** | number |  |
| **localizeName** | string |  |
| **offset** | number |  |
| **placement** | [StiPlacement](../Stimulsoft_Report_Gauge/StiPlacement.md) |  |
| **propName** | string |  |
| **startValue** | number |  |
| **startWidth** | number |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | [StiRangeBase](StiRangeBase.md) |  |
| **drawRange** | void |  |
| **loadFromJsonObject** | void |  |
| **loadFromXml** | void |  |
| **meta** | [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[] |  |
| **saveToJsonObject** | [StiJson](../Stimulsoft_Base/StiJson.md) |  |

---

### Method Details

#### clone

**clone**(): [StiRangeBase](StiRangeBase.md)

**Returns** [StiRangeBase](StiRangeBase.md)


---

#### drawRange

**drawRange**(**context**: [StiGaugeContextPainter](../Stimulsoft_Report_Painters/StiGaugeContextPainter.md), **scale**: StiScaleBase): void

**Parameters**

- **context** ([StiGaugeContextPainter](../Stimulsoft_Report_Painters/StiGaugeContextPainter.md))  
- **scale** (StiScaleBase)  


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
| **rangeList** | StiScaleRangeList |  |
