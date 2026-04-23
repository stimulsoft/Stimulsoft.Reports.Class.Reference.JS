---
title: "StiBarCodeExportPainter Class"
---

## StiBarCodeExportPainter Class

**Namespace:** `Stimulsoft.Report.Export`

### Inheritance

Implements: [IStiBarCodePainter](../Painters/IStiBarCodePainter.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([StiSvgGeomWriter](StiSvgGeomWriter.md) geomWriter1) |  |

**constructor**(**geomWriter1**: [StiSvgGeomWriter](StiSvgGeomWriter.md))

**Parameters**

- **geomWriter1** ([StiSvgGeomWriter](StiSvgGeomWriter.md))  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **onlyAssembleData** | boolean |  |

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
| **createNew** `static` | [StiBarCodeExportPainter](StiBarCodeExportPainter.md) |  |

---

### Method Details

#### baseDrawImage

**baseDrawImage**(**context**: any, **image**: [Image](../../Stimulsoft_System/Drawing/Image.md), **report**: [StiReport](../StiReport.md), **x**: number, **y**: number, **width**: number, **height**: number): void

**Parameters**

- **context** (any)  
- **image** ([Image](../../Stimulsoft_System/Drawing/Image.md))  
- **report** ([StiReport](../StiReport.md))  
- **x** (number)  
- **y** (number)  
- **width** (number)  
- **height** (number)  


---

#### baseDrawRectangle

**baseDrawRectangle**(**context**: any, **penColor**: [Color](../../Stimulsoft_System/Drawing/Color.md), **penSize**: number, **x**: number, **y**: number, **width**: number, **height**: number): void

**Parameters**

- **context** (any)  
- **penColor** ([Color](../../Stimulsoft_System/Drawing/Color.md))  
- **penSize** (number)  
- **x** (number)  
- **y** (number)  
- **width** (number)  
- **height** (number)  


---

#### baseDrawString

**baseDrawString**(**context**: any, **st**: string, **font**: [Font](../../Stimulsoft_Base/Dashboard/Font.md), **brush**: [StiBrush](../../Stimulsoft_Base/Drawing/StiBrush.md), **rect**: RectangleD, **sf**: [StringFormat](../../Stimulsoft_System/Drawing/StringFormat.md)): void

**Parameters**

- **context** (any)  
- **st** (string)  
- **font** ([Font](../../Stimulsoft_Base/Dashboard/Font.md))  
- **brush** ([StiBrush](../../Stimulsoft_Base/Drawing/StiBrush.md))  
- **rect** (RectangleD)  
- **sf** ([StringFormat](../../Stimulsoft_System/Drawing/StringFormat.md))  


---

#### baseFillEllipse

**baseFillEllipse**(**context**: any, **brush**: [StiBrush](../../Stimulsoft_Base/Drawing/StiBrush.md), **x**: number, **y**: number, **width**: number, **height**: number): void

**Parameters**

- **context** (any)  
- **brush** ([StiBrush](../../Stimulsoft_Base/Drawing/StiBrush.md))  
- **x** (number)  
- **y** (number)  
- **width** (number)  
- **height** (number)  


---

#### baseFillPolygon

**baseFillPolygon**(**context**: any, **brush**: [StiBrush](../../Stimulsoft_Base/Drawing/StiBrush.md), **points**: PointD[]): void

**Parameters**

- **context** (any)  
- **brush** ([StiBrush](../../Stimulsoft_Base/Drawing/StiBrush.md))  
- **points** (PointD[])  


---

#### baseFillPolygons

**baseFillPolygons**(**context**: any, **brush**: [StiBrush](../../Stimulsoft_Base/Drawing/StiBrush.md), **points**: PointD[][]): void

**Parameters**

- **context** (any)  
- **brush** ([StiBrush](../../Stimulsoft_Base/Drawing/StiBrush.md))  
- **points** (PointD[][])  


---

#### baseFillRectangle

**baseFillRectangle**(**context**: any, **brush**: [StiBrush](../../Stimulsoft_Base/Drawing/StiBrush.md), **x**: number, **y**: number, **width**: number, **height**: number): void

**Parameters**

- **context** (any)  
- **brush** ([StiBrush](../../Stimulsoft_Base/Drawing/StiBrush.md))  
- **x** (number)  
- **y** (number)  
- **width** (number)  
- **height** (number)  


---

#### baseFillRectangle2D

**baseFillRectangle2D**(**context**: any, **brush**: [StiBrush](../../Stimulsoft_Base/Drawing/StiBrush.md), **x**: number, **y**: number, **width**: number, **height**: number): void

**Parameters**

- **context** (any)  
- **brush** ([StiBrush](../../Stimulsoft_Base/Drawing/StiBrush.md))  
- **x** (number)  
- **y** (number)  
- **width** (number)  
- **height** (number)  


---

#### baseMeasureString

**baseMeasureString**(**context**: any, **st**: string, **font**: [Font](../../Stimulsoft_Base/Dashboard/Font.md)): SizeD

**Parameters**

- **context** (any)  
- **st** (string)  
- **font** ([Font](../../Stimulsoft_Base/Dashboard/Font.md))  

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


---

#### createNew `static`

**createNew**(**geomWriter1**: [IStiExportGeomWriter](IStiExportGeomWriter.md)): [StiBarCodeExportPainter](StiBarCodeExportPainter.md)

**Parameters**

- **geomWriter1** ([IStiExportGeomWriter](IStiExportGeomWriter.md))  

**Returns** [StiBarCodeExportPainter](StiBarCodeExportPainter.md)

