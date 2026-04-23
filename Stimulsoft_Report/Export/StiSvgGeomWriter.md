---
title: "StiSvgGeomWriter Class"
---

## StiSvgGeomWriter Class

**Namespace:** `Stimulsoft.Report.Export`

### Inheritance

Implements: [IStiExportGeomWriter](IStiExportGeomWriter.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([XmlTextWriter](../../Stimulsoft_System/Xml/XmlTextWriter.md) writer) |  |

**constructor**(**writer**: [XmlTextWriter](../../Stimulsoft_System/Xml/XmlTextWriter.md))

**Parameters**

- **writer** ([XmlTextWriter](../../Stimulsoft_System/Xml/XmlTextWriter.md))  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **beginPath** | void |  |
| **closeFigure** | void |  |
| **drawArc2** | void |  |
| **drawBezier** | void |  |
| **drawBezierTo** | void |  |
| **drawEllipse** | void |  |
| **drawFontIcon** | void |  |
| **drawImage** | void |  |
| **drawLine** | void |  |
| **drawLineTo** | void |  |
| **drawPolygon** | void |  |
| **drawPolyline** | void |  |
| **drawPolylineTo** | void |  |
| **drawRectangle** | void |  |
| **drawString** | void |  |
| **endPath** | void |  |
| **endTransform** | void |  |
| **fillEllipse** | void |  |
| **fillPath** | void |  |
| **fillPolygon** | void |  |
| **fillPolygons** | void |  |
| **fillRectangle** | void |  |
| **fillRectangle2** | void |  |
| **measureString** | SizeD |  |
| **moveTo** | void |  |
| **restoreState** | void |  |
| **rotateTransform** | void |  |
| **saveState** | void |  |
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

#### drawArc2

**drawArc2**(**rect**: RectangleD, **p1**: PointD, **p2**: PointD, **pen**: [Pen](../../Stimulsoft_System/Drawing/Pen.md)): void

**Parameters**

- **rect** (RectangleD)  
- **p1** (PointD)  
- **p2** (PointD)  
- **pen** ([Pen](../../Stimulsoft_System/Drawing/Pen.md))  


---

#### drawBezier

**drawBezier**(**p1**: PointD, **p2**: PointD, **p3**: PointD, **p4**: PointD, **pen**: any): void

**Parameters**

- **p1** (PointD)  
- **p2** (PointD)  
- **p3** (PointD)  
- **p4** (PointD)  
- **pen** (any)  


---

#### drawBezierTo

**drawBezierTo**(**p2**: PointD, **p3**: PointD, **p4**: PointD, **pen**: any): void

**Parameters**

- **p2** (PointD)  
- **p3** (PointD)  
- **p4** (PointD)  
- **pen** (any)  


---

#### drawEllipse

**drawEllipse**(**rect**: RectangleD, **pen**: any): void

**Parameters**

- **rect** (RectangleD)  
- **pen** (any)  


---

#### drawFontIcon

**drawFontIcon**(**color**: [Color](../../Stimulsoft_System/Drawing/Color.md), **icon**: [StiFontIcons](../../Stimulsoft_Base/Stimulsoft/Report/Helpers/StiFontIcons.md), **rect**: RectangleD): void

**Parameters**

- **color** ([Color](../../Stimulsoft_System/Drawing/Color.md))  
- **icon** ([StiFontIcons](../../Stimulsoft_Base/Stimulsoft/Report/Helpers/StiFontIcons.md))  
- **rect** (RectangleD)  


---

#### drawImage

**drawImage**(**img**: [Image](../../Stimulsoft_System/Drawing/Image.md), **rect**: RectangleD): void

**Parameters**

- **img** ([Image](../../Stimulsoft_System/Drawing/Image.md))  
- **rect** (RectangleD)  


---

#### drawLine

**drawLine**(**pointFrom**: PointD, **pointTo**: PointD, **pen**: any): void

**Parameters**

- **pointFrom** (PointD)  
- **pointTo** (PointD)  
- **pen** (any)  


---

#### drawLineTo

**drawLineTo**(**pointTo**: PointD, **pen**: any): void

**Parameters**

- **pointTo** (PointD)  
- **pen** (any)  


---

#### drawPolygon

**drawPolygon**(**points**: PointD[], **pen**: any): void

**Parameters**

- **points** (PointD[])  
- **pen** (any)  


---

#### drawPolyline

**drawPolyline**(**points**: PointD[], **pen**: [Pen](../../Stimulsoft_System/Drawing/Pen.md)): void

**Parameters**

- **points** (PointD[])  
- **pen** ([Pen](../../Stimulsoft_System/Drawing/Pen.md))  


---

#### drawPolylineTo

**drawPolylineTo**(**points**: PointD[], **pen**: any): void

**Parameters**

- **points** (PointD[])  
- **pen** (any)  


---

#### drawRectangle

**drawRectangle**(**rect**: RectangleD, **pen**: any): void

**Parameters**

- **rect** (RectangleD)  
- **pen** (any)  


---

#### drawString

**drawString**(**st**: string, **font**: [Font](../../Stimulsoft_Base/Dashboard/Font.md), **brush**: any, **rect**: RectangleD, **sf**: [StringFormat](../../Stimulsoft_System/Drawing/StringFormat.md)): void

**Parameters**

- **st** (string)  
- **font** ([Font](../../Stimulsoft_Base/Dashboard/Font.md))  
- **brush** (any)  
- **rect** (RectangleD)  
- **sf** ([StringFormat](../../Stimulsoft_System/Drawing/StringFormat.md))  


---

#### endPath

**endPath**(): void


---

#### endTransform

**endTransform**(): void


---

#### fillEllipse

**fillEllipse**(**rect**: RectangleD, **brush**: any): void

**Parameters**

- **rect** (RectangleD)  
- **brush** (any)  


---

#### fillPath

**fillPath**(**brush**: any): void

**Parameters**

- **brush** (any)  


---

#### fillPolygon

**fillPolygon**(**points**: PointD[], **brush**: any): void

**Parameters**

- **points** (PointD[])  
- **brush** (any)  


---

#### fillPolygons

**fillPolygons**(**points**: PointD[][], **brush**: any): void

**Parameters**

- **points** (PointD[][])  
- **brush** (any)  


---

#### fillRectangle

**fillRectangle**(**rect**: RectangleD, **brush**: any): void

**Parameters**

- **rect** (RectangleD)  
- **brush** (any)  


---

#### fillRectangle2

**fillRectangle2**(**rect**: RectangleD, **color**: [Color](../../Stimulsoft_System/Drawing/Color.md)): void

**Parameters**

- **rect** (RectangleD)  
- **color** ([Color](../../Stimulsoft_System/Drawing/Color.md))  


---

#### measureString

**measureString**(**st**: string, **font**: [Font](../../Stimulsoft_Base/Dashboard/Font.md)): SizeD

**Parameters**

- **st** (string)  
- **font** ([Font](../../Stimulsoft_Base/Dashboard/Font.md))  

**Returns** SizeD


---

#### moveTo

**moveTo**(**point**: PointD): void

**Parameters**

- **point** (PointD)  


---

#### restoreState

**restoreState**(): void


---

#### rotateTransform

**rotateTransform**(**angle**: number): void

**Parameters**

- **angle** (number)  


---

#### saveState

**saveState**(): void


---

#### setPixel

**setPixel**(**point**: PointD, **color**: [Color](../../Stimulsoft_System/Drawing/Color.md)): void

**Parameters**

- **point** (PointD)  
- **color** ([Color](../../Stimulsoft_System/Drawing/Color.md))  


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

