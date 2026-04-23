---
title: "StiCardsElementHelper Class"
---

## StiCardsElementHelper Class

**Namespace:** `Stimulsoft.Designer.Dashboards`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(IStiCardsElement cardsElement) |  |

**constructor**(**cardsElement**: IStiCardsElement)

**Parameters**

- **cardsElement** (IStiCardsElement)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **createCardsElementFromDictionary** `static` | void |  |
| **executeJSCommand** | void |  |
| **getMeterFunctions** `static` | string[] |  |
| **getMeterLabel** `static` | string |  |
| **getMeterType** `static` | string |  |
| **getMeterTypeIcon** `static` | string |  |
| **getStyleSampleImage** `static` | string |  |
| **getStylesContent** `static` | any[] |  |

---

### Method Details

#### createCardsElementFromDictionary `static`

**createCardsElementFromDictionary**(**report**: [StiReport](../../Stimulsoft_Report/StiReport.md), **param**: any, **callbackResult**: any): void

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

#### getMeterFunctions `static`

**getMeterFunctions**(**meter**: IStiMeter, **dashboard**: IStiDashboard): string[]

**Parameters**

- **meter** (IStiMeter)  
- **dashboard** (IStiDashboard)  

**Returns** string[]


---

#### getMeterLabel `static`

**getMeterLabel**(**meter**: IStiMeter): string

**Parameters**

- **meter** (IStiMeter)  

**Returns** string


---

#### getMeterType `static`

**getMeterType**(**meter**: IStiMeter): string

**Parameters**

- **meter** (IStiMeter)  

**Returns** string


---

#### getMeterTypeIcon `static`

**getMeterTypeIcon**(**meter**: IStiMeter): string

**Parameters**

- **meter** (IStiMeter)  

**Returns** string


---

#### getStyleSampleImage `static`

**getStyleSampleImage**(**cardsElement**: IStiCardsElement, **sparkLine**: StiSparkline, **style**: StiBaseStyle, **width**: number, **height**: number): string

**Parameters**

- **cardsElement** (IStiCardsElement)  
- **sparkLine** (StiSparkline)  
- **style** (StiBaseStyle)  
- **width** (number)  
- **height** (number)  

**Returns** string


---

#### getStylesContent `static`

**getStylesContent**(**report**: [StiReport](../../Stimulsoft_Report/StiReport.md), **param**: any, **withReportStyles**: any): any[]

**Parameters**

- **report** ([StiReport](../../Stimulsoft_Report/StiReport.md))  
- **param** (any)  
- **withReportStyles** (any)  

**Returns** any[]

