---
title: "StiDataPicker Class"
---

## StiDataPicker Class

**Namespace:** `Stimulsoft.Data.Engine`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **addTableNameToColumnNames** `static` | void |  |
| **addToCache** `static` | void |  |
| **cleanCache** `static` | void |  |
| **existsInCache** `static` | boolean |  |
| **fetch2** `static` | [DataTable](../../Stimulsoft_System/Data/DataTable.md) |  |
| **fetch2Async** `static` | Promise<[DataTable](../../Stimulsoft_System/Data/DataTable.md)> |  |
| **fetch3** `static` | [DataTable](../../Stimulsoft_System/Data/DataTable.md) |  |
| **fetch3Async** `static` | Promise<[DataTable](../../Stimulsoft_System/Data/DataTable.md)> |  |
| **fetchAsync** `static` | Promise<[DataTable](../../Stimulsoft_System/Data/DataTable.md)[]> | Returns all data tables which is used in all elements of the dashboard |
| **getDataTable** `static` | [DataTable](../../Stimulsoft_System/Data/DataTable.md) |  |
| **getDataTable2** `static` | [DataTable](../../Stimulsoft_System/Data/DataTable.md) |  |
| **getDataTable2Async** `static` | Promise<[DataTable](../../Stimulsoft_System/Data/DataTable.md)> |  |
| **getDataTableAsync** `static` | Promise<[DataTable](../../Stimulsoft_System/Data/DataTable.md)> |  |
| **getFromCache** `static` | [DataTable](../../Stimulsoft_System/Data/DataTable.md) |  |
| **isAllBICached** `static` | boolean |  |
| **processCalculatedColumns** `static` | [DataTable](../../Stimulsoft_System/Data/DataTable.md) |  |
| **processCalculatedColumnsAsync** `static` | Promise<[DataTable](../../Stimulsoft_System/Data/DataTable.md)> |  |
| **retrieveUsedDataSources** `static` | IStiAppDataSource[] |  |

---

### Method Details

#### addTableNameToColumnNames `static`

**addTableNameToColumnNames**(**table**: [DataTable](../../Stimulsoft_System/Data/DataTable.md), **dataSource**: IStiAppDataSource): void

**Parameters**

- **table** ([DataTable](../../Stimulsoft_System/Data/DataTable.md))  
- **dataSource** (IStiAppDataSource)  


---

#### addToCache `static`

**addToCache**(**dataSource**: IStiAppDataSource, **dataTable**: { ref: DataTable }): void

**Parameters**

- **dataSource** (IStiAppDataSource)  
- **dataTable** ({ ref: DataTable })  


---

#### cleanCache `static`

**cleanCache**(**appKey**: string): void

**Parameters**

- **appKey** (string)  


---

#### existsInCache `static`

**existsInCache**(**dataSource**: IStiAppDataSource): boolean

**Parameters**

- **dataSource** (IStiAppDataSource)  

**Returns** boolean


---

#### fetch2 `static`

**fetch2**(**app**: IStiApp, **dataSourceName**: string, **option**: [StiDataRequestOption](StiDataRequestOption.md)): [DataTable](../../Stimulsoft_System/Data/DataTable.md)

**Parameters**

- **app** (IStiApp)  
- **dataSourceName** (string)  
- **option** ([StiDataRequestOption](StiDataRequestOption.md))  

**Returns** [DataTable](../../Stimulsoft_System/Data/DataTable.md)


---

#### fetch2Async `static`

**fetch2Async**(**app**: IStiApp, **dataSourceName**: string, **option**: [StiDataRequestOption](StiDataRequestOption.md)): Promise<[DataTable](../../Stimulsoft_System/Data/DataTable.md)>

**Parameters**

- **app** (IStiApp)  
- **dataSourceName** (string)  
- **option** ([StiDataRequestOption](StiDataRequestOption.md))  

**Returns** Promise<[DataTable](../../Stimulsoft_System/Data/DataTable.md)>


---

#### fetch3 `static`

**fetch3**(**app**: IStiApp, **dataSource**: IStiAppDataSource, **option**: [StiDataRequestOption](StiDataRequestOption.md)): [DataTable](../../Stimulsoft_System/Data/DataTable.md)

**Parameters**

- **app** (IStiApp)  
- **dataSource** (IStiAppDataSource)  
- **option** ([StiDataRequestOption](StiDataRequestOption.md))  

**Returns** [DataTable](../../Stimulsoft_System/Data/DataTable.md)


---

#### fetch3Async `static`

**fetch3Async**(**app**: IStiApp, **dataSource**: IStiAppDataSource, **option**: [StiDataRequestOption](StiDataRequestOption.md)): Promise<[DataTable](../../Stimulsoft_System/Data/DataTable.md)>

**Parameters**

- **app** (IStiApp)  
- **dataSource** (IStiAppDataSource)  
- **option** ([StiDataRequestOption](StiDataRequestOption.md))  

**Returns** Promise<[DataTable](../../Stimulsoft_System/Data/DataTable.md)>


---

#### fetchAsync `static`

**fetchAsync**(**query**: IStiQueryObject, **group**: string, **option**: [StiDataRequestOption](StiDataRequestOption.md), **filterNames**: string[], **links**: [StiDataLink](StiDataLink.md)[]): Promise<[DataTable](../../Stimulsoft_System/Data/DataTable.md)[]>

Returns all data tables which is used in all elements of the dashboard

**Parameters**

- **query** (IStiQueryObject)  
- **group** (string)  
- **option** ([StiDataRequestOption](StiDataRequestOption.md))  
- **filterNames** (string[])  
- **links** ([StiDataLink](StiDataLink.md)[])  

**Returns** Promise<[DataTable](../../Stimulsoft_System/Data/DataTable.md)[]>


---

#### getDataTable `static`

**getDataTable**(**app**: IStiApp, **dataSource**: IStiAppDataSource, **option**: [StiDataRequestOption](StiDataRequestOption.md)): [DataTable](../../Stimulsoft_System/Data/DataTable.md)

**Parameters**

- **app** (IStiApp)  
- **dataSource** (IStiAppDataSource)  
- **option** ([StiDataRequestOption](StiDataRequestOption.md))  

**Returns** [DataTable](../../Stimulsoft_System/Data/DataTable.md)


---

#### getDataTable2 `static`

**getDataTable2**(**option**: [StiDataRequestOption](StiDataRequestOption.md), **dataSource**: IStiAppDataSource): [DataTable](../../Stimulsoft_System/Data/DataTable.md)

**Parameters**

- **option** ([StiDataRequestOption](StiDataRequestOption.md))  
- **dataSource** (IStiAppDataSource)  

**Returns** [DataTable](../../Stimulsoft_System/Data/DataTable.md)


---

#### getDataTable2Async `static`

**getDataTable2Async**(**option**: [StiDataRequestOption](StiDataRequestOption.md), **dataSource**: IStiAppDataSource): Promise<[DataTable](../../Stimulsoft_System/Data/DataTable.md)>

**Parameters**

- **option** ([StiDataRequestOption](StiDataRequestOption.md))  
- **dataSource** (IStiAppDataSource)  

**Returns** Promise<[DataTable](../../Stimulsoft_System/Data/DataTable.md)>


---

#### getDataTableAsync `static`

**getDataTableAsync**(**app**: IStiApp, **dataSource**: IStiAppDataSource, **option**: [StiDataRequestOption](StiDataRequestOption.md)): Promise<[DataTable](../../Stimulsoft_System/Data/DataTable.md)>

**Parameters**

- **app** (IStiApp)  
- **dataSource** (IStiAppDataSource)  
- **option** ([StiDataRequestOption](StiDataRequestOption.md))  

**Returns** Promise<[DataTable](../../Stimulsoft_System/Data/DataTable.md)>


---

#### getFromCache `static`

**getFromCache**(**dataSource**: IStiAppDataSource): [DataTable](../../Stimulsoft_System/Data/DataTable.md)

**Parameters**

- **dataSource** (IStiAppDataSource)  

**Returns** [DataTable](../../Stimulsoft_System/Data/DataTable.md)


---

#### isAllBICached `static`

**isAllBICached**(**query**: IStiQueryObject, **group**: string, **option**: [StiDataRequestOption](StiDataRequestOption.md)): boolean

**Parameters**

- **query** (IStiQueryObject)  
- **group** (string)  
- **option** ([StiDataRequestOption](StiDataRequestOption.md))  

**Returns** boolean


---

#### processCalculatedColumns `static`

**processCalculatedColumns**(**dataTable**: [DataTable](../../Stimulsoft_System/Data/DataTable.md), **dataSource**: IStiAppDataSource): [DataTable](../../Stimulsoft_System/Data/DataTable.md)

**Parameters**

- **dataTable** ([DataTable](../../Stimulsoft_System/Data/DataTable.md))  
- **dataSource** (IStiAppDataSource)  

**Returns** [DataTable](../../Stimulsoft_System/Data/DataTable.md)


---

#### processCalculatedColumnsAsync `static`

**processCalculatedColumnsAsync**(**dataTable**: [DataTable](../../Stimulsoft_System/Data/DataTable.md), **dataSource**: IStiAppDataSource): Promise<[DataTable](../../Stimulsoft_System/Data/DataTable.md)>

**Parameters**

- **dataTable** ([DataTable](../../Stimulsoft_System/Data/DataTable.md))  
- **dataSource** (IStiAppDataSource)  

**Returns** Promise<[DataTable](../../Stimulsoft_System/Data/DataTable.md)>


---

#### retrieveUsedDataSources `static`

**retrieveUsedDataSources**(**query**: IStiQueryObject, **group**: string, **filterNames**: string[]): IStiAppDataSource[]

**Parameters**

- **query** (IStiQueryObject)  
- **group** (string)  
- **filterNames** (string[])  

**Returns** IStiAppDataSource[]

