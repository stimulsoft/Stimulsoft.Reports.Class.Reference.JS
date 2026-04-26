---
title: "StiDashboardHelper Class"
---

## StiDashboardHelper Class

**Namespace:** `Stimulsoft.Designer.Dashboards`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **addDashboard** `static` | void |  |
| **changeDashboardStyle** `static` | void |  |
| **changeDashboardViewMode** `static` | void |  |
| **createDashboardElement** `static` | StiComponent |  |
| **getDashboardBackColor** `static` | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **getDashboardGridDotsColor** `static` | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **getDashboardGridLinesColor** `static` | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **getDashboardStyleSampleImage** `static` | Promise<string> |  |
| **getDashboardStyles** `static` | Promise<any[]> |  |
| **getMobileViewUnplacedElements** `static` | void |  |
| **getSelectionBorderColor** `static` | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **getSelectionCornerColor** `static` | [Color](../Stimulsoft_System_Drawing/Color.md) |  |

---

### Method Details

#### addDashboard `static`

**addDashboard**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any, **callbackResult**: any): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  
- **callbackResult** (any)  


---

#### changeDashboardStyle `static`

**changeDashboardStyle**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any, **callbackResult**: any): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  
- **callbackResult** (any)  


---

#### changeDashboardViewMode `static`

**changeDashboardViewMode**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any, **callbackResult**: any): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  
- **callbackResult** (any)  


---

#### createDashboardElement `static`

**createDashboardElement**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **typeComponent**: string): StiComponent

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **typeComponent** (string)  

**Returns** StiComponent


---

#### getDashboardBackColor `static`

**getDashboardBackColor**(**page**: StiPage): [Color](../Stimulsoft_System_Drawing/Color.md)

**Parameters**

- **page** (StiPage)  

**Returns** [Color](../Stimulsoft_System_Drawing/Color.md)


---

#### getDashboardGridDotsColor `static`

**getDashboardGridDotsColor**(**page**: StiPage): [Color](../Stimulsoft_System_Drawing/Color.md)

**Parameters**

- **page** (StiPage)  

**Returns** [Color](../Stimulsoft_System_Drawing/Color.md)


---

#### getDashboardGridLinesColor `static`

**getDashboardGridLinesColor**(**page**: StiPage): [Color](../Stimulsoft_System_Drawing/Color.md)

**Parameters**

- **page** (StiPage)  

**Returns** [Color](../Stimulsoft_System_Drawing/Color.md)


---

#### getDashboardStyleSampleImage `static`

**getDashboardStyleSampleImage**(**element**: IStiElement, **width**: number, **height**: number): Promise<string>

**Parameters**

- **element** (IStiElement)  
- **width** (number)  
- **height** (number)  

**Returns** Promise<string>


---

#### getDashboardStyles `static`

**getDashboardStyles**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any, **withReportStyles**: any): Promise<any[]>

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  
- **withReportStyles** (any)  

**Returns** Promise<any[]>


---

#### getMobileViewUnplacedElements `static`

**getMobileViewUnplacedElements**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any, **callbackResult**: any): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  
- **callbackResult** (any)  


---

#### getSelectionBorderColor `static`

**getSelectionBorderColor**(**page**: StiPage): [Color](../Stimulsoft_System_Drawing/Color.md)

**Parameters**

- **page** (StiPage)  

**Returns** [Color](../Stimulsoft_System_Drawing/Color.md)


---

#### getSelectionCornerColor `static`

**getSelectionCornerColor**(**page**: StiPage): [Color](../Stimulsoft_System_Drawing/Color.md)

**Parameters**

- **page** (StiPage)  

**Returns** [Color](../Stimulsoft_System_Drawing/Color.md)


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **backColor** | any |  |
| **styles** | any |  |
| **styles** | any |  |
| **styles** | any |  |
| **styles** | any |  |
| **styles** | any |  |
| **styles** | any |  |
| **textColor** | any |  |
