---
title: "CacheL2 Class"
---

## CacheL2 Class

**Namespace:** `Stimulsoft.Report.Components`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(StiPagesCollection pages) |  |

**constructor**(**pages**: StiPagesCollection)

**Parameters**

- **pages** (StiPagesCollection)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **addPageToProcess** | void |  |
| **checkForPageInPagesToSave** | void |  |
| **flush** | void |  |
| **getPage** | number[] |  |

---

### Method Details

#### addPageToProcess

**addPageToProcess**(**page**: StiPage, **pageNumber**: number, **clearContent**: boolean): void

**Parameters**

- **page** (StiPage)  
- **pageNumber** (number)  
- **clearContent** (boolean)  


---

#### checkForPageInPagesToSave

**checkForPageInPagesToSave**(**pageNumber**: number): void

**Parameters**

- **pageNumber** (number)  


---

#### flush

**flush**(**final**: boolean): void

**Parameters**

- **final** (boolean)  


---

#### getPage

**getPage**(**pageNumber**: number): number[]

**Parameters**

- **pageNumber** (number)  

**Returns** number[]


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **pages** | StiPagesCollection |  |
| **reportCachePath** | string |  |
