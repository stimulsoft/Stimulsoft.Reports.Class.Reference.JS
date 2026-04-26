---
title: "StiDashboardInteraction Class"
---

## StiDashboardInteraction Class

**Namespace:** `Stimulsoft.Dashboard.Interactions`

### Inheritance

Implements: IStiDashboardInteraction, [IStiJsonReportObject](../Stimulsoft_Base_JsonReportObject/IStiJsonReportObject.md)  

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | any |  |
| **getDrillDownParameters** | [IStiDashboardDrillDownParameter](../Stimulsoft_Report_Dashboard/IStiDashboardDrillDownParameter.md)[] |  |
| **implements** | any[] |  |
| **isDefault** | boolean |  |
| **loadFromJsonObject** | void |  |
| **loadFromXml** | void |  |
| **meta** | [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[] |  |
| **saveToJsonObject** | [StiJson](../Stimulsoft_Base/StiJson.md) |  |
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

**getDrillDownParameters**(): [IStiDashboardDrillDownParameter](../Stimulsoft_Report_Dashboard/IStiDashboardDrillDownParameter.md)[]

**Returns** [IStiDashboardDrillDownParameter](../Stimulsoft_Report_Dashboard/IStiDashboardDrillDownParameter.md)[]


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


---

#### setDrillDownParameters

**setDrillDownParameters**(**drillDownParameters**: any[]): void

**Parameters**

- **drillDownParameters** (any[])  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **_hash** | [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[] |  |
| **availableOnClick** | [StiAvailableInteractionOnClick](../Stimulsoft_Report_Dashboard/StiAvailableInteractionOnClick.md) |  |
| **availableOnDataManipulation** | [StiAvailableInteractionOnDataManipulation](../Stimulsoft_Report_Dashboard/StiAvailableInteractionOnDataManipulation.md) |  |
| **availableOnHover** | [StiAvailableInteractionOnHover](../Stimulsoft_Report_Dashboard/StiAvailableInteractionOnHover.md) |  |
| **drillDownPageKey** | any | Describes a key of the dashboard page which should be opened. |
| **drillDownParameters** | StiDashboardDrillDownParameter[] | Describes a list of drillDownParameters. |
| **hyperlink** | any |  |
| **hyperlinkDestination** | [StiInteractionOpenHyperlinkDestination](../Stimulsoft_Report_Dashboard/StiInteractionOpenHyperlinkDestination.md) |  |
| **ident** | [StiInteractionIdent](../Stimulsoft_Report_Dashboard/StiInteractionIdent.md) |  |
| **onClick** | [StiInteractionOnClick](../Stimulsoft_Report_Dashboard/StiInteractionOnClick.md) |  |
| **onHover** | [StiInteractionOnHover](../Stimulsoft_Report_Dashboard/StiInteractionOnHover.md) |  |
| **toolTip** | any |  |
