---
title: "StiRadialBarGeometry Class"
---

## StiRadialBarGeometry Class

**Namespace:** `Stimulsoft.Report.Components.Gauge.Primitives`

### Inheritance

Implements: [IStiScaleBarGeometry](../Stimulsoft_Report_Gauge_Primitives/IStiScaleBarGeometry.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(StiRadialScale scale) |  |

**constructor**(**scale**: StiRadialScale)

**Parameters**

- **scale** (StiRadialScale)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **checkRectGeometry** | void |  |
| **drawGeometry** | StiGraphicsPathLinesGaugeGeom |  |
| **drawScaleGeometry** | void |  |
| **getRestToLenght** | number |  |

---

### Method Details

#### checkRectGeometry

**checkRectGeometry**(**rect**: [Rectangle](../Stimulsoft_System_Drawing/Rectangle.md)): void

**Parameters**

- **rect** ([Rectangle](../Stimulsoft_System_Drawing/Rectangle.md))  


---

#### drawGeometry

**drawGeometry**(**context**: [StiGaugeContextPainter](../Stimulsoft_Report_Painters/StiGaugeContextPainter.md), **startValue**: number, **endValue**: number, **startWidth**: number, **endWidth**: number, **offset**: number, **placement**: [StiPlacement](../Stimulsoft_Report_Gauge/StiPlacement.md), **REFrect**: any, **returnOnlyRect**: boolean): StiGraphicsPathLinesGaugeGeom

**Parameters**

- **context** ([StiGaugeContextPainter](../Stimulsoft_Report_Painters/StiGaugeContextPainter.md))  
- **startValue** (number)  
- **endValue** (number)  
- **startWidth** (number)  
- **endWidth** (number)  
- **offset** (number)  
- **placement** ([StiPlacement](../Stimulsoft_Report_Gauge/StiPlacement.md))  
- **REFrect** (any)  
- **returnOnlyRect** (boolean)  

**Returns** StiGraphicsPathLinesGaugeGeom


---

#### drawScaleGeometry

**drawScaleGeometry**(**context**: [StiGaugeContextPainter](../Stimulsoft_Report_Painters/StiGaugeContextPainter.md)): void

**Parameters**

- **context** ([StiGaugeContextPainter](../Stimulsoft_Report_Painters/StiGaugeContextPainter.md))  


---

#### getRestToLenght

**getRestToLenght**(): number

**Returns** number


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **center** | [Point](../Stimulsoft_System_Drawing/Point.md) |  |
| **centerPoint** | any |  |
| **diameter** | number |  |
| **endWidth** | any |  |
| **endWidth** | any |  |
| **height** | any |  |
| **height** | any |  |
| **height** | any |  |
| **radius** | number |  |
| **rectGeometry** | [Rectangle](../Stimulsoft_System_Drawing/Rectangle.md) |  |
| **scale** | StiRadialScale |  |
| **size** | [Size](../Stimulsoft_System_Drawing/Size.md) |  |
| **startWidth** | any |  |
| **startWidth** | any |  |
| **width** | any |  |
| **width** | any |  |
| **width** | any |  |
