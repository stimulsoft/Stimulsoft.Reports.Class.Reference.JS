---
title: "DateTime Class"
---

## DateTime Class

**Namespace:** `Stimulsoft.System`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(Date \| number param1, number month, number day, number hour, number minute, number second, number millisecond) |  |

**constructor**(**param1**: Date | number, **month**: number, **day**: number, **hour**: number, **minute**: number, **second**: number, **millisecond**: number)

**Parameters**

- **param1** (Date | number)  
- **month** (number)  
- **day** (number)  
- **hour** (number)  
- **minute** (number)  
- **second** (number)  
- **millisecond** (number)  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **date** | [DateTime](DateTime.md) |  |
| **day** | number |  |
| **dayName** | string |  |
| **dayOfWeek** | [DayOfWeek](DayOfWeek.md) | 0 – Sunday, 1 – Monday etc |
| **dayOfYear** | number |  |
| **dayShortName** | string |  |
| **hour** | number |  |
| **jsDate** | Date |  |
| **millisecond** | number |  |
| **minute** | number |  |
| **month** | number |  |
| **monthGenitiveName** | string |  |
| **monthName** | string |  |
| **monthShortName** | string |  |
| **now** `static` | [DateTime](DateTime.md) |  |
| **second** | number |  |
| **ticks** | number |  |
| **timeOfDay** | [TimeSpan](TimeSpan.md) |  |
| **today** `static` | [DateTime](DateTime.md) |  |
| **year** | number |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **add** | [DateTime](DateTime.md) |  |
| **addDays** | [DateTime](DateTime.md) |  |
| **addHours** | [DateTime](DateTime.md) |  |
| **addMilliseconds** | [DateTime](DateTime.md) |  |
| **addMinutes** | [DateTime](DateTime.md) |  |
| **addMonths** | [DateTime](DateTime.md) |  |
| **addSeconds** | [DateTime](DateTime.md) |  |
| **addTicks** | [DateTime](DateTime.md) |  |
| **addYears** | [DateTime](DateTime.md) |  |
| **compare** `static` | number |  |
| **compareTo** | number |  |
| **dateToNetTicks** `static` | number |  |
| **daysInMonth** `static` | number | The month number ranging from 1 to 12. JS calculate month from 0. This will even work for December. |
| **equals** | boolean |  |
| **firstDayOfFirthQuarter** | [DateTime](DateTime.md) |  |
| **firstDayOfFourthQuarter** | [DateTime](DateTime.md) |  |
| **firstDayOfMonth** | [DateTime](DateTime.md) |  |
| **firstDayOfQuarter** | [DateTime](DateTime.md) |  |
| **firstDayOfSecondQuarter** | [DateTime](DateTime.md) |  |
| **firstDayOfThirdQuarter** | [DateTime](DateTime.md) |  |
| **firstDayOfWeek** | [DateTime](DateTime.md) |  |
| **firstDayOfYear** | [DateTime](DateTime.md) |  |
| **fromNetJsonString** `static` | [DateTime](DateTime.md) |  |
| **fromOADate** `static` | [DateTime](DateTime.md) |  |
| **fromString** `static` | [DateTime](DateTime.md) |  |
| **fromString2** `static` | [DateTime](DateTime.md) |  |
| **getFullTypeName** `static` | string |  |
| **getHashCode** | number |  |
| **isISO8601String** `static` | boolean |  |
| **isLeapYear** `static` | boolean |  |
| **lastDateTimeOfDay** | [DateTime](DateTime.md) |  |
| **lastDayOfFirthQuarter** | [DateTime](DateTime.md) |  |
| **lastDayOfFourthQuarter** | [DateTime](DateTime.md) |  |
| **lastDayOfMonth** | [DateTime](DateTime.md) |  |
| **lastDayOfQuarter** | [DateTime](DateTime.md) |  |
| **lastDayOfSecondQuarter** | [DateTime](DateTime.md) |  |
| **lastDayOfThirdQuarter** | [DateTime](DateTime.md) |  |
| **lastDayOfWeek** | [DateTime](DateTime.md) |  |
| **lastDayOfYear** | [DateTime](DateTime.md) |  |
| **negate** | [DateTime](DateTime.md) |  |
| **oaDateToTicks0** `static` | number |  |
| **parse** `static` | [DateTime](DateTime.md) |  |
| **subtract** *(+2 overloads)* | [TimeSpan](TimeSpan.md) |  |
| **ticksNetToTicksJs** `static` | number |  |
| **ticksToOADate0** `static` | number |  |
| **toLongDateString** | string |  |
| **toLongTimeString** | string |  |
| **toNetJsonString** | string |  |
| **toOADate** | number |  |
| **toOADate2** | number |  |
| **toShortDateString** | string |  |
| **toShortTimeString** | string |  |
| **toString** | string | By default date and time is converted into American format. |
| **tryParse** `static` |  |  |
| **tryParseExact** `static` |  |  |

---

### Method Details

#### add

**add**(**value**: [TimeSpan](TimeSpan.md)): [DateTime](DateTime.md)

**Parameters**

- **value** ([TimeSpan](TimeSpan.md))  

**Returns** [DateTime](DateTime.md)


---

#### addDays

**addDays**(**value**: number): [DateTime](DateTime.md)

**Parameters**

- **value** (number)  

**Returns** [DateTime](DateTime.md)


---

#### addHours

**addHours**(**value**: number): [DateTime](DateTime.md)

**Parameters**

- **value** (number)  

**Returns** [DateTime](DateTime.md)


---

#### addMilliseconds

**addMilliseconds**(**value**: number): [DateTime](DateTime.md)

**Parameters**

- **value** (number)  

**Returns** [DateTime](DateTime.md)


---

#### addMinutes

**addMinutes**(**value**: number): [DateTime](DateTime.md)

**Parameters**

- **value** (number)  

**Returns** [DateTime](DateTime.md)


---

#### addMonths

**addMonths**(**value**: number): [DateTime](DateTime.md)

**Parameters**

- **value** (number)  

**Returns** [DateTime](DateTime.md)


---

#### addSeconds

**addSeconds**(**value**: number): [DateTime](DateTime.md)

**Parameters**

- **value** (number)  

**Returns** [DateTime](DateTime.md)


---

#### addTicks

**addTicks**(**value**: number): [DateTime](DateTime.md)

**Parameters**

- **value** (number)  

**Returns** [DateTime](DateTime.md)


---

#### addYears

**addYears**(**value**: number): [DateTime](DateTime.md)

**Parameters**

- **value** (number)  

**Returns** [DateTime](DateTime.md)


---

#### compare `static`

**compare**(**t1**: [DateTime](DateTime.md), **t2**: [DateTime](DateTime.md)): number

**Parameters**

- **t1** ([DateTime](DateTime.md))  
- **t2** ([DateTime](DateTime.md))  

**Returns** number


---

#### compareTo

**compareTo**(**value**: [DateTime](DateTime.md)): number

**Parameters**

- **value** ([DateTime](DateTime.md))  

**Returns** number


---

#### dateToNetTicks `static`

**dateToNetTicks**(**date**: Date): number

**Parameters**

- **date** (Date)  

**Returns** number


---

#### daysInMonth `static`

**daysInMonth**(**year**: number, **month**: number): number

The month number ranging from 1 to 12. JS calculate month from 0. This will even work for December.

**Parameters**

- **year** (number)  
- **month** (number)  

**Returns** number


---

#### equals

**equals**(**date**: [DateTime](DateTime.md)): boolean

**Parameters**

- **date** ([DateTime](DateTime.md))  

**Returns** boolean


---

#### firstDayOfFirthQuarter

**firstDayOfFirthQuarter**(): [DateTime](DateTime.md)

**Returns** [DateTime](DateTime.md)


---

#### firstDayOfFourthQuarter

**firstDayOfFourthQuarter**(): [DateTime](DateTime.md)

**Returns** [DateTime](DateTime.md)


---

#### firstDayOfMonth

**firstDayOfMonth**(): [DateTime](DateTime.md)

**Returns** [DateTime](DateTime.md)


---

#### firstDayOfQuarter

**firstDayOfQuarter**(): [DateTime](DateTime.md)

**Returns** [DateTime](DateTime.md)


---

#### firstDayOfSecondQuarter

**firstDayOfSecondQuarter**(): [DateTime](DateTime.md)

**Returns** [DateTime](DateTime.md)


---

#### firstDayOfThirdQuarter

**firstDayOfThirdQuarter**(): [DateTime](DateTime.md)

**Returns** [DateTime](DateTime.md)


---

#### firstDayOfWeek

**firstDayOfWeek**(): [DateTime](DateTime.md)

**Returns** [DateTime](DateTime.md)


---

#### firstDayOfYear

**firstDayOfYear**(): [DateTime](DateTime.md)

**Returns** [DateTime](DateTime.md)


---

#### fromNetJsonString `static`

**fromNetJsonString**(**jsonDate**: string): [DateTime](DateTime.md)

**Parameters**

- **jsonDate** (string)  

**Returns** [DateTime](DateTime.md)


---

#### fromOADate `static`

**fromOADate**(**oadate**: number): [DateTime](DateTime.md)

**Parameters**

- **oadate** (number)  

**Returns** [DateTime](DateTime.md)


---

#### fromString `static`

**fromString**(**d**: any, **logError**: any): [DateTime](DateTime.md)

**Parameters**

- **d** (any)  
- **logError** (any)  

**Returns** [DateTime](DateTime.md)


---

#### fromString2 `static`

**fromString2**(**format**: any, **value**: string, **logError**: any, **strict**: any): [DateTime](DateTime.md)

**Parameters**

- **format** (any)  
- **value** (string)  
- **logError** (any)  
- **strict** (any)  

**Returns** [DateTime](DateTime.md)


---

#### getFullTypeName `static`

**getFullTypeName**(): string

**Returns** string


---

#### getHashCode

**getHashCode**(): number

**Returns** number


---

#### isISO8601String `static`

**isISO8601String**(**d**: string): boolean

**Parameters**

- **d** (string)  

**Returns** boolean


---

#### isLeapYear `static`

**isLeapYear**(**year**: number): boolean

**Parameters**

- **year** (number)  

**Returns** boolean


---

#### lastDateTimeOfDay

**lastDateTimeOfDay**(): [DateTime](DateTime.md)

**Returns** [DateTime](DateTime.md)


---

#### lastDayOfFirthQuarter

**lastDayOfFirthQuarter**(): [DateTime](DateTime.md)

**Returns** [DateTime](DateTime.md)


---

#### lastDayOfFourthQuarter

**lastDayOfFourthQuarter**(): [DateTime](DateTime.md)

**Returns** [DateTime](DateTime.md)


---

#### lastDayOfMonth

**lastDayOfMonth**(): [DateTime](DateTime.md)

**Returns** [DateTime](DateTime.md)


---

#### lastDayOfQuarter

**lastDayOfQuarter**(): [DateTime](DateTime.md)

**Returns** [DateTime](DateTime.md)


---

#### lastDayOfSecondQuarter

**lastDayOfSecondQuarter**(): [DateTime](DateTime.md)

**Returns** [DateTime](DateTime.md)


---

#### lastDayOfThirdQuarter

**lastDayOfThirdQuarter**(): [DateTime](DateTime.md)

**Returns** [DateTime](DateTime.md)


---

#### lastDayOfWeek

**lastDayOfWeek**(): [DateTime](DateTime.md)

**Returns** [DateTime](DateTime.md)


---

#### lastDayOfYear

**lastDayOfYear**(): [DateTime](DateTime.md)

**Returns** [DateTime](DateTime.md)


---

#### negate

**negate**(): [DateTime](DateTime.md)

**Returns** [DateTime](DateTime.md)


---

#### oaDateToTicks0 `static`

**oaDateToTicks0**(**oaDate**: number): number

**Parameters**

- **oaDate** (number)  

**Returns** number


---

#### parse `static`

**parse**(**value**: string): [DateTime](DateTime.md)

**Parameters**

- **value** (string)  

**Returns** [DateTime](DateTime.md)


---

#### subtract

**subtract**(**value**: [DateTime](DateTime.md)): [TimeSpan](TimeSpan.md)

**Parameters**

- **value** ([DateTime](DateTime.md))  

**Returns** [TimeSpan](TimeSpan.md)

---

**subtract**(**value**: [TimeSpan](TimeSpan.md)): [DateTime](DateTime.md)

**Parameters**

- **value** ([TimeSpan](TimeSpan.md))  

**Returns** [DateTime](DateTime.md)

---

**subtract**(**value**: DateTime | TimeSpan): TimeSpan | DateTime

**Parameters**

- **value** (DateTime | TimeSpan)  

**Returns** TimeSpan | DateTime


---

#### ticksNetToTicksJs `static`

**ticksNetToTicksJs**(**ticks**: number): number

**Parameters**

- **ticks** (number)  

**Returns** number


---

#### ticksToOADate0 `static`

**ticksToOADate0**(**ticks**: number): number

**Parameters**

- **ticks** (number)  

**Returns** number


---

#### toLongDateString

**toLongDateString**(): string

**Returns** string


---

#### toLongTimeString

**toLongTimeString**(): string

**Returns** string


---

#### toNetJsonString

**toNetJsonString**(): string

**Returns** string


---

#### toOADate

**toOADate**(): number

**Returns** number


---

#### toOADate2

**toOADate2**(**round**: boolean): number

**Parameters**

- **round** (boolean)  

**Returns** number


---

#### toShortDateString

**toShortDateString**(): string

**Returns** string


---

#### toShortTimeString

**toShortTimeString**(): string

**Returns** string


---

#### toString

**toString**(**format**: any): string

By default date and time is converted into American format.

**Parameters**

- **format** (any)  

**Returns** string


---

#### tryParse `static`

**tryParse**(**d**: any): void

**Parameters**

- **d** (any)  


---

#### tryParseExact `static`

**tryParseExact**(**d**: any, **format**: string[]): void

**Parameters**

- **d** (any)  
- **format** (string[])  

