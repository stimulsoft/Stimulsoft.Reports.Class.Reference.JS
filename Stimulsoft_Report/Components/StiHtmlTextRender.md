---
title: "StiHtmlTextRender Class"
---

## StiHtmlTextRender Class

**Namespace:** `Stimulsoft.Report.Components`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **breakText** `static` | string[] |  |
| **drawString** `static` | void |  |
| **drawTextForOutput** `static` | void |  |
| **getOutlineTextMetricsCached** `static` | [StiOutlineTextMetric](StiOutlineTextMetric.md) |  |
| **measureString** `static` | [Size](../../Stimulsoft_System/Drawing/Size.md) |  |

---

### Method Details

#### breakText `static`

**breakText**(**rect**: [Rectangle](../../Stimulsoft_System/Drawing/Rectangle.md), **text**: string, **textBox**: StiText): string[]

**Parameters**

- **rect** ([Rectangle](../../Stimulsoft_System/Drawing/Rectangle.md))  
- **text** (string)  
- **textBox** (StiText)  

**Returns** string[]


---

#### drawString `static`

**drawString**(**g**: [Graphics](../../Stimulsoft_System/Drawing/Graphics.md), **rect**: [Rectangle](../../Stimulsoft_System/Drawing/Rectangle.md), **text**: string, **textBox**: StiText): void

**Parameters**

- **g** ([Graphics](../../Stimulsoft_System/Drawing/Graphics.md))  
- **rect** ([Rectangle](../../Stimulsoft_System/Drawing/Rectangle.md))  
- **text** (string)  
- **textBox** (StiText)  


---

#### drawTextForOutput `static`

**drawTextForOutput**(**textBox**: StiText, **outRunsList**: any, **outFontsList**: any): void

**Parameters**

- **textBox** (StiText)  
- **outRunsList** (any)  
- **outFontsList** (any)  


---

#### getOutlineTextMetricsCached `static`

**getOutlineTextMetricsCached**(**fontName**: string, **fontStyle**: [FontStyle](../../Stimulsoft_System/Drawing/FontStyle.md)): [StiOutlineTextMetric](StiOutlineTextMetric.md)

**Parameters**

- **fontName** (string)  
- **fontStyle** ([FontStyle](../../Stimulsoft_System/Drawing/FontStyle.md))  

**Returns** [StiOutlineTextMetric](StiOutlineTextMetric.md)


---

#### measureString `static`

**measureString**(**textBox**: StiText): [Size](../../Stimulsoft_System/Drawing/Size.md)

**Parameters**

- **textBox** (StiText)  

**Returns** [Size](../../Stimulsoft_System/Drawing/Size.md)

