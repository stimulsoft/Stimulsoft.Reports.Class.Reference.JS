---
title: "StiCell Class"
---

## StiCell Class

**Namespace:** `Stimulsoft.Report.Export`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([StiExportFormat](../Stimulsoft_Report/StiExportFormat.md) exportFormat) |  |

**constructor**(**exportFormat**: [StiExportFormat](../Stimulsoft_Report/StiExportFormat.md))

**Parameters**

- **exportFormat** ([StiExportFormat](../Stimulsoft_Report/StiExportFormat.md))  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **cellStyle** | [StiCellStyle](StiCellStyle.md) |  |
| **component** | StiComponent |  |
| **exportFormat** | any |  |
| **exportImage** | IStiExportImage |  |
| **height** | number |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | [StiCell](StiCell.md) |  |
| **forceExportAsImage** | boolean |  |

---

### Method Details

#### clone

**clone**(): [StiCell](StiCell.md)

**Returns** [StiCell](StiCell.md)


---

#### forceExportAsImage

**forceExportAsImage**(**exportImage**: any): boolean

**Parameters**

- **exportImage** (any)  

**Returns** boolean


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **componentId** | number |  |
| **left** | any |  |
| **text** | any |  |
| **top** | any |  |
| **width** | any |  |
