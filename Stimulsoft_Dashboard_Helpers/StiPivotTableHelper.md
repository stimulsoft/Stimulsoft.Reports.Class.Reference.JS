---
title: "StiPivotTableHelper Class"
---

## StiPivotTableHelper Class

**Namespace:** `Stimulsoft.Dashboard.Helpers`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **applyStyle** `static` | void |  |
| **buildCross** `static` | void |  |
| **getBackColor** `static` | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **getForeColor** `static` | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **getHeadersBounds** `static` | [Rectangle](../Stimulsoft_System_Drawing/Rectangle.md) |  |
| **getViewerData** `static` | Promise<any> |  |

---

### Method Details

#### applyStyle `static`

**applyStyle**(**pivot**: StiPivotTableElement, **crossTab**: StiCrossTab, **exportDataOnly**: boolean): void

**Parameters**

- **pivot** (StiPivotTableElement)  
- **crossTab** (StiCrossTab)  
- **exportDataOnly** (boolean)  


---

#### buildCross `static`

**buildCross**(**masterCrossTab**: StiCrossTab, **dataTable**: [StiDataTable](../Stimulsoft_Data_Engine/StiDataTable.md), **pivot**: StiPivotTableElement, **zoom**: any): void

**Parameters**

- **masterCrossTab** (StiCrossTab)  
- **dataTable** ([StiDataTable](../Stimulsoft_Data_Engine/StiDataTable.md))  
- **pivot** (StiPivotTableElement)  
- **zoom** (any)  


---

#### getBackColor `static`

**getBackColor**(**element**: IStiElement, **cells**: StiPivotTableCells, **style**: StiPivotElementStyle, **isInterlaced**: boolean, **isTotal**: boolean): [Color](../Stimulsoft_System_Drawing/Color.md)

**Parameters**

- **element** (IStiElement)  
- **cells** (StiPivotTableCells)  
- **style** (StiPivotElementStyle)  
- **isInterlaced** (boolean)  
- **isTotal** (boolean)  

**Returns** [Color](../Stimulsoft_System_Drawing/Color.md)


---

#### getForeColor `static`

**getForeColor**(**element**: IStiElement, **cells**: StiPivotTableCells, **style**: StiPivotElementStyle, **isInterlaced**: boolean, **isTotal**: boolean): [Color](../Stimulsoft_System_Drawing/Color.md)

**Parameters**

- **element** (IStiElement)  
- **cells** (StiPivotTableCells)  
- **style** (StiPivotElementStyle)  
- **isInterlaced** (boolean)  
- **isTotal** (boolean)  

**Returns** [Color](../Stimulsoft_System_Drawing/Color.md)


---

#### getHeadersBounds `static`

**getHeadersBounds**(**cells**: StiCell[][]): [Rectangle](../Stimulsoft_System_Drawing/Rectangle.md)

**Parameters**

- **cells** (StiCell[][])  

**Returns** [Rectangle](../Stimulsoft_System_Drawing/Rectangle.md)


---

#### getViewerData `static`

**getViewerData**(**pivotElement**: IStiPivotTableElement): Promise<any>

**Parameters**

- **pivotElement** (IStiPivotTableElement)  

**Returns** Promise<any>


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **column** | any |  |
| **crossTab** | any |  |
| **headerBottom** | any |  |
| **headerLeft** | any |  |
| **headerRight** | any |  |
| **headerTop** | any |  |
| **i** | any |  |
| **result** | any |  |
| **result** | any |  |
| **sizeIndex** | any |  |
| **storedExpression** | any |  |
| **totalCellGuid** | any |  |
