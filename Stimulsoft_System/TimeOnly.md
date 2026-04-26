---
title: "TimeOnly Class"
---

## TimeOnly Class

**Namespace:** `Stimulsoft.System`

### Inheritance

Implements: [IComparable](IComparable.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(number \| DateTime param) |  |

**constructor**(**param**: number \| DateTime)

**Parameters**

- **param** (number \| DateTime)  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **hour** | any |  |
| **millisecond** | any |  |
| **minute** | any |  |
| **now** `static` | any |  |
| **second** | any |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **compareTo** | number |  |
| **equals** | boolean |  |
| **fromDateTime** `static` | [TimeOnly](TimeOnly.md) |  |
| **getHashCode** | number |  |
| **implements** | any[] |  |
| **parse** `static` | [TimeOnly](TimeOnly.md) |  |
| **toDateTime** | [DateTime](DateTime.md) |  |
| **toString** | string |  |
| **tryParse** `static` | boolean |  |

---

### Method Details

#### compareTo

**compareTo**(**other**: [TimeOnly](TimeOnly.md)): number

**Parameters**

- **other** ([TimeOnly](TimeOnly.md))  

**Returns** number


---

#### equals

**equals**(**time**: any): boolean

**Parameters**

- **time** (any)  

**Returns** boolean


---

#### fromDateTime `static`

**fromDateTime**(**dateTime**: [DateTime](DateTime.md)): [TimeOnly](TimeOnly.md)

**Parameters**

- **dateTime** ([DateTime](DateTime.md))  

**Returns** [TimeOnly](TimeOnly.md)


---

#### getHashCode

**getHashCode**(): number

**Returns** number


---

#### implements

**implements**(): any[]

**Returns** any[]


---

#### parse `static`

**parse**(**s**: string): [TimeOnly](TimeOnly.md)

**Parameters**

- **s** (string)  

**Returns** [TimeOnly](TimeOnly.md)


---

#### toDateTime

**toDateTime**(): [DateTime](DateTime.md)

**Returns** [DateTime](DateTime.md)


---

#### toString

**toString**(**format**: any): string

**Parameters**

- **format** (any)  

**Returns** string


---

#### tryParse `static`

**tryParse**(**s**: string, **refResult**: { ref: TimeOnly }): boolean

**Parameters**

- **s** (string)  
- **refResult** ({ ref: TimeOnly })  

**Returns** boolean


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **hashCode** | any |  |
| **hashCode** | any |  |
| **hashCode** | any |  |
| **hashCode** | any |  |
