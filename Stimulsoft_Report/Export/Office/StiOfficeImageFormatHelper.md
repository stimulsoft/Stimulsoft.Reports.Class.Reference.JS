---
title: "StiOfficeImageFormatHelper Class"
---

## StiOfficeImageFormatHelper Class

**Namespace:** `Stimulsoft.Report.Export.Office`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **correctImageFormat** `static` | [ImageFormat](../../ImageFormat.md) |  |
| **getImageAndTag** `static` | [Image](../../../Stimulsoft_System/Drawing/Image.md) |  |
| **getImageFormatExtension** `static` | string |  |
| **removeTransparency** `static` | [Image](../../../Stimulsoft_System/Drawing/Image.md) |  |

---

### Method Details

#### correctImageFormat `static`

**correctImageFormat**(**imageFormat**: [ImageFormat](../../ImageFormat.md), **rawFormat**: [Stimulsoft.System.Drawing.Imaging.ImageFormat](../../../Stimulsoft_System/Drawing/Imaging/ImageFormat.md)): [ImageFormat](../../ImageFormat.md)

**Parameters**

- **imageFormat** ([ImageFormat](../../ImageFormat.md))  
- **rawFormat** ([Stimulsoft.System.Drawing.Imaging.ImageFormat](../../../Stimulsoft_System/Drawing/Imaging/ImageFormat.md))  

**Returns** [ImageFormat](../../ImageFormat.md)


---

#### getImageAndTag `static`

**getImageAndTag**(**component**: StiComponent, **exportFormat**: [StiExportFormat](../../StiExportFormat.md), **zoom**: number, **imageFormat**: [ImageFormat](../../ImageFormat.md), **culture1**: [CultureInfo](../../../Stimulsoft_System/Globalization/CultureInfo.md), **culture2**: [CultureInfo](../../../Stimulsoft_System/Globalization/CultureInfo.md), **forceAsImage**: any): [Image](../../../Stimulsoft_System/Drawing/Image.md)

**Parameters**

- **component** (StiComponent)  
- **exportFormat** ([StiExportFormat](../../StiExportFormat.md))  
- **zoom** (number)  
- **imageFormat** ([ImageFormat](../../ImageFormat.md))  
- **culture1** ([CultureInfo](../../../Stimulsoft_System/Globalization/CultureInfo.md))  
- **culture2** ([CultureInfo](../../../Stimulsoft_System/Globalization/CultureInfo.md))  
- **forceAsImage** (any)  

**Returns** [Image](../../../Stimulsoft_System/Drawing/Image.md)


---

#### getImageFormatExtension `static`

**getImageFormatExtension**(**currImageFormat**: [ImageFormat](../../ImageFormat.md)): string

**Parameters**

- **currImageFormat** ([ImageFormat](../../ImageFormat.md))  

**Returns** string


---

#### removeTransparency `static`

**removeTransparency**(**destinationFormat**: [ImageFormat](../../ImageFormat.md), **rawFormat**: [Stimulsoft.System.Drawing.Imaging.ImageFormat](../../../Stimulsoft_System/Drawing/Imaging/ImageFormat.md), **image**: [Image](../../../Stimulsoft_System/Drawing/Image.md), **component**: StiComponent, **dispose**: any): [Image](../../../Stimulsoft_System/Drawing/Image.md)

**Parameters**

- **destinationFormat** ([ImageFormat](../../ImageFormat.md))  
- **rawFormat** ([Stimulsoft.System.Drawing.Imaging.ImageFormat](../../../Stimulsoft_System/Drawing/Imaging/ImageFormat.md))  
- **image** ([Image](../../../Stimulsoft_System/Drawing/Image.md))  
- **component** (StiComponent)  
- **dispose** (any)  

**Returns** [Image](../../../Stimulsoft_System/Drawing/Image.md)

