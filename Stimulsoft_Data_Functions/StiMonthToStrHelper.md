---
title: "StiMonthToStrHelper Class"
---

## StiMonthToStrHelper Class

**Namespace:** `Stimulsoft.Data.Functions`

MonthToStr helper.

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **addCulture** `static` | void |  |
| **initialize** `static` | void |  |
| **month** `static` | StiMonth | null |  |
| **month2** `static` | StiMonth |  |
| **monthName** `static` | string |  |
| **monthName2** `static` | string |  |
| **monthName3** `static` | string |  |
| **monthName4** `static` | string |  |
| **monthName5** `static` | string |  |

---

### Method Details

#### addCulture `static`

**addCulture**(**monthNames**: string[], **cultureNames**: string[], **defaultUpperCase**: boolean): void

**Parameters**

- **monthNames** (string[])  
- **cultureNames** (string[])  
- **defaultUpperCase** (boolean)  


---

#### initialize `static`

**initialize**(): void


---

#### month `static`

**month**(**str**: string): StiMonth \| null

**Parameters**

- **str** (string)  

**Returns** StiMonth \| null


---

#### month2 `static`

**month2**(**value**: number): StiMonth

**Parameters**

- **value** (number)  

**Returns** StiMonth


---

#### monthName `static`

**monthName**(**dateTime**: [DateTime](../Stimulsoft_System/DateTime.md)): string

**Parameters**

- **dateTime** ([DateTime](../Stimulsoft_System/DateTime.md))  

**Returns** string


---

#### monthName2 `static`

**monthName2**(**dateTime**: [DateTime](../Stimulsoft_System/DateTime.md), **localized**: boolean): string

**Parameters**

- **dateTime** ([DateTime](../Stimulsoft_System/DateTime.md))  
- **localized** (boolean)  

**Returns** string


---

#### monthName3 `static`

**monthName3**(**dateTime**: [DateTime](../Stimulsoft_System/DateTime.md), **culture**: string): string

**Parameters**

- **dateTime** ([DateTime](../Stimulsoft_System/DateTime.md))  
- **culture** (string)  

**Returns** string


---

#### monthName4 `static`

**monthName4**(**dateTime**: [DateTime](../Stimulsoft_System/DateTime.md), **culture**: string, **upperCase**: boolean): string

**Parameters**

- **dateTime** ([DateTime](../Stimulsoft_System/DateTime.md))  
- **culture** (string)  
- **upperCase** (boolean)  

**Returns** string


---

#### monthName5 `static`

**monthName5**(**month**: StiMonth, **culture**: string): string

**Parameters**

- **month** (StiMonth)  
- **culture** (string)  

**Returns** string


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **monthName** | any |  |
| **monthName** | any |  |
| **monthName** | any |  |
| **str** | any |  |
