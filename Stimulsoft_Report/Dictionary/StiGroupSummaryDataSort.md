---
title: "StiGroupSummaryDataSort Class"
---

## StiGroupSummaryDataSort Class

**Namespace:** `Stimulsoft.Report.Dictionary`

### Inheritance

Implements: [IComparer](../../Stimulsoft_System/Collections/IComparer.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([Hashtable](../../Stimulsoft_System/Collections/Hashtable.md)<string, [Hashtable](../../Stimulsoft_System/Collections/Hashtable.md)<number, any>> groupSummaries, [Hashtable](../../Stimulsoft_System/Collections/Hashtable.md)<string, [Hashtable](../../Stimulsoft_System/Collections/Hashtable.md)<number, any>> groupLines, StiComponentsCollection groupHeaders, [Hashtable](../../Stimulsoft_System/Collections/Hashtable.md)<number, any> baseRowOrder) |  |

**constructor**(**groupSummaries**: [Hashtable](../../Stimulsoft_System/Collections/Hashtable.md)<string, [Hashtable](../../Stimulsoft_System/Collections/Hashtable.md)<number, any>>, **groupLines**: [Hashtable](../../Stimulsoft_System/Collections/Hashtable.md)<string, [Hashtable](../../Stimulsoft_System/Collections/Hashtable.md)<number, any>>, **groupHeaders**: StiComponentsCollection, **baseRowOrder**: [Hashtable](../../Stimulsoft_System/Collections/Hashtable.md)<number, any>)

**Parameters**

- **groupSummaries** ([Hashtable](../../Stimulsoft_System/Collections/Hashtable.md)<string, [Hashtable](../../Stimulsoft_System/Collections/Hashtable.md)<number, any>>)  
- **groupLines** ([Hashtable](../../Stimulsoft_System/Collections/Hashtable.md)<string, [Hashtable](../../Stimulsoft_System/Collections/Hashtable.md)<number, any>>)  
- **groupHeaders** (StiComponentsCollection)  
- **baseRowOrder** ([Hashtable](../../Stimulsoft_System/Collections/Hashtable.md)<number, any>)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clear** | void |  |
| **compare** | number |  |

---

### Method Details

#### clear

**clear**(): void


---

#### compare

**compare**(**row1**: [DataRow](../../Stimulsoft_System/Data/DataRow.md), **row2**: [DataRow](../../Stimulsoft_System/Data/DataRow.md)): number

**Parameters**

- **row1** ([DataRow](../../Stimulsoft_System/Data/DataRow.md))  
- **row2** ([DataRow](../../Stimulsoft_System/Data/DataRow.md))  

**Returns** number

