---
title: "StiDataSourceHelper Class"
---

## StiDataSourceHelper Class

**Namespace:** `Stimulsoft.Report.Dictionary`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **checkExpression** `static` | void |  |
| **getDataSourcesFromDatabase** `static` | StiDataSource[] |  |
| **getDataSourcesUsedInRequestFromUsersVariables** `static` | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md) |  |
| **getDatabaseFromDataSource** `static` | StiDatabase |  |
| **getDatabaseFromDataSource2** `static` | StiDatabase |  |
| **getUsedDataSourcesNames** `static` | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md) |  |
| **getUsedDataSourcesNamesList** `static` | string[] |  |

---

### Method Details

#### checkExpression `static`

**checkExpression**(**expression**: string, **component**: StiComponent, **datasourcesNames**: [Hashtable](../Stimulsoft_System_Collections/Hashtable.md)): void

**Parameters**

- **expression** (string)  
- **component** (StiComponent)  
- **datasourcesNames** ([Hashtable](../Stimulsoft_System_Collections/Hashtable.md))  


---

#### getDataSourcesFromDatabase `static`

**getDataSourcesFromDatabase**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **database**: StiDatabase): StiDataSource[]

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **database** (StiDatabase)  

**Returns** StiDataSource[]


---

#### getDataSourcesUsedInRequestFromUsersVariables `static`

**getDataSourcesUsedInRequestFromUsersVariables**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md)): [Hashtable](../Stimulsoft_System_Collections/Hashtable.md)

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  

**Returns** [Hashtable](../Stimulsoft_System_Collections/Hashtable.md)


---

#### getDatabaseFromDataSource `static`

**getDatabaseFromDataSource**(**dataSource**: StiDataSource): StiDatabase

**Parameters**

- **dataSource** (StiDataSource)  

**Returns** StiDatabase


---

#### getDatabaseFromDataSource2 `static`

**getDatabaseFromDataSource2**(**dataSource**: StiDataSource): StiDatabase

**Parameters**

- **dataSource** (StiDataSource)  

**Returns** StiDatabase


---

#### getUsedDataSourcesNames `static`

**getUsedDataSourcesNames**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md)): [Hashtable](../Stimulsoft_System_Collections/Hashtable.md)

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  

**Returns** [Hashtable](../Stimulsoft_System_Collections/Hashtable.md)


---

#### getUsedDataSourcesNamesList `static`

**getUsedDataSourcesNamesList**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md)): string[]

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  

**Returns** string[]


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **category** | any |  |
| **ds** | any |  |
| **ds** | any |  |
| **expression** | any |  |
| **hash** | any |  |
| **nameInSource** | any |  |
| **storeToPrint** | any |  |
