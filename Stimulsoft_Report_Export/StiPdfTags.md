---
title: "StiPdfTags Class"
---

## StiPdfTags Class

**Namespace:** `Stimulsoft.Report.Export`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(StiPdfExportService pdfExportService) |  |

**constructor**(**pdfExportService**: StiPdfExportService)

**Parameters**

- **pdfExportService** (StiPdfExportService)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **assemblyTagInfo** | void |  |
| **clear** | void |  |
| **constr** `static` | void |  |
| **writeTagInfo** | void |  |

---

### Method Details

#### assemblyTagInfo

**assemblyTagInfo**(**component**: StiComponent, **componentIndex**: number, **pageIndex**: number): void

**Parameters**

- **component** (StiComponent)  
- **componentIndex** (number)  
- **pageIndex** (number)  


---

#### clear

**clear**(): void


---

#### constr `static`

**constr**(): void


---

#### writeTagInfo

**writeTagInfo**(**pp**: [StiPdfData](StiPdfData.md), **componentIndex**: number, **pageIndex**: number, **isBefore**: boolean): void

**Parameters**

- **pp** ([StiPdfData](StiPdfData.md))  
- **componentIndex** (number)  
- **pageIndex** (number)  
- **isBefore** (boolean)  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **currentIndex** | any |  |
| **documentLanguage** | string |  |
| **first** | any |  |
| **pValue** | any |  |
| **pValue** | any |  |
| **structElement** | any |  |
| **structElementList** | [StiPdfStructElemObject](StiPdfStructElemObject.md)[] |  |
| **tagObject** | any |  |
