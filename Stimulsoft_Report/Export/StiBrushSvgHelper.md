---
title: "StiBrushSvgHelper Class"
---

## StiBrushSvgHelper Class

**Namespace:** `Stimulsoft.Report.Export`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getFillColor** `static` | string |  |
| **writeGlareBrush** `static` | string |  |
| **writeGlassBrush** `static` | string |  |
| **writeGradientBrush** `static` | string |  |
| **writeHatchBrush** `static` | string |  |
| **writeLinearGradientBrush** `static` | string |  |

---

### Method Details

#### getFillColor `static`

**getFillColor**(**color**: [Color](../../Stimulsoft_System/Drawing/Color.md)): string

**Parameters**

- **color** ([Color](../../Stimulsoft_System/Drawing/Color.md))  

**Returns** string


---

#### writeGlareBrush `static`

**writeGlareBrush**(**writer**: [XmlTextWriter](../../Stimulsoft_System/Xml/XmlTextWriter.md), **brush**: any, **rect**: RectangleD): string

**Parameters**

- **writer** ([XmlTextWriter](../../Stimulsoft_System/Xml/XmlTextWriter.md))  
- **brush** (any)  
- **rect** (RectangleD)  

**Returns** string


---

#### writeGlassBrush `static`

**writeGlassBrush**(**writer**: [XmlTextWriter](../../Stimulsoft_System/Xml/XmlTextWriter.md), **brush**: any, **rect**: RectangleD): string

**Parameters**

- **writer** ([XmlTextWriter](../../Stimulsoft_System/Xml/XmlTextWriter.md))  
- **brush** (any)  
- **rect** (RectangleD)  

**Returns** string


---

#### writeGradientBrush `static`

**writeGradientBrush**(**writer**: [XmlTextWriter](../../Stimulsoft_System/Xml/XmlTextWriter.md), **brush**: any, **rect**: RectangleD): string

**Parameters**

- **writer** ([XmlTextWriter](../../Stimulsoft_System/Xml/XmlTextWriter.md))  
- **brush** (any)  
- **rect** (RectangleD)  

**Returns** string


---

#### writeHatchBrush `static`

**writeHatchBrush**(**writer**: [XmlTextWriter](../../Stimulsoft_System/Xml/XmlTextWriter.md), **brush**: any): string

**Parameters**

- **writer** ([XmlTextWriter](../../Stimulsoft_System/Xml/XmlTextWriter.md))  
- **brush** (any)  

**Returns** string


---

#### writeLinearGradientBrush `static`

**writeLinearGradientBrush**(**writer**: [XmlTextWriter](../../Stimulsoft_System/Xml/XmlTextWriter.md), **brush**: StiLinearGradientBrush, **rect**: RectangleD): string

**Parameters**

- **writer** ([XmlTextWriter](../../Stimulsoft_System/Xml/XmlTextWriter.md))  
- **brush** (StiLinearGradientBrush)  
- **rect** (RectangleD)  

**Returns** string

