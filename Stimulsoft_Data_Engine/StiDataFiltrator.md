---
title: "StiDataFiltrator Class"
---

## StiDataFiltrator Class

**Namespace:** `Stimulsoft.Data.Engine`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **cleanCache** `static` | void |  |
| **filter** `static` | [DataTable](../Stimulsoft_System_Data/DataTable.md) |  |
| **filter2** `static` | [StiDataTable](StiDataTable.md) |  |

---

### Method Details

#### cleanCache `static`

**cleanCache**(**appKey**: string): void

**Parameters**

- **appKey** (string)  


---

#### filter `static`

**filter**(**inTable**: [DataTable](../Stimulsoft_System_Data/DataTable.md), **filters**: StiDataFilterRule[], **report**: IStiReport, **hash**: number): [DataTable](../Stimulsoft_System_Data/DataTable.md)

**Parameters**

- **inTable** ([DataTable](../Stimulsoft_System_Data/DataTable.md))  
- **filters** (StiDataFilterRule[])  
- **report** (IStiReport)  
- **hash** (number)  

**Returns** [DataTable](../Stimulsoft_System_Data/DataTable.md)


---

#### filter2 `static`

**filter2**(**inTable**: [StiDataTable](StiDataTable.md), **filters**: StiDataFilterRule[], **report**: IStiReport, **hash**: number): [StiDataTable](StiDataTable.md)

**Parameters**

- **inTable** ([StiDataTable](StiDataTable.md))  
- **filters** (StiDataFilterRule[])  
- **report** (IStiReport)  
- **hash** (number)  

**Returns** [StiDataTable](StiDataTable.md)


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **filters** | any |  |
| **idents** | Funcs.getMapIdents(StiDataFiltrator.simplify(filter.value)).map(v |  |
| **outTable** | any |  |
| **outTable** | any |  |
| **outTable** | any |  |
| **outTable** | any |  |
| **outTable** | any |  |
| **outTable** | any |  |
| **outTable** | any |  |
| **outTable** | any |  |
| **rows** | any |  |
