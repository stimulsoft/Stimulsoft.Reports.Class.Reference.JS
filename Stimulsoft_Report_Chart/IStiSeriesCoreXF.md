---
title: "IStiSeriesCoreXF Interface"
---

## IStiSeriesCoreXF Interface

**Namespace:** `Stimulsoft.Report.Chart`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **applyStyle** | void |  |
| **getSeriesBorderColor** | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **getSeriesBrush** | [StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md) |  |
| **getSeriesLabels** | IStiAxisSeriesLabels |  |
| **getTag** | string |  |
| **renderSeries** | void |  |

---

### Method Details

#### applyStyle

**applyStyle**(**style**: IStiChartStyle, **color**: [Color](../Stimulsoft_System_Drawing/Color.md)): void

**Parameters**

- **style** (IStiChartStyle)  
- **color** ([Color](../Stimulsoft_System_Drawing/Color.md))  


---

#### getSeriesBorderColor

**getSeriesBorderColor**(**colorIndex**: number, **colorCount**: number): [Color](../Stimulsoft_System_Drawing/Color.md)

**Parameters**

- **colorIndex** (number)  
- **colorCount** (number)  

**Returns** [Color](../Stimulsoft_System_Drawing/Color.md)


---

#### getSeriesBrush

**getSeriesBrush**(**colorIndex**: number, **colorCount**: number): [StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md)

**Parameters**

- **colorIndex** (number)  
- **colorCount** (number)  

**Returns** [StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md)


---

#### getSeriesLabels

**getSeriesLabels**(): IStiAxisSeriesLabels

**Returns** IStiAxisSeriesLabels


---

#### getTag

**getTag**(**tagIndex**: number): string

**Parameters**

- **tagIndex** (number)  

**Returns** string


---

#### renderSeries

**renderSeries**(**context**: [StiContext](../Stimulsoft_Base_Context/StiContext.md), **rect**: RectangleD, **geom**: [IStiCellGeom](IStiCellGeom.md), **seriesArray**: IStiSeries[]): void

**Parameters**

- **context** ([StiContext](../Stimulsoft_Base_Context/StiContext.md))  
- **rect** (RectangleD)  
- **geom** ([IStiCellGeom](IStiCellGeom.md))  
- **seriesArray** (IStiSeries[])  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **interaction** | IStiSeriesInteraction |  |
| **isDateTimeArguments** | boolean |  |
| **isDateTimeValues** | boolean |  |
| **seriesColors** | [Color](../Stimulsoft_System_Drawing/Color.md)[] |  |
