---
title: "StiGisRect Class"
---

## StiGisRect Class

**Namespace:** `Stimulsoft.Report.Maps.Gis`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(number x, number y, number width, number height, [StiGisPoint](StiGisPoint.md) location, [StiGisSize](StiGisSize.md) size) |  |

**constructor**(**x**: number, **y**: number, **width**: number, **height**: number, **location**: [StiGisPoint](StiGisPoint.md), **size**: [StiGisSize](StiGisSize.md))

**Parameters**

- **x** (number)  
- **y** (number)  
- **width** (number)  
- **height** (number)  
- **location** ([StiGisPoint](StiGisPoint.md))  
- **size** ([StiGisSize](StiGisSize.md))  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **bottom** | number |  |
| **empty** `static` | [StiGisRect](StiGisRect.md) |  |
| **left** | number |  |
| **right** | number |  |
| **top** | number |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **contains** | boolean |  |
| **contains2** | boolean |  |
| **contains3** | boolean |  |
| **equals** | boolean |  |
| **getLeftBottom** | [StiGisPoint](StiGisPoint.md) |  |
| **getLocation** | [StiGisPoint](StiGisPoint.md) |  |
| **getRightBottom** | [StiGisPoint](StiGisPoint.md) |  |
| **getRightTop** | [StiGisPoint](StiGisPoint.md) |  |
| **getSize** | [StiGisSize](StiGisSize.md) |  |
| **inflate** | void |  |
| **isEmpty** | boolean |  |
| **offset** | void |  |
| **offsetNegative** | void |  |
| **opEquals** `static` | boolean |  |
| **opNotEquals** `static` | boolean |  |
| **setLocation** | void |  |
| **setSize** | void |  |
| **toString** | string |  |

---

### Method Details

#### contains

**contains**(**x**: number, **y**: number): boolean

**Parameters**

- **x** (number)  
- **y** (number)  

**Returns** boolean


---

#### contains2

**contains2**(**pt**: [StiGisPoint](StiGisPoint.md)): boolean

**Parameters**

- **pt** ([StiGisPoint](StiGisPoint.md))  

**Returns** boolean


---

#### contains3

**contains3**(**rect**: [StiGisRect](StiGisRect.md)): boolean

**Parameters**

- **rect** ([StiGisRect](StiGisRect.md))  

**Returns** boolean


---

#### equals

**equals**(**obj**: any): boolean

**Parameters**

- **obj** (any)  

**Returns** boolean


---

#### getLeftBottom

**getLeftBottom**(): [StiGisPoint](StiGisPoint.md)

**Returns** [StiGisPoint](StiGisPoint.md)


---

#### getLocation

**getLocation**(): [StiGisPoint](StiGisPoint.md)

**Returns** [StiGisPoint](StiGisPoint.md)


---

#### getRightBottom

**getRightBottom**(): [StiGisPoint](StiGisPoint.md)

**Returns** [StiGisPoint](StiGisPoint.md)


---

#### getRightTop

**getRightTop**(): [StiGisPoint](StiGisPoint.md)

**Returns** [StiGisPoint](StiGisPoint.md)


---

#### getSize

**getSize**(): [StiGisSize](StiGisSize.md)

**Returns** [StiGisSize](StiGisSize.md)


---

#### inflate

**inflate**(**width**: number, **height**: number): void

**Parameters**

- **width** (number)  
- **height** (number)  


---

#### isEmpty

**isEmpty**(): boolean

**Returns** boolean


---

#### offset

**offset**(**x**: number, **y**: number): void

**Parameters**

- **x** (number)  
- **y** (number)  


---

#### offsetNegative

**offsetNegative**(**pos**: [StiGisPoint](StiGisPoint.md)): void

**Parameters**

- **pos** ([StiGisPoint](StiGisPoint.md))  


---

#### opEquals `static`

**opEquals**(**left**: [StiGisRect](StiGisRect.md), **right**: [StiGisRect](StiGisRect.md)): boolean

**Parameters**

- **left** ([StiGisRect](StiGisRect.md))  
- **right** ([StiGisRect](StiGisRect.md))  

**Returns** boolean


---

#### opNotEquals `static`

**opNotEquals**(**left**: [StiGisRect](StiGisRect.md), **right**: [StiGisRect](StiGisRect.md)): boolean

**Parameters**

- **left** ([StiGisRect](StiGisRect.md))  
- **right** ([StiGisRect](StiGisRect.md))  

**Returns** boolean


---

#### setLocation

**setLocation**(**value**: [StiGisPoint](StiGisPoint.md)): void

**Parameters**

- **value** ([StiGisPoint](StiGisPoint.md))  


---

#### setSize

**setSize**(**value**: [StiGisSize](StiGisSize.md)): void

**Parameters**

- **value** ([StiGisSize](StiGisSize.md))  


---

#### toString

**toString**(): string

**Returns** string

