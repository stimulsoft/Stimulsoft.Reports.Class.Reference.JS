---
title: "IExternalObjectsProvider Interface"
---

## IExternalObjectsProvider Interface

**Namespace:** `Stimulsoft.Base`

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

**containsFunction**(**name**: string, **parameterTypes**: any[]): boolean

**Parameters**

- **name** (string)  
- **parameterTypes** (any[])  

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

**invokeFunction**(**name**: string, **parameters**: any[], **parameterTypes**: any[]): any

**Parameters**

- **name** (string)  
- **parameters** (any[])  
- **parameterTypes** (any[])  

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

