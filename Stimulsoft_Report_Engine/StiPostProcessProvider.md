---
title: "StiPostProcessProvider Class"
---

## StiPostProcessProvider Class

**Namespace:** `Stimulsoft.Report.Engine`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **copyStyles** `static` | void |  |
| **postProcessPage** `static` | void |  |
| **postProcessPages** `static` | void |  |
| **postProcessPrimitives** `static` | void |  |
| **postProcessPrimitivesInContainer** `static` | void |  |

---

### Method Details

#### copyStyles `static`

**copyStyles**(**dest**: StiLinePrimitive, **source**: StiLinePrimitive): void

**Parameters**

- **dest** (StiLinePrimitive)  
- **source** (StiLinePrimitive)  


---

#### postProcessPage `static`

**postProcessPage**(**page**: Stimulsoft.Report.Components.StiPage, **isFirstPage**: boolean, **isLastPage**: boolean, **clearPage**: any): void

**Parameters**

- **page** (Stimulsoft.Report.Components.StiPage)  
- **isFirstPage** (boolean)  
- **isLastPage** (boolean)  
- **clearPage** (any)  


---

#### postProcessPages `static`

**postProcessPages**(**pages**: StiPagesCollection): void

**Parameters**

- **pages** (StiPagesCollection)  


---

#### postProcessPrimitives `static`

**postProcessPrimitives**(**page**: StiPagesCollection \| Stimulsoft.Report.Components.StiPage): void

**Parameters**

- **page** (StiPagesCollection \| Stimulsoft.Report.Components.StiPage)  


---

#### postProcessPrimitivesInContainer `static`

**postProcessPrimitivesInContainer**(**container**: StiContainer): void

**Parameters**

- **container** (StiContainer)  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **comps** | any |  |
| **endIndexColumn** | any |  |
| **list** | any |  |
| **nextStartIndexPage** | any |  |
| **pageNumber** | any |  |
| **pageNumber** | any |  |
| **pageNumber** | any |  |
| **pages** | any |  |
| **parentCont** | any |  |
| **startIndexColumn** | any |  |
| **totalPageCount** | any |  |
