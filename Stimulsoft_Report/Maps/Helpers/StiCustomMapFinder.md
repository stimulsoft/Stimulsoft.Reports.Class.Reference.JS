---
title: "StiCustomMapFinder Class"
---

## StiCustomMapFinder Class

**Namespace:** `Stimulsoft.Report.Maps.Helpers`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **StiCustomMapFinder** `static` | void |  |
| **clear** `static` | void |  |
| **getContainer** `static` | [StiMapSvgContainer](../StiMapSvgContainer.md) |  |
| **init** `static` | void |  |
| **isCustom** `static` | boolean |  |
| **stiPopulateObject** `static` | void |  |

---

### Method Details

#### StiCustomMapFinder `static`

**StiCustomMapFinder**(): void


---

#### clear `static`

**clear**(): void


---

#### getContainer `static`

**getContainer**(**report**: [StiReport](../../StiReport.md), **mapIdent**: string): [StiMapSvgContainer](../StiMapSvgContainer.md)

**Parameters**

- **report** ([StiReport](../../StiReport.md))  
- **mapIdent** (string)  

**Returns** [StiMapSvgContainer](../StiMapSvgContainer.md)


---

#### init `static`

**init**(**report**: [StiReport](../../StiReport.md)): void

**Parameters**

- **report** ([StiReport](../../StiReport.md))  


---

#### isCustom `static`

**isCustom**(**mapIdent**: string): boolean

**Parameters**

- **mapIdent** (string)  

**Returns** boolean


---

#### stiPopulateObject `static`

**stiPopulateObject**(**json**: object, **obj**: StiMapSvgContainer | StiMapSvg): void

**Parameters**

- **json** (object)  
- **obj** (StiMapSvgContainer | StiMapSvg)  

