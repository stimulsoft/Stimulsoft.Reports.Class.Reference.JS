---
title: "DataKey Class"
---

## DataKey Class

**Namespace:** `Stimulsoft.System.Data`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([DataColumn](DataColumn.md)[] columns, boolean copyColumns) |  |

**constructor**(**columns**: [DataColumn](DataColumn.md)[], **copyColumns**: boolean)

**Parameters**

- **columns** ([DataColumn](DataColumn.md)[])  
- **copyColumns** (boolean)  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **columnsReference** | any[] |  |
| **table** | [DataTable](DataTable.md) |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getKeyValues** | any[] |  |
| **getRows** | any[] |  |
| **toArray** | any[] |  |

---

### Method Details

#### getKeyValues

**getKeyValues**(**record**: number): any[]

**Parameters**

- **record** (number)  

**Returns** any[]


---

#### getRows

**getRows**(**values**: any[], **valueColumns**: [DataColumn](DataColumn.md)[]): any[]

**Parameters**

- **values** (any[])  
- **valueColumns** ([DataColumn](DataColumn.md)[])  

**Returns** any[]


---

#### toArray

**toArray**(): any[]

**Returns** any[]

