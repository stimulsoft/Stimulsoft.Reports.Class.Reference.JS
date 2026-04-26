---
title: "MemoryStream Class"
---

## MemoryStream Class

**Namespace:** `Stimulsoft.System.IO`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(number[] \| Uint8Array array) |  |

**constructor**(**array**: number[] \| Uint8Array)

**Parameters**

- **array** (number[] \| Uint8Array)  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **canSeek** | boolean |  |
| **canWrite** | boolean |  |
| **length** | number |  |
| **position** | number |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **close** | void |  |
| **copyTo** | void |  |
| **flush** | void |  |
| **read** | number |  |
| **seek** | number |  |
| **setLength** | void |  |
| **toArray** | number[] |  |
| **toString** | string |  |
| **write** | void |  |
| **writeByte** | void |  |
| **writeBytes** | void |  |
| **writeLine** | void |  |
| **writeLine1** | void |  |
| **writeString** | void |  |
| **writeTo** | void |  |

---

### Method Details

#### close

**close**(): void


---

#### copyTo

**copyTo**(**stream**: [MemoryStream](MemoryStream.md)): void

**Parameters**

- **stream** ([MemoryStream](MemoryStream.md))  


---

#### flush

**flush**(): void


---

#### read

**read**(**array**: number[], **offset**: any, **length**: number): number

**Parameters**

- **array** (number[])  
- **offset** (any)  
- **length** (number)  

**Returns** number


---

#### seek

**seek**(**offset**: number, **origin**: [SeekOrigin](SeekOrigin.md)): number

**Parameters**

- **offset** (number)  
- **origin** ([SeekOrigin](SeekOrigin.md))  

**Returns** number


---

#### setLength

**setLength**(**length**: number): void

**Parameters**

- **length** (number)  


---

#### toArray

**toArray**(): number[]

**Returns** number[]


---

#### toString

**toString**(): string

**Returns** string


---

#### write

**write**(**array**: number[] \| Uint8Array, **offset**: any, **length**: number): void

**Parameters**

- **array** (number[] \| Uint8Array)  
- **offset** (any)  
- **length** (number)  


---

#### writeByte

**writeByte**(**byte**: number): void

**Parameters**

- **byte** (number)  


---

#### writeBytes

**writeBytes**(**array**: Uint8Array, **offset**: any, **length**: number): void

**Parameters**

- **array** (Uint8Array)  
- **offset** (any)  
- **length** (number)  


---

#### writeLine

**writeLine**(**inputString**: string): void

**Parameters**

- **inputString** (string)  


---

#### writeLine1

**writeLine1**(**inputString**: string, **values**: any[]): void

**Parameters**

- **inputString** (string)  
- **values** (any[])  


---

#### writeString

**writeString**(**inputString**: string, **newLine**: any): void

**Parameters**

- **inputString** (string)  
- **newLine** (any)  


---

#### writeTo

**writeTo**(**stream**: [MemoryStream](MemoryStream.md)): void

**Parameters**

- **stream** ([MemoryStream](MemoryStream.md))  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **st** | any |  |
| **tempPosition** | any |  |
| **tempPosition** | any |  |
| **tempPosition** | any |  |
