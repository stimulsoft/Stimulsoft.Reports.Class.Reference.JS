---
title: "StiReportParser Class"
---

## StiReportParser Class

**Namespace:** `Stimulsoft.Report.Dashboard`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **parse** `static` | string |  |
| **parse2** `static` | string |  |
| **parseAsync** `static` | Promise<string> |  |
| **parseAsync2** `static` | Promise<string> |  |
| **parseBool** `static` | boolean |  |
| **parseDateTime** `static` | DateTime | null |  |
| **parseNumber** `static` | number |  |
| **parseObject** `static` | any |  |
| **parseObjectAsync** `static` | Promise<any> |  |
| **parseTimeSpan** `static` | TimeSpan | null |  |

---

### Method Details

#### parse `static`

**parse**(**expression**: string, **component**: IStiReportComponent, **allowCache**: any, **constants**: [Hashtable](../Stimulsoft_System_Collections/Hashtable.md), **allowDataLoading**: any, **onlyExpression**: any, **throwException**: any): string

**Parameters**

- **expression** (string)  
- **component** (IStiReportComponent)  
- **allowCache** (any)  
- **constants** ([Hashtable](../Stimulsoft_System_Collections/Hashtable.md))  
- **allowDataLoading** (any)  
- **onlyExpression** (any)  
- **throwException** (any)  

**Returns** string


---

#### parse2 `static`

**parse2**(**expression**: string, **report**: IStiReport, **allowCache**: any, **constants**: [Hashtable](../Stimulsoft_System_Collections/Hashtable.md), **allowDataLoading**: any, **onlyExpression**: any): string

**Parameters**

- **expression** (string)  
- **report** (IStiReport)  
- **allowCache** (any)  
- **constants** ([Hashtable](../Stimulsoft_System_Collections/Hashtable.md))  
- **allowDataLoading** (any)  
- **onlyExpression** (any)  

**Returns** string


---

#### parseAsync `static`

**parseAsync**(**expression**: string, **component**: IStiReportComponent, **allowCache**: any, **constants**: [Hashtable](../Stimulsoft_System_Collections/Hashtable.md), **allowDataLoading**: any, **onlyExpression**: any): Promise<string>

**Parameters**

- **expression** (string)  
- **component** (IStiReportComponent)  
- **allowCache** (any)  
- **constants** ([Hashtable](../Stimulsoft_System_Collections/Hashtable.md))  
- **allowDataLoading** (any)  
- **onlyExpression** (any)  

**Returns** Promise<string>


---

#### parseAsync2 `static`

**parseAsync2**(**expression**: string, **report**: IStiReport, **allowCache**: any, **constants**: [Hashtable](../Stimulsoft_System_Collections/Hashtable.md), **allowDataLoading**: any, **onlyExpression**: any): Promise<string>

**Parameters**

- **expression** (string)  
- **report** (IStiReport)  
- **allowCache** (any)  
- **constants** ([Hashtable](../Stimulsoft_System_Collections/Hashtable.md))  
- **allowDataLoading** (any)  
- **onlyExpression** (any)  

**Returns** Promise<string>


---

#### parseBool `static`

**parseBool**(**expression**: string, **report**: IStiReport, **allowCache**: any, **constants**: [Hashtable](../Stimulsoft_System_Collections/Hashtable.md), **allowDataLoading**: any, **onlyExpression**: any, **throwException**: any): boolean

**Parameters**

- **expression** (string)  
- **report** (IStiReport)  
- **allowCache** (any)  
- **constants** ([Hashtable](../Stimulsoft_System_Collections/Hashtable.md))  
- **allowDataLoading** (any)  
- **onlyExpression** (any)  
- **throwException** (any)  

**Returns** boolean


---

#### parseDateTime `static`

**parseDateTime**(**expression**: string, **report**: IStiReport, **allowCache**: any, **constants**: [Hashtable](../Stimulsoft_System_Collections/Hashtable.md), **allowDataLoading**: any, **onlyExpression**: any): DateTime \| null

**Parameters**

- **expression** (string)  
- **report** (IStiReport)  
- **allowCache** (any)  
- **constants** ([Hashtable](../Stimulsoft_System_Collections/Hashtable.md))  
- **allowDataLoading** (any)  
- **onlyExpression** (any)  

**Returns** DateTime \| null


---

#### parseNumber `static`

**parseNumber**(**expression**: string, **report**: IStiReport, **allowCache**: any, **constants**: [Hashtable](../Stimulsoft_System_Collections/Hashtable.md), **allowDataLoading**: any, **onlyExpression**: any): number

**Parameters**

- **expression** (string)  
- **report** (IStiReport)  
- **allowCache** (any)  
- **constants** ([Hashtable](../Stimulsoft_System_Collections/Hashtable.md))  
- **allowDataLoading** (any)  
- **onlyExpression** (any)  

**Returns** number


---

#### parseObject `static`

**parseObject**(**expression**: string, **component**: IStiReportComponent, **allowCache**: any, **constants**: [Hashtable](../Stimulsoft_System_Collections/Hashtable.md), **allowDataLoading**: any, **onlyExpression**: any, **throwException**: any): any

**Parameters**

- **expression** (string)  
- **component** (IStiReportComponent)  
- **allowCache** (any)  
- **constants** ([Hashtable](../Stimulsoft_System_Collections/Hashtable.md))  
- **allowDataLoading** (any)  
- **onlyExpression** (any)  
- **throwException** (any)  

**Returns** any


---

#### parseObjectAsync `static`

**parseObjectAsync**(**expression**: string, **component**: IStiReportComponent, **allowCache**: any, **constants**: [Hashtable](../Stimulsoft_System_Collections/Hashtable.md), **allowDataLoading**: any, **onlyExpression**: any): Promise<any>

**Parameters**

- **expression** (string)  
- **component** (IStiReportComponent)  
- **allowCache** (any)  
- **constants** ([Hashtable](../Stimulsoft_System_Collections/Hashtable.md))  
- **allowDataLoading** (any)  
- **onlyExpression** (any)  

**Returns** Promise<any>


---

#### parseTimeSpan `static`

**parseTimeSpan**(**expression**: string, **report**: IStiReport, **allowCache**: any, **constants**: [Hashtable](../Stimulsoft_System_Collections/Hashtable.md), **allowDataLoading**: any, **onlyExpression**: any): TimeSpan \| null

**Parameters**

- **expression** (string)  
- **report** (IStiReport)  
- **allowCache** (any)  
- **constants** ([Hashtable](../Stimulsoft_System_Collections/Hashtable.md))  
- **allowDataLoading** (any)  
- **onlyExpression** (any)  

**Returns** TimeSpan \| null


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **expression** | any |  |
| **expression** | any |  |
| **propertyName** | any |  |
| **result** | any |  |
| **result** | any |  |
| **result** | any |  |
| **result** | any |  |
