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
| **getRange** | [Rectangle](../../Stimulsoft_System/Drawing/Rectangle.md) |  |
| **getRealImageData** | [Image](../../Stimulsoft_System/Drawing/Image.md) |  |
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

**getBorderSideIndex**(**side**: [StiBorderSide](../../Stimulsoft_Base/Drawing/StiBorderSide.md)): number

**Parameters**

- **side** ([StiBorderSide](../../Stimulsoft_Base/Drawing/StiBorderSide.md))  

**Returns** number


---

#### getCellComponent

**getCellComponent**(**cell2**: [StiCell](StiCell.md)): StiComponent

**Parameters**

- **cell2** ([StiCell](StiCell.md))  

**Returns** StiComponent


---

#### getRange

**getRange**(**rect**: RectangleD): [Rectangle](../../Stimulsoft_System/Drawing/Rectangle.md)

**Parameters**

- **rect** (RectangleD)  

**Returns** [Rectangle](../../Stimulsoft_System/Drawing/Rectangle.md)


---

#### getRealImageData

**getRealImageData**(**cell**: [StiCell](StiCell.md), **baseImage**: [Image](../../Stimulsoft_System/Drawing/Image.md), **list**: any): [Image](../../Stimulsoft_System/Drawing/Image.md)

**Parameters**

- **cell** ([StiCell](StiCell.md))  
- **baseImage** ([Image](../../Stimulsoft_System/Drawing/Image.md))  
- **list** (any)  

**Returns** [Image](../../Stimulsoft_System/Drawing/Image.md)


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

