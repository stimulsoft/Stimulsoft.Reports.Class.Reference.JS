---
title: "StiMapKeyHelper Class"
---

## StiMapKeyHelper Class

**Namespace:** `Stimulsoft.Report.Helpers`

### Inheritance

Implements: [IStiMapKeyHelper](../Stimulsoft_Base_Map/IStiMapKeyHelper.md)  

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **convertMapKeysToIsoAlpha2** | string[] |  |
| **getIsoAlpha2FromName** | string |  |
| **getIsoAlpha3FromName** | string |  |
| **getMapIdents** | string[] |  |
| **getMapKeyFromName** | string |  |
| **getMapKeysFromNames** | string[] |  |
| **getNameFromIsoAlpha2** | string |  |
| **getNameFromIsoAlpha3** | string |  |
| **normalizeName** | string |  |
| **simplify** `static` | string |  |

---

### Method Details

#### convertMapKeysToIsoAlpha2

**convertMapKeysToIsoAlpha2**(**mapKeys**: string[], **mapId**: string, **lang**: string, **report**: [StiReport](../Stimulsoft_Report/StiReport.md)): string[]

**Parameters**

- **mapKeys** (string[])  
- **mapId** (string)  
- **lang** (string)  
- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  

**Returns** string[]


---

#### getIsoAlpha2FromName

**getIsoAlpha2FromName**(**name**: string, **mapId**: string, **lang**: string, **report**: [StiReport](../Stimulsoft_Report/StiReport.md)): string

**Parameters**

- **name** (string)  
- **mapId** (string)  
- **lang** (string)  
- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  

**Returns** string


---

#### getIsoAlpha3FromName

**getIsoAlpha3FromName**(**name**: string, **mapId**: string, **lang**: string, **report**: [StiReport](../Stimulsoft_Report/StiReport.md)): string

**Parameters**

- **name** (string)  
- **mapId** (string)  
- **lang** (string)  
- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  

**Returns** string


---

#### getMapIdents

**getMapIdents**(**key**: string): string[]

**Parameters**

- **key** (string)  

**Returns** string[]


---

#### getMapKeyFromName

**getMapKeyFromName**(**name**: string, **mapId**: string, **lang**: string, **report**: [StiReport](../Stimulsoft_Report/StiReport.md)): string

**Parameters**

- **name** (string)  
- **mapId** (string)  
- **lang** (string)  
- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  

**Returns** string


---

#### getMapKeysFromNames

**getMapKeysFromNames**(**values**: any[], **mapId**: string, **lang**: string, **report**: [StiReport](../Stimulsoft_Report/StiReport.md)): string[]

**Parameters**

- **values** (any[])  
- **mapId** (string)  
- **lang** (string)  
- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  

**Returns** string[]


---

#### getNameFromIsoAlpha2

**getNameFromIsoAlpha2**(**alpha2**: string, **mapId**: string, **lang**: string, **report**: [StiReport](../Stimulsoft_Report/StiReport.md)): string

**Parameters**

- **alpha2** (string)  
- **mapId** (string)  
- **lang** (string)  
- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  

**Returns** string


---

#### getNameFromIsoAlpha3

**getNameFromIsoAlpha3**(**alpha3**: string, **mapId**: string, **lang**: string, **report**: [StiReport](../Stimulsoft_Report/StiReport.md)): string

**Parameters**

- **alpha3** (string)  
- **mapId** (string)  
- **lang** (string)  
- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  

**Returns** string


---

#### normalizeName

**normalizeName**(**name**: string, **mapId**: string, **lang**: string, **report**: IStiReport): string

**Parameters**

- **name** (string)  
- **mapId** (string)  
- **lang** (string)  
- **report** (IStiReport)  

**Returns** string


---

#### simplify `static`

**simplify**(**key**: string): string

**Parameters**

- **key** (string)  

**Returns** string


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **alpha2** | any |  |
| **alpha2** | any |  |
| **alpha3** | any |  |
| **alpha3** | any |  |
| **idents** | any |  |
| **idents** | any |  |
| **idents** | any |  |
| **key** | any |  |
