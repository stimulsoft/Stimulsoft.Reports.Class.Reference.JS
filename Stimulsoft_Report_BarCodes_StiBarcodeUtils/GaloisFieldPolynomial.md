---
title: "GaloisFieldPolynomial Class"
---

## GaloisFieldPolynomial Class

**Namespace:** `Stimulsoft.Report.BarCodes.StiBarcodeUtils`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([GaloisField](GaloisField.md) field, number[] coefficients) |  |

**constructor**(**field**: [GaloisField](GaloisField.md), **coefficients**: number[])

**Parameters**

- **field** ([GaloisField](GaloisField.md))  
- **coefficients** (number[])  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **getCoefficients** | number[] |  |
| **getDegree** | number |  |
| **isZero** | boolean |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **addOrSubtract** | [GaloisFieldPolynomial](GaloisFieldPolynomial.md) |  |
| **divide** | [GaloisFieldPolynomial](GaloisFieldPolynomial.md)[] |  |
| **getCoefficient** | number |  |
| **multiply** | [GaloisFieldPolynomial](GaloisFieldPolynomial.md) |  |
| **multiplyByMonomial** | [GaloisFieldPolynomial](GaloisFieldPolynomial.md) |  |

---

### Method Details

#### addOrSubtract

**addOrSubtract**(**other**: [GaloisFieldPolynomial](GaloisFieldPolynomial.md)): [GaloisFieldPolynomial](GaloisFieldPolynomial.md)

**Parameters**

- **other** ([GaloisFieldPolynomial](GaloisFieldPolynomial.md))  

**Returns** [GaloisFieldPolynomial](GaloisFieldPolynomial.md)


---

#### divide

**divide**(**other**: [GaloisFieldPolynomial](GaloisFieldPolynomial.md)): [GaloisFieldPolynomial](GaloisFieldPolynomial.md)[]

**Parameters**

- **other** ([GaloisFieldPolynomial](GaloisFieldPolynomial.md))  

**Returns** [GaloisFieldPolynomial](GaloisFieldPolynomial.md)[]


---

#### getCoefficient

**getCoefficient**(**degree**: number): number

**Parameters**

- **degree** (number)  

**Returns** number


---

#### multiply

**multiply**(**other**: [GaloisFieldPolynomial](GaloisFieldPolynomial.md)): [GaloisFieldPolynomial](GaloisFieldPolynomial.md)

**Parameters**

- **other** ([GaloisFieldPolynomial](GaloisFieldPolynomial.md))  

**Returns** [GaloisFieldPolynomial](GaloisFieldPolynomial.md)


---

#### multiplyByMonomial

**multiplyByMonomial**(**degree**: number, **coefficient**: number): [GaloisFieldPolynomial](GaloisFieldPolynomial.md)

**Parameters**

- **degree** (number)  
- **coefficient** (number)  

**Returns** [GaloisFieldPolynomial](GaloisFieldPolynomial.md)


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **largerCoefficients** | any |  |
| **quotient** | any |  |
| **remainder** | any |  |
| **smallerCoefficients** | any |  |
