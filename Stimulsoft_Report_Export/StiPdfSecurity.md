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

**computingCryptoValues**(**userAccessPrivileges**: [StiUserAccessPrivileges](StiUserAccessPrivileges.md), **passwordInputOwner**: string, **passwordInputUser**: string, **keyLength**: [StiPdfEncryptionKeyLength](StiPdfEncryptionKeyLength.md), **IDValue**: number[]): boolean

**Parameters**

- **userAccessPrivileges** ([StiUserAccessPrivileges](StiUserAccessPrivileges.md))  
- **passwordInputOwner** (string)  
- **passwordInputUser** (string)  
- **keyLength** ([StiPdfEncryptionKeyLength](StiPdfEncryptionKeyLength.md))  
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

**renderEncodeRecord**(**sw**: [Stimulsoft.System.IO.MemoryStream](../Stimulsoft_System_IO/MemoryStream.md), **pdfService**: StiPdfExportService): void

**Parameters**

- **sw** ([Stimulsoft.System.IO.MemoryStream](../Stimulsoft_System_IO/MemoryStream.md))  
- **pdfService** (StiPdfExportService)  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **IDValue** | number[] |  |
| **block_size** | any |  |
| **buf** | any |  |
| **buf** | any |  |
| **buf** | any |  |
| **data** | any |  |
| **data** | any |  |
| **data** | any |  |
| **data_len** | any |  |
| **encrypted** | any |  |
| **encrypted** | any |  |
| **encryptionKey** | number[] |  |
| **encryptionKeyLength** | any |  |
| **forEncrypt** | any |  |
| **forEncrypt** | any |  |
| **hash** | any |  |
| **hash** | any |  |
| **hash** | any |  |
| **hash** | any |  |
| **hash** | any |  |
| **hash** | any |  |
| **hash** | any |  |
| **hash** | any |  |
| **hash** | any |  |
| **hash** | any |  |
| **hash** | any |  |
| **hash** | any |  |
| **hash** | any |  |
| **hash** | any |  |
| **hash** | any |  |
| **hash** | any |  |
| **hash** | any |  |
| **hash** | any |  |
| **hash** | any |  |
| **i** | any |  |
| **i** | any |  |
| **j** | any |  |
| **j** | any |  |
| **j** | any |  |
| **keyLength** | [StiPdfEncryptionKeyLength](StiPdfEncryptionKeyLength.md) |  |
| **ms** | any |  |
| **ms** | any |  |
| **ownerExtendedValue** | number[] |  |
| **ownerValue** | number[] |  |
| **passOwner** | any |  |
| **passUser** | any |  |
| **passwordInputOwner** | any |  |
| **passwordInputUser** | any |  |
| **passwordOwner** | any |  |
| **passwordUser** | any |  |
| **pdfService** | StiPdfExportService |  |
| **permsValue** | number[] |  |
| **result** | any |  |
| **result** | any |  |
| **result** | any |  |
| **result** | any |  |
| **result1** | any |  |
| **result1** | any |  |
| **result1** | any |  |
| **result1** | any |  |
| **result2** | any |  |
| **securityFlags** | any |  |
| **userExtendedValue** | number[] |  |
| **userValue** | number[] |  |
| **x** | any |  |
| **x** | any |  |
