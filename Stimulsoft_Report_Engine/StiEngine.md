---
title: "StiEngine Class"
---

## StiEngine Class

**Namespace:** `Stimulsoft.Report.Engine`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([StiReport](../Stimulsoft_Report/StiReport.md) report) |  |

**constructor**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md))

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **hashUseParentStyles** | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md) |  |
| **parserConversionStore** | Hashtable<string, |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **addContainerToDestination** | void | Adds a specified container into the container for output. |
| **addFooterMarker** | void | Adds a FooterMarker (special container) into the current container of output. A container-marker is used for the engine to know on what place in a container of output FooterBands for PrintOnAllPages should be replaced after their rendering is complete. |
| **addKeepLevelAtLatestDataBand** | void | Adds a container-marker of the beginning of grouping before the last rendered DataBand. |
| **addLevel** | void | Adds a container-marker of the beginning of grouping into the current position of output in the stream. |
| **addPageToRenderedPages** | void |  |
| **canGenerateNewContainer** | boolean |  |
| **checkBreakColumnsContainer** | void |  |
| **checkForDuplicate** | boolean |  |
| **clearPageBreakSkipFirst** | void |  |
| **finalClear** | void |  |
| **finalClearAsync** | void |  |
| **finishColumns** | void |  |
| **finishContainer** | void |  |
| **finishResetPageNumberContainer** | void |  |
| **getComponentByNameFromRenderedPage** | StiComponent |  |
| **getSumTagsOnPage** | number |  |
| **getUniqueShortName** | string |  |
| **invokePageAfterPrint** | void |  |
| **newColumn** | void |  |
| **newColumnAsync** | void |  |
| **newDestination** | void |  |
| **newDestinationAsync** | void |  |
| **newList** | void |  |
| **newListAsync** | void |  |
| **newPage** | void |  |
| **newPageAsync** | void |  |
| **newPageAsync2** | void |  |
| **processLastPageAfterRendering** | void |  |
| **processPageAfterRendering** | void |  |
| **reject** | void |  |
| **removeBandFromPageBreakSkipList** | void |  |
| **removeLevel** | void | Adds a container-marker of the end of grouping into the current position of output in the stream. |
| **renderBand** | StiComponentsCollection |  |
| **renderBandAsync** | Promise<StiComponentsCollection> |  |
| **renderContainer** | StiContainer |  |
| **renderContainerAsync** | Promise<StiContainer> |  |
| **renderEmptyBands** | void |  |
| **renderEmptyBandsAsync** | void |  |
| **renderFootersOnAllPages** | void |  |
| **renderPrintAtBottom** | void |  |
| **resetProcessingDuplicates1** | void |  |
| **resetProcessingDuplicates2** | void |  |
| **resolve** | void |  |
| **setNewPageParameters** | void |  |

---

### Method Details

#### addContainerToDestination

**addContainerToDestination**(**container**: StiContainer): void

Adds a specified container into the container for output.

**Parameters**

- **container** (StiContainer)  


---

#### addFooterMarker

**addFooterMarker**(**footerMaster**: StiFooterBand): void

Adds a FooterMarker (special container) into the current container of output.
A container-marker is used for the engine to know on what place in a container
of output FooterBands for PrintOnAllPages should be replaced after their rendering is complete.

**Parameters**

- **footerMaster** (StiFooterBand)  


---

#### addKeepLevelAtLatestDataBand

**addKeepLevelAtLatestDataBand**(): void

Adds a container-marker of the beginning of grouping before the last rendered DataBand.


---

#### addLevel

**addLevel**(): void

Adds a container-marker of the beginning of grouping into the current position of output in the stream.


---

#### addPageToRenderedPages

**addPageToRenderedPages**(**page**: StiPage): void

**Parameters**

- **page** (StiPage)  


---

#### canGenerateNewContainer

**canGenerateNewContainer**(**pageBreak**: [IStiPageBreak](../Stimulsoft_Report_Components/IStiPageBreak.md)): boolean

**Parameters**

- **pageBreak** ([IStiPageBreak](../Stimulsoft_Report_Components/IStiPageBreak.md))  

**Returns** boolean


---

#### checkBreakColumnsContainer

**checkBreakColumnsContainer**(**columns**: StiColumnsContainer): void

**Parameters**

- **columns** (StiColumnsContainer)  


---

#### checkForDuplicate

**checkForDuplicate**(**textName**: string, **value**: string, **tag**: string): boolean

**Parameters**

- **textName** (string)  
- **value** (string)  
- **tag** (string)  

**Returns** boolean


---

#### clearPageBreakSkipFirst

**clearPageBreakSkipFirst**(): void


---

#### finalClear

**finalClear**(): void


---

#### finalClearAsync

**finalClearAsync**(): void


---

#### finishColumns

**finishColumns**(**containerForRender**: StiContainer): void

**Parameters**

- **containerForRender** (StiContainer)  


---

#### finishContainer

**finishContainer**(**containerForRender**: StiContainer): void

**Parameters**

- **containerForRender** (StiContainer)  


---

#### finishResetPageNumberContainer

**finishResetPageNumberContainer**(**containerForRender**: StiContainer, **isFinal**: boolean): void

**Parameters**

- **containerForRender** (StiContainer)  
- **isFinal** (boolean)  


---

#### getComponentByNameFromRenderedPage

**getComponentByNameFromRenderedPage**(**page**: StiPage, **componentName**: string): StiComponent

**Parameters**

- **page** (StiPage)  
- **componentName** (string)  

**Returns** StiComponent


---

#### getSumTagsOnPage

**getSumTagsOnPage**(**page**: StiPage, **componentName**: string): number

**Parameters**

- **page** (StiPage)  
- **componentName** (string)  

**Returns** number


---

#### getUniqueShortName

**getUniqueShortName**(**fullName**: string): string

**Parameters**

- **fullName** (string)  

**Returns** string


---

#### invokePageAfterPrint

**invokePageAfterPrint**(): void


---

#### newColumn

**newColumn**(**ignoreKeepContainers**: any): void

**Parameters**

- **ignoreKeepContainers** (any)  


---

#### newColumnAsync

**newColumnAsync**(**ignoreKeepContainers**: any): void

**Parameters**

- **ignoreKeepContainers** (any)  


---

#### newDestination

**newDestination**(**ignoreKeepContainers**: any): void

**Parameters**

- **ignoreKeepContainers** (any)  


---

#### newDestinationAsync

**newDestinationAsync**(**ignoreKeepContainers**: any): void

**Parameters**

- **ignoreKeepContainers** (any)  


---

#### newList

**newList**(**skipStaticBands**: any): void

**Parameters**

- **skipStaticBands** (any)  


---

#### newListAsync

**newListAsync**(**skipStaticBands**: any): void

**Parameters**

- **skipStaticBands** (any)  


---

#### newPage

**newPage**(**ignoreKeepContainers**: any): void

**Parameters**

- **ignoreKeepContainers** (any)  


---

#### newPageAsync

**newPageAsync**(**ignoreKeepContainers**: any): void

**Parameters**

- **ignoreKeepContainers** (any)  


---

#### newPageAsync2

**newPageAsync2**(**ignoreKeepContainers**: any): void

**Parameters**

- **ignoreKeepContainers** (any)  


---

#### processLastPageAfterRendering

**processLastPageAfterRendering**(): void


---

#### processPageAfterRendering

**processPageAfterRendering**(**page**: StiPage, **final**: boolean): void

**Parameters**

- **page** (StiPage)  
- **final** (boolean)  


---

#### reject

**reject**(**e**: any): void

**Parameters**

- **e** (any)  


---

#### removeBandFromPageBreakSkipList

**removeBandFromPageBreakSkipList**(**pageBreak**: [IStiPageBreak](../Stimulsoft_Report_Components/IStiPageBreak.md)): void

**Parameters**

- **pageBreak** ([IStiPageBreak](../Stimulsoft_Report_Components/IStiPageBreak.md))  


---

#### removeLevel

**removeLevel**(): void

Adds a container-marker of the end of grouping into the current position of output in the stream.


---

#### renderBand

**renderBand**(**band**: StiBand, **ignorePageBreaks**: any, **allowRenderingEvents**: any): StiComponentsCollection

**Parameters**

- **band** (StiBand)  
- **ignorePageBreaks** (any)  
- **allowRenderingEvents** (any)  

**Returns** StiComponentsCollection


---

#### renderBandAsync

**renderBandAsync**(**band**: StiBand, **ignorePageBreaks**: any, **allowRenderingEvents**: any): Promise<StiComponentsCollection>

**Parameters**

- **band** (StiBand)  
- **ignorePageBreaks** (any)  
- **allowRenderingEvents** (any)  

**Returns** Promise<StiComponentsCollection>


---

#### renderContainer

**renderContainer**(**container**: StiContainer, **isPrintAtBottom**: any, **isFooterOnAllPages**: any): StiContainer

**Parameters**

- **container** (StiContainer)  
- **isPrintAtBottom** (any)  
- **isFooterOnAllPages** (any)  

**Returns** StiContainer


---

#### renderContainerAsync

**renderContainerAsync**(**container**: StiContainer, **isPrintAtBottom**: any, **isFooterOnAllPages**: any): Promise<StiContainer>

**Parameters**

- **container** (StiContainer)  
- **isPrintAtBottom** (any)  
- **isFooterOnAllPages** (any)  

**Returns** Promise<StiContainer>


---

#### renderEmptyBands

**renderEmptyBands**(**containerForRender**: StiContainer, **selectedContainer**: StiContainer): void

**Parameters**

- **containerForRender** (StiContainer)  
- **selectedContainer** (StiContainer)  


---

#### renderEmptyBandsAsync

**renderEmptyBandsAsync**(**containerForRender**: StiContainer, **selectedContainer**: StiContainer): void

**Parameters**

- **containerForRender** (StiContainer)  
- **selectedContainer** (StiContainer)  


---

#### renderFootersOnAllPages

**renderFootersOnAllPages**(**outContainer**: StiContainer, **startIndex**: number, **REFmarkerContainer**: any): void

**Parameters**

- **outContainer** (StiContainer)  
- **startIndex** (number)  
- **REFmarkerContainer** (any)  


---

#### renderPrintAtBottom

**renderPrintAtBottom**(**container**: StiContainer, **startIndex**: number, **markerContainer**: StiContainer): void

**Parameters**

- **container** (StiContainer)  
- **startIndex** (number)  
- **markerContainer** (StiContainer)  


---

#### resetProcessingDuplicates1

**resetProcessingDuplicates1**(**componentName**: string): void

**Parameters**

- **componentName** (string)  


---

#### resetProcessingDuplicates2

**resetProcessingDuplicates2**(**component**: StiSimpleText): void

**Parameters**

- **component** (StiSimpleText)  


---

#### resolve

**resolve**(**null**: any): void

**Parameters**

- **null** (any)  


---

#### setNewPageParameters

**setNewPageParameters**(): void


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **allowEndOfPageProcessing** | any |  |
| **anchorsArguments** | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md) |  |
| **atLeastOneDatabandRenderedOnPage** | any |  |
| **bandsInProgress** | StiBand[] |  |
| **bandsOnAllPages** | [StiBandsOnAllPages](StiBandsOnAllPages.md) | Contains a collection of bands which should be output on all pages. |
| **breakable** | [StiBreakableHelper](StiBreakableHelper.md) | An object helps to work with IStiBreakable interface. |
| **childs** | any |  |
| **childs** | any |  |
| **childs** | any |  |
| **columns2** | any |  |
| **columns2** | any |  |
| **columnsOnDataBand** | [StiColumnsOnDataBand](StiColumnsOnDataBand.md) | Used to output columns on the DataBand. |
| **columnsOnPanel** | [StiColumnsOnPanel](StiColumnsOnPanel.md) | Used to output columns on the Panel. |
| **container** | any |  |
| **container** | any |  |
| **container** | any |  |
| **container** | any |  |
| **container** | any |  |
| **containerForRender** | StiContainer | Gets or sets a container in what rendering of bands is done. |
| **crossFreeSpace** | any | Contains a freespace in a container in what the printing is done. Used to output Cross bands only. |
| **currentDataBandOfPageLine** | StiDataBand | Gets or sets the current data band associated with the page line. |
| **denyChangeThread** | any | If true then it is impossible to change stream of printing. |
| **denyClearPrintOnAllPagesIgnoreList** | any | The flag is set during StiBandsOnAllPages rendering so that databands that are rendered on each page do not reset this list |
| **denyRenderMasterComponentsInContainer** | any | If true then the Render method of a container will not render components of the Master type. This property is used with the RenderSimpleComponents method of a page. It is used to deny master components and render simple ones. |
| **detailBand** | any |  |
| **detailBand** | any |  |
| **detailBand** | any |  |
| **detailBand** | any |  |
| **duplilcatesLastValues** | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md) |  |
| **emptyBands** | [StiEmptyBandsHelper](StiEmptyBandsHelper.md) | Used to output EmptyBands in the current container. |
| **firstCallNewPage** | any |  |
| **firstPassPointer** | [StiBookmark](../Stimulsoft_Report_Components/StiBookmark.md) | Saved pointer from the first pass of the report rendering. This pointer is requied for rendering the table of contents component. |
| **flagColumnHeader** | any |  |
| **flagColumnHeader** | any |  |
| **footersOnAllPages** | [StiFootersOnAllPages](StiFootersOnAllPages.md) | Cotnains a collection of Footers which should be output on the bottom of a page. The list is filled when stream rendering and the list is cleared when rendering of the current stream is finished. |
| **freeSpace** | any | Contains a freespace in a container in what the printing is done. |
| **freeSpaceRounded** | any |  |
| **generateNewColumnBeforeBand** | any |  |
| **generateNewPageBeforeBand** | any |  |
| **hashCheckSize** | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md) |  |
| **hashDataBandLastLine** | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md) |  |
| **hashDataSourceReferencesCounter** | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md) |  |
| **hashParentStyles** | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md) |  |
| **ignoreSkipFirst** | any |  |
| **ignoreUnlimitedHeightForNewPage** | any | If true then UnlimitedHeight property is ignored when NewPage method is called. |
| **index** | any |  |
| **indexOfLatestDataBand** | [StiIndex](StiIndex.md) |  |
| **indexOfStartList** | any |  |
| **indexPageForPageTotal** | any |  |
| **isChildsEnabled** | any |  |
| **isChildsEnabled** | any |  |
| **isChildsEnabled** | any |  |
| **isChildsEnabled** | any |  |
| **isCrossBandsMode** | any | This property is set to true for printing CrossBands. |
| **isDynamicBookmarksMode** | any | If true then it is allowed to add any Bookmarks. If false then add Bookmarks of components which the IsRendered property = false (in other words it is rendered first time). This property allows adding Bookmarks for static components only once (to avoid duplication). |
| **isFirstDataBandOnPage** | any | Returns true if the first DataBand is printed on the current page. |
| **isLastDataBandOnPage** | any | Returns true if the last DataBand is printed on the current page. |
| **isNewPage** | any |  |
| **isNewPage** | any |  |
| **isNewPage** | any |  |
| **isNewPage** | any |  |
| **keepFirstDetailTogetherList** | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md) | Contains a list of stored bands for keepFirstDetailTogether property |
| **keepFirstDetailTogetherTablesList** | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md) |  |
| **lastFreeSpaceOnPageAfterNewList** | any |  |
| **lastInvokeTextProcessIndexEventArgsValue** | any |  |
| **lastInvokeTextProcessValueEventArgsValue** | any |  |
| **latestProgressValue** | any |  |
| **level** | any |  |
| **masterEngine** | [StiEngine](StiEngine.md) | If an engine is slave then this reference indicates the parent report engine. |
| **masterReport** | [StiReport](../Stimulsoft_Report/StiReport.md) | Gets or sets a master report that is being rendered in the current moment. |
| **needHashParentStyles** | any |  |
| **needHashParentStyles** | any |  |
| **needHashParentStyles** | any |  |
| **needHashParentStyles** | any |  |
| **newPageTime** | any |  |
| **offsetNewColumnY** | any |  |
| **page** | StiPage | Gets or sets a page in what rendering of bands is done. |
| **pageBreakSkipFirstCollection** | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md) | The collection is used to determine the case of skipping the generation of a new page or a new column using the SkipFirst property. If the band has already skipped the generation of a new page or column once, then it is entered into this collection. |
| **pageLineRenderingEnabled** | any | Gets or sets a value indicating whether page line rendering is enabled. |
| **pageNumbers** | [StiPageNumberHelper](StiPageNumberHelper.md) |  |
| **parentStyle** | any |  |
| **parentStyle** | any |  |
| **parentStyle** | any |  |
| **parentStyle** | any |  |
| **parentStyle** | any |  |
| **parentStyle** | any |  |
| **position** | any |  |
| **positionBottomY** | any | Indicates the current position bands output on the Y axis on the bottom of a page. |
| **positionX** | any | Indicates the current position bands output on the X axis. |
| **positionY** | any | Indicates the current position bands output on the Y axis. |
| **printAtBottom** | [StiPrintAtBottom](StiPrintAtBottom.md) | Contains a collection of bands which should be output on the bottom of a page. The list is filled when stream rendering and the list is cleared when rendering of the current stream is finished. |
| **printOnAllPagesIgnoreList** | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md) | Contains the list of bands which should be passed when rendering. |
| **renderState** | [StiRenderState](StiRenderState.md) |  |
| **renderedContainer** | any |  |
| **renderedContainer** | any |  |
| **report** | [StiReport](../Stimulsoft_Report/StiReport.md) | Gets or sets a report that is being rendered in the current moment. |
| **result** | any |  |
| **selectedContainer** | any |  |
| **selectedContainer** | any |  |
| **selectedContainer** | any |  |
| **selectedContainer** | any |  |
| **selectedContainer** | any |  |
| **selectedContainer** | any |  |
| **selectedContainer** | any |  |
| **selectedContainer** | any |  |
| **selectedContainer** | any |  |
| **selectedContainer** | any |  |
| **selectedContainer** | any |  |
| **selectedContainer** | any |  |
| **selectedStartCont** | any |  |
| **selectedStartCont** | any |  |
| **selectedStartCont** | any |  |
| **selectedStartCont** | any |  |
| **selectedStartContIndex** | any |  |
| **selectedStartContIndex** | any |  |
| **shortNameMap** | Dictionary<string, string> |  |
| **silentMode** | any |  |
| **skipFirstPageBeforePrintEvent** | any |  |
| **slaveEngines** | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md)<string, [StiEngine](StiEngine.md)> | Contains a list of Slave Engines. |
| **specialContainerHeight** | any |  |
| **specialContainerHeight2** | any |  |
| **startIndexPageForPageTotal** | any |  |
| **staticBands** | [StiStaticBandsHelper](StiStaticBandsHelper.md) | An object helps to output static bands on a page. |
| **tempEnabled** | any |  |
| **tempEnabled** | any |  |
| **templateContainer** | StiContainer | Gets or sets a container from a template. This page is being rendered in the current moment. If a page is output then the TemplateContainer property is equal in TemplatePage. |
| **templatePage** | StiPage | Gets or sets a page from a template. This page is being rendered in the current moment. |
| **threads** | [StiThreads](StiThreads.md) | This object helps to print groups of bands from containers which are placed directly on a page. |
