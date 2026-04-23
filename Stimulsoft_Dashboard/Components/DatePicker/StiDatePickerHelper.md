---
title: "StiDatePickerHelper Class"
---

## StiDatePickerHelper Class

**Namespace:** `Stimulsoft.Dashboard.Components.DatePicker`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **calculateRangeFromInitial** `static` | void |  |
| **fetchDefaultUserFilters** `static` | Promise<StiDataFilterRule[]> |  |
| **getCondition** `static` | [StiDataFilterCondition](../../../Stimulsoft_Data/Engine/StiDataFilterCondition.md) |  |
| **getDefaultValue** `static` | any |  |
| **getFormatedDate** `static` | string |  |
| **getValueMeterExpression** `static` | string |  |
| **getVariableSpecifiedAsValue** `static` | IStiAppVariable |  |
| **isVariableSpecifiedAsValue** `static` | boolean |  |

---

### Method Details

#### calculateRangeFromInitial `static`

**calculateRangeFromInitial**(**selection**: [StiInitialDateRangeSelection](../../../Stimulsoft_Report/Dashboard/StiInitialDateRangeSelection.md), **start**: { ref: DateTime }, **end**: { ref: DateTime }): void

**Parameters**

- **selection** ([StiInitialDateRangeSelection](../../../Stimulsoft_Report/Dashboard/StiInitialDateRangeSelection.md))  
- **start** ({ ref: DateTime })  
- **end** ({ ref: DateTime })  


---

#### fetchDefaultUserFilters `static`

**fetchDefaultUserFilters**(**datePickerElement**: StiDatePickerElement): Promise<StiDataFilterRule[]>

**Parameters**

- **datePickerElement** (StiDatePickerElement)  

**Returns** Promise<StiDataFilterRule[]>


---

#### getCondition `static`

**getCondition**(**datePickerElement**: StiDatePickerElement): [StiDataFilterCondition](../../../Stimulsoft_Data/Engine/StiDataFilterCondition.md)

**Parameters**

- **datePickerElement** (StiDatePickerElement)  

**Returns** [StiDataFilterCondition](../../../Stimulsoft_Data/Engine/StiDataFilterCondition.md)


---

#### getDefaultValue `static`

**getDefaultValue**(**element**: IStiDatePickerElement): any

**Parameters**

- **element** (IStiDatePickerElement)  

**Returns** any


---

#### getFormatedDate `static`

**getFormatedDate**(**dateTime**: [DateTime](../../../Stimulsoft_System/DateTime.md)): string

**Parameters**

- **dateTime** ([DateTime](../../../Stimulsoft_System/DateTime.md))  

**Returns** string


---

#### getValueMeterExpression `static`

**getValueMeterExpression**(**datePickerElement**: StiDatePickerElement): string

**Parameters**

- **datePickerElement** (StiDatePickerElement)  

**Returns** string


---

#### getVariableSpecifiedAsValue `static`

**getVariableSpecifiedAsValue**(**element**: IStiDatePickerElement): IStiAppVariable

**Parameters**

- **element** (IStiDatePickerElement)  

**Returns** IStiAppVariable


---

#### isVariableSpecifiedAsValue `static`

**isVariableSpecifiedAsValue**(**element**: IStiDatePickerElement): boolean

**Parameters**

- **element** (IStiDatePickerElement)  

**Returns** boolean

