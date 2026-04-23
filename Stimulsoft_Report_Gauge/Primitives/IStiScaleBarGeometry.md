---
title: "IStiScaleBarGeometry Interface"
---

## IStiScaleBarGeometry Interface

**Namespace:** `Stimulsoft.Report.Gauge.Primitives`

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

**checkRectGeometry**(**rect**: [Rectangle](../../Stimulsoft_System/Drawing/Rectangle.md)): void

**Parameters**

- **rect** ([Rectangle](../../Stimulsoft_System/Drawing/Rectangle.md))  


---

#### drawGeometry

**drawGeometry**(**context**: [StiGaugeContextPainter](../../Stimulsoft_Report/Painters/StiGaugeContextPainter.md), **startValue**: number, **endValue**: number, **startWidth**: number, **endWidth**: number, **offset**: number, **placement**: [StiPlacement](../../Stimulsoft_Report/Gauge/StiPlacement.md), **REFrect**: any, **returnOnlyRect**: boolean): StiGraphicsPathLinesGaugeGeom

**Parameters**

- **context** ([StiGaugeContextPainter](../../Stimulsoft_Report/Painters/StiGaugeContextPainter.md))  
- **startValue** (number)  
- **endValue** (number)  
- **startWidth** (number)  
- **endWidth** (number)  
- **offset** (number)  
- **placement** ([StiPlacement](../../Stimulsoft_Report/Gauge/StiPlacement.md))  
- **REFrect** (any)  
- **returnOnlyRect** (boolean)  

**Returns** StiGraphicsPathLinesGaugeGeom


---

#### drawScaleGeometry

**drawScaleGeometry**(**context**: [StiGaugeContextPainter](../../Stimulsoft_Report/Painters/StiGaugeContextPainter.md)): void

**Parameters**

- **context** ([StiGaugeContextPainter](../../Stimulsoft_Report/Painters/StiGaugeContextPainter.md))  


---

#### getRestToLenght

**getRestToLenght**(): number

**Returns** number

