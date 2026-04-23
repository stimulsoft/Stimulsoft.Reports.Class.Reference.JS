---
title: "StiStyleCoreXF Class"
---

## StiStyleCoreXF Class

**Namespace:** `Stimulsoft.Report.Chart`

### Inheritance

Implements: [IStiStyleCoreXF](../Stimulsoft_Report/Chart/IStiStyleCoreXF.md)  

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **axisLabelsColor** | [Color](../Stimulsoft_System/Drawing/Color.md) |  |
| **axisLineColor** | [Color](../Stimulsoft_System/Drawing/Color.md) |  |
| **axisTitleColor** | [Color](../Stimulsoft_System/Drawing/Color.md) |  |
| **basicStyleColor** | [Color](../Stimulsoft_System/Drawing/Color.md) |  |
| **chartAreaBorderColor** | [Color](../Stimulsoft_System/Drawing/Color.md) |  |
| **chartAreaBorderThickness** | number |  |
| **chartAreaBrush** | [StiBrush](../Stimulsoft_Base/Drawing/StiBrush.md) |  |
| **chartAreaShowShadow** | boolean |  |
| **chartBrush** | [StiBrush](../Stimulsoft_Base/Drawing/StiBrush.md) |  |
| **firstStyleColor** | [Color](../Stimulsoft_System/Drawing/Color.md) |  |
| **gridLinesHorColor** | [Color](../Stimulsoft_System/Drawing/Color.md) |  |
| **gridLinesVertColor** | [Color](../Stimulsoft_System/Drawing/Color.md) |  |
| **interlacingHorBrush** | [StiBrush](../Stimulsoft_Base/Drawing/StiBrush.md) |  |
| **interlacingVertBrush** | [StiBrush](../Stimulsoft_Base/Drawing/StiBrush.md) |  |
| **lastStyleColor** | [Color](../Stimulsoft_System/Drawing/Color.md) |  |
| **legendBorderColor** | [Color](../Stimulsoft_System/Drawing/Color.md) |  |
| **legendBrush** | [StiBrush](../Stimulsoft_Base/Drawing/StiBrush.md) |  |
| **legendFont** | [Font](../Stimulsoft_Base/Dashboard/Font.md) |  |
| **legendLabelsColor** | [Color](../Stimulsoft_System/Drawing/Color.md) |  |
| **legendShowShadow** | boolean |  |
| **legendTitleColor** | [Color](../Stimulsoft_System/Drawing/Color.md) |  |
| **localizedName** | string |  |
| **markerVisible** | boolean |  |
| **seriesBorderColor** | [Color](../Stimulsoft_System/Drawing/Color.md) |  |
| **seriesBorderThickness** | number |  |
| **seriesCornerRadius** | StiCornerRadius |  |
| **seriesLabelsBorderColor** | [Color](../Stimulsoft_System/Drawing/Color.md) |  |
| **seriesLabelsBrush** | [StiBrush](../Stimulsoft_Base/Drawing/StiBrush.md) |  |
| **seriesLabelsColor** | [Color](../Stimulsoft_System/Drawing/Color.md) |  |
| **seriesLabelsFont** | [Font](../Stimulsoft_Base/Dashboard/Font.md) |  |
| **seriesLabelsLineColor** | [Color](../Stimulsoft_System/Drawing/Color.md) |  |
| **seriesLighting** | boolean |  |
| **seriesShowBorder** | boolean |  |
| **seriesShowShadow** | boolean |  |
| **styleColors** | [Color](../Stimulsoft_System/Drawing/Color.md)[] |  |
| **styleId** | [StiChartStyleId](../Stimulsoft_Report/Chart/StiChartStyleId.md) |  |
| **toolTipBorder** | [StiSimpleBorder](../Stimulsoft_Base/Drawing/StiSimpleBorder.md) |  |
| **toolTipBrush** | [StiBrush](../Stimulsoft_Base/Drawing/StiBrush.md) |  |
| **toolTipCornerRadius** | StiCornerRadius |  |
| **toolTipTextBrush** | [StiBrush](../Stimulsoft_Base/Drawing/StiBrush.md) |  |
| **trendLineColor** | [Color](../Stimulsoft_System/Drawing/Color.md) |  |
| **trendLineShowShadow** | boolean |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **fillCicledColumn** | void |  |
| **fillColumn** | void |  |
| **getAreaBrush** | [StiBrush](../Stimulsoft_Base/Drawing/StiBrush.md) |  |
| **getColorByIndex** | [Color](../Stimulsoft_System/Drawing/Color.md) |  |
| **getColorBySeries** | [Color](../Stimulsoft_System/Drawing/Color.md) |  |
| **getColors** | [Color](../Stimulsoft_System/Drawing/Color.md)[] |  |
| **getColumnBorder** | [Color](../Stimulsoft_System/Drawing/Color.md) |  |
| **getColumnBrush** | [StiBrush](../Stimulsoft_Base/Drawing/StiBrush.md) |  |
| **implements** | any[] |  |

---

### Method Details

#### fillCicledColumn

**fillCicledColumn**(**context**: [StiContext](../Stimulsoft_Report/Stimulsoft/Base/Context/StiContext.md), **rect**: RectangleD, **cornerRadius**: StiCornerRadius, **brush**: [StiBrush](../Stimulsoft_Base/Drawing/StiBrush.md), **interaction**: [StiInteractionDataGeom](../Stimulsoft_Report/Stimulsoft/Base/Context/StiInteractionDataGeom.md), **tooltip**: string): void

**Parameters**

- **context** ([StiContext](../Stimulsoft_Report/Stimulsoft/Base/Context/StiContext.md))  
- **rect** (RectangleD)  
- **cornerRadius** (StiCornerRadius)  
- **brush** ([StiBrush](../Stimulsoft_Base/Drawing/StiBrush.md))  
- **interaction** ([StiInteractionDataGeom](../Stimulsoft_Report/Stimulsoft/Base/Context/StiInteractionDataGeom.md))  
- **tooltip** (string)  


---

#### fillColumn

**fillColumn**(**context**: [StiContext](../Stimulsoft_Report/Stimulsoft/Base/Context/StiContext.md), **rect**: RectangleD, **brush**: [StiBrush](../Stimulsoft_Base/Drawing/StiBrush.md), **interaction**: [StiInteractionDataGeom](../Stimulsoft_Report/Stimulsoft/Base/Context/StiInteractionDataGeom.md)): void

**Parameters**

- **context** ([StiContext](../Stimulsoft_Report/Stimulsoft/Base/Context/StiContext.md))  
- **rect** (RectangleD)  
- **brush** ([StiBrush](../Stimulsoft_Base/Drawing/StiBrush.md))  
- **interaction** ([StiInteractionDataGeom](../Stimulsoft_Report/Stimulsoft/Base/Context/StiInteractionDataGeom.md))  


---

#### getAreaBrush

**getAreaBrush**(**color**: [Color](../Stimulsoft_System/Drawing/Color.md)): [StiBrush](../Stimulsoft_Base/Drawing/StiBrush.md)

**Parameters**

- **color** ([Color](../Stimulsoft_System/Drawing/Color.md))  

**Returns** [StiBrush](../Stimulsoft_Base/Drawing/StiBrush.md)


---

#### getColorByIndex

**getColorByIndex**(**index**: number, **count**: number, **seriesColors**: [Color](../Stimulsoft_System/Drawing/Color.md)[]): [Color](../Stimulsoft_System/Drawing/Color.md)

**Parameters**

- **index** (number)  
- **count** (number)  
- **seriesColors** ([Color](../Stimulsoft_System/Drawing/Color.md)[])  

**Returns** [Color](../Stimulsoft_System/Drawing/Color.md)


---

#### getColorBySeries

**getColorBySeries**(**series**: IStiSeries, **seriesColors**: [Color](../Stimulsoft_System/Drawing/Color.md)[]): [Color](../Stimulsoft_System/Drawing/Color.md)

**Parameters**

- **series** (IStiSeries)  
- **seriesColors** ([Color](../Stimulsoft_System/Drawing/Color.md)[])  

**Returns** [Color](../Stimulsoft_System/Drawing/Color.md)


---

#### getColors

**getColors**(**seriesCount**: number, **seriesColors**: [Color](../Stimulsoft_System/Drawing/Color.md)[]): [Color](../Stimulsoft_System/Drawing/Color.md)[]

**Parameters**

- **seriesCount** (number)  
- **seriesColors** ([Color](../Stimulsoft_System/Drawing/Color.md)[])  

**Returns** [Color](../Stimulsoft_System/Drawing/Color.md)[]


---

#### getColumnBorder

**getColumnBorder**(**color**: [Color](../Stimulsoft_System/Drawing/Color.md)): [Color](../Stimulsoft_System/Drawing/Color.md)

**Parameters**

- **color** ([Color](../Stimulsoft_System/Drawing/Color.md))  

**Returns** [Color](../Stimulsoft_System/Drawing/Color.md)


---

#### getColumnBrush

**getColumnBrush**(**color**: [Color](../Stimulsoft_System/Drawing/Color.md)): [StiBrush](../Stimulsoft_Base/Drawing/StiBrush.md)

**Parameters**

- **color** ([Color](../Stimulsoft_System/Drawing/Color.md))  

**Returns** [StiBrush](../Stimulsoft_Base/Drawing/StiBrush.md)


---

#### implements

**implements**(): any[]

**Returns** any[]

