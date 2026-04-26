---
title: "StiListBoxHelper Class"
---

## StiListBoxHelper Class

**Namespace:** `Stimulsoft.Dashboard.Components.ListBox`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **fetchDefaultUserFilters** `static` | Promise<StiDataFilterRule[]> |  |
| **fetchItems** `static` | [StiListBoxItem](StiListBoxItem.md)[] |  |
| **format** `static` | string |  |
| **getInitialValues** `static` | string[] |  |
| **getKeyMeterExpression** `static` | string |  |
| **getKeyMeterIndex** `static` | number |  |
| **getNameMeterIndex** `static` | number |  |
| **isBlank** `static` | boolean |  |

---

### Method Details

#### fetchDefaultUserFilters `static`

**fetchDefaultUserFilters**(**listBoxElement**: StiListBoxElement): Promise<StiDataFilterRule[]>

**Parameters**

- **listBoxElement** (StiListBoxElement)  

**Returns** Promise<StiDataFilterRule[]>


---

#### fetchItems `static`

**fetchItems**(**listBoxElement**: StiListBoxElement, **dataTable**: [StiDataTable](../Stimulsoft_Data_Engine/StiDataTable.md), **showBlanks**: boolean): [StiListBoxItem](StiListBoxItem.md)[]

**Parameters**

- **listBoxElement** (StiListBoxElement)  
- **dataTable** ([StiDataTable](../Stimulsoft_Data_Engine/StiDataTable.md))  
- **showBlanks** (boolean)  

**Returns** [StiListBoxItem](StiListBoxItem.md)[]


---

#### format `static`

**format**(**listBoxElement**: StiListBoxElement, **value**: any): string

**Parameters**

- **listBoxElement** (StiListBoxElement)  
- **value** (any)  

**Returns** string


---

#### getInitialValues `static`

**getInitialValues**(**element**: StiListBoxElement): string[]

**Parameters**

- **element** (StiListBoxElement)  

**Returns** string[]


---

#### getKeyMeterExpression `static`

**getKeyMeterExpression**(**listBoxElement**: StiListBoxElement): string

**Parameters**

- **listBoxElement** (StiListBoxElement)  

**Returns** string


---

#### getKeyMeterIndex `static`

**getKeyMeterIndex**(**table**: [StiDataTable](../Stimulsoft_Data_Engine/StiDataTable.md)): number

**Parameters**

- **table** ([StiDataTable](../Stimulsoft_Data_Engine/StiDataTable.md))  

**Returns** number


---

#### getNameMeterIndex `static`

**getNameMeterIndex**(**table**: [StiDataTable](../Stimulsoft_Data_Engine/StiDataTable.md)): number

**Parameters**

- **table** ([StiDataTable](../Stimulsoft_Data_Engine/StiDataTable.md))  

**Returns** number


---

#### isBlank `static`

**isBlank**(**data**: any): boolean

**Parameters**

- **data** (any)  

**Returns** boolean


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **keyIndex** | any |  |
| **nameIndex** | any |  |
