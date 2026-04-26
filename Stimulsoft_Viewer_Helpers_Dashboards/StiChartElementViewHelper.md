---
title: "StiChartElementViewHelper Class"
---

## StiChartElementViewHelper Class

**Namespace:** `Stimulsoft.Viewer.Helpers.Dashboards`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **changeChartElementViewState** `static` | Promise<KeyObjectType> |  |
| **getArgumentColumnPath** `static` | string |  |
| **getArguments** `static` | string[] |  |
| **getBubleXColumnPath** `static` | string |  |
| **getBubleYColumnPath** `static` | string |  |
| **getChartAnimationsFromCache** `static` | any |  |
| **getChartValuesFromCache** `static` | any |  |
| **getHeatmapXColumnPath** `static` | string |  |
| **getHeatmapYColumnPath** `static` | string |  |
| **getSeriesColumnPath** `static` | string |  |
| **getSeriesValues** `static` | number[][] |  |
| **getUserViewStates** `static` | any[] |  |
| **isBubble** `static` | boolean |  |
| **isHeatmap** `static` | boolean |  |
| **saveChartAnimationsToCache** `static` | void |  |
| **saveChartValuesToCache** `static` | void |  |

---

### Method Details

#### changeChartElementViewState `static`

**changeChartElementViewState**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **requestParams**: any): Promise<KeyObjectType>

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **requestParams** (any)  

**Returns** Promise<KeyObjectType>


---

#### getArgumentColumnPath `static`

**getArgumentColumnPath**(**chartElement**: IStiChartElement): string

**Parameters**

- **chartElement** (IStiChartElement)  

**Returns** string


---

#### getArguments `static`

**getArguments**(**chartElement**: IStiChartElement): string[]

**Parameters**

- **chartElement** (IStiChartElement)  

**Returns** string[]


---

#### getBubleXColumnPath `static`

**getBubleXColumnPath**(**chartElement**: IStiChartElement): string

**Parameters**

- **chartElement** (IStiChartElement)  

**Returns** string


---

#### getBubleYColumnPath `static`

**getBubleYColumnPath**(**chartElement**: IStiChartElement): string

**Parameters**

- **chartElement** (IStiChartElement)  

**Returns** string


---

#### getChartAnimationsFromCache `static`

**getChartAnimationsFromCache**(**element**: IStiChartElement): any

**Parameters**

- **element** (IStiChartElement)  

**Returns** any


---

#### getChartValuesFromCache `static`

**getChartValuesFromCache**(**cacheGuid**: string, **requestParams**: any): any

**Parameters**

- **cacheGuid** (string)  
- **requestParams** (any)  

**Returns** any


---

#### getHeatmapXColumnPath `static`

**getHeatmapXColumnPath**(**chartElement**: IStiChartElement): string

**Parameters**

- **chartElement** (IStiChartElement)  

**Returns** string


---

#### getHeatmapYColumnPath `static`

**getHeatmapYColumnPath**(**chartElement**: IStiChartElement): string

**Parameters**

- **chartElement** (IStiChartElement)  

**Returns** string


---

#### getSeriesColumnPath `static`

**getSeriesColumnPath**(**chartElement**: IStiChartElement): string

**Parameters**

- **chartElement** (IStiChartElement)  

**Returns** string


---

#### getSeriesValues `static`

**getSeriesValues**(**chart**: IStiChart): number[][]

**Parameters**

- **chart** (IStiChart)  

**Returns** number[][]


---

#### getUserViewStates `static`

**getUserViewStates**(**chartElement**: IStiChartElement): any[]

**Parameters**

- **chartElement** (IStiChartElement)  

**Returns** any[]


---

#### isBubble `static`

**isBubble**(**chartElement**: IStiChartElement): boolean

**Parameters**

- **chartElement** (IStiChartElement)  

**Returns** boolean


---

#### isHeatmap `static`

**isHeatmap**(**chartElement**: IStiChartElement): boolean

**Parameters**

- **chartElement** (IStiChartElement)  

**Returns** boolean


---

#### saveChartAnimationsToCache `static`

**saveChartAnimationsToCache**(**element**: IStiChartElement, **page**: StiPage): void

**Parameters**

- **element** (IStiChartElement)  
- **page** (StiPage)  


---

#### saveChartValuesToCache `static`

**saveChartValuesToCache**(**cacheGuid**: string, **page**: StiPage, **requestParams**: any): void

**Parameters**

- **cacheGuid** (string)  
- **page** (StiPage)  
- **requestParams** (any)  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **expression** | any |  |
| **expression** | any |  |
| **expression** | any |  |
| **expression** | any |  |
| **expression** | any |  |
| **expression** | any |  |
| **expression** | any |  |
