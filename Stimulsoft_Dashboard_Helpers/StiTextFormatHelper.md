---
title: "StiTextFormatHelper Class"
---

## StiTextFormatHelper Class

**Namespace:** `Stimulsoft.Dashboard.Helpers`

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **defaultBooleanFormat** `static` | StiBooleanFormatService |  |
| **defaultCurrencyFormat** `static` | StiCurrencyFormatService |  |
| **defaultDateFormat** `static` | StiDateFormatService |  |
| **defaultGeneralFormat** `static` | StiGeneralFormatService |  |
| **defaultIntegerFormat** `static` | StiNumberFormatService |  |
| **defaultNumberFormat** `static` | StiNumberFormatService |  |
| **defaultPercentageFormat** `static` | StiPercentageFormatService |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **format** `static` | string |  |
| **formatAsPercentage** `static` | string |  |
| **formatAsPercentage2** `static` | string |  |
| **formatBasedOnColumnType** `static` | string |  |
| **formatBasedOnColumnType2** `static` | string |  |
| **getDefaultFormatForColumn** `static` | StiFormatService |  |

---

### Method Details

#### format `static`

**format**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **format**: StiFormatService, **value**: any): string

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **format** (StiFormatService)  
- **value** (any)  

**Returns** string


---

#### formatAsPercentage `static`

**formatAsPercentage**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **value**: any): string

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **value** (any)  

**Returns** string


---

#### formatAsPercentage2 `static`

**formatAsPercentage2**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **format**: StiFormatService, **value**: any): string

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **format** (StiFormatService)  
- **value** (any)  

**Returns** string


---

#### formatBasedOnColumnType `static`

**formatBasedOnColumnType**(**component**: StiComponent, **column**: StiTableColumn, **value**: any): string

**Parameters**

- **component** (StiComponent)  
- **column** (StiTableColumn)  
- **value** (any)  

**Returns** string


---

#### formatBasedOnColumnType2 `static`

**formatBasedOnColumnType2**(**component**: StiComponent, **formatService**: StiFormatService, **column**: IStiMeter, **value**: any): string

**Parameters**

- **component** (StiComponent)  
- **formatService** (StiFormatService)  
- **column** (IStiMeter)  
- **value** (any)  

**Returns** string


---

#### getDefaultFormatForColumn `static`

**getDefaultFormatForColumn**(**cell**: IStiAppDataCell): StiFormatService

**Parameters**

- **cell** (IStiAppDataCell)  

**Returns** StiFormatService


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **cacheValue** | any |  |
