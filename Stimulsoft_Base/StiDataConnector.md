---
title: "StiDataConnector Class"
---

## StiDataConnector Class

**Namespace:** `Stimulsoft.Base`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getFamilyConnectors** | [StiDataConnector](StiDataConnector.md)[] | Return an array of the data connectors which can be used also to access data for this type of the connector. |
| **resetSettings** | void |  |

---

### Method Details

#### getFamilyConnectors

**getFamilyConnectors**(): [StiDataConnector](StiDataConnector.md)[]

Return an array of the data connectors which can be used also to access data for this type of the connector.

**Returns** [StiDataConnector](StiDataConnector.md)[]


---

#### resetSettings

**resetSettings**(): void


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **connectionIdent** | [StiConnectionIdent](StiConnectionIdent.md) | Gets a type of the connector. |
| **connectionOrder** | [StiConnectionOrder](../Stimulsoft_Report_Dictionary/StiConnectionOrder.md) | Gets an order of the connector. |
| **isAvailable** | boolean | Get a value which indicates that this data connector can be used now. |
| **name** | string | The name of this connector. |
| **nuGetPackages** | string[] | Gets the package identificator for this connector. |
| **nuGetVersion** | string | Gets the package version for this connector. |
