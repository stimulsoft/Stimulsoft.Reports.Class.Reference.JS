---
title: "Rectangle Class"
---

## Rectangle Class

**Namespace:** `Stimulsoft.System.Drawing`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(any x, any y, any width, any height) |  |

**constructor**(**x**: any, **y**: any, **width**: any, **height**: any)

**Parameters**

- **x** (any)  
- **y** (any)  
- **width** (any)  
- **height** (any)  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **bottom** | number |  |
| **empty** `static` | [Rectangle](Rectangle.md) |  |
| **isEmpty** | boolean |  |
| **isEmptyF** | boolean |  |
| **left** | number |  |
| **location** | [Point](Point.md) |  |
| **right** | number |  |
| **size** | [Size](Size.md) |  |
| **top** | number |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **alignToGrid** | [Rectangle](Rectangle.md) |  |
| **clone** | [Rectangle](Rectangle.md) |  |
| **contains** | boolean |  |
| **convertFromXml** `static` | [Rectangle](Rectangle.md) |  |
| **equals** | boolean |  |
| **fitToRectangle** | [Rectangle](Rectangle.md) |  |
| **fromLTRB** `static` | [Rectangle](Rectangle.md) |  |
| **getNamespace** `static` | string |  |
| **getTypeName** `static` | string |  |
| **inflate** | [Rectangle](Rectangle.md) |  |
| **intersectsWith** | boolean |  |
| **multiply** | [Rectangle](Rectangle.md) |  |
| **normalize** | [Rectangle](Rectangle.md) |  |
| **offset** | [Rectangle](Rectangle.md) |  |
| **offsetRect** | [Rectangle](Rectangle.md) |  |
| **round** `static` | [Rectangle](Rectangle.md) |  |
| **toString** | string |  |
| **union** `static` | [Rectangle](Rectangle.md) |  |

---

### Method Details

#### alignToGrid

**alignToGrid**(**gridSize**: number, **aligningToGrid**: boolean): [Rectangle](Rectangle.md)

**Parameters**

- **gridSize** (number)  
- **aligningToGrid** (boolean)  

**Returns** [Rectangle](Rectangle.md)


---

#### clone

**clone**(): [Rectangle](Rectangle.md)

**Returns** [Rectangle](Rectangle.md)


---

#### contains

**contains**(**x**: number, **y**: number): boolean

**Parameters**

- **x** (number)  
- **y** (number)  

**Returns** boolean


---

#### convertFromXml `static`

**convertFromXml**(**text**: string): [Rectangle](Rectangle.md)

**Parameters**

- **text** (string)  

**Returns** [Rectangle](Rectangle.md)


---

#### equals

**equals**(**rect**: [Rectangle](Rectangle.md)): boolean

**Parameters**

- **rect** ([Rectangle](Rectangle.md))  

**Returns** boolean


---

#### fitToRectangle

**fitToRectangle**(**rectangle**: [Rectangle](Rectangle.md)): [Rectangle](Rectangle.md)

**Parameters**

- **rectangle** ([Rectangle](Rectangle.md))  

**Returns** [Rectangle](Rectangle.md)


---

#### fromLTRB `static`

**fromLTRB**(**left**: number, **top**: number, **right**: number, **bottom**: number): [Rectangle](Rectangle.md)

**Parameters**

- **left** (number)  
- **top** (number)  
- **right** (number)  
- **bottom** (number)  

**Returns** [Rectangle](Rectangle.md)


---

#### getNamespace `static`

**getNamespace**(): string

**Returns** string


---

#### getTypeName `static`

**getTypeName**(): string

**Returns** string


---

#### inflate

**inflate**(**width**: number, **height**: number): [Rectangle](Rectangle.md)

**Parameters**

- **width** (number)  
- **height** (number)  

**Returns** [Rectangle](Rectangle.md)


---

#### intersectsWith

**intersectsWith**(**rect**: [Rectangle](Rectangle.md)): boolean

**Parameters**

- **rect** ([Rectangle](Rectangle.md))  

**Returns** boolean


---

#### multiply

**multiply**(**multipleFactor**: number): [Rectangle](Rectangle.md)

**Parameters**

- **multipleFactor** (number)  

**Returns** [Rectangle](Rectangle.md)


---

#### normalize

**normalize**(): [Rectangle](Rectangle.md)

**Returns** [Rectangle](Rectangle.md)


---

#### offset

**offset**(**x**: number, **y**: number): [Rectangle](Rectangle.md)

**Parameters**

- **x** (number)  
- **y** (number)  

**Returns** [Rectangle](Rectangle.md)


---

#### offsetRect

**offsetRect**(**offsettingRectangle**: [Rectangle](Rectangle.md)): [Rectangle](Rectangle.md)

**Parameters**

- **offsettingRectangle** ([Rectangle](Rectangle.md))  

**Returns** [Rectangle](Rectangle.md)


---

#### round `static`

**round**(**value**: [Rectangle](Rectangle.md)): [Rectangle](Rectangle.md)

**Parameters**

- **value** ([Rectangle](Rectangle.md))  

**Returns** [Rectangle](Rectangle.md)


---

#### toString

**toString**(): string

**Returns** string


---

#### union `static`

**union**(**a**: [Rectangle](Rectangle.md), **b**: [Rectangle](Rectangle.md)): [Rectangle](Rectangle.md)

**Parameters**

- **a** ([Rectangle](Rectangle.md))  
- **b** ([Rectangle](Rectangle.md))  

**Returns** [Rectangle](Rectangle.md)


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **height** | number |  |
| **width** | number |  |
| **x** | number |  |
| **y** | number |  |
