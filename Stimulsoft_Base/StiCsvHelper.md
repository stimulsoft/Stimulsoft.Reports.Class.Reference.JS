---
title: "StiCsvHelper Class"
---

## StiCsvHelper Class

**Namespace:** `Stimulsoft.Base`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getDataSet** `static` | [DataSet](../Stimulsoft_System/Data/DataSet.md) |  |
| **getTable** `static` | [DataTable](../Stimulsoft_System/Data/DataTable.md) |  |
| **getTable2** `static` | [DataTable](../Stimulsoft_System/Data/DataTable.md) |  |

---

### Method Details

#### getDataSet `static`

**getDataSet**(**data**: number[] | Uint8Array | string, **tableName**: string, **codePage**: number, **separator**: string, **maxDataRows**: number): [DataSet](../Stimulsoft_System/Data/DataSet.md)

**Parameters**

- **data** (number[] | Uint8Array | string)  
- **tableName** (string)  
- **codePage** (number)  
- **separator** (string)  
- **maxDataRows** (number)  

**Returns** [DataSet](../Stimulsoft_System/Data/DataSet.md)


---

#### getTable `static`

**getTable**(**path**: string, **codePage**: any, **separator**: string, **maxDataRows**: number, **headers**: [Header](../Stimulsoft_System/Header.md)[]): [DataTable](../Stimulsoft_System/Data/DataTable.md)

**Parameters**

- **path** (string)  
- **codePage** (any)  
- **separator** (string)  
- **maxDataRows** (number)  
- **headers** ([Header](../Stimulsoft_System/Header.md)[])  

**Returns** [DataTable](../Stimulsoft_System/Data/DataTable.md)


---

#### getTable2 `static`

**getTable2**(**data**: number[] | Uint8Array, **codePage**: any, **separator**: string, **loadData**: any, **maxDataRows**: number): [DataTable](../Stimulsoft_System/Data/DataTable.md)

**Parameters**

- **data** (number[] | Uint8Array)  
- **codePage** (any)  
- **separator** (string)  
- **loadData** (any)  
- **maxDataRows** (number)  

**Returns** [DataTable](../Stimulsoft_System/Data/DataTable.md)

