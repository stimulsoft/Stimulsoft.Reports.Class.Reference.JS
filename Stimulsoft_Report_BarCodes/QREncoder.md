---
title: "QREncoder Class"
---

## QREncoder Class

**Namespace:** `Stimulsoft.Report.BarCodes`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **ChooseMode1** `static` | [Mode](Mode.md) |  |
| **Encode** `static` | void |  |

---

### Method Details

#### ChooseMode1 `static`

**ChooseMode1**(**content**: string, **encoding**: number, **gs1**: boolean): [Mode](Mode.md)

**Parameters**

- **content** (string)  
- **encoding** (number)  
- **gs1** (boolean)  

**Returns** [Mode](Mode.md)


---

#### Encode `static`

**Encode**(**content**: string, **ecLevel**: [ErrorCorrectionLevel](ErrorCorrectionLevel.md), **qrCode**: [StiQRCode](StiQRCode.md), **startVersion**: [StiQRCodeSize](StiQRCodeSize.md), **processTilde**: boolean, **gs1**: any): void

**Parameters**

- **content** (string)  
- **ecLevel** ([ErrorCorrectionLevel](ErrorCorrectionLevel.md))  
- **qrCode** ([StiQRCode](StiQRCode.md))  
- **startVersion** ([StiQRCodeSize](StiQRCodeSize.md))  
- **processTilde** (boolean)  
- **gs1** (any)  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **bestMaskPattern** | any |  |
| **bestMaskPattern** | any |  |
| **bytes** | any |  |
| **codepage** | any |  |
| **content** | any |  |
| **content** | any |  |
| **content** | any |  |
| **content** | any |  |
| **encoding** | any |  |
| **encoding** | any |  |
| **gs1** | any |  |
| **hasAlphanumeric** | any |  |
| **hasNumeric** | any |  |
| **matrix** | any |  |
| **matrix** | any |  |
| **matrix** | any |  |
| **maxNumDataBytes** | any |  |
| **maxNumEcBytes** | any |  |
| **minPenalty** | any |  |
| **minPenalty** | any |  |
| **needAppendECI** | any |  |
| **numAdditionalBits** | any |  |
| **subtracted** | any |  |
| **subtracted** | any |  |
