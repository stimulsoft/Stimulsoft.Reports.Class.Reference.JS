---
title: "AztecEncoder Class"
---

## AztecEncoder Class

**Namespace:** `Stimulsoft.Report.BarCodes`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **encode** `static` | [AztecCode](AztecCode.md) |  |
| **generateModeMessage** `static` | [BitArray](../Stimulsoft_Report_Export/BitArray.md) |  |
| **stuffBits** `static` | [BitArray](../Stimulsoft_Report_Export/BitArray.md) |  |

---

### Method Details

#### encode `static`

**encode**(**data**: number[], **eci**: number, **minECCPercent**: number, **userSpecifiedLayers**: [StiAztecSize](StiAztecSize.md)): [AztecCode](AztecCode.md)

**Parameters**

- **data** (number[])  
- **eci** (number)  
- **minECCPercent** (number)  
- **userSpecifiedLayers** ([StiAztecSize](StiAztecSize.md))  

**Returns** [AztecCode](AztecCode.md)


---

#### generateModeMessage `static`

**generateModeMessage**(**compact**: boolean, **layers**: number, **messageSizeInWords**: number): [BitArray](../Stimulsoft_Report_Export/BitArray.md)

**Parameters**

- **compact** (boolean)  
- **layers** (number)  
- **messageSizeInWords** (number)  

**Returns** [BitArray](../Stimulsoft_Report_Export/BitArray.md)


---

#### stuffBits `static`

**stuffBits**(**bits**: [BitArray](../Stimulsoft_Report_Export/BitArray.md), **wordSize**: number): [BitArray](../Stimulsoft_Report_Export/BitArray.md)

**Parameters**

- **bits** ([BitArray](../Stimulsoft_Report_Export/BitArray.md))  
- **wordSize** (number)  

**Returns** [BitArray](../Stimulsoft_Report_Export/BitArray.md)


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **compact** | any |  |
| **compact** | any |  |
| **layers** | any |  |
| **layers** | any |  |
| **layers** | any |  |
| **matrixSize** | any |  |
| **matrixSize** | any |  |
| **modeMessage** | any |  |
| **modeMessage** | any |  |
| **stuffedBits** | any |  |
| **stuffedBits** | any |  |
| **stuffedBits** | any |  |
| **totalBitsInLayer** | any |  |
| **totalBitsInLayer** | any |  |
| **wordSize** | any |  |
| **wordSize** | any |  |
| **wordSize** | any |  |
