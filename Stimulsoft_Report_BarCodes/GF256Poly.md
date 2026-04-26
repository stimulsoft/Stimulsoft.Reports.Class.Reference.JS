---
title: "GF256Poly Class"
---

## GF256Poly Class

**Namespace:** `Stimulsoft.Report.BarCodes`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([GF256](GF256.md) field, number[] coefficients) |  |

**constructor**(**field**: [GF256](GF256.md), **coefficients**: number[])

**Parameters**

- **field** ([GF256](GF256.md))  
- **coefficients** (number[])  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **addOrSubtract** | [GF256Poly](GF256Poly.md) |  |
| **divide** | [GF256Poly](GF256Poly.md)[] |  |
| **evaluateAt** | number |  |
| **getCoefficient** | number |  |
| **getCoefficients** | number[] |  |
| **getDegree** | number |  |
| **isZero** | boolean |  |
| **multiply** | [GF256Poly](GF256Poly.md) |  |
| **multiply1** | [GF256Poly](GF256Poly.md) |  |
| **multiplyByMonomial** | [GF256Poly](GF256Poly.md) |  |

---

### Method Details

#### addOrSubtract

**addOrSubtract**(**other**: [GF256Poly](GF256Poly.md)): [GF256Poly](GF256Poly.md)

**Parameters**

- **other** ([GF256Poly](GF256Poly.md))  

**Returns** [GF256Poly](GF256Poly.md)


---

#### divide

**divide**(**other**: [GF256Poly](GF256Poly.md)): [GF256Poly](GF256Poly.md)[]

**Parameters**

- **other** ([GF256Poly](GF256Poly.md))  

**Returns** [GF256Poly](GF256Poly.md)[]


---

#### evaluateAt

**evaluateAt**(**a**: number): number

**Parameters**

- **a** (number)  

**Returns** number


---

#### getCoefficient

**getCoefficient**(**degree**: number): number

**Parameters**

- **degree** (number)  

**Returns** number


---

#### getCoefficients

**getCoefficients**(): number[]

**Returns** number[]


---

#### getDegree

**getDegree**(): number

**Returns** number


---

#### isZero

**isZero**(): boolean

**Returns** boolean


---

#### multiply

**multiply**(**other**: [GF256Poly](GF256Poly.md)): [GF256Poly](GF256Poly.md)

**Parameters**

- **other** ([GF256Poly](GF256Poly.md))  

**Returns** [GF256Poly](GF256Poly.md)


---

#### multiply1

**multiply1**(**scalar**: number): [GF256Poly](GF256Poly.md)

**Parameters**

- **scalar** (number)  

**Returns** [GF256Poly](GF256Poly.md)


---

#### multiplyByMonomial

**multiplyByMonomial**(**degree**: number, **coefficient**: number): [GF256Poly](GF256Poly.md)

**Parameters**

- **degree** (number)  
- **coefficient** (number)  

**Returns** [GF256Poly](GF256Poly.md)


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **_coefficients** | number[] |  |
| **_field** | [GF256](GF256.md) |  |
| **largerCoefficients** | any |  |
| **quotient** | any |  |
| **remainder** | any |  |
| **result** | any |  |
| **result2** | any |  |
| **smallerCoefficients** | any |  |
