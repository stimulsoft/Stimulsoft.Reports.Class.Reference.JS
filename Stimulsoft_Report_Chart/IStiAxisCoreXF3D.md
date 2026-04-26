---
title: "IStiAxisCoreXF3D Interface"
---

## IStiAxisCoreXF3D Interface

**Namespace:** `Stimulsoft.Report.Chart`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **applyStyle** | void |  |
| **calculateStripPositions** | void |  |
| **getAxisTitleSize** | [Size](../Stimulsoft_System_Drawing/Size.md) |  |
| **getFontGeom** | Base.Context.StiFontGeom |  |
| **getStringFormatGeom** | StiStringFormatGeom |  |
| **render3D** | [IStiCellGeom](IStiCellGeom.md) |  |

---

### Method Details

#### applyStyle

**applyStyle**(**style**: IStiChartStyle): void

**Parameters**

- **style** (IStiChartStyle)  


---

#### calculateStripPositions

**calculateStripPositions**(**topPosition**: number, **bottomPosition**: number): void

**Parameters**

- **topPosition** (number)  
- **bottomPosition** (number)  


---

#### getAxisTitleSize

**getAxisTitleSize**(**context**: Base.Context.StiContext): [Size](../Stimulsoft_System_Drawing/Size.md)

**Parameters**

- **context** (Base.Context.StiContext)  

**Returns** [Size](../Stimulsoft_System_Drawing/Size.md)


---

#### getFontGeom

**getFontGeom**(**context**: Base.Context.StiContext): Base.Context.StiFontGeom

**Parameters**

- **context** (Base.Context.StiContext)  

**Returns** Base.Context.StiFontGeom


---

#### getStringFormatGeom

**getStringFormatGeom**(**context**: [StiContext](../Stimulsoft_Base_Context/StiContext.md), **wordWrap**: boolean): StiStringFormatGeom

**Parameters**

- **context** ([StiContext](../Stimulsoft_Base_Context/StiContext.md))  
- **wordWrap** (boolean)  

**Returns** StiStringFormatGeom


---

#### render3D

**render3D**(**context**: Base.Context.StiContext, **rect3D**: [IStiRectangle3D](IStiRectangle3D.md), **render3d**: [IStiRender3D](IStiRender3D.md)): [IStiCellGeom](IStiCellGeom.md)

**Parameters**

- **context** (Base.Context.StiContext)  
- **rect3D** ([IStiRectangle3D](IStiRectangle3D.md))  
- **render3d** ([IStiRender3D](IStiRender3D.md))  

**Returns** [IStiCellGeom](IStiCellGeom.md)

