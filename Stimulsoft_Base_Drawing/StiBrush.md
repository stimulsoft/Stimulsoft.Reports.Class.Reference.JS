---
title: "StiBrush Class"
---

## StiBrush Class

**Namespace:** `Stimulsoft.Base.Drawing`

### Inheritance

Implements: [ICloneable](../Stimulsoft_System/ICloneable.md), [IAsIs](../Stimulsoft_System/IAsIs.md)  

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | [StiBrush](StiBrush.md) |  |
| **convertToBrush** `static` | [StiBrush](StiBrush.md) |  |
| **dark** `static` | [StiBrush](StiBrush.md) |  |
| **equals** | boolean |  |
| **getBrush** `static` | [Brush](../Stimulsoft_System_Drawing/Brush.md) |  |
| **implements** | any[] |  |
| **isEmpty** `static` | boolean | Returns true if this brush is empty - brush is null or StiEmptyBrush. |
| **isTransparent** `static` | boolean | Returns true if this brush is transparent - brush is null, empty or solid and color is transparent. |
| **light** `static` | [StiBrush](StiBrush.md) |  |
| **loadFromXml** `static` | [StiBrush](StiBrush.md) |  |
| **memberwiseClone** | [StiBrush](StiBrush.md) |  |
| **toColor** `static` | [Color](../Stimulsoft_System_Drawing/Color.md) |  |

---

### Method Details

#### clone

**clone**(): [StiBrush](StiBrush.md)

**Returns** [StiBrush](StiBrush.md)


---

#### convertToBrush `static`

**convertToBrush**(**text**: string): [StiBrush](StiBrush.md)

**Parameters**

- **text** (string)  

**Returns** [StiBrush](StiBrush.md)


---

#### dark `static`

**dark**(**baseBrush**: [StiBrush](StiBrush.md), **value**: number): [StiBrush](StiBrush.md)

**Parameters**

- **baseBrush** ([StiBrush](StiBrush.md))  
- **value** (number)  

**Returns** [StiBrush](StiBrush.md)


---

#### equals

**equals**(**obj**: any): boolean

**Parameters**

- **obj** (any)  

**Returns** boolean


---

#### getBrush `static`

**getBrush**(**brush**: [StiBrush](StiBrush.md), **rect**: [Rectangle](../Stimulsoft_System_Drawing/Rectangle.md)): [Brush](../Stimulsoft_System_Drawing/Brush.md)

**Parameters**

- **brush** ([StiBrush](StiBrush.md))  
- **rect** ([Rectangle](../Stimulsoft_System_Drawing/Rectangle.md))  

**Returns** [Brush](../Stimulsoft_System_Drawing/Brush.md)


---

#### implements

**implements**(): any[]

**Returns** any[]


---

#### isEmpty `static`

**isEmpty**(**brush**: [StiBrush](StiBrush.md)): boolean

Returns true if this brush is empty - brush is null or StiEmptyBrush.

**Parameters**

- **brush** ([StiBrush](StiBrush.md))  

**Returns** boolean


---

#### isTransparent `static`

**isTransparent**(**brush**: [StiBrush](StiBrush.md)): boolean

Returns true if this brush is transparent - brush is null, empty or solid and color is transparent.

**Parameters**

- **brush** ([StiBrush](StiBrush.md))  

**Returns** boolean


---

#### light `static`

**light**(**baseBrush**: [StiBrush](StiBrush.md), **value**: number): [StiBrush](StiBrush.md)

**Parameters**

- **baseBrush** ([StiBrush](StiBrush.md))  
- **value** (number)  

**Returns** [StiBrush](StiBrush.md)


---

#### loadFromXml `static`

**loadFromXml**(**text**: string): [StiBrush](StiBrush.md)

**Parameters**

- **text** (string)  

**Returns** [StiBrush](StiBrush.md)


---

#### memberwiseClone

**memberwiseClone**(): [StiBrush](StiBrush.md)

**Returns** [StiBrush](StiBrush.md)


---

#### toColor `static`

**toColor**(**brush**: [StiBrush](StiBrush.md)): [Color](../Stimulsoft_System_Drawing/Color.md)

**Parameters**

- **brush** ([StiBrush](StiBrush.md))  

**Returns** [Color](../Stimulsoft_System_Drawing/Color.md)

