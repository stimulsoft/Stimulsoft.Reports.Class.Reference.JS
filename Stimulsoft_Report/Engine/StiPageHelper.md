---
title: "StiPageHelper Class"
---

## StiPageHelper Class

**Namespace:** `Stimulsoft.Report.Engine`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getPageFromTemplate** `static` | StiPage |  |
| **getPageFromTemplateAsync** `static` | Promise<StiPage> |  |
| **getReportSummaries** `static` | Stimulsoft.Report.Components.StiReportSummaryBand[] |  |
| **getReportTitles** `static` | Stimulsoft.Report.Components.StiReportTitleBand[] |  |
| **prepareBookmark** `static` | void |  |
| **preparePointer** `static` | void |  |
| **renderOverlays** `static` | void |  |
| **renderOverlaysAsync** `static` | void |  |
| **renderPage** `static` | void |  |
| **renderPageAsync** `static` | void |  |
| **renderSimpleComponents** `static` | void |  |
| **renderSimpleComponentsAsync** `static` | void |  |

---

### Method Details

#### getPageFromTemplate `static`

**getPageFromTemplate**(**templatePage**: StiPage): StiPage

**Parameters**

- **templatePage** (StiPage)  

**Returns** StiPage


---

#### getPageFromTemplateAsync `static`

**getPageFromTemplateAsync**(**templatePage**: StiPage): Promise<StiPage>

**Parameters**

- **templatePage** (StiPage)  

**Returns** Promise<StiPage>


---

#### getReportSummaries `static`

**getReportSummaries**(**page**: StiPage): Stimulsoft.Report.Components.StiReportSummaryBand[]

**Parameters**

- **page** (StiPage)  

**Returns** Stimulsoft.Report.Components.StiReportSummaryBand[]


---

#### getReportTitles `static`

**getReportTitles**(**page**: StiPage): Stimulsoft.Report.Components.StiReportTitleBand[]

**Parameters**

- **page** (StiPage)  

**Returns** Stimulsoft.Report.Components.StiReportTitleBand[]


---

#### prepareBookmark `static`

**prepareBookmark**(**page**: StiPage): void

**Parameters**

- **page** (StiPage)  


---

#### preparePointer `static`

**preparePointer**(**page**: StiPage): void

**Parameters**

- **page** (StiPage)  


---

#### renderOverlays `static`

**renderOverlays**(**masterPage**: StiPage, **renderedPage**: StiPage): void

**Parameters**

- **masterPage** (StiPage)  
- **renderedPage** (StiPage)  


---

#### renderOverlaysAsync `static`

**renderOverlaysAsync**(**masterPage**: StiPage, **renderedPage**: StiPage): void

**Parameters**

- **masterPage** (StiPage)  
- **renderedPage** (StiPage)  


---

#### renderPage `static`

**renderPage**(**page**: StiPage): void

**Parameters**

- **page** (StiPage)  


---

#### renderPageAsync `static`

**renderPageAsync**(**page**: StiPage): void

**Parameters**

- **page** (StiPage)  


---

#### renderSimpleComponents `static`

**renderSimpleComponents**(**page**: StiPage, **outContainer**: StiContainer): void

**Parameters**

- **page** (StiPage)  
- **outContainer** (StiContainer)  


---

#### renderSimpleComponentsAsync `static`

**renderSimpleComponentsAsync**(**page**: StiPage, **outContainer**: StiContainer): void

**Parameters**

- **page** (StiPage)  
- **outContainer** (StiContainer)  

