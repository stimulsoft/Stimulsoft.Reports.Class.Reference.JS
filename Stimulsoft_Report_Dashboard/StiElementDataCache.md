---
title: "StiElementDataCache Class"
---

## StiElementDataCache Class

**Namespace:** `Stimulsoft.Report.Dashboard`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **add** `static` | void |  |
| **cleanCache** `static` | void |  |
| **create** `static` | Promise<[StiDataTable](../Stimulsoft_Data_Engine/StiDataTable.md)> |  |
| **getKey** `static` | string |  |
| **getOrCreate** `static` | Promise<[StiDataTable](../Stimulsoft_Data_Engine/StiDataTable.md)> |  |
| **getOrCreatePivot** `static` | Promise<[IStiPivotGridContainer](IStiPivotGridContainer.md)> |  |
| **getOrCreatePivotWithProgress** `static` | Promise<[IStiPivotGridContainer](IStiPivotGridContainer.md)> |  |
| **getOrCreateWithProgress** `static` | Promise<[StiDataTable](../Stimulsoft_Data_Engine/StiDataTable.md)> |  |
| **tryToGetOrCreate** `static` | Promise<[StiDataTable](../Stimulsoft_Data_Engine/StiDataTable.md)> |  |

---

### Method Details

#### add `static`

**add**(**element**: IStiElement, **dataTable**: [StiDataTable](../Stimulsoft_Data_Engine/StiDataTable.md)): void

**Parameters**

- **element** (IStiElement)  
- **dataTable** ([StiDataTable](../Stimulsoft_Data_Engine/StiDataTable.md))  


---

#### cleanCache `static`

**cleanCache**(**reportKey**: string): void

**Parameters**

- **reportKey** (string)  


---

#### create `static`

**create**(**element**: IStiElement, **dataRequestOption**: [StiDataRequestOption](../Stimulsoft_Data_Engine/StiDataRequestOption.md)): Promise<[StiDataTable](../Stimulsoft_Data_Engine/StiDataTable.md)>

**Parameters**

- **element** (IStiElement)  
- **dataRequestOption** ([StiDataRequestOption](../Stimulsoft_Data_Engine/StiDataRequestOption.md))  

**Returns** Promise<[StiDataTable](../Stimulsoft_Data_Engine/StiDataTable.md)>


---

#### getKey `static`

**getKey**(**element**: IStiElement): string

**Parameters**

- **element** (IStiElement)  

**Returns** string


---

#### getOrCreate `static`

**getOrCreate**(**element**: IStiElement, **option**: [StiDataRequestOption](../Stimulsoft_Data_Engine/StiDataRequestOption.md)): Promise<[StiDataTable](../Stimulsoft_Data_Engine/StiDataTable.md)>

**Parameters**

- **element** (IStiElement)  
- **option** ([StiDataRequestOption](../Stimulsoft_Data_Engine/StiDataRequestOption.md))  

**Returns** Promise<[StiDataTable](../Stimulsoft_Data_Engine/StiDataTable.md)>


---

#### getOrCreatePivot `static`

**getOrCreatePivot**(**element**: IStiPivotTableElement, **creator**: [IStiPivotTableCreator](IStiPivotTableCreator.md), **option**: [StiDataRequestOption](../Stimulsoft_Data_Engine/StiDataRequestOption.md)): Promise<[IStiPivotGridContainer](IStiPivotGridContainer.md)>

**Parameters**

- **element** (IStiPivotTableElement)  
- **creator** ([IStiPivotTableCreator](IStiPivotTableCreator.md))  
- **option** ([StiDataRequestOption](../Stimulsoft_Data_Engine/StiDataRequestOption.md))  

**Returns** Promise<[IStiPivotGridContainer](IStiPivotGridContainer.md)>


---

#### getOrCreatePivotWithProgress `static`

**getOrCreatePivotWithProgress**(**element**: IStiPivotTableElement, **creator**: [IStiPivotTableCreator](IStiPivotTableCreator.md), **option**: [StiDataRequestOption](../Stimulsoft_Data_Engine/StiDataRequestOption.md)): Promise<[IStiPivotGridContainer](IStiPivotGridContainer.md)>

**Parameters**

- **element** (IStiPivotTableElement)  
- **creator** ([IStiPivotTableCreator](IStiPivotTableCreator.md))  
- **option** ([StiDataRequestOption](../Stimulsoft_Data_Engine/StiDataRequestOption.md))  

**Returns** Promise<[IStiPivotGridContainer](IStiPivotGridContainer.md)>


---

#### getOrCreateWithProgress `static`

**getOrCreateWithProgress**(**element**: IStiElement, **option**: [StiDataRequestOption](../Stimulsoft_Data_Engine/StiDataRequestOption.md)): Promise<[StiDataTable](../Stimulsoft_Data_Engine/StiDataTable.md)>

**Parameters**

- **element** (IStiElement)  
- **option** ([StiDataRequestOption](../Stimulsoft_Data_Engine/StiDataRequestOption.md))  

**Returns** Promise<[StiDataTable](../Stimulsoft_Data_Engine/StiDataTable.md)>


---

#### tryToGetOrCreate `static`

**tryToGetOrCreate**(**element**: IStiElement, **option**: [StiDataRequestOption](../Stimulsoft_Data_Engine/StiDataRequestOption.md)): Promise<[StiDataTable](../Stimulsoft_Data_Engine/StiDataTable.md)>

**Parameters**

- **element** (IStiElement)  
- **option** ([StiDataRequestOption](../Stimulsoft_Data_Engine/StiDataRequestOption.md))  

**Returns** Promise<[StiDataTable](../Stimulsoft_Data_Engine/StiDataTable.md)>


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **dataTable** | any |  |
| **dataTable** | any |  |
| **element** | any |  |
| **group** | any |  |
| **hashKeys** | any |  |
| **hashKeys** | any |  |
| **userFilters** | any |  |
