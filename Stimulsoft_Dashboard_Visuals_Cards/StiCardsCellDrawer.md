---
title: "StiCardsCellDrawer Class"
---

## StiCardsCellDrawer Class

**Namespace:** `Stimulsoft.Dashboard.Visuals.Cards`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **calculateIndicatorRect** `static` | [Rectangle](../Stimulsoft_System_Drawing/Rectangle.md) |  |
| **calculateTextRect** `static` | [Rectangle](../Stimulsoft_System_Drawing/Rectangle.md) |  |
| **castToArray** `static` | any[] |  |
| **drawText** `static` | void |  |
| **drawWordWrapText** `static` | void |  |
| **getCellText** `static` | string |  |
| **getColor** `static` | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **getMeasureText** `static` | string |  |
| **imageDraw** `static` | void |  |
| **sparklinesDraw** `static` | void |  |

---

### Method Details

#### calculateIndicatorRect `static`

**calculateIndicatorRect**(**rect**: [Rectangle](../Stimulsoft_System_Drawing/Rectangle.md), **column**: any, **zoom**: number, **textWidth**: number, **isExporting**: boolean): [Rectangle](../Stimulsoft_System_Drawing/Rectangle.md)

**Parameters**

- **rect** ([Rectangle](../Stimulsoft_System_Drawing/Rectangle.md))  
- **column** (any)  
- **zoom** (number)  
- **textWidth** (number)  
- **isExporting** (boolean)  

**Returns** [Rectangle](../Stimulsoft_System_Drawing/Rectangle.md)


---

#### calculateTextRect `static`

**calculateTextRect**(**rect**: [Rectangle](../Stimulsoft_System_Drawing/Rectangle.md), **column**: any, **zoom**: number, **textWidth**: number, **isExporting**: boolean): [Rectangle](../Stimulsoft_System_Drawing/Rectangle.md)

**Parameters**

- **rect** ([Rectangle](../Stimulsoft_System_Drawing/Rectangle.md))  
- **column** (any)  
- **zoom** (number)  
- **textWidth** (number)  
- **isExporting** (boolean)  

**Returns** [Rectangle](../Stimulsoft_System_Drawing/Rectangle.md)


---

#### castToArray `static`

**castToArray**(**value**: any): any[]

**Parameters**

- **value** (any)  

**Returns** any[]


---

#### drawText `static`

**drawText**(**context**: [StiContext](../Stimulsoft_Base_Context/StiContext.md), **text**: string, **font**: [Font](../Stimulsoft_Base_Dashboard/Font.md), **color**: [Color](../Stimulsoft_System_Drawing/Color.md), **horAlignment**: [StiHorAlignment](../Stimulsoft_Base_Drawing/StiHorAlignment.md), **vertAlignment**: [StiVertAlignment](../Stimulsoft_Base_Drawing/StiVertAlignment.md), **rect**: [Rectangle](../Stimulsoft_System_Drawing/Rectangle.md), **rectSize**: [Size](../Stimulsoft_System_Drawing/Size.md), **zoom**: number): void

**Parameters**

- **context** ([StiContext](../Stimulsoft_Base_Context/StiContext.md))  
- **text** (string)  
- **font** ([Font](../Stimulsoft_Base_Dashboard/Font.md))  
- **color** ([Color](../Stimulsoft_System_Drawing/Color.md))  
- **horAlignment** ([StiHorAlignment](../Stimulsoft_Base_Drawing/StiHorAlignment.md))  
- **vertAlignment** ([StiVertAlignment](../Stimulsoft_Base_Drawing/StiVertAlignment.md))  
- **rect** ([Rectangle](../Stimulsoft_System_Drawing/Rectangle.md))  
- **rectSize** ([Size](../Stimulsoft_System_Drawing/Size.md))  
- **zoom** (number)  


---

#### drawWordWrapText `static`

**drawWordWrapText**(**context**: [StiContext](../Stimulsoft_Base_Context/StiContext.md), **text**: string, **font**: [Font](../Stimulsoft_Base_Dashboard/Font.md), **color**: [Color](../Stimulsoft_System_Drawing/Color.md), **horAlignment**: [StiHorAlignment](../Stimulsoft_Base_Drawing/StiHorAlignment.md), **vertAlignment**: [StiVertAlignment](../Stimulsoft_Base_Drawing/StiVertAlignment.md), **rect**: [Rectangle](../Stimulsoft_System_Drawing/Rectangle.md), **rectSize**: [Size](../Stimulsoft_System_Drawing/Size.md), **zoom**: number): void

**Parameters**

- **context** ([StiContext](../Stimulsoft_Base_Context/StiContext.md))  
- **text** (string)  
- **font** ([Font](../Stimulsoft_Base_Dashboard/Font.md))  
- **color** ([Color](../Stimulsoft_System_Drawing/Color.md))  
- **horAlignment** ([StiHorAlignment](../Stimulsoft_Base_Drawing/StiHorAlignment.md))  
- **vertAlignment** ([StiVertAlignment](../Stimulsoft_Base_Drawing/StiVertAlignment.md))  
- **rect** ([Rectangle](../Stimulsoft_System_Drawing/Rectangle.md))  
- **rectSize** ([Size](../Stimulsoft_System_Drawing/Size.md))  
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

**getColor**(**foreColor**: [Color](../Stimulsoft_System_Drawing/Color.md), **value**: number, **style**: [IStiCellIndicatorStyle](../Stimulsoft_Report_Dashboard_Styles/IStiCellIndicatorStyle.md)): [Color](../Stimulsoft_System_Drawing/Color.md)

**Parameters**

- **foreColor** ([Color](../Stimulsoft_System_Drawing/Color.md))  
- **value** (number)  
- **style** ([IStiCellIndicatorStyle](../Stimulsoft_Report_Dashboard_Styles/IStiCellIndicatorStyle.md))  

**Returns** [Color](../Stimulsoft_System_Drawing/Color.md)


---

#### getMeasureText `static`

**getMeasureText**(**context**: [StiContext](../Stimulsoft_Base_Context/StiContext.md), **text**: string, **font**: StiFontGeom, **maxWidth**: number): string

**Parameters**

- **context** ([StiContext](../Stimulsoft_Base_Context/StiContext.md))  
- **text** (string)  
- **font** (StiFontGeom)  
- **maxWidth** (number)  

**Returns** string


---

#### imageDraw `static`

**imageDraw**(**context**: [StiContext](../Stimulsoft_Base_Context/StiContext.md), **rectItem**: [Rectangle](../Stimulsoft_System_Drawing/Rectangle.md), **value**: any): void

**Parameters**

- **context** ([StiContext](../Stimulsoft_Base_Context/StiContext.md))  
- **rectItem** ([Rectangle](../Stimulsoft_System_Drawing/Rectangle.md))  
- **value** (any)  


---

#### sparklinesDraw `static`

**sparklinesDraw**(**context**: [StiContext](../Stimulsoft_Base_Context/StiContext.md), **rect**: [Rectangle](../Stimulsoft_System_Drawing/Rectangle.md), **column**: StiSparklinesCardsColumn, **value**: any, **style**: StiCardsElementStyle): void

**Parameters**

- **context** ([StiContext](../Stimulsoft_Base_Context/StiContext.md))  
- **rect** ([Rectangle](../Stimulsoft_System_Drawing/Rectangle.md))  
- **column** (StiSparklinesCardsColumn)  
- **value** (any)  
- **style** (StiCardsElementStyle)  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **aPart** | any |  |
| **aPart** | any |  |
| **bPart** | any |  |
| **bPart** | any |  |
| **barRect** | any |  |
| **gPart** | any |  |
| **gPart** | any |  |
| **max** | any |  |
| **max** | any |  |
| **maxColor** | any |  |
| **maxColor** | any |  |
| **maxColor** | any |  |
| **maxColor** | any |  |
| **min** | any |  |
| **min** | any |  |
| **minColor** | any |  |
| **minColor** | any |  |
| **minColor** | any |  |
| **minColor** | any |  |
| **p0** | any |  |
| **p0** | any |  |
| **p1** | any |  |
| **p1** | any |  |
| **p2** | any |  |
| **p2** | any |  |
| **percent** | any |  |
| **percent** | any |  |
| **rPart** | any |  |
| **rPart** | any |  |
| **rect** | any |  |
| **rect** | any |  |
| **rect** | any |  |
| **rect** | any |  |
| **value** | any |  |
| **value** | any |  |
| **valuePart** | any |  |
| **x** | any |  |
| **x** | any |  |
| **x** | any |  |
| **x** | any |  |
| **x** | any |  |
| **x** | any |  |
| **y** | any |  |
| **y** | any |  |
| **y** | any |  |
| **y** | any |  |
| **y** | any |  |
| **y** | any |  |
