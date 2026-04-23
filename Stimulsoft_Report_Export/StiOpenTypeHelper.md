---
title: "StiOpenTypeHelper Class"
---

## StiOpenTypeHelper Class

**Namespace:** `Stimulsoft.Report.Export`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **copyUint8Array** `static` | void |  |
| **getCharToGlyphTable** `static` | number[] |  |
| **reduceFontSize** `static` | [Stimulsoft.System.IO.MemoryStream](../Stimulsoft_System/IO/MemoryStream.md) |  |

---

### Method Details

#### copyUint8Array `static`

**copyUint8Array**(**source**: Uint8Array | number[], **from**: number, **destination**: Uint8Array, **to**: number, **count**: number): void

**Parameters**

- **source** (Uint8Array | number[])  
- **from** (number)  
- **destination** (Uint8Array)  
- **to** (number)  
- **count** (number)  


---

#### getCharToGlyphTable `static`

**getCharToGlyphTable**(**buff**: Uint8Array, **fontName**: string, **fntStyle**: [FontStyle](../Stimulsoft_System/Drawing/FontStyle.md)): number[]

**Parameters**

- **buff** (Uint8Array)  
- **fontName** (string)  
- **fntStyle** ([FontStyle](../Stimulsoft_System/Drawing/FontStyle.md))  

**Returns** number[]


---

#### reduceFontSize `static`

**reduceFontSize**(**buff**: Uint8Array, **fontName**: string, **remakeGlyphTable**: boolean, **glyphList**: number[], **glyphMap**: number[], **fntStyle**: [FontStyle](../Stimulsoft_System/Drawing/FontStyle.md)): [Stimulsoft.System.IO.MemoryStream](../Stimulsoft_System/IO/MemoryStream.md)

**Parameters**

- **buff** (Uint8Array)  
- **fontName** (string)  
- **remakeGlyphTable** (boolean)  
- **glyphList** (number[])  
- **glyphMap** (number[])  
- **fntStyle** ([FontStyle](../Stimulsoft_System/Drawing/FontStyle.md))  

**Returns** [Stimulsoft.System.IO.MemoryStream](../Stimulsoft_System/IO/MemoryStream.md)

