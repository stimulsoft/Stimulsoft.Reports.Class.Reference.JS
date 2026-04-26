---
title: "StiReportEdit Class"
---

## StiReportEdit Class

**Namespace:** `Stimulsoft.Designer`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **addComponentToPage** `static` | void |  |
| **addPage** `static` | void |  |
| **addPrimitivePoints** `static` | void |  |
| **addReportToUndoArray** `static` | void |  |
| **addSubReportPage** `static` | void |  |
| **afterFunction** *(+1 overloads)* | void |  |
| **alignToGridComponents** `static` | void |  |
| **applyStyles** `static` | void |  |
| **base64ToImage** `static` | [Stimulsoft.System.Drawing.Image](../Stimulsoft_System_Drawing/Image.md) |  |
| **base64ToImageByteArray** `static` | number[] |  |
| **borderToStr** `static` | string |  |
| **brushToStr** `static` | string |  |
| **canceledEditComponent** `static` | void |  |
| **changeArrangeComponents** `static` | void |  |
| **changeRectComponent** `static` | void |  |
| **changeRectPrimitivePoints** `static` | void |  |
| **changeSizeComponents** `static` | void |  |
| **changeUnit** `static` | void |  |
| **checkAllPrimitivePoints** `static` | void |  |
| **checkSvgContent** `static` | [StiPromise](../Stimulsoft_System/StiPromise.md)<void> |  |
| **cloneReportForPreview** `static` | [StiReport](../Stimulsoft_Report/StiReport.md) |  |
| **convertConditionsToString** `static` | string |  |
| **cornerRadiusToStr** `static` | string |  |
| **createColorScaleCondition** `static` | StiBaseCondition |  |
| **createComponent** `static` | void |  |
| **createComponentFromResource** `static` | void |  |
| **createDataBarCondition** `static` | StiBaseCondition |  |
| **createDataComponentFromDictionary** `static` | void |  |
| **createElementFromResource** `static` | void |  |
| **createHighlightCondition** `static` | StiBaseCondition |  |
| **createIconSetCondition** `static` | StiBaseCondition |  |
| **createInfographicComponent** `static` | StiComponent |  |
| **createMovingCopyComponent** `static` | void |  |
| **createShapeComponent** `static` | StiComponent |  |
| **createTextComponentFromDictionary** `static` | void |  |
| **dateTimeToStr** `static` | string |  |
| **duplicatePage** `static` | void |  |
| **fontToStr** `static` | string |  |
| **getAllChildComponents** `static` | string |  |
| **getAllComponentsPositions** `static` | void |  |
| **getAllDbsElementsSvgContentsAsync** `static` | Promise<any> |  |
| **getAllProperties** `static` | any |  |
| **getChartConditionsProperty** `static` | any[] |  |
| **getChartTrendLinesProperty** `static` | any[] |  |
| **getColorScaleConditionObject** `static` |  |  |
| **getColorsCollectionProperty** `static` | string[] |  |
| **getColumnFromColumnPath** `static` | StiDataColumn |  |
| **getComponentHeaderSize** `static` | string |  |
| **getComponentIndex** `static` | number |  |
| **getComponentMainProperties** `static` |  |  |
| **getComponentRect** `static` | string |  |
| **getConditionsCollectionFromJSObject** `static` | StiConditionsCollection |  |
| **getConditionsProperty** `static` | string |  |
| **getCrossTabFieldsProperties** `static` | any[] |  |
| **getCultures** `static` | any[] |  |
| **getDashboardInteractionProperty** `static` | any |  |
| **getDataBarConditionObject** `static` |  |  |
| **getElementLayoutProperty** `static` | void |  |
| **getEventsProperty** `static` | any |  |
| **getExpressionsProperty** `static` |  |  |
| **getFilterDataProperty** `static` | string |  |
| **getFilterModeProperty** `static` | string |  |
| **getFilterOnProperty** `static` | boolean |  |
| **getFiltersObject** `static` | any[] |  |
| **getFiltersProperty** `static` | any |  |
| **getFromClipboard** `static` | void |  |
| **getHighlightConditionObject** `static` |  |  |
| **getIconSetConditionObject** `static` |  |  |
| **getImageContentForPaint** `static` | string |  |
| **getIndicatorConditionsProperty** `static` | any[] |  |
| **getInteractionProperty** `static` | any |  |
| **getOnlineMapContentAsync** `static` | [StiPromise](../Stimulsoft_System/StiPromise.md)<string> |  |
| **getOnlyBase64Content** `static` | string |  |
| **getPageIndexes** `static` | any |  |
| **getPageMargins** `static` | string |  |
| **getPageSize** `static` | string |  |
| **getParentIndex** `static` | number |  |
| **getParentName** `static` | string |  |
| **getPivotTableConditionsProperty** `static` | any[] |  |
| **getPivotTableMeters** `static` | {} |  |
| **getPivotTableMetersSeparately** `static` |  |  |
| **getPreviewPagesAsync** `static` | void |  |
| **getPreviewSettingsProperty** `static` |  |  |
| **getProgressConditionsProperty** `static` | any[] |  |
| **getPropertyValue** `static` | any |  |
| **getPropsRebuildPage** `static` | any |  |
| **getRedoStep** `static` | [StiReport](../Stimulsoft_Report/StiReport.md) |  |
| **getReportFileName** `static` | string |  |
| **getReportProperties** `static` | any |  |
| **getRichTextProperty** `static` | string |  |
| **getShapeTypeProperty** `static` | string |  |
| **getSortDataProperty** `static` | string |  |
| **getStringFromColor** `static` | string |  |
| **getStylesProperty** `static` | any[] |  |
| **getSubReportParametersProperty** `static` | any[] |  |
| **getSvgContentAsync2** `static` | [StiPromise](../Stimulsoft_System/StiPromise.md)<string> |  |
| **getTableCells** `static` | any[] |  |
| **getTableConditionsProperty** `static` | any[] |  |
| **getTopNProperty** `static` |  |  |
| **getUndoStep** `static` | [StiReport](../Stimulsoft_Report/StiReport.md) |  |
| **getWatermarkImageContentForPaint** `static` | string |  |
| **imageToBase64** `static` | string |  |
| **imageToBase64_2** `static` | string |  |
| **isAlignedByGrid** `static` | boolean |  |
| **lowerFirstChar** `static` | string |  |
| **lowerFirstCharPropertyNames** `static` | string |  |
| **marginToStr** `static` | string |  |
| **marginsToStr** `static` | string |  |
| **metersToHashtable** `static` |  |  |
| **numberToStr** `static` | string |  |
| **onResult** *(+2 overloads)* | void |  |
| **openPage** `static` | void |  |
| **paddingToStr** `static` | string |  |
| **pageMove** `static` | void |  |
| **pageMoveToIndex** `static` | void |  |
| **readAllPropertiesFromString** `static` | void |  |
| **removeComponent** `static` | void |  |
| **removePage** `static` | void |  |
| **removePrimitivePoints** `static` | void |  |
| **renameComponent** `static` | void |  |
| **saveComponentClone** `static` | void |  |
| **setAllProperties** `static` | void |  |
| **setAnchorProperty** `static` | void |  |
| **setBarCodeTypeProperty** `static` | void |  |
| **setBusinessObjectProperty** `static` | void |  |
| **setChartConditionsProperty** `static` | void |  |
| **setChartStyleProperty** `static` | void |  |
| **setChartTrendLinesProperty** `static` | void |  |
| **setColorsCollectionProperty** `static` | void |  |
| **setComponentRect** `static` | void |  |
| **setComponentRectWithOffset** `static` | void |  |
| **setConditionProperty** `static` | void |  |
| **setConditionsProperty** `static` | void |  |
| **setContainerProperty** `static` | void |  |
| **setCrossTabStyleProperty** `static` | void |  |
| **setDashboardInteractionProperty** `static` | void |  |
| **setDataRelationProperty** `static` | void |  |
| **setDataSourceProperty** `static` | void |  |
| **setElementLayoutProperty** `static` | void |  |
| **setEventValue** `static` | void |  |
| **setExcelSheetProperty** `static` | void |  |
| **setExcelValueProperty** `static` | void |  |
| **setExpressionsProperty** `static` | void |  |
| **setFilterDataProperty1** `static` | void |  |
| **setFilterDataProperty2** `static` | void |  |
| **setFilterModeProperty** `static` | void |  |
| **setFilterOnProperty** `static` | void |  |
| **setFiltersProperty** `static` | void |  |
| **setGaugeStyleProperty** `static` | void |  |
| **setIndicatorConditionsProperty** `static` | void |  |
| **setInteractionProperty** `static` | void |  |
| **setMapStyleProperty** `static` | void |  |
| **setMarginsProperty** `static` | void |  |
| **setMasterComponentProperty** `static` | void |  |
| **setPivotTableConditionsProperty** `static` | void |  |
| **setPreviewSettingsProperty** `static` | void |  |
| **setProgressConditionsProperty** `static` | void |  |
| **setPropertyValue** `static` | void |  |
| **setReportProperties** `static` | void |  |
| **setRestrictionsProperty** `static` | void |  |
| **setRichTextProperty** `static` | void |  |
| **setShapeTypeProperty** `static` | void |  |
| **setShiftModeProperty** `static` | void |  |
| **setSortDataProperty1** `static` | void |  |
| **setSortDataProperty2** `static` | void |  |
| **setStylesProperty** `static` | void |  |
| **setSubReportPageProperty** `static` | void |  |
| **setSubReportParametersProperty** `static` | void |  |
| **setTableConditionsProperty** `static` | void |  |
| **setTextFormatProperty** `static` | void |  |
| **setTextProperty** `static` | void |  |
| **setToClipboard** `static` | void |  |
| **setTopNProperty** `static` | void |  |
| **simpleBorderToStr** `static` | string |  |
| **strBordersToConditionBorderSidesObject** `static` | [StiConditionBorderSides](../Stimulsoft_Report_Components/StiConditionBorderSides.md) |  |
| **strPermissionsToConditionPermissionsObject** `static` | [StiConditionPermissions](../Stimulsoft_Report_Components/StiConditionPermissions.md) |  |
| **strToBorder** `static` | [StiBorder](../Stimulsoft_Base_Drawing/StiBorder.md) |  |
| **strToBrush** `static` | [StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md) |  |
| **strToColor** `static` | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **strToCornerRadius** `static` | StiCornerRadius |  |
| **strToDateTime** `static` | [DateTime](../Stimulsoft_System/DateTime.md) |  |
| **strToFont** `static` | [Font](../Stimulsoft_Base_Dashboard/Font.md) |  |
| **strToIndicatorConditionsPermissions** `static` | void |  |
| **strToMargin** `static` | [StiMargin](../Stimulsoft_Report_Dashboard/StiMargin.md) |  |
| **strToMargins** `static` | [StiMargins](../Stimulsoft_Report_Components/StiMargins.md) |  |
| **strToNumber** `static` | number |  |
| **strToPadding** `static` | [StiPadding](../Stimulsoft_Report_Dashboard/StiPadding.md) |  |
| **strToProgressConditionsPermissions** `static` | void |  |
| **strToSimpleBorder** `static` | [StiSimpleBorder](../Stimulsoft_Base_Drawing/StiSimpleBorder.md) |  |
| **strToTableConditionsPermissions** `static` | void |  |
| **strToTitlePadding** `static` | [StiTitlePadding](../Stimulsoft_Report_Dashboard/StiTitlePadding.md) |  |
| **titlePaddingToStr** `static` | string |  |
| **updateReportAliases** `static` | void |  |
| **upperFirstChar** `static` | string |  |
| **writeReportToJsObject** `static` | any |  |
| **writeReportToJsObject2** `static` | any |  |

---

### Method Details

#### addComponentToPage `static`

**addComponentToPage**(**component**: StiComponent, **currentPage**: StiPage): void

**Parameters**

- **component** (StiComponent)  
- **currentPage** (StiPage)  


---

#### addPage `static`

**addPage**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any, **callbackResult**: any): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  
- **callbackResult** (any)  


---

#### addPrimitivePoints `static`

**addPrimitivePoints**(**addedComp**: StiComponent, **currentPage**: StiPage): void

**Parameters**

- **addedComp** (StiComponent)  
- **currentPage** (StiPage)  


---

#### addReportToUndoArray `static`

**addReportToUndoArray**(**designer**: [StiDesigner](StiDesigner.md), **report**: [StiReport](../Stimulsoft_Report/StiReport.md), **withResources**: any): void

**Parameters**

- **designer** ([StiDesigner](StiDesigner.md))  
- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **withResources** (any)  


---

#### addSubReportPage `static`

**addSubReportPage**(**subReport**: StiSubReport, **callbackResult**: any): void

**Parameters**

- **subReport** (StiSubReport)  
- **callbackResult** (any)  


---

#### afterFunction

**afterFunction**(): void

---

**afterFunction**(): void


---

#### alignToGridComponents `static`

**alignToGridComponents**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any, **callbackResult**: any): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  
- **callbackResult** (any)  


---

#### applyStyles `static`

**applyStyles**(**comp**: StiComponent, **stylesCollection**: StiStylesCollection): void

**Parameters**

- **comp** (StiComponent)  
- **stylesCollection** (StiStylesCollection)  


---

#### base64ToImage `static`

**base64ToImage**(**base64String**: string): [Stimulsoft.System.Drawing.Image](../Stimulsoft_System_Drawing/Image.md)

**Parameters**

- **base64String** (string)  

**Returns** [Stimulsoft.System.Drawing.Image](../Stimulsoft_System_Drawing/Image.md)


---

#### base64ToImageByteArray `static`

**base64ToImageByteArray**(**base64String**: string): number[]

**Parameters**

- **base64String** (string)  

**Returns** number[]


---

#### borderToStr `static`

**borderToStr**(**border**: [StiBorder](../Stimulsoft_Base_Drawing/StiBorder.md)): string

**Parameters**

- **border** ([StiBorder](../Stimulsoft_Base_Drawing/StiBorder.md))  

**Returns** string


---

#### brushToStr `static`

**brushToStr**(**brush**: [StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md)): string

**Parameters**

- **brush** ([StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md))  

**Returns** string


---

#### canceledEditComponent `static`

**canceledEditComponent**(**designer**: [StiDesigner](StiDesigner.md), **currentReport**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any): void

**Parameters**

- **designer** ([StiDesigner](StiDesigner.md))  
- **currentReport** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  


---

#### changeArrangeComponents `static`

**changeArrangeComponents**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any, **callbackResult**: any): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  
- **callbackResult** (any)  


---

#### changeRectComponent `static`

**changeRectComponent**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any, **callbackResult**: any): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  
- **callbackResult** (any)  


---

#### changeRectPrimitivePoints `static`

**changeRectPrimitivePoints**(**changedComp**: StiComponent, **rect**: RectangleD): void

**Parameters**

- **changedComp** (StiComponent)  
- **rect** (RectangleD)  


---

#### changeSizeComponents `static`

**changeSizeComponents**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any, **callbackResult**: any): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  
- **callbackResult** (any)  


---

#### changeUnit `static`

**changeUnit**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **unitName**: string): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **unitName** (string)  


---

#### checkAllPrimitivePoints `static`

**checkAllPrimitivePoints**(**page**: StiPage): void

**Parameters**

- **page** (StiPage)  


---

#### checkSvgContent `static`

**checkSvgContent**(**checkObject**: any): [StiPromise](../Stimulsoft_System/StiPromise.md)<void>

**Parameters**

- **checkObject** (any)  

**Returns** [StiPromise](../Stimulsoft_System/StiPromise.md)<void>


---

#### cloneReportForPreview `static`

**cloneReportForPreview**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md)): [StiReport](../Stimulsoft_Report/StiReport.md)

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  

**Returns** [StiReport](../Stimulsoft_Report/StiReport.md)


---

#### convertConditionsToString `static`

**convertConditionsToString**(**conditions**: StiConditionsCollection): string

**Parameters**

- **conditions** (StiConditionsCollection)  

**Returns** string


---

#### cornerRadiusToStr `static`

**cornerRadiusToStr**(**cornerRadius**: StiCornerRadius): string

**Parameters**

- **cornerRadius** (StiCornerRadius)  

**Returns** string


---

#### createColorScaleCondition `static`

**createColorScaleCondition**(**conditionObject**: any): StiBaseCondition

**Parameters**

- **conditionObject** (any)  

**Returns** StiBaseCondition


---

#### createComponent `static`

**createComponent**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any, **callbackResult**: any): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  
- **callbackResult** (any)  


---

#### createComponentFromResource `static`

**createComponentFromResource**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any, **callbackResult**: any): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  
- **callbackResult** (any)  


---

#### createDataBarCondition `static`

**createDataBarCondition**(**conditionObject**: any): StiBaseCondition

**Parameters**

- **conditionObject** (any)  

**Returns** StiBaseCondition


---

#### createDataComponentFromDictionary `static`

**createDataComponentFromDictionary**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any, **callbackResult**: any): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  
- **callbackResult** (any)  


---

#### createElementFromResource `static`

**createElementFromResource**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any, **callbackResult**: any): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  
- **callbackResult** (any)  


---

#### createHighlightCondition `static`

**createHighlightCondition**(**conditionObject**: any): StiBaseCondition

**Parameters**

- **conditionObject** (any)  

**Returns** StiBaseCondition


---

#### createIconSetCondition `static`

**createIconSetCondition**(**conditionObject**: any): StiBaseCondition

**Parameters**

- **conditionObject** (any)  

**Returns** StiBaseCondition


---

#### createInfographicComponent `static`

**createInfographicComponent**(**componentTypeArray**: string, **report**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any): StiComponent

**Parameters**

- **componentTypeArray** (string)  
- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  

**Returns** StiComponent


---

#### createMovingCopyComponent `static`

**createMovingCopyComponent**(**designer**: [StiDesigner](StiDesigner.md), **report**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any, **callbackResult**: any): void

**Parameters**

- **designer** ([StiDesigner](StiDesigner.md))  
- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  
- **callbackResult** (any)  


---

#### createShapeComponent `static`

**createShapeComponent**(**componentTypeArray**: string): StiComponent

**Parameters**

- **componentTypeArray** (string)  

**Returns** StiComponent


---

#### createTextComponentFromDictionary `static`

**createTextComponentFromDictionary**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any, **callbackResult**: any): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  
- **callbackResult** (any)  


---

#### dateTimeToStr `static`

**dateTimeToStr**(**value**: [DateTime](../Stimulsoft_System/DateTime.md)): string

**Parameters**

- **value** ([DateTime](../Stimulsoft_System/DateTime.md))  

**Returns** string


---

#### duplicatePage `static`

**duplicatePage**(**designer**: [StiDesigner](StiDesigner.md), **report**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any, **callbackResult**: any): void

**Parameters**

- **designer** ([StiDesigner](StiDesigner.md))  
- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  
- **callbackResult** (any)  


---

#### fontToStr `static`

**fontToStr**(**font**: [Font](../Stimulsoft_Base_Dashboard/Font.md)): string

**Parameters**

- **font** ([Font](../Stimulsoft_Base_Dashboard/Font.md))  

**Returns** string


---

#### getAllChildComponents `static`

**getAllChildComponents**(**component**: StiComponent): string

**Parameters**

- **component** (StiComponent)  

**Returns** string


---

#### getAllComponentsPositions `static`

**getAllComponentsPositions**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **callbackResult**: any): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **callbackResult** (any)  


---

#### getAllDbsElementsSvgContentsAsync `static`

**getAllDbsElementsSvgContentsAsync**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md)): Promise<any>

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  

**Returns** Promise<any>


---

#### getAllProperties `static`

**getAllProperties**(**component**: StiComponent, **requestParams**: any): any

**Parameters**

- **component** (StiComponent)  
- **requestParams** (any)  

**Returns** any


---

#### getChartConditionsProperty `static`

**getChartConditionsProperty**(**chartElement**: IStiChartElement): any[]

**Parameters**

- **chartElement** (IStiChartElement)  

**Returns** any[]


---

#### getChartTrendLinesProperty `static`

**getChartTrendLinesProperty**(**chartElement**: IStiChartElement): any[]

**Parameters**

- **chartElement** (IStiChartElement)  

**Returns** any[]


---

#### getColorScaleConditionObject `static`

**getColorScaleConditionObject**(**condition**: StiColorScaleCondition): void

**Parameters**

- **condition** (StiColorScaleCondition)  


---

#### getColorsCollectionProperty `static`

**getColorsCollectionProperty**(**colors**: [Color](../Stimulsoft_System_Drawing/Color.md)[]): string[]

**Parameters**

- **colors** ([Color](../Stimulsoft_System_Drawing/Color.md)[])  

**Returns** string[]


---

#### getColumnFromColumnPath `static`

**getColumnFromColumnPath**(**columnPath**: string, **report**: [StiReport](../Stimulsoft_Report/StiReport.md)): StiDataColumn

**Parameters**

- **columnPath** (string)  
- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  

**Returns** StiDataColumn


---

#### getComponentHeaderSize `static`

**getComponentHeaderSize**(**component**: any): string

**Parameters**

- **component** (any)  

**Returns** string


---

#### getComponentIndex `static`

**getComponentIndex**(**component**: StiComponent): number

**Parameters**

- **component** (StiComponent)  

**Returns** number


---

#### getComponentMainProperties `static`

**getComponentMainProperties**(**component**: StiComponent, **zoom**: number): void

**Parameters**

- **component** (StiComponent)  
- **zoom** (number)  


---

#### getComponentRect `static`

**getComponentRect**(**component**: StiComponent): string

**Parameters**

- **component** (StiComponent)  

**Returns** string


---

#### getConditionsCollectionFromJSObject `static`

**getConditionsCollectionFromJSObject**(**propertyValue**: string): StiConditionsCollection

**Parameters**

- **propertyValue** (string)  

**Returns** StiConditionsCollection


---

#### getConditionsProperty `static`

**getConditionsProperty**(**component**: StiComponent): string

**Parameters**

- **component** (StiComponent)  

**Returns** string


---

#### getCrossTabFieldsProperties `static`

**getCrossTabFieldsProperties**(**crossTab**: StiCrossTab): any[]

**Parameters**

- **crossTab** (StiCrossTab)  

**Returns** any[]


---

#### getCultures `static`

**getCultures**(): any[]

**Returns** any[]


---

#### getDashboardInteractionProperty `static`

**getDashboardInteractionProperty**(**dashboardInteraction**: IStiDashboardInteraction): any

**Parameters**

- **dashboardInteraction** (IStiDashboardInteraction)  

**Returns** any


---

#### getDataBarConditionObject `static`

**getDataBarConditionObject**(**condition**: StiDataBarCondition): void

**Parameters**

- **condition** (StiDataBarCondition)  


---

#### getElementLayoutProperty `static`

**getElementLayoutProperty**(**layout**: StiElementLayout): void

**Parameters**

- **layout** (StiElementLayout)  


---

#### getEventsProperty `static`

**getEventsProperty**(**element**: any): any

**Parameters**

- **element** (any)  

**Returns** any


---

#### getExpressionsProperty `static`

**getExpressionsProperty**(**component**: StiComponent): void

**Parameters**

- **component** (StiComponent)  


---

#### getFilterDataProperty `static`

**getFilterDataProperty**(**component**: StiBaseCondition \| StiComponent): string

**Parameters**

- **component** (StiBaseCondition \| StiComponent)  

**Returns** string


---

#### getFilterModeProperty `static`

**getFilterModeProperty**(**component**: StiBaseCondition \| StiComponent): string

**Parameters**

- **component** (StiBaseCondition \| StiComponent)  

**Returns** string


---

#### getFilterOnProperty `static`

**getFilterOnProperty**(**component**: StiBaseCondition \| StiComponent): boolean

**Parameters**

- **component** (StiBaseCondition \| StiComponent)  

**Returns** boolean


---

#### getFiltersObject `static`

**getFiltersObject**(**filters**: StiFiltersCollection): any[]

**Parameters**

- **filters** (StiFiltersCollection)  

**Returns** any[]


---

#### getFiltersProperty `static`

**getFiltersProperty**(**obj**: any): any

**Parameters**

- **obj** (any)  

**Returns** any


---

#### getFromClipboard `static`

**getFromClipboard**(**designer**: [StiDesigner](StiDesigner.md), **report**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any, **callbackResult**: any): void

**Parameters**

- **designer** ([StiDesigner](StiDesigner.md))  
- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  
- **callbackResult** (any)  


---

#### getHighlightConditionObject `static`

**getHighlightConditionObject**(**condition**: StiCondition): void

**Parameters**

- **condition** (StiCondition)  


---

#### getIconSetConditionObject `static`

**getIconSetConditionObject**(**condition**: StiIconSetCondition): void

**Parameters**

- **condition** (StiIconSetCondition)  


---

#### getImageContentForPaint `static`

**getImageContentForPaint**(**imageComp**: StiImage, **requestParams**: any): string

**Parameters**

- **imageComp** (StiImage)  
- **requestParams** (any)  

**Returns** string


---

#### getIndicatorConditionsProperty `static`

**getIndicatorConditionsProperty**(**indicatorElement**: IStiIndicatorElement): any[]

**Parameters**

- **indicatorElement** (IStiIndicatorElement)  

**Returns** any[]


---

#### getInteractionProperty `static`

**getInteractionProperty**(**interaction**: [StiInteraction](../Stimulsoft_Report_Components/StiInteraction.md)): any

**Parameters**

- **interaction** ([StiInteraction](../Stimulsoft_Report_Components/StiInteraction.md))  

**Returns** any


---

#### getOnlineMapContentAsync `static`

**getOnlineMapContentAsync**(**component**: StiComponent): [StiPromise](../Stimulsoft_System/StiPromise.md)<string>

**Parameters**

- **component** (StiComponent)  

**Returns** [StiPromise](../Stimulsoft_System/StiPromise.md)<string>


---

#### getOnlyBase64Content `static`

**getOnlyBase64Content**(**base64String**: string): string

**Parameters**

- **base64String** (string)  

**Returns** string


---

#### getPageIndexes `static`

**getPageIndexes**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md)): any

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  

**Returns** any


---

#### getPageMargins `static`

**getPageMargins**(**page**: StiPage): string

**Parameters**

- **page** (StiPage)  

**Returns** string


---

#### getPageSize `static`

**getPageSize**(**page**: StiPage): string

**Parameters**

- **page** (StiPage)  

**Returns** string


---

#### getParentIndex `static`

**getParentIndex**(**comp**: StiComponent): number

**Parameters**

- **comp** (StiComponent)  

**Returns** number


---

#### getParentName `static`

**getParentName**(**comp**: StiComponent): string

**Parameters**

- **comp** (StiComponent)  

**Returns** string


---

#### getPivotTableConditionsProperty `static`

**getPivotTableConditionsProperty**(**pivotTableElement**: IStiPivotTableElement): any[]

**Parameters**

- **pivotTableElement** (IStiPivotTableElement)  

**Returns** any[]


---

#### getPivotTableMeters `static`

**getPivotTableMeters**(**pivotTableElement**: IStiPivotTableElement): {}

**Parameters**

- **pivotTableElement** (IStiPivotTableElement)  

**Returns** {}


---

#### getPivotTableMetersSeparately `static`

**getPivotTableMetersSeparately**(**pivotTableElement**: IStiPivotTableElement): void

**Parameters**

- **pivotTableElement** (IStiPivotTableElement)  


---

#### getPreviewPagesAsync `static`

**getPreviewPagesAsync**(**onResult**: Function, **designer**: [StiDesigner](StiDesigner.md), **report**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any, **callbackResult**: any): void

**Parameters**

- **onResult** (Function)  
- **designer** ([StiDesigner](StiDesigner.md))  
- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  
- **callbackResult** (any)  


---

#### getPreviewSettingsProperty `static`

**getPreviewSettingsProperty**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md)): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  


---

#### getProgressConditionsProperty `static`

**getProgressConditionsProperty**(**progressElement**: IStiProgressElement): any[]

**Parameters**

- **progressElement** (IStiProgressElement)  

**Returns** any[]


---

#### getPropertyValue `static`

**getPropertyValue**(**propertyName**: string, **owner**: any): any

**Parameters**

- **propertyName** (string)  
- **owner** (any)  

**Returns** any


---

#### getPropsRebuildPage `static`

**getPropsRebuildPage**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **currentPage**: StiPage): any

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **currentPage** (StiPage)  

**Returns** any


---

#### getRedoStep `static`

**getRedoStep**(**designer**: [StiDesigner](StiDesigner.md), **currentReport**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any, **callbackResult**: any): [StiReport](../Stimulsoft_Report/StiReport.md)

**Parameters**

- **designer** ([StiDesigner](StiDesigner.md))  
- **currentReport** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  
- **callbackResult** (any)  

**Returns** [StiReport](../Stimulsoft_Report/StiReport.md)


---

#### getReportFileName `static`

**getReportFileName**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md)): string

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  

**Returns** string


---

#### getReportProperties `static`

**getReportProperties**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md)): any

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  

**Returns** any


---

#### getRichTextProperty `static`

**getRichTextProperty**(**component**: StiRichText): string

**Parameters**

- **component** (StiRichText)  

**Returns** string


---

#### getShapeTypeProperty `static`

**getShapeTypeProperty**(**component**: StiShape): string

**Parameters**

- **component** (StiShape)  

**Returns** string


---

#### getSortDataProperty `static`

**getSortDataProperty**(**object**: any): string

**Parameters**

- **object** (any)  

**Returns** string


---

#### getStringFromColor `static`

**getStringFromColor**(**color**: [Color](../Stimulsoft_System_Drawing/Color.md)): string

**Parameters**

- **color** ([Color](../Stimulsoft_System_Drawing/Color.md))  

**Returns** string


---

#### getStylesProperty `static`

**getStylesProperty**(**component**: any): any[]

**Parameters**

- **component** (any)  

**Returns** any[]


---

#### getSubReportParametersProperty `static`

**getSubReportParametersProperty**(**subReport**: StiSubReport): any[]

**Parameters**

- **subReport** (StiSubReport)  

**Returns** any[]


---

#### getSvgContentAsync2 `static`

**getSvgContentAsync2**(**component**: StiComponent, **zoom**: any): [StiPromise](../Stimulsoft_System/StiPromise.md)<string>

**Parameters**

- **component** (StiComponent)  
- **zoom** (any)  

**Returns** [StiPromise](../Stimulsoft_System/StiPromise.md)<string>


---

#### getTableCells `static`

**getTableCells**(**table**: StiTable, **zoom**: number): any[]

**Parameters**

- **table** (StiTable)  
- **zoom** (number)  

**Returns** any[]


---

#### getTableConditionsProperty `static`

**getTableConditionsProperty**(**tableElement**: IStiTableElement): any[]

**Parameters**

- **tableElement** (IStiTableElement)  

**Returns** any[]


---

#### getTopNProperty `static`

**getTopNProperty**(**topN**: StiDataTopN): void

**Parameters**

- **topN** (StiDataTopN)  


---

#### getUndoStep `static`

**getUndoStep**(**designer**: [StiDesigner](StiDesigner.md), **currentReport**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any, **callbackResult**: any): [StiReport](../Stimulsoft_Report/StiReport.md)

**Parameters**

- **designer** ([StiDesigner](StiDesigner.md))  
- **currentReport** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  
- **callbackResult** (any)  

**Returns** [StiReport](../Stimulsoft_Report/StiReport.md)


---

#### getWatermarkImageContentForPaint `static`

**getWatermarkImageContentForPaint**(**page**: StiPage, **pageProps**: any): string

**Parameters**

- **page** (StiPage)  
- **pageProps** (any)  

**Returns** string


---

#### imageToBase64 `static`

**imageToBase64**(**image**: [Stimulsoft.System.Drawing.Image](../Stimulsoft_System_Drawing/Image.md)): string

**Parameters**

- **image** ([Stimulsoft.System.Drawing.Image](../Stimulsoft_System_Drawing/Image.md))  

**Returns** string


---

#### imageToBase64_2 `static`

**imageToBase64_2**(**image**: number[]): string

**Parameters**

- **image** (number[])  

**Returns** string


---

#### isAlignedByGrid `static`

**isAlignedByGrid**(**component**: StiComponent): boolean

**Parameters**

- **component** (StiComponent)  

**Returns** boolean


---

#### lowerFirstChar `static`

**lowerFirstChar**(**text**: string): string

**Parameters**

- **text** (string)  

**Returns** string


---

#### lowerFirstCharPropertyNames `static`

**lowerFirstCharPropertyNames**(**text**: string): string

**Parameters**

- **text** (string)  

**Returns** string


---

#### marginToStr `static`

**marginToStr**(**margin**: [StiMargin](../Stimulsoft_Report_Dashboard/StiMargin.md)): string

**Parameters**

- **margin** ([StiMargin](../Stimulsoft_Report_Dashboard/StiMargin.md))  

**Returns** string


---

#### marginsToStr `static`

**marginsToStr**(**margins**: [StiMargins](../Stimulsoft_Report_Components/StiMargins.md)): string

**Parameters**

- **margins** ([StiMargins](../Stimulsoft_Report_Components/StiMargins.md))  

**Returns** string


---

#### metersToHashtable `static`

**metersToHashtable**(**meters**: IStiMeter[]): void

**Parameters**

- **meters** (IStiMeter[])  


---

#### numberToStr `static`

**numberToStr**(**value**: number): string

**Parameters**

- **value** (number)  

**Returns** string


---

#### onResult

**onResult**(**callbackResult**: any): void

**Parameters**

- **callbackResult** (any)  

---

**onResult**(**callbackResult**: any): void

**Parameters**

- **callbackResult** (any)  

---

**onResult**(**callbackResult**: any): void

**Parameters**

- **callbackResult** (any)  


---

#### openPage `static`

**openPage**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any, **callbackResult**: any): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  
- **callbackResult** (any)  


---

#### paddingToStr `static`

**paddingToStr**(**padding**: [StiPadding](../Stimulsoft_Report_Dashboard/StiPadding.md)): string

**Parameters**

- **padding** ([StiPadding](../Stimulsoft_Report_Dashboard/StiPadding.md))  

**Returns** string


---

#### pageMove `static`

**pageMove**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any, **callbackResult**: any): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  
- **callbackResult** (any)  


---

#### pageMoveToIndex `static`

**pageMoveToIndex**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any, **callbackResult**: any): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  
- **callbackResult** (any)  


---

#### readAllPropertiesFromString `static`

**readAllPropertiesFromString**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any, **callbackResult**: any): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  
- **callbackResult** (any)  


---

#### removeComponent `static`

**removeComponent**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any, **callbackResult**: any): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  
- **callbackResult** (any)  


---

#### removePage `static`

**removePage**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any, **callbackResult**: any): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  
- **callbackResult** (any)  


---

#### removePrimitivePoints `static`

**removePrimitivePoints**(**removiedComp**: StiComponent): void

**Parameters**

- **removiedComp** (StiComponent)  


---

#### renameComponent `static`

**renameComponent**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any, **callbackResult**: any): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  
- **callbackResult** (any)  


---

#### saveComponentClone `static`

**saveComponentClone**(**designer**: [StiDesigner](StiDesigner.md), **component**: StiComponent): void

**Parameters**

- **designer** ([StiDesigner](StiDesigner.md))  
- **component** (StiComponent)  


---

#### setAllProperties `static`

**setAllProperties**(**component**: StiComponent, **props**: any[]): void

**Parameters**

- **component** (StiComponent)  
- **props** (any[])  


---

#### setAnchorProperty `static`

**setAnchorProperty**(**component**: StiComponent, **propertyValue**: string): void

**Parameters**

- **component** (StiComponent)  
- **propertyValue** (string)  


---

#### setBarCodeTypeProperty `static`

**setBarCodeTypeProperty**(**component**: StiComponent, **propValue**: string): void

**Parameters**

- **component** (StiComponent)  
- **propValue** (string)  


---

#### setBusinessObjectProperty `static`

**setBusinessObjectProperty**(**component**: StiComponent, **propertyValue**: string): void

**Parameters**

- **component** (StiComponent)  
- **propertyValue** (string)  


---

#### setChartConditionsProperty `static`

**setChartConditionsProperty**(**component**: StiComponent, **propertyValue**: any): void

**Parameters**

- **component** (StiComponent)  
- **propertyValue** (any)  


---

#### setChartStyleProperty `static`

**setChartStyleProperty**(**component**: any, **propertyValue**: any): void

**Parameters**

- **component** (any)  
- **propertyValue** (any)  


---

#### setChartTrendLinesProperty `static`

**setChartTrendLinesProperty**(**component**: StiComponent, **propertyValue**: any): void

**Parameters**

- **component** (StiComponent)  
- **propertyValue** (any)  


---

#### setColorsCollectionProperty `static`

**setColorsCollectionProperty**(**object_**: any, **propertyName**: string, **propertyValue**: any[]): void

**Parameters**

- **object_** (any)  
- **propertyName** (string)  
- **propertyValue** (any[])  


---

#### setComponentRect `static`

**setComponentRect**(**component**: StiComponent, **rect**: RectangleD, **alignToGrid**: any, **correctOnlySelect**: any): void

**Parameters**

- **component** (StiComponent)  
- **rect** (RectangleD)  
- **alignToGrid** (any)  
- **correctOnlySelect** (any)  


---

#### setComponentRectWithOffset `static`

**setComponentRectWithOffset**(**comp**: StiComponent, **newCompRect**: RectangleD, **command**: string, **resizeType**: string, **compProps**: any): void

**Parameters**

- **comp** (StiComponent)  
- **newCompRect** (RectangleD)  
- **command** (string)  
- **resizeType** (string)  
- **compProps** (any)  


---

#### setConditionProperty `static`

**setConditionProperty**(**component**: StiComponent, **propertyValue**: string): void

**Parameters**

- **component** (StiComponent)  
- **propertyValue** (string)  


---

#### setConditionsProperty `static`

**setConditionsProperty**(**component**: any, **propertyValue**: string): void

**Parameters**

- **component** (any)  
- **propertyValue** (string)  


---

#### setContainerProperty `static`

**setContainerProperty**(**component**: StiComponent, **propertyValue**: string): void

**Parameters**

- **component** (StiComponent)  
- **propertyValue** (string)  


---

#### setCrossTabStyleProperty `static`

**setCrossTabStyleProperty**(**component**: any, **propertyValue**: any): void

**Parameters**

- **component** (any)  
- **propertyValue** (any)  


---

#### setDashboardInteractionProperty `static`

**setDashboardInteractionProperty**(**dashboardInteraction**: IStiDashboardInteraction, **propertyValue**: any): void

**Parameters**

- **dashboardInteraction** (IStiDashboardInteraction)  
- **propertyValue** (any)  


---

#### setDataRelationProperty `static`

**setDataRelationProperty**(**component**: any, **propertyValue**: string): void

**Parameters**

- **component** (any)  
- **propertyValue** (string)  


---

#### setDataSourceProperty `static`

**setDataSourceProperty**(**component**: any, **propertyValue**: string): void

**Parameters**

- **component** (any)  
- **propertyValue** (string)  


---

#### setElementLayoutProperty `static`

**setElementLayoutProperty**(**component**: StiComponent, **propValue**: any): void

**Parameters**

- **component** (StiComponent)  
- **propValue** (any)  


---

#### setEventValue `static`

**setEventValue**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any, **callbackResult**: any): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  
- **callbackResult** (any)  


---

#### setExcelSheetProperty `static`

**setExcelSheetProperty**(**component**: StiComponent, **propertyValue**: string): void

**Parameters**

- **component** (StiComponent)  
- **propertyValue** (string)  


---

#### setExcelValueProperty `static`

**setExcelValueProperty**(**component**: StiComponent, **propertyValue**: string): void

**Parameters**

- **component** (StiComponent)  
- **propertyValue** (string)  


---

#### setExpressionsProperty `static`

**setExpressionsProperty**(**component**: StiComponent, **propertyValue**: any): void

**Parameters**

- **component** (StiComponent)  
- **propertyValue** (any)  


---

#### setFilterDataProperty1 `static`

**setFilterDataProperty1**(**component**: StiBaseCondition \| any, **filters**: any[]): void

**Parameters**

- **component** (StiBaseCondition \| any)  
- **filters** (any[])  


---

#### setFilterDataProperty2 `static`

**setFilterDataProperty2**(**component**: StiBaseCondition \| any, **propertyValue**: string): void

**Parameters**

- **component** (StiBaseCondition \| any)  
- **propertyValue** (string)  


---

#### setFilterModeProperty `static`

**setFilterModeProperty**(**component**: StiBaseCondition \| StiComponent, **propertyValue**: string): void

**Parameters**

- **component** (StiBaseCondition \| StiComponent)  
- **propertyValue** (string)  


---

#### setFilterOnProperty `static`

**setFilterOnProperty**(**component**: StiBaseCondition \| StiComponent, **propertyValue**: string): void

**Parameters**

- **component** (StiBaseCondition \| StiComponent)  
- **propertyValue** (string)  


---

#### setFiltersProperty `static`

**setFiltersProperty**(**obj**: any, **value**: any): void

**Parameters**

- **obj** (any)  
- **value** (any)  


---

#### setGaugeStyleProperty `static`

**setGaugeStyleProperty**(**component**: any, **propertyValue**: any): void

**Parameters**

- **component** (any)  
- **propertyValue** (any)  


---

#### setIndicatorConditionsProperty `static`

**setIndicatorConditionsProperty**(**component**: StiComponent, **propertyValue**: any): void

**Parameters**

- **component** (StiComponent)  
- **propertyValue** (any)  


---

#### setInteractionProperty `static`

**setInteractionProperty**(**component**: StiComponent, **propertyValue**: any): void

**Parameters**

- **component** (StiComponent)  
- **propertyValue** (any)  


---

#### setMapStyleProperty `static`

**setMapStyleProperty**(**component**: any, **propertyValue**: any): void

**Parameters**

- **component** (any)  
- **propertyValue** (any)  


---

#### setMarginsProperty `static`

**setMarginsProperty**(**component**: StiComponent, **propertyValue**: string): void

**Parameters**

- **component** (StiComponent)  
- **propertyValue** (string)  


---

#### setMasterComponentProperty `static`

**setMasterComponentProperty**(**component**: StiComponent, **propertyValue**: string): void

**Parameters**

- **component** (StiComponent)  
- **propertyValue** (string)  


---

#### setPivotTableConditionsProperty `static`

**setPivotTableConditionsProperty**(**component**: StiComponent, **propertyValue**: any): void

**Parameters**

- **component** (StiComponent)  
- **propertyValue** (any)  


---

#### setPreviewSettingsProperty `static`

**setPreviewSettingsProperty**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **previewSettings**: any, **callbackResult**: any): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **previewSettings** (any)  
- **callbackResult** (any)  


---

#### setProgressConditionsProperty `static`

**setProgressConditionsProperty**(**component**: StiComponent, **propertyValue**: any): void

**Parameters**

- **component** (StiComponent)  
- **propertyValue** (any)  


---

#### setPropertyValue `static`

**setPropertyValue**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **propertyName**: string, **owner**: any, **value**: any, **enumType**: any): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **propertyName** (string)  
- **owner** (any)  
- **value** (any)  
- **enumType** (any)  


---

#### setReportProperties `static`

**setReportProperties**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any, **callbackResult**: any): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  
- **callbackResult** (any)  


---

#### setRestrictionsProperty `static`

**setRestrictionsProperty**(**component**: StiComponent, **propertyValue**: string): void

**Parameters**

- **component** (StiComponent)  
- **propertyValue** (string)  


---

#### setRichTextProperty `static`

**setRichTextProperty**(**component**: StiComponent, **propertyValue**: string): void

**Parameters**

- **component** (StiComponent)  
- **propertyValue** (string)  


---

#### setShapeTypeProperty `static`

**setShapeTypeProperty**(**component**: StiComponent, **shapeType**: string): void

**Parameters**

- **component** (StiComponent)  
- **shapeType** (string)  


---

#### setShiftModeProperty `static`

**setShiftModeProperty**(**component**: any, **propValue**: any): void

**Parameters**

- **component** (any)  
- **propValue** (any)  


---

#### setSortDataProperty1 `static`

**setSortDataProperty1**(**object**: any, **sortArray**: any[]): void

**Parameters**

- **object** (any)  
- **sortArray** (any[])  


---

#### setSortDataProperty2 `static`

**setSortDataProperty2**(**object**: any, **propertyValue**: string): void

**Parameters**

- **object** (any)  
- **propertyValue** (string)  


---

#### setStylesProperty `static`

**setStylesProperty**(**component**: any, **propertyValue**: any): void

**Parameters**

- **component** (any)  
- **propertyValue** (any)  


---

#### setSubReportPageProperty `static`

**setSubReportPageProperty**(**component**: any, **propertyValue**: any): void

**Parameters**

- **component** (any)  
- **propertyValue** (any)  


---

#### setSubReportParametersProperty `static`

**setSubReportParametersProperty**(**component**: any, **propertyValue**: any): void

**Parameters**

- **component** (any)  
- **propertyValue** (any)  


---

#### setTableConditionsProperty `static`

**setTableConditionsProperty**(**component**: StiComponent, **propertyValue**: any): void

**Parameters**

- **component** (StiComponent)  
- **propertyValue** (any)  


---

#### setTextFormatProperty `static`

**setTextFormatProperty**(**component**: StiComponent, **propertyValue**: any, **propertyName**: string): void

**Parameters**

- **component** (StiComponent)  
- **propertyValue** (any)  
- **propertyName** (string)  


---

#### setTextProperty `static`

**setTextProperty**(**component**: StiComponent, **propertyValue**: string): void

**Parameters**

- **component** (StiComponent)  
- **propertyValue** (string)  


---

#### setToClipboard `static`

**setToClipboard**(**designer**: [StiDesigner](StiDesigner.md), **report**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any, **callbackResult**: any): void

**Parameters**

- **designer** ([StiDesigner](StiDesigner.md))  
- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  
- **callbackResult** (any)  


---

#### setTopNProperty `static`

**setTopNProperty**(**component**: any, **propertyValue**: any): void

**Parameters**

- **component** (any)  
- **propertyValue** (any)  


---

#### simpleBorderToStr `static`

**simpleBorderToStr**(**border**: [StiSimpleBorder](../Stimulsoft_Base_Drawing/StiSimpleBorder.md)): string

**Parameters**

- **border** ([StiSimpleBorder](../Stimulsoft_Base_Drawing/StiSimpleBorder.md))  

**Returns** string


---

#### strBordersToConditionBorderSidesObject `static`

**strBordersToConditionBorderSidesObject**(**borders**: string): [StiConditionBorderSides](../Stimulsoft_Report_Components/StiConditionBorderSides.md)

**Parameters**

- **borders** (string)  

**Returns** [StiConditionBorderSides](../Stimulsoft_Report_Components/StiConditionBorderSides.md)


---

#### strPermissionsToConditionPermissionsObject `static`

**strPermissionsToConditionPermissionsObject**(**strPermissions**: string): [StiConditionPermissions](../Stimulsoft_Report_Components/StiConditionPermissions.md)

**Parameters**

- **strPermissions** (string)  

**Returns** [StiConditionPermissions](../Stimulsoft_Report_Components/StiConditionPermissions.md)


---

#### strToBorder `static`

**strToBorder**(**value**: string): [StiBorder](../Stimulsoft_Base_Drawing/StiBorder.md)

**Parameters**

- **value** (string)  

**Returns** [StiBorder](../Stimulsoft_Base_Drawing/StiBorder.md)


---

#### strToBrush `static`

**strToBrush**(**value**: string): [StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md)

**Parameters**

- **value** (string)  

**Returns** [StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md)


---

#### strToColor `static`

**strToColor**(**colorStr**: string): [Color](../Stimulsoft_System_Drawing/Color.md)

**Parameters**

- **colorStr** (string)  

**Returns** [Color](../Stimulsoft_System_Drawing/Color.md)


---

#### strToCornerRadius `static`

**strToCornerRadius**(**str**: string): StiCornerRadius

**Parameters**

- **str** (string)  

**Returns** StiCornerRadius


---

#### strToDateTime `static`

**strToDateTime**(**value**: string): [DateTime](../Stimulsoft_System/DateTime.md)

**Parameters**

- **value** (string)  

**Returns** [DateTime](../Stimulsoft_System/DateTime.md)


---

#### strToFont `static`

**strToFont**(**value**: string): [Font](../Stimulsoft_Base_Dashboard/Font.md)

**Parameters**

- **value** (string)  

**Returns** [Font](../Stimulsoft_Base_Dashboard/Font.md)


---

#### strToIndicatorConditionsPermissions `static`

**strToIndicatorConditionsPermissions**(**propertyValue**: string): void

**Parameters**

- **propertyValue** (string)  


---

#### strToMargin `static`

**strToMargin**(**str**: string): [StiMargin](../Stimulsoft_Report_Dashboard/StiMargin.md)

**Parameters**

- **str** (string)  

**Returns** [StiMargin](../Stimulsoft_Report_Dashboard/StiMargin.md)


---

#### strToMargins `static`

**strToMargins**(**str**: string): [StiMargins](../Stimulsoft_Report_Components/StiMargins.md)

**Parameters**

- **str** (string)  

**Returns** [StiMargins](../Stimulsoft_Report_Components/StiMargins.md)


---

#### strToNumber `static`

**strToNumber**(**value**: string): number

**Parameters**

- **value** (string)  

**Returns** number


---

#### strToPadding `static`

**strToPadding**(**str**: string): [StiPadding](../Stimulsoft_Report_Dashboard/StiPadding.md)

**Parameters**

- **str** (string)  

**Returns** [StiPadding](../Stimulsoft_Report_Dashboard/StiPadding.md)


---

#### strToProgressConditionsPermissions `static`

**strToProgressConditionsPermissions**(**propertyValue**: string): void

**Parameters**

- **propertyValue** (string)  


---

#### strToSimpleBorder `static`

**strToSimpleBorder**(**value**: string): [StiSimpleBorder](../Stimulsoft_Base_Drawing/StiSimpleBorder.md)

**Parameters**

- **value** (string)  

**Returns** [StiSimpleBorder](../Stimulsoft_Base_Drawing/StiSimpleBorder.md)


---

#### strToTableConditionsPermissions `static`

**strToTableConditionsPermissions**(**propertyValue**: string): void

**Parameters**

- **propertyValue** (string)  


---

#### strToTitlePadding `static`

**strToTitlePadding**(**str**: string): [StiTitlePadding](../Stimulsoft_Report_Dashboard/StiTitlePadding.md)

**Parameters**

- **str** (string)  

**Returns** [StiTitlePadding](../Stimulsoft_Report_Dashboard/StiTitlePadding.md)


---

#### titlePaddingToStr `static`

**titlePaddingToStr**(**padding**: [StiTitlePadding](../Stimulsoft_Report_Dashboard/StiTitlePadding.md)): string

**Parameters**

- **padding** ([StiTitlePadding](../Stimulsoft_Report_Dashboard/StiTitlePadding.md))  

**Returns** string


---

#### updateReportAliases `static`

**updateReportAliases**(**designer**: [StiDesigner](StiDesigner.md), **report**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any, **callbackResult**: any): void

**Parameters**

- **designer** ([StiDesigner](StiDesigner.md))  
- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  
- **callbackResult** (any)  


---

#### upperFirstChar `static`

**upperFirstChar**(**text**: string): string

**Parameters**

- **text** (string)  

**Returns** string


---

#### writeReportToJsObject `static`

**writeReportToJsObject**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **zoom**: any): any

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **zoom** (any)  

**Returns** any


---

#### writeReportToJsObject2 `static`

**writeReportToJsObject2**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **attachedItems**: any, **zoom**: any): any

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **attachedItems** (any)  
- **zoom** (any)  

**Returns** any


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **allChildComponents** | any |  |
| **body** | any |  |
| **border** | any |  |
| **border** | any |  |
| **borderStr** | any |  |
| **borderStr** | any |  |
| **brushStr** | any |  |
| **brushStr** | any |  |
| **brushStr** | any |  |
| **brushStr** | any |  |
| **brushStr** | any |  |
| **brushStr** | any |  |
| **bytes** | any |  |
| **bytes** | any |  |
| **column** | any |  |
| **column** | any |  |
| **columnWidth** | any |  |
| **columnWidth** | any |  |
| **columnWidth** | any |  |
| **columnWidth** | any |  |
| **comp1XPos** | any |  |
| **comp1XPos** | any |  |
| **comp2XPos** | any |  |
| **compHeight** | any |  |
| **compHeight** | any |  |
| **compWidth** | any |  |
| **compWidth** | any |  |
| **compXPos** | any |  |
| **compXPos** | any |  |
| **crossTabHelper** | any |  |
| **currPage** | any |  |
| **currentReport** | any |  |
| **currentReport** | any |  |
| **dataSource** | any |  |
| **dataSource** | any |  |
| **event** | any |  |
| **eventNames** | any |  |
| **eventNames** | any |  |
| **eventNames** | any |  |
| **eventNames** | any |  |
| **expression** | any |  |
| **expression** | any |  |
| **fileContent** | any |  |
| **fileName** | any |  |
| **fileName** | any |  |
| **filePath** | any |  |
| **filterMode** | any |  |
| **filterOn** | any |  |
| **filters** | any |  |
| **font** | any |  |
| **fontStr** | any |  |
| **fontStyle** | any |  |
| **fontStyle** | any |  |
| **fontStyle** | any |  |
| **fontStyle** | any |  |
| **fontStyle** | any |  |
| **fontStyle** | any |  |
| **footerBand** | any |  |
| **headerBand** | any |  |
| **ignoreOffset** | any |  |
| **ignoreOffset** | any |  |
| **image** | any |  |
| **isEvenStyleDataBand** | any |  |
| **isOddStyleDataBand** | any |  |
| **mimeType** | any |  |
| **mimeType** | any |  |
| **mimeType** | any |  |
| **mimeType** | any |  |
| **mimeType** | any |  |
| **mimeType** | any |  |
| **mimeType** | any |  |
| **needToRepaintImage** | any |  |
| **newColor** | any |  |
| **newColor** | any |  |
| **newComponent** | any |  |
| **newComponent** | any |  |
| **newComponent** | any |  |
| **newComponent** | any |  |
| **newComponent** | any |  |
| **newComponent** | any |  |
| **newComponent** | any |  |
| **newComponent** | any |  |
| **newComponent** | any |  |
| **newComponent** | any |  |
| **newComponent** | any |  |
| **newComponent** | any |  |
| **newComponent** | any |  |
| **newComponent** | any |  |
| **newComponent** | any |  |
| **newName** | any |  |
| **newName** | any |  |
| **newName** | any |  |
| **newName** | any |  |
| **newPage** | any |  |
| **newPage** | any |  |
| **newReport** | any |  |
| **object_** | any |  |
| **object_** | any |  |
| **object_** | any |  |
| **owner** | any |  |
| **owner** | any |  |
| **owner** | any |  |
| **owner** | any |  |
| **page** | any |  |
| **page** | any |  |
| **page** | any |  |
| **page** | any |  |
| **page** | any |  |
| **parent** | any |  |
| **parentOwner** | any |  |
| **parentOwner** | any |  |
| **permissions** | any |  |
| **permissions** | any |  |
| **promise** | any |  |
| **promise** | any |  |
| **property** | any |  |
| **property** | any |  |
| **propertyName** | any |  |
| **propertyName** | any |  |
| **propertyName** | any |  |
| **propertyName** | any |  |
| **propertyValue** | any |  |
| **propertyValue** | any |  |
| **propertyValue** | any |  |
| **propertyValue** | any |  |
| **propertyValue** | any |  |
| **propertyValue** | any |  |
| **rect** | any |  |
| **rect** | any |  |
| **rect** | any |  |
| **rect** | any |  |
| **rect** | any |  |
| **rect** | any |  |
| **rect** | any |  |
| **rect** | any |  |
| **rect** | any |  |
| **rect** | any |  |
| **rect** | any |  |
| **rect** | any |  |
| **relations** | any |  |
| **reportForPreview** | any |  |
| **resizingTableCell** | any |  |
| **result** | any |  |
| **result** | any |  |
| **result** | any |  |
| **resultProperties** | any |  |
| **resultProperties** | any |  |
| **singleSort** | any |  |
| **str** | any |  |
| **style** | any |  |
| **stylesCollection** | any |  |
| **stylesCollection** | any |  |
| **svgContent** | any |  |
| **svgContent** | any |  |
| **svgContent** | any |  |
| **undoArray** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
