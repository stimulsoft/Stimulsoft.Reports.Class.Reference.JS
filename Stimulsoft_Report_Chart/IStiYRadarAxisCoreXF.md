---
title: "IStiYRadarAxisCoreXF Interface"
---

## IStiYRadarAxisCoreXF Interface

**Namespace:** `Stimulsoft.Report.Chart`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **calculateStripPositions** | void |  |
| **getFontGeom** | StiFontGeom |  |
| **getStringFormatGeom** | StiStringFormatGeom |  |
| **render** | [IStiCellGeom](IStiCellGeom.md) |  |

---

### Method Details

#### calculateStripPositions

**calculateStripPositions**(**topPosition**: number, **bottomPosition**: number): void

**Parameters**

- **topPosition** (number)  
- **bottomPosition** (number)  


---

#### getFontGeom

**getFontGeom**(**context**: [StiContext](../Stimulsoft_Base_Context/StiContext.md)): StiFontGeom

**Parameters**

- **context** ([StiContext](../Stimulsoft_Base_Context/StiContext.md))  

**Returns** StiFontGeom


---

#### getStringFormatGeom

**getStringFormatGeom**(**context**: [StiContext](../Stimulsoft_Base_Context/StiContext.md)): StiStringFormatGeom

**Parameters**

- **context** ([StiContext](../Stimulsoft_Base_Context/StiContext.md))  

**Returns** StiStringFormatGeom


---

#### render

**render**(**context**: [StiContext](../Stimulsoft_Base_Context/StiContext.md), **rect**: RectangleD): [IStiCellGeom](IStiCellGeom.md)

**Parameters**

- **context** ([StiContext](../Stimulsoft_Base_Context/StiContext.md))  
- **rect** (RectangleD)  

**Returns** [IStiCellGeom](IStiCellGeom.md)


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **ticksMaxLength** | number |  |
