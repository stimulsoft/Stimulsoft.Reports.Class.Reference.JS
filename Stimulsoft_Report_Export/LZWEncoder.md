---
title: "LZWEncoder Class"
---

## LZWEncoder Class

**Namespace:** `Stimulsoft.Report.Export`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(any width, any height, any pixels, any color_depth) |  |

**constructor**(**width**: any, **height**: any, **pixels**: any, **color_depth**: any)

**Parameters**

- **width** (any)  
- **height** (any)  
- **pixels** (any)  
- **color_depth** (any)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **MAXCODE** | void |  |
| **char_out** | void |  |
| **cl_block** | void |  |
| **cl_hash** | void |  |
| **compress** | void |  |
| **encode** | void |  |
| **flush_char** | void |  |
| **nextPixel** | void |  |
| **output** | void |  |

---

### Method Details

#### MAXCODE

**MAXCODE**(**n_bits**: any): void

**Parameters**

- **n_bits** (any)  


---

#### char_out

**char_out**(**c**: any, **outs**: any): void

**Parameters**

- **c** (any)  
- **outs** (any)  


---

#### cl_block

**cl_block**(**outs**: any): void

**Parameters**

- **outs** (any)  


---

#### cl_hash

**cl_hash**(**hsize**: any): void

**Parameters**

- **hsize** (any)  


---

#### compress

**compress**(**init_bits**: any, **outs**: any): void

**Parameters**

- **init_bits** (any)  
- **outs** (any)  


---

#### encode

**encode**(**os**: any): void

**Parameters**

- **os** (any)  


---

#### flush_char

**flush_char**(**outs**: any): void

**Parameters**

- **outs** (any)  


---

#### nextPixel

**nextPixel**(): void


---

#### output

**output**(**code**: any, **outs**: any): void

**Parameters**

- **code** (any)  
- **outs** (any)  

