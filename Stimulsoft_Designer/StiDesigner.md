---
title: "StiDesigner Class"
---

## StiDesigner Class

**Namespace:** `Stimulsoft.Designer`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([StiDesignerOptions](StiDesignerOptions.md) options, string designerId, boolean renderAfterCreate) |  |

**constructor**(**options**: [StiDesignerOptions](StiDesignerOptions.md), **designerId**: string, **renderAfterCreate**: boolean)

**Parameters**

- **options** ([StiDesignerOptions](StiDesignerOptions.md))  
- **designerId** (string)  
- **renderAfterCreate** (boolean)  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **clipboardId** | string |  |
| **componentCloneId** | string |  |
| **defaultUnit** | [StiReportUnitType](../Stimulsoft_Report/StiReportUnitType.md) |  |
| **report** | StiReport | undefined |  |
| **reportCheckers** | [StiCheck](../Stimulsoft_Report_Check/StiCheck.md)[] |  |
| **reportGuid** | string |  |
| **undoArray** | any[] |  |
| **undoArrayId** | string |  |
| **visible** | boolean |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **callback** *(+5 overloads)* | void |  |
| **clearTimeout** *(+1 overloads)* | void |  |
| **dispatch** | void |  |
| **dispose** | void |  |
| **getNewReport** `static` | [StiReport](../Stimulsoft_Report/StiReport.md) |  |
| **onResult** | void |  |
| **remove** *(+1 overloads)* | void |  |
| **renderHtml** | void |  |
| **setTheme** | void |  |

---

### Method Details

#### callback

**callback**(): void

---

**callback**(**null**: any): void

**Parameters**

- **null** (any)  

---

**callback**(): void

---

**callback**(): void

---

**callback**(**args**: any): void

**Parameters**

- **args** (any)  

---

**callback**(): void


---

#### clearTimeout

**clearTimeout**(): void

---

**clearTimeout**(): void


---

#### dispatch

**dispatch**(): void


---

#### dispose

**dispose**(): void


---

#### getNewReport `static`

**getNewReport**(**designer**: [StiDesigner](StiDesigner.md)): [StiReport](../Stimulsoft_Report/StiReport.md)

**Parameters**

- **designer** ([StiDesigner](StiDesigner.md))  

**Returns** [StiReport](../Stimulsoft_Report/StiReport.md)


---

#### onResult

**onResult**(): void


---

#### remove

**remove**(): void

---

**remove**(): void


---

#### renderHtml

**renderHtml**(**element**: string \| HTMLElement): void

**Parameters**

- **element** (string \| HTMLElement)  


---

#### setTheme

**setTheme**(**theme**: [StiDesignerTheme](StiDesignerTheme.md)): void

**Parameters**

- **theme** ([StiDesignerTheme](StiDesignerTheme.md))  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **callback** | () |  |
| **callback** | () |  |
| **callback** | () |  |
| **callback** | () |  |
| **callback** | () |  |
| **callback** | () |  |
| **callback** | () |  |
| **clipboard** | string |  |
| **componentClone** | any |  |
| **crossTabHelper** | any |  |
| **currentReport** | any |  |
| **currentReport** | any |  |
| **currentReport** | any |  |
| **currentReport** | any |  |
| **currentReport** | any |  |
| **currentReport** | any |  |
| **currentReport** | any |  |
| **data** | any |  |
| **data** | any |  |
| **designerId** | string |  |
| **designerId** | any |  |
| **fileName** | any |  |
| **filePath** | any |  |
| **jsObject** | StiJsDesigner |  |
| **jsonObject** | any |  |
| **jsonObject** | any |  |
| **jsonObject** | any |  |
| **newReport** | any |  |
| **options** | [StiDesignerOptions](StiDesignerOptions.md) |  |
| **processImage** | any |  |
| **renderedReport** | [StiReport](../Stimulsoft_Report/StiReport.md) |  |
| **reportFile** | any |  |
| **reportFile** | any |  |
| **stylesClipboard** | any |  |
| **tableHelper** | any |  |
| **theme** | any |  |
| **theme** | any |  |
| **undoLevel** | any |  |
| **viewer** | [StiViewer](../Stimulsoft_Viewer/StiViewer.md) |  |
