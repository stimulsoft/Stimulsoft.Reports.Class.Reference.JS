---
title: "StiTextDrawing Class"
---

## StiTextDrawing Class

**Namespace:** `Stimulsoft.Base.Drawing`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getAlignment** `static` | [StringAlignment](../Stimulsoft_System_Drawing/StringAlignment.md) |  |
| **getAlignment2** `static` | [StringAlignment](../Stimulsoft_System_Drawing/StringAlignment.md) |  |
| **getStringFormat** `static` | [StringFormat](../Stimulsoft_System_Drawing/StringFormat.md) |  |
| **getStringFormat2** `static` | [StringFormat](../Stimulsoft_System_Drawing/StringFormat.md) |  |
| **splitString** `static` | string[] |  |
| **splitTextWordwrap** `static` | [LineInfo](LineInfo.md)[] |  |
| **splitTextWordwrap2** `static` | [LineInfo](LineInfo.md)[] |  |
| **splitTextWordwrapWidth** `static` | string[] |  |

---

### Method Details

#### getAlignment `static`

**getAlignment**(**alignment**: [StiTextHorAlignment](StiTextHorAlignment.md)): [StringAlignment](../Stimulsoft_System_Drawing/StringAlignment.md)

**Parameters**

- **alignment** ([StiTextHorAlignment](StiTextHorAlignment.md))  

**Returns** [StringAlignment](../Stimulsoft_System_Drawing/StringAlignment.md)


---

#### getAlignment2 `static`

**getAlignment2**(**alignment**: [StiVertAlignment](StiVertAlignment.md)): [StringAlignment](../Stimulsoft_System_Drawing/StringAlignment.md)

**Parameters**

- **alignment** ([StiVertAlignment](StiVertAlignment.md))  

**Returns** [StringAlignment](../Stimulsoft_System_Drawing/StringAlignment.md)


---

#### getStringFormat `static`

**getStringFormat**(**textOptions**: StiTextOptions, **ha**: [StiTextHorAlignment](StiTextHorAlignment.md), **va**: [StiVertAlignment](StiVertAlignment.md), **zoom**: number): [StringFormat](../Stimulsoft_System_Drawing/StringFormat.md)

**Parameters**

- **textOptions** (StiTextOptions)  
- **ha** ([StiTextHorAlignment](StiTextHorAlignment.md))  
- **va** ([StiVertAlignment](StiVertAlignment.md))  
- **zoom** (number)  

**Returns** [StringFormat](../Stimulsoft_System_Drawing/StringFormat.md)


---

#### getStringFormat2 `static`

**getStringFormat2**(**textOptions**: StiTextOptions, **ha**: [StiTextHorAlignment](StiTextHorAlignment.md), **va**: [StiVertAlignment](StiVertAlignment.md), **antialiasing**: boolean, **zoom**: number): [StringFormat](../Stimulsoft_System_Drawing/StringFormat.md)

**Parameters**

- **textOptions** (StiTextOptions)  
- **ha** ([StiTextHorAlignment](StiTextHorAlignment.md))  
- **va** ([StiVertAlignment](StiVertAlignment.md))  
- **antialiasing** (boolean)  
- **zoom** (number)  

**Returns** [StringFormat](../Stimulsoft_System_Drawing/StringFormat.md)


---

#### splitString `static`

**splitString**(**inputString**: string, **removeControl**: boolean): string[]

**Parameters**

- **inputString** (string)  
- **removeControl** (boolean)  

**Returns** string[]


---

#### splitTextWordwrap `static`

**splitTextWordwrap**(**text**: string, **g**: [Graphics](../Stimulsoft_System_Drawing/Graphics.md), **font**: [Font](../Stimulsoft_Base_Dashboard/Font.md), **rect**: [Rectangle](../Stimulsoft_System_Drawing/Rectangle.md), **textOptions**: StiTextOptions, **ha**: [StiTextHorAlignment](StiTextHorAlignment.md), **typographic**: boolean): [LineInfo](LineInfo.md)[]

**Parameters**

- **text** (string)  
- **g** ([Graphics](../Stimulsoft_System_Drawing/Graphics.md))  
- **font** ([Font](../Stimulsoft_Base_Dashboard/Font.md))  
- **rect** ([Rectangle](../Stimulsoft_System_Drawing/Rectangle.md))  
- **textOptions** (StiTextOptions)  
- **ha** ([StiTextHorAlignment](StiTextHorAlignment.md))  
- **typographic** (boolean)  

**Returns** [LineInfo](LineInfo.md)[]


---

#### splitTextWordwrap2 `static`

**splitTextWordwrap2**(**text**: string, **g**: [Graphics](../Stimulsoft_System_Drawing/Graphics.md), **font**: [Font](../Stimulsoft_Base_Dashboard/Font.md), **rect**: [Rectangle](../Stimulsoft_System_Drawing/Rectangle.md), **sf**: [StringFormat](../Stimulsoft_System_Drawing/StringFormat.md), **horAlignWidth**: any): [LineInfo](LineInfo.md)[]

**Parameters**

- **text** (string)  
- **g** ([Graphics](../Stimulsoft_System_Drawing/Graphics.md))  
- **font** ([Font](../Stimulsoft_Base_Dashboard/Font.md))  
- **rect** ([Rectangle](../Stimulsoft_System_Drawing/Rectangle.md))  
- **sf** ([StringFormat](../Stimulsoft_System_Drawing/StringFormat.md))  
- **horAlignWidth** (any)  

**Returns** [LineInfo](LineInfo.md)[]


---

#### splitTextWordwrapWidth `static`

**splitTextWordwrapWidth**(**text**: string, **g**: [Graphics](../Stimulsoft_System_Drawing/Graphics.md), **font**: [Font](../Stimulsoft_Base_Dashboard/Font.md), **rect**: [Rectangle](../Stimulsoft_System_Drawing/Rectangle.md)): string[]

**Parameters**

- **text** (string)  
- **g** ([Graphics](../Stimulsoft_System_Drawing/Graphics.md))  
- **font** ([Font](../Stimulsoft_Base_Dashboard/Font.md))  
- **rect** ([Rectangle](../Stimulsoft_System_Drawing/Rectangle.md))  

**Returns** string[]


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **antialiasing** | boolean, allowHtmlTags |  |
| **defaultLineHeight** | any |  |
| **forceNewLine** | any |  |
| **index** | any |  |
| **index** | any |  |
| **index** | any |  |
| **index** | any |  |
| **lastBreak** | any |  |
| **lastIndex** | any |  |
| **lastIndex** | any |  |
| **lastIndex** | any |  |
| **lastIndex** | any |  |
| **lastLineBegin** | any |  |
| **lastLineBegin** | any |  |
| **needCut** | any |  |
| **output** | any |  |
| **output** | any |  |
| **posX** | any |  |
| **size** | any |  |
| **size** | any |  |
| **skip** | any |  |
| **spaceSize** | any |  |
| **st** | any |  |
| **st1** | any |  |
| **start** | any |  |
| **sumWidth** | any |  |
| **text** | any |  |
| **text** | any |  |
| **wordCount** | any |  |
| **wordCounter** | any |  |
| **wordLength** | any |  |
| **wordLength** | any |  |
| **wordLength** | any |  |
| **wordLength** | any |  |
| **wordLength** | any |  |
