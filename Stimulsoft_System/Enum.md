---
title: "Enum Class"
---

## Enum Class

**Namespace:** `Stimulsoft.System`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(string name, number value) |  |

**constructor**(**name**: string, **value**: number)

**Parameters**

- **name** (string)  
- **value** (number)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **compareTo** | number |  |
| **getName** `static` | string |  |
| **getNames** `static` | string[] |  |
| **getValues** `static` | number[] |  |
| **isDefined** `static` | boolean |  |
| **isEnum** `static` | boolean |  |
| **parse** `static` | number |  |
| **toString** | string |  |

---

### Method Details

#### compareTo

**compareTo**(**value**: [Enum](Enum.md)): number

**Parameters**

- **value** ([Enum](Enum.md))  

**Returns** number


---

#### getName `static`

**getName**(**enumType**: any, **value**: number): string

**Parameters**

- **enumType** (any)  
- **value** (number)  

**Returns** string


---

#### getNames `static`

**getNames**(**enumType**: any): string[]

**Parameters**

- **enumType** (any)  

**Returns** string[]


---

#### getValues `static`

**getValues**(**enumType**: any): number[]

**Parameters**

- **enumType** (any)  

**Returns** number[]


---

#### isDefined `static`

**isDefined**(**enumType**: any, **value**: string \| number): boolean

**Parameters**

- **enumType** (any)  
- **value** (string \| number)  

**Returns** boolean


---

#### isEnum `static`

**isEnum**(**enumType**: any): boolean

**Parameters**

- **enumType** (any)  

**Returns** boolean


---

#### parse `static`

**parse**(**enumType**: any, **value**: string \| number, **upperFirstChar**: any): number

**Parameters**

- **enumType** (any)  
- **value** (string \| number)  
- **upperFirstChar** (any)  

**Returns** number


---

#### toString

**toString**(): string

**Returns** string


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **name** | string |  |
| **str** | any |  |
| **value** | number |  |
