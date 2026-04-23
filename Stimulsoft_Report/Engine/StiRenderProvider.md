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
| **prepareSubReportsAndDrillDownPages** `static` | [Hashtable](../../Stimulsoft_System/Collections/Hashtable.md) |  |
| **processPageToCache** `static` | void |  |
| **render** `static` | void |  |
| **renderAsync** `static` | void |  |
| **renderTable** `static` | void |  |

---

### Method Details

#### clearPagesForFirstPass `static`

**clearPagesForFirstPass**(**report**: [StiReport](../StiReport.md)): void

**Parameters**

- **report** ([StiReport](../StiReport.md))  


---

#### connectToData `static`

**connectToData**(**report**: [StiReport](../StiReport.md), **isConnectToDataV2**: any): void

**Parameters**

- **report** ([StiReport](../StiReport.md))  
- **isConnectToDataV2** (any)  


---

#### connectToDataAsync `static`

**connectToDataAsync**(**report**: [StiReport](../StiReport.md), **isConnectToDataV2**: any): void

**Parameters**

- **report** ([StiReport](../StiReport.md))  
- **isConnectToDataV2** (any)  


---

#### isFirstPage `static`

**isFirstPage**(**report**: [StiReport](../StiReport.md), **page**: StiPage): boolean

**Parameters**

- **report** ([StiReport](../StiReport.md))  
- **page** (StiPage)  

**Returns** boolean


---

#### isLastPage `static`

**isLastPage**(**report**: [StiReport](../StiReport.md), **page**: StiPage): boolean

**Parameters**

- **report** ([StiReport](../StiReport.md))  
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

**prepareSubReportsAndDrillDownPages**(**report**: [StiReport](../StiReport.md)): [Hashtable](../../Stimulsoft_System/Collections/Hashtable.md)

**Parameters**

- **report** ([StiReport](../StiReport.md))  

**Returns** [Hashtable](../../Stimulsoft_System/Collections/Hashtable.md)


---

#### processPageToCache `static`

**processPageToCache**(**report**: [StiReport](../StiReport.md), **page**: StiPage, **final**: boolean): void

**Parameters**

- **report** ([StiReport](../StiReport.md))  
- **page** (StiPage)  
- **final** (boolean)  


---

#### render `static`

**render**(**report**: [StiReport](../StiReport.md), **state**: [StiRenderState](StiRenderState.md)): void

**Parameters**

- **report** ([StiReport](../StiReport.md))  
- **state** ([StiRenderState](StiRenderState.md))  


---

#### renderAsync `static`

**renderAsync**(**report**: [StiReport](../StiReport.md), **state**: [StiRenderState](StiRenderState.md)): void

**Parameters**

- **report** ([StiReport](../StiReport.md))  
- **state** ([StiRenderState](StiRenderState.md))  


---

#### renderTable `static`

**renderTable**(**report**: [StiReport](../StiReport.md)): void

**Parameters**

- **report** ([StiReport](../StiReport.md))  

