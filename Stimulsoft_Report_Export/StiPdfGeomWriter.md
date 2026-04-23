---
title: "StiPdfGeomWriter Class"
---

## StiPdfGeomWriter Class

**Namespace:** `Stimulsoft.Report.Export`

### Inheritance

Implements: [IStiExportGeomWriter](../Stimulsoft_Report/Export/IStiExportGeomWriter.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([MemoryStream](../Stimulsoft_System/IO/MemoryStream.md) stream, StiPdfExportService service, any assembleData, any allowThinLines, any cornerScaling) |  |

**constructor**(**stream**: [MemoryStream](../Stimulsoft_System/IO/MemoryStream.md), **service**: StiPdfExportService, **assembleData**: any, **allowThinLines**: any, **cornerScaling**: any)

**Parameters**

- **stream** ([MemoryStream](../Stimulsoft_System/IO/MemoryStream.md))  
- **service** (StiPdfExportService)  
- **assembleData** (any)  
- **allowThinLines** (any)  
- **cornerScaling** (any)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **beginPath** | void |  |
| **closeFigure** | void |  |
| **convertSplineToCubicBezier** | [Point](../Stimulsoft_System/Drawing/Point.md)[] |  |
| **drawArc** | void |  |
| **drawArc2** | void |  |
| **drawBezier** | void |  |
| **drawBezierTo** | void |  |
| **drawEllipse** | void |  |
| **drawImage** | void |  |
| **drawLine** | void |  |
| **drawLineTo** | void |  |
| **drawPie** | void |  |
| **drawPolygon** | void |  |
| **drawPolyline** | void |  |
| **drawPolylineTo** | void |  |
| **drawRectangle** | void |  |
| **drawSpline** | void |  |
| **drawString** | void |  |
| **drawText** | void |  |
| **endPath** | void |  |
| **fillEllipse** | void |  |
| **fillPath** | void |  |
| **fillPolygon** | void |  |
| **fillPolygons** | void |  |
| **fillRectangle** | void |  |
| **getBezierString** | string |  |
| **getBezierString2** | string |  |
| **getEllipseString** | string |  |
| **getEllipseString4** | string |  |
| **getLineToString** | string |  |
| **getPointString** | string |  |
| **getPolylineString** | string |  |
| **getRectString** | string |  |
| **getRectString4** | string |  |
| **getRectWithCornersString** | string |  |
| **measureString** | SizeD |  |
| **moveTo** | void |  |
| **restoreState** | void |  |
| **rotateTransform** | void |  |
| **rotateTransform2** | void |  |
| **saveState** | void |  |
| **setBrush** | boolean |  |
| **setClip** | void |  |
| **setPen** | boolean |  |
| **setPixel** | void |  |
| **strokePath** | void |  |
| **translateTransform** | void |  |

---

### Method Details

#### beginPath

**beginPath**(): void


---

#### closeFigure

**closeFigure**(): void


---

#### convertSplineToCubicBezier

**convertSplineToCubicBezier**(**points**: [Point](../Stimulsoft_System/Drawing/Point.md)[], **tension**: number): [Point](../Stimulsoft_System/Drawing/Point.md)[]

**Parameters**

- **points** ([Point](../Stimulsoft_System/Drawing/Point.md)[])  
- **tension** (number)  

**Returns** [Point](../Stimulsoft_System/Drawing/Point.md)[]


---

#### drawArc

**drawArc**(**rect**: [Rectangle](../Stimulsoft_System/Drawing/Rectangle.md), **startAngle**: number, **sweepAngle**: number): void

**Parameters**

- **rect** ([Rectangle](../Stimulsoft_System/Drawing/Rectangle.md))  
- **startAngle** (number)  
- **sweepAngle** (number)  


---

#### drawArc2

**drawArc2**(**rect**: RectangleD, **p1**: PointD, **p2**: PointD, **pen**: [Pen](../Stimulsoft_System/Drawing/Pen.md)): void

**Parameters**

- **rect** (RectangleD)  
- **p1** (PointD)  
- **p2** (PointD)  
- **pen** ([Pen](../Stimulsoft_System/Drawing/Pen.md))  


---

#### drawBezier

**drawBezier**(**p1**: [Point](../Stimulsoft_System/Drawing/Point.md), **p2**: [Point](../Stimulsoft_System/Drawing/Point.md), **p3**: [Point](../Stimulsoft_System/Drawing/Point.md), **p4**: [Point](../Stimulsoft_System/Drawing/Point.md), **pen**: any): void

**Parameters**

- **p1** ([Point](../Stimulsoft_System/Drawing/Point.md))  
- **p2** ([Point](../Stimulsoft_System/Drawing/Point.md))  
- **p3** ([Point](../Stimulsoft_System/Drawing/Point.md))  
- **p4** ([Point](../Stimulsoft_System/Drawing/Point.md))  
- **pen** (any)  


---

#### drawBezierTo

**drawBezierTo**(**p2**: [Point](../Stimulsoft_System/Drawing/Point.md), **p3**: [Point](../Stimulsoft_System/Drawing/Point.md), **p4**: [Point](../Stimulsoft_System/Drawing/Point.md), **pen**: any): void

**Parameters**

- **p2** ([Point](../Stimulsoft_System/Drawing/Point.md))  
- **p3** ([Point](../Stimulsoft_System/Drawing/Point.md))  
- **p4** ([Point](../Stimulsoft_System/Drawing/Point.md))  
- **pen** (any)  


---

#### drawEllipse

**drawEllipse**(**rect**: [Rectangle](../Stimulsoft_System/Drawing/Rectangle.md), **pen**: any): void

**Parameters**

- **rect** ([Rectangle](../Stimulsoft_System/Drawing/Rectangle.md))  
- **pen** (any)  


---

#### drawImage

**drawImage**(**img**: [Image](../Stimulsoft_System/Drawing/Image.md), **rect**: RectangleD): void

**Parameters**

- **img** ([Image](../Stimulsoft_System/Drawing/Image.md))  
- **rect** (RectangleD)  


---

#### drawLine

**drawLine**(**pointFrom**: [Point](../Stimulsoft_System/Drawing/Point.md), **pointTo**: [Point](../Stimulsoft_System/Drawing/Point.md), **pen**: any): void

**Parameters**

- **pointFrom** ([Point](../Stimulsoft_System/Drawing/Point.md))  
- **pointTo** ([Point](../Stimulsoft_System/Drawing/Point.md))  
- **pen** (any)  


---

#### drawLineTo

**drawLineTo**(**pointTo**: [Point](../Stimulsoft_System/Drawing/Point.md), **pen**: any): void

**Parameters**

- **pointTo** ([Point](../Stimulsoft_System/Drawing/Point.md))  
- **pen** (any)  


---

#### drawPie

**drawPie**(**rect**: [Rectangle](../Stimulsoft_System/Drawing/Rectangle.md), **startAngle**: number, **sweepAngle**: number): void

**Parameters**

- **rect** ([Rectangle](../Stimulsoft_System/Drawing/Rectangle.md))  
- **startAngle** (number)  
- **sweepAngle** (number)  


---

#### drawPolygon

**drawPolygon**(**points**: [Point](../Stimulsoft_System/Drawing/Point.md)[], **pen**: any): void

**Parameters**

- **points** ([Point](../Stimulsoft_System/Drawing/Point.md)[])  
- **pen** (any)  


---

#### drawPolyline

**drawPolyline**(**points**: [Point](../Stimulsoft_System/Drawing/Point.md)[], **pen**: any, **close**: any, **drawTo**: any): void

**Parameters**

- **points** ([Point](../Stimulsoft_System/Drawing/Point.md)[])  
- **pen** (any)  
- **close** (any)  
- **drawTo** (any)  


---

#### drawPolylineTo

**drawPolylineTo**(**points**: [Point](../Stimulsoft_System/Drawing/Point.md)[], **pen**: any): void

**Parameters**

- **points** ([Point](../Stimulsoft_System/Drawing/Point.md)[])  
- **pen** (any)  


---

#### drawRectangle

**drawRectangle**(**rect**: [Rectangle](../Stimulsoft_System/Drawing/Rectangle.md), **pen**: any, **corners**: StiCornerRadius): void

**Parameters**

- **rect** ([Rectangle](../Stimulsoft_System/Drawing/Rectangle.md))  
- **pen** (any)  
- **corners** (StiCornerRadius)  


---

#### drawSpline

**drawSpline**(**points**: [Point](../Stimulsoft_System/Drawing/Point.md)[], **tension**: number, **pen**: any): void

**Parameters**

- **points** ([Point](../Stimulsoft_System/Drawing/Point.md)[])  
- **tension** (number)  
- **pen** (any)  


---

#### drawString

**drawString**(**st**: string, **font**: [Font](../Stimulsoft_Base/Dashboard/Font.md), **brush**: [StiBrush](../Stimulsoft_Base/Drawing/StiBrush.md), **rect**: [Rectangle](../Stimulsoft_System/Drawing/Rectangle.md), **sf**: [StringFormat](../Stimulsoft_System/Drawing/StringFormat.md)): void

**Parameters**

- **st** (string)  
- **font** ([Font](../Stimulsoft_Base/Dashboard/Font.md))  
- **brush** ([StiBrush](../Stimulsoft_Base/Drawing/StiBrush.md))  
- **rect** ([Rectangle](../Stimulsoft_System/Drawing/Rectangle.md))  
- **sf** ([StringFormat](../Stimulsoft_System/Drawing/StringFormat.md))  


---

#### drawText

**drawText**(**basePoint**: PointD, **text**: string, **charsOffset**: number[], **font**: [Font](../Stimulsoft_Base/Dashboard/Font.md), **textColor**: [Color](../Stimulsoft_System/Drawing/Color.md), **angle**: number, **textAlign**: [EmfTextAlignmentMode](../Stimulsoft_Report/Export/EmfTextAlignmentMode.md)): void

**Parameters**

- **basePoint** (PointD)  
- **text** (string)  
- **charsOffset** (number[])  
- **font** ([Font](../Stimulsoft_Base/Dashboard/Font.md))  
- **textColor** ([Color](../Stimulsoft_System/Drawing/Color.md))  
- **angle** (number)  
- **textAlign** ([EmfTextAlignmentMode](../Stimulsoft_Report/Export/EmfTextAlignmentMode.md))  


---

#### endPath

**endPath**(): void


---

#### fillEllipse

**fillEllipse**(**rect**: [Rectangle](../Stimulsoft_System/Drawing/Rectangle.md), **brush**: any): void

**Parameters**

- **rect** ([Rectangle](../Stimulsoft_System/Drawing/Rectangle.md))  
- **brush** (any)  


---

#### fillPath

**fillPath**(**brush**: any): void

**Parameters**

- **brush** (any)  


---

#### fillPolygon

**fillPolygon**(**points**: [Point](../Stimulsoft_System/Drawing/Point.md)[], **brush**: any): void

**Parameters**

- **points** ([Point](../Stimulsoft_System/Drawing/Point.md)[])  
- **brush** (any)  


---

#### fillPolygons

**fillPolygons**(**points**: PointD[][], **brush**: any): void

**Parameters**

- **points** (PointD[][])  
- **brush** (any)  


---

#### fillRectangle

**fillRectangle**(**rect**: [Rectangle](../Stimulsoft_System/Drawing/Rectangle.md), **brush**: any, **corners**: StiCornerRadius): void

**Parameters**

- **rect** ([Rectangle](../Stimulsoft_System/Drawing/Rectangle.md))  
- **brush** (any)  
- **corners** (StiCornerRadius)  


---

#### getBezierString

**getBezierString**(**p1**: [Point](../Stimulsoft_System/Drawing/Point.md), **p2**: [Point](../Stimulsoft_System/Drawing/Point.md), **p3**: [Point](../Stimulsoft_System/Drawing/Point.md)): string

**Parameters**

- **p1** ([Point](../Stimulsoft_System/Drawing/Point.md))  
- **p2** ([Point](../Stimulsoft_System/Drawing/Point.md))  
- **p3** ([Point](../Stimulsoft_System/Drawing/Point.md))  

**Returns** string


---

#### getBezierString2

**getBezierString2**(**p1x**: number, **p1y**: number, **p2x**: number, **p2y**: number, **p3x**: number, **p3y**: number): string

**Parameters**

- **p1x** (number)  
- **p1y** (number)  
- **p2x** (number)  
- **p2y** (number)  
- **p3x** (number)  
- **p3y** (number)  

**Returns** string


---

#### getEllipseString

**getEllipseString**(**rect**: [Rectangle](../Stimulsoft_System/Drawing/Rectangle.md)): string

**Parameters**

- **rect** ([Rectangle](../Stimulsoft_System/Drawing/Rectangle.md))  

**Returns** string


---

#### getEllipseString4

**getEllipseString4**(**x**: number, **y**: number, **width**: number, **height**: number): string

**Parameters**

- **x** (number)  
- **y** (number)  
- **width** (number)  
- **height** (number)  

**Returns** string


---

#### getLineToString

**getLineToString**(**pointTo**: [Point](../Stimulsoft_System/Drawing/Point.md)): string

**Parameters**

- **pointTo** ([Point](../Stimulsoft_System/Drawing/Point.md))  

**Returns** string


---

#### getPointString

**getPointString**(**point**: [Point](../Stimulsoft_System/Drawing/Point.md)): string

**Parameters**

- **point** ([Point](../Stimulsoft_System/Drawing/Point.md))  

**Returns** string


---

#### getPolylineString

**getPolylineString**(**points**: [Point](../Stimulsoft_System/Drawing/Point.md)[], **close**: boolean, **drawTo**: boolean): string

**Parameters**

- **points** ([Point](../Stimulsoft_System/Drawing/Point.md)[])  
- **close** (boolean)  
- **drawTo** (boolean)  

**Returns** string


---

#### getRectString

**getRectString**(**rect**: [Rectangle](../Stimulsoft_System/Drawing/Rectangle.md)): string

**Parameters**

- **rect** ([Rectangle](../Stimulsoft_System/Drawing/Rectangle.md))  

**Returns** string


---

#### getRectString4

**getRectString4**(**x**: number, **y**: number, **width**: number, **height**: number): string

**Parameters**

- **x** (number)  
- **y** (number)  
- **width** (number)  
- **height** (number)  

**Returns** string


---

#### getRectWithCornersString

**getRectWithCornersString**(**rect**: [Rectangle](../Stimulsoft_System/Drawing/Rectangle.md), **corners**: StiCornerRadius): string

**Parameters**

- **rect** ([Rectangle](../Stimulsoft_System/Drawing/Rectangle.md))  
- **corners** (StiCornerRadius)  

**Returns** string


---

#### measureString

**measureString**(**st**: string, **font**: [Font](../Stimulsoft_Base/Dashboard/Font.md)): SizeD

**Parameters**

- **st** (string)  
- **font** ([Font](../Stimulsoft_Base/Dashboard/Font.md))  

**Returns** SizeD


---

#### moveTo

**moveTo**(**point**: [Point](../Stimulsoft_System/Drawing/Point.md)): void

**Parameters**

- **point** ([Point](../Stimulsoft_System/Drawing/Point.md))  


---

#### restoreState

**restoreState**(): void


---

#### rotateTransform

**rotateTransform**(**angle**: number): void

**Parameters**

- **angle** (number)  


---

#### rotateTransform2

**rotateTransform2**(**angle**: number, **x**: number, **y**: number): void

**Parameters**

- **angle** (number)  
- **x** (number)  
- **y** (number)  


---

#### saveState

**saveState**(): void


---

#### setBrush

**setBrush**(**brush**: Color | StiBrush, **rect**: [Rectangle](../Stimulsoft_System/Drawing/Rectangle.md), **saveState**: any, **REFisTransparent**: any): boolean

**Parameters**

- **brush** (Color | StiBrush)  
- **rect** ([Rectangle](../Stimulsoft_System/Drawing/Rectangle.md))  
- **saveState** (any)  
- **REFisTransparent** (any)  

**Returns** boolean


---

#### setClip

**setClip**(**rect**: [Rectangle](../Stimulsoft_System/Drawing/Rectangle.md)): void

**Parameters**

- **rect** ([Rectangle](../Stimulsoft_System/Drawing/Rectangle.md))  


---

#### setPen

**setPen**(**objPen**: any, **saveState**: any, **forceThin**: any): boolean

**Parameters**

- **objPen** (any)  
- **saveState** (any)  
- **forceThin** (any)  

**Returns** boolean


---

#### setPixel

**setPixel**(**point**: PointD, **color**: [Color](../Stimulsoft_System/Drawing/Color.md)): void

**Parameters**

- **point** (PointD)  
- **color** ([Color](../Stimulsoft_System/Drawing/Color.md))  


---

#### strokePath

**strokePath**(**pen**: any): void

**Parameters**

- **pen** (any)  


---

#### translateTransform

**translateTransform**(**x**: number, **y**: number): void

**Parameters**

- **x** (number)  
- **y** (number)  

