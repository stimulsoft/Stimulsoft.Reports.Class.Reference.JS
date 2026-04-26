---
title: "StiBusinessObjectSort Class"
---

## StiBusinessObjectSort Class

**Namespace:** `Stimulsoft.Report.Dictionary`

### Inheritance

Implements: [IComparer](../Stimulsoft_System_Collections/IComparer.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(string[] sortColumns, StiBusinessObject businessObject, [Hashtable](../Stimulsoft_System_Collections/Hashtable.md) rowToConditions, any[][][] conditions) |  |

**constructor**(**sortColumns**: string[], **businessObject**: StiBusinessObject, **rowToConditions**: [Hashtable](../Stimulsoft_System_Collections/Hashtable.md), **conditions**: any[][][])

**Parameters**

- **sortColumns** (string[])  
- **businessObject** (StiBusinessObject)  
- **rowToConditions** ([Hashtable](../Stimulsoft_System_Collections/Hashtable.md))  
- **conditions** (any[][][])  


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

**compare**(**x**: any, **y**: any): number

**Parameters**

- **x** (any)  
- **y** (any)  

**Returns** number


---

#### compareValues

**compareValues**(**value1**: any, **value2**: any, **ascendary**: any): number

**Parameters**

- **value1** (any)  
- **value2** (any)  
- **ascendary** (any)  

**Returns** number

