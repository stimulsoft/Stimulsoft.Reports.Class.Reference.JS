---
title: "IStiExportService Interface"
---

## IStiExportService Interface

**Namespace:** `Stimulsoft.Report.Export`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **exportTo** | void |  |
| **exportTo2** | Promise<void> |  |
| **exportToAsync** | void |  |
| **invokeExporting** | void |  |
| **invokeExporting2** | void |  |

---

### Method Details

#### exportTo

**exportTo**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **stream**: [MemoryStream](../Stimulsoft_System_IO/MemoryStream.md), **settings**: [StiExportSettings](StiExportSettings.md)): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **stream** ([MemoryStream](../Stimulsoft_System_IO/MemoryStream.md))  
- **settings** ([StiExportSettings](StiExportSettings.md))  


---

#### exportTo2

**exportTo2**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **stream**: [MemoryStream](../Stimulsoft_System_IO/MemoryStream.md), **settings**: [StiExportSettings](StiExportSettings.md)): Promise<void>

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **stream** ([MemoryStream](../Stimulsoft_System_IO/MemoryStream.md))  
- **settings** ([StiExportSettings](StiExportSettings.md))  

**Returns** Promise<void>


---

#### exportToAsync

**exportToAsync**(**onExport**: (error?: string)): void

**Parameters**

- **onExport** ((error?: string))  


---

#### invokeExporting

**invokeExporting**(**page**: StiPage, **pages**: StiPagesCollection, **currentPass**: number, **maximumPass**: number): void

**Parameters**

- **page** (StiPage)  
- **pages** (StiPagesCollection)  
- **currentPass** (number)  
- **maximumPass** (number)  


---

#### invokeExporting2

**invokeExporting2**(**value**: number, **maximum**: number, **currentPass**: number, **maximumPass**: number): void

**Parameters**

- **value** (number)  
- **maximum** (number)  
- **currentPass** (number)  
- **maximumPass** (number)  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **compressToArchive** | boolean |  |
| **currentPassNumber** | number |  |
| **exportFormat** | [StiExportFormat](../Stimulsoft_Report/StiExportFormat.md) |  |
| **exportServiceId** | string |  |
| **isStopped** | boolean |  |
| **maximumPassNumber** | number |  |
| **multipleFiles** | boolean | Gets a value indicating a number of files in exported document as a result of export of one page of the rendered report. |
| **renderedPagesCount** | number |  |
