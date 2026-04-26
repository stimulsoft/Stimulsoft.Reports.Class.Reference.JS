---
title: "StiGaugeContextPainter Class"
---

## StiGaugeContextPainter Class

**Namespace:** `Stimulsoft.Report.Painters`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(IStiGauge gauge, RectangleF rect, number zoom) |  |

**constructor**(**gauge**: IStiGauge, **rect**: RectangleF, **zoom**: number)

**Parameters**

- **gauge** (IStiGauge)  
- **rect** (RectangleF)  
- **zoom** (number)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **addEllipseGaugeGeom** | void |  |
| **addGraphicsPathGaugeGeom** | void |  |
| **addPieGaugeGeom** | void |  |
| **addPopTranformGaugeGeom** | void |  |
| **addPushMatrixGaugeGeom** | void |  |
| **addRectangleGaugeGeom** | void |  |
| **addRoundedRectangleGaugeGeom** | void |  |
| **addTextGaugeGeom** | void |  |
| **changeFontSize** `static` | [Font](../Stimulsoft_Base_Dashboard/Font.md) |  |
| **measureString** | SizeF |  |
| **render** | void |  |

---

### Method Details

#### addEllipseGaugeGeom

**addEllipseGaugeGeom**(**rect**: RectangleF, **background**: [StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md), **borderBrush**: [StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md), **borderWidth**: number): void

**Parameters**

- **rect** (RectangleF)  
- **background** ([StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md))  
- **borderBrush** ([StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md))  
- **borderWidth** (number)  


---

#### addGraphicsPathGaugeGeom

**addGraphicsPathGaugeGeom**(**geom**: StiGraphicsPathGaugeGeom): void

**Parameters**

- **geom** (StiGraphicsPathGaugeGeom)  


---

#### addPieGaugeGeom

**addPieGaugeGeom**(**rect**: RectangleF, **background**: [StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md), **borderBrush**: [StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md), **borderWidth**: number, **startAngle**: number, **sweepAngle**: number): void

**Parameters**

- **rect** (RectangleF)  
- **background** ([StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md))  
- **borderBrush** ([StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md))  
- **borderWidth** (number)  
- **startAngle** (number)  
- **sweepAngle** (number)  


---

#### addPopTranformGaugeGeom

**addPopTranformGaugeGeom**(): void


---

#### addPushMatrixGaugeGeom

**addPushMatrixGaugeGeom**(**angle**: number, **centerPoint**: PointF): void

**Parameters**

- **angle** (number)  
- **centerPoint** (PointF)  


---

#### addRectangleGaugeGeom

**addRectangleGaugeGeom**(**rect**: RectangleF, **background**: [StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md), **borderBrush**: [StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md), **borderWidth**: number): void

**Parameters**

- **rect** (RectangleF)  
- **background** ([StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md))  
- **borderBrush** ([StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md))  
- **borderWidth** (number)  


---

#### addRoundedRectangleGaugeGeom

**addRoundedRectangleGaugeGeom**(**rect**: RectangleF, **background**: [StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md), **borderBrush**: [StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md), **borderWidth**: number, **leftTop**: number, **rightTop**: number, **rightBottom**: number, **leftBottom**: number): void

**Parameters**

- **rect** (RectangleF)  
- **background** ([StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md))  
- **borderBrush** ([StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md))  
- **borderWidth** (number)  
- **leftTop** (number)  
- **rightTop** (number)  
- **rightBottom** (number)  
- **leftBottom** (number)  


---

#### addTextGaugeGeom

**addTextGaugeGeom**(**text**: string, **font**: [Font](../Stimulsoft_Base_Dashboard/Font.md), **foreground**: [StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md), **rect**: RectangleF, **sf**: [StringFormat](../Stimulsoft_System_Drawing/StringFormat.md)): void

**Parameters**

- **text** (string)  
- **font** ([Font](../Stimulsoft_Base_Dashboard/Font.md))  
- **foreground** ([StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md))  
- **rect** (RectangleF)  
- **sf** ([StringFormat](../Stimulsoft_System_Drawing/StringFormat.md))  


---

#### changeFontSize `static`

**changeFontSize**(**font**: [Font](../Stimulsoft_Base_Dashboard/Font.md), **zoom**: number): [Font](../Stimulsoft_Base_Dashboard/Font.md)

**Parameters**

- **font** ([Font](../Stimulsoft_Base_Dashboard/Font.md))  
- **zoom** (number)  

**Returns** [Font](../Stimulsoft_Base_Dashboard/Font.md)


---

#### measureString

**measureString**(**text**: string, **font**: [Font](../Stimulsoft_Base_Dashboard/Font.md)): SizeF

**Parameters**

- **text** (string)  
- **font** ([Font](../Stimulsoft_Base_Dashboard/Font.md))  

**Returns** SizeF


---

#### render

**render**(): void


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **animations** | [StiAnimation](../Stimulsoft_Base_Context_Animation/StiAnimation.md)[] |  |
| **gauge** | IStiGauge |  |
| **geoms** | [StiGaugeGeom](../Stimulsoft_Report_Gauge_GaugeGeoms/StiGaugeGeom.md)[] |  |
| **rect** | RectangleF |  |
| **zoom** | number |  |
