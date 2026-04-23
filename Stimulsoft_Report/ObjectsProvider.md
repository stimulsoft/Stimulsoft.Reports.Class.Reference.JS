---
title: "ObjectsProvider Class"
---

## ObjectsProvider Class

**Namespace:** `Stimulsoft.Report`

### Inheritance

Implements: [IExternalObjectsProvider](../Stimulsoft_Base/IExternalObjectsProvider.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([StiReport](StiReport.md) report) |  |

**constructor**(**report**: [StiReport](StiReport.md))

**Parameters**

- **report** ([StiReport](StiReport.md))  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **containsFunction** | boolean |  |
| **containsNestedObject** | boolean |  |
| **containsObject** | boolean |  |
| **getNestedObject** | boolean |  |
| **getObject** | any |  |
| **invokeFunction** | any |  |
| **isObjectSupportsNesting** | boolean |  |
| **isReadOnlyObject** | boolean |  |
| **setObject** | void |  |

---

### Method Details

#### containsFunction

**containsFunction**(**name**: string, **argumentTypes**: any[]): boolean

**Parameters**

- **name** (string)  
- **argumentTypes** (any[])  

**Returns** boolean


---

#### containsNestedObject

**containsNestedObject**(**value**: any, **path**: string): boolean

**Parameters**

- **value** (any)  
- **path** (string)  

**Returns** boolean


---

#### containsObject

**containsObject**(**name**: string): boolean

**Parameters**

- **name** (string)  

**Returns** boolean


---

#### getNestedObject

**getNestedObject**(**value**: any, **path**: string, **result**: [IRefOut](../Stimulsoft_System/IRefOut.md)<any>): boolean

**Parameters**

- **value** (any)  
- **path** (string)  
- **result** ([IRefOut](../Stimulsoft_System/IRefOut.md)<any>)  

**Returns** boolean


---

#### getObject

**getObject**(**name**: string): any

**Parameters**

- **name** (string)  

**Returns** any


---

#### invokeFunction

**invokeFunction**(**name**: string, **args**: any[], **argumentTypes**: any[]): any

**Parameters**

- **name** (string)  
- **args** (any[])  
- **argumentTypes** (any[])  

**Returns** any


---

#### isObjectSupportsNesting

**isObjectSupportsNesting**(**value**: any): boolean

**Parameters**

- **value** (any)  

**Returns** boolean


---

#### isReadOnlyObject

**isReadOnlyObject**(**name**: string): boolean

**Parameters**

- **name** (string)  

**Returns** boolean


---

#### setObject

**setObject**(**name**: string, **value**: any): void

**Parameters**

- **name** (string)  
- **value** (any)  

