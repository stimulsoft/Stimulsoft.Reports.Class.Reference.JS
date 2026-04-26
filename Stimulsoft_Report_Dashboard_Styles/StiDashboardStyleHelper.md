---
title: "StiDashboardStyleHelper Class"
---

## StiDashboardStyleHelper Class

**Namespace:** `Stimulsoft.Report.Dashboard.Styles`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **convertToReportControlStyle** `static` | StiDialogStyle |  |
| **convertToReportGaugeStyle** `static` | StiGaugeStyle |  |
| **convertToReportIndicatorStyle** `static` | StiIndicatorStyle |  |
| **convertToReportPivotTableStyle** `static` | StiCrossTabStyle |  |
| **convertToReportProgressStyle** `static` | StiProgressStyle |  |
| **convertToReportRegionMapStyle** `static` | StiMapStyle |  |
| **getBackColor** `static` | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **getBackColor2** `static` | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **getCardsStyle** `static` | StiCardsElementStyle |  |
| **getCardsStyle2** `static` | StiCardsElementStyle |  |
| **getChartStyle** `static` | IStiChartStyle |  |
| **getChartStyle2** `static` | IStiChartStyle |  |
| **getControlStyle** `static` | StiControlElementStyle |  |
| **getCopyChartStyle** `static` | StiChartStyle |  |
| **getCopyTableStyle** `static` | [StiTableStyle](../Stimulsoft_Report_Components_Table/StiTableStyle.md) |  |
| **getDashboardBackColor** `static` | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **getDataEmptyColor** `static` | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **getDataEmptyForeColor** `static` | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **getDialogSelectedBackColor** `static` | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **getDialogStyle** `static` | StiDialogStyle |  |
| **getElementFontFromStyle** `static` | [Font](../Stimulsoft_Base_Dashboard/Font.md) |  |
| **getElementFontStyle** `static` | [IStiFontStyle](../Stimulsoft_Report_Styles/IStiFontStyle.md) |  |
| **getElementTitleStyle** `static` | [IStiTitleStyle](../Stimulsoft_Report_Styles/IStiTitleStyle.md) |  |
| **getFont** `static` | [Font](../Stimulsoft_Base_Dashboard/Font.md) |  |
| **getForeColor** `static` | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **getForeColor2** `static` | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **getGaugeStyle** `static` | IStiGaugeStyle |  |
| **getGaugeStyle2** `static` | IStiGaugeStyle |  |
| **getGlyphColor** `static` | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **getGlyphColor2** `static` | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **getHotBackColor** `static` | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **getIconFontFamily** `static` | [FontFamily](../Stimulsoft_System_Drawing/FontFamily.md) |  |
| **getIndicatorStyle** `static` | StiIndicatorElementStyle |  |
| **getMapStyle** `static` | StiMapStyleFX |  |
| **getMapStyle2** `static` | StiMapStyleFX |  |
| **getMapStyleIdent** `static` | [StiMapStyleIdent](../Stimulsoft_Report_Maps/StiMapStyleIdent.md) |  |
| **getNativeForeColor** `static` | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **getPivotTableStyle** `static` | StiPivotElementStyle |  |
| **getProgressStyle** `static` | StiProgressElementStyle |  |
| **getSelectedBackColor** `static` | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **getSelectedForeColor** `static` | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **getSeparatorColor** `static` | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **getStyle** `static` | [StiElementStyleIdent](../Stimulsoft_Report_Dashboard/StiElementStyleIdent.md) |  |
| **getStyleBackColor** `static` | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **getStyleForDataViewTable** `static` | StiTableElementStyle |  |
| **getStyleForeColor** `static` | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **getStyleHotBackColor** `static` | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **getTableStyle** `static` | StiTableElementStyle |  |
| **getTableStyle2** `static` | StiTableElementStyle |  |
| **getTitleForeColor** `static` | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **isDarkStyle** `static` | boolean |  |
| **isDarkStyle2** `static` | boolean |  |
| **isDarkStyle3** `static` | boolean |  |

---

### Method Details

#### convertToReportControlStyle `static`

**convertToReportControlStyle**(**element**: IStiControlElement): StiDialogStyle

**Parameters**

- **element** (IStiControlElement)  

**Returns** StiDialogStyle


---

#### convertToReportGaugeStyle `static`

**convertToReportGaugeStyle**(**element**: IStiGaugeElement): StiGaugeStyle

**Parameters**

- **element** (IStiGaugeElement)  

**Returns** StiGaugeStyle


---

#### convertToReportIndicatorStyle `static`

**convertToReportIndicatorStyle**(**element**: IStiIndicatorElement): StiIndicatorStyle

**Parameters**

- **element** (IStiIndicatorElement)  

**Returns** StiIndicatorStyle


---

#### convertToReportPivotTableStyle `static`

**convertToReportPivotTableStyle**(**element**: IStiPivotTableElement): StiCrossTabStyle

**Parameters**

- **element** (IStiPivotTableElement)  

**Returns** StiCrossTabStyle


---

#### convertToReportProgressStyle `static`

**convertToReportProgressStyle**(**element**: IStiProgressElement): StiProgressStyle

**Parameters**

- **element** (IStiProgressElement)  

**Returns** StiProgressStyle


---

#### convertToReportRegionMapStyle `static`

**convertToReportRegionMapStyle**(**element**: IStiRegionMapElement): StiMapStyle

**Parameters**

- **element** (IStiRegionMapElement)  

**Returns** StiMapStyle


---

#### getBackColor `static`

**getBackColor**(**element**: IStiElement, **defaultColor**: [Color](../Stimulsoft_System_Drawing/Color.md), **allowOpacity**: boolean): [Color](../Stimulsoft_System_Drawing/Color.md)

**Parameters**

- **element** (IStiElement)  
- **defaultColor** ([Color](../Stimulsoft_System_Drawing/Color.md))  
- **allowOpacity** (boolean)  

**Returns** [Color](../Stimulsoft_System_Drawing/Color.md)


---

#### getBackColor2 `static`

**getBackColor2**(**style**: [StiElementStyleIdent](../Stimulsoft_Report_Dashboard/StiElementStyleIdent.md)): [Color](../Stimulsoft_System_Drawing/Color.md)

**Parameters**

- **style** ([StiElementStyleIdent](../Stimulsoft_Report_Dashboard/StiElementStyleIdent.md))  

**Returns** [Color](../Stimulsoft_System_Drawing/Color.md)


---

#### getCardsStyle `static`

**getCardsStyle**(**element**: IStiCardsElement): StiCardsElementStyle

**Parameters**

- **element** (IStiCardsElement)  

**Returns** StiCardsElementStyle


---

#### getCardsStyle2 `static`

**getCardsStyle2**(**style**: [StiElementStyleIdent](../Stimulsoft_Report_Dashboard/StiElementStyleIdent.md)): StiCardsElementStyle

**Parameters**

- **style** ([StiElementStyleIdent](../Stimulsoft_Report_Dashboard/StiElementStyleIdent.md))  

**Returns** StiCardsElementStyle


---

#### getChartStyle `static`

**getChartStyle**(**element**: IStiChartElement): IStiChartStyle

**Parameters**

- **element** (IStiChartElement)  

**Returns** IStiChartStyle


---

#### getChartStyle2 `static`

**getChartStyle2**(**style**: [StiElementStyleIdent](../Stimulsoft_Report_Dashboard/StiElementStyleIdent.md)): IStiChartStyle

**Parameters**

- **style** ([StiElementStyleIdent](../Stimulsoft_Report_Dashboard/StiElementStyleIdent.md))  

**Returns** IStiChartStyle


---

#### getControlStyle `static`

**getControlStyle**(**element**: IStiElement): StiControlElementStyle

**Parameters**

- **element** (IStiElement)  

**Returns** StiControlElementStyle


---

#### getCopyChartStyle `static`

**getCopyChartStyle**(**chartStyle**: IStiChartStyle, **element**: IStiChartElement): StiChartStyle

**Parameters**

- **chartStyle** (IStiChartStyle)  
- **element** (IStiChartElement)  

**Returns** StiChartStyle


---

#### getCopyTableStyle `static`

**getCopyTableStyle**(**tableStyle**: StiTableElementStyle): [StiTableStyle](../Stimulsoft_Report_Components_Table/StiTableStyle.md)

**Parameters**

- **tableStyle** (StiTableElementStyle)  

**Returns** [StiTableStyle](../Stimulsoft_Report_Components_Table/StiTableStyle.md)


---

#### getDashboardBackColor `static`

**getDashboardBackColor**(**dashboard**: IStiDashboard, **isViewer**: boolean): [Color](../Stimulsoft_System_Drawing/Color.md)

**Parameters**

- **dashboard** (IStiDashboard)  
- **isViewer** (boolean)  

**Returns** [Color](../Stimulsoft_System_Drawing/Color.md)


---

#### getDataEmptyColor `static`

**getDataEmptyColor**(**element**: IStiElement): [Color](../Stimulsoft_System_Drawing/Color.md)

**Parameters**

- **element** (IStiElement)  

**Returns** [Color](../Stimulsoft_System_Drawing/Color.md)


---

#### getDataEmptyForeColor `static`

**getDataEmptyForeColor**(**element**: IStiElement): [Color](../Stimulsoft_System_Drawing/Color.md)

**Parameters**

- **element** (IStiElement)  

**Returns** [Color](../Stimulsoft_System_Drawing/Color.md)


---

#### getDialogSelectedBackColor `static`

**getDialogSelectedBackColor**(**element**: any): [Color](../Stimulsoft_System_Drawing/Color.md)

**Parameters**

- **element** (any)  

**Returns** [Color](../Stimulsoft_System_Drawing/Color.md)


---

#### getDialogStyle `static`

**getDialogStyle**(**element**: any): StiDialogStyle

**Parameters**

- **element** (any)  

**Returns** StiDialogStyle


---

#### getElementFontFromStyle `static`

**getElementFontFromStyle**(**element**: any, **defaultFont**: [Font](../Stimulsoft_Base_Dashboard/Font.md)): [Font](../Stimulsoft_Base_Dashboard/Font.md)

**Parameters**

- **element** (any)  
- **defaultFont** ([Font](../Stimulsoft_Base_Dashboard/Font.md))  

**Returns** [Font](../Stimulsoft_Base_Dashboard/Font.md)


---

#### getElementFontStyle `static`

**getElementFontStyle**(**element**: any): [IStiFontStyle](../Stimulsoft_Report_Styles/IStiFontStyle.md)

**Parameters**

- **element** (any)  

**Returns** [IStiFontStyle](../Stimulsoft_Report_Styles/IStiFontStyle.md)


---

#### getElementTitleStyle `static`

**getElementTitleStyle**(**element**: IStiElement): [IStiTitleStyle](../Stimulsoft_Report_Styles/IStiTitleStyle.md)

**Parameters**

- **element** (IStiElement)  

**Returns** [IStiTitleStyle](../Stimulsoft_Report_Styles/IStiTitleStyle.md)


---

#### getFont `static`

**getFont**(**element**: any): [Font](../Stimulsoft_Base_Dashboard/Font.md)

**Parameters**

- **element** (any)  

**Returns** [Font](../Stimulsoft_Base_Dashboard/Font.md)


---

#### getForeColor `static`

**getForeColor**(**element**: IStiElement, **defaultColor**: [Color](../Stimulsoft_System_Drawing/Color.md)): [Color](../Stimulsoft_System_Drawing/Color.md)

**Parameters**

- **element** (IStiElement)  
- **defaultColor** ([Color](../Stimulsoft_System_Drawing/Color.md))  

**Returns** [Color](../Stimulsoft_System_Drawing/Color.md)


---

#### getForeColor2 `static`

**getForeColor2**(**ident**: [StiElementStyleIdent](../Stimulsoft_Report_Dashboard/StiElementStyleIdent.md)): [Color](../Stimulsoft_System_Drawing/Color.md)

**Parameters**

- **ident** ([StiElementStyleIdent](../Stimulsoft_Report_Dashboard/StiElementStyleIdent.md))  

**Returns** [Color](../Stimulsoft_System_Drawing/Color.md)


---

#### getGaugeStyle `static`

**getGaugeStyle**(**element**: IStiGaugeElement): IStiGaugeStyle

**Parameters**

- **element** (IStiGaugeElement)  

**Returns** IStiGaugeStyle


---

#### getGaugeStyle2 `static`

**getGaugeStyle2**(**style**: [StiElementStyleIdent](../Stimulsoft_Report_Dashboard/StiElementStyleIdent.md)): IStiGaugeStyle

**Parameters**

- **style** ([StiElementStyleIdent](../Stimulsoft_Report_Dashboard/StiElementStyleIdent.md))  

**Returns** IStiGaugeStyle


---

#### getGlyphColor `static`

**getGlyphColor**(**element**: IStiIndicatorElement): [Color](../Stimulsoft_System_Drawing/Color.md)

**Parameters**

- **element** (IStiIndicatorElement)  

**Returns** [Color](../Stimulsoft_System_Drawing/Color.md)


---

#### getGlyphColor2 `static`

**getGlyphColor2**(**element**: IStiControlElement): [Color](../Stimulsoft_System_Drawing/Color.md)

**Parameters**

- **element** (IStiControlElement)  

**Returns** [Color](../Stimulsoft_System_Drawing/Color.md)


---

#### getHotBackColor `static`

**getHotBackColor**(**element**: IStiElement): [Color](../Stimulsoft_System_Drawing/Color.md)

**Parameters**

- **element** (IStiElement)  

**Returns** [Color](../Stimulsoft_System_Drawing/Color.md)


---

#### getIconFontFamily `static`

**getIconFontFamily**(): [FontFamily](../Stimulsoft_System_Drawing/FontFamily.md)

**Returns** [FontFamily](../Stimulsoft_System_Drawing/FontFamily.md)


---

#### getIndicatorStyle `static`

**getIndicatorStyle**(**element**: IStiIndicatorElement): StiIndicatorElementStyle

**Parameters**

- **element** (IStiIndicatorElement)  

**Returns** StiIndicatorElementStyle


---

#### getMapStyle `static`

**getMapStyle**(**element**: IStiRegionMapElement): StiMapStyleFX

**Parameters**

- **element** (IStiRegionMapElement)  

**Returns** StiMapStyleFX


---

#### getMapStyle2 `static`

**getMapStyle2**(**style**: [StiElementStyleIdent](../Stimulsoft_Report_Dashboard/StiElementStyleIdent.md)): StiMapStyleFX

**Parameters**

- **style** ([StiElementStyleIdent](../Stimulsoft_Report_Dashboard/StiElementStyleIdent.md))  

**Returns** StiMapStyleFX


---

#### getMapStyleIdent `static`

**getMapStyleIdent**(**element**: IStiRegionMapElement): [StiMapStyleIdent](../Stimulsoft_Report_Maps/StiMapStyleIdent.md)

**Parameters**

- **element** (IStiRegionMapElement)  

**Returns** [StiMapStyleIdent](../Stimulsoft_Report_Maps/StiMapStyleIdent.md)


---

#### getNativeForeColor `static`

**getNativeForeColor**(**element**: IStiElement): [Color](../Stimulsoft_System_Drawing/Color.md)

**Parameters**

- **element** (IStiElement)  

**Returns** [Color](../Stimulsoft_System_Drawing/Color.md)


---

#### getPivotTableStyle `static`

**getPivotTableStyle**(**element**: IStiPivotTableElement): StiPivotElementStyle

**Parameters**

- **element** (IStiPivotTableElement)  

**Returns** StiPivotElementStyle


---

#### getProgressStyle `static`

**getProgressStyle**(**element**: IStiProgressElement): StiProgressElementStyle

**Parameters**

- **element** (IStiProgressElement)  

**Returns** StiProgressElementStyle


---

#### getSelectedBackColor `static`

**getSelectedBackColor**(**element**: IStiControlElement): [Color](../Stimulsoft_System_Drawing/Color.md)

**Parameters**

- **element** (IStiControlElement)  

**Returns** [Color](../Stimulsoft_System_Drawing/Color.md)


---

#### getSelectedForeColor `static`

**getSelectedForeColor**(**element**: IStiControlElement): [Color](../Stimulsoft_System_Drawing/Color.md)

**Parameters**

- **element** (IStiControlElement)  

**Returns** [Color](../Stimulsoft_System_Drawing/Color.md)


---

#### getSeparatorColor `static`

**getSeparatorColor**(**element**: IStiControlElement): [Color](../Stimulsoft_System_Drawing/Color.md)

**Parameters**

- **element** (IStiControlElement)  

**Returns** [Color](../Stimulsoft_System_Drawing/Color.md)


---

#### getStyle `static`

**getStyle**(**element**: IStiElement): [StiElementStyleIdent](../Stimulsoft_Report_Dashboard/StiElementStyleIdent.md)

**Parameters**

- **element** (IStiElement)  

**Returns** [StiElementStyleIdent](../Stimulsoft_Report_Dashboard/StiElementStyleIdent.md)


---

#### getStyleBackColor `static`

**getStyleBackColor**(**element**: IStiElement): [Color](../Stimulsoft_System_Drawing/Color.md)

**Parameters**

- **element** (IStiElement)  

**Returns** [Color](../Stimulsoft_System_Drawing/Color.md)


---

#### getStyleForDataViewTable `static`

**getStyleForDataViewTable**(**element**: IStiElement): StiTableElementStyle

**Parameters**

- **element** (IStiElement)  

**Returns** StiTableElementStyle


---

#### getStyleForeColor `static`

**getStyleForeColor**(**element**: IStiElement): [Color](../Stimulsoft_System_Drawing/Color.md)

**Parameters**

- **element** (IStiElement)  

**Returns** [Color](../Stimulsoft_System_Drawing/Color.md)


---

#### getStyleHotBackColor `static`

**getStyleHotBackColor**(**element**: IStiElement): [Color](../Stimulsoft_System_Drawing/Color.md)

**Parameters**

- **element** (IStiElement)  

**Returns** [Color](../Stimulsoft_System_Drawing/Color.md)


---

#### getTableStyle `static`

**getTableStyle**(**element**: IStiTableElement): StiTableElementStyle

**Parameters**

- **element** (IStiTableElement)  

**Returns** StiTableElementStyle


---

#### getTableStyle2 `static`

**getTableStyle2**(**style**: [StiElementStyleIdent](../Stimulsoft_Report_Dashboard/StiElementStyleIdent.md)): StiTableElementStyle

**Parameters**

- **style** ([StiElementStyleIdent](../Stimulsoft_Report_Dashboard/StiElementStyleIdent.md))  

**Returns** StiTableElementStyle


---

#### getTitleForeColor `static`

**getTitleForeColor**(**element**: IStiElement): [Color](../Stimulsoft_System_Drawing/Color.md)

**Parameters**

- **element** (IStiElement)  

**Returns** [Color](../Stimulsoft_System_Drawing/Color.md)


---

#### isDarkStyle `static`

**isDarkStyle**(**dashboard**: IStiDashboard): boolean

**Parameters**

- **dashboard** (IStiDashboard)  

**Returns** boolean


---

#### isDarkStyle2 `static`

**isDarkStyle2**(**ident**: [StiElementStyleIdent](../Stimulsoft_Report_Dashboard/StiElementStyleIdent.md)): boolean

**Parameters**

- **ident** ([StiElementStyleIdent](../Stimulsoft_Report_Dashboard/StiElementStyleIdent.md))  

**Returns** boolean


---

#### isDarkStyle3 `static`

**isDarkStyle3**(**element**: IStiElement): boolean

**Parameters**

- **element** (IStiElement)  

**Returns** boolean


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **accentColor** | any |  |
| **brushToGetAccentFrom** | any |  |
| **brushToGetAccentFrom** | any |  |
| **brushToGetAccentFrom** | any |  |
| **defaultFont** | any |  |
| **gaugeStyle** | any |  |
| **gaugeStyle** | any |  |
| **gaugeStyle** | any |  |
| **ident** | any |  |
| **mapStyle** | any |  |
| **mapStyle** | any |  |
| **mapStyle** | any |  |
| **tableStyle** | any |  |
| **tableStyle** | any |  |
| **tableStyle** | any |  |
| **tableStyle** | any |  |
| **tableStyle** | any |  |
| **tableStyle** | any |  |
| **tableStyle** | any |  |
| **tableStyle** | any |  |
| **tableStyle** | any |  |
| **tableStyle** | any |  |
| **tableStyle** | any |  |
| **tableStyle** | any |  |
| **tableStyle** | any |  |
| **tableStyle** | any |  |
| **tableStyle** | any |  |
| **tableStyle** | any |  |
