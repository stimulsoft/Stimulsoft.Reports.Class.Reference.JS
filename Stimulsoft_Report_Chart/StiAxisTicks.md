---
title: "StiAxisTicks Class"
---

## StiAxisTicks Class

**Namespace:** `Stimulsoft.Report.Chart`

### Inheritance

Implements: [IStiJsonReportObject](../Stimulsoft_Base/JsonReportObject/IStiJsonReportObject.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(any visible, any length, any minorVisible, any minorLength, any minorCount, any step, any lengthUnderLabels) |  |

**constructor**(**visible**: any, **length**: any, **minorVisible**: any, **minorLength**: any, **minorCount**: any, **step**: any, **lengthUnderLabels**: any)

**Parameters**

- **visible** (any)  
- **length** (any)  
- **minorVisible** (any)  
- **minorLength** (any)  
- **minorCount** (any)  
- **step** (any)  
- **lengthUnderLabels** (any)  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **length** | number |  |
| **lengthUnderLabels** | number |  |
| **minorCount** | number |  |
| **minorLength** | number |  |
| **step** | number |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | [StiAxisTicks](StiAxisTicks.md) |  |
| **implements** | any[] |  |
| **loadFromJsonObject** | void |  |
| **loadFromXml** | void |  |
| **meta** | [StiMeta](../Stimulsoft_Base/Meta/StiMeta.md)[] |  |
| **saveToJsonObject** | [StiJson](../Stimulsoft_Base/StiJson.md) |  |

---

### Method Details

#### clone

**clone**(): [StiAxisTicks](StiAxisTicks.md)

**Returns** [StiAxisTicks](StiAxisTicks.md)


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
