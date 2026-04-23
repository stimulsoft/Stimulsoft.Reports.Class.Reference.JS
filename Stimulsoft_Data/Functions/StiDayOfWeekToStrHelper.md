---
title: "StiDayOfWeekToStrHelper Class"
---

## StiDayOfWeekToStrHelper Class

**Namespace:** `Stimulsoft.Data.Functions`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **addCulture** `static` | void |  |
| **dayOfWeek** `static` | string | Returns the day of the week. |
| **dayOfWeek2** `static` | string | Returns the day of the week. |
| **dayOfWeek3** `static` | string |  |
| **dayOfWeek4** `static` | string |  |
| **dayOfWeek5** `static` | StiDayOfWeek | null |  |
| **dayOfWeek6** `static` | string |  |
| **initialize** `static` | void |  |

---

### Method Details

#### addCulture `static`

**addCulture**(**monthNames**: string[], **cultureNames**: string[], **defaultUpperCase**: boolean): void

**Parameters**

- **monthNames** (string[])  
- **cultureNames** (string[])  
- **defaultUpperCase** (boolean)  


---

#### dayOfWeek `static`

**dayOfWeek**(**date**: [DateTime](../../Stimulsoft_System/DateTime.md)): string

Returns the day of the week.

**Parameters**

- **date** ([DateTime](../../Stimulsoft_System/DateTime.md))  

**Returns** string


---

#### dayOfWeek2 `static`

**dayOfWeek2**(**date**: [DateTime](../../Stimulsoft_System/DateTime.md), **localized**: boolean): string

Returns the day of the week.

**Parameters**

- **date** ([DateTime](../../Stimulsoft_System/DateTime.md))  
- **localized** (boolean)  

**Returns** string


---

#### dayOfWeek3 `static`

**dayOfWeek3**(**dayOfWeek**: StiDayOfWeek, **culture**: string): string

**Parameters**

- **dayOfWeek** (StiDayOfWeek)  
- **culture** (string)  

**Returns** string


---

#### dayOfWeek4 `static`

**dayOfWeek4**(**dateTime**: [DateTime](../../Stimulsoft_System/DateTime.md), **culture**: string, **upperCase**: boolean): string

**Parameters**

- **dateTime** ([DateTime](../../Stimulsoft_System/DateTime.md))  
- **culture** (string)  
- **upperCase** (boolean)  

**Returns** string


---

#### dayOfWeek5 `static`

**dayOfWeek5**(**str**: string): StiDayOfWeek | null

**Parameters**

- **str** (string)  

**Returns** StiDayOfWeek | null


---

#### dayOfWeek6 `static`

**dayOfWeek6**(**dateTime**: [DateTime](../../Stimulsoft_System/DateTime.md), **culture**: string): string

**Parameters**

- **dateTime** ([DateTime](../../Stimulsoft_System/DateTime.md))  
- **culture** (string)  

**Returns** string


---

#### initialize `static`

**initialize**(): void

