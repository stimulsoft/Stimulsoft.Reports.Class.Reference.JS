---
title: "StiBusinessObjectHelper Class"
---

## StiBusinessObjectHelper Class

**Namespace:** `Stimulsoft.Report.Dictionary`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getAlias** `static` | string |  |
| **getBusinessObjectFromGuid** `static` | StiBusinessObject |  |
| **getBusinessObjectsFromReport** `static` | StiBusinessObject[] |  |
| **getColumnsFromData** `static` | StiDataColumnsCollection |  |
| **getElementType** `static` | [Type](../../Stimulsoft_System/Type.md) |  |
| **isAllowUseProperty** `static` | boolean |  |
| **isDataColumn** `static` | boolean |  |

---

### Method Details

#### getAlias `static`

**getAlias**(**valueProp**: string): string

**Parameters**

- **valueProp** (string)  

**Returns** string


---

#### getBusinessObjectFromGuid `static`

**getBusinessObjectFromGuid**(**report**: [StiReport](../StiReport.md), **guid**: string): StiBusinessObject

**Parameters**

- **report** ([StiReport](../StiReport.md))  
- **guid** (string)  

**Returns** StiBusinessObject


---

#### getBusinessObjectsFromReport `static`

**getBusinessObjectsFromReport**(**data**: StiBusinessObjectsCollection | StiReport): StiBusinessObject[]

**Parameters**

- **data** (StiBusinessObjectsCollection | StiReport)  

**Returns** StiBusinessObject[]


---

#### getColumnsFromData `static`

**getColumnsFromData**(**data**: any, **includeChildDataSources**: any): StiDataColumnsCollection

**Parameters**

- **data** (any)  
- **includeChildDataSources** (any)  

**Returns** StiDataColumnsCollection


---

#### getElementType `static`

**getElementType**(**arrayType**: [Type](../../Stimulsoft_System/Type.md)): [Type](../../Stimulsoft_System/Type.md)

**Parameters**

- **arrayType** ([Type](../../Stimulsoft_System/Type.md))  

**Returns** [Type](../../Stimulsoft_System/Type.md)


---

#### isAllowUseProperty `static`

**isAllowUseProperty**(**valueProp**: string): boolean

**Parameters**

- **valueProp** (string)  

**Returns** boolean


---

#### isDataColumn `static`

**isDataColumn**(**type**: [Type](../../Stimulsoft_System/Type.md)): boolean

**Parameters**

- **type** ([Type](../../Stimulsoft_System/Type.md))  

**Returns** boolean

