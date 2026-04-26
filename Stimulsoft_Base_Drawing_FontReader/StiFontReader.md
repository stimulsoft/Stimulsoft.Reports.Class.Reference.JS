---
title: "StiFontReader Class"
---

## StiFontReader Class

**Namespace:** `Stimulsoft.Base.Drawing.FontReader`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(Uint8Array data) |  |

**constructor**(**data**: Uint8Array)

**Parameters**

- **data** (Uint8Array)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getCmapDictionary** | number[] |  |
| **readCmapTable** | [t_Cmap](t_Cmap.md) |  |
| **readFont** | [TtfInfo](TtfInfo.md) |  |
| **scanFontFile** *(+1 overloads)* | [TtfInfo](TtfInfo.md) |  |
| **scanFontFile2** *(+1 overloads)* | [TtfInfo](TtfInfo.md)[] |  |

---

### Method Details

#### getCmapDictionary

**getCmapDictionary**(**font**: [TtfInfo](TtfInfo.md)): number[]

**Parameters**

- **font** ([TtfInfo](TtfInfo.md))  

**Returns** number[]


---

#### readCmapTable

**readCmapTable**(): [t_Cmap](t_Cmap.md)

**Returns** [t_Cmap](t_Cmap.md)


---

#### readFont

**readFont**(**position**: any): [TtfInfo](TtfInfo.md)

**Parameters**

- **position** (any)  

**Returns** [TtfInfo](TtfInfo.md)


---

#### scanFontFile

**scanFontFile**(**fontName**: string, **fontStyle**: [FontStyle](../Stimulsoft_System_Drawing/FontStyle.md)): [TtfInfo](TtfInfo.md)

**Parameters**

- **fontName** (string)  
- **fontStyle** ([FontStyle](../Stimulsoft_System_Drawing/FontStyle.md))  

**Returns** [TtfInfo](TtfInfo.md)

---

**scanFontFile**(**data**: Uint8Array, **fontName**: string, **fontStyle**: [FontStyle](../Stimulsoft_System_Drawing/FontStyle.md)): [TtfInfo](TtfInfo.md)

**Parameters**

- **data** (Uint8Array)  
- **fontName** (string)  
- **fontStyle** ([FontStyle](../Stimulsoft_System_Drawing/FontStyle.md))  

**Returns** [TtfInfo](TtfInfo.md)


---

#### scanFontFile2

**scanFontFile2**(): [TtfInfo](TtfInfo.md)[]

**Returns** [TtfInfo](TtfInfo.md)[]

---

**scanFontFile2**(**data**: Uint8Array): [TtfInfo](TtfInfo.md)[]

**Parameters**

- **data** (Uint8Array)  

**Returns** [TtfInfo](TtfInfo.md)[]


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **charToGlyph** | any |  |
| **data** | Uint8Array |  |
| **fontStyle** | any |  |
| **glyphId** | any |  |
| **glyphId** | any |  |
| **glyphIndex** | any |  |
| **glyphIndex** | any |  |
| **glyphIndex** | any |  |
| **ttf** | [TtfInfo](TtfInfo.md) |  |
