---
title: "StiPdfSecurity Class"
---

## StiPdfSecurity Class

**Namespace:** `Stimulsoft.Report.Export`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(StiPdfExportService service) |  |

**constructor**(**service**: StiPdfExportService)

**Parameters**

- **service** (StiPdfExportService)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **computingCryptoValues** | boolean |  |
| **encryptData** | number[] |  |
| **getBytesUInt32** | number[] |  |
| **getBytesUint16** | number[] |  |
| **renderEncodeRecord** | void |  |

---

### Method Details

#### computingCryptoValues

**computingCryptoValues**(**userAccessPrivileges**: [StiUserAccessPrivileges](../Stimulsoft_Report/Export/StiUserAccessPrivileges.md), **passwordInputOwner**: string, **passwordInputUser**: string, **keyLength**: [StiPdfEncryptionKeyLength](../Stimulsoft_Report/Export/StiPdfEncryptionKeyLength.md), **IDValue**: number[]): boolean

**Parameters**

- **userAccessPrivileges** ([StiUserAccessPrivileges](../Stimulsoft_Report/Export/StiUserAccessPrivileges.md))  
- **passwordInputOwner** (string)  
- **passwordInputUser** (string)  
- **keyLength** ([StiPdfEncryptionKeyLength](../Stimulsoft_Report/Export/StiPdfEncryptionKeyLength.md))  
- **IDValue** (number[])  

**Returns** boolean


---

#### encryptData

**encryptData**(**data**: number[], **currentObjectNumber**: number, **currentGenerationNumber**: number): number[]

**Parameters**

- **data** (number[])  
- **currentObjectNumber** (number)  
- **currentGenerationNumber** (number)  

**Returns** number[]


---

#### getBytesUInt32

**getBytesUInt32**(**uint**: number): number[]

**Parameters**

- **uint** (number)  

**Returns** number[]


---

#### getBytesUint16

**getBytesUint16**(**uint**: number): number[]

**Parameters**

- **uint** (number)  

**Returns** number[]


---

#### renderEncodeRecord

**renderEncodeRecord**(**sw**: [Stimulsoft.System.IO.MemoryStream](../Stimulsoft_System/IO/MemoryStream.md), **pdfService**: StiPdfExportService): void

**Parameters**

- **sw** ([Stimulsoft.System.IO.MemoryStream](../Stimulsoft_System/IO/MemoryStream.md))  
- **pdfService** (StiPdfExportService)  

