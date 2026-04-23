---
title: "Graphics Class"
---

## Graphics Class

**Namespace:** `Stimulsoft.System.Drawing`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(CanvasRenderingContext2D context) |  |

**constructor**(**context**: CanvasRenderingContext2D)

**Parameters**

- **context** (CanvasRenderingContext2D)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **addCustomFont** `static` | void |  |
| **addCustomFontBytes** `static` | string |  |
| **addCustomFontFile** `static` | void |  |
| **addCustomFontFileAsync** `static` | void |  |
| **allowStyle** `static` | boolean |  |
| **callback** | void |  |
| **clearAutoLoadFonts** `static` | void |  |
| **clearCache** `static` | void |  |
| **drawImage** | void |  |
| **drawLine** | void |  |
| **drawRectangle** | void |  |
| **drawString** | void |  |
| **fillRectangle** | void |  |
| **getCustomFont** `static` | any |  |
| **getCustomFontName** `static` | string |  |
| **getCustomFontsCss** `static` | string |  |
| **getFontMimeType** `static` | string |  |
| **getLineHeightFactor** `static` | number |  |
| **measureChars** `static` | [Size](Size.md) |  |
| **measureString** `static` | [Size](Size.md) |  |
| **translateTransform** | void |  |

---

### Method Details

#### addCustomFont `static`

**addCustomFont**(**font**: FontKitType, **fontName**: string, **binFont**: any, **filePath**: string, **fontStyle**: [FontStyle](FontStyle.md), **store**: any): void

**Parameters**

- **font** (FontKitType)  
- **fontName** (string)  
- **binFont** (any)  
- **filePath** (string)  
- **fontStyle** ([FontStyle](FontStyle.md))  
- **store** (any)  


---

#### addCustomFontBytes `static`

**addCustomFontBytes**(**data**: ArrayBuffer | Uint8Array, **fontName**: string, **fontStyle**: [FontStyle](FontStyle.md), **store**: any): string

**Parameters**

- **data** (ArrayBuffer | Uint8Array)  
- **fontName** (string)  
- **fontStyle** ([FontStyle](FontStyle.md))  
- **store** (any)  

**Returns** string


---

#### addCustomFontFile `static`

**addCustomFontFile**(**filePath**: string, **fontName**: string, **fontStyle**: [FontStyle](FontStyle.md), **store**: any): void

**Parameters**

- **filePath** (string)  
- **fontName** (string)  
- **fontStyle** ([FontStyle](FontStyle.md))  
- **store** (any)  


---

#### addCustomFontFileAsync `static`

**addCustomFontFileAsync**(**callback**: ()): void

**Parameters**

- **callback** (())  


---

#### allowStyle `static`

**allowStyle**(**fontName**: string, **fontStyle**: [FontStyle](FontStyle.md)): boolean

**Parameters**

- **fontName** (string)  
- **fontStyle** ([FontStyle](FontStyle.md))  

**Returns** boolean


---

#### callback

**callback**(): void


---

#### clearAutoLoadFonts `static`

**clearAutoLoadFonts**(): void


---

#### clearCache `static`

**clearCache**(): void


---

#### drawImage

**drawImage**(**image**: [Image](Image.md), **point**: [Point](Point.md)): void

**Parameters**

- **image** ([Image](Image.md))  
- **point** ([Point](Point.md))  


---

#### drawLine

**drawLine**(**pen**: [Pen](Pen.md), **x1**: number, **y1**: number, **x2**: number, **y2**: number): void

**Parameters**

- **pen** ([Pen](Pen.md))  
- **x1** (number)  
- **y1** (number)  
- **x2** (number)  
- **y2** (number)  


---

#### drawRectangle

**drawRectangle**(**pen**: [Pen](Pen.md), **rect**: [Rectangle](Rectangle.md)): void

**Parameters**

- **pen** ([Pen](Pen.md))  
- **rect** ([Rectangle](Rectangle.md))  


---

#### drawString

**drawString**(**text**: string, **font**: [Font](../../Stimulsoft_Base/Dashboard/Font.md), **brush**: [Brush](Brush.md), **x**: number, **y**: number): void

**Parameters**

- **text** (string)  
- **font** ([Font](../../Stimulsoft_Base/Dashboard/Font.md))  
- **brush** ([Brush](Brush.md))  
- **x** (number)  
- **y** (number)  


---

#### fillRectangle

**fillRectangle**(**brush**: [Brush](Brush.md), **x**: number, **y**: number, **width**: number, **height**: number): void

**Parameters**

- **brush** ([Brush](Brush.md))  
- **x** (number)  
- **y** (number)  
- **width** (number)  
- **height** (number)  


---

#### getCustomFont `static`

**getCustomFont**(**fontName**: string, **fontStyle**: [FontStyle](FontStyle.md)): any

**Parameters**

- **fontName** (string)  
- **fontStyle** ([FontStyle](FontStyle.md))  

**Returns** any


---

#### getCustomFontName `static`

**getCustomFontName**(**fontName**: string, **fontStyle**: [FontStyle](FontStyle.md)): string

**Parameters**

- **fontName** (string)  
- **fontStyle** ([FontStyle](FontStyle.md))  

**Returns** string


---

#### getCustomFontsCss `static`

**getCustomFontsCss**(**embeddedData**: any): string

**Parameters**

- **embeddedData** (any)  

**Returns** string


---

#### getFontMimeType `static`

**getFontMimeType**(**data**: any): string

**Parameters**

- **data** (any)  

**Returns** string


---

#### getLineHeightFactor `static`

**getLineHeightFactor**(**font**: string | Font): number

**Parameters**

- **font** (string | Font)  

**Returns** number


---

#### measureChars `static`

**measureChars**(**chars**: number[], **count**: number, **font**: [Font](../../Stimulsoft_Base/Dashboard/Font.md)): [Size](Size.md)

**Parameters**

- **chars** (number[])  
- **count** (number)  
- **font** ([Font](../../Stimulsoft_Base/Dashboard/Font.md))  

**Returns** [Size](Size.md)


---

#### measureString `static`

**measureString**(**text**: string, **font**: [Font](../../Stimulsoft_Base/Dashboard/Font.md), **width**: number, **useCache**: any, **multiple**: any, **angle**: any, **replaceTags**: any): [Size](Size.md)

**Parameters**

- **text** (string)  
- **font** ([Font](../../Stimulsoft_Base/Dashboard/Font.md))  
- **width** (number)  
- **useCache** (any)  
- **multiple** (any)  
- **angle** (any)  
- **replaceTags** (any)  

**Returns** [Size](Size.md)


---

#### translateTransform

**translateTransform**(**dx**: number, **dy**: number): void

**Parameters**

- **dx** (number)  
- **dy** (number)  

