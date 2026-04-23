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

