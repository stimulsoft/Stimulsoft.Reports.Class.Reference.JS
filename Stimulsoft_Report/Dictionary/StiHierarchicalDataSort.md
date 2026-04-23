---
title: "StiHierarchicalDataSort Class"
---

## StiHierarchicalDataSort Class

**Namespace:** `Stimulsoft.Report.Dictionary`

### Inheritance

Implements: [IComparer](../../Stimulsoft_System/Collections/IComparer.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(StiDataSource dataSource, StiHierarchicalBand band, string[] sortColumns) |  |

**constructor**(**dataSource**: StiDataSource, **band**: StiHierarchicalBand, **sortColumns**: string[])

**Parameters**

- **dataSource** (StiDataSource)  
- **band** (StiHierarchicalBand)  
- **sortColumns** (string[])  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **compare** | number |  |
| **process** | void |  |

---

### Method Details

#### compare

**compare**(**x**: any, **y**: any): number

**Parameters**

- **x** (any)  
- **y** (any)  

**Returns** number


---

#### process

**process**(**rowToConditions**: [Hashtable](../../Stimulsoft_System/Collections/Hashtable.md)): void

**Parameters**

- **rowToConditions** ([Hashtable](../../Stimulsoft_System/Collections/Hashtable.md))  

