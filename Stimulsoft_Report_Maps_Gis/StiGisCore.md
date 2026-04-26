---
title: "StiGisCore Class"
---

## StiGisCore Class

**Namespace:** `Stimulsoft.Report.Maps.Gis`

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **zoom** | number |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **cancelAsyncTasks** | void |  |
| **close** | void |  |
| **dispose** | void |  |
| **fromLatLngToLocal** | [StiGisPoint](StiGisPoint.md) |  |
| **fromLocalToLatLng** | [StiGisPointLatLng](StiGisPointLatLng.md) |  |
| **getIconColorGdi** | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **getImageFrom** | Promise<[StiGisMapImage](StiGisMapImage.md)> |  |
| **getMaxZoomToFitRect** | number |  |
| **getPosition** | [StiGisPointLatLng](StiGisPointLatLng.md) |  |
| **getProvider** | [StiOpenStreetMapProvider](StiOpenStreetMapProvider.md) |  |
| **getViewArea** | [StiGisRectLatLng](StiGisRectLatLng.md) |  |
| **goToCurrentPositionOnZoom** | void |  |
| **initGeometryColor** | void |  |
| **onMapSizeChanged** | void |  |
| **reloadMap** | void |  |
| **setPosition** | void |  |
| **setProvider** | void |  |
| **setZoomToFitRect** | void |  |

---

### Method Details

#### cancelAsyncTasks

**cancelAsyncTasks**(): void


---

#### close

**close**(): void


---

#### dispose

**dispose**(**disposing**: boolean): void

**Parameters**

- **disposing** (boolean)  


---

#### fromLatLngToLocal

**fromLatLngToLocal**(**latlng**: [StiGisPointLatLng](StiGisPointLatLng.md)): [StiGisPoint](StiGisPoint.md)

**Parameters**

- **latlng** ([StiGisPointLatLng](StiGisPointLatLng.md))  

**Returns** [StiGisPoint](StiGisPoint.md)


---

#### fromLocalToLatLng

**fromLocalToLatLng**(**x**: number, **y**: number): [StiGisPointLatLng](StiGisPointLatLng.md)

**Parameters**

- **x** (number)  
- **y** (number)  

**Returns** [StiGisPointLatLng](StiGisPointLatLng.md)


---

#### getIconColorGdi

**getIconColorGdi**(): [Color](../Stimulsoft_System_Drawing/Color.md)

**Returns** [Color](../Stimulsoft_System_Drawing/Color.md)


---

#### getImageFrom

**getImageFrom**(**provider**: [StiOpenStreetMapProvider](StiOpenStreetMapProvider.md), **pos**: [StiGisPoint](StiGisPoint.md), **zoom**: number): Promise<[StiGisMapImage](StiGisMapImage.md)>

**Parameters**

- **provider** ([StiOpenStreetMapProvider](StiOpenStreetMapProvider.md))  
- **pos** ([StiGisPoint](StiGisPoint.md))  
- **zoom** (number)  

**Returns** Promise<[StiGisMapImage](StiGisMapImage.md)>


---

#### getMaxZoomToFitRect

**getMaxZoomToFitRect**(**rect**: [StiGisRectLatLng](StiGisRectLatLng.md)): number

**Parameters**

- **rect** ([StiGisRectLatLng](StiGisRectLatLng.md))  

**Returns** number


---

#### getPosition

**getPosition**(): [StiGisPointLatLng](StiGisPointLatLng.md)

**Returns** [StiGisPointLatLng](StiGisPointLatLng.md)


---

#### getProvider

**getProvider**(): [StiOpenStreetMapProvider](StiOpenStreetMapProvider.md)

**Returns** [StiOpenStreetMapProvider](StiOpenStreetMapProvider.md)


---

#### getViewArea

**getViewArea**(): [StiGisRectLatLng](StiGisRectLatLng.md)

**Returns** [StiGisRectLatLng](StiGisRectLatLng.md)


---

#### goToCurrentPositionOnZoom

**goToCurrentPositionOnZoom**(): void


---

#### initGeometryColor

**initGeometryColor**(**color**: [Color](../Stimulsoft_System_Drawing/Color.md), **lineSize**: number): void

**Parameters**

- **color** ([Color](../Stimulsoft_System_Drawing/Color.md))  
- **lineSize** (number)  


---

#### onMapSizeChanged

**onMapSizeChanged**(**width**: number, **height**: number): void

**Parameters**

- **width** (number)  
- **height** (number)  


---

#### reloadMap

**reloadMap**(): void


---

#### setPosition

**setPosition**(**value**: [StiGisPointLatLng](StiGisPointLatLng.md)): void

**Parameters**

- **value** ([StiGisPointLatLng](StiGisPointLatLng.md))  


---

#### setProvider

**setProvider**(**value**: [StiOpenStreetMapProvider](StiOpenStreetMapProvider.md)): void

**Parameters**

- **value** ([StiOpenStreetMapProvider](StiOpenStreetMapProvider.md))  


---

#### setZoomToFitRect

**setZoomToFitRect**(**rect**: [StiGisRectLatLng](StiGisRectLatLng.md)): void

**Parameters**

- **rect** ([StiGisRectLatLng](StiGisRectLatLng.md))  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **allowLocalCache** | boolean |  |
| **centerTileXYLocation** | any |  |
| **centerTileXYLocationLast** | any |  |
| **compensationOffset** | any |  |
| **geometryColor** | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **geometryLineSize** | number |  |
| **height** | number |  |
| **icon** | [StiFontIcons](../Stimulsoft_Report_Helpers/StiFontIcons.md) |  |
| **iconColor** | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **isStarted** | boolean |  |
| **languageStr** | any |  |
| **levelsKeepInMemmory** | any |  |
| **matrix** | [StiGisTileMatrix](StiGisTileMatrix.md) |  |
| **maxOfTiles** | any |  |
| **maxZoom** | any |  |
| **minOfTiles** | any |  |
| **mouseWheelZooming** | boolean |  |
| **okZoom** | any |  |
| **position** | any |  |
| **positionPixel** | any |  |
| **provider** | [StiOpenStreetMapProvider](StiOpenStreetMapProvider.md) |  |
| **renderOffset** | any |  |
| **sizeOfMapArea** | any |  |
| **skipOverZoom** | any |  |
| **tileDrawingList** | [StiGisDrawTile](StiGisDrawTile.md)[] |  |
| **tileRect** | [StiGisRect](StiGisRect.md) |  |
| **updatingBounds** | boolean |  |
| **width** | number |  |
| **zoom** | any |  |
| **zoom** | any |  |
| **zoomToArea** | any |  |
