---
title: "StiComboBoxHelper Class"
---

## StiComboBoxHelper Class

**Namespace:** `Stimulsoft.Dashboard.Components.ComboBox`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **fetchDefaultUserFilters** `static` | Promise<StiDataFilterRule[]> |  |
| **fetchItems** `static` | [StiComboBoxItem](StiComboBoxItem.md)[] |  |
| **getInitialValues** `static` | string[] |  |
| **getKeyMeterExpression** `static` | string |  |
| **isBlank** `static` | boolean |  |

---

### Method Details

#### fetchDefaultUserFilters `static`

**fetchDefaultUserFilters**(**comboBoxElement**: StiComboBoxElement): Promise<StiDataFilterRule[]>

**Parameters**

- **comboBoxElement** (StiComboBoxElement)  

**Returns** Promise<StiDataFilterRule[]>


---

#### fetchItems `static`

**fetchItems**(**comboBoxElement**: StiComboBoxElement, **dataTable**: [StiDataTable](../../../Stimulsoft_Data/Engine/StiDataTable.md), **showBlanks**: boolean): [StiComboBoxItem](StiComboBoxItem.md)[]

**Parameters**

- **comboBoxElement** (StiComboBoxElement)  
- **dataTable** ([StiDataTable](../../../Stimulsoft_Data/Engine/StiDataTable.md))  
- **showBlanks** (boolean)  

**Returns** [StiComboBoxItem](StiComboBoxItem.md)[]


---

#### getInitialValues `static`

**getInitialValues**(**element**: StiComboBoxElement): string[]

**Parameters**

- **element** (StiComboBoxElement)  

**Returns** string[]


---

#### getKeyMeterExpression `static`

**getKeyMeterExpression**(**comboBoxElement**: StiComboBoxElement): string

**Parameters**

- **comboBoxElement** (StiComboBoxElement)  

**Returns** string


---

#### isBlank `static`

**isBlank**(**data**: any): boolean

**Parameters**

- **data** (any)  

**Returns** boolean

