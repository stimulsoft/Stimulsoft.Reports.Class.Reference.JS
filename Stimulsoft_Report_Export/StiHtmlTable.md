---
title: "StiHtmlTable Class"
---

## StiHtmlTable Class

**Namespace:** `Stimulsoft.Report.Export`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**() |  |

**constructor**()


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **dpi96** | any |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **renderControl** | void |  |
| **stringToTitle** `static` | string |  |
| **stringToUrl** `static` | string |  |

---

### Method Details

#### renderControl

**renderControl**(**writer**: [StiHtmlTextWriter](StiHtmlTextWriter.md), **addPageBreaks**: boolean, **page**: StiPage): void

**Parameters**

- **writer** ([StiHtmlTextWriter](StiHtmlTextWriter.md))  
- **addPageBreaks** (boolean)  
- **page** (StiPage)  


---

#### stringToTitle `static`

**stringToTitle**(**input**: string): string

**Parameters**

- **input** (string)  

**Returns** string


---

#### stringToUrl `static`

**stringToUrl**(**input**: string): string

**Parameters**

- **input** (string)  

**Returns** string


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **align** | [StiHorAlignment](../Stimulsoft_Base_Drawing/StiHorAlignment.md) |  |
| **backImageUrl** | string |  |
| **backgroundPosition** | string |  |
| **backgroundRepeat** | string |  |
| **border** | [StiBorder](../Stimulsoft_Base_Drawing/StiBorder.md) |  |
| **borderWidth** | number |  |
| **cellHorAlign** | any |  |
| **cellPadding** | number |  |
| **cellSpacing** | number |  |
| **cellVertAlign** | any |  |
| **cellWordwrap** | any |  |
| **htmlExport** | StiHtmlExportService |  |
| **htmlExportSettings** | StiHtmlExportSettings |  |
| **hyperLink** | any |  |
| **image** | any |  |
| **imageRotation** | any |  |
| **imgX** | any |  |
| **imgX** | any |  |
| **imgY** | any |  |
| **imgY** | any |  |
| **marginsText** | any |  |
| **matrix** | [StiMatrix](StiMatrix.md) |  |
| **maxWidth** | [StiHtmlUnit](StiHtmlUnit.md) |  |
| **position** | string |  |
| **rows** | [StiHtmlTableRow](StiHtmlTableRow.md)[] |  |
| **svg** | any |  |
| **width** | [StiHtmlUnit](StiHtmlUnit.md) |  |
