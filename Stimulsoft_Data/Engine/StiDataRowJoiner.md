---
title: "StiDataRowJoiner Class"
---

## StiDataRowJoiner Class

**Namespace:** `Stimulsoft.Data.Engine`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([DataTable](../../Stimulsoft_System/Data/DataTable.md) resultTable, [DataTable](../../Stimulsoft_System/Data/DataTable.md) table1, [DataTable](../../Stimulsoft_System/Data/DataTable.md) table2) |  |

**constructor**(**resultTable**: [DataTable](../../Stimulsoft_System/Data/DataTable.md), **table1**: [DataTable](../../Stimulsoft_System/Data/DataTable.md), **table2**: [DataTable](../../Stimulsoft_System/Data/DataTable.md))

**Parameters**

- **resultTable** ([DataTable](../../Stimulsoft_System/Data/DataTable.md))  
- **table1** ([DataTable](../../Stimulsoft_System/Data/DataTable.md))  
- **table2** ([DataTable](../../Stimulsoft_System/Data/DataTable.md))  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **join** | [List](../../Stimulsoft_System/Collections/Generic/List.md)<[DataRow](../../Stimulsoft_System/Data/DataRow.md)> |  |

---

### Method Details

#### join

**join**(**type**: [StiDataJoinType](../../Stimulsoft_Base/StiDataJoinType.md), **link**: [StiDataLink](StiDataLink.md), **meters**: IStiMeter[]): [List](../../Stimulsoft_System/Collections/Generic/List.md)<[DataRow](../../Stimulsoft_System/Data/DataRow.md)>

**Parameters**

- **type** ([StiDataJoinType](../../Stimulsoft_Base/StiDataJoinType.md))  
- **link** ([StiDataLink](StiDataLink.md))  
- **meters** (IStiMeter[])  

**Returns** [List](../../Stimulsoft_System/Collections/Generic/List.md)<[DataRow](../../Stimulsoft_System/Data/DataRow.md)>

