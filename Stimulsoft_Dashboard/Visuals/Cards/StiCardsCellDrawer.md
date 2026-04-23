---
title: "StiCardsCellDrawer Class"
---

## StiCardsCellDrawer Class

**Namespace:** `Stimulsoft.Dashboard.Visuals.Cards`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **calculateIndicatorRect** `static` | [Rectangle](../../../Stimulsoft_System/Drawing/Rectangle.md) |  |
| **calculateTextRect** `static` | [Rectangle](../../../Stimulsoft_System/Drawing/Rectangle.md) |  |
| **castToArray** `static` | any[] |  |
| **drawText** `static` | void |  |
| **drawWordWrapText** `static` | void |  |
| **getCellText** `static` | string |  |
| **getColor** `static` | [Color](../../../Stimulsoft_System/Drawing/Color.md) |  |
| **getMeasureText** `static` | string |  |
| **imageDraw** `static` | void |  |
| **sparklinesDraw** `static` | void |  |

---

### Method Details

#### calculateIndicatorRect `static`

**calculateIndicatorRect**(**rect**: [Rectangle](../../../Stimulsoft_System/Drawing/Rectangle.md), **column**: any, **zoom**: number, **textWidth**: number, **isExporting**: boolean): [Rectangle](../../../Stimulsoft_System/Drawing/Rectangle.md)

**Parameters**

- **rect** ([Rectangle](../../../Stimulsoft_System/Drawing/Rectangle.md))  
- **column** (any)  
- **zoom** (number)  
- **textWidth** (number)  
- **isExporting** (boolean)  

**Returns** [Rectangle](../../../Stimulsoft_System/Drawing/Rectangle.md)


---

#### calculateTextRect `static`

**calculateTextRect**(**rect**: [Rectangle](../../../Stimulsoft_System/Drawing/Rectangle.md), **column**: any, **zoom**: number, **textWidth**: number, **isExporting**: boolean): [Rectangle](../../../Stimulsoft_System/Drawing/Rectangle.md)

**Parameters**

- **rect** ([Rectangle](../../../Stimulsoft_System/Drawing/Rectangle.md))  
- **column** (any)  
- **zoom** (number)  
- **textWidth** (number)  
- **isExporting** (boolean)  

**Returns** [Rectangle](../../../Stimulsoft_System/Drawing/Rectangle.md)


---

#### castToArray `static`

**castToArray**(**value**: any): any[]

**Parameters**

- **value** (any)  

**Returns** any[]


---

#### drawText `static`

**drawText**(**context**: [StiContext](../../../Stimulsoft_Report/Stimulsoft/Base/Context/StiContext.md), **text**: string, **font**: [Font](../../../Stimulsoft_Base/Dashboard/Font.md), **color**: [Color](../../../Stimulsoft_System/Drawing/Color.md), **horAlignment**: [StiHorAlignment](../../../Stimulsoft_Base/Drawing/StiHorAlignment.md), **vertAlignment**: [StiVertAlignment](../../../Stimulsoft_Base/Drawing/StiVertAlignment.md), **rect**: [Rectangle](../../../Stimulsoft_System/Drawing/Rectangle.md), **rectSize**: [Size](../../../Stimulsoft_System/Drawing/Size.md), **zoom**: number): void

**Parameters**

- **context** ([StiContext](../../../Stimulsoft_Report/Stimulsoft/Base/Context/StiContext.md))  
- **text** (string)  
- **font** ([Font](../../../Stimulsoft_Base/Dashboard/Font.md))  
- **color** ([Color](../../../Stimulsoft_System/Drawing/Color.md))  
- **horAlignment** ([StiHorAlignment](../../../Stimulsoft_Base/Drawing/StiHorAlignment.md))  
- **vertAlignment** ([StiVertAlignment](../../../Stimulsoft_Base/Drawing/StiVertAlignment.md))  
- **rect** ([Rectangle](../../../Stimulsoft_System/Drawing/Rectangle.md))  
- **rectSize** ([Size](../../../Stimulsoft_System/Drawing/Size.md))  
- **zoom** (number)  


---

#### drawWordWrapText `static`

**drawWordWrapText**(**context**: [StiContext](../../../Stimulsoft_Report/Stimulsoft/Base/Context/StiContext.md), **text**: string, **font**: [Font](../../../Stimulsoft_Base/Dashboard/Font.md), **color**: [Color](../../../Stimulsoft_System/Drawing/Color.md), **horAlignment**: [StiHorAlignment](../../../Stimulsoft_Base/Drawing/StiHorAlignment.md), **vertAlignment**: [StiVertAlignment](../../../Stimulsoft_Base/Drawing/StiVertAlignment.md), **rect**: [Rectangle](../../../Stimulsoft_System/Drawing/Rectangle.md), **rectSize**: [Size](../../../Stimulsoft_System/Drawing/Size.md), **zoom**: number): void

**Parameters**

- **context** ([StiContext](../../../Stimulsoft_Report/Stimulsoft/Base/Context/StiContext.md))  
- **text** (string)  
- **font** ([Font](../../../Stimulsoft_Base/Dashboard/Font.md))  
- **color** ([Color](../../../Stimulsoft_System/Drawing/Color.md))  
- **horAlignment** ([StiHorAlignment](../../../Stimulsoft_Base/Drawing/StiHorAlignment.md))  
- **vertAlignment** ([StiVertAlignment](../../../Stimulsoft_Base/Drawing/StiVertAlignment.md))  
- **rect** ([Rectangle](../../../Stimulsoft_System/Drawing/Rectangle.md))  
- **rectSize** ([Size](../../../Stimulsoft_System/Drawing/Size.md))  
- **zoom** (number)  


---

#### getCellText `static`

**getCellText**(**cards**: StiCardsElement, **column**: StiCardsColumn, **value**: number): string

**Parameters**

- **cards** (StiCardsElement)  
- **column** (StiCardsColumn)  
- **value** (number)  

**Returns** string


---

#### getColor `static`

**getColor**(**foreColor**: [Color](../../../Stimulsoft_System/Drawing/Color.md), **value**: number, **style**: [IStiCellIndicatorStyle](../../../Stimulsoft_Report/Dashboard/Styles/IStiCellIndicatorStyle.md)): [Color](../../../Stimulsoft_System/Drawing/Color.md)

**Parameters**

- **foreColor** ([Color](../../../Stimulsoft_System/Drawing/Color.md))  
- **value** (number)  
- **style** ([IStiCellIndicatorStyle](../../../Stimulsoft_Report/Dashboard/Styles/IStiCellIndicatorStyle.md))  

**Returns** [Color](../../../Stimulsoft_System/Drawing/Color.md)


---

#### getMeasureText `static`

**getMeasureText**(**context**: [StiContext](../../../Stimulsoft_Report/Stimulsoft/Base/Context/StiContext.md), **text**: string, **font**: StiFontGeom, **maxWidth**: number): string

**Parameters**

- **context** ([StiContext](../../../Stimulsoft_Report/Stimulsoft/Base/Context/StiContext.md))  
- **text** (string)  
- **font** (StiFontGeom)  
- **maxWidth** (number)  

**Returns** string


---

#### imageDraw `static`

**imageDraw**(**context**: [StiContext](../../../Stimulsoft_Report/Stimulsoft/Base/Context/StiContext.md), **rectItem**: [Rectangle](../../../Stimulsoft_System/Drawing/Rectangle.md), **value**: any): void

**Parameters**

- **context** ([StiContext](../../../Stimulsoft_Report/Stimulsoft/Base/Context/StiContext.md))  
- **rectItem** ([Rectangle](../../../Stimulsoft_System/Drawing/Rectangle.md))  
- **value** (any)  


---

#### sparklinesDraw `static`

**sparklinesDraw**(**context**: [StiContext](../../../Stimulsoft_Report/Stimulsoft/Base/Context/StiContext.md), **rect**: [Rectangle](../../../Stimulsoft_System/Drawing/Rectangle.md), **column**: StiSparklinesCardsColumn, **value**: any, **style**: StiCardsElementStyle): void

**Parameters**

- **context** ([StiContext](../../../Stimulsoft_Report/Stimulsoft/Base/Context/StiContext.md))  
- **rect** ([Rectangle](../../../Stimulsoft_System/Drawing/Rectangle.md))  
- **column** (StiSparklinesCardsColumn)  
- **value** (any)  
- **style** (StiCardsElementStyle)  

