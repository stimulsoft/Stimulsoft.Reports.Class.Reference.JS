---
title: "Ua Class"
---

## Ua Class

**Namespace:** `Stimulsoft.Report.Func`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **currToStr** `static` | string |  |
| **dateToStr** `static` | string |  |
| **decline** `static` | string |  |
| **decline2** `static` | string |  |
| **numToStr** `static` | string |  |
| **registerCurrency** `static` | void |  |

---

### Method Details

#### currToStr `static`

**currToStr**(**value**: number, **uppercase**: any, **currency**: any, **cents**: any): string

**Parameters**

- **value** (number)  
- **uppercase** (any)  
- **currency** (any)  
- **cents** (any)  

**Returns** string


---

#### dateToStr `static`

**dateToStr**(**date**: [DateTime](../../Stimulsoft_System/DateTime.md), **uppercase**: any): string

**Parameters**

- **date** ([DateTime](../../Stimulsoft_System/DateTime.md))  
- **uppercase** (any)  

**Returns** string


---

#### decline `static`

**decline**(**value**: number, **currency**: string, **cents**: any): string

**Parameters**

- **value** (number)  
- **currency** (string)  
- **cents** (any)  

**Returns** string


---

#### decline2 `static`

**decline2**(**value**: number, **one**: string, **two**: string, **five**: string): string

**Parameters**

- **value** (number)  
- **one** (string)  
- **two** (string)  
- **five** (string)  

**Returns** string


---

#### numToStr `static`

**numToStr**(**value**: number, **uppercase**: any, **gender**: [Gender](Gender.md)): string

**Parameters**

- **value** (number)  
- **uppercase** (any)  
- **gender** ([Gender](Gender.md))  

**Returns** string


---

#### registerCurrency `static`

**registerCurrency**(**currency**: Currency, **currencyName**: string): void

**Parameters**

- **currency** (Currency)  
- **currencyName** (string)  

