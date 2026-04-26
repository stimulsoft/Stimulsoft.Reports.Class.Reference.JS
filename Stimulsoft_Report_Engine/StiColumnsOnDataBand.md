---
title: "StiColumnsOnDataBand Class"
---

## StiColumnsOnDataBand Class

**Namespace:** `Stimulsoft.Report.Engine`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([StiEngine](StiEngine.md) engine) |  |

**constructor**(**engine**: [StiEngine](StiEngine.md))

**Parameters**

- **engine** ([StiEngine](StiEngine.md))  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **enabled** | boolean | Gets or sets value which indicates about current state of column on DataBand mode. |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **createColumns** | StiColumnsContainer | Creates and returns a container to output columns on a Databand. |
| **getColumns** | StiColumnsContainer | Returns a container of columns that is the last on a page. If after a container of columns other bands were output then return null. |
| **renderColumns** | StiColumnsContainer |  |
| **renderColumnsAsync** | Promise<StiColumnsContainer> | Adds a container of columns to the current page. A container of columns is used to output columns on a databand. |

---

### Method Details

#### createColumns

**createColumns**(**dataBand**: StiDataBand): StiColumnsContainer

Creates and returns a container to output columns on a Databand.

**Parameters**

- **dataBand** (StiDataBand)  

**Returns** StiColumnsContainer


---

#### getColumns

**getColumns**(): StiColumnsContainer

Returns a container of columns that is the last on a page.
If after a container of columns other bands were output then return null.

**Returns** StiColumnsContainer


---

#### renderColumns

**renderColumns**(**dataBand**: StiDataBand): StiColumnsContainer

**Parameters**

- **dataBand** (StiDataBand)  

**Returns** StiColumnsContainer


---

#### renderColumnsAsync

**renderColumnsAsync**(**dataBand**: StiDataBand): Promise<StiColumnsContainer>

Adds a container of columns to the current page.
A container of columns is used to output columns on a databand.

**Parameters**

- **dataBand** (StiDataBand)  

**Returns** Promise<StiColumnsContainer>


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **engine** | [StiEngine](StiEngine.md) |  |
