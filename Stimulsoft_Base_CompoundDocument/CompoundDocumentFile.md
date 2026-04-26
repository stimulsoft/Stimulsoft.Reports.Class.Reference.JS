---
title: "CompoundDocumentFile Class"
---

## CompoundDocumentFile Class

**Namespace:** `Stimulsoft.Base.CompoundDocument`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**() |  |

**constructor**()


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **Directories** | [CompoundDocumentItem](CompoundDocumentItem.md)[] |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **dispose** | void |  |
| **write** | void |  |

---

### Method Details

#### dispose

**dispose**(): void


---

#### write

**write**(**ms**: [MemoryStream](../Stimulsoft_System_IO/MemoryStream.md)): void

**Parameters**

- **ms** ([MemoryStream](../Stimulsoft_System_IO/MemoryStream.md))  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **_currentDIFATSectorPos** | number |  |
| **_currentDirSectorPos** | number |  |
| **_currentFATSectorPos** | number |  |
| **_directories** | [CompoundDocumentItem](CompoundDocumentItem.md)[] |  |
| **_firstDIFATSectorLocation** | number |  |
| **_firstDirectorySectorLocation** | number |  |
| **_firstMiniFATSectorLocation** | number |  |
| **_miniSectorSize** | number |  |
| **_miniSectors** | Uint8Array[] |  |
| **_miniStreamCutoffSize** | number |  |
| **_numberOfFATSectors** | number |  |
| **_numberofDIFATSectors** | number |  |
| **_numberofMiniFATSectors** | number |  |
| **_prevDirFATSectorPos** | number |  |
| **_sectorSize** | number |  |
| **_sectorSizeInt** | number |  |
| **_sectors** | Uint8Array[] |  |
| **_transactionSignatureNumber** | number |  |
| **childId** | any |  |
| **dirSectors** | any |  |
| **div** | any |  |
| **div** | any |  |
| **majorVersion** | number |  |
| **minSectorShift** | number |  |
| **minorVersion** | number |  |
| **numberOfDirectorySector** | number |  |
| **numberOfFATSectors** | any |  |
| **pos** | any |  |
| **rootItem** | [CompoundDocumentItem](CompoundDocumentItem.md) |  |
| **sectorShif** | number |  |
