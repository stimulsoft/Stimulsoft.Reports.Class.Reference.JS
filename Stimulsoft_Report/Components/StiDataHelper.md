---
title: "StiDataHelper Class"
---

## StiDataHelper Class

**Namespace:** `Stimulsoft.Report.Components`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getFilterEventHandler** `static` | any |  |
| **getFilterExpression** `static` | string |  |
| **needGroupSort** `static` | boolean |  |
| **setData** `static` | void |  |
| **setDataAsync** `static` | void |  |

---

### Method Details

#### getFilterEventHandler `static`

**getFilterEventHandler**(**component**: StiComponent, **dataSource**: any): any

**Parameters**

- **component** (StiComponent)  
- **dataSource** (any)  

**Returns** any


---

#### getFilterExpression `static`

**getFilterExpression**(**filter**: [StiFilter](StiFilter.md), **fullColumnName**: string, **report**: [StiReport](../StiReport.md)): string

**Parameters**

- **filter** ([StiFilter](StiFilter.md))  
- **fullColumnName** (string)  
- **report** ([StiReport](../StiReport.md))  

**Returns** string


---

#### needGroupSort `static`

**needGroupSort**(**band**: StiDataBand): boolean

**Parameters**

- **band** (StiDataBand)  

**Returns** boolean


---

#### setData `static`

**setData**(**component**: StiComponent, **reinit**: boolean, **masterComponent**: StiComponent, **allowReconnectOnEachRow**: any): void

**Parameters**

- **component** (StiComponent)  
- **reinit** (boolean)  
- **masterComponent** (StiComponent)  
- **allowReconnectOnEachRow** (any)  


---

#### setDataAsync `static`

**setDataAsync**(**component**: StiComponent, **reinit**: boolean, **masterComponent**: StiComponent, **allowReconnectOnEachRow**: any): void

**Parameters**

- **component** (StiComponent)  
- **reinit** (boolean)  
- **masterComponent** (StiComponent)  
- **allowReconnectOnEachRow** (any)  

