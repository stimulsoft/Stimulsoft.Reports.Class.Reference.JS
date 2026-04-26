---
title: "StiTreeViewBoxElementViewHelper Class"
---

## StiTreeViewBoxElementViewHelper Class

**Namespace:** `Stimulsoft.Viewer.Helpers.Dashboards`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getColumnPath** `static` | string |  |
| **getElementItems** `static` | Promise<KeyObjectType[]> |  |
| **getMeterKey** `static` | string |  |
| **getSettings** `static` | any |  |
| **treeViewBoxItem** `static` | KeyObjectType |  |

---

### Method Details

#### getColumnPath `static`

**getColumnPath**(**treeViewBoxElement**: IStiTreeViewBoxElement): string

**Parameters**

- **treeViewBoxElement** (IStiTreeViewBoxElement)  

**Returns** string


---

#### getElementItems `static`

**getElementItems**(**treeViewBoxElement**: IStiTreeViewBoxElement): Promise<KeyObjectType[]>

**Parameters**

- **treeViewBoxElement** (IStiTreeViewBoxElement)  

**Returns** Promise<KeyObjectType[]>


---

#### getMeterKey `static`

**getMeterKey**(**treeViewBoxElement**: IStiTreeViewBoxElement): string

**Parameters**

- **treeViewBoxElement** (IStiTreeViewBoxElement)  

**Returns** string


---

#### getSettings `static`

**getSettings**(**treeViewBoxElement**: IStiTreeViewBoxElement): any

**Parameters**

- **treeViewBoxElement** (IStiTreeViewBoxElement)  

**Returns** any


---

#### treeViewBoxItem `static`

**treeViewBoxItem**(**treeViewBoxElement**: IStiTreeViewBoxElement, **key**: any, **meter**: IStiMeter): KeyObjectType

**Parameters**

- **treeViewBoxElement** (IStiTreeViewBoxElement)  
- **key** (any)  
- **meter** (IStiMeter)  

**Returns** KeyObjectType


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **currentItem** | any |  |
| **selectedItem** | any |  |
