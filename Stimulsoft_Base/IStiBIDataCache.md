---
title: "IStiBIDataCache Interface"
---

## IStiBIDataCache Interface

**Namespace:** `Stimulsoft.Base`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **add** | void |  |
| **clean** | void |  |
| **cleanAll** | void |  |
| **exists** | boolean |  |
| **exists2** | boolean |  |
| **getData** | [DataTable](../Stimulsoft_System/Data/DataTable.md) |  |
| **getRowCount** | number |  |
| **getSchema** | [DataTable](../Stimulsoft_System/Data/DataTable.md) |  |
| **getTableCount** | number |  |
| **getTableName** | string |  |
| **remove** | void |  |
| **runQuery** | [DataTable](../Stimulsoft_System/Data/DataTable.md) |  |

---

### Method Details

#### add

**add**(**appKey**: string, **tableKey**: string, **dataTable**: [DataTable](../Stimulsoft_System/Data/DataTable.md)): void

**Parameters**

- **appKey** (string)  
- **tableKey** (string)  
- **dataTable** ([DataTable](../Stimulsoft_System/Data/DataTable.md))  


---

#### clean

**clean**(**appKey**: string): void

**Parameters**

- **appKey** (string)  


---

#### cleanAll

**cleanAll**(): void


---

#### exists

**exists**(**dataSource**: IStiAppDataSource): boolean

**Parameters**

- **dataSource** (IStiAppDataSource)  

**Returns** boolean


---

#### exists2

**exists2**(**tableKey**: string): boolean

**Parameters**

- **tableKey** (string)  

**Returns** boolean


---

#### getData

**getData**(**tableKey**: string): [DataTable](../Stimulsoft_System/Data/DataTable.md)

**Parameters**

- **tableKey** (string)  

**Returns** [DataTable](../Stimulsoft_System/Data/DataTable.md)


---

#### getRowCount

**getRowCount**(**tableKey**: string): number

**Parameters**

- **tableKey** (string)  

**Returns** number


---

#### getSchema

**getSchema**(**tableKey**: string): [DataTable](../Stimulsoft_System/Data/DataTable.md)

**Parameters**

- **tableKey** (string)  

**Returns** [DataTable](../Stimulsoft_System/Data/DataTable.md)


---

#### getTableCount

**getTableCount**(): number

**Returns** number


---

#### getTableName

**getTableName**(**appKey**: string, **tableKey**: string): string

**Parameters**

- **appKey** (string)  
- **tableKey** (string)  

**Returns** string


---

#### remove

**remove**(**tableKey**: string): void

**Parameters**

- **tableKey** (string)  


---

#### runQuery

**runQuery**(**query**: string): [DataTable](../Stimulsoft_System/Data/DataTable.md)

**Parameters**

- **query** (string)  

**Returns** [DataTable](../Stimulsoft_System/Data/DataTable.md)

