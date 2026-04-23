---
title: "StiExportImageCache Class"
---

## StiExportImageCache Class

**Namespace:** `Stimulsoft.Report.Export`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([Stimulsoft.Report.ImageFormat](../ImageFormat.md) imageFormat, boolean isOffice, [StiImageCache](../StiImageCache.md) imageCache, number scale, [StiReport](../StiReport.md) report) |  |

**constructor**(**imageFormat**: [Stimulsoft.Report.ImageFormat](../ImageFormat.md), **isOffice**: boolean, **imageCache**: [StiImageCache](../StiImageCache.md), **scale**: number, **report**: [StiReport](../StiReport.md))

**Parameters**

- **imageFormat** ([Stimulsoft.Report.ImageFormat](../ImageFormat.md))  
- **isOffice** (boolean)  
- **imageCache** ([StiImageCache](../StiImageCache.md))  
- **scale** (number)  
- **report** ([StiReport](../StiReport.md))  


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

