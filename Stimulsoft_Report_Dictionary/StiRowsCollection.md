---
title: "StiRowsCollection Class"
---

## StiRowsCollection Class

**Namespace:** `Stimulsoft.Report.Dictionary`

### Inheritance

Implements: [IEnumerator](../Stimulsoft_System_Collections/IEnumerator.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(StiDataSource dataSource) |  |

**constructor**(**dataSource**: StiDataSource)

**Parameters**

- **dataSource** (StiDataSource)  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **count** | number |  |
| **current** | any |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getEnumerator** | [IEnumerator](../Stimulsoft_System_Collections/IEnumerator.md) |  |
| **getbyIndex** | [StiRow](StiRow.md) |  |
| **moveNext** | boolean |  |
| **reset** | void |  |

---

### Method Details

#### getEnumerator

**getEnumerator**(): [IEnumerator](../Stimulsoft_System_Collections/IEnumerator.md)

**Returns** [IEnumerator](../Stimulsoft_System_Collections/IEnumerator.md)


---

#### getbyIndex

**getbyIndex**(**rowIndex**: number): [StiRow](StiRow.md)

**Parameters**

- **rowIndex** (number)  

**Returns** [StiRow](StiRow.md)


---

#### moveNext

**moveNext**(): boolean

**Returns** boolean


---

#### reset

**reset**(): void

