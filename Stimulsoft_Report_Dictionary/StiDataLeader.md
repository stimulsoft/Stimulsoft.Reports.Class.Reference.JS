---
title: "StiDataLeader Class"
---

## StiDataLeader Class

**Namespace:** `Stimulsoft.Report.Dictionary`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **callback** *(+1 overloads)* | void |  |
| **connect** `static` | void |  |
| **connectAsync** `static` | [StiPromise](../Stimulsoft_System/StiPromise.md)<void> |  |
| **connectAsync2** `static` | void |  |
| **disconnect** `static` | void |  |
| **existsInCache** `static` | boolean |  |
| **getDataSet** `static` | [DataSet](../Stimulsoft_System_Data/DataSet.md) |  |
| **regData** `static` | void |  |
| **regDataAsync** `static` | [StiPromise](../Stimulsoft_System/StiPromise.md)<void> |  |
| **reject** | void |  |
| **resolve** | void |  |
| **retrieveDataAsync** `static` | [StiPromise](../Stimulsoft_System/StiPromise.md)<void> |  |
| **retrieveSchema** `static` | StiDataSchema |  |

---

### Method Details

#### callback

**callback**(): void

---

**callback**(): void


---

#### connect `static`

**connect**(**dataSource**: StiDataSource, **datas**: StiDataCollection, **loadData**: any): void

**Parameters**

- **dataSource** (StiDataSource)  
- **datas** (StiDataCollection)  
- **loadData** (any)  


---

#### connectAsync `static`

**connectAsync**(**dataSource**: StiDataSource, **datas**: StiDataCollection, **loadData**: any): [StiPromise](../Stimulsoft_System/StiPromise.md)<void>

**Parameters**

- **dataSource** (StiDataSource)  
- **datas** (StiDataCollection)  
- **loadData** (any)  

**Returns** [StiPromise](../Stimulsoft_System/StiPromise.md)<void>


---

#### connectAsync2 `static`

**connectAsync2**(**dataSource**: StiDataSource, **datas**: StiDataCollection, **loadData**: any): void

**Parameters**

- **dataSource** (StiDataSource)  
- **datas** (StiDataCollection)  
- **loadData** (any)  


---

#### disconnect `static`

**disconnect**(**dataSource**: StiDataSource): void

**Parameters**

- **dataSource** (StiDataSource)  


---

#### existsInCache `static`

**existsInCache**(**database**: StiDatabase, **dictionary**: StiDictionary): boolean

**Parameters**

- **database** (StiDatabase)  
- **dictionary** (StiDictionary)  

**Returns** boolean


---

#### getDataSet `static`

**getDataSet**(**connector**: StiFileDataConnector, **options**: [StiFileDataOptions](../Stimulsoft_Base/StiFileDataOptions.md)): [DataSet](../Stimulsoft_System_Data/DataSet.md)

**Parameters**

- **connector** (StiFileDataConnector)  
- **options** ([StiFileDataOptions](../Stimulsoft_Base/StiFileDataOptions.md))  

**Returns** [DataSet](../Stimulsoft_System_Data/DataSet.md)


---

#### regData `static`

**regData**(**database**: StiDatabase, **dictionary**: StiDictionary, **loadData**: boolean): void

**Parameters**

- **database** (StiDatabase)  
- **dictionary** (StiDictionary)  
- **loadData** (boolean)  


---

#### regDataAsync `static`

**regDataAsync**(**database**: StiDatabase, **dictionary**: StiDictionary, **loadData**: boolean): [StiPromise](../Stimulsoft_System/StiPromise.md)<void>

**Parameters**

- **database** (StiDatabase)  
- **dictionary** (StiDictionary)  
- **loadData** (boolean)  

**Returns** [StiPromise](../Stimulsoft_System/StiPromise.md)<void>


---

#### reject

**reject**(**e**: any): void

**Parameters**

- **e** (any)  


---

#### resolve

**resolve**(): void


---

#### retrieveDataAsync `static`

**retrieveDataAsync**(**dataSource**: StiSqlSource, **schemaOnly**: any): [StiPromise](../Stimulsoft_System/StiPromise.md)<void>

**Parameters**

- **dataSource** (StiSqlSource)  
- **schemaOnly** (any)  

**Returns** [StiPromise](../Stimulsoft_System/StiPromise.md)<void>


---

#### retrieveSchema `static`

**retrieveSchema**(**connector**: StiFileDataConnector, **options**: [StiFileDataOptions](../Stimulsoft_Base/StiFileDataOptions.md)): StiDataSchema

**Parameters**

- **connector** (StiFileDataConnector)  
- **options** ([StiFileDataOptions](../Stimulsoft_Base/StiFileDataOptions.md))  

**Returns** StiDataSchema


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **loadData** | any |  |
| **loadData** | any |  |
