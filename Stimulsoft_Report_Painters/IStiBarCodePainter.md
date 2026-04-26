---
title: "IStiBarCodePainter Interface"
---

## IStiBarCodePainter Interface

**Namespace:** `Stimulsoft.Report.Painters`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **baseDrawImage** | void |  |
| **baseDrawRectangle** | void |  |
| **baseDrawString** | void |  |
| **baseFillEllipse** | void |  |
| **baseFillPolygon** | void |  |
| **baseFillPolygons** | void |  |
| **baseFillRectangle** | void |  |
| **baseFillRectangle2D** | void |  |
| **baseMeasureString** | SizeD |  |
| **baseRollbackTransform** | void |  |
| **baseTransform** | void |  |

---

### Method Details

#### baseDrawImage

**baseDrawImage**(**context**: any, **image**: [Image](../Stimulsoft_System_Drawing/Image.md), **report**: [StiReport](../Stimulsoft_Report/StiReport.md), **x**: number, **y**: number, **width**: number, **height**: number): void

**Parameters**

- **context** (any)  
- **image** ([Image](../Stimulsoft_System_Drawing/Image.md))  
- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **x** (number)  
- **y** (number)  
- **width** (number)  
- **height** (number)  


---

#### baseDrawRectangle

**baseDrawRectangle**(**context**: any, **penColor**: [Color](../Stimulsoft_System_Drawing/Color.md), **penSize**: number, **x**: number, **y**: number, **width**: number, **height**: number): void

**Parameters**

- **context** (any)  
- **penColor** ([Color](../Stimulsoft_System_Drawing/Color.md))  
- **penSize** (number)  
- **x** (number)  
- **y** (number)  
- **width** (number)  
- **height** (number)  


---

#### baseDrawString

**baseDrawString**(**context**: any, **st**: string, **font**: [Font](../Stimulsoft_Base_Dashboard/Font.md), **brush**: [StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md), **rect**: RectangleD, **sf**: [StringFormat](../Stimulsoft_System_Drawing/StringFormat.md)): void

**Parameters**

- **context** (any)  
- **st** (string)  
- **font** ([Font](../Stimulsoft_Base_Dashboard/Font.md))  
- **brush** ([StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md))  
- **rect** (RectangleD)  
- **sf** ([StringFormat](../Stimulsoft_System_Drawing/StringFormat.md))  


---

#### baseFillEllipse

**baseFillEllipse**(**context**: any, **brush**: [StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md), **x**: number, **y**: number, **width**: number, **height**: number): void

**Parameters**

- **context** (any)  
- **brush** ([StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md))  
- **x** (number)  
- **y** (number)  
- **width** (number)  
- **height** (number)  


---

#### baseFillPolygon

**baseFillPolygon**(**context**: any, **brush**: [StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md), **points**: PointD[]): void

**Parameters**

- **context** (any)  
- **brush** ([StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md))  
- **points** (PointD[])  


---

#### baseFillPolygons

**baseFillPolygons**(**context**: any, **brush**: [StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md), **points**: PointD[][]): void

**Parameters**

- **context** (any)  
- **brush** ([StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md))  
- **points** (PointD[][])  


---

#### baseFillRectangle

**baseFillRectangle**(**context**: any, **brush**: [StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md), **x**: number, **y**: number, **width**: number, **height**: number): void

**Parameters**

- **context** (any)  
- **brush** ([StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md))  
- **x** (number)  
- **y** (number)  
- **width** (number)  
- **height** (number)  


---

#### baseFillRectangle2D

**baseFillRectangle2D**(**context**: any, **brush**: [StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md), **x**: number, **y**: number, **width**: number, **height**: number): void

**Parameters**

- **context** (any)  
- **brush** ([StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md))  
- **x** (number)  
- **y** (number)  
- **width** (number)  
- **height** (number)  


---

#### baseMeasureString

**baseMeasureString**(**context**: any, **st**: string, **font**: [Font](../Stimulsoft_Base_Dashboard/Font.md)): SizeD

**Parameters**

- **context** (any)  
- **st** (string)  
- **font** ([Font](../Stimulsoft_Base_Dashboard/Font.md))  

**Returns** SizeD


---

#### baseRollbackTransform

**baseRollbackTransform**(**context**: any): void

**Parameters**

- **context** (any)  


---

#### baseTransform

**baseTransform**(**context**: any, **x**: number, **y**: number, **angle**: number, **dx**: number, **dy**: number): void

**Parameters**

- **context** (any)  
- **x** (number)  
- **y** (number)  
- **angle** (number)  
- **dx** (number)  
- **dy** (number)  

