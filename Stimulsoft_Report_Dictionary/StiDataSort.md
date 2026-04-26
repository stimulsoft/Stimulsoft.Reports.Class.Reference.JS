---
title: "StiDataSort Class"
---

## StiDataSort Class

**Namespace:** `Stimulsoft.Report.Dictionary`

### Inheritance

Implements: [IComparer](../Stimulsoft_System_Collections/IComparer.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([Hashtable](../Stimulsoft_System_Collections/Hashtable.md) rowToConditions, any[][][] conditions, string[] sortColumns, StiDataSource dataSource) |  |

**constructor**(**rowToConditions**: [Hashtable](../Stimulsoft_System_Collections/Hashtable.md), **conditions**: any[][][], **sortColumns**: string[], **dataSource**: StiDataSource)

**Parameters**

- **rowToConditions** ([Hashtable](../Stimulsoft_System_Collections/Hashtable.md))  
- **conditions** (any[][][])  
- **sortColumns** (string[])  
- **dataSource** (StiDataSource)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clear** | void |  |
| **compare** | number |  |
| **compareValues** | number |  |

---

### Method Details

#### clear

**clear**(): void


---

#### compare

**compare**(**x**: [DataRow](../Stimulsoft_System_Data/DataRow.md), **y**: [DataRow](../Stimulsoft_System_Data/DataRow.md)): number

**Parameters**

- **x** ([DataRow](../Stimulsoft_System_Data/DataRow.md))  
- **y** ([DataRow](../Stimulsoft_System_Data/DataRow.md))  

**Returns** number


---

#### compareValues

**compareValues**(**value1**: any, **value2**: any, **ascendary**: boolean): number

**Parameters**

- **value1** (any)  
- **value2** (any)  
- **ascendary** (boolean)  

**Returns** number


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **dataSource** | any |  |
| **sortRow1** | any |  |
| **sortRow1** | any |  |
| **sortRow2** | any |  |
| **sortRow2** | any |  |
| **value1** | any |  |
| **value1** | any |  |
| **value1** | any |  |
| **value1** | any |  |
| **value1** | any |  |
| **value2** | any |  |
| **value2** | any |  |
| **value2** | any |  |
| **value2** | any |  |
| **value2** | any |  |
