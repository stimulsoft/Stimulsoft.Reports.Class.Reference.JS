---
title: "StiChartSeriesCreator Class"
---

## StiChartSeriesCreator Class

**Namespace:** `Stimulsoft.Report.Dashboard`

This class helps in creation of new  chart series object based on specified Ident of series type.

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **neww** `static` | IStiSeries | Creates new chart series object with help of its identification type name. |
| **neww2** `static` | IStiSeries | Creates new chart series object with help of it type. |

---

### Method Details

#### neww `static`

**neww**(**typeName**: string): IStiSeries

Creates new  chart series object with help of its identification type name.

**Parameters**

- **typeName** (string) — A name of the identification type which is used for the series creation.  

**Returns** IStiSeries — Created series object.


---

#### neww2 `static`

**neww2**(**type**: [StiChartSeriesType](StiChartSeriesType.md)): IStiSeries

Creates new  chart series object with help of it type.

**Parameters**

- **type** ([StiChartSeriesType](StiChartSeriesType.md)) — An idendification type of the series.  

**Returns** IStiSeries — Created series object.

