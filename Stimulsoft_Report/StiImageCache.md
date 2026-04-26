---
title: "StiImageCache Class"
---

## StiImageCache Class

**Namespace:** `Stimulsoft.Report`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(boolean useImageComparer, any useImageCompression, [ImageFormat](ImageFormat.md) imageFormat, any imageQuality, any useImageTransparency) |  |

**constructor**(**useImageComparer**: boolean, **useImageCompression**: any, **imageFormat**: [ImageFormat](ImageFormat.md), **imageQuality**: any, **useImageTransparency**: any)

**Parameters**

- **useImageComparer** (boolean)  
- **useImageCompression** (any)  
- **imageFormat** ([ImageFormat](ImageFormat.md))  
- **imageQuality** (any)  
- **useImageTransparency** (any)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **addImageInt** | number |  |
| **addImageIntRaw** | number |  |
| **clear** | void |  |

---

### Method Details

#### addImageInt

**addImageInt**(**image**: [Image](../Stimulsoft_System_Drawing/Image.md), **imageFormat**: [ImageFormat](ImageFormat.md)): number

**Parameters**

- **image** ([Image](../Stimulsoft_System_Drawing/Image.md))  
- **imageFormat** ([ImageFormat](ImageFormat.md))  

**Returns** number


---

#### addImageIntRaw

**addImageIntRaw**(**image**: [Image](../Stimulsoft_System_Drawing/Image.md), **imageFormat**: [Stimulsoft.System.Drawing.Imaging.ImageFormat](../Stimulsoft_System_Drawing_Imaging/ImageFormat.md)): number

**Parameters**

- **image** ([Image](../Stimulsoft_System_Drawing/Image.md))  
- **imageFormat** ([Stimulsoft.System.Drawing.Imaging.ImageFormat](../Stimulsoft_System_Drawing_Imaging/ImageFormat.md))  

**Returns** number


---

#### clear

**clear**(): void


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **_format** | any |  |
| **_format** | any |  |
| **_format** | any |  |
| **bytes** | any |  |
| **bytes** | any |  |
| **bytes** | any |  |
| **bytes** | any |  |
| **checkSum** | any |  |
| **checkSum** | any |  |
| **checkSum** | any |  |
| **count** | any |  |
| **image** | any |  |
| **imageForMask** | any |  |
| **imageFormatStore** | [ImageFormat](ImageFormat.md)[] |  |
| **imageIndex** | number[] |  |
| **imageIndex** | any |  |
| **imageIndex** | any |  |
| **imageMaskStore** | number[][] |  |
| **imagePackedStore** | number[][] |  |
| **imageSizeStore** | [Size](../Stimulsoft_System_Drawing/Size.md)[] |  |
| **imageStore** | [Image](../Stimulsoft_System_Drawing/Image.md)[] |  |
| **mask** | any |  |
| **mask** | any |  |
| **offset** | any |  |
