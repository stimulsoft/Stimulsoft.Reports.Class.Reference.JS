---
title: "StiReport Class"
---

## StiReport Class

**Namespace:** `Stimulsoft.Report`

### Inheritance

Implements: [IStiUnitConvert](../Stimulsoft_Report_Components/IStiUnitConvert.md), IStiReport, IStiApp, IStiAppCell, [IStiGetFonts](../Stimulsoft_Base/IStiGetFonts.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**() |  |

**constructor**()


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **aggregateFunctions** | [StiAggregateFunctionService](../Stimulsoft_Report_Dictionary/StiAggregateFunctionService.md)[] |  |
| **allowEvalScript** | boolean |  |
| **bookmark** | [StiBookmark](../Stimulsoft_Report_Components/StiBookmark.md) |  |
| **businessObjectsStore** | [StiBusinessObjectData](../Stimulsoft_Report_Dictionary/StiBusinessObjectData.md)[] |  |
| **calculationMode** | [StiCalculationMode](StiCalculationMode.md) |  |
| **cells** | [StiCells](StiCells.md) |  |
| **collate** | number |  |
| **containsDashboard** | boolean | Gets or sets value, which indicates that the report contains dashboard pages. |
| **containsOnlyDashboard** | boolean | Gets or sets value, which indicates that the report contains only dashboard pages. |
| **culture** | string |  |
| **dataBandsUsedInPageTotals** | string[] |  |
| **dataSources** | StiDataSourcesCollection |  |
| **dataStore** | StiDataCollection |  |
| **date** | [DateTime](../Stimulsoft_System/DateTime.md) |  |
| **dictionary** | Stimulsoft.Report.Dictionary.StiDictionary |  |
| **info** | [Stimulsoft.Report.Design.StiDesignerInfo](../Stimulsoft_Report_Design/StiDesignerInfo.md) |  |
| **isDesigning** | boolean |  |
| **isFirstPage** | boolean |  |
| **isFirstPageThrough** | boolean |  |
| **isFirstPass** | boolean |  |
| **isLastPage** | boolean |  |
| **isLastPageThrough** | boolean |  |
| **isModified** | boolean |  |
| **isPreviewDialogs** | boolean |  |
| **isPrinting** | boolean |  |
| **isSecondPass** | boolean |  |
| **lineABC** | string |  |
| **lineRoman** | string |  |
| **listOfUsedData** | string[] |  |
| **manualBookmark** | [StiBookmark](../Stimulsoft_Report_Components/StiBookmark.md) |  |
| **masterReport** | string |  |
| **numberOfPass** | [StiNumberOfPass](StiNumberOfPass.md) | Gets or sets the number of passes which the report generator makes while report rendering. |
| **pageLine** | string |  |
| **pageNofM** | string |  |
| **pageNofMThrough** | string |  |
| **pageNumber** | number |  |
| **pageNumberThrough** | number |  |
| **parameterWidth** | number |  |
| **pointer** | [StiBookmark](../Stimulsoft_Report_Components/StiBookmark.md) |  |
| **refreshTime** | number |  |
| **renderedPages** | StiPagesCollection |  |
| **reportName** | string |  |
| **reportRenderingMessages** | string[] |  |
| **reportUnit** | [StiReportUnitType](StiReportUnitType.md) |  |
| **script** | string |  |
| **scriptLanguage** | [StiReportLanguageType](StiReportLanguageType.md) |  |
| **scriptTimeout** | number |  |
| **scrollTime** | number |  |
| **stopBeforePage** | number |  |
| **time** | [DateTime](../Stimulsoft_System/DateTime.md) |  |
| **today** | [DateTime](../Stimulsoft_System/DateTime.md) |  |
| **totalPageCount** | number |  |
| **totalPageCountThrough** | number |  |
| **totals** | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md) |  |
| **unit** | [StiUnit](../Stimulsoft_Report_Units/StiUnit.md) |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **addAnchor** | void |  |
| **applyStyleCollection** | void |  |
| **applyStyles** | void |  |
| **callback** | void |  |
| **changeType** `static` | any |  |
| **checkExcelValue** | any |  |
| **clearInterval** | void |  |
| **clone** | [StiReport](StiReport.md) |  |
| **convert** | void |  |
| **createNewDashboard** `static` | [StiReport](StiReport.md) |  |
| **createNewReport** `static` | [StiReport](StiReport.md) |  |
| **dispose** | void |  |
| **exportDocument** | string | number[] | Buffer |  |
| **exportDocumentAsync** | void |  |
| **exportDocumentAsync2** | Promise<string | number[] | Buffer> |  |
| **fetchPages** | IStiReportPage[] | Returns an enumeration of the pages from this report. |
| **getAnchorPageNumber** | number |  |
| **getAnchorPageNumberThrough** | number |  |
| **getComponentByGuid** | StiComponent |  |
| **getComponentByName** | StiComponent |  |
| **getComponents** | StiComponentsCollection | Returns a list of all components, including pages in the report. |
| **getComponentsCount** | number |  |
| **getCurrentPage** | StiPage |  |
| **getDictionary** | [IStiAppDictionary](../Stimulsoft_Base/IStiAppDictionary.md) | Returns reference to the data dictionary of the report. |
| **getFonts** | [Font](../Stimulsoft_Base_Dashboard/Font.md)[] |  |
| **getKey** | string | Returns unique key to this application. |
| **getLabel** | string |  |
| **getParam** | any |  |
| **getParsedCulture** | string |  |
| **getRenderedComponents** | StiComponentsCollection |  |
| **getReportVersion** `static` | string |  |
| **getVariable** | void |  |
| **implements** | any[] |  |
| **invokeBeginProcessData** | void |  |
| **invokeBeginRender** | void |  |
| **invokeBeginRenderAsync** | void |  |
| **invokeEndProcessData** | void |  |
| **invokeEndRender** | void |  |
| **invokeExported** | void |  |
| **invokeExporting** | void |  |
| **invokeGetSubReport** | void |  |
| **invokePrepareVariablesAsync** | void |  |
| **invokePrinted** | void |  |
| **invokePrinting** | void |  |
| **invokeRefreshViewer** | void |  |
| **invokeRefreshing** | void |  |
| **invokeRendering** | void |  |
| **invokeReportCacheProcessing** | void |  |
| **invokeResetAllFilters** | void |  |
| **invokeStatusChanged** | void |  |
| **isEncryptedFile** `static` | boolean |  |
| **isPackedFile** `static` | boolean |  |
| **load** | void |  |
| **loadDocument** | void |  |
| **loadDocumentFile** | void |  |
| **loadEditableFields** | [StiReport](StiReport.md) |  |
| **loadEditableFieldsFile** | [StiReport](StiReport.md) |  |
| **loadEncryptedDocument** | void |  |
| **loadEncryptedDocumentFile** | void |  |
| **loadEncryptedReport** | void |  |
| **loadEncryptedReportFile** | void |  |
| **loadFile** | void |  |
| **loadPacked** | void |  |
| **loadPackedDocument** | void |  |
| **loadPackedDocumentFile** | void |  |
| **loadPackedFile** | void |  |
| **localizeReport** | void |  |
| **mergeDocumentAsync** | void |  |
| **onCatch** *(+1 overloads)* | void |  |
| **onExport** *(+2 overloads)* | void |  |
| **onRender** *(+1 overloads)* | void |  |
| **print** | void |  |
| **printToPdf** | void |  |
| **processAutoLocalizeReportOnRun** | void |  |
| **regBusinessObject** | void |  |
| **regBusinessObject2** | void |  |
| **regCsvData** | StiDatabase | Registers a new connection to the CSV data file. |
| **regCsvFile** | StiDatabase | Registers a new connection to the CSV data file. |
| **regData** | void |  |
| **regDbfData** | StiDatabase | Registers a new connection to the DBF data file. |
| **regDbfFile** | StiDatabase | Registers a new connection to the DBF data file. |
| **regExcelData** | StiDatabase | Registers a new connection to the EXCEL data file. |
| **regExcelFile** | StiDatabase | Registers a new connection to the EXCEL data file. |
| **regFirebirdConnection** | Promise<StiDatabase> |  |
| **regJsonData** | StiDatabase | Registers a new connection to the JSON data file. |
| **regJsonFile** | StiDatabase | Registers a new connection to the JSON data file. |
| **regMySqlConnection** | Promise<StiDatabase> |  |
| **regObjectData** | StiDatabase | Registers a new connection to the specified data. |
| **regOracleConnection** | Promise<StiDatabase> |  |
| **regPostgreSqlConnection** | Promise<StiDatabase> |  |
| **regSqlServerConnection** | Promise<StiDatabase> |  |
| **regXmlData** | StiDatabase | Registers a new connection to the XML data file. |
| **regXmlFile** | StiDatabase | Registers a new connection to the XML data file. |
| **renameStyle** | void | Renames a style with the specified name to a new name. |
| **render** | void |  |
| **renderAsync** | void |  |
| **renderAsync2** | void |  |
| **resetAggregateFunctions** | void |  |
| **resetRenderedState** | void |  |
| **resolve** *(+1 overloads)* | void |  |
| **saveDocumentFile** | void |  |
| **saveDocumentToJsonString** | string |  |
| **saveEditableFields** | string |  |
| **saveEditableFieldsFile** | [StiReport](StiReport.md) |  |
| **saveEncryptedDocumentFile** | void |  |
| **saveEncryptedDocumentToByteArray** | number[] |  |
| **saveEncryptedDocumentToString** | string |  |
| **saveEncryptedReportFile** | void |  |
| **saveEncryptedReportToByteArray** | number[] |  |
| **saveEncryptedReportToString** | string |  |
| **saveFile** | void |  |
| **savePackedDocumentFile** | void |  |
| **savePackedDocumentToByteArray** | number[] |  |
| **savePackedDocumentToString** | string |  |
| **savePackedFile** | void |  |
| **savePackedToByteArray** | number[] |  |
| **savePackedToString** | string |  |
| **saveSnapshot** | Promise<string> | Saves a report template with embedded data |
| **saveToJsonString** | string |  |
| **scriptNew** | void |  |
| **setInheritedMode** | void |  |
| **setKey** | void |  |
| **setVariable** | void |  |
| **toString** | string |  |
| **toString2** | string |  |
| **toString3** | string |  |
| **updateInheritedReport** | void |  |
| **writeToReportRenderingMessages** | void |  |

---

### Method Details

#### addAnchor

**addAnchor**(**value**: any, **component**: any): void

**Parameters**

- **value** (any)  
- **component** (any)  


---

#### applyStyleCollection

**applyStyleCollection**(**collectionName**: string): void

**Parameters**

- **collectionName** (string)  


---

#### applyStyles

**applyStyles**(): void


---

#### callback

**callback**(): void


---

#### changeType `static`

**changeType**(**value**: any, **conversionType**: [Type](../Stimulsoft_System/Type.md), **convertNulls**: any): any

**Parameters**

- **value** (any)  
- **conversionType** ([Type](../Stimulsoft_System/Type.md))  
- **convertNulls** (any)  

**Returns** any


---

#### checkExcelValue

**checkExcelValue**(**sender**: any, **value**: any): any

**Parameters**

- **sender** (any)  
- **value** (any)  

**Returns** any


---

#### clearInterval

**clearInterval**(**_timer**: any): void

**Parameters**

- **_timer** (any)  


---

#### clone

**clone**(): [StiReport](StiReport.md)

**Returns** [StiReport](StiReport.md)


---

#### convert

**convert**(**oldUnit**: [StiUnit](../Stimulsoft_Report_Units/StiUnit.md), **newUnit**: [StiUnit](../Stimulsoft_Report_Units/StiUnit.md), **isReportSnapshot**: any): void

**Parameters**

- **oldUnit** ([StiUnit](../Stimulsoft_Report_Units/StiUnit.md))  
- **newUnit** ([StiUnit](../Stimulsoft_Report_Units/StiUnit.md))  
- **isReportSnapshot** (any)  


---

#### createNewDashboard `static`

**createNewDashboard**(): [StiReport](StiReport.md)

**Returns** [StiReport](StiReport.md)


---

#### createNewReport `static`

**createNewReport**(): [StiReport](StiReport.md)

**Returns** [StiReport](StiReport.md)


---

#### dispose

**dispose**(): void


---

#### exportDocument

**exportDocument**(**exportFormat**: [StiExportFormat](StiExportFormat.md), **exportService**: [StiExportService](../Stimulsoft_Report_Export/StiExportService.md), **settings**: [StiExportSettings](../Stimulsoft_Report_Export/StiExportSettings.md), **onExport**: (result: string \| number[] \| Buffer, **error**: any)): string \| number[] \| Buffer

**Parameters**

- **exportFormat** ([StiExportFormat](StiExportFormat.md))  
- **exportService** ([StiExportService](../Stimulsoft_Report_Export/StiExportService.md))  
- **settings** ([StiExportSettings](../Stimulsoft_Report_Export/StiExportSettings.md))  
- **onExport** ((result: string \| number[] \| Buffer)  
- **error** (any))  

**Returns** string \| number[] \| Buffer


---

#### exportDocumentAsync

**exportDocumentAsync**(**onExport**: (result: string \| number[] \| Buffer, **error**: any)): void

**Parameters**

- **onExport** ((result: string \| number[] \| Buffer)  
- **error** (any))  


---

#### exportDocumentAsync2

**exportDocumentAsync2**(**exportFormat**: [StiExportFormat](StiExportFormat.md), **exportService**: [StiExportService](../Stimulsoft_Report_Export/StiExportService.md), **settings**: [StiExportSettings](../Stimulsoft_Report_Export/StiExportSettings.md)): Promise<string \| number[] \| Buffer>

**Parameters**

- **exportFormat** ([StiExportFormat](StiExportFormat.md))  
- **exportService** ([StiExportService](../Stimulsoft_Report_Export/StiExportService.md))  
- **settings** ([StiExportSettings](../Stimulsoft_Report_Export/StiExportSettings.md))  

**Returns** Promise<string \| number[] \| Buffer>


---

#### fetchPages

**fetchPages**(): IStiReportPage[]

Returns an enumeration of the pages from this report.

**Returns** IStiReportPage[] — The enumeration of the pages.


---

#### getAnchorPageNumber

**getAnchorPageNumber**(**value**: any): number

**Parameters**

- **value** (any)  

**Returns** number


---

#### getAnchorPageNumberThrough

**getAnchorPageNumberThrough**(**value**: any): number

**Parameters**

- **value** (any)  

**Returns** number


---

#### getComponentByGuid

**getComponentByGuid**(**guid**: string): StiComponent

**Parameters**

- **guid** (string)  

**Returns** StiComponent


---

#### getComponentByName

**getComponentByName**(**componentName**: string): StiComponent

**Parameters**

- **componentName** (string)  

**Returns** StiComponent


---

#### getComponents

**getComponents**(): StiComponentsCollection

Returns a list of all components, including pages in the report.

**Returns** StiComponentsCollection


---

#### getComponentsCount

**getComponentsCount**(): number

**Returns** number


---

#### getCurrentPage

**getCurrentPage**(): StiPage

**Returns** StiPage


---

#### getDictionary

**getDictionary**(): [IStiAppDictionary](../Stimulsoft_Base/IStiAppDictionary.md)

Returns reference to the data dictionary of the report.

**Returns** [IStiAppDictionary](../Stimulsoft_Base/IStiAppDictionary.md) — Data dictioanary from the report.


---

#### getFonts

**getFonts**(): [Font](../Stimulsoft_Base_Dashboard/Font.md)[]

**Returns** [Font](../Stimulsoft_Base_Dashboard/Font.md)[]


---

#### getKey

**getKey**(): string

Returns unique key to this application.

**Returns** string


---

#### getLabel

**getLabel**(**variableName**: string): string

**Parameters**

- **variableName** (string)  

**Returns** string


---

#### getParam

**getParam**(**paramName**: string): any

**Parameters**

- **paramName** (string)  

**Returns** any


---

#### getParsedCulture

**getParsedCulture**(): string

**Returns** string


---

#### getRenderedComponents

**getRenderedComponents**(): StiComponentsCollection

**Returns** StiComponentsCollection


---

#### getReportVersion `static`

**getReportVersion**(): string

**Returns** string


---

#### getVariable

**getVariable**(**name**: string, **onlyVariable**: any): void

**Parameters**

- **name** (string)  
- **onlyVariable** (any)  


---

#### implements

**implements**(): any[]

**Returns** any[]


---

#### invokeBeginProcessData

**invokeBeginProcessData**(**command**: ProcessDataCommand, **callback**: (result: any)): void

**Parameters**

- **command** (ProcessDataCommand)  
- **callback** ((result: any))  


---

#### invokeBeginRender

**invokeBeginRender**(): void


---

#### invokeBeginRenderAsync

**invokeBeginRenderAsync**(): void


---

#### invokeEndProcessData

**invokeEndProcessData**(**command**: EndProcessDataCommand): void

**Parameters**

- **command** (EndProcessDataCommand)  


---

#### invokeEndRender

**invokeEndRender**(): void


---

#### invokeExported

**invokeExported**(**exportFormat**: [StiExportFormat](StiExportFormat.md)): void

**Parameters**

- **exportFormat** ([StiExportFormat](StiExportFormat.md))  


---

#### invokeExporting

**invokeExporting**(**exportFormat**: [StiExportFormat](StiExportFormat.md)): void

**Parameters**

- **exportFormat** ([StiExportFormat](StiExportFormat.md))  


---

#### invokeGetSubReport

**invokeGetSubReport**(**e**: StiGetSubReportEventArgs): void

**Parameters**

- **e** (StiGetSubReportEventArgs)  


---

#### invokePrepareVariablesAsync

**invokePrepareVariablesAsync**(): void


---

#### invokePrinted

**invokePrinted**(**data**: string \| number[], **callback**: (result: string \| number[])): void

**Parameters**

- **data** (string \| number[])  
- **callback** ((result: string \| number[]))  


---

#### invokePrinting

**invokePrinting**(): void


---

#### invokeRefreshViewer

**invokeRefreshViewer**(): void


---

#### invokeRefreshing

**invokeRefreshing**(): void


---

#### invokeRendering

**invokeRendering**(): void


---

#### invokeReportCacheProcessing

**invokeReportCacheProcessing**(): void


---

#### invokeResetAllFilters

**invokeResetAllFilters**(): void


---

#### invokeStatusChanged

**invokeStatusChanged**(): void


---

#### isEncryptedFile `static`

**isEncryptedFile**(**bytes**: number[] \| Uint8Array): boolean

**Parameters**

- **bytes** (number[] \| Uint8Array)  

**Returns** boolean


---

#### isPackedFile `static`

**isPackedFile**(**content**: number[] \| Uint8Array): boolean

**Parameters**

- **content** (number[] \| Uint8Array)  

**Returns** boolean


---

#### load

**load**(**param**: string \| number[] \| XmlNode \| any): void

**Parameters**

- **param** (string \| number[] \| XmlNode \| any)  


---

#### loadDocument

**loadDocument**(**param**: string \| number[] \| any): void

**Parameters**

- **param** (string \| number[] \| any)  


---

#### loadDocumentFile

**loadDocumentFile**(**filePath**: string): void

**Parameters**

- **filePath** (string)  


---

#### loadEditableFields

**loadEditableFields**(**param**: string \| XmlNode): [StiReport](StiReport.md)

**Parameters**

- **param** (string \| XmlNode)  

**Returns** [StiReport](StiReport.md)


---

#### loadEditableFieldsFile

**loadEditableFieldsFile**(**path**: string): [StiReport](StiReport.md)

**Parameters**

- **path** (string)  

**Returns** [StiReport](StiReport.md)


---

#### loadEncryptedDocument

**loadEncryptedDocument**(**param**: string \| number[] \| any, **key**: string): void

**Parameters**

- **param** (string \| number[] \| any)  
- **key** (string)  


---

#### loadEncryptedDocumentFile

**loadEncryptedDocumentFile**(**filePath**: string, **key**: string): void

**Parameters**

- **filePath** (string)  
- **key** (string)  


---

#### loadEncryptedReport

**loadEncryptedReport**(**param**: string \| number[] \| any, **key**: string): void

**Parameters**

- **param** (string \| number[] \| any)  
- **key** (string)  


---

#### loadEncryptedReportFile

**loadEncryptedReportFile**(**filePath**: string, **key**: string): void

**Parameters**

- **filePath** (string)  
- **key** (string)  


---

#### loadFile

**loadFile**(**filePath**: string): void

**Parameters**

- **filePath** (string)  


---

#### loadPacked

**loadPacked**(**param**: string \| number[] \| any): void

**Parameters**

- **param** (string \| number[] \| any)  


---

#### loadPackedDocument

**loadPackedDocument**(**param**: string \| number[] \| any): void

**Parameters**

- **param** (string \| number[] \| any)  


---

#### loadPackedDocumentFile

**loadPackedDocumentFile**(**filePath**: string): void

**Parameters**

- **filePath** (string)  


---

#### loadPackedFile

**loadPackedFile**(**filePath**: string): void

**Parameters**

- **filePath** (string)  


---

#### localizeReport

**localizeReport**(**cultureName**: string): void

**Parameters**

- **cultureName** (string)  


---

#### mergeDocumentAsync

**mergeDocumentAsync**(**report**: [StiReport](StiReport.md), **needRendering**: any): void

**Parameters**

- **report** ([StiReport](StiReport.md))  
- **needRendering** (any)  


---

#### onCatch

**onCatch**(**e**: any): void

**Parameters**

- **e** (any)  

---

**onCatch**(**e**: any): void

**Parameters**

- **e** (any)  


---

#### onExport

**onExport**(): void

---

**onExport**(): void

---

**onExport**(**exception**: any): void

**Parameters**

- **exception** (any)  


---

#### onRender

**onRender**(**this**: any): void

**Parameters**

- **this** (any)  

---

**onRender**(**null**: any, **e**: any): void

**Parameters**

- **null** (any)  
- **e** (any)  


---

#### print

**print**(**pageRange**: [StiPagesRange](StiPagesRange.md), **exportMode**: any): void

**Parameters**

- **pageRange** ([StiPagesRange](StiPagesRange.md))  
- **exportMode** (any)  


---

#### printToPdf

**printToPdf**(**pageRange**: [StiPagesRange](StiPagesRange.md), **element**: HTMLElement): void

**Parameters**

- **pageRange** ([StiPagesRange](StiPagesRange.md))  
- **element** (HTMLElement)  


---

#### processAutoLocalizeReportOnRun

**processAutoLocalizeReportOnRun**(): void


---

#### regBusinessObject

**regBusinessObject**(**businessObjects**: [StiBusinessObjectData](../Stimulsoft_Report_Dictionary/StiBusinessObjectData.md)[]): void

**Parameters**

- **businessObjects** ([StiBusinessObjectData](../Stimulsoft_Report_Dictionary/StiBusinessObjectData.md)[])  


---

#### regBusinessObject2

**regBusinessObject2**(**category**: string, **name**: string, **alias**: string, **value**: any): void

**Parameters**

- **category** (string)  
- **name** (string)  
- **alias** (string)  
- **value** (any)  


---

#### regCsvData

**regCsvData**(**name**: string, **data**: number[] \| string, **synchronize**: any): StiDatabase

Registers a new connection to the CSV data file.

**Parameters**

- **name** (string)  
- **data** (number[] \| string)  
- **synchronize** (any)  

**Returns** StiDatabase — The created connection in the dictionary.


---

#### regCsvFile

**regCsvFile**(**name**: string, **fileName**: string, **synchronize**: any): StiDatabase

Registers a new connection to the CSV data file.

**Parameters**

- **name** (string)  
- **fileName** (string)  
- **synchronize** (any)  

**Returns** StiDatabase — The created connection in the dictionary.


---

#### regData

**regData**(**name**: string, **alias**: string, **data**: DataTable \| DataSet \| StiDataCollection \| string \| any, **synchronize**: any): void

**Parameters**

- **name** (string)  
- **alias** (string)  
- **data** (DataTable \| DataSet \| StiDataCollection \| string \| any)  
- **synchronize** (any)  


---

#### regDbfData

**regDbfData**(**name**: string, **data**: number[] \| string, **synchronize**: any): StiDatabase

Registers a new connection to the DBF data file.

**Parameters**

- **name** (string)  
- **data** (number[] \| string)  
- **synchronize** (any)  

**Returns** StiDatabase — The created connection in the dictionary.


---

#### regDbfFile

**regDbfFile**(**name**: string, **fileName**: string, **synchronize**: any): StiDatabase

Registers a new connection to the DBF data file.

**Parameters**

- **name** (string)  
- **fileName** (string)  
- **synchronize** (any)  

**Returns** StiDatabase — The created connection in the dictionary.


---

#### regExcelData

**regExcelData**(**name**: string, **data**: number[] \| string, **synchronize**: any): StiDatabase

Registers a new connection to the EXCEL data file.

**Parameters**

- **name** (string)  
- **data** (number[] \| string)  
- **synchronize** (any)  

**Returns** StiDatabase — The created connection in the dictionary.


---

#### regExcelFile

**regExcelFile**(**name**: string, **fileName**: string, **synchronize**: any): StiDatabase

Registers a new connection to the EXCEL data file.

**Parameters**

- **name** (string)  
- **fileName** (string)  
- **synchronize** (any)  

**Returns** StiDatabase — The created connection in the dictionary.


---

#### regFirebirdConnection

**regFirebirdConnection**(**name**: string, **connectionString**: string, **synchronize**: any): Promise<StiDatabase>

**Parameters**

- **name** (string)  
- **connectionString** (string)  
- **synchronize** (any)  

**Returns** Promise<StiDatabase>


---

#### regJsonData

**regJsonData**(**name**: string, **data**: number[] \| string, **synchronize**: any): StiDatabase

Registers a new connection to the JSON data file.

**Parameters**

- **name** (string)  
- **data** (number[] \| string)  
- **synchronize** (any)  

**Returns** StiDatabase — The created connection in the dictionary.


---

#### regJsonFile

**regJsonFile**(**name**: string, **fileName**: string, **synchronize**: any): StiDatabase

Registers a new connection to the JSON data file.

**Parameters**

- **name** (string)  
- **fileName** (string)  
- **synchronize** (any)  

**Returns** StiDatabase — The created connection in the dictionary.


---

#### regMySqlConnection

**regMySqlConnection**(**name**: string, **connectionString**: string, **synchronize**: any): Promise<StiDatabase>

**Parameters**

- **name** (string)  
- **connectionString** (string)  
- **synchronize** (any)  

**Returns** Promise<StiDatabase>


---

#### regObjectData

**regObjectData**(**name**: string, **fileType**: [StiResourceType](../Stimulsoft_Report_Dictionary/StiResourceType.md), **data**: number[] \| string, **synchronize**: any): StiDatabase

Registers a new connection to the specified data.

**Parameters**

- **name** (string)  
- **fileType** ([StiResourceType](../Stimulsoft_Report_Dictionary/StiResourceType.md))  
- **data** (number[] \| string)  
- **synchronize** (any)  

**Returns** StiDatabase — The created connection in the dictionary.


---

#### regOracleConnection

**regOracleConnection**(**name**: string, **connectionString**: string, **synchronize**: any): Promise<StiDatabase>

**Parameters**

- **name** (string)  
- **connectionString** (string)  
- **synchronize** (any)  

**Returns** Promise<StiDatabase>


---

#### regPostgreSqlConnection

**regPostgreSqlConnection**(**name**: string, **connectionString**: string, **synchronize**: any): Promise<StiDatabase>

**Parameters**

- **name** (string)  
- **connectionString** (string)  
- **synchronize** (any)  

**Returns** Promise<StiDatabase>


---

#### regSqlServerConnection

**regSqlServerConnection**(**name**: string, **connectionString**: string, **synchronize**: any): Promise<StiDatabase>

**Parameters**

- **name** (string)  
- **connectionString** (string)  
- **synchronize** (any)  

**Returns** Promise<StiDatabase>


---

#### regXmlData

**regXmlData**(**name**: string, **schema**: number[] \| string, **data**: number[] \| string, **synchronize**: any): StiDatabase

Registers a new connection to the XML data file.

**Parameters**

- **name** (string)  
- **schema** (number[] \| string)  
- **data** (number[] \| string)  
- **synchronize** (any)  

**Returns** StiDatabase — The created connection in the dictionary.


---

#### regXmlFile

**regXmlFile**(**name**: string, **fileNameSchema**: string, **fileNameData**: string, **synchronize**: any): StiDatabase

Registers a new connection to the XML data file.

**Parameters**

- **name** (string)  
- **fileNameSchema** (string)  
- **fileNameData** (string)  
- **synchronize** (any)  

**Returns** StiDatabase — The created connection in the dictionary.


---

#### renameStyle

**renameStyle**(**oldStylename**: string, **newStyleName**: string): void

Renames a style with the specified name to a new name.

**Parameters**

- **oldStylename** (string)  
- **newStyleName** (string)  


---

#### render

**render**(**showProgress**: any, **fromPage**: any, **toPage**: any): void

**Parameters**

- **showProgress** (any)  
- **fromPage** (any)  
- **toPage** (any)  


---

#### renderAsync

**renderAsync**(**onRender**: (report: StiReport, **error**: any)): void

**Parameters**

- **onRender** ((report: StiReport)  
- **error** (any))  


---

#### renderAsync2

**renderAsync2**(**fromPage**: any, **toPage**: any): void

**Parameters**

- **fromPage** (any)  
- **toPage** (any)  


---

#### resetAggregateFunctions

**resetAggregateFunctions**(): void


---

#### resetRenderedState

**resetRenderedState**(): void


---

#### resolve

**resolve**(**null**: any): void

**Parameters**

- **null** (any)  

---

**resolve**(**null**: any): void

**Parameters**

- **null** (any)  


---

#### saveDocumentFile

**saveDocumentFile**(**path**: string): void

**Parameters**

- **path** (string)  


---

#### saveDocumentToJsonString

**saveDocumentToJsonString**(): string

**Returns** string


---

#### saveEditableFields

**saveEditableFields**(): string

**Returns** string


---

#### saveEditableFieldsFile

**saveEditableFieldsFile**(**path**: string): [StiReport](StiReport.md)

**Parameters**

- **path** (string)  

**Returns** [StiReport](StiReport.md)


---

#### saveEncryptedDocumentFile

**saveEncryptedDocumentFile**(**path**: string, **key**: string): void

**Parameters**

- **path** (string)  
- **key** (string)  


---

#### saveEncryptedDocumentToByteArray

**saveEncryptedDocumentToByteArray**(**key**: string): number[]

**Parameters**

- **key** (string)  

**Returns** number[]


---

#### saveEncryptedDocumentToString

**saveEncryptedDocumentToString**(**key**: string): string

**Parameters**

- **key** (string)  

**Returns** string


---

#### saveEncryptedReportFile

**saveEncryptedReportFile**(**path**: string, **key**: string): void

**Parameters**

- **path** (string)  
- **key** (string)  


---

#### saveEncryptedReportToByteArray

**saveEncryptedReportToByteArray**(**key**: string): number[]

**Parameters**

- **key** (string)  

**Returns** number[]


---

#### saveEncryptedReportToString

**saveEncryptedReportToString**(**key**: string): string

**Parameters**

- **key** (string)  

**Returns** string


---

#### saveFile

**saveFile**(**path**: string): void

**Parameters**

- **path** (string)  


---

#### savePackedDocumentFile

**savePackedDocumentFile**(**path**: string): void

**Parameters**

- **path** (string)  


---

#### savePackedDocumentToByteArray

**savePackedDocumentToByteArray**(): number[]

**Returns** number[]


---

#### savePackedDocumentToString

**savePackedDocumentToString**(): string

**Returns** string


---

#### savePackedFile

**savePackedFile**(**path**: string): void

**Parameters**

- **path** (string)  


---

#### savePackedToByteArray

**savePackedToByteArray**(): number[]

**Returns** number[]


---

#### savePackedToString

**savePackedToString**(): string

**Returns** string


---

#### saveSnapshot

**saveSnapshot**(): Promise<string>

Saves a report template with embedded data

**Returns** Promise<string>


---

#### saveToJsonString

**saveToJsonString**(): string

**Returns** string


---

#### scriptNew

**scriptNew**(): void


---

#### setInheritedMode

**setInheritedMode**(**inherited**: boolean): void

**Parameters**

- **inherited** (boolean)  


---

#### setKey

**setKey**(**key**: string): void

**Parameters**

- **key** (string)  


---

#### setVariable

**setVariable**(**name**: string, **value**: any, **onlyVariable**: any): void

**Parameters**

- **name** (string)  
- **value** (any)  
- **onlyVariable** (any)  


---

#### toString

**toString**(): string

**Returns** string


---

#### toString2

**toString2**(**obj**: any): string

**Parameters**

- **obj** (any)  

**Returns** string


---

#### toString3

**toString3**(**sender**: any, **obj**: any, **allowExcelCheck**: any): string

**Parameters**

- **sender** (any)  
- **obj** (any)  
- **allowExcelCheck** (any)  

**Returns** string


---

#### updateInheritedReport

**updateInheritedReport**(**masterReport**: [StiReport](StiReport.md)): void

**Parameters**

- **masterReport** ([StiReport](StiReport.md))  


---

#### writeToReportRenderingMessages

**writeToReportRenderingMessages**(**str**: string): void

**Parameters**

- **str** (string)  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **_totalPageCountValue** | any |  |
| **allowScriptsInExpressions** | any | Specifies whether scripts can be used in expressions. You can write a script with 'return' statement in any expression if true. |
| **allowScriptsToRun** | any | Specifies whether scripts can be run in Interpretation mode. In Compilation mode, scripts are compiled and run unconditionally. |
| **autoLocalizeReportOnRun** | any |  |
| **beginRenderEvent** | [StiEvent](../Stimulsoft_Report_Events/StiEvent.md) |  |
| **bookmarkValue** | [StiBookmark](../Stimulsoft_Report_Components/StiBookmark.md) |  |
| **bytes** | any |  |
| **bytes** | any |  |
| **bytes** | any |  |
| **bytes** | any |  |
| **bytes** | any |  |
| **bytes** | any |  |
| **cacheAllData** | any |  |
| **cacheTotals** | any |  |
| **cachedTotals** | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md) |  |
| **cachedTotalsLocked** | any |  |
| **callback** | () |  |
| **collectionName** | any |  |
| **column** | any |  |
| **compiledReport** | [StiReport](StiReport.md) |  |
| **containsTables** | any |  |
| **convertNulls** | any | Gets or sets value which shows whether it is necessary to convert null or DBNull. |
| **cultureInfo** | any |  |
| **currentPage** | any |  |
| **currentPrintPage** | any |  |
| **dashboard** | any |  |
| **dashboardViewerSettings** | [StiDashboardViewerSettings](StiDashboardViewerSettings.md) |  |
| **designer** | [IStiDesignerBase](../Stimulsoft_Report_Design/IStiDesignerBase.md) | Gets a report designer. |
| **dest** | any |  |
| **dest** | any |  |
| **dest** | any |  |
| **dest** | any |  |
| **endRenderEvent** | [StiEvent](../Stimulsoft_Report_Events/StiEvent.md) |  |
| **engine** | [StiEngine](../Stimulsoft_Report_Engine/StiEngine.md) |  |
| **exception** | any |  |
| **exportedEvent** | [StiEvent](../Stimulsoft_Report_Events/StiEvent.md) |  |
| **exportingEvent** | [StiEvent](../Stimulsoft_Report_Events/StiEvent.md) |  |
| **fieldsString** | any |  |
| **getSubReport** | [StiEvent](../Stimulsoft_Report_Events/StiEvent.md) |  |
| **globalizationManager** | [IStiGlobalizationManager](IStiGlobalizationManager.md) |  |
| **globalizationStrings** | StiGlobalizationContainerCollection |  |
| **groupLine** | any |  |
| **hasPages** | any |  |
| **hasPages** | any |  |
| **hasPages** | any |  |
| **htmlPreviewMode** | any | Specifies the HTML mode which is used for viewing report in the webviewer. |
| **httpHeadersContainer** | [Header](../Stimulsoft_System/Header.md)[] |  |
| **imageCache** | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md) |  |
| **indexName** | any | Internal use only. |
| **interactionCollapsingStates** | any |  |
| **isCatch** | any |  |
| **isDocument** | any |  |
| **isEvenStyleDataBand** | any |  |
| **isExporting** | any |  |
| **isInteractionRendering** | any |  |
| **isLocalized** | any |  |
| **isLocalized** | any |  |
| **isLocalized** | any |  |
| **isOddStyleDataBand** | any |  |
| **isPageDesigner** | any |  |
| **isRendered** | any |  |
| **isRendering** | any |  |
| **isReportRenderingAfterSubmit** | boolean | Internal use only. |
| **isSerializing** | any |  |
| **isStopped** | any |  |
| **jsonLoaderHelper** | [StiJsonLoaderHelper](StiJsonLoaderHelper.md) |  |
| **key** | string | Gets or sets the report key. |
| **licenseKey** | string |  |
| **line** | any |  |
| **lineThrough** | any |  |
| **masterReport** | any |  |
| **metaTags** | StiMetaTagCollection |  |
| **modifiedVariables** | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md) |  |
| **onBeginRender** | () |  |
| **onEndRender** | () |  |
| **onExportCalled** | any |  |
| **onExportCalled** | any |  |
| **onPrinting** | () |  |
| **onRefreshing** | () |  |
| **onRendering** | () |  |
| **pageCopyNumber** | any |  |
| **pageNofMLocalizationString** | string |  |
| **pageRange** | any |  |
| **pagesXmlNode** | any |  |
| **param** | any |  |
| **param** | any |  |
| **param** | any |  |
| **param** | any |  |
| **param** | any |  |
| **parameterAlignment** | any |  |
| **parametersDisplayMode** | any |  |
| **parametersOrientation** | any |  |
| **parentReport** | [StiReport](StiReport.md) |  |
| **password** | string |  |
| **preparedExportImages** | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md)<StiComponent, [Image](../Stimulsoft_System_Drawing/Image.md)> |  |
| **previewSettings** | number |  |
| **previewToolBarOptions** | [StiPreviewToolBarOptions](StiPreviewToolBarOptions.md) |  |
| **printFrame** | any |  |
| **printFrame** | any |  |
| **printedEvent** | [StiEvent](../Stimulsoft_Report_Events/StiEvent.md) |  |
| **printingEvent** | [StiEvent](../Stimulsoft_Report_Events/StiEvent.md) |  |
| **refreshingEvent** | [StiEvent](../Stimulsoft_Report_Events/StiEvent.md) |  |
| **renderedWith** | any | Gets or sets a technology a report was rendered with. |
| **renderingEvent** | [StiEvent](../Stimulsoft_Report_Events/StiEvent.md) |  |
| **reportAlias** | any |  |
| **reportAuthor** | any |  |
| **reportCacheMode** | any |  |
| **reportCachePath** | any | Gets path to the report cache path. Path can't be changed. |
| **reportCacheProcessingEvent** | [StiEvent](../Stimulsoft_Report_Events/StiEvent.md) |  |
| **reportChanged** | [DateTime](../Stimulsoft_System/DateTime.md) |  |
| **reportComps** | any |  |
| **reportComps** | any |  |
| **reportCreated** | [DateTime](../Stimulsoft_System/DateTime.md) |  |
| **reportDescription** | any |  |
| **reportFile** | any |  |
| **reportFilePath** | any |  |
| **reportGuid** | string |  |
| **reportIcon** | string | Gets or sets a report icon. |
| **reportImage** | string | Gets or sets a report image. |
| **reportPass** | [StiReportPass](StiReportPass.md) |  |
| **reportVersion** | any |  |
| **requestParameters** | any |  |
| **retrieveOnlyUsedData** | any |  |
| **returnType** | any |  |
| **returnType** | any |  |
| **settings** | any |  |
| **settings** | any |  |
| **startPageNumber** | any |  |
| **startPageNumber** | any |  |
| **storeCrossPrimitivesConditions** | any |  |
| **storeCrossPrimitivesConditions** | any |  |
| **storeImagesInResources** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **streamResult** | any |  |
| **subReports** | StiReportsCollection |  |
| **subReportsMasterReport** | [StiReport](StiReport.md) | The master report for subreports. Do not use this field. |
| **subReportsPrintOnPreviousPage** | any |  |
| **subReportsResetPageNumber** | any |  |
| **subReportsUrls** | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md) |  |
| **tag** | any |  |
| **unPack** | any |  |
| **unPack** | any |  |
| **usePlatformDependentScript** | any | Specifies whether to use a dependent script or not. If true, then script is executed in C# script on .NET Framework and in JS script on JS platforms. |
| **value** | any |  |
| **value** | any |  |
| **variable** | any |  |
| **variable** | any |  |
| **variables** | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md)<string, any> |  |
