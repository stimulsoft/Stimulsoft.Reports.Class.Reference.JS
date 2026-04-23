---
title: "StiCrossTabHelper Class"
---

## StiCrossTabHelper Class

**Namespace:** `Stimulsoft.Report.CrossTab`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **buildCross** `static` | void |  |
| **buildCrossForCrossTabDataSource** `static` | [DataTable](../../Stimulsoft_System/Data/DataTable.md) |  |
| **createCrossForCrossTabDataSource** `static` | [DataTable](../../Stimulsoft_System/Data/DataTable.md) |  |
| **getCellRect** `static` | RectangleD |  |
| **getCellsRect** `static` | SizeD |  |
| **renderCells** `static` | void |  |

---

### Method Details

#### buildCross `static`

**buildCross**(**masterCrossTab**: StiCrossTab, **designTime**: boolean): void

**Parameters**

- **masterCrossTab** (StiCrossTab)  
- **designTime** (boolean)  


---

#### buildCrossForCrossTabDataSource `static`

**buildCrossForCrossTabDataSource**(**masterCrossTab**: StiCrossTab, **designTime**: boolean): [DataTable](../../Stimulsoft_System/Data/DataTable.md)

**Parameters**

- **masterCrossTab** (StiCrossTab)  
- **designTime** (boolean)  

**Returns** [DataTable](../../Stimulsoft_System/Data/DataTable.md)


---

#### createCrossForCrossTabDataSource `static`

**createCrossForCrossTabDataSource**(**masterCrossTab**: StiCrossTab): [DataTable](../../Stimulsoft_System/Data/DataTable.md)

**Parameters**

- **masterCrossTab** (StiCrossTab)  

**Returns** [DataTable](../../Stimulsoft_System/Data/DataTable.md)


---

#### getCellRect `static`

**getCellRect**(**masterCrossTab**: StiCrossTab, **colIndex**: number, **rowIndex**: number): RectangleD

**Parameters**

- **masterCrossTab** (StiCrossTab)  
- **colIndex** (number)  
- **rowIndex** (number)  

**Returns** RectangleD


---

#### getCellsRect `static`

**getCellsRect**(**masterCrossTab**: StiCrossTab, **startCol**: number, **startRow**: number, **endCol**: number, **endRow**: number): SizeD

**Parameters**

- **masterCrossTab** (StiCrossTab)  
- **startCol** (number)  
- **startRow** (number)  
- **endCol** (number)  
- **endRow** (number)  

**Returns** SizeD


---

#### renderCells `static`

**renderCells**(**masterCrossTab**: StiCrossTab, **outContainer**: StiContainer, **startCol**: number, **startRow**: number, **endCol**: number, **endRow**: number, **rect**: RectangleD): void

**Parameters**

- **masterCrossTab** (StiCrossTab)  
- **outContainer** (StiContainer)  
- **startCol** (number)  
- **startRow** (number)  
- **endCol** (number)  
- **endRow** (number)  
- **rect** (RectangleD)  

