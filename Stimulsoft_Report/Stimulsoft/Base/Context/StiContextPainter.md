---
title: "StiContextPainter Class"
---

## StiContextPainter Class

**Namespace:** `Stimulsoft.Base.Context`

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **svgRect** | any |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **createShadowGraphics** | [StiContext](StiContext.md) |  |
| **getDefaultStringFormat** | StiStringFormatGeom |  |
| **getGenericStringFormat** | StiStringFormatGeom |  |
| **getPathBounds** | [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md) |  |
| **measureRotatedString1** | [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md) |  |
| **measureRotatedString2** | [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md) |  |
| **measureRotatedString3** | [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md) |  |
| **measureRotatedString4** | [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md) |  |
| **measureString** | [Size](../../../../Stimulsoft_System/Drawing/Size.md) |  |
| **render** | void |  |

---

### Method Details

#### createShadowGraphics

**createShadowGraphics**(**isPrinting**: boolean, **zoom**: number): [StiContext](StiContext.md)

**Parameters**

- **isPrinting** (boolean)  
- **zoom** (number)  

**Returns** [StiContext](StiContext.md)


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

#### measureRotatedString1

**measureRotatedString1**(**text**: string, **font**: StiFontGeom, **rect**: [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md), **sf**: StiStringFormatGeom, **angle**: number): [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md)

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

**measureString**(**text**: string, **font**: StiFontGeom, **width**: number, **sf**: StiStringFormatGeom): [Size](../../../../Stimulsoft_System/Drawing/Size.md)

**Parameters**

- **text** (string)  
- **font** (StiFontGeom)  
- **width** (number)  
- **sf** (StiStringFormatGeom)  

**Returns** [Size](../../../../Stimulsoft_System/Drawing/Size.md)


---

#### render

**render**(**rect**: [Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md), **geoms**: [StiGeom](StiGeom.md)[]): void

**Parameters**

- **rect** ([Rectangle](../../../../Stimulsoft_System/Drawing/Rectangle.md))  
- **geoms** ([StiGeom](StiGeom.md)[])  

