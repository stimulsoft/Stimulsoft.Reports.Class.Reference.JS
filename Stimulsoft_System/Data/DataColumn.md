---
title: "DataColumn Class"
---

## DataColumn Class

**Namespace:** `Stimulsoft.System.Data`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(string columnName, [Type](../Type.md) dataType, string caption) |  |

**constructor**(**columnName**: string, **dataType**: [Type](../Type.md), **caption**: string)

**Parameters**

- **columnName** (string)  
- **dataType** ([Type](../Type.md))  
- **caption** (string)  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **caption** | string |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **changeType** | void |  |
| **clone** | [DataColumn](DataColumn.md) |  |
| **getRecord** | any |  |
| **setRecord** | void |  |
| **setTable** | void |  |

---

### Method Details

#### changeType

**changeType**(**dataType**: [Type](../Type.md)): void

**Parameters**

- **dataType** ([Type](../Type.md))  


---

#### clone

**clone**(): [DataColumn](DataColumn.md)

**Returns** [DataColumn](DataColumn.md)


---

#### getRecord

**getRecord**(**record**: number): any

**Parameters**

- **record** (number)  

**Returns** any


---

#### setRecord

**setRecord**(**record**: number, **value**: any): void

**Parameters**

- **record** (number)  
- **value** (any)  


---

#### setTable

**setTable**(**table**: [DataTable](DataTable.md)): void

**Parameters**

- **table** ([DataTable](DataTable.md))  

