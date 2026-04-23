---
title: "StiGaugeSvgHelper Class"
---

## StiGaugeSvgHelper Class

**Namespace:** `Stimulsoft.Report.Export`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getArcPath** `static` | void |  |
| **getImage** `static` | [Image](../../Stimulsoft_System/Drawing/Image.md) |  |
| **writeFillBrush** `static` | string |  |
| **writeGauge** `static` | void |  |
| **writeText** `static` | void |  |

---

### Method Details

#### getArcPath `static`

**getArcPath**(**rect**: [Rectangle](../../Stimulsoft_System/Drawing/Rectangle.md), **path_**: string, **startAngle**: number, **sweepAngle**: number, **isSetStartPoint**: boolean): void

**Parameters**

- **rect** ([Rectangle](../../Stimulsoft_System/Drawing/Rectangle.md))  
- **path_** (string)  
- **startAngle** (number)  
- **sweepAngle** (number)  
- **isSetStartPoint** (boolean)  


---

#### getImage `static`

**getImage**(**svgData**: [StiSvgData](StiSvgData.md)): [Image](../../Stimulsoft_System/Drawing/Image.md)

**Parameters**

- **svgData** ([StiSvgData](StiSvgData.md))  

**Returns** [Image](../../Stimulsoft_System/Drawing/Image.md)


---

#### writeFillBrush `static`

**writeFillBrush**(**writer**: [XmlTextWriter](../../Stimulsoft_System/Xml/XmlTextWriter.md), **brush**: Color | StiBrush, **rect**: [Rectangle](../../Stimulsoft_System/Drawing/Rectangle.md)): string

**Parameters**

- **writer** ([XmlTextWriter](../../Stimulsoft_System/Xml/XmlTextWriter.md))  
- **brush** (Color | StiBrush)  
- **rect** ([Rectangle](../../Stimulsoft_System/Drawing/Rectangle.md))  

**Returns** string


---

#### writeGauge `static`

**writeGauge**(**writer**: [XmlTextWriter](../../Stimulsoft_System/Xml/XmlTextWriter.md), **svgData**: [StiSvgData](StiSvgData.md), **zoom**: any, **needAnimation**: any, **isSampleForStyles**: any, **isExport**: any, **interaction**: [StiInteractionDataGeom](../Stimulsoft/Base/Context/StiInteractionDataGeom.md), **brushOver**: [StiBrush](../../Stimulsoft_Base/Drawing/StiBrush.md)): void

**Parameters**

- **writer** ([XmlTextWriter](../../Stimulsoft_System/Xml/XmlTextWriter.md))  
- **svgData** ([StiSvgData](StiSvgData.md))  
- **zoom** (any)  
- **needAnimation** (any)  
- **isSampleForStyles** (any)  
- **isExport** (any)  
- **interaction** ([StiInteractionDataGeom](../Stimulsoft/Base/Context/StiInteractionDataGeom.md))  
- **brushOver** ([StiBrush](../../Stimulsoft_Base/Drawing/StiBrush.md))  


---

#### writeText `static`

**writeText**(**writer**: [XmlTextWriter](../../Stimulsoft_System/Xml/XmlTextWriter.md), **text**: string, **font**: [Font](../../Stimulsoft_Base/Dashboard/Font.md), **foreground**: [StiBrush](../../Stimulsoft_Base/Drawing/StiBrush.md), **point**: [Point](../../Stimulsoft_System/Drawing/Point.md), **size**: number): void

**Parameters**

- **writer** ([XmlTextWriter](../../Stimulsoft_System/Xml/XmlTextWriter.md))  
- **text** (string)  
- **font** ([Font](../../Stimulsoft_Base/Dashboard/Font.md))  
- **foreground** ([StiBrush](../../Stimulsoft_Base/Drawing/StiBrush.md))  
- **point** ([Point](../../Stimulsoft_System/Drawing/Point.md))  
- **size** (number)  

