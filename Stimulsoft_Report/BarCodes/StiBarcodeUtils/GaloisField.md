---
title: "GaloisField Class"
---

## GaloisField Class

**Namespace:** `Stimulsoft.Report.BarCodes.StiBarcodeUtils`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(number primitive, number size, number genBase) |  |

**constructor**(**primitive**: number, **size**: number, **genBase**: number)

**Parameters**

- **primitive** (number)  
- **size** (number)  
- **genBase** (number)  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **getGeneratorBase** | number |  |
| **getOne** | [GaloisFieldPolynomial](GaloisFieldPolynomial.md) |  |
| **getZero** | [GaloisFieldPolynomial](GaloisFieldPolynomial.md) |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **addOrSubtract** `static` | number |  |
| **buildMonomial** | [GaloisFieldPolynomial](GaloisFieldPolynomial.md) |  |
| **exp** | number |  |
| **inverse** | number |  |
| **multiply** | number |  |

---

### Method Details

#### addOrSubtract `static`

**addOrSubtract**(**a**: number, **b**: number): number

**Parameters**

- **a** (number)  
- **b** (number)  

**Returns** number


---

#### buildMonomial

**buildMonomial**(**degree**: number, **coefficient**: number): [GaloisFieldPolynomial](GaloisFieldPolynomial.md)

**Parameters**

- **degree** (number)  
- **coefficient** (number)  

**Returns** [GaloisFieldPolynomial](GaloisFieldPolynomial.md)


---

#### exp

**exp**(**a**: number): number

**Parameters**

- **a** (number)  

**Returns** number


---

#### inverse

**inverse**(**a**: number): number

**Parameters**

- **a** (number)  

**Returns** number


---

#### multiply

**multiply**(**a**: number, **b**: number): number

**Parameters**

- **a** (number)  
- **b** (number)  

**Returns** number

