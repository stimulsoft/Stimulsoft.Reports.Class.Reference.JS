---
title: "StiStateIndicatorFilter Class"
---

## StiStateIndicatorFilter Class

**Namespace:** `Stimulsoft.Report.Components.Gauge`

### Inheritance

Implements: [ICloneable](../../../../../Stimulsoft_System/ICloneable.md), [IStiJsonReportObject](../../../../../Stimulsoft_Base/JsonReportObject/IStiJsonReportObject.md)  

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **borderBrush** | [StiBrush](../../../../../Stimulsoft_Base/Drawing/StiBrush.md) |  |
| **brush** | [StiBrush](../../../../../Stimulsoft_Base/Drawing/StiBrush.md) |  |
| **endValue** | number |  |
| **propName** | string |  |
| **startValue** | number |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | any |  |
| **loadFromJsonObject** | void |  |
| **loadFromXml** | void |  |
| **meta** | [StiMeta](../../../../../Stimulsoft_Base/Meta/StiMeta.md)[] |  |
| **saveToJsonObject** | [StiJson](../../../../../Stimulsoft_Base/StiJson.md) |  |
| **toString** | string |  |

---

### Method Details

#### clone

**clone**(): any

**Returns** any


---

#### loadFromJsonObject

**loadFromJsonObject**(**j**: [StiJson](../../../../../Stimulsoft_Base/StiJson.md)): void

**Parameters**

- **j** ([StiJson](../../../../../Stimulsoft_Base/StiJson.md))  


---

#### loadFromXml

**loadFromXml**(**xn**: [XmlNode](../../../../../Stimulsoft_System/Xml/XmlNode.md)): void

**Parameters**

- **xn** ([XmlNode](../../../../../Stimulsoft_System/Xml/XmlNode.md))  


---

#### meta

**meta**(): [StiMeta](../../../../../Stimulsoft_Base/Meta/StiMeta.md)[]

**Returns** [StiMeta](../../../../../Stimulsoft_Base/Meta/StiMeta.md)[]


---

#### saveToJsonObject

**saveToJsonObject**(**mode**: [StiJsonSaveMode](../../../../../Stimulsoft_Base/StiJsonSaveMode.md)): [StiJson](../../../../../Stimulsoft_Base/StiJson.md)

**Parameters**

- **mode** ([StiJsonSaveMode](../../../../../Stimulsoft_Base/StiJsonSaveMode.md))  

**Returns** [StiJson](../../../../../Stimulsoft_Base/StiJson.md)


---

#### toString

**toString**(): string

**Returns** string

