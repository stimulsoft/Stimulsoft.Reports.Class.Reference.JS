---
title: "StiElementBase Class"
---

## StiElementBase Class

**Namespace:** `Stimulsoft.Report.Components.Gauge.Primitives`

### Inheritance

Implements: [ICloneable](../../../../../../Stimulsoft_System/ICloneable.md), [IStiApplyStyleGauge](../../../../../IStiApplyStyleGauge.md), [IAsIs](../../../../../../Stimulsoft_System/IAsIs.md)  

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **applyStyle** | void |  |
| **clone** | any |  |
| **drawElement** | void |  |
| **implements** | any[] |  |
| **loadFromJsonObject** | void |  |
| **loadFromXml** | void |  |
| **meta** | [StiMeta](../../../../../../Stimulsoft_Base/Meta/StiMeta.md)[] |  |
| **saveToJsonObject** | [StiJson](../../../../../../Stimulsoft_Base/StiJson.md) |  |

---

### Method Details

#### applyStyle

**applyStyle**(**style**: IStiGaugeStyle): void

**Parameters**

- **style** (IStiGaugeStyle)  


---

#### clone

**clone**(): any

**Returns** any


---

#### drawElement

**drawElement**(**context**: [StiGaugeContextPainter](../../../../../../Stimulsoft_Report/Painters/StiGaugeContextPainter.md)): void

**Parameters**

- **context** ([StiGaugeContextPainter](../../../../../../Stimulsoft_Report/Painters/StiGaugeContextPainter.md))  


---

#### implements

**implements**(): any[]

**Returns** any[]


---

#### loadFromJsonObject

**loadFromJsonObject**(**j**: [StiJson](../../../../../../Stimulsoft_Base/StiJson.md)): void

**Parameters**

- **j** ([StiJson](../../../../../../Stimulsoft_Base/StiJson.md))  


---

#### loadFromXml

**loadFromXml**(**xn**: [XmlNode](../../../../../../Stimulsoft_System/Xml/XmlNode.md)): void

**Parameters**

- **xn** ([XmlNode](../../../../../../Stimulsoft_System/Xml/XmlNode.md))  


---

#### meta

**meta**(): [StiMeta](../../../../../../Stimulsoft_Base/Meta/StiMeta.md)[]

**Returns** [StiMeta](../../../../../../Stimulsoft_Base/Meta/StiMeta.md)[]


---

#### saveToJsonObject

**saveToJsonObject**(**mode**: [StiJsonSaveMode](../../../../../../Stimulsoft_Base/StiJsonSaveMode.md)): [StiJson](../../../../../../Stimulsoft_Base/StiJson.md)

**Parameters**

- **mode** ([StiJsonSaveMode](../../../../../../Stimulsoft_Base/StiJsonSaveMode.md))  

**Returns** [StiJson](../../../../../../Stimulsoft_Base/StiJson.md)

