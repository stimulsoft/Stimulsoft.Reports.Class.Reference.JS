---
title: "Convert Class"
---

## Convert Class

**Namespace:** `Stimulsoft.System`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **changeType** `static` | any |  |
| **changeType2** `static` | any |  |
| **fromBase64String** `static` | number[] |  |
| **fromBase64StringText** `static` | string |  |
| **fromUTF16LE** `static` | T |  |
| **isUTF16LE** `static` | boolean |  |
| **stripBom** `static` | T |  |
| **toBase64String** `static` | string |  |
| **toBoolean** `static` | boolean |  |
| **toDateTime** `static` | [DateTime](DateTime.md) |  |
| **toDouble** `static` | number |  |
| **toFont** `static` | [Stimulsoft.System.Drawing.Font](Drawing/Font.md) |  |
| **toInt32** `static` | number |  |
| **toInt64** `static` | number |  |
| **toNumber** `static` | number |  |
| **toString** `static` | string |  |
| **toUInt32** `static` | number |  |
| **toUInt64** `static` | number |  |

---

### Method Details

#### changeType `static`

**changeType**(**value**: any, **type**: [Type](Type.md)): any

**Parameters**

- **value** (any)  
- **type** ([Type](Type.md))  

**Returns** any


---

#### changeType2 `static`

**changeType2**(**value**: any, **typeCode**: [TypeCode](TypeCode.md)): any

**Parameters**

- **value** (any)  
- **typeCode** ([TypeCode](TypeCode.md))  

**Returns** any


---

#### fromBase64String `static`

**fromBase64String**(**input**: string): number[]

**Parameters**

- **input** (string)  

**Returns** number[]


---

#### fromBase64StringText `static`

**fromBase64StringText**(**input**: string): string

**Parameters**

- **input** (string)  

**Returns** string


---

#### fromUTF16LE `static`

**fromUTF16LE**(**input**: T): T

**Parameters**

- **input** (T)  

**Returns** T


---

#### isUTF16LE `static`

**isUTF16LE**(**input**: string | number[] | Uint8Array): boolean

**Parameters**

- **input** (string | number[] | Uint8Array)  

**Returns** boolean


---

#### stripBom `static`

**stripBom**(**data**: T): T

**Parameters**

- **data** (T)  

**Returns** T


---

#### toBase64String `static`

**toBase64String**(**input**: string | number[] | Uint8Array): string

**Parameters**

- **input** (string | number[] | Uint8Array)  

**Returns** string


---

#### toBoolean `static`

**toBoolean**(**value**: any): boolean

**Parameters**

- **value** (any)  

**Returns** boolean


---

#### toDateTime `static`

**toDateTime**(**value**: any): [DateTime](DateTime.md)

**Parameters**

- **value** (any)  

**Returns** [DateTime](DateTime.md)


---

#### toDouble `static`

**toDouble**(**value**: any): number

**Parameters**

- **value** (any)  

**Returns** number


---

#### toFont `static`

**toFont**(**value**: string): [Stimulsoft.System.Drawing.Font](Drawing/Font.md)

**Parameters**

- **value** (string)  

**Returns** [Stimulsoft.System.Drawing.Font](Drawing/Font.md)


---

#### toInt32 `static`

**toInt32**(**value**: any, **radix**: number): number

**Parameters**

- **value** (any)  
- **radix** (number)  

**Returns** number


---

#### toInt64 `static`

**toInt64**(**value**: any): number

**Parameters**

- **value** (any)  

**Returns** number


---

#### toNumber `static`

**toNumber**(**value**: any): number

**Parameters**

- **value** (any)  

**Returns** number


---

#### toString `static`

**toString**(**value**: any, **format**: string): string

**Parameters**

- **value** (any)  
- **format** (string)  

**Returns** string


---

#### toUInt32 `static`

**toUInt32**(**value**: any): number

**Parameters**

- **value** (any)  

**Returns** number


---

#### toUInt64 `static`

**toUInt64**(**value**: any): number

**Parameters**

- **value** (any)  

**Returns** number

