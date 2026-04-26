---
title: "StiODataHelper Class"
---

## StiODataHelper Class

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
| **address** | string |  |
| **addressBearer** | string |  |
| **clientId** | string |  |
| **password** | string |  |
| **userName** | string |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **fillDataTable** | void |  |
| **getBearerAccessToken** `static` | string |  |
| **getColumns** | StiDataColumnSchema[] |  |
| **getNetType** `static` | [Type](../Stimulsoft_System/Type.md) |  |
| **retrieveSchema** | StiDataSchema |  |
| **testConnection** | [StiTestConnectionResult](StiTestConnectionResult.md) |  |

---

### Method Details

#### fillDataTable

**fillDataTable**(**table**: [DataTable](../Stimulsoft_System_Data/DataTable.md), **query**: string): void

**Parameters**

- **table** ([DataTable](../Stimulsoft_System_Data/DataTable.md))  
- **query** (string)  


---

#### getBearerAccessToken `static`

**getBearerAccessToken**(**url**: string, **userName**: string, **password**: string, **clientId**: string): string

**Parameters**

- **url** (string)  
- **userName** (string)  
- **password** (string)  
- **clientId** (string)  

**Returns** string


---

#### getColumns

**getColumns**(**collectionName**: string): StiDataColumnSchema[]

**Parameters**

- **collectionName** (string)  

**Returns** StiDataColumnSchema[]


---

#### getNetType `static`

**getNetType**(**dbType**: string): [Type](../Stimulsoft_System/Type.md)

**Parameters**

- **dbType** (string)  

**Returns** [Type](../Stimulsoft_System/Type.md)


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
| **allowException** | any |  |
| **baseTable** | any |  |
| **baseTable** | any |  |
| **connectionString** | string |  |
| **dbType** | any |  |
| **headers** | [Header](../Stimulsoft_System/Header.md)[] |  |
