---
title: "StiAxis Class"
---

## StiAxis Class

**Namespace:** `Stimulsoft.Report.Chart`

### Inheritance

Implements: IStiAxis, [IStiJsonReportObject](../Stimulsoft_Base/JsonReportObject/IStiJsonReportObject.md)  

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
| **titleDirection** | [StiLegendDirection](../Stimulsoft_Report/Chart/StiLegendDirection.md) |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | [StiAxis](StiAxis.md) |  |
| **implements** | any[] |  |
| **loadFromJsonObject** | void |  |
| **loadFromXml** | void |  |
| **meta** | [StiMeta](../Stimulsoft_Base/Meta/StiMeta.md)[] |  |
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

**loadFromXml**(**xn**: [XmlNode](../Stimulsoft_System/Xml/XmlNode.md)): void

**Parameters**

- **xn** ([XmlNode](../Stimulsoft_System/Xml/XmlNode.md))  


---

#### meta

**meta**(): [StiMeta](../Stimulsoft_Base/Meta/StiMeta.md)[]

**Returns** [StiMeta](../Stimulsoft_Base/Meta/StiMeta.md)[]


---

#### saveToJsonObject

**saveToJsonObject**(**mode**: [StiJsonSaveMode](../Stimulsoft_Base/StiJsonSaveMode.md)): [StiJson](../Stimulsoft_Base/StiJson.md)

**Parameters**

- **mode** ([StiJsonSaveMode](../Stimulsoft_Base/StiJsonSaveMode.md))  

**Returns** [StiJson](../Stimulsoft_Base/StiJson.md)


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **_hash** | [StiMeta](../Stimulsoft_Base/Meta/StiMeta.md)[] |  |
