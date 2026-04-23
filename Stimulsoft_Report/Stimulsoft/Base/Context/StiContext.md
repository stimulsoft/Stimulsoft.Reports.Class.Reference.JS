---
title: "StiContext Class"
---

## StiContext Class

**Namespace:** `Stimulsoft.Base.Context`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([StiContextPainter](StiContextPainter.md) contextPainter, boolean isGdi, boolean isWpf, boolean isPrinting, number zoom) |  |

**constructor**(**contextPainter**: [StiContextPainter](StiContextPainter.md), **isGdi**: boolean, **isWpf**: boolean, **isPrinting**: boolean, **zoom**: number)

**Parameters**

- **contextPainter** ([StiContextPainter](StiContextPainter.md))  
- **isGdi** (boolean)  
- **isWpf** (boolean)  
- **isPrinting** (boolean)  
- **zoom** (number)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **createShadowGraphics** | [StiContext](StiContext.md) |  |
| **drawAnimationBar** | void |  |
| **drawAnimationCicledBar** | void |  |
| **drawAnimationCicledColumn** | void |  |
| **drawAnimationCicledRectangle** | void |  |
| **drawAnimationColumn** | void |  |
| **drawAnimationCurve** | void |  |
| **drawAnimationLabel** | void |  |
| **drawAnimationLines** | void |  |
| **drawAnimationPathElement** | void |  |
| **drawAnimationRectangle** | void |  |
| **drawAnimationText** | StiTextGeom |  |
| **drawCicledRectangle** | void |  |
| **drawCurve** | void |  |
| **drawEllipse** | void |  |
| **drawEllipse2** | void |  |
| **drawImage** | void |  |
| **drawLine** | void |  |
| **drawLines** | void |  |
| **drawPath** | void |  |
| **drawRectangle** | void |  |
| **drawRectangle2** | void |  |
| **drawRotatedString2** | StiTextGeom |  |
| **drawRotatedString3** | StiTextGeom |  |
| **drawRotatedString4** | StiTextGeom |  |
| **drawRotatedString5** | StiTextGeom |  |
| **drawRotatedString6** | StiTextGeom |  |
| **drawRotatedString7** | StiTextGeom |  |
| **drawRotatedString8** | StiTextGeom |  |
| **drawRotatedString9** | StiTextGeom |  |
| **drawShadow** | void |  |
| **drawShadowRect** | void |  |
| **drawShadowRect2** | void |  |
| **drawString** | StiTextGeom |  |
| **drawString2** | StiTextGeom |  |
| **drawString3** | StiTextGeom |  |
| **fillCicledRectangle** | void |  |
| **fillDrawAnimationEllipse** | void |  |
| **fillDrawAnimationPath** | void |  |
| **fillEllipse** | void |  |
| **fillEllipse2** | void |  |
| **fillEllipse3** | void |  |
| **fillPath** | void |  |
| **fillPath2** | void |  |
| **fillRectangle** | void |  |
| **fillRectangle2** | void |  |
| **fillRectangle3** | void |  |
| **getDefaultStringFormat** | StiStringFormatGeom |  |
| **getGenericStringFormat** | StiStringFormatGeom |  |
| **getPathBounds** | [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md) |  |
| **measureRotatedString** | [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md) |  |
| **measureRotatedString2** | [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md) |  |
| **measureRotatedString3** | [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md) |  |
| **measureRotatedString4** | [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md) |  |
| **measureString** | [Size](../../../../Stimulsoft_System/Drawing/Size.md) |  |
| **measureString2** | [Size](../../../../Stimulsoft_System/Drawing/Size.md) |  |
| **popClip** | void |  |
| **popSmoothingMode** | void |  |
| **popTextRenderingHint** | void |  |
| **popTransform** | void |  |
| **pushClip** | void |  |
| **pushClipPath** | void |  |
| **pushRotateTransform** | void |  |
| **pushSmoothingModeToAntiAlias** | void |  |
| **pushTextRenderingHintToAntiAlias** | void |  |
| **pushTranslateTransform** | void |  |
| **render** | void |  |

---

### Method Details

#### createShadowGraphics

**createShadowGraphics**(): [StiContext](StiContext.md)

**Returns** [StiContext](StiContext.md)


---

#### drawAnimationBar

**drawAnimationBar**(**brush**: any, **borderPen**: StiPenGeom, **columnRect**: any, **value**: number, **toolTip**: string, **tag**: any, **animation**: [StiAnimation](Animation/StiAnimation.md), **interaction**: [StiInteractionDataGeom](StiInteractionDataGeom.md)): void

**Parameters**

- **brush** (any)  
- **borderPen** (StiPenGeom)  
- **columnRect** (any)  
- **value** (number)  
- **toolTip** (string)  
- **tag** (any)  
- **animation** ([StiAnimation](Animation/StiAnimation.md))  
- **interaction** ([StiInteractionDataGeom](StiInteractionDataGeom.md))  


---

#### drawAnimationCicledBar

**drawAnimationCicledBar**(**brush**: any, **borderPen**: StiPenGeom, **columnRect**: any, **cornerRadius**: StiCornerRadius, **value**: number, **toolTip**: string, **tag**: any, **animation**: [StiAnimation](Animation/StiAnimation.md), **interaction**: [StiInteractionDataGeom](StiInteractionDataGeom.md)): void

**Parameters**

- **brush** (any)  
- **borderPen** (StiPenGeom)  
- **columnRect** (any)  
- **cornerRadius** (StiCornerRadius)  
- **value** (number)  
- **toolTip** (string)  
- **tag** (any)  
- **animation** ([StiAnimation](Animation/StiAnimation.md))  
- **interaction** ([StiInteractionDataGeom](StiInteractionDataGeom.md))  


---

#### drawAnimationCicledColumn

**drawAnimationCicledColumn**(**brush**: any, **borderPen**: StiPenGeom, **rect**: any, **cornerRadius**: StiCornerRadius, **value**: number, **toolTip**: string, **tag**: any, **animation**: [StiAnimation](Animation/StiAnimation.md), **interaction**: [StiInteractionDataGeom](StiInteractionDataGeom.md)): void

**Parameters**

- **brush** (any)  
- **borderPen** (StiPenGeom)  
- **rect** (any)  
- **cornerRadius** (StiCornerRadius)  
- **value** (number)  
- **toolTip** (string)  
- **tag** (any)  
- **animation** ([StiAnimation](Animation/StiAnimation.md))  
- **interaction** ([StiInteractionDataGeom](StiInteractionDataGeom.md))  


---

#### drawAnimationCicledRectangle

**drawAnimationCicledRectangle**(**brush**: any, **pen**: StiPenGeom, **rect**: [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md), **cornerRadius**: StiCornerRadius, **tag**: any, **animation**: [StiAnimation](Animation/StiAnimation.md), **interaction**: [StiInteractionDataGeom](StiInteractionDataGeom.md), **tooltip**: string): void

**Parameters**

- **brush** (any)  
- **pen** (StiPenGeom)  
- **rect** ([Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md))  
- **cornerRadius** (StiCornerRadius)  
- **tag** (any)  
- **animation** ([StiAnimation](Animation/StiAnimation.md))  
- **interaction** ([StiInteractionDataGeom](StiInteractionDataGeom.md))  
- **tooltip** (string)  


---

#### drawAnimationColumn

**drawAnimationColumn**(**brush**: any, **borderPen**: StiPenGeom, **rect**: any, **value**: number, **toolTip**: string, **tag**: any, **animation**: [StiAnimation](Animation/StiAnimation.md), **interaction**: [StiInteractionDataGeom](StiInteractionDataGeom.md)): void

**Parameters**

- **brush** (any)  
- **borderPen** (StiPenGeom)  
- **rect** (any)  
- **value** (number)  
- **toolTip** (string)  
- **tag** (any)  
- **animation** ([StiAnimation](Animation/StiAnimation.md))  
- **interaction** ([StiInteractionDataGeom](StiInteractionDataGeom.md))  


---

#### drawAnimationCurve

**drawAnimationCurve**(**pen**: StiPenGeom, **points**: [Point](../../../../Stimulsoft_System/Drawing/Point.md)[], **tension**: number, **animation**: [StiAnimation](Animation/StiAnimation.md)): void

**Parameters**

- **pen** (StiPenGeom)  
- **points** ([Point](../../../../Stimulsoft_System/Drawing/Point.md)[])  
- **tension** (number)  
- **animation** ([StiAnimation](Animation/StiAnimation.md))  


---

#### drawAnimationLabel

**drawAnimationLabel**(**text**: string, **font**: StiFontGeom, **textBrush**: any, **labelBrush**: any, **penBorder**: StiPenGeom, **rect**: [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md), **sf**: StiStringFormatGeom, **mode**: [StiRotationMode](../../../../Stimulsoft_Base/Drawing/StiRotationMode.md), **angle**: number, **drawBorder**: boolean, **animation**: [StiAnimation](Animation/StiAnimation.md)): void

**Parameters**

- **text** (string)  
- **font** (StiFontGeom)  
- **textBrush** (any)  
- **labelBrush** (any)  
- **penBorder** (StiPenGeom)  
- **rect** ([Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md))  
- **sf** (StiStringFormatGeom)  
- **mode** ([StiRotationMode](../../../../Stimulsoft_Base/Drawing/StiRotationMode.md))  
- **angle** (number)  
- **drawBorder** (boolean)  
- **animation** ([StiAnimation](Animation/StiAnimation.md))  


---

#### drawAnimationLines

**drawAnimationLines**(**pen**: StiPenGeom, **points**: [Point](../../../../Stimulsoft_System/Drawing/Point.md)[], **animation**: [StiAnimation](Animation/StiAnimation.md)): void

**Parameters**

- **pen** (StiPenGeom)  
- **points** ([Point](../../../../Stimulsoft_System/Drawing/Point.md)[])  
- **animation** ([StiAnimation](Animation/StiAnimation.md))  


---

#### drawAnimationPathElement

**drawAnimationPathElement**(**brush**: any, **borderPen**: StiPenGeom, **path**: StiSegmentGeom[], **rect**: any, **toolTip**: string, **tag**: any, **animation**: [StiAnimation](Animation/StiAnimation.md), **interaction**: [StiInteractionDataGeom](StiInteractionDataGeom.md)): void

**Parameters**

- **brush** (any)  
- **borderPen** (StiPenGeom)  
- **path** (StiSegmentGeom[])  
- **rect** (any)  
- **toolTip** (string)  
- **tag** (any)  
- **animation** ([StiAnimation](Animation/StiAnimation.md))  
- **interaction** ([StiInteractionDataGeom](StiInteractionDataGeom.md))  


---

#### drawAnimationRectangle

**drawAnimationRectangle**(**brush**: any, **pen**: StiPenGeom, **rect**: [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md), **tag**: any, **animation**: [StiAnimation](Animation/StiAnimation.md), **interaction**: [StiInteractionDataGeom](StiInteractionDataGeom.md), **tooltip**: string): void

**Parameters**

- **brush** (any)  
- **pen** (StiPenGeom)  
- **rect** ([Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md))  
- **tag** (any)  
- **animation** ([StiAnimation](Animation/StiAnimation.md))  
- **interaction** ([StiInteractionDataGeom](StiInteractionDataGeom.md))  
- **tooltip** (string)  


---

#### drawAnimationText

**drawAnimationText**(**text**: string, **font**: StiFontGeom, **brush**: any, **rect**: [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md), **sf**: StiStringFormatGeom, **mode**: [StiRotationMode](../../../../Stimulsoft_Base/Drawing/StiRotationMode.md), **angle**: number, **antialiasing**: boolean, **maximalWidth**: number, **animation**: [StiAnimation](Animation/StiAnimation.md)): StiTextGeom

**Parameters**

- **text** (string)  
- **font** (StiFontGeom)  
- **brush** (any)  
- **rect** ([Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md))  
- **sf** (StiStringFormatGeom)  
- **mode** ([StiRotationMode](../../../../Stimulsoft_Base/Drawing/StiRotationMode.md))  
- **angle** (number)  
- **antialiasing** (boolean)  
- **maximalWidth** (number)  
- **animation** ([StiAnimation](Animation/StiAnimation.md))  

**Returns** StiTextGeom


---

#### drawCicledRectangle

**drawCicledRectangle**(**pen**: StiPenGeom, **rect**: [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md), **cornerRadius**: StiCornerRadius): void

**Parameters**

- **pen** (StiPenGeom)  
- **rect** ([Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md))  
- **cornerRadius** (StiCornerRadius)  


---

#### drawCurve

**drawCurve**(**pen**: StiPenGeom, **points**: [Point](../../../../Stimulsoft_System/Drawing/Point.md)[], **tension**: number): void

**Parameters**

- **pen** (StiPenGeom)  
- **points** ([Point](../../../../Stimulsoft_System/Drawing/Point.md)[])  
- **tension** (number)  


---

#### drawEllipse

**drawEllipse**(**pen**: StiPenGeom, **x**: number, **y**: number, **width**: number, **height**: number): void

**Parameters**

- **pen** (StiPenGeom)  
- **x** (number)  
- **y** (number)  
- **width** (number)  
- **height** (number)  


---

#### drawEllipse2

**drawEllipse2**(**pen**: StiPenGeom, **rect**: [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md)): void

**Parameters**

- **pen** (StiPenGeom)  
- **rect** ([Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md))  


---

#### drawImage

**drawImage**(**image**: number[], **rect**: [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md)): void

**Parameters**

- **image** (number[])  
- **rect** ([Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md))  


---

#### drawLine

**drawLine**(**pen**: StiPenGeom, **x1**: number, **y1**: number, **x2**: number, **y2**: number): void

**Parameters**

- **pen** (StiPenGeom)  
- **x1** (number)  
- **y1** (number)  
- **x2** (number)  
- **y2** (number)  


---

#### drawLines

**drawLines**(**pen**: StiPenGeom, **points**: [Point](../../../../Stimulsoft_System/Drawing/Point.md)[]): void

**Parameters**

- **pen** (StiPenGeom)  
- **points** ([Point](../../../../Stimulsoft_System/Drawing/Point.md)[])  


---

#### drawPath

**drawPath**(**pen**: StiPenGeom, **path**: StiSegmentGeom[], **rect**: any): void

**Parameters**

- **pen** (StiPenGeom)  
- **path** (StiSegmentGeom[])  
- **rect** (any)  


---

#### drawRectangle

**drawRectangle**(**pen**: StiPenGeom, **rect**: [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md)): void

**Parameters**

- **pen** (StiPenGeom)  
- **rect** ([Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md))  


---

#### drawRectangle2

**drawRectangle2**(**pen**: StiPenGeom, **x**: number, **y**: number, **width**: number, **height**: number): void

**Parameters**

- **pen** (StiPenGeom)  
- **x** (number)  
- **y** (number)  
- **width** (number)  
- **height** (number)  


---

#### drawRotatedString2

**drawRotatedString2**(**text**: string, **font**: StiFontGeom, **brush**: any, **rect**: [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md), **sf**: StiStringFormatGeom, **angle**: number, **antialiasing**: boolean): StiTextGeom

**Parameters**

- **text** (string)  
- **font** (StiFontGeom)  
- **brush** (any)  
- **rect** ([Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md))  
- **sf** (StiStringFormatGeom)  
- **angle** (number)  
- **antialiasing** (boolean)  

**Returns** StiTextGeom


---

#### drawRotatedString3

**drawRotatedString3**(**text**: string, **font**: StiFontGeom, **brush**: any, **rect**: [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md), **sf**: StiStringFormatGeom, **angle**: number, **antialiasing**: boolean): StiTextGeom

**Parameters**

- **text** (string)  
- **font** (StiFontGeom)  
- **brush** (any)  
- **rect** ([Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md))  
- **sf** (StiStringFormatGeom)  
- **angle** (number)  
- **antialiasing** (boolean)  

**Returns** StiTextGeom


---

#### drawRotatedString4

**drawRotatedString4**(**text**: string, **font**: StiFontGeom, **brush**: any, **pos**: [Point](../../../../Stimulsoft_System/Drawing/Point.md), **sf**: StiStringFormatGeom, **mode**: [StiRotationMode](../../../../Stimulsoft_Base/Drawing/StiRotationMode.md), **angle**: number, **antialiasing**: boolean): StiTextGeom

**Parameters**

- **text** (string)  
- **font** (StiFontGeom)  
- **brush** (any)  
- **pos** ([Point](../../../../Stimulsoft_System/Drawing/Point.md))  
- **sf** (StiStringFormatGeom)  
- **mode** ([StiRotationMode](../../../../Stimulsoft_Base/Drawing/StiRotationMode.md))  
- **angle** (number)  
- **antialiasing** (boolean)  

**Returns** StiTextGeom


---

#### drawRotatedString5

**drawRotatedString5**(**text**: string, **font**: StiFontGeom, **brush**: any, **rect**: [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md), **sf**: StiStringFormatGeom, **mode**: [StiRotationMode](../../../../Stimulsoft_Base/Drawing/StiRotationMode.md), **angle**: number, **antialiasing**: boolean): StiTextGeom

**Parameters**

- **text** (string)  
- **font** (StiFontGeom)  
- **brush** (any)  
- **rect** ([Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md))  
- **sf** (StiStringFormatGeom)  
- **mode** ([StiRotationMode](../../../../Stimulsoft_Base/Drawing/StiRotationMode.md))  
- **angle** (number)  
- **antialiasing** (boolean)  

**Returns** StiTextGeom


---

#### drawRotatedString6

**drawRotatedString6**(**text**: string, **font**: StiFontGeom, **brush**: any, **rect**: [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md), **sf**: StiStringFormatGeom, **mode**: [StiRotationMode](../../../../Stimulsoft_Base/Drawing/StiRotationMode.md), **angle**: number, **antialiasing**: boolean, **maximalWidth**: number, **isRotated**: any): StiTextGeom

**Parameters**

- **text** (string)  
- **font** (StiFontGeom)  
- **brush** (any)  
- **rect** ([Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md))  
- **sf** (StiStringFormatGeom)  
- **mode** ([StiRotationMode](../../../../Stimulsoft_Base/Drawing/StiRotationMode.md))  
- **angle** (number)  
- **antialiasing** (boolean)  
- **maximalWidth** (number)  
- **isRotated** (any)  

**Returns** StiTextGeom


---

#### drawRotatedString7

**drawRotatedString7**(**text**: string, **font**: StiFontGeom, **brush**: any, **rect**: [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md), **sf**: StiStringFormatGeom, **mode**: [StiRotationMode](../../../../Stimulsoft_Base/Drawing/StiRotationMode.md), **angle**: number, **antialiasing**: boolean, **maximalWidth**: number): StiTextGeom

**Parameters**

- **text** (string)  
- **font** (StiFontGeom)  
- **brush** (any)  
- **rect** ([Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md))  
- **sf** (StiStringFormatGeom)  
- **mode** ([StiRotationMode](../../../../Stimulsoft_Base/Drawing/StiRotationMode.md))  
- **angle** (number)  
- **antialiasing** (boolean)  
- **maximalWidth** (number)  

**Returns** StiTextGeom


---

#### drawRotatedString8

**drawRotatedString8**(**text**: string, **font**: StiFontGeom, **brush**: any, **rect**: [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md), **sf**: StiStringFormatGeom, **mode**: [StiRotationMode](../../../../Stimulsoft_Base/Drawing/StiRotationMode.md), **angle**: number, **antialiasing**: boolean): StiTextGeom

**Parameters**

- **text** (string)  
- **font** (StiFontGeom)  
- **brush** (any)  
- **rect** ([Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md))  
- **sf** (StiStringFormatGeom)  
- **mode** ([StiRotationMode](../../../../Stimulsoft_Base/Drawing/StiRotationMode.md))  
- **angle** (number)  
- **antialiasing** (boolean)  

**Returns** StiTextGeom


---

#### drawRotatedString9

**drawRotatedString9**(**text**: string, **font**: StiFontGeom, **brush**: any, **pos**: [Point](../../../../Stimulsoft_System/Drawing/Point.md), **sf**: StiStringFormatGeom, **mode**: [StiRotationMode](../../../../Stimulsoft_Base/Drawing/StiRotationMode.md), **angle**: number, **antialiasing**: boolean, **maximalWidth**: number): StiTextGeom

**Parameters**

- **text** (string)  
- **font** (StiFontGeom)  
- **brush** (any)  
- **pos** ([Point](../../../../Stimulsoft_System/Drawing/Point.md))  
- **sf** (StiStringFormatGeom)  
- **mode** ([StiRotationMode](../../../../Stimulsoft_Base/Drawing/StiRotationMode.md))  
- **angle** (number)  
- **antialiasing** (boolean)  
- **maximalWidth** (number)  

**Returns** StiTextGeom


---

#### drawShadow

**drawShadow**(**sg**: [StiContext](StiContext.md), **rect**: [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md), **radius**: number): void

**Parameters**

- **sg** ([StiContext](StiContext.md))  
- **rect** ([Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md))  
- **radius** (number)  


---

#### drawShadowRect

**drawShadowRect**(**rect**: [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md), **shadowWidth**: number, **cornerRadius**: StiCornerRadius, **animation**: [StiAnimation](Animation/StiAnimation.md)): void

**Parameters**

- **rect** ([Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md))  
- **shadowWidth** (number)  
- **cornerRadius** (StiCornerRadius)  
- **animation** ([StiAnimation](Animation/StiAnimation.md))  


---

#### drawShadowRect2

**drawShadowRect2**(**rect**: [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md), **radiusX**: number, **radiusY**: number, **shadowWidth**: number, **cornerRadius**: StiCornerRadius, **animation**: [StiAnimation](Animation/StiAnimation.md)): void

**Parameters**

- **rect** ([Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md))  
- **radiusX** (number)  
- **radiusY** (number)  
- **shadowWidth** (number)  
- **cornerRadius** (StiCornerRadius)  
- **animation** ([StiAnimation](Animation/StiAnimation.md))  


---

#### drawString

**drawString**(**text**: string, **font**: StiFontGeom, **brush**: any, **rect**: [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md), **sf**: StiStringFormatGeom): StiTextGeom

**Parameters**

- **text** (string)  
- **font** (StiFontGeom)  
- **brush** (any)  
- **rect** ([Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md))  
- **sf** (StiStringFormatGeom)  

**Returns** StiTextGeom


---

#### drawString2

**drawString2**(**text**: string, **font**: StiFontGeom, **brush**: any, **rect**: [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md), **sf**: StiStringFormatGeom): StiTextGeom

**Parameters**

- **text** (string)  
- **font** (StiFontGeom)  
- **brush** (any)  
- **rect** ([Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md))  
- **sf** (StiStringFormatGeom)  

**Returns** StiTextGeom


---

#### drawString3

**drawString3**(**text**: string, **font**: StiFontGeom, **brush**: any, **rect**: [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md), **sf**: StiStringFormatGeom, **toolTip**: string, **interaction**: [StiInteractionDataGeom](StiInteractionDataGeom.md)): StiTextGeom

**Parameters**

- **text** (string)  
- **font** (StiFontGeom)  
- **brush** (any)  
- **rect** ([Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md))  
- **sf** (StiStringFormatGeom)  
- **toolTip** (string)  
- **interaction** ([StiInteractionDataGeom](StiInteractionDataGeom.md))  

**Returns** StiTextGeom


---

#### fillCicledRectangle

**fillCicledRectangle**(**brush**: any, **rect**: [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md), **cornerRadius**: StiCornerRadius, **interaction**: [StiInteractionDataGeom](StiInteractionDataGeom.md), **tooltip**: string): void

**Parameters**

- **brush** (any)  
- **rect** ([Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md))  
- **cornerRadius** (StiCornerRadius)  
- **interaction** ([StiInteractionDataGeom](StiInteractionDataGeom.md))  
- **tooltip** (string)  


---

#### fillDrawAnimationEllipse

**fillDrawAnimationEllipse**(**brush**: any, **pen**: StiPenGeom, **x**: number, **y**: number, **width**: number, **height**: number, **toolTip**: string, **tag**: any, **animation**: [StiAnimation](Animation/StiAnimation.md), **interaction**: [StiInteractionDataGeom](StiInteractionDataGeom.md)): void

**Parameters**

- **brush** (any)  
- **pen** (StiPenGeom)  
- **x** (number)  
- **y** (number)  
- **width** (number)  
- **height** (number)  
- **toolTip** (string)  
- **tag** (any)  
- **animation** ([StiAnimation](Animation/StiAnimation.md))  
- **interaction** ([StiInteractionDataGeom](StiInteractionDataGeom.md))  


---

#### fillDrawAnimationPath

**fillDrawAnimationPath**(**brush**: any, **pen**: StiPenGeom, **path**: StiSegmentGeom[], **rect**: any, **tag**: any, **animation**: [StiAnimation](Animation/StiAnimation.md), **interaction**: [StiInteractionDataGeom](StiInteractionDataGeom.md)): void

**Parameters**

- **brush** (any)  
- **pen** (StiPenGeom)  
- **path** (StiSegmentGeom[])  
- **rect** (any)  
- **tag** (any)  
- **animation** ([StiAnimation](Animation/StiAnimation.md))  
- **interaction** ([StiInteractionDataGeom](StiInteractionDataGeom.md))  


---

#### fillEllipse

**fillEllipse**(**brush**: any, **x**: number, **y**: number, **width**: number, **height**: number, **interaction**: [StiInteractionDataGeom](StiInteractionDataGeom.md)): void

**Parameters**

- **brush** (any)  
- **x** (number)  
- **y** (number)  
- **width** (number)  
- **height** (number)  
- **interaction** ([StiInteractionDataGeom](StiInteractionDataGeom.md))  


---

#### fillEllipse2

**fillEllipse2**(**brush**: any, **rect**: [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md), **interaction**: [StiInteractionDataGeom](StiInteractionDataGeom.md)): void

**Parameters**

- **brush** (any)  
- **rect** ([Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md))  
- **interaction** ([StiInteractionDataGeom](StiInteractionDataGeom.md))  


---

#### fillEllipse3

**fillEllipse3**(**brush**: any, **x**: number, **y**: number, **width**: number, **height**: number, **tooltip**: string, **interaction**: [StiInteractionDataGeom](StiInteractionDataGeom.md)): void

**Parameters**

- **brush** (any)  
- **x** (number)  
- **y** (number)  
- **width** (number)  
- **height** (number)  
- **tooltip** (string)  
- **interaction** ([StiInteractionDataGeom](StiInteractionDataGeom.md))  


---

#### fillPath

**fillPath**(**brush**: any, **path**: StiSegmentGeom[], **rect**: any, **interaction**: [StiInteractionDataGeom](StiInteractionDataGeom.md)): void

**Parameters**

- **brush** (any)  
- **path** (StiSegmentGeom[])  
- **rect** (any)  
- **interaction** ([StiInteractionDataGeom](StiInteractionDataGeom.md))  


---

#### fillPath2

**fillPath2**(**brush**: any, **path**: StiSegmentGeom[], **rect**: any, **interaction**: [StiInteractionDataGeom](StiInteractionDataGeom.md), **toolTip**: string): void

**Parameters**

- **brush** (any)  
- **path** (StiSegmentGeom[])  
- **rect** (any)  
- **interaction** ([StiInteractionDataGeom](StiInteractionDataGeom.md))  
- **toolTip** (string)  


---

#### fillRectangle

**fillRectangle**(**brush**: any, **rect**: [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md), **interaction**: [StiInteractionDataGeom](StiInteractionDataGeom.md)): void

**Parameters**

- **brush** (any)  
- **rect** ([Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md))  
- **interaction** ([StiInteractionDataGeom](StiInteractionDataGeom.md))  


---

#### fillRectangle2

**fillRectangle2**(**brush**: any, **x**: number, **y**: number, **width**: number, **height**: number, **interaction**: [StiInteractionDataGeom](StiInteractionDataGeom.md)): void

**Parameters**

- **brush** (any)  
- **x** (number)  
- **y** (number)  
- **width** (number)  
- **height** (number)  
- **interaction** ([StiInteractionDataGeom](StiInteractionDataGeom.md))  


---

#### fillRectangle3

**fillRectangle3**(**brush**: any, **brushMouseOver**: any, **rect**: [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md), **interaction**: [StiInteractionDataGeom](StiInteractionDataGeom.md)): void

**Parameters**

- **brush** (any)  
- **brushMouseOver** (any)  
- **rect** ([Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md))  
- **interaction** ([StiInteractionDataGeom](StiInteractionDataGeom.md))  


---

#### getDefaultStringFormat

**getDefaultStringFormat**(): StiStringFormatGeom

**Returns** StiStringFormatGeom


---

#### getGenericStringFormat

**getGenericStringFormat**(): StiStringFormatGeom

**Returns** StiStringFormatGeom


---

#### getPathBounds

**getPathBounds**(**geoms**: StiSegmentGeom[]): [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md)

**Parameters**

- **geoms** (StiSegmentGeom[])  

**Returns** [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md)


---

#### measureRotatedString

**measureRotatedString**(**text**: string, **font**: StiFontGeom, **rect**: [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md), **sf**: StiStringFormatGeom, **angle**: number): [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md)

**Parameters**

- **text** (string)  
- **font** (StiFontGeom)  
- **rect** ([Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md))  
- **sf** (StiStringFormatGeom)  
- **angle** (number)  

**Returns** [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md)


---

#### measureRotatedString2

**measureRotatedString2**(**text**: string, **font**: StiFontGeom, **rect**: [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md), **sf**: StiStringFormatGeom, **mode**: [StiRotationMode](../../../../Stimulsoft_Base/Drawing/StiRotationMode.md), **angle**: number, **maximalWidth**: number): [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md)

**Parameters**

- **text** (string)  
- **font** (StiFontGeom)  
- **rect** ([Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md))  
- **sf** (StiStringFormatGeom)  
- **mode** ([StiRotationMode](../../../../Stimulsoft_Base/Drawing/StiRotationMode.md))  
- **angle** (number)  
- **maximalWidth** (number)  

**Returns** [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md)


---

#### measureRotatedString3

**measureRotatedString3**(**text**: string, **font**: StiFontGeom, **point**: [Point](../../../../Stimulsoft_System/Drawing/Point.md), **sf**: StiStringFormatGeom, **mode**: [StiRotationMode](../../../../Stimulsoft_Base/Drawing/StiRotationMode.md), **angle**: number, **maximalWidth**: number): [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md)

**Parameters**

- **text** (string)  
- **font** (StiFontGeom)  
- **point** ([Point](../../../../Stimulsoft_System/Drawing/Point.md))  
- **sf** (StiStringFormatGeom)  
- **mode** ([StiRotationMode](../../../../Stimulsoft_Base/Drawing/StiRotationMode.md))  
- **angle** (number)  
- **maximalWidth** (number)  

**Returns** [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md)


---

#### measureRotatedString4

**measureRotatedString4**(**text**: string, **font**: StiFontGeom, **point**: [Point](../../../../Stimulsoft_System/Drawing/Point.md), **sf**: StiStringFormatGeom, **mode**: [StiRotationMode](../../../../Stimulsoft_Base/Drawing/StiRotationMode.md), **angle**: number): [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md)

**Parameters**

- **text** (string)  
- **font** (StiFontGeom)  
- **point** ([Point](../../../../Stimulsoft_System/Drawing/Point.md))  
- **sf** (StiStringFormatGeom)  
- **mode** ([StiRotationMode](../../../../Stimulsoft_Base/Drawing/StiRotationMode.md))  
- **angle** (number)  

**Returns** [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md)


---

#### measureString

**measureString**(**text**: string, **font**: StiFontGeom): [Size](../../../../Stimulsoft_System/Drawing/Size.md)

**Parameters**

- **text** (string)  
- **font** (StiFontGeom)  

**Returns** [Size](../../../../Stimulsoft_System/Drawing/Size.md)


---

#### measureString2

**measureString2**(**text**: string, **font**: StiFontGeom, **width**: number, **sf**: StiStringFormatGeom): [Size](../../../../Stimulsoft_System/Drawing/Size.md)

**Parameters**

- **text** (string)  
- **font** (StiFontGeom)  
- **width** (number)  
- **sf** (StiStringFormatGeom)  

**Returns** [Size](../../../../Stimulsoft_System/Drawing/Size.md)


---

#### popClip

**popClip**(): void


---

#### popSmoothingMode

**popSmoothingMode**(): void


---

#### popTextRenderingHint

**popTextRenderingHint**(): void


---

#### popTransform

**popTransform**(): void


---

#### pushClip

**pushClip**(**clipRect**: [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md)): void

**Parameters**

- **clipRect** ([Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md))  


---

#### pushClipPath

**pushClipPath**(**listGeoms**: StiSegmentGeom[]): void

**Parameters**

- **listGeoms** (StiSegmentGeom[])  


---

#### pushRotateTransform

**pushRotateTransform**(**angle**: number): void

**Parameters**

- **angle** (number)  


---

#### pushSmoothingModeToAntiAlias

**pushSmoothingModeToAntiAlias**(): void


---

#### pushTextRenderingHintToAntiAlias

**pushTextRenderingHintToAntiAlias**(): void


---

#### pushTranslateTransform

**pushTranslateTransform**(**x**: number, **y**: number): void

**Parameters**

- **x** (number)  
- **y** (number)  


---

#### render

**render**(**rect**: [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md)): void

**Parameters**

- **rect** ([Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md))  

