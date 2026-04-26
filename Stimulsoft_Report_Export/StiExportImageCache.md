---
title: "StiExportImageCache Class"
---

## StiExportImageCache Class

**Namespace:** `Stimulsoft.Report.Export`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([Stimulsoft.Report.ImageFormat](../Stimulsoft_Report/ImageFormat.md) imageFormat, boolean isOffice, [StiImageCache](../Stimulsoft_Report/StiImageCache.md) imageCache, number scale, [StiReport](../Stimulsoft_Report/StiReport.md) report) |  |

**constructor**(**imageFormat**: [Stimulsoft.Report.ImageFormat](../Stimulsoft_Report/ImageFormat.md), **isOffice**: boolean, **imageCache**: [StiImageCache](../Stimulsoft_Report/StiImageCache.md), **scale**: number, **report**: [StiReport](../Stimulsoft_Report/StiReport.md))

**Parameters**

- **imageFormat** ([Stimulsoft.Report.ImageFormat](../Stimulsoft_Report/ImageFormat.md))  
- **isOffice** (boolean)  
- **imageCache** ([StiImageCache](../Stimulsoft_Report/StiImageCache.md))  
- **scale** (number)  
- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **copyImageInfo** | void |  |
| **getImageIndex** | number |  |

---

### Method Details

#### copyImageInfo

**copyImageInfo**(**oldPage**: StiPage, **newPage**: StiPage, **oldComp**: StiComponent, **newComp**: StiComponent): void

**Parameters**

- **oldPage** (StiPage)  
- **newPage** (StiPage)  
- **oldComp** (StiComponent)  
- **newComp** (StiComponent)  


---

#### getImageIndex

**getImageIndex**(**comp**: StiComponent, **propId**: string, **compIndex**: any): number

**Parameters**

- **comp** (StiComponent)  
- **propId** (string)  
- **compIndex** (any)  

**Returns** number


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **compHash** | any |  |
| **compHash** | any |  |
| **imageCache** | [StiImageCache](../Stimulsoft_Report/StiImageCache.md) |  |
| **imageFormat** | [Stimulsoft.Report.ImageFormat](../Stimulsoft_Report/ImageFormat.md) |  |
| **imageIndex** | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md) |  |
| **imageIndex2** | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md) |  |
| **index** | any |  |
| **isOffice** | any |  |
| **newPageHash** | any |  |
| **oldCompHash** | any |  |
| **pageHash** | any |  |
| **report** | [StiReport](../Stimulsoft_Report/StiReport.md) |  |
| **scale** | any |  |
