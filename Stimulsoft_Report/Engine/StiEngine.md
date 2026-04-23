---
title: "StiEngine Class"
---

## StiEngine Class

**Namespace:** `Stimulsoft.Report.Engine`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([StiReport](../StiReport.md) report) |  |

**constructor**(**report**: [StiReport](../StiReport.md))

**Parameters**

- **report** ([StiReport](../StiReport.md))  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **hashUseParentStyles** | [Hashtable](../../Stimulsoft_System/Collections/Hashtable.md) |  |
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

**canGenerateNewContainer**(**pageBreak**: [IStiPageBreak](../Components/IStiPageBreak.md)): boolean

**Parameters**

- **pageBreak** ([IStiPageBreak](../Components/IStiPageBreak.md))  

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

**removeBandFromPageBreakSkipList**(**pageBreak**: [IStiPageBreak](../Components/IStiPageBreak.md)): void

**Parameters**

- **pageBreak** ([IStiPageBreak](../Components/IStiPageBreak.md))  


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

