---
title: "StiOfficeImageFormatHelper Class"
---

## StiOfficeImageFormatHelper Class

**Namespace:** `Stimulsoft.Report.Export.Office`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **correctImageFormat** `static` | [ImageFormat](../Stimulsoft_Report/ImageFormat.md) |  |
| **getImageAndTag** `static` | [Image](../Stimulsoft_System_Drawing/Image.md) |  |
| **getImageFormatExtension** `static` | string |  |
| **removeTransparency** `static` | [Image](../Stimulsoft_System_Drawing/Image.md) |  |

---

### Method Details

#### correctImageFormat `static`

**correctImageFormat**(**imageFormat**: [ImageFormat](../Stimulsoft_Report/ImageFormat.md), **rawFormat**: [Stimulsoft.System.Drawing.Imaging.ImageFormat](../Stimulsoft_System_Drawing_Imaging/ImageFormat.md)): [ImageFormat](../Stimulsoft_Report/ImageFormat.md)

**Parameters**

- **imageFormat** ([ImageFormat](../Stimulsoft_Report/ImageFormat.md))  
- **rawFormat** ([Stimulsoft.System.Drawing.Imaging.ImageFormat](../Stimulsoft_System_Drawing_Imaging/ImageFormat.md))  

**Returns** [ImageFormat](../Stimulsoft_Report/ImageFormat.md)


---

#### getImageAndTag `static`

**getImageAndTag**(**component**: StiComponent, **exportFormat**: [StiExportFormat](../Stimulsoft_Report/StiExportFormat.md), **zoom**: number, **imageFormat**: [ImageFormat](../Stimulsoft_Report/ImageFormat.md), **culture1**: [CultureInfo](../Stimulsoft_System_Globalization/CultureInfo.md), **culture2**: [CultureInfo](../Stimulsoft_System_Globalization/CultureInfo.md), **forceAsImage**: any): [Image](../Stimulsoft_System_Drawing/Image.md)

**Parameters**

- **component** (StiComponent)  
- **exportFormat** ([StiExportFormat](../Stimulsoft_Report/StiExportFormat.md))  
- **zoom** (number)  
- **imageFormat** ([ImageFormat](../Stimulsoft_Report/ImageFormat.md))  
- **culture1** ([CultureInfo](../Stimulsoft_System_Globalization/CultureInfo.md))  
- **culture2** ([CultureInfo](../Stimulsoft_System_Globalization/CultureInfo.md))  
- **forceAsImage** (any)  

**Returns** [Image](../Stimulsoft_System_Drawing/Image.md)


---

#### getImageFormatExtension `static`

**getImageFormatExtension**(**currImageFormat**: [ImageFormat](../Stimulsoft_Report/ImageFormat.md)): string

**Parameters**

- **currImageFormat** ([ImageFormat](../Stimulsoft_Report/ImageFormat.md))  

**Returns** string


---

#### removeTransparency `static`

**removeTransparency**(**destinationFormat**: [ImageFormat](../Stimulsoft_Report/ImageFormat.md), **rawFormat**: [Stimulsoft.System.Drawing.Imaging.ImageFormat](../Stimulsoft_System_Drawing_Imaging/ImageFormat.md), **image**: [Image](../Stimulsoft_System_Drawing/Image.md), **component**: StiComponent, **dispose**: any): [Image](../Stimulsoft_System_Drawing/Image.md)

**Parameters**

- **destinationFormat** ([ImageFormat](../Stimulsoft_Report/ImageFormat.md))  
- **rawFormat** ([Stimulsoft.System.Drawing.Imaging.ImageFormat](../Stimulsoft_System_Drawing_Imaging/ImageFormat.md))  
- **image** ([Image](../Stimulsoft_System_Drawing/Image.md))  
- **component** (StiComponent)  
- **dispose** (any)  

**Returns** [Image](../Stimulsoft_System_Drawing/Image.md)


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **currImageFormat** | any |  |
| **currImageFormat** | any |  |
| **image** | any |  |
| **zoom** | any |  |
