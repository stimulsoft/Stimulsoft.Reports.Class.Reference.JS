---
title: "StiAbbreviationNumberFormatHelper Class"
---

## StiAbbreviationNumberFormatHelper Class

**Namespace:** `Stimulsoft.Report`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **format** `static` | string |  |
| **format2** `static` | number |  |
| **format3** `static` | number |  |
| **getPostfixes** `static` | string[] |  |
| **simpleAbbreviateNumber** `static` | string |  |

---

### Method Details

#### format `static`

**format**(**value**: number, **reportCulture**: string): string

**Parameters**

- **value** (number)  
- **reportCulture** (string)  

**Returns** string


---

#### format2 `static`

**format2**(**value**: number, **outPostfix**: any, **reportCulture**: string): number

**Parameters**

- **value** (number)  
- **outPostfix** (any)  
- **reportCulture** (string)  

**Returns** number


---

#### format3 `static`

**format3**(**value**: number, **outPostfix**: any, **decimalDigits**: any, **totalNumberCapacity**: number, **reportCulture**: string): number

**Parameters**

- **value** (number)  
- **outPostfix** (any)  
- **decimalDigits** (any)  
- **totalNumberCapacity** (number)  
- **reportCulture** (string)  

**Returns** number


---

#### getPostfixes `static`

**getPostfixes**(**reportCulture**: string): string[]

**Parameters**

- **reportCulture** (string)  

**Returns** string[]


---

#### simpleAbbreviateNumber `static`

**simpleAbbreviateNumber**(**number**: number): string

**Parameters**

- **number** (number)  

**Returns** string

