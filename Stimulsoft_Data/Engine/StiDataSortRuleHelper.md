---
title: "StiDataSortRuleHelper Class"
---

## StiDataSortRuleHelper Class

**Namespace:** `Stimulsoft.Data.Engine`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getDataTableSortQuery** `static` | string |  |
| **getDataTableSortQuery2** `static` | string |  |
| **getSortDirection** `static` | [StiDataSortDirection](StiDataSortDirection.md) |  |
| **setSortDirection** `static` | StiDataSortRule[] |  |
| **validate** `static` | StiDataSortRule[] |  |

---

### Method Details

#### getDataTableSortQuery `static`

**getDataTableSortQuery**(**rules**: StiDataSortRule[], **columns**: IStiAppDataColumn[]): string

**Parameters**

- **rules** (StiDataSortRule[])  
- **columns** (IStiAppDataColumn[])  

**Returns** string


---

#### getDataTableSortQuery2 `static`

**getDataTableSortQuery2**(**rules**: StiDataSortRule[], **columnKeys**: string[], **columnNames**: string[]): string

**Parameters**

- **rules** (StiDataSortRule[])  
- **columnKeys** (string[])  
- **columnNames** (string[])  

**Returns** string


---

#### getSortDirection `static`

**getSortDirection**(**rules**: StiDataSortRule[], **columnKey**: string): [StiDataSortDirection](StiDataSortDirection.md)

**Parameters**

- **rules** (StiDataSortRule[])  
- **columnKey** (string)  

**Returns** [StiDataSortDirection](StiDataSortDirection.md)


---

#### setSortDirection `static`

**setSortDirection**(**rules**: StiDataSortRule[], **columnKeys**: string[], **columnKey**: string, **direction**: [StiDataSortDirection](StiDataSortDirection.md)): StiDataSortRule[]

**Parameters**

- **rules** (StiDataSortRule[])  
- **columnKeys** (string[])  
- **columnKey** (string)  
- **direction** ([StiDataSortDirection](StiDataSortDirection.md))  

**Returns** StiDataSortRule[]


---

#### validate `static`

**validate**(**rules**: StiDataSortRule[], **columnKeys**: string[]): StiDataSortRule[]

**Parameters**

- **rules** (StiDataSortRule[])  
- **columnKeys** (string[])  

**Returns** StiDataSortRule[]

