---
title: "StiTreeViewElementViewHelper Class"
---

## StiTreeViewElementViewHelper Class

**Namespace:** `Stimulsoft.Viewer.Helpers.Dashboards`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getColumnPath** `static` | string |  |
| **getElementItems** `static` | Promise<KeyObjectType[]> |  |
| **getMeterKey** `static` | string |  |
| **getSettings** `static` | any |  |
| **treeViewItem** `static` | KeyObjectType |  |

---

### Method Details

#### getColumnPath `static`

**getColumnPath**(**treeViewElement**: IStiTreeViewElement): string

**Parameters**

- **treeViewElement** (IStiTreeViewElement)  

**Returns** string


---

#### getElementItems `static`

**getElementItems**(**treeViewElement**: IStiTreeViewElement): Promise<KeyObjectType[]>

**Parameters**

- **treeViewElement** (IStiTreeViewElement)  

**Returns** Promise<KeyObjectType[]>


---

#### getMeterKey `static`

**getMeterKey**(**treeViewElement**: IStiTreeViewElement): string

**Parameters**

- **treeViewElement** (IStiTreeViewElement)  

**Returns** string


---

#### getSettings `static`

**getSettings**(**treeViewElement**: IStiTreeViewElement): any

**Parameters**

- **treeViewElement** (IStiTreeViewElement)  

**Returns** any


---

#### treeViewItem `static`

**treeViewItem**(**treeViewElement**: IStiTreeViewElement, **key**: any, **meter**: IStiMeter): KeyObjectType

**Parameters**

- **treeViewElement** (IStiTreeViewElement)  
- **key** (any)  
- **meter** (IStiMeter)  

**Returns** KeyObjectType


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **currentItem** | any |  |
| **selectedItem** | any |  |
