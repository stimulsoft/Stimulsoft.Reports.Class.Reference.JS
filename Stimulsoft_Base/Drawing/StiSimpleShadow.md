---
title: "StiSimpleShadow Class"
---

## StiSimpleShadow Class

**Namespace:** `Stimulsoft.Base.Drawing`

Class describes a border.

### Inheritance

Implements: [ICloneable](../../Stimulsoft_System/ICloneable.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([Color](../../Stimulsoft_System/Drawing/Color.md) color, [Point](../../Stimulsoft_System/Drawing/Point.md) location, number size, boolean visible) |  |

**constructor**(**color**: [Color](../../Stimulsoft_System/Drawing/Color.md), **location**: [Point](../../Stimulsoft_System/Drawing/Point.md), **size**: number, **visible**: boolean)

**Parameters**

- **color** ([Color](../../Stimulsoft_System/Drawing/Color.md))  
- **location** ([Point](../../Stimulsoft_System/Drawing/Point.md))  
- **size** (number)  
- **visible** (boolean)  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **location** | [Point](../../Stimulsoft_System/Drawing/Point.md) |  |
| **size** | number |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | any | Creates a new object that is a copy of the current instance. |
| **loadFromXml** `static` | [StiSimpleShadow](StiSimpleShadow.md) |  |

---

### Method Details

#### clone

**clone**(): any

Creates a new object that is a copy of the current instance.

**Returns** any — A new object that is a copy of this instance.


---

#### loadFromXml `static`

**loadFromXml**(**text**: string): [StiSimpleShadow](StiSimpleShadow.md)

**Parameters**

- **text** (string)  

**Returns** [StiSimpleShadow](StiSimpleShadow.md)

