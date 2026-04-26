---
title: "StiBorderSide Class"
---

## StiBorderSide Class

**Namespace:** `Stimulsoft.Base.Drawing`

### Inheritance

Implements: [ICloneable](../Stimulsoft_System/ICloneable.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([Color](../Stimulsoft_System_Drawing/Color.md) color, any size, [StiPenStyle](StiPenStyle.md) style) | Creates a new instance of the StiBorderSide class. |

**constructor**(**color**: [Color](../Stimulsoft_System_Drawing/Color.md), **size**: any, **style**: [StiPenStyle](StiPenStyle.md))

Creates a new instance of the StiBorderSide class.

**Parameters**

- **color** ([Color](../Stimulsoft_System_Drawing/Color.md))  
- **size** (any)  
- **style** ([StiPenStyle](StiPenStyle.md))  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **color** | [Color](../Stimulsoft_System_Drawing/Color.md) | Gets or sets a border color. |
| **size** | number | Gets or sets a border size. |
| **style** | [StiPenStyle](StiPenStyle.md) | Gets or sets a border style. |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | [StiBorderSide](StiBorderSide.md) | Creates a new object that is a copy of the current instance. |
| **equals** | boolean |  |
| **getHashCode** | number |  |
| **getSizeOffset** | number |  |
| **implements** | any[] |  |

---

### Method Details

#### clone

**clone**(): [StiBorderSide](StiBorderSide.md)

Creates a new object that is a copy of the current instance.

**Returns** [StiBorderSide](StiBorderSide.md)


---

#### equals

**equals**(**obj**: StiBorderSide \| any): boolean

**Parameters**

- **obj** (StiBorderSide \| any)  

**Returns** boolean


---

#### getHashCode

**getHashCode**(): number

**Returns** number


---

#### getSizeOffset

**getSizeOffset**(): number

**Returns** number


---

#### implements

**implements**(): any[]

**Returns** any[]


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **hashCode** | any |  |
| **hashCode** | any |  |
| **hashCode** | any |  |
| **side** | [StiBorderSides](StiBorderSides.md) |  |
