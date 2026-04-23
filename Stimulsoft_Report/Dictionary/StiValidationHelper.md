---
title: "StiValidationHelper Class"
---

## StiValidationHelper Class

**Namespace:** `Stimulsoft.Report.Dictionary`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **convertValidationDateFromString** `static` | [DateTime](../../Stimulsoft_System/DateTime.md) |  |
| **convertValidationDateToString** `static` | string |  |
| **convertValidationTimeSpanFromString** `static` | [TimeSpan](../../Stimulsoft_System/TimeSpan.md) |  |
| **convertValidationTimeSpanToString** `static` | string |  |
| **isDateTimeType** `static` | boolean |  |
| **isNumericType** `static` | boolean |  |
| **isTimeSpanType** `static` | boolean |  |
| **isValidationSupportedForType** `static` | boolean |  |
| **validateAlpha** `static` | boolean |  |
| **validateAlphaNumeric** `static` | boolean |  |
| **validateDateTimeRange** `static` | boolean |  |
| **validateEMail** `static` | boolean |  |
| **validateExpression** `static` | boolean |  |
| **validateIBAN** `static` | boolean |  |
| **validateISBN** `static` | boolean |  |
| **validateIpAddress** `static` | boolean |  |
| **validateNumeric** `static` | boolean |  |
| **validateNumericRange** `static` | boolean |  |
| **validatePhone** `static` | boolean |  |
| **validateRangeString** `static` | boolean |  |
| **validateRegexPattern** `static` | boolean |  |
| **validateSSN** `static` | boolean |  |
| **validateTIN** `static` | boolean |  |
| **validateTimeSpanRange** `static` | boolean |  |
| **validateUrl** `static` | boolean |  |

---

### Method Details

#### convertValidationDateFromString `static`

**convertValidationDateFromString**(**str**: string): [DateTime](../../Stimulsoft_System/DateTime.md)

**Parameters**

- **str** (string)  

**Returns** [DateTime](../../Stimulsoft_System/DateTime.md)


---

#### convertValidationDateToString `static`

**convertValidationDateToString**(**date**: [DateTime](../../Stimulsoft_System/DateTime.md)): string

**Parameters**

- **date** ([DateTime](../../Stimulsoft_System/DateTime.md))  

**Returns** string


---

#### convertValidationTimeSpanFromString `static`

**convertValidationTimeSpanFromString**(**str**: string): [TimeSpan](../../Stimulsoft_System/TimeSpan.md)

**Parameters**

- **str** (string)  

**Returns** [TimeSpan](../../Stimulsoft_System/TimeSpan.md)


---

#### convertValidationTimeSpanToString `static`

**convertValidationTimeSpanToString**(**timeSpan**: [TimeSpan](../../Stimulsoft_System/TimeSpan.md)): string

**Parameters**

- **timeSpan** ([TimeSpan](../../Stimulsoft_System/TimeSpan.md))  

**Returns** string


---

#### isDateTimeType `static`

**isDateTimeType**(**type**: any): boolean

**Parameters**

- **type** (any)  

**Returns** boolean


---

#### isNumericType `static`

**isNumericType**(**type**: any): boolean

**Parameters**

- **type** (any)  

**Returns** boolean


---

#### isTimeSpanType `static`

**isTimeSpanType**(**type**: any): boolean

**Parameters**

- **type** (any)  

**Returns** boolean


---

#### isValidationSupportedForType `static`

**isValidationSupportedForType**(**type**: any): boolean

**Parameters**

- **type** (any)  

**Returns** boolean


---

#### validateAlpha `static`

**validateAlpha**(**value**: string, **REFerror**: any): boolean

**Parameters**

- **value** (string)  
- **REFerror** (any)  

**Returns** boolean


---

#### validateAlphaNumeric `static`

**validateAlphaNumeric**(**value**: string, **REFerror**: any): boolean

**Parameters**

- **value** (string)  
- **REFerror** (any)  

**Returns** boolean


---

#### validateDateTimeRange `static`

**validateDateTimeRange**(**value**: any, **min**: any, **max**: any, **report**: IStiReport, **dateTimeType**: [StiDateTimeType](StiDateTimeType.md), **REFerror**: any): boolean

**Parameters**

- **value** (any)  
- **min** (any)  
- **max** (any)  
- **report** (IStiReport)  
- **dateTimeType** ([StiDateTimeType](StiDateTimeType.md))  
- **REFerror** (any)  

**Returns** boolean


---

#### validateEMail `static`

**validateEMail**(**value**: string, **REFerror**: any): boolean

**Parameters**

- **value** (string)  
- **REFerror** (any)  

**Returns** boolean


---

#### validateExpression `static`

**validateExpression**(**expression**: string, **report**: IStiReport, **REFerror**: any, **REFisException**: any): boolean

**Parameters**

- **expression** (string)  
- **report** (IStiReport)  
- **REFerror** (any)  
- **REFisException** (any)  

**Returns** boolean


---

#### validateIBAN `static`

**validateIBAN**(**value**: string, **REFerror**: any): boolean

**Parameters**

- **value** (string)  
- **REFerror** (any)  

**Returns** boolean


---

#### validateISBN `static`

**validateISBN**(**value**: string, **REFerror**: any): boolean

**Parameters**

- **value** (string)  
- **REFerror** (any)  

**Returns** boolean


---

#### validateIpAddress `static`

**validateIpAddress**(**value**: string, **REFerror**: any): boolean

**Parameters**

- **value** (string)  
- **REFerror** (any)  

**Returns** boolean


---

#### validateNumeric `static`

**validateNumeric**(**value**: string, **REFerror**: any): boolean

**Parameters**

- **value** (string)  
- **REFerror** (any)  

**Returns** boolean


---

#### validateNumericRange `static`

**validateNumericRange**(**value**: any, **min**: any, **max**: any, **report**: IStiReport, **REFerror**: any): boolean

**Parameters**

- **value** (any)  
- **min** (any)  
- **max** (any)  
- **report** (IStiReport)  
- **REFerror** (any)  

**Returns** boolean


---

#### validatePhone `static`

**validatePhone**(**value**: string, **REFerror**: any): boolean

**Parameters**

- **value** (string)  
- **REFerror** (any)  

**Returns** boolean


---

#### validateRangeString `static`

**validateRangeString**(**value**: any, **min**: any, **max**: any, **message**: string, **level**: [StiValidationLevel](StiValidationLevel.md), **report**: IStiReport, **REFresult**: any): boolean

**Parameters**

- **value** (any)  
- **min** (any)  
- **max** (any)  
- **message** (string)  
- **level** ([StiValidationLevel](StiValidationLevel.md))  
- **report** (IStiReport)  
- **REFresult** (any)  

**Returns** boolean


---

#### validateRegexPattern `static`

**validateRegexPattern**(**value**: string, **patternRegex**: string, **REFerror**: any): boolean

**Parameters**

- **value** (string)  
- **patternRegex** (string)  
- **REFerror** (any)  

**Returns** boolean


---

#### validateSSN `static`

**validateSSN**(**value**: string, **REFerror**: any): boolean

**Parameters**

- **value** (string)  
- **REFerror** (any)  

**Returns** boolean


---

#### validateTIN `static`

**validateTIN**(**value**: string, **REFerror**: any): boolean

**Parameters**

- **value** (string)  
- **REFerror** (any)  

**Returns** boolean


---

#### validateTimeSpanRange `static`

**validateTimeSpanRange**(**value**: any, **min**: any, **max**: any, **report**: IStiReport, **timeFormat**: [StiTimeFormat](../../Stimulsoft_Base/StiTimeFormat.md), **REFerror**: any): boolean

**Parameters**

- **value** (any)  
- **min** (any)  
- **max** (any)  
- **report** (IStiReport)  
- **timeFormat** ([StiTimeFormat](../../Stimulsoft_Base/StiTimeFormat.md))  
- **REFerror** (any)  

**Returns** boolean


---

#### validateUrl `static`

**validateUrl**(**value**: string, **REFerror**: any): boolean

**Parameters**

- **value** (string)  
- **REFerror** (any)  

**Returns** boolean

