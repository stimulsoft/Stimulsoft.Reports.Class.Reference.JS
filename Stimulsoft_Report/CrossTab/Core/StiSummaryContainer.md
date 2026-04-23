---
title: "StiSummaryContainer Class"
---

## StiSummaryContainer Class

**Namespace:** `Stimulsoft.Report.CrossTab.Core`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(number level) |  |

**constructor**(**level**: number)

**Parameters**

- **level** (number)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getArguments** | [Hashtable](../../../Stimulsoft_System/Collections/Hashtable.md)<string, any[]> |  |
| **getDataCol** | [Hashtable](../../../Stimulsoft_System/Collections/Hashtable.md) |  |
| **getSummary** | [StiSummary](StiSummary.md) |  |

---

### Method Details

#### getArguments

**getArguments**(**argValues**: [Hashtable](../../../Stimulsoft_System/Collections/Hashtable.md)<string, string>): [Hashtable](../../../Stimulsoft_System/Collections/Hashtable.md)<string, any[]>

**Parameters**

- **argValues** ([Hashtable](../../../Stimulsoft_System/Collections/Hashtable.md)<string, string>)  

**Returns** [Hashtable](../../../Stimulsoft_System/Collections/Hashtable.md)<string, any[]>


---

#### getDataCol

**getDataCol**(): [Hashtable](../../../Stimulsoft_System/Collections/Hashtable.md)

**Returns** [Hashtable](../../../Stimulsoft_System/Collections/Hashtable.md)


---

#### getSummary

**getSummary**(**col**: [StiColumn](StiColumn.md), **row**: [StiRow](../../Dictionary/StiRow.md), **create**: any): [StiSummary](StiSummary.md)

**Parameters**

- **col** ([StiColumn](StiColumn.md))  
- **row** ([StiRow](../../Dictionary/StiRow.md))  
- **create** (any)  

**Returns** [StiSummary](StiSummary.md)

