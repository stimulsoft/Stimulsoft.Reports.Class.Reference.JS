---
title: "StiDashboardExportTools Class"
---

## StiDashboardExportTools Class

**Namespace:** `Stimulsoft.Dashboard.Export`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **exportAsync** `static` | void |  |
| **onExport** | void |  |
| **renderElementsAsync** `static` | void |  |
| **setTimeout** | void |  |

---

### Method Details

#### exportAsync `static`

**exportAsync**(**onExport**: Function, **cell**: IStiAppCell, **settings**: (StiExportSettings | StiDashboardExportSettings) | StiExportFormat): void

**Parameters**

- **onExport** (Function)  
- **cell** (IStiAppCell)  
- **settings** ((StiExportSettings | StiDashboardExportSettings) | StiExportFormat)  


---

#### onExport

**onExport**(**result**: any): void

**Parameters**

- **result** (any)  


---

#### renderElementsAsync `static`

**renderElementsAsync**(**parent**: StiContainer, **elements**: IStiElement[], **scaleX**: number, **scaleY**: number, **settings**: StiDashboardExportSettings): void

**Parameters**

- **parent** (StiContainer)  
- **elements** (IStiElement[])  
- **scaleX** (number)  
- **scaleY** (number)  
- **settings** (StiDashboardExportSettings)  


---

#### setTimeout

**setTimeout**(): void

