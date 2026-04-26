---
title: "IStiTableCell Interface"
---

## IStiTableCell Interface

**Namespace:** `Stimulsoft.Report.Components.Table`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **containsGuid** | boolean |  |
| **getJoinComponentByGuid** | StiComponent |  |
| **getJoinComponentByIndex** | StiComponent |  |
| **getRealHeight** | number |  |
| **getRealHeightAfterInsertRows** | number |  |
| **getRealLeft** | number |  |
| **getRealTop** | number |  |
| **getRealWidth** | number |  |
| **setJoinSize** | void |  |

---

### Method Details

#### containsGuid

**containsGuid**(**id**: number): boolean

**Parameters**

- **id** (number)  

**Returns** boolean


---

#### getJoinComponentByGuid

**getJoinComponentByGuid**(**id**: number): StiComponent

**Parameters**

- **id** (number)  

**Returns** StiComponent


---

#### getJoinComponentByIndex

**getJoinComponentByIndex**(**index**: number): StiComponent

**Parameters**

- **index** (number)  

**Returns** StiComponent


---

#### getRealHeight

**getRealHeight**(): number

**Returns** number


---

#### getRealHeightAfterInsertRows

**getRealHeightAfterInsertRows**(): number

**Returns** number


---

#### getRealLeft

**getRealLeft**(): number

**Returns** number


---

#### getRealTop

**getRealTop**(): number

**Returns** number


---

#### getRealWidth

**getRealWidth**(): number

**Returns** number


---

#### setJoinSize

**setJoinSize**(): void


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **cellDockStyle** | [StiDockStyle](../Stimulsoft_Report_Components/StiDockStyle.md) |  |
| **cellType** | [StiTablceCellType](StiTablceCellType.md) |  |
| **changeLeftPosition** | boolean |  |
| **changeRightPosition** | boolean |  |
| **changeTopPosition** | boolean |  |
| **column** | number |  |
| **fixedWidth** | boolean |  |
| **id** | number |  |
| **join** | boolean |  |
| **joinCells** | number[] |  |
| **joinHeight** | number |  |
| **joinWidth** | number |  |
| **merged** | boolean |  |
| **parentJoin** | number |  |
| **parentJoinCell** | StiComponent |  |
| **tableTag** | any |  |
