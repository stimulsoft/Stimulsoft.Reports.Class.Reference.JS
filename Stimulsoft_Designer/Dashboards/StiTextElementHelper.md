---
title: "StiTextElementHelper Class"
---

## StiTextElementHelper Class

**Namespace:** `Stimulsoft.Designer.Dashboards`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(IStiTextElement textElement) |  |

**constructor**(**textElement**: IStiTextElement)

**Parameters**

- **textElement** (IStiTextElement)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **checkFontProperties** `static` | void |  |
| **createTextElementFromDictionary** `static` | void |  |
| **executeJSCommand** | void |  |
| **getFontProperty** `static` | [Font](../../Stimulsoft_Base/Dashboard/Font.md) |  |
| **getForeColorsProperty** `static` | any[] |  |
| **getHorAlignmentProperty** `static` | [StiTextHorAlignment](../../Stimulsoft_Base/Drawing/StiTextHorAlignment.md) |  |
| **getMeasureItems** `static` |  |  |
| **getMeterFunctions** `static` | string[] |  |
| **setFontProperties** `static` | void |  |

---

### Method Details

#### checkFontProperties `static`

**checkFontProperties**(**textElement**: IStiTextElement): void

**Parameters**

- **textElement** (IStiTextElement)  


---

#### createTextElementFromDictionary `static`

**createTextElementFromDictionary**(**report**: [StiReport](../../Stimulsoft_Report/StiReport.md), **param**: any, **callbackResult**: any): void

**Parameters**

- **report** ([StiReport](../../Stimulsoft_Report/StiReport.md))  
- **param** (any)  
- **callbackResult** (any)  


---

#### executeJSCommand

**executeJSCommand**(**parameters**: any, **callbackResult**: any): void

**Parameters**

- **parameters** (any)  
- **callbackResult** (any)  


---

#### getFontProperty `static`

**getFontProperty**(**textElement**: IStiTextElement): [Font](../../Stimulsoft_Base/Dashboard/Font.md)

**Parameters**

- **textElement** (IStiTextElement)  

**Returns** [Font](../../Stimulsoft_Base/Dashboard/Font.md)


---

#### getForeColorsProperty `static`

**getForeColorsProperty**(**textElement**: IStiTextElement): any[]

**Parameters**

- **textElement** (IStiTextElement)  

**Returns** any[]


---

#### getHorAlignmentProperty `static`

**getHorAlignmentProperty**(**textElement**: IStiTextElement): [StiTextHorAlignment](../../Stimulsoft_Base/Drawing/StiTextHorAlignment.md)

**Parameters**

- **textElement** (IStiTextElement)  

**Returns** [StiTextHorAlignment](../../Stimulsoft_Base/Drawing/StiTextHorAlignment.md)


---

#### getMeasureItems `static`

**getMeasureItems**(**textElement**: IStiTextElement): void

**Parameters**

- **textElement** (IStiTextElement)  


---

#### getMeterFunctions `static`

**getMeterFunctions**(**meter**: IStiMeter, **dashboard**: IStiDashboard): string[]

**Parameters**

- **meter** (IStiMeter)  
- **dashboard** (IStiDashboard)  

**Returns** string[]


---

#### setFontProperties `static`

**setFontProperties**(**textElement**: IStiTextElement, **fontAttrs**: any): void

**Parameters**

- **textElement** (IStiTextElement)  
- **fontAttrs** (any)  

