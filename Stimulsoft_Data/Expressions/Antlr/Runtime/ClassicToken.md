---
title: "ClassicToken Class"
---

## ClassicToken Class

**Namespace:** `Stimulsoft.Data.Expressions.Antlr.Runtime`

A Token object like we'd use in ANTLR 2.x; has an actual string created
 and associated with this object.  These objects are needed for imaginary
 tree nodes that have payload objects.  We need to create a Token object
 that has a string; the tree node will point at this token.  CommonToken
 has indexes into a char stream and hence cannot be used to introduce
 new strings.

### Inheritance

Implements: [IToken](IToken.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(number type, string text, number channel) |  |

**constructor**(**type**: number, **text**: string, **channel**: number)

**Parameters**

- **type** (number)  
- **text** (string)  
- **channel** (number)  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **tokenIndex** | number |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **implements** | any[] |  |
| **toString** | string |  |

---

### Method Details

#### implements

**implements**(): any[]

**Returns** any[]


---

#### toString

**toString**(): string

**Returns** string

