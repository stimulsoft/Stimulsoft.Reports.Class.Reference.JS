---
title: "StiMarkerCoreXF Class"
---

## StiMarkerCoreXF Class

**Namespace:** `Stimulsoft.Report.Chart`

### Inheritance

Implements: [ICloneable](../Stimulsoft_System/ICloneable.md), [IStiMarkerCoreXF](IStiMarkerCoreXF.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(IStiMarker marker) |  |

**constructor**(**marker**: IStiMarker)

**Parameters**

- **marker** (IStiMarker)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | [StiMarkerCoreXF](StiMarkerCoreXF.md) |  |
| **drawLine** | void |  |
| **drawLines** | void |  |
| **drawMarkers** | void |  |
| **getMarkerRect** `static` | RectangleD |  |
| **implements** | any[] |  |

---

### Method Details

#### clone

**clone**(): [StiMarkerCoreXF](StiMarkerCoreXF.md)

**Returns** [StiMarkerCoreXF](StiMarkerCoreXF.md)


---

#### drawLine

**drawLine**(**context**: [StiContext](../Stimulsoft_Base_Context/StiContext.md), **x1**: number, **y1**: number, **x2**: number, **y2**: number, **scale**: number, **brushMarker**: [StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md), **penMarker**: StiPenGeom, **markerType**: [StiMarkerType](StiMarkerType.md), **markerStep**: number, **markerSize**: number, **angle**: number): void

**Parameters**

- **context** ([StiContext](../Stimulsoft_Base_Context/StiContext.md))  
- **x1** (number)  
- **y1** (number)  
- **x2** (number)  
- **y2** (number)  
- **scale** (number)  
- **brushMarker** ([StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md))  
- **penMarker** (StiPenGeom)  
- **markerType** ([StiMarkerType](StiMarkerType.md))  
- **markerStep** (number)  
- **markerSize** (number)  
- **angle** (number)  


---

#### drawLines

**drawLines**(**context**: [StiContext](../Stimulsoft_Base_Context/StiContext.md), **points**: PointD[], **scale**: number, **brushMarker**: any, **penMarker**: StiPenGeom, **markerType**: [StiMarkerType](StiMarkerType.md), **markerStep**: number, **markerSize**: number, **angle**: number): void

**Parameters**

- **context** ([StiContext](../Stimulsoft_Base_Context/StiContext.md))  
- **points** (PointD[])  
- **scale** (number)  
- **brushMarker** (any)  
- **penMarker** (StiPenGeom)  
- **markerType** ([StiMarkerType](StiMarkerType.md))  
- **markerStep** (number)  
- **markerSize** (number)  
- **angle** (number)  


---

#### drawMarkers

**drawMarkers**(**context**: [StiContext](../Stimulsoft_Base_Context/StiContext.md), **points**: PointD[], **showShadow**: boolean): void

**Parameters**

- **context** ([StiContext](../Stimulsoft_Base_Context/StiContext.md))  
- **points** (PointD[])  
- **showShadow** (boolean)  


---

#### getMarkerRect `static`

**getMarkerRect**(**position**: PointD, **markerSize**: number, **zoom**: number): RectangleD

**Parameters**

- **position** (PointD)  
- **markerSize** (number)  
- **zoom** (number)  

**Returns** RectangleD


---

#### implements

**implements**(): any[]

**Returns** any[]


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **brush** | any |  |
| **isAnimation** | any |  |
| **marker** | IStiMarker |  |
| **startAngle** | any |  |
