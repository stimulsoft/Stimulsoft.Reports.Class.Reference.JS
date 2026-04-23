---
title: "StiBIDataCacheHelper Class"
---

## StiBIDataCacheHelper Class

**Namespace:** `Stimulsoft.Base`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **add** `static` | void |  |
| **add2** `static` | void |  |
| **clean** `static` | void |  |
| **cleanAll** `static` | void |  |
| **exists** `static` | boolean |  |
| **getRowCount** `static` | number |  |
| **getTableCount** `static` | number |  |
| **getTableName** `static` | string |  |
| **remove** `static` | void |  |
| **runQuery** `static` | [DataTable](../Stimulsoft_System/Data/DataTable.md) |  |

---

### Method Details

#### add `static`

**add**(**app**: IStiApp, **tableKey**: string, **dataTable**: [DataTable](../Stimulsoft_System/Data/DataTable.md)): void

**Parameters**

- **app** (IStiApp)  
- **tableKey** (string)  
- **dataTable** ([DataTable](../Stimulsoft_System/Data/DataTable.md))  


---

#### add2 `static`

**add2**(**appKey**: string, **tableKey**: string, **dataTable**: [DataTable](../Stimulsoft_System/Data/DataTable.md)): void

**Parameters**

- **appKey** (string)  
- **tableKey** (string)  
- **dataTable** ([DataTable](../Stimulsoft_System/Data/DataTable.md))  


---

#### clean `static`

**clean**(**appKey**: string): void

**Parameters**

- **appKey** (string)  


---

#### cleanAll `static`

**cleanAll**(): void


---

#### exists `static`

**exists**(**tableKey**: string): boolean

**Parameters**

- **tableKey** (string)  

**Returns** boolean


---

#### getRowCount `static`

**getRowCount**(**tableKey**: string): number

**Parameters**

- **tableKey** (string)  

**Returns** number


---

#### getTableCount `static`

**getTableCount**(): number

**Returns** number


---

#### getTableName `static`

**getTableName**(**appKey**: string, **tableKey**: string): string

**Parameters**

- **appKey** (string)  
- **tableKey** (string)  

**Returns** string


---

#### remove `static`

**remove**(**tableKey**: string): void

**Parameters**

- **tableKey** (string)  


---

#### runQuery `static`

**runQuery**(**query**: string): [DataTable](../Stimulsoft_System/Data/DataTable.md)

**Parameters**

- **query** (string)  

**Returns** [DataTable](../Stimulsoft_System/Data/DataTable.md)

