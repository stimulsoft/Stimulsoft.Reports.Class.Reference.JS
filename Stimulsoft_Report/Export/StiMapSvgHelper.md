---
title: "StiMapSvgHelper Class"
---

## StiMapSvgHelper Class

**Namespace:** `Stimulsoft.Report.Export`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **drawMap** `static` | void |  |
| **getFillBrush** `static` | string |  |
| **getImage** `static` | void |  |
| **render** `static` | void |  |

---

### Method Details

#### drawMap `static`

**drawMap**(**xmlsWriter**: [XmlTextWriter](../../Stimulsoft_System/Xml/XmlTextWriter.md), **map**: StiMap, **x**: number, **y**: number, **width**: number, **height**: number, **animated**: boolean, **dontConnectToData**: boolean, **wrapSize**: any): void

**Parameters**

- **xmlsWriter** ([XmlTextWriter](../../Stimulsoft_System/Xml/XmlTextWriter.md))  
- **map** (StiMap)  
- **x** (number)  
- **y** (number)  
- **width** (number)  
- **height** (number)  
- **animated** (boolean)  
- **dontConnectToData** (boolean)  
- **wrapSize** (any)  


---

#### getFillBrush `static`

**getFillBrush**(**brush**: SolidBrush): string

**Parameters**

- **brush** (SolidBrush)  

**Returns** string


---

#### getImage `static`

**getImage**(**svgData**: [StiSvgData](StiSvgData.md), **scale**: any, **guid**: string): void

**Parameters**

- **svgData** ([StiSvgData](StiSvgData.md))  
- **scale** (any)  
- **guid** (string)  


---

#### render `static`

**render**(**map**: StiMap, **xmlsWriter**: [XmlTextWriter](../../Stimulsoft_System/Xml/XmlTextWriter.md), **animated**: boolean, **sScale**: number, **dontConnectToData**: boolean): void

**Parameters**

- **map** (StiMap)  
- **xmlsWriter** ([XmlTextWriter](../../Stimulsoft_System/Xml/XmlTextWriter.md))  
- **animated** (boolean)  
- **sScale** (number)  
- **dontConnectToData** (boolean)  

