---
title: "StiDataRow Class"
---

## StiDataRow Class

**Namespace:** `Stimulsoft.Report.Dictionary`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(StiDataSource dataSource, [DataRow](../Stimulsoft_System_Data/DataRow.md) dataRow) |  |

**constructor**(**dataSource**: StiDataSource, **dataRow**: [DataRow](../Stimulsoft_System_Data/DataRow.md))

**Parameters**

- **dataSource** (StiDataSource)  
- **dataRow** ([DataRow](../Stimulsoft_System_Data/DataRow.md))  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **dictionary** | any |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **createDataRow** | [StiDataRow](StiDataRow.md) |  |
| **getByColumnName** | any |  |
| **getParentData** | [StiDataRow](StiDataRow.md) |  |

---

### Method Details

#### createDataRow

**createDataRow**(**dataRow**: [StiDataRow](StiDataRow.md)): [StiDataRow](StiDataRow.md)

**Parameters**

- **dataRow** ([StiDataRow](StiDataRow.md))  

**Returns** [StiDataRow](StiDataRow.md)


---

#### getByColumnName

**getByColumnName**(**columnName**: string): any

**Parameters**

- **columnName** (string)  

**Returns** any


---

#### getParentData

**getParentData**(**relation**: string): [StiDataRow](StiDataRow.md)

**Parameters**

- **relation** (string)  

**Returns** [StiDataRow](StiDataRow.md)


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **row** | [DataRow](../Stimulsoft_System_Data/DataRow.md) |  |
