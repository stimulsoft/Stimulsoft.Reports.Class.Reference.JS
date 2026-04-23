---
title: "IStiStyleCoreXF Interface"
---

## IStiStyleCoreXF Interface

**Namespace:** `Stimulsoft.Report.Chart`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **fillCicledColumn** | void |  |
| **fillColumn** | void |  |
| **getAreaBrush** | [StiBrush](../../Stimulsoft_Base/Drawing/StiBrush.md) |  |
| **getColorByIndex** | [Color](../../Stimulsoft_System/Drawing/Color.md) |  |
| **getColorBySeries** | [Color](../../Stimulsoft_System/Drawing/Color.md) |  |
| **getColors** | [Color](../../Stimulsoft_System/Drawing/Color.md)[] |  |
| **getColumnBorder** | [Color](../../Stimulsoft_System/Drawing/Color.md) |  |
| **getColumnBrush** | [StiBrush](../../Stimulsoft_Base/Drawing/StiBrush.md) |  |

---

### Method Details

#### fillCicledColumn

**fillCicledColumn**(**context**: [StiContext](../Stimulsoft/Base/Context/StiContext.md), **rect**: RectangleD, **cornerRadius**: StiCornerRadius, **brush**: [StiBrush](../../Stimulsoft_Base/Drawing/StiBrush.md), **interaction**: [StiInteractionDataGeom](../Stimulsoft/Base/Context/StiInteractionDataGeom.md), **tooltip**: string): void

**Parameters**

- **context** ([StiContext](../Stimulsoft/Base/Context/StiContext.md))  
- **rect** (RectangleD)  
- **cornerRadius** (StiCornerRadius)  
- **brush** ([StiBrush](../../Stimulsoft_Base/Drawing/StiBrush.md))  
- **interaction** ([StiInteractionDataGeom](../Stimulsoft/Base/Context/StiInteractionDataGeom.md))  
- **tooltip** (string)  


---

#### fillColumn

**fillColumn**(**context**: [StiContext](../Stimulsoft/Base/Context/StiContext.md), **rect**: RectangleD, **brush**: [StiBrush](../../Stimulsoft_Base/Drawing/StiBrush.md), **interaction**: [StiInteractionDataGeom](../Stimulsoft/Base/Context/StiInteractionDataGeom.md)): void

**Parameters**

- **context** ([StiContext](../Stimulsoft/Base/Context/StiContext.md))  
- **rect** (RectangleD)  
- **brush** ([StiBrush](../../Stimulsoft_Base/Drawing/StiBrush.md))  
- **interaction** ([StiInteractionDataGeom](../Stimulsoft/Base/Context/StiInteractionDataGeom.md))  


---

#### getAreaBrush

**getAreaBrush**(**color**: [Color](../../Stimulsoft_System/Drawing/Color.md)): [StiBrush](../../Stimulsoft_Base/Drawing/StiBrush.md)

**Parameters**

- **color** ([Color](../../Stimulsoft_System/Drawing/Color.md))  

**Returns** [StiBrush](../../Stimulsoft_Base/Drawing/StiBrush.md)


---

#### getColorByIndex

**getColorByIndex**(**index**: number, **count**: number, **seriesColor**: [Color](../../Stimulsoft_System/Drawing/Color.md)[]): [Color](../../Stimulsoft_System/Drawing/Color.md)

**Parameters**

- **index** (number)  
- **count** (number)  
- **seriesColor** ([Color](../../Stimulsoft_System/Drawing/Color.md)[])  

**Returns** [Color](../../Stimulsoft_System/Drawing/Color.md)


---

#### getColorBySeries

**getColorBySeries**(**series**: IStiSeries, **seriesColor**: [Color](../../Stimulsoft_System/Drawing/Color.md)[]): [Color](../../Stimulsoft_System/Drawing/Color.md)

**Parameters**

- **series** (IStiSeries)  
- **seriesColor** ([Color](../../Stimulsoft_System/Drawing/Color.md)[])  

**Returns** [Color](../../Stimulsoft_System/Drawing/Color.md)


---

#### getColors

**getColors**(**seriesCount**: number, **seriesColors**: [Color](../../Stimulsoft_System/Drawing/Color.md)[]): [Color](../../Stimulsoft_System/Drawing/Color.md)[]

**Parameters**

- **seriesCount** (number)  
- **seriesColors** ([Color](../../Stimulsoft_System/Drawing/Color.md)[])  

**Returns** [Color](../../Stimulsoft_System/Drawing/Color.md)[]


---

#### getColumnBorder

**getColumnBorder**(**color**: [Color](../../Stimulsoft_System/Drawing/Color.md)): [Color](../../Stimulsoft_System/Drawing/Color.md)

**Parameters**

- **color** ([Color](../../Stimulsoft_System/Drawing/Color.md))  

**Returns** [Color](../../Stimulsoft_System/Drawing/Color.md)


---

#### getColumnBrush

**getColumnBrush**(**color**: [Color](../../Stimulsoft_System/Drawing/Color.md)): [StiBrush](../../Stimulsoft_Base/Drawing/StiBrush.md)

**Parameters**

- **color** ([Color](../../Stimulsoft_System/Drawing/Color.md))  

**Returns** [StiBrush](../../Stimulsoft_Base/Drawing/StiBrush.md)

