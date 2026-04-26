---
title: "Size Class"
---

## Size Class

**Namespace:** `Stimulsoft.System.Drawing`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(number width, number height) |  |

**constructor**(**width**: number, **height**: number)

**Parameters**

- **width** (number)  
- **height** (number)  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **empty** `static` | [Size](Size.md) |  |
| **isEmpty** | boolean |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **convertFromXml** `static` | [Size](Size.md) |  |
| **equals** | boolean |  |
| **getNamespace** `static` | string |  |
| **getTypeName** `static` | string |  |
| **multiply** | [Size](Size.md) |  |
| **round** | [Size](Size.md) |  |
| **swap** | [Size](Size.md) |  |

---

### Method Details

#### convertFromXml `static`

**convertFromXml**(**text**: string): [Size](Size.md)

**Parameters**

- **text** (string)  

**Returns** [Size](Size.md)


---

#### equals

**equals**(**size**: [Size](Size.md)): boolean

**Parameters**

- **size** ([Size](Size.md))  

**Returns** boolean


---

#### getNamespace `static`

**getNamespace**(): string

**Returns** string


---

#### getTypeName `static`

**getTypeName**(): string

**Returns** string


---

#### multiply

**multiply**(**multipleFactor**: number): [Size](Size.md)

**Parameters**

- **multipleFactor** (number)  

**Returns** [Size](Size.md)


---

#### round

**round**(**digits**: any): [Size](Size.md)

**Parameters**

- **digits** (any)  

**Returns** [Size](Size.md)


---

#### swap

**swap**(): [Size](Size.md)

**Returns** [Size](Size.md)


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **height** | any |  |
| **width** | any |  |
