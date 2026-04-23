---
title: "Exception Class"
---

## Exception Class

**Namespace:** `Stimulsoft.System`

### Inheritance

Inherits from: Error  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(string message) |  |

**constructor**(**message**: string)

**Parameters**

- **message** (string)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getMessage** `static` | string |  |
| **log** `static` | [LogStatus](LogStatus.md) |  |
| **logEvent** `static` | [LogStatus](LogStatus.md) |  |
| **logExpression** `static` | [LogStatus](LogStatus.md) |  |
| **logSeriesExpression** `static` | [LogStatus](LogStatus.md) |  |

---

### Method Details

#### getMessage `static`

**getMessage**(**exception**: Exception | string): string

**Parameters**

- **exception** (Exception | string)  

**Returns** string


---

#### log `static`

**log**(**exception**: Exception | string, **obj**: any, **message**: string): [LogStatus](LogStatus.md)

**Parameters**

- **exception** (Exception | string)  
- **obj** (any)  
- **message** (string)  

**Returns** [LogStatus](LogStatus.md)


---

#### logEvent `static`

**logEvent**(**exception**: Exception | string, **compObject**: any, **eventName**: string): [LogStatus](LogStatus.md)

**Parameters**

- **exception** (Exception | string)  
- **compObject** (any)  
- **eventName** (string)  

**Returns** [LogStatus](LogStatus.md)


---

#### logExpression `static`

**logExpression**(**exception**: Exception | string, **compObject**: any, **propertyName**: string): [LogStatus](LogStatus.md)

**Parameters**

- **exception** (Exception | string)  
- **compObject** (any)  
- **propertyName** (string)  

**Returns** [LogStatus](LogStatus.md)


---

#### logSeriesExpression `static`

**logSeriesExpression**(**exception**: Exception | string, **compObject**: any, **series**: string, **propertyName**: string): [LogStatus](LogStatus.md)

**Parameters**

- **exception** (Exception | string)  
- **compObject** (any)  
- **series** (string)  
- **propertyName** (string)  

**Returns** [LogStatus](LogStatus.md)

