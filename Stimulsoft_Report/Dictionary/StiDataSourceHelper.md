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
| **getDataSourcesUsedInRequestFromUsersVariables** `static` | [Hashtable](../../Stimulsoft_System/Collections/Hashtable.md) |  |
| **getDatabaseFromDataSource** `static` | StiDatabase |  |
| **getDatabaseFromDataSource2** `static` | StiDatabase |  |
| **getUsedDataSourcesNames** `static` | [Hashtable](../../Stimulsoft_System/Collections/Hashtable.md) |  |
| **getUsedDataSourcesNamesList** `static` | string[] |  |

---

### Method Details

#### checkExpression `static`

**checkExpression**(**expression**: string, **component**: StiComponent, **datasourcesNames**: [Hashtable](../../Stimulsoft_System/Collections/Hashtable.md)): void

**Parameters**

- **expression** (string)  
- **component** (StiComponent)  
- **datasourcesNames** ([Hashtable](../../Stimulsoft_System/Collections/Hashtable.md))  


---

#### getDataSourcesFromDatabase `static`

**getDataSourcesFromDatabase**(**report**: [StiReport](../StiReport.md), **database**: StiDatabase): StiDataSource[]

**Parameters**

- **report** ([StiReport](../StiReport.md))  
- **database** (StiDatabase)  

**Returns** StiDataSource[]


---

#### getDataSourcesUsedInRequestFromUsersVariables `static`

**getDataSourcesUsedInRequestFromUsersVariables**(**report**: [StiReport](../StiReport.md)): [Hashtable](../../Stimulsoft_System/Collections/Hashtable.md)

**Parameters**

- **report** ([StiReport](../StiReport.md))  

**Returns** [Hashtable](../../Stimulsoft_System/Collections/Hashtable.md)


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

**getUsedDataSourcesNames**(**report**: [StiReport](../StiReport.md)): [Hashtable](../../Stimulsoft_System/Collections/Hashtable.md)

**Parameters**

- **report** ([StiReport](../StiReport.md))  

**Returns** [Hashtable](../../Stimulsoft_System/Collections/Hashtable.md)


---

#### getUsedDataSourcesNamesList `static`

**getUsedDataSourcesNamesList**(**report**: [StiReport](../StiReport.md)): string[]

**Parameters**

- **report** ([StiReport](../StiReport.md))  

**Returns** string[]

