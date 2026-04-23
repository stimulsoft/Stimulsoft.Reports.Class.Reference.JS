---
title: "StiUniversalDataLoader Class"
---

## StiUniversalDataLoader Class

**Namespace:** `Stimulsoft.Report.Helpers`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **loadMutiple** `static` | [StiDataLoaderHelperData](../../Stimulsoft_Base/StiDataLoaderHelperData.md)[] |  |
| **loadSingle** `static` | [StiDataLoaderHelperData](../../Stimulsoft_Base/StiDataLoaderHelperData.md) |  |

---

### Method Details

#### loadMutiple `static`

**loadMutiple**(**report**: [StiReport](../StiReport.md), **path**: string, **filter**: string, **binary**: boolean, **headers**: [Header](../../Stimulsoft_System/Header.md)[], **withCredentials**: boolean): [StiDataLoaderHelperData](../../Stimulsoft_Base/StiDataLoaderHelperData.md)[]

**Parameters**

- **report** ([StiReport](../StiReport.md))  
- **path** (string)  
- **filter** (string)  
- **binary** (boolean)  
- **headers** ([Header](../../Stimulsoft_System/Header.md)[])  
- **withCredentials** (boolean)  

**Returns** [StiDataLoaderHelperData](../../Stimulsoft_Base/StiDataLoaderHelperData.md)[]


---

#### loadSingle `static`

**loadSingle**(**report**: [StiReport](../StiReport.md), **path**: string, **binary**: boolean, **headers**: [Header](../../Stimulsoft_System/Header.md)[], **withCredentials**: boolean, **allowException**: any): [StiDataLoaderHelperData](../../Stimulsoft_Base/StiDataLoaderHelperData.md)

**Parameters**

- **report** ([StiReport](../StiReport.md))  
- **path** (string)  
- **binary** (boolean)  
- **headers** ([Header](../../Stimulsoft_System/Header.md)[])  
- **withCredentials** (boolean)  
- **allowException** (any)  

**Returns** [StiDataLoaderHelperData](../../Stimulsoft_Base/StiDataLoaderHelperData.md)

