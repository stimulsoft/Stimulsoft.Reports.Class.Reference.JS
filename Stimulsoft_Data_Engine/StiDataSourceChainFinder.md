---
title: "StiDataSourceChainFinder Class"
---

## StiDataSourceChainFinder Class

**Namespace:** `Stimulsoft.Data.Engine`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **find** `static` | IStiAppDataSource[] |  |
| **findInBoth** `static` | IStiAppDataSource[] |  |
| **findInChild** `static` | IStiAppDataSource[] |  |
| **findInParent** `static` | IStiAppDataSource[] |  |

---

### Method Details

#### find `static`

**find**(**dataSources**: IStiAppDataSource[]): IStiAppDataSource[]

**Parameters**

- **dataSources** (IStiAppDataSource[])  

**Returns** IStiAppDataSource[]


---

#### findInBoth `static`

**findInBoth**(**dataSource1**: IStiAppDataSource, **dataSource2**: IStiAppDataSource): IStiAppDataSource[]

**Parameters**

- **dataSource1** (IStiAppDataSource)  
- **dataSource2** (IStiAppDataSource)  

**Returns** IStiAppDataSource[]


---

#### findInChild `static`

**findInChild**(**dataSource1**: IStiAppDataSource, **dataSource2**: IStiAppDataSource, **dataPath**: string[]): IStiAppDataSource[]

**Parameters**

- **dataSource1** (IStiAppDataSource)  
- **dataSource2** (IStiAppDataSource)  
- **dataPath** (string[])  

**Returns** IStiAppDataSource[]


---

#### findInParent `static`

**findInParent**(**dataSource1**: IStiAppDataSource, **dataSource2**: IStiAppDataSource, **dataPath**: string[]): IStiAppDataSource[]

**Parameters**

- **dataSource1** (IStiAppDataSource)  
- **dataSource2** (IStiAppDataSource)  
- **dataPath** (string[])  

**Returns** IStiAppDataSource[]


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **dataPath** | any |  |
| **dataPath** | any |  |
