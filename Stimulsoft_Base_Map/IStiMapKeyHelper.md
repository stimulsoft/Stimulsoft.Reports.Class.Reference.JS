---
title: "IStiMapKeyHelper Interface"
---

## IStiMapKeyHelper Interface

**Namespace:** `Stimulsoft.Base.Map`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getIsoAlpha2FromName** | string |  |
| **getIsoAlpha3FromName** | string |  |
| **getMapIdents** | string[] |  |
| **getNameFromIsoAlpha2** | string |  |
| **getNameFromIsoAlpha3** | string |  |
| **normalizeName** | string |  |

---

### Method Details

#### getIsoAlpha2FromName

**getIsoAlpha2FromName**(**country**: string, **mapId**: string, **lang**: string): string

**Parameters**

- **country** (string)  
- **mapId** (string)  
- **lang** (string)  

**Returns** string


---

#### getIsoAlpha3FromName

**getIsoAlpha3FromName**(**country**: string, **mapId**: string, **lang**: string): string

**Parameters**

- **country** (string)  
- **mapId** (string)  
- **lang** (string)  

**Returns** string


---

#### getMapIdents

**getMapIdents**(**key**: string): string[]

**Parameters**

- **key** (string)  

**Returns** string[]


---

#### getNameFromIsoAlpha2

**getNameFromIsoAlpha2**(**alpha3**: string, **mapId**: string, **lang**: string): string

**Parameters**

- **alpha3** (string)  
- **mapId** (string)  
- **lang** (string)  

**Returns** string


---

#### getNameFromIsoAlpha3

**getNameFromIsoAlpha3**(**alpha3**: string, **mapId**: string, **lang**: string): string

**Parameters**

- **alpha3** (string)  
- **mapId** (string)  
- **lang** (string)  

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

