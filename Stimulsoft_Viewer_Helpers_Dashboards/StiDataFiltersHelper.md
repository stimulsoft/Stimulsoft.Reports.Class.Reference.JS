---
title: "StiDataFiltersHelper Class"
---

## StiDataFiltersHelper Class

**Namespace:** `Stimulsoft.Viewer.Helpers.Dashboards`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **applyDefaultFiltersForFilterElements** `static` | Promise<void> |  |
| **applyDefaultFiltersForFilterElements2** `static` | Promise<void> |  |
| **applyFiltering** `static` | void |  |
| **applyFiltersToElement** `static` | void |  |
| **checkInvoikeResetAllFilters** `static` | void |  |
| **filterRuleItem** `static` | KeyObjectType |  |
| **getDataTableFilterQueryStringRepresentation** `static` | string |  |
| **getDrillDownFilters** `static` | any[] |  |
| **getDrillDownFiltersList** `static` | KeyObjectType[][] |  |
| **getElementFilters** `static` | KeyObjectType[] |  |
| **getFilterItems** `static` | any |  |
| **getFilterItemsHelper** `static` | any |  |
| **getViewData** `static` | Promise<any> |  |
| **isBlankData** `static` | boolean |  |
| **isStringColumnType** `static` | boolean |  |
| **resetAllFilters** `static` | void |  |
| **toDisplayString** `static` | string |  |
| **toFilterString** `static` | string |  |
| **typeToString** `static` | string |  |

---

### Method Details

#### applyDefaultFiltersForFilterElements `static`

**applyDefaultFiltersForFilterElements**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md)): Promise<void>

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  

**Returns** Promise<void>


---

#### applyDefaultFiltersForFilterElements2 `static`

**applyDefaultFiltersForFilterElements2**(**dashboard**: StiPage): Promise<void>

**Parameters**

- **dashboard** (StiPage)  

**Returns** Promise<void>


---

#### applyFiltering `static`

**applyFiltering**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **parameters**: any): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **parameters** (any)  


---

#### applyFiltersToElement `static`

**applyFiltersToElement**(**element**: IStiElement, **filters**: any[]): void

**Parameters**

- **element** (IStiElement)  
- **filters** (any[])  


---

#### checkInvoikeResetAllFilters `static`

**checkInvoikeResetAllFilters**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **evnt**: [StiEvent](../Stimulsoft_Report_Events/StiEvent.md), **pageNumber**: number): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **evnt** ([StiEvent](../Stimulsoft_Report_Events/StiEvent.md))  
- **pageNumber** (number)  


---

#### filterRuleItem `static`

**filterRuleItem**(**filterRule**: StiDataFilterRule): KeyObjectType

**Parameters**

- **filterRule** (StiDataFilterRule)  

**Returns** KeyObjectType


---

#### getDataTableFilterQueryStringRepresentation `static`

**getDataTableFilterQueryStringRepresentation**(**element**: IStiElement): string

**Parameters**

- **element** (IStiElement)  

**Returns** string


---

#### getDrillDownFilters `static`

**getDrillDownFilters**(**drillDownElement**: [IStiDrillDownElement](../Stimulsoft_Data_Engine/IStiDrillDownElement.md)): any[]

**Parameters**

- **drillDownElement** ([IStiDrillDownElement](../Stimulsoft_Data_Engine/IStiDrillDownElement.md))  

**Returns** any[]


---

#### getDrillDownFiltersList `static`

**getDrillDownFiltersList**(**drillDownElement**: [IStiDrillDownElement](../Stimulsoft_Data_Engine/IStiDrillDownElement.md)): KeyObjectType[][]

**Parameters**

- **drillDownElement** ([IStiDrillDownElement](../Stimulsoft_Data_Engine/IStiDrillDownElement.md))  

**Returns** KeyObjectType[][]


---

#### getElementFilters `static`

**getElementFilters**(**element**: IStiElement): KeyObjectType[]

**Parameters**

- **element** (IStiElement)  

**Returns** KeyObjectType[]


---

#### getFilterItems `static`

**getFilterItems**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **requestParams**: any): any

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **requestParams** (any)  

**Returns** any


---

#### getFilterItemsHelper `static`

**getFilterItemsHelper**(**query**: IStiQueryObject, **meters**: IStiMeter[], **columnIndex**: number, **sorts**: StiDataSortRule[], **filters**: StiDataFilterRule[], **element**: IStiElement): any

**Parameters**

- **query** (IStiQueryObject)  
- **meters** (IStiMeter[])  
- **columnIndex** (number)  
- **sorts** (StiDataSortRule[])  
- **filters** (StiDataFilterRule[])  
- **element** (IStiElement)  

**Returns** any


---

#### getViewData `static`

**getViewData**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **requestParams**: any): Promise<any>

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **requestParams** (any)  

**Returns** Promise<any>


---

#### isBlankData `static`

**isBlankData**(**data**: any): boolean

**Parameters**

- **data** (any)  

**Returns** boolean


---

#### isStringColumnType `static`

**isStringColumnType**(**element**: IStiElement): boolean

**Parameters**

- **element** (IStiElement)  

**Returns** boolean


---

#### resetAllFilters `static`

**resetAllFilters**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **pageNumber**: number): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **pageNumber** (number)  


---

#### toDisplayString `static`

**toDisplayString**(**value**: any, **type**: [Type](../Stimulsoft_System/Type.md)): string

**Parameters**

- **value** (any)  
- **type** ([Type](../Stimulsoft_System/Type.md))  

**Returns** string


---

#### toFilterString `static`

**toFilterString**(**value**: any, **type**: [Type](../Stimulsoft_System/Type.md)): string

**Parameters**

- **value** (any)  
- **type** ([Type](../Stimulsoft_System/Type.md))  

**Returns** string


---

#### typeToString `static`

**typeToString**(**type**: [Type](../Stimulsoft_System/Type.md)): string

**Parameters**

- **type** ([Type](../Stimulsoft_System/Type.md))  

**Returns** string


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **columnPath** | any |  |
| **columnPath** | any |  |
| **columnPath** | any |  |
| **columnPath** | any |  |
| **element** | any |  |
| **netTable** | any |  |
| **resultData** | any |  |
| **rowValue** | any |  |
| **rowValue** | any |  |
| **str** | any |  |
| **tempTableElement** | any |  |
| **tempTableElement** | any |  |
