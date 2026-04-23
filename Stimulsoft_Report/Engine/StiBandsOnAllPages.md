---
title: "StiBandsOnAllPages Class"
---

## StiBandsOnAllPages Class

**Namespace:** `Stimulsoft.Report.Engine`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([StiEngine](StiEngine.md) engine) |  |

**constructor**(**engine**: [StiEngine](StiEngine.md))

**Parameters**

- **engine** ([StiEngine](StiEngine.md))  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **denyRendering** | boolean | If the property is true then bands rendering on all pages is blocked. The property is used to output headers, with the height higher than one page, on all pages. |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **add** | void | Starts monitoring of this band for rendering OnAllPages. |
| **getBandsList** | StiDataBand[] |  |
| **isBandInBandsList** | boolean |  |
| **remove** | void | Ends monitoring of this band for rendering OnAllPages. All bands which are dependent on the specified DataBand are removed. |
| **render** | void |  |
| **renderAsync** | void | Outputs bands, which were previously added to the collection of bands, which are output on all pages, on a new page. |

---

### Method Details

#### add

**add**(**dataBand**: StiDataBand, **band**: StiBand): void

Starts monitoring of this band for rendering OnAllPages.

**Parameters**

- **dataBand** (StiDataBand)  
- **band** (StiBand)  


---

#### getBandsList

**getBandsList**(): StiDataBand[]

**Returns** StiDataBand[]


---

#### isBandInBandsList

**isBandInBandsList**(**band**: StiBand): boolean

**Parameters**

- **band** (StiBand)  

**Returns** boolean


---

#### remove

**remove**(**dataBand**: StiDataBand): void

Ends monitoring of this band for rendering OnAllPages. All bands which are dependent on the specified DataBand are removed.

**Parameters**

- **dataBand** (StiDataBand)  


---

#### render

**render**(): void


---

#### renderAsync

**renderAsync**(): void

Outputs bands, which were previously added to the collection of bands, which are output on all pages, on a new page.

