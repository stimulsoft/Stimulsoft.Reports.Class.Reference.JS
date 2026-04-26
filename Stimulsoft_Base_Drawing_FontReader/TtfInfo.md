---
title: "TtfInfo Class"
---

## TtfInfo Class

**Namespace:** `Stimulsoft.Base.Drawing.FontReader`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getCmapDictionary** | number[] |  |
| **getFamilyName** | string |  |
| **getStyle** | [FontStyle](../Stimulsoft_System_Drawing/FontStyle.md) |  |

---

### Method Details

#### getCmapDictionary

**getCmapDictionary**(): number[]

**Returns** number[]


---

#### getFamilyName

**getFamilyName**(): string

**Returns** string


---

#### getStyle

**getStyle**(): [FontStyle](../Stimulsoft_System_Drawing/FontStyle.md)

**Returns** [FontStyle](../Stimulsoft_System_Drawing/FontStyle.md)


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **cmap** | [t_Cmap](t_Cmap.md) |  |
| **fontReader** | [StiFontReader](StiFontReader.md) |  |
| **head** | [t_Head](t_Head.md) |  |
| **headerOffset** | number |  |
| **hhea** | [t_Hhea](t_Hhea.md) |  |
| **hmtx** | [t_Hmtx](t_Hmtx.md) |  |
| **maxp** | [t_Maxp](t_Maxp.md) |  |
| **name** | [t_Name](t_Name.md) |  |
| **name** | any |  |
| **numTables** | number |  |
| **os2** | [t_OS2](t_OS2.md) |  |
| **sFntVersion** | number |  |
| **tables** | Dictionary<string, [t_Table](t_Table.md)> |  |
