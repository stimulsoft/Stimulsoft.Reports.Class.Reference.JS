---
title: "MatrixUtil Class"
---

## MatrixUtil Class

**Namespace:** `Stimulsoft.Report.BarCodes`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **BuildMatrix** `static` | void |  |
| **CalculateBCHCode** `static` | number |  |
| **ClearMatrix** `static` | void |  |
| **EmbedBasicPatterns** `static` | void |  |
| **EmbedDataBits** `static` | void |  |
| **EmbedDataBits2** `static` | void |  |
| **EmbedTypeInfo** `static` | void |  |
| **FindMSBSet** `static` | number |  |
| **MakeTypeInfoBits** `static` | void |  |
| **MakeVersionInfoBits** `static` | void |  |
| **MaybeEmbedVersionInfo** `static` | void |  |

---

### Method Details

#### BuildMatrix `static`

**BuildMatrix**(**dataBits**: [BitVector](BitVector.md), **ecLevel**: [ErrorCorrectionLevel](ErrorCorrectionLevel.md), **version**: number, **maskPattern**: number, **matrix**: [ByteMatrix](ByteMatrix.md)): void

**Parameters**

- **dataBits** ([BitVector](BitVector.md))  
- **ecLevel** ([ErrorCorrectionLevel](ErrorCorrectionLevel.md))  
- **version** (number)  
- **maskPattern** (number)  
- **matrix** ([ByteMatrix](ByteMatrix.md))  


---

#### CalculateBCHCode `static`

**CalculateBCHCode**(**value**: number, **poly**: number): number

**Parameters**

- **value** (number)  
- **poly** (number)  

**Returns** number


---

#### ClearMatrix `static`

**ClearMatrix**(**matrix**: [ByteMatrix](ByteMatrix.md)): void

**Parameters**

- **matrix** ([ByteMatrix](ByteMatrix.md))  


---

#### EmbedBasicPatterns `static`

**EmbedBasicPatterns**(**version**: number, **matrix**: [ByteMatrix](ByteMatrix.md)): void

**Parameters**

- **version** (number)  
- **matrix** ([ByteMatrix](ByteMatrix.md))  


---

#### EmbedDataBits `static`

**EmbedDataBits**(**dataBits**: [BitVector](BitVector.md), **maskPattern**: number, **matrix**: [ByteMatrix](ByteMatrix.md)): void

**Parameters**

- **dataBits** ([BitVector](BitVector.md))  
- **maskPattern** (number)  
- **matrix** ([ByteMatrix](ByteMatrix.md))  


---

#### EmbedDataBits2 `static`

**EmbedDataBits2**(**dataBits**: [BitVector](BitVector.md), **matrices**: [ByteMatrix](ByteMatrix.md)[]): void

**Parameters**

- **dataBits** ([BitVector](BitVector.md))  
- **matrices** ([ByteMatrix](ByteMatrix.md)[])  


---

#### EmbedTypeInfo `static`

**EmbedTypeInfo**(**ecLevel**: [ErrorCorrectionLevel](ErrorCorrectionLevel.md), **maskPattern**: number, **matrix**: [ByteMatrix](ByteMatrix.md)): void

**Parameters**

- **ecLevel** ([ErrorCorrectionLevel](ErrorCorrectionLevel.md))  
- **maskPattern** (number)  
- **matrix** ([ByteMatrix](ByteMatrix.md))  


---

#### FindMSBSet `static`

**FindMSBSet**(**value**: number): number

**Parameters**

- **value** (number)  

**Returns** number


---

#### MakeTypeInfoBits `static`

**MakeTypeInfoBits**(**ecLevel**: [ErrorCorrectionLevel](ErrorCorrectionLevel.md), **maskPattern**: number, **bits**: [BitVector](BitVector.md)): void

**Parameters**

- **ecLevel** ([ErrorCorrectionLevel](ErrorCorrectionLevel.md))  
- **maskPattern** (number)  
- **bits** ([BitVector](BitVector.md))  


---

#### MakeVersionInfoBits `static`

**MakeVersionInfoBits**(**version**: number, **bits**: [BitVector](BitVector.md)): void

**Parameters**

- **version** (number)  
- **bits** ([BitVector](BitVector.md))  


---

#### MaybeEmbedVersionInfo `static`

**MaybeEmbedVersionInfo**(**version**: number, **matrix**: [ByteMatrix](ByteMatrix.md)): void

**Parameters**

- **version** (number)  
- **matrix** ([ByteMatrix](ByteMatrix.md))  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **bit** | any |  |
| **bit** | any |  |
| **bit** | any |  |
| **bit** | any |  |
| **direction** | any |  |
| **direction** | any |  |
