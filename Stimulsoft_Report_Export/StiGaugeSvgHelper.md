---
title: "StiGaugeSvgHelper Class"
---

## StiGaugeSvgHelper Class

**Namespace:** `Stimulsoft.Report.Export`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getArcPath** `static` | void |  |
| **getImage** `static` | [Image](../Stimulsoft_System_Drawing/Image.md) |  |
| **writeFillBrush** `static` | string |  |
| **writeGauge** `static` | void |  |
| **writeText** `static` | void |  |

---

### Method Details

#### getArcPath `static`

**getArcPath**(**rect**: [Rectangle](../Stimulsoft_System_Drawing/Rectangle.md), **path_**: string, **startAngle**: number, **sweepAngle**: number, **isSetStartPoint**: boolean): void

**Parameters**

- **rect** ([Rectangle](../Stimulsoft_System_Drawing/Rectangle.md))  
- **path_** (string)  
- **startAngle** (number)  
- **sweepAngle** (number)  
- **isSetStartPoint** (boolean)  


---

#### getImage `static`

**getImage**(**svgData**: [StiSvgData](StiSvgData.md)): [Image](../Stimulsoft_System_Drawing/Image.md)

**Parameters**

- **svgData** ([StiSvgData](StiSvgData.md))  

**Returns** [Image](../Stimulsoft_System_Drawing/Image.md)


---

#### writeFillBrush `static`

**writeFillBrush**(**writer**: [XmlTextWriter](../Stimulsoft_System_Xml/XmlTextWriter.md), **brush**: Color \| StiBrush, **rect**: [Rectangle](../Stimulsoft_System_Drawing/Rectangle.md)): string

**Parameters**

- **writer** ([XmlTextWriter](../Stimulsoft_System_Xml/XmlTextWriter.md))  
- **brush** (Color \| StiBrush)  
- **rect** ([Rectangle](../Stimulsoft_System_Drawing/Rectangle.md))  

**Returns** string


---

#### writeGauge `static`

**writeGauge**(**writer**: [XmlTextWriter](../Stimulsoft_System_Xml/XmlTextWriter.md), **svgData**: [StiSvgData](StiSvgData.md), **zoom**: any, **needAnimation**: any, **isSampleForStyles**: any, **isExport**: any, **interaction**: [StiInteractionDataGeom](../Stimulsoft_Base_Context/StiInteractionDataGeom.md), **brushOver**: [StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md)): void

**Parameters**

- **writer** ([XmlTextWriter](../Stimulsoft_System_Xml/XmlTextWriter.md))  
- **svgData** ([StiSvgData](StiSvgData.md))  
- **zoom** (any)  
- **needAnimation** (any)  
- **isSampleForStyles** (any)  
- **isExport** (any)  
- **interaction** ([StiInteractionDataGeom](../Stimulsoft_Base_Context/StiInteractionDataGeom.md))  
- **brushOver** ([StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md))  


---

#### writeText `static`

**writeText**(**writer**: [XmlTextWriter](../Stimulsoft_System_Xml/XmlTextWriter.md), **text**: string, **font**: [Font](../Stimulsoft_Base_Dashboard/Font.md), **foreground**: [StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md), **point**: [Point](../Stimulsoft_System_Drawing/Point.md), **size**: number): void

**Parameters**

- **writer** ([XmlTextWriter](../Stimulsoft_System_Xml/XmlTextWriter.md))  
- **text** (string)  
- **font** ([Font](../Stimulsoft_Base_Dashboard/Font.md))  
- **foreground** ([StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md))  
- **point** ([Point](../Stimulsoft_System_Drawing/Point.md))  
- **size** (number)  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **aL** | any |  |
| **aL** | any |  |
| **aL** | any |  |
| **addLine** | any |  |
| **addLine** | any |  |
| **angle** | any |  |
| **currentStartAngle** | any |  |
| **currentStartAngle** | any |  |
| **currentStartAngle** | any |  |
| **currentStartAngle** | any |  |
| **isDraw** | any |  |
| **isDraw** | any |  |
| **isDraw** | any |  |
| **isDraw** | any |  |
| **isDraw** | any |  |
| **isDraw** | any |  |
| **isDraw** | any |  |
| **isDraw** | any |  |
| **lastPoint** | any |  |
| **offset** | any |  |
| **offsetStep** | any |  |
| **point** | any |  |
| **restRadius** | any |  |
| **startAngle** | any |  |
| **startAngle** | any |  |
| **startAngle** | any |  |
| **step** | any |  |
| **stepAngle** | any |  |
| **stepAngle** | any |  |
| **style** | any |  |
| **style** | any |  |
| **style** | any |  |
| **style** | any |  |
| **style** | any |  |
| **style** | any |  |
| **style** | any |  |
| **style** | any |  |
| **style** | any |  |
| **style** | any |  |
