---
title: "DataTable Class"
---

## DataTable Class

**Namespace:** `Stimulsoft.System.Data`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(any tableName) |  |

**constructor**(**tableName**: any)

**Parameters**

- **tableName** (any)  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **childRelations** | DataRelationCollection |  |
| **index** | any[] | Cache for DataKey.GetRows method |
| **parentRelations** | DataRelationCollection |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **addNewRow** | [DataRow](DataRow.md) |  |
| **addRow** | number |  |
| **clone** | [DataTable](DataTable.md) |  |
| **copy** | [DataTable](DataTable.md) |  |
| **loadDataRow** | [DataRow](DataRow.md) | Finds and updates a specific row. If no matching row is found, a new row is created using the given values. |
| **newRow** | [DataRow](DataRow.md) |  |
| **removeRow** | void |  |
| **setDataSet** | void |  |
| **toList** | [DataColumn](DataColumn.md)[] |  |

---

### Method Details

#### addNewRow

**addNewRow**(): [DataRow](DataRow.md)

**Returns** [DataRow](DataRow.md)


---

#### addRow

**addRow**(**row**: [DataRow](DataRow.md)): number

**Parameters**

- **row** ([DataRow](DataRow.md))  

**Returns** number


---

#### clone

**clone**(): [DataTable](DataTable.md)

**Returns** [DataTable](DataTable.md)


---

#### copy

**copy**(): [DataTable](DataTable.md)

**Returns** [DataTable](DataTable.md)


---

#### loadDataRow

**loadDataRow**(**values**: any[], **acceptChanges**: any): [DataRow](DataRow.md)

Finds and updates a specific row. If no matching row is found, a new row is created
using the given values.

**Parameters**

- **values** (any[]) — An array of values used to create the new row.  
- **acceptChanges** (any)  

**Returns** [DataRow](DataRow.md) — The new DataRow.


---

#### newRow

**newRow**(): [DataRow](DataRow.md)

**Returns** [DataRow](DataRow.md)


---

#### removeRow

**removeRow**(**row**: [DataRow](DataRow.md)): void

**Parameters**

- **row** ([DataRow](DataRow.md))  


---

#### setDataSet

**setDataSet**(**dataSet**: [DataSet](DataSet.md)): void

**Parameters**

- **dataSet** ([DataSet](DataSet.md))  


---

#### toList

**toList**(): [DataColumn](DataColumn.md)[]

**Returns** [DataColumn](DataColumn.md)[]

