---
title: "StiCSharpScriptParser Class"
---

## StiCSharpScriptParser Class

**Namespace:** `Stimulsoft.Base`

Parses and executes C# scripts.

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **allowedNamespaces** `static` | HashSet<string> | Gets the set of allowed namespaces for security restrictions. |
| **allowedTypes** `static` | HashSet<string> | Gets the set of allowed types for security restrictions. |
| **blockedNamespaces** `static` | HashSet<string> | Gets the set of blocked namespaces for security restrictions. |
| **blockedTypes** `static` | HashSet<string> | Gets the set of blocked types for security restrictions. |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **execute** `static` *(+1 overloads)* | any | Initializes a new instance of the StiParser class with the specified script text. |
| **setThisObject** | void |  |

---

### Method Details

#### execute `static`

**execute**(**script**: string): any

Initializes a new instance of the StiParser class with the specified script text.

**Parameters**

- **script** (string)  

**Returns** any

---

**execute**(**timeoutMilliseconds**: any): any

Starts the parsing and execution of the script.

**Parameters**

- **timeoutMilliseconds** (any)  

**Returns** any — The result of the script execution.


---

#### setThisObject

**setThisObject**(**thisObject**: any): void

**Parameters**

- **thisObject** (any)  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **expression** | any |  |
| **expression** | any |  |
| **expressionEnd** | any |  |
| **expressionResult** | any |  |
| **ident** | any |  |
| **left** | any |  |
| **left** | any |  |
| **left** | any |  |
| **left** | any |  |
| **left** | any |  |
| **left** | any |  |
| **left** | any |  |
| **left** | any |  |
| **left** | any |  |
| **left** | any |  |
| **left** | any |  |
| **left** | any |  |
| **left** | any |  |
| **left** | any |  |
| **left** | any |  |
| **left** | any |  |
| **position** | any |  |
| **position** | any |  |
| **result** | any | The result of the last executed expression. |
| **resultState** | any |  |
| **resultState** | any |  |
| **resultType** | any |  |
| **resultType** | any |  |
| **type** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
