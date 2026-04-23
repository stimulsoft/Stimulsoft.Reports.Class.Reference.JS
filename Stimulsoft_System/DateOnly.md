---
title: "DateOnly Class"
---

## DateOnly Class

**Namespace:** `Stimulsoft.System`

### Inheritance

Implements: [IComparable](IComparable.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([DateTime](DateTime.md) dateTime) |  |

**constructor**(**dateTime**: [DateTime](DateTime.md))

**Parameters**

- **dateTime** ([DateTime](DateTime.md))  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **day** | any |  |
| **maxValue** `static` | any |  |
| **minValue** `static` | any |  |
| **month** | any |  |
| **now** `static` | any |  |
| **year** | any |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **compareTo** | number |  |
| **equals** | boolean |  |
| **fromDateTime** `static` | [DateOnly](DateOnly.md) |  |
| **getHashCode** | number |  |
| **implements** | any[] |  |
| **parse** `static` | [DateOnly](DateOnly.md) |  |
| **subtract** | [TimeSpan](TimeSpan.md) |  |
| **toDateTime** | [DateTime](DateTime.md) |  |
| **toODate** | number |  |
| **toString** | string |  |
| **tryParse** `static` | boolean |  |

---

### Method Details

#### compareTo

**compareTo**(**other**: [DateOnly](DateOnly.md)): number

**Parameters**

- **other** ([DateOnly](DateOnly.md))  

**Returns** number


---

#### equals

**equals**(**date**: any): boolean

**Parameters**

- **date** (any)  

**Returns** boolean


---

#### fromDateTime `static`

**fromDateTime**(**dateTime**: [DateTime](DateTime.md)): [DateOnly](DateOnly.md)

**Parameters**

- **dateTime** ([DateTime](DateTime.md))  

**Returns** [DateOnly](DateOnly.md)


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

**parse**(**s**: string): [DateOnly](DateOnly.md)

**Parameters**

- **s** (string)  

**Returns** [DateOnly](DateOnly.md)


---

#### subtract

**subtract**(**date**: [DateOnly](DateOnly.md)): [TimeSpan](TimeSpan.md)

**Parameters**

- **date** ([DateOnly](DateOnly.md))  

**Returns** [TimeSpan](TimeSpan.md)


---

#### toDateTime

**toDateTime**(): [DateTime](DateTime.md)

**Returns** [DateTime](DateTime.md)


---

#### toODate

**toODate**(): number

**Returns** number


---

#### toString

**toString**(**format**: any): string

**Parameters**

- **format** (any)  

**Returns** string


---

#### tryParse `static`

**tryParse**(**s**: string, **refResult**: { ref: DateOnly }): boolean

**Parameters**

- **s** (string)  
- **refResult** ({ ref: DateOnly })  

**Returns** boolean

