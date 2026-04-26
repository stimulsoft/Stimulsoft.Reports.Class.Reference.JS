---
title: "StiChartHelper Class"
---

## StiChartHelper Class

**Namespace:** `Stimulsoft.Report.Chart`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **checkWaterfallTotals** `static` | void |  |
| **convertStringToColor** `static` | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
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

**convertStringToColor**(**colorStr**: string): [Color](../Stimulsoft_System_Drawing/Color.md)

**Parameters**

- **colorStr** (string)  

**Returns** [Color](../Stimulsoft_System_Drawing/Color.md)


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


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **_arguments** | any |  |
| **_arguments** | any |  |
| **applyStyle** | any |  |
| **argument** | any |  |
| **argumentKeys** | any |  |
| **argumentKeys** | any |  |
| **arrayString** | any |  |
| **comparable** | any |  |
| **data** | any |  |
| **data** | any |  |
| **data** | any |  |
| **data** | any |  |
| **data** | any |  |
| **data** | any |  |
| **data** | any |  |
| **data** | any |  |
| **data** | any |  |
| **data** | any |  |
| **data** | any |  |
| **data** | any |  |
| **data** | any |  |
| **data** | any |  |
| **data** | any |  |
| **dateMax** | any |  |
| **dateMin** | any |  |
| **filterBusinessObject** | any |  |
| **filterBusinessObject** | any |  |
| **filterBusinessObject** | any |  |
| **filterSource** | any |  |
| **filterSource** | any |  |
| **filterSource** | any |  |
| **firstDate** | any |  |
| **firstIndexRealValue** | any |  |
| **firstIndexRealValue** | any |  |
| **firstValue** | any |  |
| **firstValue** | any |  |
| **firstValue** | any |  |
| **index** | any |  |
| **isNullArgument** | any |  |
| **isNullArgument** | any |  |
| **itemData** | any |  |
| **itemData** | any |  |
| **itemData** | any |  |
| **itemData** | any |  |
| **items** | any |  |
| **keys** | any |  |
| **lastIndexRealValue** | any |  |
| **lastValue** | any |  |
| **list** | any |  |
| **mainList** | any |  |
| **max** | any |  |
| **maxCountValues** | any |  |
| **maxDate** | any |  |
| **maxDate** | any |  |
| **maxValue** | any |  |
| **min** | any |  |
| **minDate** | any |  |
| **minDate** | any |  |
| **newBubbleSeries** | any |  |
| **newSeries** | any |  |
| **newSeries** | any |  |
| **prevShorterListPoints** | any |  |
| **result2** | any |  |
| **result2** | any |  |
| **result2** | any |  |
| **secondDate** | any |  |
| **shorterListPoints** | any |  |
| **shorterListPoints** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **valueClose** | any |  |
| **valueEnd** | any |  |
| **valueForDate** | any |  |
| **valueForDate** | any |  |
| **valueForDate** | any |  |
| **valueForDate** | any |  |
| **valueForDate** | any |  |
| **valueForDate** | any |  |
| **valueHigh** | any |  |
| **valueLow** | any |  |
| **valueObject** | any |  |
| **valueObject** | any |  |
| **valueObject** | any |  |
| **valueObject** | any |  |
| **valueObject** | any |  |
| **valueObject** | any |  |
| **valueObject** | any |  |
| **valueObject** | any |  |
| **valueObject** | any |  |
| **valueObject** | any |  |
| **valueObject** | any |  |
| **valueObject** | any |  |
| **valueOpen** | any |  |
| **values** | any |  |
| **values** | any |  |
| **values** | any |  |
| **values** | any |  |
| **values** | any |  |
| **values** | any |  |
| **values** | any |  |
| **values** | any |  |
| **values** | any |  |
| **values** | any |  |
| **values** | any |  |
| **values** | any |  |
| **values** | any |  |
| **values** | any |  |
| **values** | any |  |
| **values** | any |  |
| **values** | any |  |
| **values** | any |  |
| **values** | any |  |
| **values** | any |  |
| **weight** | any |  |
| **xValue** | any |  |
| **xValues** | any |  |
| **xValues** | any |  |
| **yValue** | any |  |
| **yValues** | any |  |
| **yValues** | any |  |
