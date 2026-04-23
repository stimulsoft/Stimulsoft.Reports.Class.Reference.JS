---
title: "StiPdfStructure Class"
---

## StiPdfStructure Class

**Namespace:** `Stimulsoft.Report.Export`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**() |  |

**constructor**()


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **addRef** | void |  |
| **createAcroFormObject** | StiPdfAcroFormObjInfo |  |
| **createAnnotObject** | StiPdfAnnotObjInfo |  |
| **createContentObject** | StiPdfContentObjInfo |  |
| **createFontObject** | StiPdfFontObjInfo |  |
| **createObject** | [StiPdfObjInfo](StiPdfObjInfo.md) |  |
| **createOutlinesObject** | StiPdfOutlinesObjInfo |  |
| **createPatternsObject** | StiPdfPatternsObjInfo |  |
| **createStructTreeRootObject** | StiPdfStructTreeRootObjInfo |  |
| **createXObject** | StiPdfXObjectObjInfo |  |

---

### Method Details

#### addRef

**addRef**(**info**: [StiPdfObjInfo](StiPdfObjInfo.md)): void

**Parameters**

- **info** ([StiPdfObjInfo](StiPdfObjInfo.md))  


---

#### createAcroFormObject

**createAcroFormObject**(**addRef**: any): StiPdfAcroFormObjInfo

**Parameters**

- **addRef** (any)  

**Returns** StiPdfAcroFormObjInfo


---

#### createAnnotObject

**createAnnotObject**(**addRef**: any, **createAP**: any, **numberAA**: any): StiPdfAnnotObjInfo

**Parameters**

- **addRef** (any)  
- **createAP** (any)  
- **numberAA** (any)  

**Returns** StiPdfAnnotObjInfo


---

#### createContentObject

**createContentObject**(**addRef**: any): StiPdfContentObjInfo

**Parameters**

- **addRef** (any)  

**Returns** StiPdfContentObjInfo


---

#### createFontObject

**createFontObject**(**addRef**: any, **useUnicodeMode**: any, **standardPdfFonts**: any, **embeddedFonts**: any, **annotFont**: any): StiPdfFontObjInfo

**Parameters**

- **addRef** (any)  
- **useUnicodeMode** (any)  
- **standardPdfFonts** (any)  
- **embeddedFonts** (any)  
- **annotFont** (any)  

**Returns** StiPdfFontObjInfo


---

#### createObject

**createObject**(**addRef**: any): [StiPdfObjInfo](StiPdfObjInfo.md)

**Parameters**

- **addRef** (any)  

**Returns** [StiPdfObjInfo](StiPdfObjInfo.md)


---

#### createOutlinesObject

**createOutlinesObject**(**addRef**: any): StiPdfOutlinesObjInfo

**Parameters**

- **addRef** (any)  

**Returns** StiPdfOutlinesObjInfo


---

#### createPatternsObject

**createPatternsObject**(**addRef**: any): StiPdfPatternsObjInfo

**Parameters**

- **addRef** (any)  

**Returns** StiPdfPatternsObjInfo


---

#### createStructTreeRootObject

**createStructTreeRootObject**(**addRef**: boolean): StiPdfStructTreeRootObjInfo

**Parameters**

- **addRef** (boolean)  

**Returns** StiPdfStructTreeRootObjInfo


---

#### createXObject

**createXObject**(**addRef**: any, **haveMask**: any): StiPdfXObjectObjInfo

**Parameters**

- **addRef** (any)  
- **haveMask** (any)  

**Returns** StiPdfXObjectObjInfo

