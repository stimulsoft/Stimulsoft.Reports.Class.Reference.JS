---
title: "IStiXRadarAxisCoreXF Interface"
---

## IStiXRadarAxisCoreXF Interface

**Namespace:** `Stimulsoft.Report.Chart`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getLabelRect** | RectangleD |  |
| **renderLabel** | [IStiCellGeom](IStiCellGeom.md) |  |

---

### Method Details

#### getLabelRect

**getLabelRect**(**context**: [StiContext](../Stimulsoft_Base_Context/StiContext.md), **point**: PointD, **text**: string, **angle**: number): RectangleD

**Parameters**

- **context** ([StiContext](../Stimulsoft_Base_Context/StiContext.md))  
- **point** (PointD)  
- **text** (string)  
- **angle** (number)  

**Returns** RectangleD


---

#### renderLabel

**renderLabel**(**context**: [StiContext](../Stimulsoft_Base_Context/StiContext.md), **series**: IStiSeries, **point**: PointD, **argument**: any, **angle**: number, **colorIndex**: number, **colorCount**: number): [IStiCellGeom](IStiCellGeom.md)

**Parameters**

- **context** ([StiContext](../Stimulsoft_Base_Context/StiContext.md))  
- **series** (IStiSeries)  
- **point** (PointD)  
- **argument** (any)  
- **angle** (number)  
- **colorIndex** (number)  
- **colorCount** (number)  

**Returns** [IStiCellGeom](IStiCellGeom.md)

