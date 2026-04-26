---
title: "StiFunctionsDrawing Class"
---

## StiFunctionsDrawing Class

**Namespace:** `Stimulsoft.Report.Dictionary`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **aRGB** `static` | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **colorFade** `static` | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **colorValue** `static` | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **create** `static` | void |  |
| **fontValue** `static` | [Font](../Stimulsoft_Base_Dashboard/Font.md) | Makes a new font using a specified name and size. For example: FontValue("Arial", 8). |
| **glareBrushValue** `static` | StiGlareBrush |  |
| **glassBrushValue** `static` | StiGlassBrush |  |
| **gradientBrushValue** `static` | StiGradientBrush |  |
| **hatchBrushValue** `static` | StiHatchBrush |  |
| **rGB** `static` | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **solidBrushValue** `static` | StiSolidBrush |  |

---

### Method Details

#### aRGB `static`

**aRGB**(**alpha**: number, **red**: number, **green**: number, **blue**: number): [Color](../Stimulsoft_System_Drawing/Color.md)

**Parameters**

- **alpha** (number)  
- **red** (number)  
- **green** (number)  
- **blue** (number)  

**Returns** [Color](../Stimulsoft_System_Drawing/Color.md)


---

#### colorFade `static`

**colorFade**(**color**: any, **fadeAmount**: number): [Color](../Stimulsoft_System_Drawing/Color.md)

**Parameters**

- **color** (any)  
- **fadeAmount** (number)  

**Returns** [Color](../Stimulsoft_System_Drawing/Color.md)


---

#### colorValue `static`

**colorValue**(**value**: string): [Color](../Stimulsoft_System_Drawing/Color.md)

**Parameters**

- **value** (string)  

**Returns** [Color](../Stimulsoft_System_Drawing/Color.md)


---

#### create `static`

**create**(): void


---

#### fontValue `static`

**fontValue**(**name**: string, **size**: number, **style**: [FontStyle](../Stimulsoft_System_Drawing/FontStyle.md)): [Font](../Stimulsoft_Base_Dashboard/Font.md)

Makes a new font using a specified name and size. For example: FontValue("Arial", 8).

**Parameters**

- **name** (string) — A font name.  
- **size** (number) — A font size.  
- **style** ([FontStyle](../Stimulsoft_System_Drawing/FontStyle.md)) — A font style  

**Returns** [Font](../Stimulsoft_Base_Dashboard/Font.md) — A created font.


---

#### glareBrushValue `static`

**glareBrushValue**(**startColor**: any, **endColor**: any, **angle**: number, **focus**: number, **scale**: number): StiGlareBrush

**Parameters**

- **startColor** (any)  
- **endColor** (any)  
- **angle** (number)  
- **focus** (number)  
- **scale** (number)  

**Returns** StiGlareBrush


---

#### glassBrushValue `static`

**glassBrushValue**(**color**: any, **drawHatch**: boolean, **blendFactor**: number): StiGlassBrush

**Parameters**

- **color** (any)  
- **drawHatch** (boolean)  
- **blendFactor** (number)  

**Returns** StiGlassBrush


---

#### gradientBrushValue `static`

**gradientBrushValue**(**startColor**: any, **endColor**: any, **angle**: number): StiGradientBrush

**Parameters**

- **startColor** (any)  
- **endColor** (any)  
- **angle** (number)  

**Returns** StiGradientBrush


---

#### hatchBrushValue `static`

**hatchBrushValue**(**style**: [HatchStyle](../Stimulsoft_System_Drawing_Drawing2D/HatchStyle.md), **foreColor**: any, **backColor**: any): StiHatchBrush

**Parameters**

- **style** ([HatchStyle](../Stimulsoft_System_Drawing_Drawing2D/HatchStyle.md))  
- **foreColor** (any)  
- **backColor** (any)  

**Returns** StiHatchBrush


---

#### rGB `static`

**rGB**(**red**: number, **green**: number, **blue**: number): [Color](../Stimulsoft_System_Drawing/Color.md)

**Parameters**

- **red** (number)  
- **green** (number)  
- **blue** (number)  

**Returns** [Color](../Stimulsoft_System_Drawing/Color.md)


---

#### solidBrushValue `static`

**solidBrushValue**(**color**: any): StiSolidBrush

**Parameters**

- **color** (any)  

**Returns** StiSolidBrush

