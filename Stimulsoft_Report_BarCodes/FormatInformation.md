---
title: "FormatInformation Class"
---

## FormatInformation Class

**Namespace:** `Stimulsoft.Report.BarCodes`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(number formatInfo) |  |

**constructor**(**formatInfo**: number)

**Parameters**

- **formatInfo** (number)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **decodeFormatInformation** `static` | [FormatInformation](FormatInformation.md) |  |
| **equals** | boolean |  |
| **getDataMask** | number |  |
| **getErrorCorrectionLevel** | [ErrorCorrectionLevel](ErrorCorrectionLevel.md) |  |
| **numBitsDiffering** `static` | number |  |

---

### Method Details

#### decodeFormatInformation `static`

**decodeFormatInformation**(**maskedFormatInfo1**: number, **maskedFormatInfo2**: number): [FormatInformation](FormatInformation.md)

**Parameters**

- **maskedFormatInfo1** (number)  
- **maskedFormatInfo2** (number)  

**Returns** [FormatInformation](FormatInformation.md)


---

#### equals

**equals**(**o**: any): boolean

**Parameters**

- **o** (any)  

**Returns** boolean


---

#### getDataMask

**getDataMask**(): number

**Returns** number


---

#### getErrorCorrectionLevel

**getErrorCorrectionLevel**(): [ErrorCorrectionLevel](ErrorCorrectionLevel.md)

**Returns** [ErrorCorrectionLevel](ErrorCorrectionLevel.md)


---

#### numBitsDiffering `static`

**numBitsDiffering**(**a**: number, **b**: number): number

**Parameters**

- **a** (number)  
- **b** (number)  

**Returns** number


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **bestDifference** | any |  |
| **bestDifference** | any |  |
| **bestFormatInfo** | any |  |
| **bestFormatInfo** | any |  |
| **bitsDifference** | any |  |
