---
title: "StiHtmlTextHelper Class"
---

## StiHtmlTextHelper Class

**Namespace:** `Stimulsoft.Dashboard.Design.Helpers`

### Inheritance

Implements: [IStiHtmlTextHelper](../../../Stimulsoft_Report/Dashboard/IStiHtmlTextHelper.md)  

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getColor** | [Color](../../../Stimulsoft_System/Drawing/Color.md) |  |
| **getFont** | [Font](../../../Stimulsoft_Base/Dashboard/Font.md) |  |
| **getHorAlign** | [StiTextHorAlignment](../../../Stimulsoft_Base/Drawing/StiTextHorAlignment.md) |  |
| **getHtmlText** | string |  |
| **getSimpleText** | string |  |
| **growFontSize** | string |  |
| **setColor** | string |  |
| **setFontBoldStyle** | string |  |
| **setFontItalicStyle** | string |  |
| **setFontName** | string |  |
| **setFontSize** | string |  |
| **setFontUnderlineStyle** | string |  |
| **setHorAlignment** | string |  |
| **setHtmlText** | void |  |
| **shrinkFontSize** | string |  |

---

### Method Details

#### getColor

**getColor**(**textObj**: any, **text**: string, **defaultColor**: [Color](../../../Stimulsoft_System/Drawing/Color.md)): [Color](../../../Stimulsoft_System/Drawing/Color.md)

**Parameters**

- **textObj** (any)  
- **text** (string)  
- **defaultColor** ([Color](../../../Stimulsoft_System/Drawing/Color.md))  

**Returns** [Color](../../../Stimulsoft_System/Drawing/Color.md)


---

#### getFont

**getFont**(**textObj**: any, **text**: string, **defaultColor**: [Color](../../../Stimulsoft_System/Drawing/Color.md)): [Font](../../../Stimulsoft_Base/Dashboard/Font.md)

**Parameters**

- **textObj** (any)  
- **text** (string)  
- **defaultColor** ([Color](../../../Stimulsoft_System/Drawing/Color.md))  

**Returns** [Font](../../../Stimulsoft_Base/Dashboard/Font.md)


---

#### getHorAlign

**getHorAlign**(**textObj**: any, **text**: string, **defaultColor**: [Color](../../../Stimulsoft_System/Drawing/Color.md)): [StiTextHorAlignment](../../../Stimulsoft_Base/Drawing/StiTextHorAlignment.md)

**Parameters**

- **textObj** (any)  
- **text** (string)  
- **defaultColor** ([Color](../../../Stimulsoft_System/Drawing/Color.md))  

**Returns** [StiTextHorAlignment](../../../Stimulsoft_Base/Drawing/StiTextHorAlignment.md)


---

#### getHtmlText

**getHtmlText**(**richTextBox**: [StiRichBoxControl](StiRichBoxControl.md), **defaultColor**: [Color](../../../Stimulsoft_System/Drawing/Color.md)): string

**Parameters**

- **richTextBox** ([StiRichBoxControl](StiRichBoxControl.md))  
- **defaultColor** ([Color](../../../Stimulsoft_System/Drawing/Color.md))  

**Returns** string


---

#### getSimpleText

**getSimpleText**(**htmlText**: string, **defaultColor**: [Color](../../../Stimulsoft_System/Drawing/Color.md)): string

**Parameters**

- **htmlText** (string)  
- **defaultColor** ([Color](../../../Stimulsoft_System/Drawing/Color.md))  

**Returns** string


---

#### growFontSize

**growFontSize**(**textObj**: any, **text**: string, **defaultColor**: [Color](../../../Stimulsoft_System/Drawing/Color.md)): string

**Parameters**

- **textObj** (any)  
- **text** (string)  
- **defaultColor** ([Color](../../../Stimulsoft_System/Drawing/Color.md))  

**Returns** string


---

#### setColor

**setColor**(**textObj**: any, **text**: string, **color**: [Color](../../../Stimulsoft_System/Drawing/Color.md), **defaultColor**: [Color](../../../Stimulsoft_System/Drawing/Color.md)): string

**Parameters**

- **textObj** (any)  
- **text** (string)  
- **color** ([Color](../../../Stimulsoft_System/Drawing/Color.md))  
- **defaultColor** ([Color](../../../Stimulsoft_System/Drawing/Color.md))  

**Returns** string


---

#### setFontBoldStyle

**setFontBoldStyle**(**textObj**: any, **text**: string, **isBold**: boolean, **defaultColor**: [Color](../../../Stimulsoft_System/Drawing/Color.md)): string

**Parameters**

- **textObj** (any)  
- **text** (string)  
- **isBold** (boolean)  
- **defaultColor** ([Color](../../../Stimulsoft_System/Drawing/Color.md))  

**Returns** string


---

#### setFontItalicStyle

**setFontItalicStyle**(**textObj**: any, **text**: string, **isItalic**: boolean, **defaultColor**: [Color](../../../Stimulsoft_System/Drawing/Color.md)): string

**Parameters**

- **textObj** (any)  
- **text** (string)  
- **isItalic** (boolean)  
- **defaultColor** ([Color](../../../Stimulsoft_System/Drawing/Color.md))  

**Returns** string


---

#### setFontName

**setFontName**(**textObj**: any, **text**: string, **fontName**: string, **defaultColor**: [Color](../../../Stimulsoft_System/Drawing/Color.md)): string

**Parameters**

- **textObj** (any)  
- **text** (string)  
- **fontName** (string)  
- **defaultColor** ([Color](../../../Stimulsoft_System/Drawing/Color.md))  

**Returns** string


---

#### setFontSize

**setFontSize**(**textObj**: any, **text**: string, **fontSize**: number, **defaultColor**: [Color](../../../Stimulsoft_System/Drawing/Color.md)): string

**Parameters**

- **textObj** (any)  
- **text** (string)  
- **fontSize** (number)  
- **defaultColor** ([Color](../../../Stimulsoft_System/Drawing/Color.md))  

**Returns** string


---

#### setFontUnderlineStyle

**setFontUnderlineStyle**(**textObj**: any, **text**: string, **isUnderline**: boolean, **defaultColor**: [Color](../../../Stimulsoft_System/Drawing/Color.md)): string

**Parameters**

- **textObj** (any)  
- **text** (string)  
- **isUnderline** (boolean)  
- **defaultColor** ([Color](../../../Stimulsoft_System/Drawing/Color.md))  

**Returns** string


---

#### setHorAlignment

**setHorAlignment**(**textObj**: any, **text**: string, **alignment**: [StiTextHorAlignment](../../../Stimulsoft_Base/Drawing/StiTextHorAlignment.md), **defaultColor**: [Color](../../../Stimulsoft_System/Drawing/Color.md)): string

**Parameters**

- **textObj** (any)  
- **text** (string)  
- **alignment** ([StiTextHorAlignment](../../../Stimulsoft_Base/Drawing/StiTextHorAlignment.md))  
- **defaultColor** ([Color](../../../Stimulsoft_System/Drawing/Color.md))  

**Returns** string


---

#### setHtmlText

**setHtmlText**(**htmlText**: string, **textObj**: any, **richTextBox**: [StiRichBoxControl](StiRichBoxControl.md), **defaultColor**: [Color](../../../Stimulsoft_System/Drawing/Color.md)): void

**Parameters**

- **htmlText** (string)  
- **textObj** (any)  
- **richTextBox** ([StiRichBoxControl](StiRichBoxControl.md))  
- **defaultColor** ([Color](../../../Stimulsoft_System/Drawing/Color.md))  


---

#### shrinkFontSize

**shrinkFontSize**(**textObj**: any, **text**: string, **defaultColor**: [Color](../../../Stimulsoft_System/Drawing/Color.md)): string

**Parameters**

- **textObj** (any)  
- **text** (string)  
- **defaultColor** ([Color](../../../Stimulsoft_System/Drawing/Color.md))  

**Returns** string

