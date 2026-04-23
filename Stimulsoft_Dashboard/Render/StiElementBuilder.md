---
title: "StiElementBuilder Class"
---

## StiElementBuilder Class

**Namespace:** `Stimulsoft.Dashboard.Render`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getNullableTarget** | void |  |
| **getNullableValue** | number |  |
| **getSeries** | string |  |
| **getSeriesKeyValues** | any[] |  |
| **getSeriesKeys** | string[] |  |
| **getSeriesKeysLimitCount** | number |  |
| **getTarget** | number |  |
| **getValue** | number |  |
| **toReadableString** | string |  |
| **toString** | string |  |

---

### Method Details

#### getNullableTarget

**getNullableTarget**(**table**: [StiDataTable](../../Stimulsoft_Data/Engine/StiDataTable.md), **targetIndex**: number, **seriesIndex**: number, **seriesCount**: number, **seriesKey**: string, **dateTimeMode**: any): void

**Parameters**

- **table** ([StiDataTable](../../Stimulsoft_Data/Engine/StiDataTable.md))  
- **targetIndex** (number)  
- **seriesIndex** (number)  
- **seriesCount** (number)  
- **seriesKey** (string)  
- **dateTimeMode** (any)  


---

#### getNullableValue

**getNullableValue**(**table**: [StiDataTable](../../Stimulsoft_Data/Engine/StiDataTable.md), **valueIndex**: number, **seriesIndex**: number, **seriesCount**: number, **seriesKey**: string): number

**Parameters**

- **table** ([StiDataTable](../../Stimulsoft_Data/Engine/StiDataTable.md))  
- **valueIndex** (number)  
- **seriesIndex** (number)  
- **seriesCount** (number)  
- **seriesKey** (string)  

**Returns** number


---

#### getSeries

**getSeries**(**table**: [StiDataTable](../../Stimulsoft_Data/Engine/StiDataTable.md), **seriesIndex**: number, **seriesKey**: any, **report**: [StiReport](../../Stimulsoft_Report/StiReport.md), **shortValue**: any): string

**Parameters**

- **table** ([StiDataTable](../../Stimulsoft_Data/Engine/StiDataTable.md))  
- **seriesIndex** (number)  
- **seriesKey** (any)  
- **report** ([StiReport](../../Stimulsoft_Report/StiReport.md))  
- **shortValue** (any)  

**Returns** string


---

#### getSeriesKeyValues

**getSeriesKeyValues**(**table**: [StiDataTable](../../Stimulsoft_Data/Engine/StiDataTable.md), **seriesIndex**: number, **count**: number): any[]

**Parameters**

- **table** ([StiDataTable](../../Stimulsoft_Data/Engine/StiDataTable.md))  
- **seriesIndex** (number)  
- **count** (number)  

**Returns** any[]


---

#### getSeriesKeys

**getSeriesKeys**(**table**: [StiDataTable](../../Stimulsoft_Data/Engine/StiDataTable.md), **seriesIndex**: number, **count**: number): string[]

**Parameters**

- **table** ([StiDataTable](../../Stimulsoft_Data/Engine/StiDataTable.md))  
- **seriesIndex** (number)  
- **count** (number)  

**Returns** string[]


---

#### getSeriesKeysLimitCount

**getSeriesKeysLimitCount**(**element**: StiElement): number

**Parameters**

- **element** (StiElement)  

**Returns** number


---

#### getTarget

**getTarget**(**table**: [StiDataTable](../../Stimulsoft_Data/Engine/StiDataTable.md), **targetIndex**: number, **seriesIndex**: number, **seriesCount**: number, **seriesKey**: string, **dateTimeMode**: any): number

**Parameters**

- **table** ([StiDataTable](../../Stimulsoft_Data/Engine/StiDataTable.md))  
- **targetIndex** (number)  
- **seriesIndex** (number)  
- **seriesCount** (number)  
- **seriesKey** (string)  
- **dateTimeMode** (any)  

**Returns** number


---

#### getValue

**getValue**(**table**: [StiDataTable](../../Stimulsoft_Data/Engine/StiDataTable.md), **valueIndex**: number, **seriesIndex**: number, **seriesCount**: number, **seriesKey**: string, **dateTimeMode**: any): number

**Parameters**

- **table** ([StiDataTable](../../Stimulsoft_Data/Engine/StiDataTable.md))  
- **valueIndex** (number)  
- **seriesIndex** (number)  
- **seriesCount** (number)  
- **seriesKey** (string)  
- **dateTimeMode** (any)  

**Returns** number


---

#### toReadableString

**toReadableString**(**value**: any, **report**: [StiReport](../../Stimulsoft_Report/StiReport.md)): string

**Parameters**

- **value** (any)  
- **report** ([StiReport](../../Stimulsoft_Report/StiReport.md))  

**Returns** string


---

#### toString

**toString**(**value**: any): string

**Parameters**

- **value** (any)  

**Returns** string


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **storedCulture** | [CultureInfo](../../Stimulsoft_System/Globalization/CultureInfo.md) |  |
