---
title: "StiFunctionsDateTime Class"
---

## StiFunctionsDateTime Class

**Namespace:** `Stimulsoft.Report.Dictionary`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **addDays** `static` | [DateTime](../../Stimulsoft_System/DateTime.md) |  |
| **addHours** `static` | [DateTime](../../Stimulsoft_System/DateTime.md) |  |
| **addMilliseconds** `static` | [DateTime](../../Stimulsoft_System/DateTime.md) |  |
| **addMinutes** `static` | [DateTime](../../Stimulsoft_System/DateTime.md) |  |
| **addMonths** `static` | [DateTime](../../Stimulsoft_System/DateTime.md) |  |
| **addSeconds** `static` | [DateTime](../../Stimulsoft_System/DateTime.md) |  |
| **addYears** `static` | [DateTime](../../Stimulsoft_System/DateTime.md) |  |
| **create** `static` | void |  |
| **dateDiff** `static` | [TimeSpan](../../Stimulsoft_System/TimeSpan.md) |  |
| **dateSerial** `static` | [DateTime](../../Stimulsoft_System/DateTime.md) |  |
| **day** `static` | number |  |
| **dayOfWeek** `static` | string |  |
| **dayOfYear** `static` | void |  |
| **daysInMonth** `static` | number |  |
| **daysInYear** `static` | number |  |
| **hour** `static` | number |  |
| **localTimeToUtc** `static` | [DateTime](../../Stimulsoft_System/DateTime.md) | Converts a local DateTime to UTC. Unspecified kinds are treated as Local. |
| **minute** `static` | number |  |
| **month** `static` | number |  |
| **monthIdent** `static` | void |  |
| **monthName** `static` | string |  |
| **second** `static` | number |  |
| **timeSerial** `static` | [TimeSpan](../../Stimulsoft_System/TimeSpan.md) |  |
| **toJapaneseDateString** `static` | string |  |
| **toOADate** `static` | number |  |
| **utcToLocalTime** `static` | [DateTime](../../Stimulsoft_System/DateTime.md) | Converts a UTC DateTime to the system local time (DateTime.Kind -> Local). |
| **weekOfMonth** `static` | number |  |
| **weekOfYear** `static` | number |  |
| **year** `static` | number |  |

---

### Method Details

#### addDays `static`

**addDays**(**date**: [DateTime](../../Stimulsoft_System/DateTime.md), **days**: number): [DateTime](../../Stimulsoft_System/DateTime.md)

**Parameters**

- **date** ([DateTime](../../Stimulsoft_System/DateTime.md))  
- **days** (number)  

**Returns** [DateTime](../../Stimulsoft_System/DateTime.md)


---

#### addHours `static`

**addHours**(**date**: [DateTime](../../Stimulsoft_System/DateTime.md), **hours**: number): [DateTime](../../Stimulsoft_System/DateTime.md)

**Parameters**

- **date** ([DateTime](../../Stimulsoft_System/DateTime.md))  
- **hours** (number)  

**Returns** [DateTime](../../Stimulsoft_System/DateTime.md)


---

#### addMilliseconds `static`

**addMilliseconds**(**date**: [DateTime](../../Stimulsoft_System/DateTime.md), **milliseconds**: number): [DateTime](../../Stimulsoft_System/DateTime.md)

**Parameters**

- **date** ([DateTime](../../Stimulsoft_System/DateTime.md))  
- **milliseconds** (number)  

**Returns** [DateTime](../../Stimulsoft_System/DateTime.md)


---

#### addMinutes `static`

**addMinutes**(**date**: [DateTime](../../Stimulsoft_System/DateTime.md), **minutes**: number): [DateTime](../../Stimulsoft_System/DateTime.md)

**Parameters**

- **date** ([DateTime](../../Stimulsoft_System/DateTime.md))  
- **minutes** (number)  

**Returns** [DateTime](../../Stimulsoft_System/DateTime.md)


---

#### addMonths `static`

**addMonths**(**date**: [DateTime](../../Stimulsoft_System/DateTime.md), **months**: number): [DateTime](../../Stimulsoft_System/DateTime.md)

**Parameters**

- **date** ([DateTime](../../Stimulsoft_System/DateTime.md))  
- **months** (number)  

**Returns** [DateTime](../../Stimulsoft_System/DateTime.md)


---

#### addSeconds `static`

**addSeconds**(**date**: [DateTime](../../Stimulsoft_System/DateTime.md), **seconds**: number): [DateTime](../../Stimulsoft_System/DateTime.md)

**Parameters**

- **date** ([DateTime](../../Stimulsoft_System/DateTime.md))  
- **seconds** (number)  

**Returns** [DateTime](../../Stimulsoft_System/DateTime.md)


---

#### addYears `static`

**addYears**(**date**: [DateTime](../../Stimulsoft_System/DateTime.md), **years**: number): [DateTime](../../Stimulsoft_System/DateTime.md)

**Parameters**

- **date** ([DateTime](../../Stimulsoft_System/DateTime.md))  
- **years** (number)  

**Returns** [DateTime](../../Stimulsoft_System/DateTime.md)


---

#### create `static`

**create**(): void


---

#### dateDiff `static`

**dateDiff**(**date1**: [DateTime](../../Stimulsoft_System/DateTime.md), **date2**: [DateTime](../../Stimulsoft_System/DateTime.md)): [TimeSpan](../../Stimulsoft_System/TimeSpan.md)

**Parameters**

- **date1** ([DateTime](../../Stimulsoft_System/DateTime.md))  
- **date2** ([DateTime](../../Stimulsoft_System/DateTime.md))  

**Returns** [TimeSpan](../../Stimulsoft_System/TimeSpan.md)


---

#### dateSerial `static`

**dateSerial**(**year**: number, **month**: number, **day**: number): [DateTime](../../Stimulsoft_System/DateTime.md)

**Parameters**

- **year** (number)  
- **month** (number)  
- **day** (number)  

**Returns** [DateTime](../../Stimulsoft_System/DateTime.md)


---

#### day `static`

**day**(**date**: [DateTime](../../Stimulsoft_System/DateTime.md)): number

**Parameters**

- **date** ([DateTime](../../Stimulsoft_System/DateTime.md))  

**Returns** number


---

#### dayOfWeek `static`

**dayOfWeek**(**date**: [DateTime](../../Stimulsoft_System/DateTime.md), **loc**: boolean | string, **upperCase**: boolean): string

**Parameters**

- **date** ([DateTime](../../Stimulsoft_System/DateTime.md))  
- **loc** (boolean | string)  
- **upperCase** (boolean)  

**Returns** string


---

#### dayOfYear `static`

**dayOfYear**(**date**: [DateTime](../../Stimulsoft_System/DateTime.md)): void

**Parameters**

- **date** ([DateTime](../../Stimulsoft_System/DateTime.md))  


---

#### daysInMonth `static`

**daysInMonth**(**yearOrDate**: number | DateTime, **month**: number): number

**Parameters**

- **yearOrDate** (number | DateTime)  
- **month** (number)  

**Returns** number


---

#### daysInYear `static`

**daysInYear**(**yearOrDate**: number | DateTime): number

**Parameters**

- **yearOrDate** (number | DateTime)  

**Returns** number


---

#### hour `static`

**hour**(**date**: [DateTime](../../Stimulsoft_System/DateTime.md)): number

**Parameters**

- **date** ([DateTime](../../Stimulsoft_System/DateTime.md))  

**Returns** number


---

#### localTimeToUtc `static`

**localTimeToUtc**(**localDate**: [DateTime](../../Stimulsoft_System/DateTime.md)): [DateTime](../../Stimulsoft_System/DateTime.md)

Converts a local DateTime to UTC. Unspecified kinds are treated as Local.

**Parameters**

- **localDate** ([DateTime](../../Stimulsoft_System/DateTime.md))  

**Returns** [DateTime](../../Stimulsoft_System/DateTime.md)


---

#### minute `static`

**minute**(**date**: [DateTime](../../Stimulsoft_System/DateTime.md)): number

**Parameters**

- **date** ([DateTime](../../Stimulsoft_System/DateTime.md))  

**Returns** number


---

#### month `static`

**month**(**date**: [DateTime](../../Stimulsoft_System/DateTime.md)): number

**Parameters**

- **date** ([DateTime](../../Stimulsoft_System/DateTime.md))  

**Returns** number


---

#### monthIdent `static`

**monthIdent**(**value**: [DateTime](../../Stimulsoft_System/DateTime.md)): void

**Parameters**

- **value** ([DateTime](../../Stimulsoft_System/DateTime.md))  


---

#### monthName `static`

**monthName**(**date**: [DateTime](../../Stimulsoft_System/DateTime.md), **loc**: boolean | string, **upperCase**: boolean): string

**Parameters**

- **date** ([DateTime](../../Stimulsoft_System/DateTime.md))  
- **loc** (boolean | string)  
- **upperCase** (boolean)  

**Returns** string


---

#### second `static`

**second**(**date**: [DateTime](../../Stimulsoft_System/DateTime.md)): number

**Parameters**

- **date** ([DateTime](../../Stimulsoft_System/DateTime.md))  

**Returns** number


---

#### timeSerial `static`

**timeSerial**(**hours**: number, **minutes**: number, **seconds**: number): [TimeSpan](../../Stimulsoft_System/TimeSpan.md)

**Parameters**

- **hours** (number)  
- **minutes** (number)  
- **seconds** (number)  

**Returns** [TimeSpan](../../Stimulsoft_System/TimeSpan.md)


---

#### toJapaneseDateString `static`

**toJapaneseDateString**(**date**: [DateTime](../../Stimulsoft_System/DateTime.md), **format**: string): string

**Parameters**

- **date** ([DateTime](../../Stimulsoft_System/DateTime.md))  
- **format** (string)  

**Returns** string


---

#### toOADate `static`

**toOADate**(**date**: [DateTime](../../Stimulsoft_System/DateTime.md)): number

**Parameters**

- **date** ([DateTime](../../Stimulsoft_System/DateTime.md))  

**Returns** number


---

#### utcToLocalTime `static`

**utcToLocalTime**(**utcDate**: [DateTime](../../Stimulsoft_System/DateTime.md)): [DateTime](../../Stimulsoft_System/DateTime.md)

Converts a UTC DateTime to the system local time (DateTime.Kind -> Local).

**Parameters**

- **utcDate** ([DateTime](../../Stimulsoft_System/DateTime.md))  

**Returns** [DateTime](../../Stimulsoft_System/DateTime.md)


---

#### weekOfMonth `static`

**weekOfMonth**(**date**: [DateTime](../../Stimulsoft_System/DateTime.md), **firstDayOfWeek**: [DayOfWeek](../../Stimulsoft_System/DayOfWeek.md), **calendarWeekRule**: [CalendarWeekRule](../../Stimulsoft_System/Globalization/CalendarWeekRule.md)): number

**Parameters**

- **date** ([DateTime](../../Stimulsoft_System/DateTime.md))  
- **firstDayOfWeek** ([DayOfWeek](../../Stimulsoft_System/DayOfWeek.md))  
- **calendarWeekRule** ([CalendarWeekRule](../../Stimulsoft_System/Globalization/CalendarWeekRule.md))  

**Returns** number


---

#### weekOfYear `static`

**weekOfYear**(**date**: [DateTime](../../Stimulsoft_System/DateTime.md), **firstDayOfWeek**: [DayOfWeek](../../Stimulsoft_System/DayOfWeek.md), **calendarWeekRule**: [CalendarWeekRule](../../Stimulsoft_System/Globalization/CalendarWeekRule.md)): number

**Parameters**

- **date** ([DateTime](../../Stimulsoft_System/DateTime.md))  
- **firstDayOfWeek** ([DayOfWeek](../../Stimulsoft_System/DayOfWeek.md))  
- **calendarWeekRule** ([CalendarWeekRule](../../Stimulsoft_System/Globalization/CalendarWeekRule.md))  

**Returns** number


---

#### year `static`

**year**(**date**: [DateTime](../../Stimulsoft_System/DateTime.md)): number

**Parameters**

- **date** ([DateTime](../../Stimulsoft_System/DateTime.md))  

**Returns** number

