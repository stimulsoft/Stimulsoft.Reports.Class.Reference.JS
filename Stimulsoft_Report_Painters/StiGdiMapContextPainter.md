---
title: "StiGdiMapContextPainter Class"
---

## StiGdiMapContextPainter Class

**Namespace:** `Stimulsoft.Report.Painters`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(StiMap map) |  |

**constructor**(**map**: StiMap)

**Parameters**

- **map** (StiMap)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getGeomBrush** | [Brush](../Stimulsoft_System_Drawing/Brush.md) |  |
| **getValues** | any[] |  |
| **parseHexColor** | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **prepareDataColumns** | void |  |
| **updateGroupedData** | void |  |
| **updateHeatmapWithGroup** | void |  |

---

### Method Details

#### getGeomBrush

**getGeomBrush**(**data**: [StiMapData](../Stimulsoft_Report_Maps/StiMapData.md), **is3D**: any): [Brush](../Stimulsoft_System_Drawing/Brush.md)

**Parameters**

- **data** ([StiMapData](../Stimulsoft_Report_Maps/StiMapData.md))  
- **is3D** (any)  

**Returns** [Brush](../Stimulsoft_System_Drawing/Brush.md)


---

#### getValues

**getValues**(**meter**: IStiMeter): any[]

**Parameters**

- **meter** (IStiMeter)  

**Returns** any[]


---

#### parseHexColor

**parseHexColor**(**color**: string): [Color](../Stimulsoft_System_Drawing/Color.md)

**Parameters**

- **color** (string)  

**Returns** [Color](../Stimulsoft_System_Drawing/Color.md)


---

#### prepareDataColumns

**prepareDataColumns**(): void


---

#### updateGroupedData

**updateGroupedData**(): void


---

#### updateHeatmapWithGroup

**updateHeatmapWithGroup**(): void


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **allowColor** | any |  |
| **allowColor** | any |  |
| **allowColor** | any |  |
| **allowGroup** | any |  |
| **allowGroup** | any |  |
| **cacheName** | any |  |
| **colorValues** | any |  |
| **colorValues** | any |  |
| **colorsContainer** | [StiStyleColorsContainer](StiStyleColorsContainer.md) |  |
| **dataTable** | [StiDataTable](../Stimulsoft_Data_Engine/StiDataTable.md) |  |
| **defaultBrush** | SolidBrush |  |
| **defaultBrush1** | StiSolidBrush |  |
| **dontConnectToData** | any |  |
| **group** | any |  |
| **group** | any |  |
| **groupValues** | any |  |
| **groupValues** | any |  |
| **hashGroup** | any |  |
| **heatmapInfo** | [HeatmapInfo](HeatmapInfo.md) |  |
| **heatmapWithGroupInfo** | [HeatmapWithGroupInfo](HeatmapWithGroupInfo.md) |  |
| **individualStep** | any |  |
| **key** | any |  |
| **key** | any |  |
| **key** | any |  |
| **key** | any |  |
| **keyValues** | any |  |
| **keyValues** | any |  |
| **keyValues** | any |  |
| **map** | StiMap |  |
| **mapData** | [StiMapData](../Stimulsoft_Report_Maps/StiMapData.md)[] |  |
| **mapStyle** | StiMapStyle |  |
| **min** | any |  |
| **min** | any |  |
| **min** | any |  |
| **min** | any |  |
| **min** | any |  |
| **min** | any |  |
| **min** | any |  |
| **min** | any |  |
| **min** | any |  |
| **min** | any |  |
| **nameValues** | any |  |
| **nameValues** | any |  |
| **noneInfo** | [NoneInfo](NoneInfo.md) |  |
| **resColor** | any |  |
| **resColor** | any |  |
| **resColor** | any |  |
| **resColor** | any |  |
| **resColor** | any |  |
| **resColor** | any |  |
| **resColor** | any |  |
| **value** | any |  |
| **valueValues** | any |  |
| **valueValues** | any |  |
