---
title: "StiToken Class"
---

## StiToken Class

**Namespace:** `Stimulsoft.Base`

Class describes Token.

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([StiTokenType](../Stimulsoft_Report_Engine/StiTokenType.md) type, any index, any length, any obj) | Creates an object of the type StiToken that contains an object. |

**constructor**(**type**: [StiTokenType](../Stimulsoft_Report_Engine/StiTokenType.md), **index**: any, **length**: any, **obj**: any)

Creates an object of the type StiToken that contains an object.

**Parameters**

- **type** ([StiTokenType](../Stimulsoft_Report_Engine/StiTokenType.md)) — Type Token  
- **index** (any) — The Beginning Token in text.  
- **length** (any) — The Length Token.  
- **obj** (any) — Object for initializing.  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **dataAsString** | string |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **isAssign** | boolean |  |
| **isDot** | boolean |  |
| **isIdent** | boolean |  |
| **isIdentOrKeyword** | boolean |  |
| **isKeyword** | boolean |  |
| **isLBrace** | boolean |  |
| **isLBracket** | boolean |  |
| **isLPar** | boolean |  |
| **isRBrace** | boolean |  |
| **isRBracket** | boolean |  |
| **isRPar** | boolean |  |
| **toString** | string |  |

---

### Method Details

#### isAssign

**isAssign**(): boolean

**Returns** boolean


---

#### isDot

**isDot**(): boolean

**Returns** boolean


---

#### isIdent

**isIdent**(**ident**: string): boolean

**Parameters**

- **ident** (string)  

**Returns** boolean


---

#### isIdentOrKeyword

**isIdentOrKeyword**(): boolean

**Returns** boolean


---

#### isKeyword

**isKeyword**(**keyword**: string): boolean

**Parameters**

- **keyword** (string)  

**Returns** boolean


---

#### isLBrace

**isLBrace**(): boolean

**Returns** boolean


---

#### isLBracket

**isLBracket**(): boolean

**Returns** boolean


---

#### isLPar

**isLPar**(): boolean

**Returns** boolean


---

#### isRBrace

**isRBrace**(): boolean

**Returns** boolean


---

#### isRBracket

**isRBracket**(): boolean

**Returns** boolean


---

#### isRPar

**isRPar**(): boolean

**Returns** boolean


---

#### toString

**toString**(): string

**Returns** string


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **data** | string | Gets or sets Value of the identifier. |
| **index** | number | Gets or sets value indicates the beginning of token in text. |
| **length** | number | Gets or sets value indicates the length of token. |
| **type** | [StiTokenType](../Stimulsoft_Report_Engine/StiTokenType.md) | Gets or sets value indicates the type of token. |
