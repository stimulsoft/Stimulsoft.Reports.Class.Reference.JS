---
title: "StiRangeSelectorHelper Class"
---

## StiRangeSelectorHelper Class

**Namespace:** `Stimulsoft.Dashboard.Components.RangeSelector`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **calculateAutoStep** `static` | number |  |
| **calculateNiceTicks** `static` | number[] |  |
| **formatValue** `static` | string |  |
| **formatValue2** `static` | string |  |
| **formatValue3** `static` | string |  |
| **getAutoRange** `static` | Promise<DecimalRange> |  |
| **getFormatedDate** `static` | string |  |
| **getRangeInitialValue** `static` | Promise<DecimalRange> |  |
| **getValueMeterExpression** `static` | string |  |
| **isArgumentDateTime** `static` | boolean |  |
| **tryToNullableNumber** `static` | number | null |  |

---

### Method Details

#### calculateAutoStep `static`

**calculateAutoStep**(**min**: number, **max**: number, **isDateTime**: boolean, **maxTicks**: any): number

**Parameters**

- **min** (number)  
- **max** (number)  
- **isDateTime** (boolean)  
- **maxTicks** (any)  

**Returns** number


---

#### calculateNiceTicks `static`

**calculateNiceTicks**(**min**: number, **max**: number, **isDateTime**: boolean, **maxTicks**: any): number[]

**Parameters**

- **min** (number)  
- **max** (number)  
- **isDateTime** (boolean)  
- **maxTicks** (any)  

**Returns** number[]


---

#### formatValue `static`

**formatValue**(**element**: StiRangeSelectorElement, **value**: number): string

**Parameters**

- **element** (StiRangeSelectorElement)  
- **value** (number)  

**Returns** string


---

#### formatValue2 `static`

**formatValue2**(**element**: StiRangeSelectorElement, **value**: [DateTime](../Stimulsoft_System/DateTime.md)): string

**Parameters**

- **element** (StiRangeSelectorElement)  
- **value** ([DateTime](../Stimulsoft_System/DateTime.md))  

**Returns** string


---

#### formatValue3 `static`

**formatValue3**(**element**: StiRangeSelectorElement, **value**: object): string

**Parameters**

- **element** (StiRangeSelectorElement)  
- **value** (object)  

**Returns** string


---

#### getAutoRange `static`

**getAutoRange**(**element**: StiRangeSelectorElement): Promise<DecimalRange>

**Parameters**

- **element** (StiRangeSelectorElement)  

**Returns** Promise<DecimalRange>


---

#### getFormatedDate `static`

**getFormatedDate**(**dateTime**: [DateTime](../Stimulsoft_System/DateTime.md)): string

**Parameters**

- **dateTime** ([DateTime](../Stimulsoft_System/DateTime.md))  

**Returns** string


---

#### getRangeInitialValue `static`

**getRangeInitialValue**(**element**: StiRangeSelectorElement): Promise<DecimalRange>

**Parameters**

- **element** (StiRangeSelectorElement)  

**Returns** Promise<DecimalRange>


---

#### getValueMeterExpression `static`

**getValueMeterExpression**(**sliderElement**: StiRangeSelectorElement): string

**Parameters**

- **sliderElement** (StiRangeSelectorElement)  

**Returns** string


---

#### isArgumentDateTime `static`

**isArgumentDateTime**(**element**: StiRangeSelectorElement): boolean

**Parameters**

- **element** (StiRangeSelectorElement)  

**Returns** boolean


---

#### tryToNullableNumber `static`

**tryToNullableNumber**(**element**: StiRangeSelectorElement, **value**: any): number \| null

**Parameters**

- **element** (StiRangeSelectorElement)  
- **value** (any)  

**Returns** number \| null


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **currentDate** | any |  |
| **currentDate** | any |  |
| **date** | any |  |
| **from** | any |  |
| **step** | any |  |
| **step** | any |  |
| **step** | any |  |
| **step** | any |  |
| **step** | any |  |
| **to** | any |  |
