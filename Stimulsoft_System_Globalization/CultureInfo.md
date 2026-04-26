---
title: "CultureInfo Class"
---

## CultureInfo Class

**Namespace:** `Stimulsoft.System.Globalization`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(string name, [NumberFormatInfo](NumberFormatInfo.md) numberFormat, [DateTimeFormatInfo](DateTimeFormatInfo.md) dateTimeFormat, [TextInfo](TextInfo.md) textInfo, string displayName) |  |

**constructor**(**name**: string, **numberFormat**: [NumberFormatInfo](NumberFormatInfo.md), **dateTimeFormat**: [DateTimeFormatInfo](DateTimeFormatInfo.md), **textInfo**: [TextInfo](TextInfo.md), **displayName**: string)

**Parameters**

- **name** (string)  
- **numberFormat** ([NumberFormatInfo](NumberFormatInfo.md))  
- **dateTimeFormat** ([DateTimeFormatInfo](DateTimeFormatInfo.md))  
- **textInfo** ([TextInfo](TextInfo.md))  
- **displayName** (string)  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **cultures** `static` |  |  |
| **currentCulture** `static` | [CultureInfo](CultureInfo.md) |  |
| **ivariantCulture** `static` | [CultureInfo](CultureInfo.md) |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getCultureInfo** `static` | [CultureInfo](CultureInfo.md) |  |

---

### Method Details

#### getCultureInfo `static`

**getCultureInfo**(**name**: string): [CultureInfo](CultureInfo.md)

**Parameters**

- **name** (string)  

**Returns** [CultureInfo](CultureInfo.md)


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **culture** | any |  |
| **dateTimeFormat** | [DateTimeFormatInfo](DateTimeFormatInfo.md) |  |
| **formats** |  |  |
| **meridiem** |  |  |
| **name** | string |  |
| **name** | any |  |
| **numberFormat** | [NumberFormatInfo](NumberFormatInfo.md) |  |
| **textInfo** | [TextInfo](TextInfo.md) |  |
