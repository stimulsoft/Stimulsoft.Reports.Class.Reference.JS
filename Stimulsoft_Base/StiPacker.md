---
title: "StiPacker Class"
---

## StiPacker Class

**Namespace:** `Stimulsoft.Base`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **isPacked** `static` | boolean |  |
| **pack** `static` | number[] |  |
| **packAndEncryptToString** `static` | string |  |
| **packToString** `static` | string |  |
| **unpack** `static` | number[] | string |  |
| **unpack2** `static` | string |  |
| **unpackAndDecrypt** `static` | number[] | string |  |
| **unpackFromString** `static` | number[] |  |
| **unpackToString** `static` | string |  |

---

### Method Details

#### isPacked `static`

**isPacked**(**bytes**: number[]): boolean

**Parameters**

- **bytes** (number[])  

**Returns** boolean


---

#### pack `static`

**pack**(**bytes**: number[]): number[]

**Parameters**

- **bytes** (number[])  

**Returns** number[]


---

#### packAndEncryptToString `static`

**packAndEncryptToString**(**data**: number[] \| string): string

**Parameters**

- **data** (number[] \| string)  

**Returns** string


---

#### packToString `static`

**packToString**(**bytes**: number[]): string

**Parameters**

- **bytes** (number[])  

**Returns** string


---

#### unpack `static`

**unpack**(**bytes**: number[], **returnString**: boolean): number[] \| string

**Parameters**

- **bytes** (number[])  
- **returnString** (boolean)  

**Returns** number[] \| string


---

#### unpack2 `static`

**unpack2**(**bytes**: number[]): string

**Parameters**

- **bytes** (number[])  

**Returns** string


---

#### unpackAndDecrypt `static`

**unpackAndDecrypt**(**str**: string, **returnString**: boolean): number[] \| string

**Parameters**

- **str** (string)  
- **returnString** (boolean)  

**Returns** number[] \| string


---

#### unpackFromString `static`

**unpackFromString**(**str**: string): number[]

**Parameters**

- **str** (string)  

**Returns** number[]


---

#### unpackToString `static`

**unpackToString**(**bytes**: number[]): string

**Parameters**

- **bytes** (number[])  

**Returns** string


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **array** | any |  |
| **bytes** | any |  |
| **bytes** | any |  |
| **bytes** | any |  |
| **bytes** | any |  |
| **bytes** | any |  |
| **bytes** | any |  |
