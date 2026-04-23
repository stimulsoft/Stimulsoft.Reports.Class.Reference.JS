---
title: "StiExportTool Class"
---

## StiExportTool Class

**Namespace:** `Stimulsoft.Dashboard.Export.Tools`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getScaleFactor** `static` | number |  |
| **getTool** `static` | [StiExportTool](StiExportTool.md) |  |
| **isAllowOpacity** `static` | boolean |  |
| **render** | void |  |

---

### Method Details

#### getScaleFactor `static`

**getScaleFactor**(**destination**: StiPanel, **settings**: StiDashboardExportSettings): number

**Parameters**

- **destination** (StiPanel)  
- **settings** (StiDashboardExportSettings)  

**Returns** number


---

#### getTool `static`

**getTool**(**type**: [Type](../../Stimulsoft_System/Type.md)): [StiExportTool](StiExportTool.md)

**Parameters**

- **type** ([Type](../../Stimulsoft_System/Type.md))  

**Returns** [StiExportTool](StiExportTool.md)


---

#### isAllowOpacity `static`

**isAllowOpacity**(**settings**: StiDashboardExportSettings): boolean

**Parameters**

- **settings** (StiDashboardExportSettings)  

**Returns** boolean


---

#### render

**render**(**element**: IStiElement, **destination**: StiPanel, **rect**: [Rectangle](../../Stimulsoft_System/Drawing/Rectangle.md), **settings**: StiDashboardExportSettings): void

**Parameters**

- **element** (IStiElement)  
- **destination** (StiPanel)  
- **rect** ([Rectangle](../../Stimulsoft_System/Drawing/Rectangle.md))  
- **settings** (StiDashboardExportSettings)  

