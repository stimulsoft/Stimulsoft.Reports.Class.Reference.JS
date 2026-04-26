---
title: "StiExportService Class"
---

## StiExportService Class

**Namespace:** `Stimulsoft.Report.Export`

### Inheritance

Implements: [IStiExportService](IStiExportService.md)  

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **exportFormat** | [StiExportFormat](../Stimulsoft_Report/StiExportFormat.md) |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **exportTo** | void |  |
| **exportTo2** | Promise<void> |  |
| **exportToAsync** | void |  |
| **getOrderFileName** `static` | string |  |
| **invokeExporting** | void |  |
| **invokeExporting2** | void |  |
| **onExport** | void |  |

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

#### getOrderFileName `static`

**getOrderFileName**(**baseName**: string, **index**: number, **totalPagesCount**: number, **extension**: string): string

**Parameters**

- **baseName** (string)  
- **index** (number)  
- **totalPagesCount** (number)  
- **extension** (string)  

**Returns** string


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


---

#### onExport

**onExport**(): void


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **compressToArchive** | any |  |
| **currentPassNumber** | any |  |
| **exportServiceId** | any |  |
| **isStopped** | any |  |
| **maximumPassNumber** | any |  |
| **multipleFiles** | any | Gets a value indicating a number of files in exported document as a result of export of one page of the rendered report. |
| **order** | any |  |
| **renderedPagesCount** | any |  |
