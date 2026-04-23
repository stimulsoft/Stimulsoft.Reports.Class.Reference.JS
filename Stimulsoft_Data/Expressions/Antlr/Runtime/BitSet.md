---
title: "BitSet Class"
---

## BitSet Class

**Namespace:** `Stimulsoft.Data.Expressions.Antlr.Runtime`

A stripped-down version of org.antlr.misc.BitSet that is just
 good enough to handle runtime requirements such as FOLLOW sets
 for automatic error recovery.

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(number nbits) | Construct a bitset given the size |

**constructor**(**nbits**: number)

Construct a bitset given the size

**Parameters**

- **nbits** (number) — The size of the bitset in bits  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **add** | void | or this element into this set (grow as necessary to accommodate) |
| **clone** | any |  |
| **create** `static` | void | Construction from a static array of longs |
| **equals** | boolean |  |
| **getHashCode** | number |  |
| **growToInclude** | void | Grows the set to a larger number of bits. |
| **isNil** | boolean |  |
| **lengthInLongWords** | number | return how much space is being used by the bits array not how many actually have member bits on. |
| **member** | boolean |  |
| **numBits** | number |  |
| **of2** `static` | [BitSet](BitSet.md) |  |
| **of3** `static` | [BitSet](BitSet.md) |  |
| **of4** `static` | [BitSet](BitSet.md) |  |
| **or** | [BitSet](BitSet.md) | return this \| a in a new set |
| **orInPlace** | void |  |
| **remove** | void |  |
| **size** | number |  |
| **toArray** | number[] |  |
| **toString** | void |  |

---

### Method Details

#### add

**add**(**el**: number): void

or this element into this set (grow as necessary to accommodate)

**Parameters**

- **el** (number)  


---

#### clone

**clone**(): any

**Returns** any


---

#### create `static`

**create**(**bits**: number[]): void

Construction from a static array of longs

**Parameters**

- **bits** (number[])  


---

#### equals

**equals**(**other**: any): boolean

**Parameters**

- **other** (any)  

**Returns** boolean


---

#### getHashCode

**getHashCode**(): number

**Returns** number


---

#### growToInclude

**growToInclude**(**bit**: number): void

Grows the set to a larger number of bits.

**Parameters**

- **bit** (number) — element that must fit in set  


---

#### isNil

**isNil**(): boolean

**Returns** boolean


---

#### lengthInLongWords

**lengthInLongWords**(): number

return how much space is being used by the bits array not how many actually have member bits on.

**Returns** number


---

#### member

**member**(**el**: number): boolean

**Parameters**

- **el** (number)  

**Returns** boolean


---

#### numBits

**numBits**(): number

**Returns** number


---

#### of2 `static`

**of2**(**a**: number, **b**: number): [BitSet](BitSet.md)

**Parameters**

- **a** (number)  
- **b** (number)  

**Returns** [BitSet](BitSet.md)


---

#### of3 `static`

**of3**(**a**: number, **b**: number, **c**: number): [BitSet](BitSet.md)

**Parameters**

- **a** (number)  
- **b** (number)  
- **c** (number)  

**Returns** [BitSet](BitSet.md)


---

#### of4 `static`

**of4**(**a**: number, **b**: number, **c**: number, **d**: number): [BitSet](BitSet.md)

**Parameters**

- **a** (number)  
- **b** (number)  
- **c** (number)  
- **d** (number)  

**Returns** [BitSet](BitSet.md)


---

#### or

**or**(**a**: [BitSet](BitSet.md)): [BitSet](BitSet.md)

return this | a in a new set

**Parameters**

- **a** ([BitSet](BitSet.md))  

**Returns** [BitSet](BitSet.md)


---

#### orInPlace

**orInPlace**(**a**: [BitSet](BitSet.md)): void

**Parameters**

- **a** ([BitSet](BitSet.md))  


---

#### remove

**remove**(**el**: number): void

**Parameters**

- **el** (number)  


---

#### size

**size**(): number

**Returns** number


---

#### toArray

**toArray**(): number[]

**Returns** number[]


---

#### toString

**toString**(**tokenNames**: string[]): void

**Parameters**

- **tokenNames** (string[])  

