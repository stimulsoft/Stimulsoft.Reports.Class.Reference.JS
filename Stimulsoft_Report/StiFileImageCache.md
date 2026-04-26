---
title: "StiFileImageCache Class"
---

## StiFileImageCache Class

**Namespace:** `Stimulsoft.Report`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clear** `static` | void |  |
| **exist** `static` | boolean |  |
| **getImageCacheName** `static` | string |  |
| **loadImage** `static` | [Image](../Stimulsoft_System_Drawing/Image.md) |  |
| **remove** `static` | void |  |
| **saveImage** `static` | void |  |

---

### Method Details

#### clear `static`

**clear**(**report**: [StiReport](StiReport.md)): void

**Parameters**

- **report** ([StiReport](StiReport.md))  


---

#### exist `static`

**exist**(**report**: [StiReport](StiReport.md), **cacheGuid**: string): boolean

**Parameters**

- **report** ([StiReport](StiReport.md))  
- **cacheGuid** (string)  

**Returns** boolean


---

#### getImageCacheName `static`

**getImageCacheName**(**report**: [StiReport](StiReport.md), **cacheImageGuid**: string): string

**Parameters**

- **report** ([StiReport](StiReport.md))  
- **cacheImageGuid** (string)  

**Returns** string


---

#### loadImage `static`

**loadImage**(**report**: [StiReport](StiReport.md), **path**: string): [Image](../Stimulsoft_System_Drawing/Image.md)

**Parameters**

- **report** ([StiReport](StiReport.md))  
- **path** (string)  

**Returns** [Image](../Stimulsoft_System_Drawing/Image.md)


---

#### remove `static`

**remove**(**report**: [StiReport](StiReport.md), **path**: string): void

**Parameters**

- **report** ([StiReport](StiReport.md))  
- **path** (string)  


---

#### saveImage `static`

**saveImage**(**report**: [StiReport](StiReport.md), **image**: [Image](../Stimulsoft_System_Drawing/Image.md), **path**: string): void

**Parameters**

- **report** ([StiReport](StiReport.md))  
- **image** ([Image](../Stimulsoft_System_Drawing/Image.md))  
- **path** (string)  

