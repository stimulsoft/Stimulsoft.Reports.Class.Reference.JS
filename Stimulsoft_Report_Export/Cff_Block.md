---
title: "Cff_Block Class"
---

## Cff_Block Class

**Namespace:** `Stimulsoft.Report.Export`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([Cff](Cff.md) cff, string name, any addToPool) |  |

**constructor**(**cff**: [Cff](Cff.md), **name**: string, **addToPool**: any)

**Parameters**

- **cff** ([Cff](Cff.md))  
- **name** (string)  
- **addToPool** (any)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **read** | void |  |
| **save** | void |  |
| **toString** | string |  |

---

### Method Details

#### read

**read**(**offset**: number, **length**: number): void

**Parameters**

- **offset** (number)  
- **length** (number)  


---

#### save

**save**(**main**: any): void

**Parameters**

- **main** (any)  


---

#### toString

**toString**(): string

**Returns** string


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **Cff_NewOffset** | number |  |
| **Cff_NewSize** | number |  |
| **Cff_Offset** | number |  |
| **Cff_Size** | number |  |
| **Name** | string |  |
| **cff** | [Cff](Cff.md) |  |
