---
title: "StiGisProjection Class"
---

## StiGisProjection Class

**Namespace:** `Stimulsoft.Report.Maps.Gis`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**() |  |

**constructor**()


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clip** `static` | number |  |
| **fromLatLngToPixel** | [StiGisPoint](StiGisPoint.md) |  |
| **fromLatLngToPixel2** | [StiGisPoint](StiGisPoint.md) |  |
| **fromPixelToLatLng** | [StiGisPointLatLng](StiGisPointLatLng.md) |  |
| **fromPixelToLatLng2** | [StiGisPointLatLng](StiGisPointLatLng.md) |  |
| **fromPixelToTileXY** | [StiGisPoint](StiGisPoint.md) |  |
| **getTileMatrixMaxXY** | [StiGisSize](StiGisSize.md) |  |
| **getTileMatrixMinXY** | [StiGisSize](StiGisSize.md) |  |
| **getTileMatrixSizePixel** | [StiGisSize](StiGisSize.md) |  |
| **getTileMatrixSizeXY** | [StiGisSize](StiGisSize.md) |  |
| **getTileValue** | number |  |

---

### Method Details

#### clip `static`

**clip**(**n**: number, **minValue**: number, **maxValue**: number): number

**Parameters**

- **n** (number)  
- **minValue** (number)  
- **maxValue** (number)  

**Returns** number


---

#### fromLatLngToPixel

**fromLatLngToPixel**(**lat**: number, **lng**: number, **zoom**: number): [StiGisPoint](StiGisPoint.md)

**Parameters**

- **lat** (number)  
- **lng** (number)  
- **zoom** (number)  

**Returns** [StiGisPoint](StiGisPoint.md)


---

#### fromLatLngToPixel2

**fromLatLngToPixel2**(**p**: [StiGisPointLatLng](StiGisPointLatLng.md), **zoom**: number): [StiGisPoint](StiGisPoint.md)

**Parameters**

- **p** ([StiGisPointLatLng](StiGisPointLatLng.md))  
- **zoom** (number)  

**Returns** [StiGisPoint](StiGisPoint.md)


---

#### fromPixelToLatLng

**fromPixelToLatLng**(**x**: number, **y**: number, **zoom**: number): [StiGisPointLatLng](StiGisPointLatLng.md)

**Parameters**

- **x** (number)  
- **y** (number)  
- **zoom** (number)  

**Returns** [StiGisPointLatLng](StiGisPointLatLng.md)


---

#### fromPixelToLatLng2

**fromPixelToLatLng2**(**p**: [StiGisPoint](StiGisPoint.md), **zoom**: number): [StiGisPointLatLng](StiGisPointLatLng.md)

**Parameters**

- **p** ([StiGisPoint](StiGisPoint.md))  
- **zoom** (number)  

**Returns** [StiGisPointLatLng](StiGisPointLatLng.md)


---

#### fromPixelToTileXY

**fromPixelToTileXY**(**p**: [StiGisPoint](StiGisPoint.md)): [StiGisPoint](StiGisPoint.md)

**Parameters**

- **p** ([StiGisPoint](StiGisPoint.md))  

**Returns** [StiGisPoint](StiGisPoint.md)


---

#### getTileMatrixMaxXY

**getTileMatrixMaxXY**(**zoom**: number): [StiGisSize](StiGisSize.md)

**Parameters**

- **zoom** (number)  

**Returns** [StiGisSize](StiGisSize.md)


---

#### getTileMatrixMinXY

**getTileMatrixMinXY**(**zoom**: number): [StiGisSize](StiGisSize.md)

**Parameters**

- **zoom** (number)  

**Returns** [StiGisSize](StiGisSize.md)


---

#### getTileMatrixSizePixel

**getTileMatrixSizePixel**(**zoom**: number): [StiGisSize](StiGisSize.md)

**Parameters**

- **zoom** (number)  

**Returns** [StiGisSize](StiGisSize.md)


---

#### getTileMatrixSizeXY

**getTileMatrixSizeXY**(**zoom**: number): [StiGisSize](StiGisSize.md)

**Parameters**

- **zoom** (number)  

**Returns** [StiGisSize](StiGisSize.md)


---

#### getTileValue

**getTileValue**(): number

**Returns** number


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **tileSize** | number |  |
