---
title: "StiElementChangedArgs Class"
---

## StiElementChangedArgs Class

**Namespace:** `Stimulsoft.Report.Dashboard`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **createClearingAllArgs** `static` | [StiElementChangedArgs](StiElementChangedArgs.md) |  |
| **createDeletingArgs** `static` | [StiElementChangedArgs](StiElementChangedArgs.md) |  |
| **createEmptyArgs** `static` | [StiElementChangedArgs](StiElementChangedArgs.md) |  |
| **createRenamingArgs** `static` | [StiElementChangedArgs](StiElementChangedArgs.md) |  |

---

### Method Details

#### createClearingAllArgs `static`

**createClearingAllArgs**(): [StiElementChangedArgs](StiElementChangedArgs.md)

**Returns** [StiElementChangedArgs](StiElementChangedArgs.md)


---

#### createDeletingArgs `static`

**createDeletingArgs**(**name**: string): [StiElementChangedArgs](StiElementChangedArgs.md)

**Parameters**

- **name** (string)  

**Returns** [StiElementChangedArgs](StiElementChangedArgs.md)


---

#### createEmptyArgs `static`

**createEmptyArgs**(): [StiElementChangedArgs](StiElementChangedArgs.md)

**Returns** [StiElementChangedArgs](StiElementChangedArgs.md)


---

#### createRenamingArgs `static`

**createRenamingArgs**(**oldName**: string, **newName**: string): [StiElementChangedArgs](StiElementChangedArgs.md)

**Parameters**

- **oldName** (string)  
- **newName** (string)  

**Returns** [StiElementChangedArgs](StiElementChangedArgs.md)


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **action** | [StiElementMeterAction](StiElementMeterAction.md) |  |
| **newName** | string |  |
| **oldName** | string |  |
