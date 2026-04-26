---
title: "StiMatrix Class"
---

## StiMatrix Class

**Namespace:** `Stimulsoft.Report.Export`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(StiPagesCollection pages, boolean checkForExcel, [StiExportService](StiExportService.md) service, [StiCellStyle](StiCellStyle.md)[] styles, [StiDataExportMode](StiDataExportMode.md) dataMode, any hasDividedPages) |  |

**constructor**(**pages**: StiPagesCollection, **checkForExcel**: boolean, **service**: [StiExportService](StiExportService.md), **styles**: [StiCellStyle](StiCellStyle.md)[], **dataMode**: [StiDataExportMode](StiDataExportMode.md), **hasDividedPages**: any)

**Parameters**

- **pages** (StiPagesCollection)  
- **checkForExcel** (boolean)  
- **service** ([StiExportService](StiExportService.md))  
- **styles** ([StiCellStyle](StiCellStyle.md)[])  
- **dataMode** ([StiDataExportMode](StiDataExportMode.md))  
- **hasDividedPages** (any)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **GCCollect** `static` | void |  |
| **allowModification** | void |  |
| **checkStylesNames** | void |  |
| **clear** | void |  |
| **getBorderSideIndex** | number |  |
| **getCellComponent** | StiComponent |  |
| **getRange** | [Rectangle](../Stimulsoft_System_Drawing/Rectangle.md) |  |
| **getRealImageData** | [Image](../Stimulsoft_System_Drawing/Image.md) |  |
| **getStringsFromTag** `static` | string[] |  |
| **getStyleFromComponent** | [StiCellStyle](StiCellStyle.md) |  |
| **isComponentHasInteraction** | boolean |  |
| **prepareDocument** | void |  |
| **prepareTable** | void |  |
| **replaceComponentForExport** `static` | void |  |
| **scanComponentsPlacement** | void |  |
| **setCellComponent** | void |  |
| **splitTag** `static` | string[] |  |
| **splitTagWithCache** | string[] |  |

---

### Method Details

#### GCCollect `static`

**GCCollect**(): void


---

#### allowModification

**allowModification**(**flag**: boolean): void

**Parameters**

- **flag** (boolean)  


---

#### checkStylesNames

**checkStylesNames**(): void


---

#### clear

**clear**(): void


---

#### getBorderSideIndex

**getBorderSideIndex**(**side**: [StiBorderSide](../Stimulsoft_Base_Drawing/StiBorderSide.md)): number

**Parameters**

- **side** ([StiBorderSide](../Stimulsoft_Base_Drawing/StiBorderSide.md))  

**Returns** number


---

#### getCellComponent

**getCellComponent**(**cell2**: [StiCell](StiCell.md)): StiComponent

**Parameters**

- **cell2** ([StiCell](StiCell.md))  

**Returns** StiComponent


---

#### getRange

**getRange**(**rect**: RectangleD): [Rectangle](../Stimulsoft_System_Drawing/Rectangle.md)

**Parameters**

- **rect** (RectangleD)  

**Returns** [Rectangle](../Stimulsoft_System_Drawing/Rectangle.md)


---

#### getRealImageData

**getRealImageData**(**cell**: [StiCell](StiCell.md), **baseImage**: [Image](../Stimulsoft_System_Drawing/Image.md), **list**: any): [Image](../Stimulsoft_System_Drawing/Image.md)

**Parameters**

- **cell** ([StiCell](StiCell.md))  
- **baseImage** ([Image](../Stimulsoft_System_Drawing/Image.md))  
- **list** (any)  

**Returns** [Image](../Stimulsoft_System_Drawing/Image.md)


---

#### getStringsFromTag `static`

**getStringsFromTag**(**tag**: string, **startPosition**: number): string[]

**Parameters**

- **tag** (string)  
- **startPosition** (number)  

**Returns** string[]


---

#### getStyleFromComponent

**getStyleFromComponent**(**component**: StiComponent, **x**: number, **y**: number, **id**: string, **width**: any): [StiCellStyle](StiCellStyle.md)

**Parameters**

- **component** (StiComponent)  
- **x** (number)  
- **y** (number)  
- **id** (string)  
- **width** (any)  

**Returns** [StiCellStyle](StiCellStyle.md)


---

#### isComponentHasInteraction

**isComponentHasInteraction**(**component**: StiComponent): boolean

**Parameters**

- **component** (StiComponent)  

**Returns** boolean


---

#### prepareDocument

**prepareDocument**(**service**: [StiExportService](StiExportService.md), **mode**: [StiDataExportMode](StiDataExportMode.md)): void

**Parameters**

- **service** ([StiExportService](StiExportService.md))  
- **mode** ([StiDataExportMode](StiDataExportMode.md))  


---

#### prepareTable

**prepareTable**(): void


---

#### replaceComponentForExport `static`

**replaceComponentForExport**(**refComponent**: { ref: StiComponent }, **replaceCheckboxes**: boolean): void

**Parameters**

- **refComponent** ({ ref: StiComponent })  
- **replaceCheckboxes** (boolean)  


---

#### scanComponentsPlacement

**scanComponentsPlacement**(**optimize**: boolean, **exportObjectFormatting**: any): void

**Parameters**

- **optimize** (boolean)  
- **exportObjectFormatting** (any)  


---

#### setCellComponent

**setCellComponent**(**cell2**: [StiCell](StiCell.md), **component**: StiComponent, **indexComponent**: number): void

**Parameters**

- **cell2** ([StiCell](StiCell.md))  
- **component** (StiComponent)  
- **indexComponent** (number)  


---

#### splitTag `static`

**splitTag**(**inputString**: string): string[]

**Parameters**

- **inputString** (string)  

**Returns** string[]


---

#### splitTagWithCache

**splitTagWithCache**(**inputString**: string): string[]

**Parameters**

- **inputString** (string)  

**Returns** string[]


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **additionalInfo** | StiText |  |
| **bookmark** | any |  |
| **bookmark** | any |  |
| **bookmarks2** | string[][] |  |
| **bookmarksTable** | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md) |  |
| **borderB** | any |  |
| **borderL** | any |  |
| **borderL** | any |  |
| **borderR** | any |  |
| **borderSides** | [StiBorderSide](../Stimulsoft_Base_Drawing/StiBorderSide.md)[] |  |
| **borderT** | any |  |
| **bordersX** | [StiMatrixBorderSidesXCollection](StiMatrixBorderSidesXCollection.md) |  |
| **bordersX2** | StiBorderSide[][] |  |
| **bordersY** | [StiMatrixBorderSidesYCollection](StiMatrixBorderSidesYCollection.md) |  |
| **bordersY2** | StiBorderSide[][] |  |
| **bottom** | any |  |
| **bottom** | any |  |
| **cell** | any |  |
| **cellRect** | any |  |
| **cellStyles** | [StiMatrixCellStylesCollection](StiMatrixCellStylesCollection.md) |  |
| **cellStyles2** | StiCellStyle[][] |  |
| **cells** | [StiMatrixCellsCollection](StiMatrixCellsCollection.md) |  |
| **cells2** | StiCell[][] |  |
| **cellsMap** | StiCell[][] |  |
| **checkBoxValue** | any |  |
| **color** | any |  |
| **color** | any |  |
| **columnWidth** | any |  |
| **component** | any |  |
| **coordX** | [List](../Stimulsoft_System_Collections_Generic/List.md)<number> |  |
| **coordXKey** | any |  |
| **coordXKeys** | any |  |
| **coordY** | [List](../Stimulsoft_System_Collections_Generic/List.md)<number> |  |
| **coordYCount** | any |  |
| **coordYKey** | any |  |
| **coordYKeys** | any |  |
| **coordYKeys** | any |  |
| **cp** | any |  |
| **cp** | any |  |
| **currentCell** | any |  |
| **currentCell** | any |  |
| **dataArrayLength** | any |  |
| **exportFormat** | [StiExportFormat](../Stimulsoft_Report/StiExportFormat.md) |  |
| **exportName** | any |  |
| **exportName** | any |  |
| **exportName** | any |  |
| **exportName** | any |  |
| **fail** | any |  |
| **fail** | any |  |
| **fail** | any |  |
| **fields** | [DataField](DataField.md)[] |  |
| **flag** | any |  |
| **flag** | any |  |
| **haveBrush** | any |  |
| **haveBrush** | any |  |
| **haveExcel** | any |  |
| **haveIndicator** | any |  |
| **haveText** | any |  |
| **horizontalPageBreaks** | number[] |  |
| **horizontalPageBreaksHash** | any |  |
| **imagesBaseRect** | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md) |  |
| **inString** | any |  |
| **interactionComponentId** | any |  |
| **interactionPageId** | any |  |
| **interactions** | number[][][] |  |
| **isComponentHasEvent** | any |  |
| **isFalse** | any |  |
| **isHeader** | any |  |
| **isHeader** | any |  |
| **isPaginationMode** | boolean |  |
| **isTrue** | any |  |
| **lastIsHeader** | any |  |
| **lastParentBandName** | any |  |
| **lastParentBandName** | any |  |
| **lastParentBandName** | any |  |
| **lastParentBandName** | any |  |
| **left** | any |  |
| **left** | any |  |
| **lineInfo** | any |  |
| **lineInfo** | any |  |
| **linePlacement** | [StiTableLineInfo](StiTableLineInfo.md)[] |  |
| **maxArea** | any |  |
| **maxColumnWidth** | any |  |
| **maxLineHeight** | any |  |
| **maxX** | any |  |
| **maxX** | any |  |
| **maxY** | any |  |
| **maxY** | any |  |
| **needAdd** | any |  |
| **needAdd** | any |  |
| **needAdd** | any |  |
| **needAdd** | any |  |
| **needHeader** | any |  |
| **needHeader** | any |  |
| **needHeader** | any |  |
| **needHeader** | any |  |
| **obj** | any |  |
| **obj** | any |  |
| **obj** | any |  |
| **obj** | any |  |
| **obj** | any |  |
| **offset** | any |  |
| **pageIndex** | any |  |
| **pageRect** | any |  |
| **pageRect** | any |  |
| **pageRect** | any |  |
| **pageRect** | any |  |
| **param1** | any |  |
| **param1** | any |  |
| **param2** | any |  |
| **param2** | any |  |
| **parentBandName** | string[] |  |
| **pointerToBookmark** | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md) |  |
| **posInString** | any |  |
| **posInString** | any |  |
| **posInString** | any |  |
| **posInString** | any |  |
| **primitive** | any |  |
| **putAdditionalInformation** | any |  |
| **rect** | any |  |
| **rectBottom** | any |  |
| **rectBottom** | any |  |
| **rectLeft** | any |  |
| **rectRight** | any |  |
| **rectRight** | any |  |
| **rectTop** | any |  |
| **report** | [StiReport](../Stimulsoft_Report/StiReport.md) |  |
| **right** | any |  |
| **right** | any |  |
| **rowHeight** | any |  |
| **sTagArray** | any |  |
| **sb** | any |  |
| **sb** | any |  |
| **selectedCell** | any |  |
| **selectedFontFamily** | any |  |
| **selectedFontFamily** | any |  |
| **selectedFontFamily** | any |  |
| **selectedFontFamily** | any |  |
| **selectedFontFamily** | any |  |
| **selectedFontFamily** | any |  |
| **selectedFontFamily** | any |  |
| **selectedFontFamily** | any |  |
| **selectedFontFamily** | any |  |
| **st** | any |  |
| **st** | any |  |
| **stNum** | any |  |
| **storedCreatedCells** | any |  |
| **str** | any |  |
| **str** | any |  |
| **str** | any |  |
| **str** | any |  |
| **str** | any |  |
| **styleName** | any |  |
| **styles** | [StiCellStyle](StiCellStyle.md)[] |  |
| **tempStylesCount** | any |  |
| **top** | any |  |
| **top** | any |  |
| **totalHeight** | any |  |
| **totalHeight2** | any |  |
| **totalHeightPageCounter** | any |  |
| **totalWidth** | any |  |
| **useCacheMode** | any |  |
| **useFullExceedMargins** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **wordWrap** | any |  |
| **written** | any |  |
| **x** | any |  |
| **x** | any |  |
| **x** | any |  |
| **y** | any |  |
| **y** | any |  |
