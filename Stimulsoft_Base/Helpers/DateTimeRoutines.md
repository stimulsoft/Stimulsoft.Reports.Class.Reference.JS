---
title: "DateTimeRoutines Class"
---

## DateTimeRoutines Class

**Namespace:** `Stimulsoft.Base.Helpers`

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **defaultDate** `static` | [DateTime](../../Stimulsoft_System/DateTime.md) |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **tryParseDate2** `static` | boolean |  |
| **tryParseDateOrTime2** `static` | boolean |  |
| **tryParseDateTime** `static` | boolean |  |
| **tryParseDateTime2** `static` | boolean |  |
| **tryParseTime2** `static` | boolean |  |

---

### Method Details

#### tryParseDate2 `static`

**tryParseDate2**(**str**: string, **defaultFormat**: [DateTimeFormat](DateTimeFormat.md), **refParsedDate**: { ref: ParsedDateTime }): boolean

**Parameters**

- **str** (string)  
- **defaultFormat** ([DateTimeFormat](DateTimeFormat.md))  
- **refParsedDate** ({ ref: ParsedDateTime })  

**Returns** boolean


---

#### tryParseDateOrTime2 `static`

**tryParseDateOrTime2**(**str**: string, **defaultFormat**: [DateTimeFormat](DateTimeFormat.md), **refParsedDateTime**: { ref: ParsedDateTime }): boolean

**Parameters**

- **str** (string)  
- **defaultFormat** ([DateTimeFormat](DateTimeFormat.md))  
- **refParsedDateTime** ({ ref: ParsedDateTime })  

**Returns** boolean


---

#### tryParseDateTime `static`

**tryParseDateTime**(**str**: string, **defaultFormat**: [DateTimeFormat](DateTimeFormat.md), **refDateTime**: { ref: DateTime }): boolean

**Parameters**

- **str** (string)  
- **defaultFormat** ([DateTimeFormat](DateTimeFormat.md))  
- **refDateTime** ({ ref: DateTime })  

**Returns** boolean


---

#### tryParseDateTime2 `static`

**tryParseDateTime2**(**str**: string, **defaultFormat**: [DateTimeFormat](DateTimeFormat.md), **refParsedDateTime**: { ref: ParsedDateTime }): boolean

**Parameters**

- **str** (string)  
- **defaultFormat** ([DateTimeFormat](DateTimeFormat.md))  
- **refParsedDateTime** ({ ref: ParsedDateTime })  

**Returns** boolean


---

#### tryParseTime2 `static`

**tryParseTime2**(**str**: string, **defaultFormat**: [DateTimeFormat](DateTimeFormat.md), **refParsedTime**: { ref: ParsedDateTime }, **parsedDate**: [ParsedDateTime](ParsedDateTime.md)): boolean

**Parameters**

- **str** (string)  
- **defaultFormat** ([DateTimeFormat](DateTimeFormat.md))  
- **refParsedTime** ({ ref: ParsedDateTime })  
- **parsedDate** ([ParsedDateTime](ParsedDateTime.md))  

**Returns** boolean

