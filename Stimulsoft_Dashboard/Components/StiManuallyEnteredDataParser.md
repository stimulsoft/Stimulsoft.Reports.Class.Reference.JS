---
title: "StiManuallyEnteredDataParser Class"
---

## StiManuallyEnteredDataParser Class

**Namespace:** `Stimulsoft.Dashboard.Components`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getChartDataTable** `static` | [StiDataTable](../../Stimulsoft_Data/Engine/StiDataTable.md) |  |
| **getGaugeDataTable** `static` | void |  |
| **getIndicatorDataTable** `static` | [StiDataTable](../../Stimulsoft_Data/Engine/StiDataTable.md) |  |
| **getProgressDataTable** `static` | [StiDataTable](../../Stimulsoft_Data/Engine/StiDataTable.md) |  |
| **parseString** `static` | string |  |
| **sumNullable** `static` | number |  |

---

### Method Details

#### getChartDataTable `static`

**getChartDataTable**(**content**: string, **element**: IStiElement): [StiDataTable](../../Stimulsoft_Data/Engine/StiDataTable.md)

**Parameters**

- **content** (string)  
- **element** (IStiElement)  

**Returns** [StiDataTable](../../Stimulsoft_Data/Engine/StiDataTable.md)


---

#### getGaugeDataTable `static`

**getGaugeDataTable**(**content**: string, **dateTimeMode**: boolean, **element**: IStiElement): void

**Parameters**

- **content** (string)  
- **dateTimeMode** (boolean)  
- **element** (IStiElement)  


---

#### getIndicatorDataTable `static`

**getIndicatorDataTable**(**content**: string, **element**: IStiElement): [StiDataTable](../../Stimulsoft_Data/Engine/StiDataTable.md)

**Parameters**

- **content** (string)  
- **element** (IStiElement)  

**Returns** [StiDataTable](../../Stimulsoft_Data/Engine/StiDataTable.md)


---

#### getProgressDataTable `static`

**getProgressDataTable**(**content**: string, **element**: IStiElement): [StiDataTable](../../Stimulsoft_Data/Engine/StiDataTable.md)

**Parameters**

- **content** (string)  
- **element** (IStiElement)  

**Returns** [StiDataTable](../../Stimulsoft_Data/Engine/StiDataTable.md)


---

#### parseString `static`

**parseString**(**value**: any, **element**: IStiElement): string

**Parameters**

- **value** (any)  
- **element** (IStiElement)  

**Returns** string


---

#### sumNullable `static`

**sumNullable**(**values**: number[]): number

**Parameters**

- **values** (number[])  

**Returns** number

