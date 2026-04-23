---
title: "StiMatrixCacheManager Class"
---

## StiMatrixCacheManager Class

**Namespace:** `Stimulsoft.Report.Export`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([StiMatrix](StiMatrix.md) matrix, number width, number height, number maxPageHeight) |  |

**constructor**(**matrix**: [StiMatrix](StiMatrix.md), **width**: number, **height**: number, **maxPageHeight**: number)

**Parameters**

- **matrix** ([StiMatrix](StiMatrix.md))  
- **width** (number)  
- **height** (number)  
- **maxPageHeight** (number)  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **quickAccessSegments** | number[] |  |
| **segments** | [StiMatrixCacheSegment](StiMatrixCacheSegment.md)[] |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clear** | void |  |
| **getMatrixLineData** | [StiMatrixLineData](StiMatrixLineData.md) |  |
| **getMatrixSegment** | [StiMatrixCacheSegment](StiMatrixCacheSegment.md) |  |
| **loadSegment** | void |  |
| **readSegment** | void |  |
| **saveSegment** | void |  |
| **writeSegment** | object |  |

---

### Method Details

#### clear

**clear**(): void


---

#### getMatrixLineData

**getMatrixLineData**(**lineNumber**: number): [StiMatrixLineData](StiMatrixLineData.md)

**Parameters**

- **lineNumber** (number)  

**Returns** [StiMatrixLineData](StiMatrixLineData.md)


---

#### getMatrixSegment

**getMatrixSegment**(**index**: number): [StiMatrixCacheSegment](StiMatrixCacheSegment.md)

**Parameters**

- **index** (number)  

**Returns** [StiMatrixCacheSegment](StiMatrixCacheSegment.md)


---

#### loadSegment

**loadSegment**(**segment**: [StiMatrixCacheSegment](StiMatrixCacheSegment.md)): void

**Parameters**

- **segment** ([StiMatrixCacheSegment](StiMatrixCacheSegment.md))  


---

#### readSegment

**readSegment**(**string**: string, **segment**: [StiMatrixCacheSegment](StiMatrixCacheSegment.md)): void

**Parameters**

- **string** (string)  
- **segment** ([StiMatrixCacheSegment](StiMatrixCacheSegment.md))  


---

#### saveSegment

**saveSegment**(**segment**: [StiMatrixCacheSegment](StiMatrixCacheSegment.md)): void

**Parameters**

- **segment** ([StiMatrixCacheSegment](StiMatrixCacheSegment.md))  


---

#### writeSegment

**writeSegment**(**segment**: [StiMatrixCacheSegment](StiMatrixCacheSegment.md)): object

**Parameters**

- **segment** ([StiMatrixCacheSegment](StiMatrixCacheSegment.md))  

**Returns** object

