---
title: "StiGZipHelper Class"
---

## StiGZipHelper Class

**Namespace:** `Stimulsoft.Base`

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **crcTable** `static` | number[] |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **crc32** `static` | number |  |
| **pack** `static` | string | number[] |  |
| **unpack** `static` | string | number[] | Uint8Array |  |

---

### Method Details

#### crc32 `static`

**crc32**(**data**: Uint8Array): number

**Parameters**

- **data** (Uint8Array)  

**Returns** number


---

#### pack `static`

**pack**(**data**: string \| number[] \| Uint8Array, **name**: string): string \| number[]

**Parameters**

- **data** (string \| number[] \| Uint8Array)  
- **name** (string)  

**Returns** string \| number[]


---

#### unpack `static`

**unpack**(**data**: string \| number[] \| Uint8Array, **returnString**: boolean): string \| number[] \| Uint8Array

**Parameters**

- **data** (string \| number[] \| Uint8Array)  
- **returnString** (boolean)  

**Returns** string \| number[] \| Uint8Array


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **crc** | any |  |
| **value** | any |  |
| **value** | any |  |
