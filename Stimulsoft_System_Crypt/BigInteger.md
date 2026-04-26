---
title: "BigInteger Class"
---

## BigInteger Class

**Namespace:** `Stimulsoft.System.Crypt`

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **DB** | number |  |
| **DM** | number |  |
| **DV** | number |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **abs** | [BigInteger](BigInteger.md) |  |
| **addOffset2** | void |  |
| **am** | number |  |
| **bitLength** | number |  |
| **clamp** | void |  |
| **compareTo** | number |  |
| **copyTo** | void |  |
| **divRemTo** | void |  |
| **divide** | [BigInteger](BigInteger.md) |  |
| **dlShiftTo** | void |  |
| **drShiftTo** | void |  |
| **fromNumber** `static` *(+1 overloads)* | [BigInteger](BigInteger.md) |  |
| **fromString** `static` *(+1 overloads)* | [BigInteger](BigInteger.md) |  |
| **gcd** | [BigInteger](BigInteger.md) |  |
| **int2char** `static` | string |  |
| **invDigit** | number |  |
| **isProbablePrime** | boolean |  |
| **mod** | [BigInteger](BigInteger.md) |  |
| **modInverse** | [BigInteger](BigInteger.md) |  |
| **modPowInt** | [BigInteger](BigInteger.md) |  |
| **multiply** | [BigInteger](BigInteger.md) |  |
| **multiplyLowerTo** | void |  |
| **multiplyTo** | void |  |
| **multiplyUpperTo** | void |  |
| **square** | [BigInteger](BigInteger.md) |  |
| **squareTo** | void |  |
| **staticConstructor** `static` | void |  |
| **subTo** | void |  |
| **subtract** | [BigInteger](BigInteger.md) |  |
| **toByteArray** | number[] |  |
| **toString** | string |  |

---

### Method Details

#### abs

**abs**(): [BigInteger](BigInteger.md)

**Returns** [BigInteger](BigInteger.md)


---

#### addOffset2

**addOffset2**(**n**: number, **w**: number): void

**Parameters**

- **n** (number)  
- **w** (number)  


---

#### am

**am**(**i**: number, **x**: number, **w**: [BigInteger](BigInteger.md), **j**: number, **c**: number, **n**: number): number

**Parameters**

- **i** (number)  
- **x** (number)  
- **w** ([BigInteger](BigInteger.md))  
- **j** (number)  
- **c** (number)  
- **n** (number)  

**Returns** number


---

#### bitLength

**bitLength**(): number

**Returns** number


---

#### clamp

**clamp**(): void


---

#### compareTo

**compareTo**(**a**: [BigInteger](BigInteger.md)): number

**Parameters**

- **a** ([BigInteger](BigInteger.md))  

**Returns** number


---

#### copyTo

**copyTo**(**r**: [BigInteger](BigInteger.md)): void

**Parameters**

- **r** ([BigInteger](BigInteger.md))  


---

#### divRemTo

**divRemTo**(**m**: [BigInteger](BigInteger.md), **q**: [BigInteger](BigInteger.md), **r**: [BigInteger](BigInteger.md)): void

**Parameters**

- **m** ([BigInteger](BigInteger.md))  
- **q** ([BigInteger](BigInteger.md))  
- **r** ([BigInteger](BigInteger.md))  


---

#### divide

**divide**(**a**: any): [BigInteger](BigInteger.md)

**Parameters**

- **a** (any)  

**Returns** [BigInteger](BigInteger.md)


---

#### dlShiftTo

**dlShiftTo**(**n**: number, **r**: [BigInteger](BigInteger.md)): void

**Parameters**

- **n** (number)  
- **r** ([BigInteger](BigInteger.md))  


---

#### drShiftTo

**drShiftTo**(**n**: number, **r**: [BigInteger](BigInteger.md)): void

**Parameters**

- **n** (number)  
- **r** ([BigInteger](BigInteger.md))  


---

#### fromNumber `static`

**fromNumber**(**a**: number, **b**: number, **c**: [SecureRandom](SecureRandom.md)): [BigInteger](BigInteger.md)

**Parameters**

- **a** (number)  
- **b** (number)  
- **c** ([SecureRandom](SecureRandom.md))  

**Returns** [BigInteger](BigInteger.md)

---

**fromNumber**(**a**: number, **b**: number, **c**: [SecureRandom](SecureRandom.md)): void

**Parameters**

- **a** (number)  
- **b** (number)  
- **c** ([SecureRandom](SecureRandom.md))  


---

#### fromString `static`

**fromString**(**s**: any, **b**: any): [BigInteger](BigInteger.md)

**Parameters**

- **s** (any)  
- **b** (any)  

**Returns** [BigInteger](BigInteger.md)

---

**fromString**(**s**: any, **b**: any): void

**Parameters**

- **s** (any)  
- **b** (any)  


---

#### gcd

**gcd**(**a**: [BigInteger](BigInteger.md)): [BigInteger](BigInteger.md)

**Parameters**

- **a** ([BigInteger](BigInteger.md))  

**Returns** [BigInteger](BigInteger.md)


---

#### int2char `static`

**int2char**(**n**: any): string

**Parameters**

- **n** (any)  

**Returns** string


---

#### invDigit

**invDigit**(): number

**Returns** number


---

#### isProbablePrime

**isProbablePrime**(**t**: any): boolean

**Parameters**

- **t** (any)  

**Returns** boolean


---

#### mod

**mod**(**a**: [BigInteger](BigInteger.md)): [BigInteger](BigInteger.md)

**Parameters**

- **a** ([BigInteger](BigInteger.md))  

**Returns** [BigInteger](BigInteger.md)


---

#### modInverse

**modInverse**(**m**: [BigInteger](BigInteger.md)): [BigInteger](BigInteger.md)

**Parameters**

- **m** ([BigInteger](BigInteger.md))  

**Returns** [BigInteger](BigInteger.md)


---

#### modPowInt

**modPowInt**(**e**: number, **m**: [BigInteger](BigInteger.md)): [BigInteger](BigInteger.md)

**Parameters**

- **e** (number)  
- **m** ([BigInteger](BigInteger.md))  

**Returns** [BigInteger](BigInteger.md)


---

#### multiply

**multiply**(**a**: [BigInteger](BigInteger.md)): [BigInteger](BigInteger.md)

**Parameters**

- **a** ([BigInteger](BigInteger.md))  

**Returns** [BigInteger](BigInteger.md)


---

#### multiplyLowerTo

**multiplyLowerTo**(**a**: [BigInteger](BigInteger.md), **n**: number, **r**: [BigInteger](BigInteger.md)): void

**Parameters**

- **a** ([BigInteger](BigInteger.md))  
- **n** (number)  
- **r** ([BigInteger](BigInteger.md))  


---

#### multiplyTo

**multiplyTo**(**a**: [BigInteger](BigInteger.md), **r**: [BigInteger](BigInteger.md)): void

**Parameters**

- **a** ([BigInteger](BigInteger.md))  
- **r** ([BigInteger](BigInteger.md))  


---

#### multiplyUpperTo

**multiplyUpperTo**(**a**: [BigInteger](BigInteger.md), **n**: number, **r**: [BigInteger](BigInteger.md)): void

**Parameters**

- **a** ([BigInteger](BigInteger.md))  
- **n** (number)  
- **r** ([BigInteger](BigInteger.md))  


---

#### square

**square**(): [BigInteger](BigInteger.md)

**Returns** [BigInteger](BigInteger.md)


---

#### squareTo

**squareTo**(**r**: [BigInteger](BigInteger.md)): void

**Parameters**

- **r** ([BigInteger](BigInteger.md))  


---

#### staticConstructor `static`

**staticConstructor**(): void


---

#### subTo

**subTo**(**a**: [BigInteger](BigInteger.md), **r**: [BigInteger](BigInteger.md)): void

**Parameters**

- **a** ([BigInteger](BigInteger.md))  
- **r** ([BigInteger](BigInteger.md))  


---

#### subtract

**subtract**(**a**: [BigInteger](BigInteger.md)): [BigInteger](BigInteger.md)

**Parameters**

- **a** ([BigInteger](BigInteger.md))  

**Returns** [BigInteger](BigInteger.md)


---

#### toByteArray

**toByteArray**(): number[]

**Returns** number[]


---

#### toString

**toString**(**radix**: number): string

**Parameters**

- **radix** (number)  

**Returns** string


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **c** | any |  |
| **c** | any |  |
| **d** | any |  |
| **d** | any |  |
| **d** | any |  |
| **d** | any |  |
| **f** | any |  |
| **f** | any |  |
| **i** | any |  |
| **i** | any |  |
| **i** | any |  |
| **is1** | any |  |
| **j** | any |  |
| **l** | any |  |
| **m** | any |  |
| **m** | any |  |
| **mi** | any |  |
| **n** | any |  |
| **r** | any |  |
| **r** | any |  |
| **r** | any |  |
| **r** | any |  |
| **r** | any |  |
| **r** | any |  |
| **r** | any |  |
| **r** | any |  |
| **r2** | any |  |
| **r2** | any |  |
| **r2** | any |  |
| **rr** | any |  |
| **rr** | any |  |
| **s** | number |  |
| **t** | number |  |
| **t** | any |  |
| **t** | any |  |
| **t** | any |  |
| **w** | any |  |
| **w** | any |  |
| **w** | any |  |
| **w** | any |  |
| **x** | any |  |
| **x** | any |  |
| **x** | any |  |
| **x** | any |  |
| **x** | any |  |
| **x** | any |  |
| **y** | any |  |
| **y** | any |  |
| **y** | any |  |
| **y** | any |  |
| **y** | any |  |
| **y** | any |  |
