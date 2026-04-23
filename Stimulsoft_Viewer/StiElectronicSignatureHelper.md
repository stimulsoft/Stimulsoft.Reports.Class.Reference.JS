---
title: "StiElectronicSignatureHelper Class"
---

## StiElectronicSignatureHelper Class

**Namespace:** `Stimulsoft.Viewer`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **applySignatures** `static` | void |  |
| **base64ToByteArray** `static` | number[] |  |
| **checkSignedReport** `static` | boolean |  |
| **clearSignature** `static` | void |  |
| **getSignatureData** `static` | any |  |
| **getStylesForSignature** `static` | any[] |  |
| **jsonToFont** `static` | [Font](../Stimulsoft_Base/Dashboard/Font.md) |  |
| **stringToColor** `static` | [Color](../Stimulsoft_System/Drawing/Color.md) |  |

---

### Method Details

#### applySignatures `static`

**applySignatures**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **signatures**: any[]): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **signatures** (any[])  


---

#### base64ToByteArray `static`

**base64ToByteArray**(**base64String**: string): number[]

**Parameters**

- **base64String** (string)  

**Returns** number[]


---

#### checkSignedReport `static`

**checkSignedReport**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md)): boolean

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  

**Returns** boolean


---

#### clearSignature `static`

**clearSignature**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **requestParams**: [StiRequestParams](StiRequestParams.md)): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **requestParams** ([StiRequestParams](StiRequestParams.md))  


---

#### getSignatureData `static`

**getSignatureData**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **requestParams**: [StiRequestParams](StiRequestParams.md)): any

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **requestParams** ([StiRequestParams](StiRequestParams.md))  

**Returns** any


---

#### getStylesForSignature `static`

**getStylesForSignature**(): any[]

**Returns** any[]


---

#### jsonToFont `static`

**jsonToFont**(**fontJson**: any): [Font](../Stimulsoft_Base/Dashboard/Font.md)

**Parameters**

- **fontJson** (any)  

**Returns** [Font](../Stimulsoft_Base/Dashboard/Font.md)


---

#### stringToColor `static`

**stringToColor**(**colorStr**: string): [Color](../Stimulsoft_System/Drawing/Color.md)

**Parameters**

- **colorStr** (string)  

**Returns** [Color](../Stimulsoft_System/Drawing/Color.md)

