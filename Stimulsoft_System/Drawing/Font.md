---
title: "Font Class"
---

## Font Class

**Namespace:** `Stimulsoft.System.Drawing`

### Inheritance

Implements: [ICloneable](../ICloneable.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(any family, any emSize, [FontStyle](FontStyle.md) style, [GraphicsUnit](GraphicsUnit.md) unit) |  |

**constructor**(**family**: any, **emSize**: any, **style**: [FontStyle](FontStyle.md), **unit**: [GraphicsUnit](GraphicsUnit.md))

**Parameters**

- **family** (any)  
- **emSize** (any)  
- **style** ([FontStyle](FontStyle.md))  
- **unit** ([GraphicsUnit](GraphicsUnit.md))  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **bold** | boolean |  |
| **italic** | boolean |  |
| **name** | string |  |
| **sizeInPoints** | number |  |
| **strikeout** | boolean |  |
| **underline** | boolean |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | any | Creates a new object that is a copy of the current instance. |
| **getHashCode** | number |  |
| **getHeight** | number |  |
| **toString** | string |  |

---

### Method Details

#### clone

**clone**(**cloneProperties**: any, **cloneComponents**: any): any

Creates a new object that is a copy of the current instance.

**Parameters**

- **cloneProperties** (any)  
- **cloneComponents** (any)  

**Returns** any


---

#### getHashCode

**getHashCode**(): number

**Returns** number


---

#### getHeight

**getHeight**(): number

**Returns** number


---

#### toString

**toString**(): string

**Returns** string

