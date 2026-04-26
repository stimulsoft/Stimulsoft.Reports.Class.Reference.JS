---
title: "DataStorage Class"
---

## DataStorage Class

**Namespace:** `Stimulsoft.System.Data`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([DataColumn](DataColumn.md) column) |  |

**constructor**(**column**: [DataColumn](DataColumn.md))

**Parameters**

- **column** ([DataColumn](DataColumn.md))  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **createStorage** `static` | [DataStorage](DataStorage.md) |  |
| **getValue** | any |  |
| **setStorage** | void |  |
| **setValue** | void |  |

---

### Method Details

#### createStorage `static`

**createStorage**(**column**: [DataColumn](DataColumn.md), **type**: [Type](../Stimulsoft_System/Type.md)): [DataStorage](DataStorage.md)

**Parameters**

- **column** ([DataColumn](DataColumn.md))  
- **type** ([Type](../Stimulsoft_System/Type.md))  

**Returns** [DataStorage](DataStorage.md)


---

#### getValue

**getValue**(**recordNo**: number): any

**Parameters**

- **recordNo** (number)  

**Returns** any


---

#### setStorage

**setStorage**(): void


---

#### setValue

**setValue**(**recordNo**: number, **value**: any): void

**Parameters**

- **recordNo** (number)  
- **value** (any)  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **values** | any[] |  |
