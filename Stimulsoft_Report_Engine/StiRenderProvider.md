---
title: "StiRenderProvider Class"
---

## StiRenderProvider Class

**Namespace:** `Stimulsoft.Report.Engine`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clearPagesForFirstPass** `static` | void |  |
| **connectToData** `static` | void |  |
| **connectToDataAsync** `static` | void |  |
| **isFirstPage** `static` | boolean |  |
| **isLastPage** `static` | boolean |  |
| **otherOnRendering** *(+1 overloads)* | void |  |
| **prepareSubReportsAndDrillDownPages** `static` | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md) |  |
| **processPageToCache** `static` | void |  |
| **render** `static` | void |  |
| **renderAsync** `static` | void |  |
| **renderTable** `static` | void |  |

---

### Method Details

#### clearPagesForFirstPass `static`

**clearPagesForFirstPass**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md)): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  


---

#### connectToData `static`

**connectToData**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **isConnectToDataV2**: any): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **isConnectToDataV2** (any)  


---

#### connectToDataAsync `static`

**connectToDataAsync**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **isConnectToDataV2**: any): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **isConnectToDataV2** (any)  


---

#### isFirstPage `static`

**isFirstPage**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **page**: StiPage): boolean

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **page** (StiPage)  

**Returns** boolean


---

#### isLastPage `static`

**isLastPage**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **page**: StiPage): boolean

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **page** (StiPage)  

**Returns** boolean


---

#### otherOnRendering

**otherOnRendering**(**sender**: any, **e**: any): void

**Parameters**

- **sender** (any)  
- **e** (any)  

---

**otherOnRendering**(**sender**: any, **e**: any): void

**Parameters**

- **sender** (any)  
- **e** (any)  


---

#### prepareSubReportsAndDrillDownPages `static`

**prepareSubReportsAndDrillDownPages**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md)): [Hashtable](../Stimulsoft_System_Collections/Hashtable.md)

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  

**Returns** [Hashtable](../Stimulsoft_System_Collections/Hashtable.md)


---

#### processPageToCache `static`

**processPageToCache**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **page**: StiPage, **final**: boolean): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **page** (StiPage)  
- **final** (boolean)  


---

#### render `static`

**render**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **state**: [StiRenderState](StiRenderState.md)): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **state** ([StiRenderState](StiRenderState.md))  


---

#### renderAsync `static`

**renderAsync**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **state**: [StiRenderState](StiRenderState.md)): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **state** ([StiRenderState](StiRenderState.md))  


---

#### renderTable `static`

**renderTable**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md)): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **cellTextWidth** | any |  |
| **cellTextWidth** | any |  |
| **comps** | any |  |
| **comps** | any |  |
| **cont** | any |  |
| **cont** | any |  |
| **eventsHandlers** | any |  |
| **eventsHandlers** | any |  |
| **expression** | any |  |
| **expression** | any |  |
| **finish** | any |  |
| **finish** | any |  |
| **finish** | any |  |
| **finish** | any |  |
| **finish** | any |  |
| **finish** | any |  |
| **gridSize** | any |  |
| **maxWidth** | any |  |
| **maxWidth** | any |  |
| **maxWidth** | any |  |
| **maxWidth** | any |  |
| **maxWidth** | any |  |
| **maxWidth** | any |  |
| **newTableComponents** | any |  |
| **newTableComponents** | any |  |
| **newTableComponents** | any |  |
| **newTableComponents** | any |  |
| **pageIndex** | any |  |
| **pageIndex** | any |  |
| **pageIndex** | any |  |
| **pageIndex** | any |  |
| **pagesStore** | any |  |
| **pagesStore** | any |  |
| **size** | any |  |
| **size** | any |  |
| **size** | any |  |
| **size** | any |  |
| **tableCollection** | any |  |
| **tableCollection** | any |  |
| **tableCollection** | any |  |
| **tableCollection** | any |  |
| **tableMasterComponent** | any |  |
| **tableMasterComponent** | any |  |
| **tempCont** | any |  |
| **tempCont** | any |  |
