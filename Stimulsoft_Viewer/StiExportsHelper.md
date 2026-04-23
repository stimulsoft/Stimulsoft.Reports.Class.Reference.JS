---
title: "StiExportsHelper Class"
---

## StiExportsHelper Class

**Namespace:** `Stimulsoft.Viewer`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **exportDashboardAsync** `static` | Promise<number[] | string> | Exports dashboard page or element to the specified format |
| **exportReportAsync** `static` | Promise<number[] | string | Uint8Array> |  |
| **getDashboardExportSettings** `static` | IStiDashboardExportSettings |  |
| **getExportSettings** `static` | [StiExportSettings](../Stimulsoft_Report/Export/StiExportSettings.md) |  |
| **getReportFileContentType** `static` | string |  |
| **getReportFileName** `static` | string |  |

---

### Method Details

#### exportDashboardAsync `static`

**exportDashboardAsync**(**requestParams**: any, **report**: [StiReport](../Stimulsoft_Report/StiReport.md), **exportSettings**: IStiDashboardExportSettings): Promise<number[] | string>

Exports dashboard page or element to the specified format

**Parameters**

- **requestParams** (any)  
- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **exportSettings** (IStiDashboardExportSettings)  

**Returns** Promise<number[] | string>


---

#### exportReportAsync `static`

**exportReportAsync**(**exportFormat**: [StiExportFormat](../Stimulsoft_Report/StiExportFormat.md), **exportSettings**: any, **report**: [StiReport](../Stimulsoft_Report/StiReport.md), **settings**: [StiExportSettings](../Stimulsoft_Report/Export/StiExportSettings.md)): Promise<number[] | string | Uint8Array>

**Parameters**

- **exportFormat** ([StiExportFormat](../Stimulsoft_Report/StiExportFormat.md))  
- **exportSettings** (any)  
- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **settings** ([StiExportSettings](../Stimulsoft_Report/Export/StiExportSettings.md))  

**Returns** Promise<number[] | string | Uint8Array>


---

#### getDashboardExportSettings `static`

**getDashboardExportSettings**(**exportFormat**: [StiExportFormat](../Stimulsoft_Report/StiExportFormat.md), **exportSettings**: any): IStiDashboardExportSettings

**Parameters**

- **exportFormat** ([StiExportFormat](../Stimulsoft_Report/StiExportFormat.md))  
- **exportSettings** (any)  

**Returns** IStiDashboardExportSettings


---

#### getExportSettings `static`

**getExportSettings**(**exportFormat**: [StiExportFormat](../Stimulsoft_Report/StiExportFormat.md), **exportSettings**: any): [StiExportSettings](../Stimulsoft_Report/Export/StiExportSettings.md)

**Parameters**

- **exportFormat** ([StiExportFormat](../Stimulsoft_Report/StiExportFormat.md))  
- **exportSettings** (any)  

**Returns** [StiExportSettings](../Stimulsoft_Report/Export/StiExportSettings.md)


---

#### getReportFileContentType `static`

**getReportFileContentType**(**exportFormat**: [StiExportFormat](../Stimulsoft_Report/StiExportFormat.md), **exportSettings**: any): string

**Parameters**

- **exportFormat** ([StiExportFormat](../Stimulsoft_Report/StiExportFormat.md))  
- **exportSettings** (any)  

**Returns** string


---

#### getReportFileName `static`

**getReportFileName**(**exportFormat**: [StiExportFormat](../Stimulsoft_Report/StiExportFormat.md), **exportSettings**: any, **report**: [StiReport](../Stimulsoft_Report/StiReport.md), **isDashboard**: boolean): string

**Parameters**

- **exportFormat** ([StiExportFormat](../Stimulsoft_Report/StiExportFormat.md))  
- **exportSettings** (any)  
- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **isDashboard** (boolean)  

**Returns** string

