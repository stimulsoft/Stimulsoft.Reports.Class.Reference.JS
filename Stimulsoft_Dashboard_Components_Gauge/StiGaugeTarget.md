---
title: "StiGaugeTarget Class"
---

## StiGaugeTarget Class

**Namespace:** `Stimulsoft.Dashboard.Components.Gauge`

### Inheritance

Implements: [IStiJsonReportObject](../Stimulsoft_Base_JsonReportObject/IStiJsonReportObject.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(boolean showLabel, [StiPlacement](../Stimulsoft_Report_Gauge/StiPlacement.md) placement) |  |

**constructor**(**showLabel**: boolean, **placement**: [StiPlacement](../Stimulsoft_Report_Gauge/StiPlacement.md))

**Parameters**

- **showLabel** (boolean)  
- **placement** ([StiPlacement](../Stimulsoft_Report_Gauge/StiPlacement.md))  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | [StiGaugeTarget](StiGaugeTarget.md) | Creates a new object that is a copy of the current instance. |
| **implements** | any[] |  |
| **loadFromJsonObject** | void |  |
| **loadFromXml** | void |  |
| **meta** | [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[] |  |
| **saveToJsonObject** | [StiJson](../Stimulsoft_Base/StiJson.md) |  |

---

### Method Details

#### clone

**clone**(): [StiGaugeTarget](StiGaugeTarget.md)

Creates a new object that is a copy of the current instance.

**Returns** [StiGaugeTarget](StiGaugeTarget.md) — A new object that is a copy of this instance.


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
| **IStiGaugeTarget** | any |  |
| **_hash** | [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[] |  |
| **placement** | any | Gets or sets the placement of the tick relative to the scale. |
| **showLabel** | any | Gets or sets visibility of labels. |
