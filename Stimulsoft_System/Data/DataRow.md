---
title: "DataRow Class"
---

## DataRow Class

**Namespace:** `Stimulsoft.System.Data`

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **itemArray** | any[] |  |
| **recordIndex** | number |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **copyToDataTable** `static` | void |  |
| **create** `static` | [DataRow](DataRow.md) |  |
| **getChildRows** | any[] |  |
| **getDataColumn** | [DataColumn](DataColumn.md) |  |
| **getKeyValues** | any[] |  |
| **getParentRow** | [DataRow](DataRow.md) |  |
| **getParentRows** | any[] |  |
| **getValue** | any | Get DataRow value by column identificator |
| **getValueByIndex** | any | Get DataRow value by column index |
| **gett** | any |  |
| **setValue** | void | Set DataRow value by column identificator |
| **setValueByIndex** | void | Set DataRow value by column index |
| **sett** | void |  |

---

### Method Details

#### copyToDataTable `static`

**copyToDataTable**(**source**: [DataRow](DataRow.md)[]): void

**Parameters**

- **source** ([DataRow](DataRow.md)[])  


---

#### create `static`

**create**(**table**: [DataTable](DataTable.md)): [DataRow](DataRow.md)

**Parameters**

- **table** ([DataTable](DataTable.md))  

**Returns** [DataRow](DataRow.md)


---

#### getChildRows

**getChildRows**(**relationName**: string): any[]

**Parameters**

- **relationName** (string)  

**Returns** any[]


---

#### getDataColumn

**getDataColumn**(**columnName**: string): [DataColumn](DataColumn.md)

**Parameters**

- **columnName** (string)  

**Returns** [DataColumn](DataColumn.md)


---

#### getKeyValues

**getKeyValues**(**key**: [DataKey](DataKey.md)): any[]

**Parameters**

- **key** ([DataKey](DataKey.md))  

**Returns** any[]


---

#### getParentRow

**getParentRow**(**relationName**: string): [DataRow](DataRow.md)

**Parameters**

- **relationName** (string)  

**Returns** [DataRow](DataRow.md)


---

#### getParentRows

**getParentRows**(**relationName**: string): any[]

**Parameters**

- **relationName** (string)  

**Returns** any[]


---

#### getValue

**getValue**(**column**: number | string | DataColumn): any

Get DataRow value by column identificator

**Parameters**

- **column** (number | string | DataColumn)  

**Returns** any


---

#### getValueByIndex

**getValueByIndex**(**columnIndex**: number): any

Get DataRow value by column index

**Parameters**

- **columnIndex** (number)  

**Returns** any


---

#### gett

**gett**(**column**: number | string | DataColumn): any

**Parameters**

- **column** (number | string | DataColumn)  

**Returns** any


---

#### setValue

**setValue**(**column**: number | string | DataColumn, **value**: any): void

Set DataRow value by column identificator

**Parameters**

- **column** (number | string | DataColumn)  
- **value** (any)  


---

#### setValueByIndex

**setValueByIndex**(**columnIndex**: number, **value**: any): void

Set DataRow value by column index

**Parameters**

- **columnIndex** (number)  
- **value** (any)  


---

#### sett

**sett**(**column**: number | string | DataColumn, **value**: any): void

**Parameters**

- **column** (number | string | DataColumn)  
- **value** (any)  

