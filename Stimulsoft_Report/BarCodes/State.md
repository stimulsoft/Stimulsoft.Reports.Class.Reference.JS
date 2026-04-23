---
title: "State Class"
---

## State Class

**Namespace:** `Stimulsoft.Report.BarCodes`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([Token](Token.md) token, number mode, number binaryBytes, number bitCount) |  |

**constructor**(**token**: [Token](Token.md), **mode**: number, **binaryBytes**: number, **bitCount**: number)

**Parameters**

- **token** ([Token](Token.md))  
- **mode** (number)  
- **binaryBytes** (number)  
- **bitCount** (number)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **addBinaryShiftChar** | [State](State.md) |  |
| **appendFLGn** | [State](State.md) |  |
| **endBinaryShift** | [State](State.md) |  |
| **isBetterThanOrEqualTo** | boolean |  |
| **latchAndAppend** | [State](State.md) |  |
| **shiftAndAppend** | [State](State.md) |  |
| **toBitArray** | [BitArray](../../Stimulsoft_Report_Export/BitArray.md) |  |

---

### Method Details

#### addBinaryShiftChar

**addBinaryShiftChar**(**index**: number): [State](State.md)

**Parameters**

- **index** (number)  

**Returns** [State](State.md)


---

#### appendFLGn

**appendFLGn**(**eci**: number): [State](State.md)

**Parameters**

- **eci** (number)  

**Returns** [State](State.md)


---

#### endBinaryShift

**endBinaryShift**(**index**: number): [State](State.md)

**Parameters**

- **index** (number)  

**Returns** [State](State.md)


---

#### isBetterThanOrEqualTo

**isBetterThanOrEqualTo**(**other**: [State](State.md)): boolean

**Parameters**

- **other** ([State](State.md))  

**Returns** boolean


---

#### latchAndAppend

**latchAndAppend**(**mode**: number, **value**: number): [State](State.md)

**Parameters**

- **mode** (number)  
- **value** (number)  

**Returns** [State](State.md)


---

#### shiftAndAppend

**shiftAndAppend**(**mode**: number, **value**: number): [State](State.md)

**Parameters**

- **mode** (number)  
- **value** (number)  

**Returns** [State](State.md)


---

#### toBitArray

**toBitArray**(**text**: number[]): [BitArray](../../Stimulsoft_Report_Export/BitArray.md)

**Parameters**

- **text** (number[])  

**Returns** [BitArray](../../Stimulsoft_Report_Export/BitArray.md)

