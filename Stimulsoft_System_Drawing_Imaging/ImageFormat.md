---
title: "ImageFormat Class"
---

## ImageFormat Class

**Namespace:** `Stimulsoft.System.Drawing.Imaging`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(string guid) |  |

**constructor**(**guid**: string)

**Parameters**

- **guid** (string)  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **Bmp** `static` | [ImageFormat](../Stimulsoft_Report/ImageFormat.md) |  |
| **Gif** `static` | [ImageFormat](../Stimulsoft_Report/ImageFormat.md) |  |
| **Jpeg** `static` | [ImageFormat](../Stimulsoft_Report/ImageFormat.md) |  |
| **Png** `static` | [ImageFormat](../Stimulsoft_Report/ImageFormat.md) |  |
| **Svg** `static` | [ImageFormat](../Stimulsoft_Report/ImageFormat.md) |  |
| **Tiff** `static` | [ImageFormat](../Stimulsoft_Report/ImageFormat.md) |  |
| **mimeType** | string |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getImageFormat** `static` | [ImageFormat](../Stimulsoft_Report/ImageFormat.md) |  |
| **getInfo** | ImageInfo |  |
| **toString** | string |  |

---

### Method Details

#### getImageFormat `static`

**getImageFormat**(**dataBytes**: number[]): [ImageFormat](../Stimulsoft_Report/ImageFormat.md)

**Parameters**

- **dataBytes** (number[])  

**Returns** [ImageFormat](../Stimulsoft_Report/ImageFormat.md)


---

#### getInfo

**getInfo**(**data**: { bytes: number[], **base64**: string, **svg**: string }): ImageInfo

**Parameters**

- **data** ({ bytes: number[])  
- **base64** (string)  
- **svg** (string })  

**Returns** ImageInfo


---

#### toString

**toString**(): string

**Returns** string


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **base64** | any |  |
| **flag1** | any |  |
| **flag1** | any |  |
| **flag1** | any |  |
| **len** | any |  |
| **len** | any |  |
| **len** | any |  |
| **pos** | any |  |
| **pos** | any |  |
| **rect** | any |  |
| **resolution** | any |  |
| **resolution** | any |  |
| **resolution** | any |  |
| **resolution** | any |  |
| **xRes** | any |  |
| **xRes** | any |  |
| **yRes** | any |  |
| **yRes** | any |  |
