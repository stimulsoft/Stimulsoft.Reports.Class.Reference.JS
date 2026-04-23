---
title: "Version Class"
---

## Version Class

**Namespace:** `Stimulsoft.Report.BarCodes`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(number versionNumber, number[] alignmentPatternCenters, [ECBlocks](ECBlocks.md) ecBlocks1, [ECBlocks](ECBlocks.md) ecBlocks2, [ECBlocks](ECBlocks.md) ecBlocks3, [ECBlocks](ECBlocks.md) ecBlocks4) |  |

**constructor**(**versionNumber**: number, **alignmentPatternCenters**: number[], **ecBlocks1**: [ECBlocks](ECBlocks.md), **ecBlocks2**: [ECBlocks](ECBlocks.md), **ecBlocks3**: [ECBlocks](ECBlocks.md), **ecBlocks4**: [ECBlocks](ECBlocks.md))

**Parameters**

- **versionNumber** (number)  
- **alignmentPatternCenters** (number[])  
- **ecBlocks1** ([ECBlocks](ECBlocks.md))  
- **ecBlocks2** ([ECBlocks](ECBlocks.md))  
- **ecBlocks3** ([ECBlocks](ECBlocks.md))  
- **ecBlocks4** ([ECBlocks](ECBlocks.md))  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **decodeVersionInformation** `static` | [Version](Version.md) |  |
| **getAlignmentPatternCenters** | number[] |  |
| **getDimensionForVersion** | number |  |
| **getECBlocksForLevel** | [ECBlocks](ECBlocks.md) |  |
| **getProvisionalVersionForDimension** `static` | [Version](Version.md) |  |
| **getTotalCodewords** | number |  |
| **getVersionForNumber** `static` | [Version](Version.md) |  |
| **getVersionNumber** | number |  |
| **toString** | string |  |

---

### Method Details

#### decodeVersionInformation `static`

**decodeVersionInformation**(**versionBits**: number): [Version](Version.md)

**Parameters**

- **versionBits** (number)  

**Returns** [Version](Version.md)


---

#### getAlignmentPatternCenters

**getAlignmentPatternCenters**(): number[]

**Returns** number[]


---

#### getDimensionForVersion

**getDimensionForVersion**(): number

**Returns** number


---

#### getECBlocksForLevel

**getECBlocksForLevel**(**ecLevel**: [ErrorCorrectionLevel](ErrorCorrectionLevel.md)): [ECBlocks](ECBlocks.md)

**Parameters**

- **ecLevel** ([ErrorCorrectionLevel](ErrorCorrectionLevel.md))  

**Returns** [ECBlocks](ECBlocks.md)


---

#### getProvisionalVersionForDimension `static`

**getProvisionalVersionForDimension**(**dimension**: number): [Version](Version.md)

**Parameters**

- **dimension** (number)  

**Returns** [Version](Version.md)


---

#### getTotalCodewords

**getTotalCodewords**(): number

**Returns** number


---

#### getVersionForNumber `static`

**getVersionForNumber**(**versionNumber**: number): [Version](Version.md)

**Parameters**

- **versionNumber** (number)  

**Returns** [Version](Version.md)


---

#### getVersionNumber

**getVersionNumber**(): number

**Returns** number


---

#### toString

**toString**(): string

**Returns** string

