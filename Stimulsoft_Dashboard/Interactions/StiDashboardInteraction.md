---
title: "StiDashboardInteraction Class"
---

## StiDashboardInteraction Class

**Namespace:** `Stimulsoft.Dashboard.Interactions`

### Inheritance

Implements: IStiDashboardInteraction, [IStiJsonReportObject](../../Stimulsoft_Base/JsonReportObject/IStiJsonReportObject.md)  

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | any |  |
| **getDrillDownParameters** | [IStiDashboardDrillDownParameter](../../Stimulsoft_Report/Dashboard/IStiDashboardDrillDownParameter.md)[] |  |
| **implements** | any[] |  |
| **isDefault** | boolean |  |
| **loadFromJsonObject** | void |  |
| **loadFromXml** | void |  |
| **meta** | [StiMeta](../../Stimulsoft_Base/Meta/StiMeta.md)[] |  |
| **saveToJsonObject** | [StiJson](../../Stimulsoft_Base/StiJson.md) |  |
| **setDrillDownParameters** | void |  |

---

### Method Details

#### clone

**clone**(**cloneProperties**: any, **cloneComponents**: any): any

**Parameters**

- **cloneProperties** (any)  
- **cloneComponents** (any)  

**Returns** any


---

#### getDrillDownParameters

**getDrillDownParameters**(): [IStiDashboardDrillDownParameter](../../Stimulsoft_Report/Dashboard/IStiDashboardDrillDownParameter.md)[]

**Returns** [IStiDashboardDrillDownParameter](../../Stimulsoft_Report/Dashboard/IStiDashboardDrillDownParameter.md)[]


---

#### implements

**implements**(): any[]

**Returns** any[]


---

#### isDefault

**isDefault**(): boolean

**Returns** boolean


---

#### loadFromJsonObject

**loadFromJsonObject**(**j**: [StiJson](../../Stimulsoft_Base/StiJson.md)): void

**Parameters**

- **j** ([StiJson](../../Stimulsoft_Base/StiJson.md))  


---

#### loadFromXml

**loadFromXml**(**xn**: [XmlNode](../../Stimulsoft_System/Xml/XmlNode.md)): void

**Parameters**

- **xn** ([XmlNode](../../Stimulsoft_System/Xml/XmlNode.md))  


---

#### meta

**meta**(): [StiMeta](../../Stimulsoft_Base/Meta/StiMeta.md)[]

**Returns** [StiMeta](../../Stimulsoft_Base/Meta/StiMeta.md)[]


---

#### saveToJsonObject

**saveToJsonObject**(**mode**: [StiJsonSaveMode](../../Stimulsoft_Base/StiJsonSaveMode.md)): [StiJson](../../Stimulsoft_Base/StiJson.md)

**Parameters**

- **mode** ([StiJsonSaveMode](../../Stimulsoft_Base/StiJsonSaveMode.md))  

**Returns** [StiJson](../../Stimulsoft_Base/StiJson.md)


---

#### setDrillDownParameters

**setDrillDownParameters**(**drillDownParameters**: any[]): void

**Parameters**

- **drillDownParameters** (any[])  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **_hash** | [StiMeta](../../Stimulsoft_Base/Meta/StiMeta.md)[] |  |
