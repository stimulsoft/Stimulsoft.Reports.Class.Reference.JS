---
title: "StiDataActionOperator Class"
---

## StiDataActionOperator Class

**Namespace:** `Stimulsoft.Data.Engine`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **applyAfterGrouping** `static` | [StiDataTable](StiDataTable.md) |  |
| **applyBeforeGrouping** `static` | [DataTable](../Stimulsoft_System_Data/DataTable.md) |  |
| **cleanCache** `static` | void |  |

---

### Method Details

#### applyAfterGrouping `static`

**applyAfterGrouping**(**inTable**: [StiDataTable](StiDataTable.md), **actions**: StiDataActionRule[], **report**: IStiReport, **hash**: number): [StiDataTable](StiDataTable.md)

**Parameters**

- **inTable** ([StiDataTable](StiDataTable.md))  
- **actions** (StiDataActionRule[])  
- **report** (IStiReport)  
- **hash** (number)  

**Returns** [StiDataTable](StiDataTable.md)


---

#### applyBeforeGrouping `static`

**applyBeforeGrouping**(**inTable**: [DataTable](../Stimulsoft_System_Data/DataTable.md), **actions**: StiDataActionRule[], **report**: IStiReport, **hash**: number): [DataTable](../Stimulsoft_System_Data/DataTable.md)

**Parameters**

- **inTable** ([DataTable](../Stimulsoft_System_Data/DataTable.md))  
- **actions** (StiDataActionRule[])  
- **report** (IStiReport)  
- **hash** (number)  

**Returns** [DataTable](../Stimulsoft_System_Data/DataTable.md)


---

#### cleanCache `static`

**cleanCache**(**appKey**: string): void

**Parameters**

- **appKey** (string)  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **actions** | any |  |
| **outTable** | any |  |
| **outTable** | any |  |
| **outTable** | any |  |
| **outTable** | any |  |
