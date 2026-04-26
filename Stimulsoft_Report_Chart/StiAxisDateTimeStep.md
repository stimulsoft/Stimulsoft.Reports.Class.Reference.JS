---
title: "StiAxisDateTimeStep Class"
---

## StiAxisDateTimeStep Class

**Namespace:** `Stimulsoft.Report.Chart`

### Inheritance

Implements: IStiAxisDateTimeStep, [IStiJsonReportObject](../Stimulsoft_Base_JsonReportObject/IStiJsonReportObject.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([StiTimeDateStep](StiTimeDateStep.md) step, any numberOfValues, any interpolation, any aggregation) |  |

**constructor**(**step**: [StiTimeDateStep](StiTimeDateStep.md), **numberOfValues**: any, **interpolation**: any, **aggregation**: any)

**Parameters**

- **step** ([StiTimeDateStep](StiTimeDateStep.md))  
- **numberOfValues** (any)  
- **interpolation** (any)  
- **aggregation** (any)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | [StiAxisDateTimeStep](StiAxisDateTimeStep.md) |  |
| **implements** | any[] |  |
| **loadFromJsonObject** | void |  |
| **loadFromXml** | void |  |
| **meta** | [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[] |  |
| **saveToJsonObject** | [StiJson](../Stimulsoft_Base/StiJson.md) |  |

---

### Method Details

#### clone

**clone**(): [StiAxisDateTimeStep](StiAxisDateTimeStep.md)

**Returns** [StiAxisDateTimeStep](StiAxisDateTimeStep.md)


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
| **aggregation** | any |  |
| **interpolation** | any |  |
| **numberOfValues** | any |  |
| **step** | any |  |
