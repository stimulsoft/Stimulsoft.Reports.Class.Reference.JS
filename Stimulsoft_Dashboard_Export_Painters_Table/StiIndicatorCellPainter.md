---
title: "StiIndicatorCellPainter Class"
---

## StiIndicatorCellPainter Class

**Namespace:** `Stimulsoft.Dashboard.Export.Painters.Table`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **calculateTextRect** `static` | [Rectangle](../Stimulsoft_System_Drawing/Rectangle.md) |  |
| **draw** `static` | void |  |
| **getCellText** `static` | string |  |
| **getColor** `static` | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **measureText** `static` | number |  |
| **toAlignment** `static` | [StringAlignment](../Stimulsoft_System_Drawing/StringAlignment.md) |  |

---

### Method Details

#### calculateTextRect `static`

**calculateTextRect**(**rect**: [Rectangle](../Stimulsoft_System_Drawing/Rectangle.md), **textObj**: any): [Rectangle](../Stimulsoft_System_Drawing/Rectangle.md)

**Parameters**

- **rect** ([Rectangle](../Stimulsoft_System_Drawing/Rectangle.md))  
- **textObj** (any)  

**Returns** [Rectangle](../Stimulsoft_System_Drawing/Rectangle.md)


---

#### draw `static`

**draw**(**writer**: [StiSvgGeomWriter](../Stimulsoft_Report_Export/StiSvgGeomWriter.md), **rect**: RectangleD, **table**: StiTableElement, **rowValues**: any[], **columnKeys**: string[], **column**: StiIndicatorColumn, **zoom**: number, **value**: number, **style**: StiTableElementStyle, **drawText**: any): void

**Parameters**

- **writer** ([StiSvgGeomWriter](../Stimulsoft_Report_Export/StiSvgGeomWriter.md))  
- **rect** (RectangleD)  
- **table** (StiTableElement)  
- **rowValues** (any[])  
- **columnKeys** (string[])  
- **column** (StiIndicatorColumn)  
- **zoom** (number)  
- **value** (number)  
- **style** (StiTableElementStyle)  
- **drawText** (any)  


---

#### getCellText `static`

**getCellText**(**table**: StiTableElement, **column**: StiIndicatorColumn, **value**: number): string

**Parameters**

- **table** (StiTableElement)  
- **column** (StiIndicatorColumn)  
- **value** (number)  

**Returns** string


---

#### getColor `static`

**getColor**(**column**: StiTableColumn, **value**: number, **style**: StiTableElementStyle): [Color](../Stimulsoft_System_Drawing/Color.md)

**Parameters**

- **column** (StiTableColumn)  
- **value** (number)  
- **style** (StiTableElementStyle)  

**Returns** [Color](../Stimulsoft_System_Drawing/Color.md)


---

#### measureText `static`

**measureText**(**zoom**: number, **text**: string, **baseFont**: [Font](../Stimulsoft_Base_Dashboard/Font.md)): number

**Parameters**

- **zoom** (number)  
- **text** (string)  
- **baseFont** ([Font](../Stimulsoft_Base_Dashboard/Font.md))  

**Returns** number


---

#### toAlignment `static`

**toAlignment**(**value**: [StiHorAlignment](../Stimulsoft_Base_Drawing/StiHorAlignment.md)): [StringAlignment](../Stimulsoft_System_Drawing/StringAlignment.md)

**Parameters**

- **value** ([StiHorAlignment](../Stimulsoft_Base_Drawing/StiHorAlignment.md))  

**Returns** [StringAlignment](../Stimulsoft_System_Drawing/StringAlignment.md)


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **drawText** | any |  |
| **indicatorColor** | any |  |
| **p0** | any |  |
| **p0** | any |  |
| **p1** | any |  |
| **p1** | any |  |
| **p2** | any |  |
| **p2** | any |  |
| **rect** | any |  |
| **rect** | any |  |
| **rect** | any |  |
| **rect** | any |  |
| **rect** | any |  |
