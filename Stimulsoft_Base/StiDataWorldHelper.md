---
title: "StiDataWorldHelper Class"
---

## StiDataWorldHelper Class

**Namespace:** `Stimulsoft.Base`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(string connectionString) |  |

**constructor**(**connectionString**: string)

**Parameters**

- **connectionString** (string)  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **database** | string |  |
| **owner** | string |  |
| **token** | string |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getColumns** | StiDataColumnSchema[] |  |
| **getDataTable** | [DataTable](../Stimulsoft_System/Data/DataTable.md) |  |
| **getTableNames** | string[] |  |
| **retrieveSchema** | StiDataSchema |  |
| **testConnection** | [StiTestConnectionResult](StiTestConnectionResult.md) |  |

---

### Method Details

#### getColumns

**getColumns**(**collectionName**: string): StiDataColumnSchema[]

**Parameters**

- **collectionName** (string)  

**Returns** StiDataColumnSchema[]


---

#### getDataTable

**getDataTable**(**collectionName**: string, **query**: string): [DataTable](../Stimulsoft_System/Data/DataTable.md)

**Parameters**

- **collectionName** (string)  
- **query** (string)  

**Returns** [DataTable](../Stimulsoft_System/Data/DataTable.md)


---

#### getTableNames

**getTableNames**(): string[]

**Returns** string[]


---

#### retrieveSchema

**retrieveSchema**(): StiDataSchema

**Returns** StiDataSchema


---

#### testConnection

**testConnection**(): [StiTestConnectionResult](StiTestConnectionResult.md)

**Returns** [StiTestConnectionResult](StiTestConnectionResult.md)

