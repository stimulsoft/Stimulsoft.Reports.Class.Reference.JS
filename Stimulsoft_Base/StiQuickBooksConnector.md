---
title: "StiQuickBooksConnector Class"
---

## StiQuickBooksConnector Class

**Namespace:** `Stimulsoft.Base`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(any connectionString) |  |

**constructor**(**connectionString**: any)

**Parameters**

- **connectionString** (any)  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **accessToken** | string |  |
| **authorizationCode** | string |  |
| **clientId** | string |  |
| **clientIdPrivate** | string |  |
| **clientSecret** | string |  |
| **clientSecretPrivate** | string |  |
| **realmId** | string |  |
| **redirectURL** | string |  |
| **redirectURLPrivate** | string |  |
| **refreshToken** | string |  |
| **useApp** | boolean |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **Get** `static` | [StiQuickBooksConnector](StiQuickBooksConnector.md) |  |
| **fillAuthorizationCode** | void |  |
| **fillDataTable** | void |  |
| **fillTokens** | void |  |
| **getDataTable** | [DataTable](../Stimulsoft_System_Data/DataTable.md) |  |
| **getSampleConnectionString** | string |  |
| **refreshAccessToken** | void |  |
| **retrieveSchema** | StiDataSchema |  |

---

### Method Details

#### Get `static`

**Get**(**connectionString**: string): [StiQuickBooksConnector](StiQuickBooksConnector.md)

**Parameters**

- **connectionString** (string)  

**Returns** [StiQuickBooksConnector](StiQuickBooksConnector.md)


---

#### fillAuthorizationCode

**fillAuthorizationCode**(): void


---

#### fillDataTable

**fillDataTable**(**table**: [DataTable](../Stimulsoft_System_Data/DataTable.md), **query**: string): void

**Parameters**

- **table** ([DataTable](../Stimulsoft_System_Data/DataTable.md))  
- **query** (string)  


---

#### fillTokens

**fillTokens**(): void


---

#### getDataTable

**getDataTable**(**collectionName**: string, **query**: string): [DataTable](../Stimulsoft_System_Data/DataTable.md)

**Parameters**

- **collectionName** (string)  
- **query** (string)  

**Returns** [DataTable](../Stimulsoft_System_Data/DataTable.md)


---

#### getSampleConnectionString

**getSampleConnectionString**(): string

**Returns** string


---

#### refreshAccessToken

**refreshAccessToken**(): void


---

#### retrieveSchema

**retrieveSchema**(**allowException**: any): StiDataSchema

**Parameters**

- **allowException** (any)  

**Returns** StiDataSchema


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **connectionIdent** | any | Gets a type of the connection helper. |
| **connectionOrder** | any | Gets an order of the connector. |
| **connectionString** | string | Gets connection string to the database. |
| **connectionTimeout** | any |  |
| **isAvailable** | any |  |
| **name** | any |  |
| **query** | any |  |
