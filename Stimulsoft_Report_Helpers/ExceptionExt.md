---
title: "ExceptionExt Class"
---

## ExceptionExt Class

**Namespace:** `Stimulsoft.Report.Helpers`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **init** `static` | void |  |
| **log** `static` | [LogStatus](../Stimulsoft_System/LogStatus.md) |  |
| **logEvent** `static` | [LogStatus](../Stimulsoft_System/LogStatus.md) |  |
| **logExpression** `static` | [LogStatus](../Stimulsoft_System/LogStatus.md) |  |
| **logSeriesExpression** `static` | [LogStatus](../Stimulsoft_System/LogStatus.md) |  |

---

### Method Details

#### init `static`

**init**(): void


---

#### log `static`

**log**(**exception**: Exception \| string, **obj**: any, **message**: string): [LogStatus](../Stimulsoft_System/LogStatus.md)

**Parameters**

- **exception** (Exception \| string)  
- **obj** (any)  
- **message** (string)  

**Returns** [LogStatus](../Stimulsoft_System/LogStatus.md)


---

#### logEvent `static`

**logEvent**(**exception**: Exception \| string, **component**: StiComponent, **eventName**: string): [LogStatus](../Stimulsoft_System/LogStatus.md)

**Parameters**

- **exception** (Exception \| string)  
- **component** (StiComponent)  
- **eventName** (string)  

**Returns** [LogStatus](../Stimulsoft_System/LogStatus.md)


---

#### logExpression `static`

**logExpression**(**exception**: Exception \| string, **component**: StiComponent, **propertyName**: string): [LogStatus](../Stimulsoft_System/LogStatus.md)

**Parameters**

- **exception** (Exception \| string)  
- **component** (StiComponent)  
- **propertyName** (string)  

**Returns** [LogStatus](../Stimulsoft_System/LogStatus.md)


---

#### logSeriesExpression `static`

**logSeriesExpression**(**exception**: Exception \| string, **component**: StiComponent, **series**: string, **propertyName**: string): [LogStatus](../Stimulsoft_System/LogStatus.md)

**Parameters**

- **exception** (Exception \| string)  
- **component** (StiComponent)  
- **series** (string)  
- **propertyName** (string)  

**Returns** [LogStatus](../Stimulsoft_System/LogStatus.md)

