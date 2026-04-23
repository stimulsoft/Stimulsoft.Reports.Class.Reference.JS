---
title: "StiPageNumberHelper Class"
---

## StiPageNumberHelper Class

**Namespace:** `Stimulsoft.Report.Engine`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([StiEngine](StiEngine.md) engine) |  |

**constructor**(**engine**: [StiEngine](StiEngine.md))

**Parameters**

- **engine** ([StiEngine](StiEngine.md))  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **addPageNumber** | void |  |
| **clear** | void |  |
| **clearNotFixed** | void |  |
| **getPageNumber** | number |  |
| **getPageNumberThrough** | number |  |
| **getTotalPageCount** | number |  |
| **getTotalPageCountThrough** | number |  |
| **processPageNumbers** | void | Counts the PageNumber, TotalPageCount, PageNumberThrough, and TotalPageCountThrough values for every page. |
| **resetPageNumber** | void |  |

---

### Method Details

#### addPageNumber

**addPageNumber**(**pageIndex**: number, **segmentPerWidth**: number, **segmentPerHeight**: number): void

**Parameters**

- **pageIndex** (number)  
- **segmentPerWidth** (number)  
- **segmentPerHeight** (number)  


---

#### clear

**clear**(): void


---

#### clearNotFixed

**clearNotFixed**(): void


---

#### getPageNumber

**getPageNumber**(**param1**: StiPage | number | any): number

**Parameters**

- **param1** (StiPage | number | any)  

**Returns** number


---

#### getPageNumberThrough

**getPageNumberThrough**(**param1**: StiPage | number | any): number

**Parameters**

- **param1** (StiPage | number | any)  

**Returns** number


---

#### getTotalPageCount

**getTotalPageCount**(**param1**: StiPage | number | any): number

**Parameters**

- **param1** (StiPage | number | any)  

**Returns** number


---

#### getTotalPageCountThrough

**getTotalPageCountThrough**(**pageIndex**: number): number

**Parameters**

- **pageIndex** (number)  

**Returns** number


---

#### processPageNumbers

**processPageNumbers**(): void

Counts the PageNumber, TotalPageCount, PageNumberThrough, and TotalPageCountThrough values for every page.


---

#### resetPageNumber

**resetPageNumber**(**pageIndex**: number): void

**Parameters**

- **pageIndex** (number)  

