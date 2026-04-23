---
title: "IStiMarkerCoreXF Interface"
---

## IStiMarkerCoreXF Interface

**Namespace:** `Stimulsoft.Report.Chart`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **draw** | void |  |
| **drawLine** | void |  |
| **drawLines** | void |  |

---

### Method Details

#### draw

**draw**(**context**: [StiContext](../Stimulsoft/Base/Context/StiContext.md), **marker**: IStiMarker, **position**: PointD, **zoom**: number, **showShadow**: boolean, **isMouseOver**: boolean, **isTooltipMode**: boolean, **isAnimation**: boolean, **toolTip**: string, **tag**: any, **interaction**: [StiInteractionDataGeom](../Stimulsoft/Base/Context/StiInteractionDataGeom.md)): void

**Parameters**

- **context** ([StiContext](../Stimulsoft/Base/Context/StiContext.md))  
- **marker** (IStiMarker)  
- **position** (PointD)  
- **zoom** (number)  
- **showShadow** (boolean)  
- **isMouseOver** (boolean)  
- **isTooltipMode** (boolean)  
- **isAnimation** (boolean)  
- **toolTip** (string)  
- **tag** (any)  
- **interaction** ([StiInteractionDataGeom](../Stimulsoft/Base/Context/StiInteractionDataGeom.md))  


---

#### drawLine

**drawLine**(**context**: [StiContext](../Stimulsoft/Base/Context/StiContext.md), **x1**: number, **y1**: number, **x2**: number, **y2**: number, **scale**: number, **brushMarker**: [StiBrush](../../Stimulsoft_Base/Drawing/StiBrush.md), **penMarker**: StiPenGeom, **markerType**: [StiMarkerType](StiMarkerType.md), **markerStep**: number, **markerSize**: number, **angle**: number): void

**Parameters**

- **context** ([StiContext](../Stimulsoft/Base/Context/StiContext.md))  
- **x1** (number)  
- **y1** (number)  
- **x2** (number)  
- **y2** (number)  
- **scale** (number)  
- **brushMarker** ([StiBrush](../../Stimulsoft_Base/Drawing/StiBrush.md))  
- **penMarker** (StiPenGeom)  
- **markerType** ([StiMarkerType](StiMarkerType.md))  
- **markerStep** (number)  
- **markerSize** (number)  
- **angle** (number)  


---

#### drawLines

**drawLines**(**context**: [StiContext](../Stimulsoft/Base/Context/StiContext.md), **points**: PointD[], **scale**: number, **brushMarker**: any, **penMarker**: StiPenGeom, **markerType**: [StiMarkerType](StiMarkerType.md), **markerStep**: number, **markerSize**: number, **angle**: number): void

**Parameters**

- **context** ([StiContext](../Stimulsoft/Base/Context/StiContext.md))  
- **points** (PointD[])  
- **scale** (number)  
- **brushMarker** (any)  
- **penMarker** (StiPenGeom)  
- **markerType** ([StiMarkerType](StiMarkerType.md))  
- **markerStep** (number)  
- **markerSize** (number)  
- **angle** (number)  

