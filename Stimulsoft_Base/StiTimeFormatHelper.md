---
title: "StiTimeFormatHelper Class"
---

## StiTimeFormatHelper Class

**Namespace:** `Stimulsoft.Base`

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **isUSADateTimeFormat** `static` | boolean |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **convertStringToTimeFormat** `static` | [StiTimeFormat](StiTimeFormat.md) |  |
| **convertTimeFormatToLocal** `static` | string |  |
| **convertTimeFormatToString** `static` | string |  |
| **getDateFormat** `static` | string |  |
| **getSeparator** `static` | string |  |
| **getTimeFormats** `static` | string[] |  |
| **getTimeOnlyFormats** `static` | string[] |  |
| **getTimeSpanFormats** `static` | string[] |  |

---

### Method Details

#### convertStringToTimeFormat `static`

**convertStringToTimeFormat**(**value**: string): [StiTimeFormat](StiTimeFormat.md)

**Parameters**

- **value** (string)  

**Returns** [StiTimeFormat](StiTimeFormat.md)


---

#### convertTimeFormatToLocal `static`

**convertTimeFormatToLocal**(**mask**: string): string

**Parameters**

- **mask** (string)  

**Returns** string


---

#### convertTimeFormatToString `static`

**convertTimeFormatToString**(**timeFormat**: [StiTimeFormat](StiTimeFormat.md)): string

**Parameters**

- **timeFormat** ([StiTimeFormat](StiTimeFormat.md))  

**Returns** string


---

#### getDateFormat `static`

**getDateFormat**(): string

**Returns** string


---

#### getSeparator `static`

**getSeparator**(): string

**Returns** string


---

#### getTimeFormats `static`

**getTimeFormats**(): string[]

**Returns** string[]


---

#### getTimeOnlyFormats `static`

**getTimeOnlyFormats**(): string[]

**Returns** string[]


---

#### getTimeSpanFormats `static`

**getTimeSpanFormats**(): string[]

**Returns** string[]


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **mask** | any |  |
