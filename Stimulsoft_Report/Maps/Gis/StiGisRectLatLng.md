---
title: "StiGisRectLatLng Class"
---

## StiGisRectLatLng Class

**Namespace:** `Stimulsoft.Report.Maps.Gis`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(number lat, number lng, number widthLng, number heightLat, [StiGisPointLatLng](StiGisPointLatLng.md) location, [StiGisSizeLatLng](StiGisSizeLatLng.md) size) |  |

**constructor**(**lat**: number, **lng**: number, **widthLng**: number, **heightLat**: number, **location**: [StiGisPointLatLng](StiGisPointLatLng.md), **size**: [StiGisSizeLatLng](StiGisSizeLatLng.md))

**Parameters**

- **lat** (number)  
- **lng** (number)  
- **widthLng** (number)  
- **heightLat** (number)  
- **location** ([StiGisPointLatLng](StiGisPointLatLng.md))  
- **size** ([StiGisSizeLatLng](StiGisSizeLatLng.md))  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **empty** `static` | [StiGisRectLatLng](StiGisRectLatLng.md) |  |
| **locationMiddle** | [StiGisPointLatLng](StiGisPointLatLng.md) |  |
| **locationRightBottom** | [StiGisPointLatLng](StiGisPointLatLng.md) |  |
| **locationTopLeft** | [StiGisPointLatLng](StiGisPointLatLng.md) |  |
| **size** | [StiGisSizeLatLng](StiGisSizeLatLng.md) |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | [StiGisRectLatLng](StiGisRectLatLng.md) |  |
| **contains** | boolean |  |
| **contains2** | boolean |  |
| **equals** | boolean |  |
| **fromLTRB** `static` | [StiGisRectLatLng](StiGisRectLatLng.md) |  |
| **opEquals** `static` | boolean |  |
| **opNotEquals** `static` | boolean |  |
| **toString** | string |  |

---

### Method Details

#### clone

**clone**(): [StiGisRectLatLng](StiGisRectLatLng.md)

**Returns** [StiGisRectLatLng](StiGisRectLatLng.md)


---

#### contains

**contains**(**lat**: number, **lng**: number): boolean

**Parameters**

- **lat** (number)  
- **lng** (number)  

**Returns** boolean


---

#### contains2

**contains2**(**pt**: [StiGisPointLatLng](StiGisPointLatLng.md)): boolean

**Parameters**

- **pt** ([StiGisPointLatLng](StiGisPointLatLng.md))  

**Returns** boolean


---

#### equals

**equals**(**obj**: any): boolean

**Parameters**

- **obj** (any)  

**Returns** boolean


---

#### fromLTRB `static`

**fromLTRB**(**leftLng**: number, **topLat**: number, **rightLng**: number, **bottomLat**: number): [StiGisRectLatLng](StiGisRectLatLng.md)

**Parameters**

- **leftLng** (number)  
- **topLat** (number)  
- **rightLng** (number)  
- **bottomLat** (number)  

**Returns** [StiGisRectLatLng](StiGisRectLatLng.md)


---

#### opEquals `static`

**opEquals**(**left**: [StiGisRectLatLng](StiGisRectLatLng.md), **right**: [StiGisRectLatLng](StiGisRectLatLng.md)): boolean

**Parameters**

- **left** ([StiGisRectLatLng](StiGisRectLatLng.md))  
- **right** ([StiGisRectLatLng](StiGisRectLatLng.md))  

**Returns** boolean


---

#### opNotEquals `static`

**opNotEquals**(**left**: [StiGisRectLatLng](StiGisRectLatLng.md), **right**: [StiGisRectLatLng](StiGisRectLatLng.md)): boolean

**Parameters**

- **left** ([StiGisRectLatLng](StiGisRectLatLng.md))  
- **right** ([StiGisRectLatLng](StiGisRectLatLng.md))  

**Returns** boolean


---

#### toString

**toString**(): string

**Returns** string

