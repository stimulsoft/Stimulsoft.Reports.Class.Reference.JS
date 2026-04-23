---
title: "Matrix Class"
---

## Matrix Class

**Namespace:** `Stimulsoft.System.Drawing.Drawing2D`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(any[] arg) |  |

**constructor**(**arg**: any[])

**Parameters**

- **arg** (any[])  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **elements** | number[] |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | [Matrix](Matrix.md) |  |
| **isIdentity** | boolean |  |
| **multiply** | void |  |
| **multiplyAppend** | void |  |
| **multiplyPrepend** | void |  |
| **rotate** | [Matrix](Matrix.md) |  |
| **scale** | [Matrix](Matrix.md) |  |
| **toString** | string |  |
| **transformPoints** | void |  |
| **translate** | [Matrix](Matrix.md) |  |

---

### Method Details

#### clone

**clone**(): [Matrix](Matrix.md)

**Returns** [Matrix](Matrix.md)


---

#### isIdentity

**isIdentity**(): boolean

**Returns** boolean


---

#### multiply

**multiply**(**matrix2**: [Matrix](Matrix.md)): void

**Parameters**

- **matrix2** ([Matrix](Matrix.md))  


---

#### multiplyAppend

**multiplyAppend**(**mx**: [Matrix](Matrix.md)): void

**Parameters**

- **mx** ([Matrix](Matrix.md))  


---

#### multiplyPrepend

**multiplyPrepend**(**mx**: [Matrix](Matrix.md)): void

**Parameters**

- **mx** ([Matrix](Matrix.md))  


---

#### rotate

**rotate**(**angle**: number): [Matrix](Matrix.md)

**Parameters**

- **angle** (number)  

**Returns** [Matrix](Matrix.md)


---

#### scale

**scale**(**scaleX**: number, **scaleY**: number): [Matrix](Matrix.md)

**Parameters**

- **scaleX** (number)  
- **scaleY** (number)  

**Returns** [Matrix](Matrix.md)


---

#### toString

**toString**(): string

**Returns** string


---

#### transformPoints

**transformPoints**(**points**: [Point](../Point.md)[]): void

**Parameters**

- **points** ([Point](../Point.md)[])  


---

#### translate

**translate**(**x**: number, **y**: number): [Matrix](Matrix.md)

**Parameters**

- **x** (number)  
- **y** (number)  

**Returns** [Matrix](Matrix.md)

