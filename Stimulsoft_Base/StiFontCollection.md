---
title: "StiFontCollection Class"
---

## StiFontCollection Class

**Namespace:** `Stimulsoft.Base`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **addFont** `static` | void |  |
| **addFontBytes** `static` | string |  |
| **addFontFile** `static` | void |  |
| **addFontFileAsync** `static` | void |  |
| **addOpentypeFont** `static` | void |  |
| **addOpentypeFontFile** `static` | void |  |
| **addOpentypeFontFileAsync** `static` | void |  |
| **callback** | void |  |
| **getBinFont** `static` | void |  |
| **getBinFonts** `static` | string[] |  |
| **getFontFamilies** `static` | [FontFamily](../Stimulsoft_System/Drawing/FontFamily.md)[] |  |
| **isCustomFont** `static` | boolean |  |
| **registerFontConfig** `static` | void |  |
| **registerFontConfigAsync** `static` | void |  |
| **registerFontConfigFile** `static` | void |  |
| **registerFontConfigFileAsync** `static` | void |  |
| **setFontsFolder** `static` | void |  |
| **setOpentypeFontsFolder** `static` | void |  |

---

### Method Details

#### addFont `static`

**addFont**(**font**: any, **fontName**: string, **binFont**: any, **filePath**: string, **fontStyle**: [FontStyle](../Stimulsoft_System/Drawing/FontStyle.md), **store**: any): void

**Parameters**

- **font** (any)  
- **fontName** (string)  
- **binFont** (any)  
- **filePath** (string)  
- **fontStyle** ([FontStyle](../Stimulsoft_System/Drawing/FontStyle.md))  
- **store** (any)  


---

#### addFontBytes `static`

**addFontBytes**(**data**: any, **fontName**: string, **fontStyle**: [FontStyle](../Stimulsoft_System/Drawing/FontStyle.md), **store**: any): string

**Parameters**

- **data** (any)  
- **fontName** (string)  
- **fontStyle** ([FontStyle](../Stimulsoft_System/Drawing/FontStyle.md))  
- **store** (any)  

**Returns** string


---

#### addFontFile `static`

**addFontFile**(**filePath**: string, **fontName**: string, **fontStyle**: [FontStyle](../Stimulsoft_System/Drawing/FontStyle.md), **store**: any): void

**Parameters**

- **filePath** (string)  
- **fontName** (string)  
- **fontStyle** ([FontStyle](../Stimulsoft_System/Drawing/FontStyle.md))  
- **store** (any)  


---

#### addFontFileAsync `static`

**addFontFileAsync**(**callback**: ()): void

**Parameters**

- **callback** (())  


---

#### addOpentypeFont `static`

**addOpentypeFont**(**font**: any, **fontName**: string, **binFont**: any, **filePath**: string, **fontStyle**: [FontStyle](../Stimulsoft_System/Drawing/FontStyle.md), **store**: any): void

**Parameters**

- **font** (any)  
- **fontName** (string)  
- **binFont** (any)  
- **filePath** (string)  
- **fontStyle** ([FontStyle](../Stimulsoft_System/Drawing/FontStyle.md))  
- **store** (any)  


---

#### addOpentypeFontFile `static`

**addOpentypeFontFile**(**filePath**: string, **fontName**: string, **fontStyle**: [FontStyle](../Stimulsoft_System/Drawing/FontStyle.md), **store**: any): void

**Parameters**

- **filePath** (string)  
- **fontName** (string)  
- **fontStyle** ([FontStyle](../Stimulsoft_System/Drawing/FontStyle.md))  
- **store** (any)  


---

#### addOpentypeFontFileAsync `static`

**addOpentypeFontFileAsync**(**callback**: ()): void

**Parameters**

- **callback** (())  


---

#### callback

**callback**(): void


---

#### getBinFont `static`

**getBinFont**(**fontName**: string, **fontStyle**: [FontStyle](../Stimulsoft_System/Drawing/FontStyle.md)): void

**Parameters**

- **fontName** (string)  
- **fontStyle** ([FontStyle](../Stimulsoft_System/Drawing/FontStyle.md))  


---

#### getBinFonts `static`

**getBinFonts**(): string[]

**Returns** string[]


---

#### getFontFamilies `static`

**getFontFamilies**(): [FontFamily](../Stimulsoft_System/Drawing/FontFamily.md)[]

**Returns** [FontFamily](../Stimulsoft_System/Drawing/FontFamily.md)[]


---

#### isCustomFont `static`

**isCustomFont**(**fontName**: string): boolean

**Parameters**

- **fontName** (string)  

**Returns** boolean


---

#### registerFontConfig `static`

**registerFontConfig**(**fontsConfig**: FontConfigType[]): void

**Parameters**

- **fontsConfig** (FontConfigType[])  


---

#### registerFontConfigAsync `static`

**registerFontConfigAsync**(**callback**: ()): void

**Parameters**

- **callback** (())  


---

#### registerFontConfigFile `static`

**registerFontConfigFile**(**filePath**: string): void

**Parameters**

- **filePath** (string)  


---

#### registerFontConfigFileAsync `static`

**registerFontConfigFileAsync**(**callback**: ()): void

**Parameters**

- **callback** (())  


---

#### setFontsFolder `static`

**setFontsFolder**(**folderPatch**: string): void

**Parameters**

- **folderPatch** (string)  


---

#### setOpentypeFontsFolder `static`

**setOpentypeFontsFolder**(**folderPatch**: string): void

**Parameters**

- **folderPatch** (string)  

