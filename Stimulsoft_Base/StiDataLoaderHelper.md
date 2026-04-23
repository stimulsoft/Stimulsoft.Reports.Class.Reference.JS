---
title: "StiDataLoaderHelper Class"
---

## StiDataLoaderHelper Class

**Namespace:** `Stimulsoft.Base`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **loadMultiple** `static` | [StiDataLoaderHelperData](StiDataLoaderHelperData.md)[] |  |
| **loadSingle** `static` | [StiDataLoaderHelperData](StiDataLoaderHelperData.md) |  |

---

### Method Details

#### loadMultiple `static`

**loadMultiple**(**path**: string, **fileExt**: string, **binary**: boolean, **headers**: [Header](../Stimulsoft_System/Header.md)[], **withCredentials**: boolean): [StiDataLoaderHelperData](StiDataLoaderHelperData.md)[]

**Parameters**

- **path** (string)  
- **fileExt** (string)  
- **binary** (boolean)  
- **headers** ([Header](../Stimulsoft_System/Header.md)[])  
- **withCredentials** (boolean)  

**Returns** [StiDataLoaderHelperData](StiDataLoaderHelperData.md)[]


---

#### loadSingle `static`

**loadSingle**(**path**: string, **binary**: boolean, **headers**: [Header](../Stimulsoft_System/Header.md)[], **withCredentials**: boolean, **allowException**: any): [StiDataLoaderHelperData](StiDataLoaderHelperData.md)

**Parameters**

- **path** (string)  
- **binary** (boolean)  
- **headers** ([Header](../Stimulsoft_System/Header.md)[])  
- **withCredentials** (boolean)  
- **allowException** (any)  

**Returns** [StiDataLoaderHelperData](StiDataLoaderHelperData.md)

