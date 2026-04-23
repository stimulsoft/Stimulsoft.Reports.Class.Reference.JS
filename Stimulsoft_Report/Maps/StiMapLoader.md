---
title: "StiMapLoader Class"
---

## StiMapLoader Class

**Namespace:** `Stimulsoft.Report.Maps`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **deleteAllCustomMaps** `static` | void |  |
| **getGeomsObject** `static` | [StiMapGeomsContainer](../Stimulsoft/Base/Maps/Geoms/StiMapGeomsContainer.md) |  |
| **loadResource** `static` | [StiMapSvgContainer](StiMapSvgContainer.md) |  |
| **parsePath** `static` | [StiMapGeom](../Stimulsoft/Base/Maps/Geoms/StiMapGeom.md)[] |  |

---

### Method Details

#### deleteAllCustomMaps `static`

**deleteAllCustomMaps**(): void


---

#### getGeomsObject `static`

**getGeomsObject**(**report**: [StiReport](../StiReport.md), **resourceName**: string, **lang**: string): [StiMapGeomsContainer](../Stimulsoft/Base/Maps/Geoms/StiMapGeomsContainer.md)

**Parameters**

- **report** ([StiReport](../StiReport.md))  
- **resourceName** (string)  
- **lang** (string)  

**Returns** [StiMapGeomsContainer](../Stimulsoft/Base/Maps/Geoms/StiMapGeomsContainer.md)


---

#### loadResource `static`

**loadResource**(**report**: [StiReport](../StiReport.md), **resourceName**: string, **lang**: string): [StiMapSvgContainer](StiMapSvgContainer.md)

**Parameters**

- **report** ([StiReport](../StiReport.md))  
- **resourceName** (string)  
- **lang** (string)  

**Returns** [StiMapSvgContainer](StiMapSvgContainer.md)


---

#### parsePath `static`

**parsePath**(**text**: string): [StiMapGeom](../Stimulsoft/Base/Maps/Geoms/StiMapGeom.md)[]

**Parameters**

- **text** (string)  

**Returns** [StiMapGeom](../Stimulsoft/Base/Maps/Geoms/StiMapGeom.md)[]

