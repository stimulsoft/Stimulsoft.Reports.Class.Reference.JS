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
| **getGeomBrush** | [Brush](../../Stimulsoft_System/Drawing/Brush.md) |  |
| **getValues** | any[] |  |
| **parseHexColor** | [Color](../../Stimulsoft_System/Drawing/Color.md) |  |
| **prepareDataColumns** | void |  |
| **updateGroupedData** | void |  |
| **updateHeatmapWithGroup** | void |  |

---

### Method Details

#### getGeomBrush

**getGeomBrush**(**data**: [StiMapData](../Maps/StiMapData.md), **is3D**: any): [Brush](../../Stimulsoft_System/Drawing/Brush.md)

**Parameters**

- **data** ([StiMapData](../Maps/StiMapData.md))  
- **is3D** (any)  

**Returns** [Brush](../../Stimulsoft_System/Drawing/Brush.md)


---

#### getValues

**getValues**(**meter**: IStiMeter): any[]

**Parameters**

- **meter** (IStiMeter)  

**Returns** any[]


---

#### parseHexColor

**parseHexColor**(**color**: string): [Color](../../Stimulsoft_System/Drawing/Color.md)

**Parameters**

- **color** (string)  

**Returns** [Color](../../Stimulsoft_System/Drawing/Color.md)


---

#### prepareDataColumns

**prepareDataColumns**(): void


---

#### updateGroupedData

**updateGroupedData**(): void


---

#### updateHeatmapWithGroup

**updateHeatmapWithGroup**(): void

