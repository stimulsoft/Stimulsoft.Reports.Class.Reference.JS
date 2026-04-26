---
title: "StiReportHelper Class"
---

## StiReportHelper Class

**Namespace:** `Stimulsoft.Viewer`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **applyCollapsing** `static` | void |  |
| **applyDashboardDrillDown** `static` | Promise<[StiReport](../Stimulsoft_Report/StiReport.md)> |  |
| **applyDrillDown** `static` | Promise<[StiReport](../Stimulsoft_Report/StiReport.md)> |  |
| **applySorting** `static` | void |  |
| **brushToStr** `static` | string |  |
| **calculatePositionForEachBand** `static` | void |  |
| **callback** *(+3 overloads)* | void |  |
| **checkScriptEvalAccess** `static` | void |  |
| **getBookmarksContent** `static` | string |  |
| **getDashboardPageAsync** `static` | [StiPromise](../Stimulsoft_System/StiPromise.md)<KeyObjectType> |  |
| **getDashboards** `static` | KeyObjectType[] |  |
| **getElementAttributesAsync** `static` | Promise<KeyObjectType> |  |
| **getHtmlColor** `static` | string | Get the color in HEX format. |
| **getNestedPages** `static` | StiPage[] |  |
| **getPagesCount** `static` | number |  |
| **getReportCultureParams** `static` | any |  |
| **getReportDisplayModeFromReport** `static` | [StiHtmlExportMode](../Stimulsoft_Report_Export/StiHtmlExportMode.md) |  |
| **getReportPreviewSettings** `static` | KeyObjectType |  |
| **getSingleElementContent** `static` | Promise<KeyObjectType> |  |
| **getTableOfContentsPointers** `static` | any[] |  |
| **imageToBase64** `static` | string |  |
| **isMixedReport** `static` | boolean |  |
| **resolve** | void |  |

---

### Method Details

#### applyCollapsing `static`

**applyCollapsing**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **parameters**: any): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **parameters** (any)  


---

#### applyDashboardDrillDown `static`

**applyDashboardDrillDown**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **drillDownParameters**: any, **appliedValues**: any, **action**: string): Promise<[StiReport](../Stimulsoft_Report/StiReport.md)>

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **drillDownParameters** (any)  
- **appliedValues** (any)  
- **action** (string)  

**Returns** Promise<[StiReport](../Stimulsoft_Report/StiReport.md)>


---

#### applyDrillDown `static`

**applyDrillDown**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **renderedReport**: [StiReport](../Stimulsoft_Report/StiReport.md), **parameters**: any, **appliedValues**: any, **params**: any, **viewer**: [StiViewer](StiViewer.md)): Promise<[StiReport](../Stimulsoft_Report/StiReport.md)>

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **renderedReport** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **parameters** (any)  
- **appliedValues** (any)  
- **params** (any)  
- **viewer** ([StiViewer](StiViewer.md))  

**Returns** Promise<[StiReport](../Stimulsoft_Report/StiReport.md)>


---

#### applySorting `static`

**applySorting**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **parameters**: any): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **parameters** (any)  


---

#### brushToStr `static`

**brushToStr**(**brush**: [StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md)): string

**Parameters**

- **brush** ([StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md))  

**Returns** string


---

#### calculatePositionForEachBand `static`

**calculatePositionForEachBand**(**requestParams**: any, **elements**: IStiElement[], **page**: StiPage, **bands**: { ref: StiRangeBand[] }, **totalFixedHeight**: { ref: number }, **component**: StiComponent): void

**Parameters**

- **requestParams** (any)  
- **elements** (IStiElement[])  
- **page** (StiPage)  
- **bands** ({ ref: StiRangeBand[] })  
- **totalFixedHeight** ({ ref: number })  
- **component** (StiComponent)  


---

#### callback

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

#### checkScriptEvalAccess `static`

**checkScriptEvalAccess**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **viewer**: [StiViewer](StiViewer.md), **callback**: (result: boolean)): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **viewer** ([StiViewer](StiViewer.md))  
- **callback** ((result: boolean))  


---

#### getBookmarksContent `static`

**getBookmarksContent**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **viewerId**: string, **pageNumber**: number): string

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **viewerId** (string)  
- **pageNumber** (number)  

**Returns** string


---

#### getDashboardPageAsync `static`

**getDashboardPageAsync**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **pageIndex**: number, **requestParams**: any): [StiPromise](../Stimulsoft_System/StiPromise.md)<KeyObjectType>

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **pageIndex** (number)  
- **requestParams** (any)  

**Returns** [StiPromise](../Stimulsoft_System/StiPromise.md)<KeyObjectType>


---

#### getDashboards `static`

**getDashboards**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **combineReportPages**: boolean): KeyObjectType[]

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **combineReportPages** (boolean)  

**Returns** KeyObjectType[]


---

#### getElementAttributesAsync `static`

**getElementAttributesAsync**(**page**: StiPage, **element**: IStiElement, **renderSingleElement**: boolean, **requestParams**: any, **elementOldHeights**: any, **bands**: [StiRangeBand](../Stimulsoft_Viewer_Helpers_Dashboards/StiRangeBand.md)[], **totalFixedHeight**: any): Promise<KeyObjectType>

**Parameters**

- **page** (StiPage)  
- **element** (IStiElement)  
- **renderSingleElement** (boolean)  
- **requestParams** (any)  
- **elementOldHeights** (any)  
- **bands** ([StiRangeBand](../Stimulsoft_Viewer_Helpers_Dashboards/StiRangeBand.md)[])  
- **totalFixedHeight** (any)  

**Returns** Promise<KeyObjectType>


---

#### getHtmlColor `static`

**getHtmlColor**(**color**: [Color](../Stimulsoft_System_Drawing/Color.md)): string

Get the color in HEX format.

**Parameters**

- **color** ([Color](../Stimulsoft_System_Drawing/Color.md))  

**Returns** string


---

#### getNestedPages `static`

**getNestedPages**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md)): StiPage[]

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  

**Returns** StiPage[]


---

#### getPagesCount `static`

**getPagesCount**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **originalPageNumber**: any, **combineReportPages**: boolean): number

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **originalPageNumber** (any)  
- **combineReportPages** (boolean)  

**Returns** number


---

#### getReportCultureParams `static`

**getReportCultureParams**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md)): any

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  

**Returns** any


---

#### getReportDisplayModeFromReport `static`

**getReportDisplayModeFromReport**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md)): [StiHtmlExportMode](../Stimulsoft_Report_Export/StiHtmlExportMode.md)

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  

**Returns** [StiHtmlExportMode](../Stimulsoft_Report_Export/StiHtmlExportMode.md)


---

#### getReportPreviewSettings `static`

**getReportPreviewSettings**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md)): KeyObjectType

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  

**Returns** KeyObjectType


---

#### getSingleElementContent `static`

**getSingleElementContent**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **requestParams**: any): Promise<KeyObjectType>

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **requestParams** (any)  

**Returns** Promise<KeyObjectType>


---

#### getTableOfContentsPointers `static`

**getTableOfContentsPointers**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **requestParams**: [StiRequestParams](StiRequestParams.md)): any[]

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **requestParams** ([StiRequestParams](StiRequestParams.md))  

**Returns** any[]


---

#### imageToBase64 `static`

**imageToBase64**(**image**: number[]): string

**Parameters**

- **image** (number[])  

**Returns** string


---

#### isMixedReport `static`

**isMixedReport**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md)): boolean

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  

**Returns** boolean


---

#### resolve

**resolve**(**elementAttributes**: any): void

**Parameters**

- **elementAttributes** (any)  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **brushStr** | any |  |
| **brushStr** | any |  |
| **brushStr** | any |  |
| **brushStr** | any |  |
| **brushStr** | any |  |
| **brushStr** | any |  |
| **contentAlignment** | any |  |
| **contentAlignment** | any |  |
| **contentAlignment** | any |  |
| **contentAlignment** | any |  |
| **contentAlignment** | any |  |
| **contentAlignment** | any |  |
| **cultureName** | any |  |
| **dashboardsPresent** | any |  |
| **drillDownPage** | any |  |
| **mimeType** | any |  |
| **mimeType** | any |  |
| **mimeType** | any |  |
| **mimeType** | any |  |
| **mimeType** | any |  |
| **mimeType** | any |  |
| **newReport** | any |  |
| **pValue** | any |  |
| **pageIndex** | any |  |
| **pageIndex** | any |  |
| **pointers** | any |  |
| **pointers** | any |  |
| **reportsPresent** | any |  |
| **scaleX** | any |  |
| **scaleY** | any |  |
| **scaleY** | any |  |
| **scaleY** | any |  |
| **scaleY** | any |  |
| **values** | any |  |
| **yy** | any |  |
