---
title: "StiDataJoiner Class"
---

## StiDataJoiner Class

**Namespace:** `Stimulsoft.Data.Engine`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **cleanCache** `static` | void |  |
| **join** `static` | [DataTable](../Stimulsoft_System_Data/DataTable.md) |  |

---

### Method Details

#### cleanCache `static`

**cleanCache**(**appKey**: string): void

**Parameters**

- **appKey** (string)  


---

#### join `static`

**join**(**tables**: [DataTable](../Stimulsoft_System_Data/DataTable.md)[], **links**: [StiDataLink](StiDataLink.md)[], **meters**: IStiMeter[], **app**: IStiApp): [DataTable](../Stimulsoft_System_Data/DataTable.md)

**Parameters**

- **tables** ([DataTable](../Stimulsoft_System_Data/DataTable.md)[])  
- **links** ([StiDataLink](StiDataLink.md)[])  
- **meters** (IStiMeter[])  
- **app** (IStiApp)  

**Returns** [DataTable](../Stimulsoft_System_Data/DataTable.md)


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **dataRelation** | any |  |
| **dataTable** | any |  |
| **relations** | any |  |
| **resultTable** | any |  |
| **resultTable** | any |  |
| **resultTable** | any |  |
| **stackedTables** | any |  |
