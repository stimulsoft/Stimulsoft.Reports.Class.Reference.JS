---
title: "StiOpenStreetMapProvider Class"
---

## StiOpenStreetMapProvider Class

**Namespace:** `Stimulsoft.Report.Maps.Gis`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**() |  |

**constructor**()


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getMaxZoom** | number |  |
| **getMinZoom** | number |  |
| **getProjection** | StiMercatorGisProjection |  |
| **getServerNum** `static` | number |  |
| **getTileImage** | Promise<[StiGisMapImage](StiGisMapImage.md)> |  |
| **getTileImageUsingHttp** | Promise<[StiGisMapImage](StiGisMapImage.md)> |  |

---

### Method Details

#### getMaxZoom

**getMaxZoom**(): number

**Returns** number


---

#### getMinZoom

**getMinZoom**(): number

**Returns** number


---

#### getProjection

**getProjection**(): StiMercatorGisProjection

**Returns** StiMercatorGisProjection


---

#### getServerNum `static`

**getServerNum**(**pos**: [StiGisPoint](StiGisPoint.md), **max**: number): number

**Parameters**

- **pos** ([StiGisPoint](StiGisPoint.md))  
- **max** (number)  

**Returns** number


---

#### getTileImage

**getTileImage**(**pos**: [StiGisPoint](StiGisPoint.md), **zoom**: number): Promise<[StiGisMapImage](StiGisMapImage.md)>

**Parameters**

- **pos** ([StiGisPoint](StiGisPoint.md))  
- **zoom** (number)  

**Returns** Promise<[StiGisMapImage](StiGisMapImage.md)>


---

#### getTileImageUsingHttp

**getTileImageUsingHttp**(**urlStr**: string): Promise<[StiGisMapImage](StiGisMapImage.md)>

**Parameters**

- **urlStr** (string)  

**Returns** Promise<[StiGisMapImage](StiGisMapImage.md)>

