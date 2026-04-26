---
title: "StiTableElementPagingHelper Class"
---

## StiTableElementPagingHelper Class

**Namespace:** `Stimulsoft.Report.Dashboard.Helpers`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getNumberOfPages** `static` | number | Calculates the number of pages given <paramref name="numberOfRows"/> is to be split into if using specified number of <paramref name="rowsPerPage"/>. This includes the last page, maybe containing less than <paramref name="rowsPerPage"/> rows. |

---

### Method Details

#### getNumberOfPages `static`

**getNumberOfPages**(**numberOfRows**: number, **rowsPerPage**: number): number

Calculates the number of pages given <paramref name="numberOfRows"/>
 is to be split into if using specified number of <paramref name="rowsPerPage"/>.
 This includes the last page, maybe containing less than <paramref name="rowsPerPage"/> rows.

**Parameters**

- **numberOfRows** (number)  
- **rowsPerPage** (number)  

**Returns** number

