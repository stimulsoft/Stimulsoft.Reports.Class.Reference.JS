---
title: "StiResourcesHelper Class"
---

## StiResourcesHelper Class

**Namespace:** `Stimulsoft.Designer`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **downloadImageContent** `static` | void |  |
| **downloadResource** `static` | void |  |
| **getCursorPenBase64** `static` | string |  |
| **getCursorStyleSetBase64** `static` | string |  |
| **getHtmlColor** `static` | string |  |
| **getReportThumbnailParametersAsync** `static` | Promise<string> |  |
| **getResourceContentAsync** `static` | void |  |
| **getResourceText** `static` | void |  |
| **getResourceViewData** `static` | void |  |
| **getStringContentForJSFromResourceContentAsync** `static` | Promise<string> |  |
| **isFontResourceType** `static` | boolean |  |
| **isPackedFile** `static` | boolean |  |
| **moveImageToResource** `static` | void |  |
| **setResourceText** `static` | void |  |

---

### Method Details

#### downloadImageContent `static`

**downloadImageContent**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **imageData**: string): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **imageData** (string)  


---

#### downloadResource `static`

**downloadResource**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **resourceName**: string): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **resourceName** (string)  


---

#### getCursorPenBase64 `static`

**getCursorPenBase64**(): string

**Returns** string


---

#### getCursorStyleSetBase64 `static`

**getCursorStyleSetBase64**(): string

**Returns** string


---

#### getHtmlColor `static`

**getHtmlColor**(**color**: [Color](../Stimulsoft_System/Drawing/Color.md)): string

**Parameters**

- **color** ([Color](../Stimulsoft_System/Drawing/Color.md))  

**Returns** string


---

#### getReportThumbnailParametersAsync `static`

**getReportThumbnailParametersAsync**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **zoom**: number): Promise<string>

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **zoom** (number)  

**Returns** Promise<string>


---

#### getResourceContentAsync `static`

**getResourceContentAsync**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any, **callbackResult**: any): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  
- **callbackResult** (any)  


---

#### getResourceText `static`

**getResourceText**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any, **callbackResult**: any): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  
- **callbackResult** (any)  


---

#### getResourceViewData `static`

**getResourceViewData**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any, **callbackResult**: any): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  
- **callbackResult** (any)  


---

#### getStringContentForJSFromResourceContentAsync `static`

**getStringContentForJSFromResourceContentAsync**(**resourceType**: [StiResourceType](../Stimulsoft_Report/Dictionary/StiResourceType.md), **content**: number[]): Promise<string>

**Parameters**

- **resourceType** ([StiResourceType](../Stimulsoft_Report/Dictionary/StiResourceType.md))  
- **content** (number[])  

**Returns** Promise<string>


---

#### isFontResourceType `static`

**isFontResourceType**(**resourceType**: [StiResourceType](../Stimulsoft_Report/Dictionary/StiResourceType.md)): boolean

**Parameters**

- **resourceType** ([StiResourceType](../Stimulsoft_Report/Dictionary/StiResourceType.md))  

**Returns** boolean


---

#### isPackedFile `static`

**isPackedFile**(**content**: number[]): boolean

**Parameters**

- **content** (number[])  

**Returns** boolean


---

#### moveImageToResource `static`

**moveImageToResource**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any, **callbackResult**: any): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  
- **callbackResult** (any)  


---

#### setResourceText `static`

**setResourceText**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any, **callbackResult**: any): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  
- **callbackResult** (any)  

