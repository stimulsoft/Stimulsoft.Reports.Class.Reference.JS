---
title: "DataRelation Class"
---

## DataRelation Class

**Namespace:** `Stimulsoft.System.Data`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(string relationName, [DataColumn](DataColumn.md)[] parentColumns, [DataColumn](DataColumn.md)[] childColumns) |  |

**constructor**(**relationName**: string, **parentColumns**: [DataColumn](DataColumn.md)[], **childColumns**: [DataColumn](DataColumn.md)[])

**Parameters**

- **relationName** (string)  
- **parentColumns** ([DataColumn](DataColumn.md)[])  
- **childColumns** ([DataColumn](DataColumn.md)[])  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **childColumns** | any[] |  |
| **childTable** | [DataTable](DataTable.md) |  |
| **parentColumns** | any[] |  |
| **parentTable** | [DataTable](DataTable.md) |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getChildRows** `static` | any[] |  |
| **getParentRows** `static` | any[] |  |
| **setDataSet** | void |  |

---

### Method Details

#### getChildRows `static`

**getChildRows**(**parentKey**: [DataKey](DataKey.md), **childKey**: [DataKey](DataKey.md), **parentRow**: [DataRow](DataRow.md)): any[]

**Parameters**

- **parentKey** ([DataKey](DataKey.md))  
- **childKey** ([DataKey](DataKey.md))  
- **parentRow** ([DataRow](DataRow.md))  

**Returns** any[]


---

#### getParentRows `static`

**getParentRows**(**parentKey**: [DataKey](DataKey.md), **childKey**: [DataKey](DataKey.md), **childRow**: [DataRow](DataRow.md)): any[]

**Parameters**

- **parentKey** ([DataKey](DataKey.md))  
- **childKey** ([DataKey](DataKey.md))  
- **childRow** ([DataRow](DataRow.md))  

**Returns** any[]


---

#### setDataSet

**setDataSet**(**dataSet**: [DataSet](DataSet.md)): void

**Parameters**

- **dataSet** ([DataSet](DataSet.md))  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **childKey** | [DataKey](DataKey.md) |  |
| **dataSet** | [DataSet](DataSet.md) |  |
| **parentKey** | [DataKey](DataKey.md) |  |
| **relationName** | string |  |
