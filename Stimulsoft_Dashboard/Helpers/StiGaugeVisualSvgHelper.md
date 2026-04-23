---
title: "StiGaugeVisualSvgHelper Class"
---

## StiGaugeVisualSvgHelper Class

**Namespace:** `Stimulsoft.Dashboard.Helpers`

### Inheritance

Implements: [IStiGaugeVisualSvgHelper](../../Stimulsoft_Report/Dashboard/Visuals/IStiGaugeVisualSvgHelper.md)  

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getEmptyDataGauge** | StiGauge |  |
| **getTitleHeight** `static` | Promise<number> |  |
| **getTitleMinFontSize** `static` | Promise<number> |  |
| **implements** | any[] |  |
| **writeGauge** | void |  |

---

### Method Details

#### getEmptyDataGauge

**getEmptyDataGauge**(**gaugeElement**: StiGaugeElement): StiGauge

**Parameters**

- **gaugeElement** (StiGaugeElement)  

**Returns** StiGauge


---

#### getTitleHeight `static`

**getTitleHeight**(**g**: [Graphics](../../Stimulsoft_System/Drawing/Graphics.md), **iterations**: ()): Promise<number>

**Parameters**

- **g** ([Graphics](../../Stimulsoft_System/Drawing/Graphics.md))  
- **iterations** (())  

**Returns** Promise<number>


---

#### getTitleMinFontSize `static`

**getTitleMinFontSize**(**g**: [Graphics](../../Stimulsoft_System/Drawing/Graphics.md), **iterations**: ()): Promise<number>

**Parameters**

- **g** ([Graphics](../../Stimulsoft_System/Drawing/Graphics.md))  
- **iterations** (())  

**Returns** Promise<number>


---

#### implements

**implements**(): any[]

**Returns** any[]


---

#### writeGauge

**writeGauge**(**writer**: [XmlTextWriter](../../Stimulsoft_System/Xml/XmlTextWriter.md), **svgData**: [StiSvgData](../../Stimulsoft_Report/Export/StiSvgData.md), **needAnimation**: boolean, **refNeedToScroll**: any, **refContentHeight**: any): void

**Parameters**

- **writer** ([XmlTextWriter](../../Stimulsoft_System/Xml/XmlTextWriter.md))  
- **svgData** ([StiSvgData](../../Stimulsoft_Report/Export/StiSvgData.md))  
- **needAnimation** (boolean)  
- **refNeedToScroll** (any)  
- **refContentHeight** (any)  

