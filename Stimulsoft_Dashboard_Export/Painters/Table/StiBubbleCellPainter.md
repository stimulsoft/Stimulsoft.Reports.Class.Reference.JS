---
title: "StiBubbleCellPainter Class"
---

## StiBubbleCellPainter Class

**Namespace:** `Stimulsoft.Dashboard.Export.Painters.Table`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **calculateBubbleRect** `static` | RectangleD |  |
| **calculateTextRect** `static` | RectangleD |  |
| **getCellText** `static` | string |  |
| **getForeColor** `static` | [Color](../../../Stimulsoft_System/Drawing/Color.md) |  |

---

### Method Details

#### calculateBubbleRect `static`

**calculateBubbleRect**(**table**: StiTableElement, **rect**: RectangleD, **textObj**: object, **value**: number, **min**: number, **max**: number): RectangleD

**Parameters**

- **table** (StiTableElement)  
- **rect** (RectangleD)  
- **textObj** (object)  
- **value** (number)  
- **min** (number)  
- **max** (number)  

**Returns** RectangleD


---

#### calculateTextRect `static`

**calculateTextRect**(**table**: StiTableElement, **rect**: RectangleD, **textObj**: object): RectangleD

**Parameters**

- **table** (StiTableElement)  
- **rect** (RectangleD)  
- **textObj** (object)  

**Returns** RectangleD


---

#### getCellText `static`

**getCellText**(**table**: StiTableElement, **column**: StiTableColumn, **value**: number): string

**Parameters**

- **table** (StiTableElement)  
- **column** (StiTableColumn)  
- **value** (number)  

**Returns** string


---

#### getForeColor `static`

**getForeColor**(**table**: StiTableElement, **column**: StiTableColumn, **style**: StiTableElementStyle, **isInterlaced**: boolean, **isSelected**: boolean): [Color](../../../Stimulsoft_System/Drawing/Color.md)

**Parameters**

- **table** (StiTableElement)  
- **column** (StiTableColumn)  
- **style** (StiTableElementStyle)  
- **isInterlaced** (boolean)  
- **isSelected** (boolean)  

**Returns** [Color](../../../Stimulsoft_System/Drawing/Color.md)

