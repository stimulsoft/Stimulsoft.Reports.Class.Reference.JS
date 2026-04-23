---
title: "StiTableElementHelper Class"
---

## StiTableElementHelper Class

**Namespace:** `Stimulsoft.Designer.Dashboards`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(IStiTableElement tableElement) |  |

**constructor**(**tableElement**: IStiTableElement)

**Parameters**

- **tableElement** (IStiTableElement)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **createTableElementFromDictionary** `static` | void |  |
| **executeJSCommand** | void |  |
| **getMeterFunctions** `static` | string[] |  |
| **getMeterLabel** `static` | string |  |
| **getMeterType** `static` | string |  |
| **getMeterTypeIcon** `static` | string |  |

---

### Method Details

#### createTableElementFromDictionary `static`

**createTableElementFromDictionary**(**report**: [StiReport](../../Stimulsoft_Report/StiReport.md), **param**: any, **callbackResult**: any): void

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

