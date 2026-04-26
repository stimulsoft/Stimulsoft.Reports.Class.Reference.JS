---
title: "StiPagesRange Class"
---

## StiPagesRange Class

**Namespace:** `Stimulsoft.Report`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([StiRangeType](StiRangeType.md) rangeType, any pageRanges, any currentPage) |  |

**constructor**(**rangeType**: [StiRangeType](StiRangeType.md), **pageRanges**: any, **currentPage**: any)

**Parameters**

- **rangeType** ([StiRangeType](StiRangeType.md))  
- **pageRanges** (any)  
- **currentPage** (any)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **equals** | boolean |  |
| **getSelectedPages** | StiPagesCollection |  |

---

### Method Details

#### equals

**equals**(**obj**: any): boolean

**Parameters**

- **obj** (any)  

**Returns** boolean


---

#### getSelectedPages

**getSelectedPages**(**originalPages**: StiPagesCollection): StiPagesCollection

**Parameters**

- **originalPages** (StiPagesCollection)  

**Returns** StiPagesCollection


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **currentPage** | any |  |
| **endIndex** | any |  |
| **pageRanges** | any |  |
| **rangeType** | [StiRangeType](StiRangeType.md) |  |
