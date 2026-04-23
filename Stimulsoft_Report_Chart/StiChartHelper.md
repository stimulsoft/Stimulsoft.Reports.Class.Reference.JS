---
title: "StiChartHelper Class"
---

## StiChartHelper Class

**Namespace:** `Stimulsoft.Report.Chart`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **checkWaterfallTotals** `static` | void |  |
| **convertStringToColor** `static` | [Color](../Stimulsoft_System/Drawing/Color.md) |  |
| **createChart** `static` | void |  |
| **fillSeriesData** `static` | void |  |
| **getAnimationCompatibilitySeries** `static` | boolean |  |
| **getFilterData** `static` | any |  |
| **getFilterResult** `static` | boolean |  |
| **getShorterListPoints** `static` | PointD[] |  |
| **listValues** | void |  |
| **valuesEnd** | void |  |

---

### Method Details

#### checkWaterfallTotals `static`

**checkWaterfallTotals**(**chart**: IStiChart): void

**Parameters**

- **chart** (IStiChart)  


---

#### convertStringToColor `static`

**convertStringToColor**(**colorStr**: string): [Color](../Stimulsoft_System/Drawing/Color.md)

**Parameters**

- **colorStr** (string)  

**Returns** [Color](../Stimulsoft_System/Drawing/Color.md)


---

#### createChart `static`

**createChart**(**masterChart**: StiChart, **chartComp**: StiChart): void

**Parameters**

- **masterChart** (StiChart)  
- **chartComp** (StiChart)  


---

#### fillSeriesData `static`

**fillSeriesData**(**series**: StiSeries, **items**: [StiDataItem](StiDataItem.md)[]): void

**Parameters**

- **series** (StiSeries)  
- **items** ([StiDataItem](StiDataItem.md)[])  


---

#### getAnimationCompatibilitySeries `static`

**getAnimationCompatibilitySeries**(**series1**: IStiSeries, **series2**: IStiSeries): boolean

**Parameters**

- **series1** (IStiSeries)  
- **series2** (IStiSeries)  

**Returns** boolean


---

#### getFilterData `static`

**getFilterData**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **filter**: [StiChartFilter](StiChartFilter.md), **filterMethodName**: string): any

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **filter** ([StiChartFilter](StiChartFilter.md))  
- **filterMethodName** (string)  

**Returns** any


---

#### getFilterResult `static`

**getFilterResult**(**filter**: [StiChartFilter](StiChartFilter.md), **itemArgument**: any, **itemValue**: any, **itemValueEnd**: any, **itemValueOpen**: any, **itemValueClose**: any, **itemValueLow**: any, **itemValueHigh**: any, **data**: any): boolean

**Parameters**

- **filter** ([StiChartFilter](StiChartFilter.md))  
- **itemArgument** (any)  
- **itemValue** (any)  
- **itemValueEnd** (any)  
- **itemValueOpen** (any)  
- **itemValueClose** (any)  
- **itemValueLow** (any)  
- **itemValueHigh** (any)  
- **data** (any)  

**Returns** boolean


---

#### getShorterListPoints `static`

**getShorterListPoints**(**series**: StiSeries): PointD[]

**Parameters**

- **series** (StiSeries)  

**Returns** PointD[]


---

#### listValues

**listValues**(**masterChart**: any, **eg**: any, **series**: any): void

**Parameters**

- **masterChart** (any)  
- **eg** (any)  
- **series** (any)  


---

#### valuesEnd

**valuesEnd**(**masterChart**: any, **eeg**: any, **series**: any): void

**Parameters**

- **masterChart** (any)  
- **eeg** (any)  
- **series** (any)  

