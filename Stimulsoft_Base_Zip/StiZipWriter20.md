---
title: "StiZipWriter20 Class"
---

## StiZipWriter20 Class

**Namespace:** `Stimulsoft.Base.Zip`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**() |  |

**constructor**()


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **addFile** | void |  |
| **begin** | void |  |
| **convertToArray** `static` | number[] |  |
| **end** | void |  |
| **getDosTime** `static` | number |  |

---

### Method Details

#### addFile

**addFile**(**fileName**: string, **dataStream**: [MemoryStream](../Stimulsoft_System_IO/MemoryStream.md), **closeDataStream**: any): void

**Parameters**

- **fileName** (string)  
- **dataStream** ([MemoryStream](../Stimulsoft_System_IO/MemoryStream.md))  
- **closeDataStream** (any)  


---

#### begin

**begin**(**stream**: [MemoryStream](../Stimulsoft_System_IO/MemoryStream.md), **leaveOpen**: boolean): void

**Parameters**

- **stream** ([MemoryStream](../Stimulsoft_System_IO/MemoryStream.md))  
- **leaveOpen** (boolean)  


---

#### convertToArray `static`

**convertToArray**(**useUnicode**: boolean, **str**: string): number[]

**Parameters**

- **useUnicode** (boolean)  
- **str** (string)  

**Returns** number[]


---

#### end

**end**(): void


---

#### getDosTime `static`

**getDosTime**(**dt**: [DateTime](../Stimulsoft_System/DateTime.md)): number

**Parameters**

- **dt** ([DateTime](../Stimulsoft_System/DateTime.md))  

**Returns** number

