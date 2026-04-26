---
title: "StiGisPointMapGeometry Class"
---

## StiGisPointMapGeometry Class

**Namespace:** `Stimulsoft.Report.Maps.Gis`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(StiGisPointLatLng \| { lat: number point, number } lng) |  |

**constructor**(**point**: StiGisPointLatLng \| { lat: number, **lng**: number })

**Parameters**

- **point** (StiGisPointLatLng \| { lat: number)  
- **lng** (number })  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **contains** | boolean |  |
| **draw** | string |  |
| **getAllPoints** | void |  |
| **setDescription** | void |  |
| **updateLocalPosition** | void |  |

---

### Method Details

#### contains

**contains**(**pos**: [Point](../Stimulsoft_System_Drawing/Point.md)): boolean

**Parameters**

- **pos** ([Point](../Stimulsoft_System_Drawing/Point.md))  

**Returns** boolean


---

#### draw

**draw**(**core**: [StiGisCore](StiGisCore.md)): string

**Parameters**

- **core** ([StiGisCore](StiGisCore.md))  

**Returns** string


---

#### getAllPoints

**getAllPoints**(**points**: any): void

**Parameters**

- **points** (any)  


---

#### setDescription

**setDescription**(**text**: string): void

**Parameters**

- **text** (string)  


---

#### updateLocalPosition

**updateLocalPosition**(**core**: [StiGisCore](StiGisCore.md)): void

**Parameters**

- **core** ([StiGisCore](StiGisCore.md))  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **showPlacemark** | boolean |  |
| **text** | string |  |
