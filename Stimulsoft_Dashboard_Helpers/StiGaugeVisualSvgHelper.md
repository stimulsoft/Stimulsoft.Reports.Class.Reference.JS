---
title: "StiGaugeVisualSvgHelper Class"
---

## StiGaugeVisualSvgHelper Class

**Namespace:** `Stimulsoft.Dashboard.Helpers`

### Inheritance

Implements: [IStiGaugeVisualSvgHelper](../Stimulsoft_Report_Dashboard_Visuals/IStiGaugeVisualSvgHelper.md)  

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

**getTitleHeight**(**g**: [Graphics](../Stimulsoft_System_Drawing/Graphics.md), **iterations**: ()): Promise<number>

**Parameters**

- **g** ([Graphics](../Stimulsoft_System_Drawing/Graphics.md))  
- **iterations** (())  

**Returns** Promise<number>


---

#### getTitleMinFontSize `static`

**getTitleMinFontSize**(**g**: [Graphics](../Stimulsoft_System_Drawing/Graphics.md), **iterations**: ()): Promise<number>

**Parameters**

- **g** ([Graphics](../Stimulsoft_System_Drawing/Graphics.md))  
- **iterations** (())  

**Returns** Promise<number>


---

#### implements

**implements**(): any[]

**Returns** any[]


---

#### writeGauge

**writeGauge**(**writer**: [XmlTextWriter](../Stimulsoft_System_Xml/XmlTextWriter.md), **svgData**: [StiSvgData](../Stimulsoft_Report_Export/StiSvgData.md), **needAnimation**: boolean, **refNeedToScroll**: any, **refContentHeight**: any): void

**Parameters**

- **writer** ([XmlTextWriter](../Stimulsoft_System_Xml/XmlTextWriter.md))  
- **svgData** ([StiSvgData](../Stimulsoft_Report_Export/StiSvgData.md))  
- **needAnimation** (boolean)  
- **refNeedToScroll** (any)  
- **refContentHeight** (any)  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **font** | any |  |
| **iterations** | any |  |
| **iterations** | any |  |
| **minFont** | any |  |
| **rect** | any |  |
| **rectangles** | any |  |
| **titleHeight** | any |  |
| **titleHeightValue** | any |  |
| **titleHeightValue** | any |  |
