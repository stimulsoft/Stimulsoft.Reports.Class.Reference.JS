---
title: "StiRangeSelectorElementViewHelper Class"
---

## StiRangeSelectorElementViewHelper Class

**Namespace:** `Stimulsoft.Viewer.Helpers.Dashboards`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **calculateAutoStep** `static` | number |  |
| **getAutoRange** `static` | Promise<DecimalRange> |  |
| **getColumnPath** `static` | string |  |
| **getSettings** `static` | any |  |
| **getStep** `static` | number |  |
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

#### getAutoRange `static`

**getAutoRange**(**element**: IStiRangeSelectorElement): Promise<DecimalRange>

**Parameters**

- **element** (IStiRangeSelectorElement)  

**Returns** Promise<DecimalRange>


---

#### getColumnPath `static`

**getColumnPath**(**rangeSelectorElement**: IStiRangeSelectorElement): string

**Parameters**

- **rangeSelectorElement** (IStiRangeSelectorElement)  

**Returns** string


---

#### getSettings `static`

**getSettings**(**rangeSelectorElement**: IStiRangeSelectorElement): any

**Parameters**

- **rangeSelectorElement** (IStiRangeSelectorElement)  

**Returns** any


---

#### getStep `static`

**getStep**(**rangeSelectorElement**: IStiRangeSelectorElement, **minimum**: number, **maximum**: number): number

**Parameters**

- **rangeSelectorElement** (IStiRangeSelectorElement)  
- **minimum** (number)  
- **maximum** (number)  

**Returns** number


---

#### isArgumentDateTime `static`

**isArgumentDateTime**(**rangeSelectorElement**: IStiRangeSelectorElement): boolean

**Parameters**

- **rangeSelectorElement** (IStiRangeSelectorElement)  

**Returns** boolean


---

#### tryToNullableNumber `static`

**tryToNullableNumber**(**element**: IStiRangeSelectorElement, **value**: any): number | null

**Parameters**

- **element** (IStiRangeSelectorElement)  
- **value** (any)  

**Returns** number | null

