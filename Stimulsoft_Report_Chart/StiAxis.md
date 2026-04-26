---
title: "StiAxis Class"
---

## StiAxis Class

**Namespace:** `Stimulsoft.Report.Chart`

### Inheritance

Implements: IStiAxis, [IStiJsonReportObject](../Stimulsoft_Base_JsonReportObject/IStiJsonReportObject.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(IStiAxisLabels labels) |  |

**constructor**(**labels**: IStiAxisLabels)

**Parameters**

- **labels** (IStiAxisLabels)  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **allowApplyStyle** | boolean |  |
| **step** | number |  |
| **title** | IStiAxisTitle |  |
| **titleDirection** | [StiLegendDirection](StiLegendDirection.md) |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | [StiAxis](StiAxis.md) |  |
| **implements** | any[] |  |
| **loadFromJsonObject** | void |  |
| **loadFromXml** | void |  |
| **meta** | [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[] |  |
| **saveToJsonObject** | [StiJson](../Stimulsoft_Base/StiJson.md) |  |

---

### Method Details

#### clone

**clone**(): [StiAxis](StiAxis.md)

**Returns** [StiAxis](StiAxis.md)


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
| **allowApplyStyle** | any |  |
| **area** | IStiAxisArea |  |
| **arrowStyle** | any |  |
| **arrowStyle** | [StiArrowStyle](StiArrowStyle.md) |  |
| **core** | StiAxisCoreXF |  |
| **info** | any |  |
| **interaction** | IStiAxisInteraction |  |
| **interaction** | IStiAxisInteraction |  |
| **labels** | IStiAxisLabels |  |
| **lineColor** | any |  |
| **lineColor** | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **lineStyle** | any |  |
| **lineStyle** | [StiPenStyle](../Stimulsoft_Base_Drawing/StiPenStyle.md) |  |
| **lineWidth** | any |  |
| **lineWidth** | any |  |
| **logarithmicScale** | any |  |
| **logarithmicScale** | any |  |
| **range** | IStiAxisRange |  |
| **range** | IStiAxisRange |  |
| **startFromZero** | any |  |
| **startFromZero** | any |  |
| **ticks** | IStiAxisTicks |  |
| **ticks** | IStiAxisTicks |  |
| **title** | IStiAxisTitle |  |
| **visible** | any |  |
| **visible** | any |  |
