---
title: "StiSortHelper Class"
---

## StiSortHelper Class

**Namespace:** `Stimulsoft.Report.Components`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **addColumnToSorting** `static` | string[] |  |
| **changeColumnSortDirection** `static` | string[] |  |
| **getColumnIndexInSorting** `static` | number |  |
| **getColumnSortDirection** `static` | [StiInteractionSortDirection](StiInteractionSortDirection.md) |  |
| **isColumnExistInSorting** `static` | boolean |  |

---

### Method Details

#### addColumnToSorting `static`

**addColumnToSorting**(**sorts**: string[], **columnName**: string, **isAscending**: boolean): string[]

**Parameters**

- **sorts** (string[])  
- **columnName** (string)  
- **isAscending** (boolean)  

**Returns** string[]


---

#### changeColumnSortDirection `static`

**changeColumnSortDirection**(**sorts**: string[], **columnName**: string): string[]

**Parameters**

- **sorts** (string[])  
- **columnName** (string)  

**Returns** string[]


---

#### getColumnIndexInSorting `static`

**getColumnIndexInSorting**(**sorts**: string[], **columnName**: string): number

**Parameters**

- **sorts** (string[])  
- **columnName** (string)  

**Returns** number


---

#### getColumnSortDirection `static`

**getColumnSortDirection**(**sorts**: string[], **columnName**: string): [StiInteractionSortDirection](StiInteractionSortDirection.md)

**Parameters**

- **sorts** (string[])  
- **columnName** (string)  

**Returns** [StiInteractionSortDirection](StiInteractionSortDirection.md)


---

#### isColumnExistInSorting `static`

**isColumnExistInSorting**(**sorts**: string[], **columnName**: string): boolean

**Parameters**

- **sorts** (string[])  
- **columnName** (string)  

**Returns** boolean


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **sortStr** | any |  |
