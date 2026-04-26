---
title: "StiGraphQLHelper Class"
---

## StiGraphQLHelper Class

**Namespace:** `Stimulsoft.Base`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(string connectionString, [Hashtable](../Stimulsoft_System_Collections/Hashtable.md)<string, object> variables) |  |

**constructor**(**connectionString**: string, **variables**: [Hashtable](../Stimulsoft_System_Collections/Hashtable.md)<string, object>)

**Parameters**

- **connectionString** (string)  
- **variables** ([Hashtable](../Stimulsoft_System_Collections/Hashtable.md)<string, object>)  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **endPoint** | string |  |
| **headers** | string |  |
| **query** | string |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getColumns** | StiDataColumnSchema[] |  |
| **getColumnsByTableName** | StiDataColumnSchema[] |  |
| **getConnectionStringKey** | string |  |
| **getDataSet** | [DataSet](../Stimulsoft_System_Data/DataSet.md) |  |
| **getDataTable** | [DataTable](../Stimulsoft_System_Data/DataTable.md) |  |
| **retrieveSchema** | StiDataSchema |  |
| **testConnection** | [StiTestConnectionResult](StiTestConnectionResult.md) |  |

---

### Method Details

#### getColumns

**getColumns**(**table**: [DataTable](../Stimulsoft_System_Data/DataTable.md)): StiDataColumnSchema[]

**Parameters**

- **table** ([DataTable](../Stimulsoft_System_Data/DataTable.md))  

**Returns** StiDataColumnSchema[]


---

#### getColumnsByTableName

**getColumnsByTableName**(**tableName**: string): StiDataColumnSchema[]

**Parameters**

- **tableName** (string)  

**Returns** StiDataColumnSchema[]


---

#### getConnectionStringKey

**getConnectionStringKey**(**key**: string, **splitter**: string): string

**Parameters**

- **key** (string)  
- **splitter** (string)  

**Returns** string


---

#### getDataSet

**getDataSet**(**count**: number): [DataSet](../Stimulsoft_System_Data/DataSet.md)

**Parameters**

- **count** (number)  

**Returns** [DataSet](../Stimulsoft_System_Data/DataSet.md)


---

#### getDataTable

**getDataTable**(**collectionName**: string, **count**: number): [DataTable](../Stimulsoft_System_Data/DataTable.md)

**Parameters**

- **collectionName** (string)  
- **count** (number)  

**Returns** [DataTable](../Stimulsoft_System_Data/DataTable.md)


---

#### retrieveSchema

**retrieveSchema**(): StiDataSchema

**Returns** StiDataSchema


---

#### testConnection

**testConnection**(): [StiTestConnectionResult](StiTestConnectionResult.md)

**Returns** [StiTestConnectionResult](StiTestConnectionResult.md)


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **connectionString** | string |  |
| **content** | any |  |
| **value** | any |  |
| **variables** | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md)<string, object> |  |
