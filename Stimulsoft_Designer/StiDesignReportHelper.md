---
title: "StiDesignReportHelper Class"
---

## StiDesignReportHelper Class

**Namespace:** `Stimulsoft.Designer`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([StiReport](../Stimulsoft_Report/StiReport.md) report) |  |

**constructor**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md))

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **applyParamsToReport** `static` | void |  |
| **callback** *(+4 overloads)* | void |  |
| **checkAndCorrectDuplicatePageNames** `static` | void |  |
| **checkScriptEvalAccess** `static` | void |  |
| **getPage** | any |  |
| **getPages** | any[] |  |
| **getReportJsObject** | any |  |

---

### Method Details

#### applyParamsToReport `static`

**applyParamsToReport**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **designer**: [StiDesigner](StiDesigner.md)): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **designer** ([StiDesigner](StiDesigner.md))  


---

#### callback

**callback**(**true**: any): void

**Parameters**

- **true** (any)  

---

**callback**(**true**: any): void

**Parameters**

- **true** (any)  

---

**callback**(**false**: any): void

**Parameters**

- **false** (any)  

---

**callback**(**true**: any): void

**Parameters**

- **true** (any)  

---

**callback**(**true**: any): void

**Parameters**

- **true** (any)  


---

#### checkAndCorrectDuplicatePageNames `static`

**checkAndCorrectDuplicatePageNames**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md)): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  


---

#### checkScriptEvalAccess `static`

**checkScriptEvalAccess**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **designer**: [StiDesigner](StiDesigner.md), **callback**: (result: boolean)): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **designer** ([StiDesigner](StiDesigner.md))  
- **callback** ((result: boolean))  


---

#### getPage

**getPage**(**page**: StiPage): any

**Parameters**

- **page** (StiPage)  

**Returns** any


---

#### getPages

**getPages**(): any[]

**Returns** any[]


---

#### getReportJsObject

**getReportJsObject**(): any

**Returns** any

