---
title: "StiTableElementViewHelper Class"
---

## StiTableElementViewHelper Class

**Namespace:** `Stimulsoft.Viewer.Helpers.Dashboards`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **changeTableElementSelectColumns** `static` | Promise<KeyObjectType> |  |
| **getCellForeColor** `static` | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **getDataForTableElementPage** `static` | Promise<KeyObjectType> |  |
| **getTableData** `static` | Promise<KeyObjectType[][]> |  |
| **getTableHiddenData** `static` | Promise<KeyObjectType[][]> |  |
| **getTableSettings** `static` | KeyObjectType |  |

---

### Method Details

#### changeTableElementSelectColumns `static`

**changeTableElementSelectColumns**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **requestParams**: any): Promise<KeyObjectType>

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **requestParams** (any)  

**Returns** Promise<KeyObjectType>


---

#### getCellForeColor `static`

**getCellForeColor**(**tableElement**: IStiTableElement, **column**: [IStiTableColumn](../Stimulsoft_Base_Meters/IStiTableColumn.md), **isInterlacedForeColor**: any, **tableStyle**: StiTableElementStyle): [Color](../Stimulsoft_System_Drawing/Color.md)

**Parameters**

- **tableElement** (IStiTableElement)  
- **column** ([IStiTableColumn](../Stimulsoft_Base_Meters/IStiTableColumn.md))  
- **isInterlacedForeColor** (any)  
- **tableStyle** (StiTableElementStyle)  

**Returns** [Color](../Stimulsoft_System_Drawing/Color.md)


---

#### getDataForTableElementPage `static`

**getDataForTableElementPage**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **requestParams**: any): Promise<KeyObjectType>

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **requestParams** (any)  

**Returns** Promise<KeyObjectType>


---

#### getTableData `static`

**getTableData**(**tableElement**: IStiTableElement, **requestParams**: any): Promise<KeyObjectType[][]>

**Parameters**

- **tableElement** (IStiTableElement)  
- **requestParams** (any)  

**Returns** Promise<KeyObjectType[][]>


---

#### getTableHiddenData `static`

**getTableHiddenData**(**tableElement**: IStiTableElement): Promise<KeyObjectType[][]>

**Parameters**

- **tableElement** (IStiTableElement)  

**Returns** Promise<KeyObjectType[][]>


---

#### getTableSettings `static`

**getTableSettings**(**tableElement**: IStiTableElement, **tableStyle**: StiTableElementStyle): KeyObjectType

**Parameters**

- **tableElement** (IStiTableElement)  
- **tableStyle** (StiTableElementStyle)  

**Returns** KeyObjectType


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **resultData** | any |  |
| **resultData** | any |  |
