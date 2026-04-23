---
title: "StiTableElementGdiPainter Class"
---

## StiTableElementGdiPainter Class

**Namespace:** `Stimulsoft.Dashboard.Drawing.Painters`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getBackgroundColor** `static` | [Color](../../../../../Stimulsoft_System/Drawing/Color.md) |  |
| **measureBubbleCell** `static` | [Size](../../../../../Stimulsoft_System/Drawing/Size.md) |  |
| **measureCell** `static` | [Size](../../../../../Stimulsoft_System/Drawing/Size.md) |  |
| **measureCommonCell** `static` | [Size](../../../../../Stimulsoft_System/Drawing/Size.md) |  |
| **measureDataBarsCell** `static` | [Size](../../../../../Stimulsoft_System/Drawing/Size.md) |  |
| **measureHeader** `static` | [Size](../../../../../Stimulsoft_System/Drawing/Size.md) |  |
| **measureHeaders** `static` | void |  |
| **measureIndicatorCell** `static` | [Size](../../../../../Stimulsoft_System/Drawing/Size.md) |  |
| **measureSparklinesCell** `static` | [Size](../../../../../Stimulsoft_System/Drawing/Size.md) |  |

---

### Method Details

#### getBackgroundColor `static`

**getBackgroundColor**(**element**: IStiElement, **cells**: StiTableCells, **style**: StiTableElementStyle, **isInterlaced**: boolean): [Color](../../../../../Stimulsoft_System/Drawing/Color.md)

**Parameters**

- **element** (IStiElement)  
- **cells** (StiTableCells)  
- **style** (StiTableElementStyle)  
- **isInterlaced** (boolean)  

**Returns** [Color](../../../../../Stimulsoft_System/Drawing/Color.md)


---

#### measureBubbleCell `static`

**measureBubbleCell**(**g**: [Graphics](../../../../../Stimulsoft_System/Drawing/Graphics.md), **table**: StiTableElement, **column**: StiTableColumn, **rowValue**: any, **zoom**: number): [Size](../../../../../Stimulsoft_System/Drawing/Size.md)

**Parameters**

- **g** ([Graphics](../../../../../Stimulsoft_System/Drawing/Graphics.md))  
- **table** (StiTableElement)  
- **column** (StiTableColumn)  
- **rowValue** (any)  
- **zoom** (number)  

**Returns** [Size](../../../../../Stimulsoft_System/Drawing/Size.md)


---

#### measureCell `static`

**measureCell**(**caption**: string, **baseFont**: [Font](../../../../../Stimulsoft_Base/Dashboard/Font.md), **column**: StiTableColumn): [Size](../../../../../Stimulsoft_System/Drawing/Size.md)

**Parameters**

- **caption** (string)  
- **baseFont** ([Font](../../../../../Stimulsoft_Base/Dashboard/Font.md))  
- **column** (StiTableColumn)  

**Returns** [Size](../../../../../Stimulsoft_System/Drawing/Size.md)


---

#### measureCommonCell `static`

**measureCommonCell**(**g**: [Graphics](../../../../../Stimulsoft_System/Drawing/Graphics.md), **table**: StiTableElement, **column**: StiTableColumn, **rowValue**: any, **columnWidth**: number, **zoom**: number): [Size](../../../../../Stimulsoft_System/Drawing/Size.md)

**Parameters**

- **g** ([Graphics](../../../../../Stimulsoft_System/Drawing/Graphics.md))  
- **table** (StiTableElement)  
- **column** (StiTableColumn)  
- **rowValue** (any)  
- **columnWidth** (number)  
- **zoom** (number)  

**Returns** [Size](../../../../../Stimulsoft_System/Drawing/Size.md)


---

#### measureDataBarsCell `static`

**measureDataBarsCell**(**g**: [Graphics](../../../../../Stimulsoft_System/Drawing/Graphics.md), **table**: StiTableElement, **column**: StiTableColumn, **rowValue**: any, **zoom**: number): [Size](../../../../../Stimulsoft_System/Drawing/Size.md)

**Parameters**

- **g** ([Graphics](../../../../../Stimulsoft_System/Drawing/Graphics.md))  
- **table** (StiTableElement)  
- **column** (StiTableColumn)  
- **rowValue** (any)  
- **zoom** (number)  

**Returns** [Size](../../../../../Stimulsoft_System/Drawing/Size.md)


---

#### measureHeader `static`

**measureHeader**(**table**: StiTableElement, **column**: StiTableColumn): [Size](../../../../../Stimulsoft_System/Drawing/Size.md)

**Parameters**

- **table** (StiTableElement)  
- **column** (StiTableColumn)  

**Returns** [Size](../../../../../Stimulsoft_System/Drawing/Size.md)


---

#### measureHeaders `static`

**measureHeaders**(**columns**: StiTableColumn[], **baseFont**: [Font](../../../../../Stimulsoft_Base/Dashboard/Font.md)): void

**Parameters**

- **columns** (StiTableColumn[])  
- **baseFont** ([Font](../../../../../Stimulsoft_Base/Dashboard/Font.md))  


---

#### measureIndicatorCell `static`

**measureIndicatorCell**(**g**: [Graphics](../../../../../Stimulsoft_System/Drawing/Graphics.md), **table**: StiTableElement, **column**: StiTableColumn, **rowValue**: any, **zoom**: number): [Size](../../../../../Stimulsoft_System/Drawing/Size.md)

**Parameters**

- **g** ([Graphics](../../../../../Stimulsoft_System/Drawing/Graphics.md))  
- **table** (StiTableElement)  
- **column** (StiTableColumn)  
- **rowValue** (any)  
- **zoom** (number)  

**Returns** [Size](../../../../../Stimulsoft_System/Drawing/Size.md)


---

#### measureSparklinesCell `static`

**measureSparklinesCell**(**table**: StiTableElement, **columnWidth**: number, **zoom**: number): [Size](../../../../../Stimulsoft_System/Drawing/Size.md)

**Parameters**

- **table** (StiTableElement)  
- **columnWidth** (number)  
- **zoom** (number)  

**Returns** [Size](../../../../../Stimulsoft_System/Drawing/Size.md)

