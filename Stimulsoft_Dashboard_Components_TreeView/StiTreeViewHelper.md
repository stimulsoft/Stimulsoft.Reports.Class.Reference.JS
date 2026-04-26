---
title: "StiTreeViewHelper Class"
---

## StiTreeViewHelper Class

**Namespace:** `Stimulsoft.Dashboard.Components.TreeView`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **fetchDefaultUserFilters** `static` | Promise<StiDataFilterRule[]> |  |
| **fetchItems** `static` | [StiTreeItem](StiTreeItem.md)[] |  |
| **format** `static` | string |  |
| **getValueMeterExpressions** `static` | string[] |  |

---

### Method Details

#### fetchDefaultUserFilters `static`

**fetchDefaultUserFilters**(**treeViewElement**: StiTreeViewElement): Promise<StiDataFilterRule[]>

**Parameters**

- **treeViewElement** (StiTreeViewElement)  

**Returns** Promise<StiDataFilterRule[]>


---

#### fetchItems `static`

**fetchItems**(**dataTable**: [StiDataTable](../Stimulsoft_Data_Engine/StiDataTable.md), **showBlanks**: boolean): [StiTreeItem](StiTreeItem.md)[]

**Parameters**

- **dataTable** ([StiDataTable](../Stimulsoft_Data_Engine/StiDataTable.md))  
- **showBlanks** (boolean)  

**Returns** [StiTreeItem](StiTreeItem.md)[]


---

#### format `static`

**format**(**treeViewElement**: StiTreeViewElement, **value**: any): string

**Parameters**

- **treeViewElement** (StiTreeViewElement)  
- **value** (any)  

**Returns** string


---

#### getValueMeterExpressions `static`

**getValueMeterExpressions**(**element**: StiTreeViewElement): string[]

**Parameters**

- **element** (StiTreeViewElement)  

**Returns** string[]


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **currentItem** | any |  |
| **selectedItem** | any |  |
