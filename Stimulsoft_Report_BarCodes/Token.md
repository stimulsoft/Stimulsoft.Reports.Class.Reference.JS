---
title: "Token Class"
---

## Token Class

**Namespace:** `Stimulsoft.Report.BarCodes`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([Token](Token.md) previous) |  |

**constructor**(**previous**: [Token](Token.md))

**Parameters**

- **previous** ([Token](Token.md))  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **add** | [Token](Token.md) |  |
| **addBinaryShift** | [Token](Token.md) |  |
| **appendTo** | void |  |

---

### Method Details

#### add

**add**(**value**: number, **bitCount**: number): [Token](Token.md)

**Parameters**

- **value** (number)  
- **bitCount** (number)  

**Returns** [Token](Token.md)


---

#### addBinaryShift

**addBinaryShift**(**start**: number, **byteCount**: number): [Token](Token.md)

**Parameters**

- **start** (number)  
- **byteCount** (number)  

**Returns** [Token](Token.md)


---

#### appendTo

**appendTo**(**bitArray**: [BitArray](../Stimulsoft_Report_Export/BitArray.md), **text**: number[]): void

**Parameters**

- **bitArray** ([BitArray](../Stimulsoft_Report_Export/BitArray.md))  
- **text** (number[])  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **previous** | [Token](Token.md) |  |
