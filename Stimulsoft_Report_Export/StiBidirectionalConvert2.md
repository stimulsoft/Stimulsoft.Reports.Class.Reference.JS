---
title: "StiBidirectionalConvert2 Class"
---

## StiBidirectionalConvert2 Class

**Namespace:** `Stimulsoft.Report.Export`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **classifyCharacters** `static` | void |  |
| **computeReorderingIndexes** `static` | number[] |  |
| **convertArabicHebrew** `static` | string |  |
| **convertString** `static` | string |  |
| **getExplicitEmbeddingLevels** `static` | void |  |
| **getLevelRuns** `static` | number[][] |  |
| **getMatchingPDI** `static` | void |  |
| **getMultiLineReordered** `static` | number[] |  |
| **getOrderedString** `static` | string |  |
| **getParagraphEmbeddingLevel** `static` | number |  |
| **getPartsIndexes** `static` | string |  |
| **getReorderedIndexes** `static` | number[] |  |
| **getRunForCharacter** `static` | number[] |  |
| **getTextLevels** `static` | number[] |  |
| **getTypeForLevel** `static` | [BidiClass](BidiClass.md) |  |
| **isBidiControlChar** `static` | boolean |  |
| **isBracketTypeClose** `static` | boolean |  |
| **isBracketTypeOpen** `static` | boolean |  |
| **isOdd** `static` | boolean |  |
| **leastGreaterEven** `static` | number |  |
| **leastGreaterOdd** `static` | number |  |
| **logicalToVisual** `static` | string |  |
| **makeMirrorChars** `static` | string |  |
| **removeX9Characters** `static` | void |  |
| **setLevels** `static` | void |  |

---

### Method Details

#### classifyCharacters `static`

**classifyCharacters**(**text**: string, **refTypesList**: { ref: number[] }): void

**Parameters**

- **text** (string)  
- **refTypesList** ({ ref: number[] })  


---

#### computeReorderingIndexes `static`

**computeReorderingIndexes**(**levels**: number[]): number[]

**Parameters**

- **levels** (number[])  

**Returns** number[]


---

#### convertArabicHebrew `static`

**convertArabicHebrew**(**inputSB**: string, **keepSize**: any): string

**Parameters**

- **inputSB** (string)  
- **keepSize** (any)  

**Returns** string


---

#### convertString `static`

**convertString**(**input**: string, **rightToLeft**: boolean, **modePdf**: any, **paddingWithSpaces**: any): string

**Parameters**

- **input** (string)  
- **rightToLeft** (boolean)  
- **modePdf** (any)  
- **paddingWithSpaces** (any)  

**Returns** string


---

#### getExplicitEmbeddingLevels `static`

**getExplicitEmbeddingLevels**(**level**: number, **types**: number[], **refLevels**: { ref: number[] }, **matchingPDI**: number[]): void

**Parameters**

- **level** (number)  
- **types** (number[])  
- **refLevels** ({ ref: number[] })  
- **matchingPDI** (number[])  


---

#### getLevelRuns `static`

**getLevelRuns**(**levels**: number[]): number[][]

**Parameters**

- **levels** (number[])  

**Returns** number[][]


---

#### getMatchingPDI `static`

**getMatchingPDI**(**types**: number[], **outMatchingPDI**: { ref: number[] }, **outMatchingIsolateInitiator**: { ref: number[] }): void

**Parameters**

- **types** (number[])  
- **outMatchingPDI** ({ ref: number[] })  
- **outMatchingIsolateInitiator** ({ ref: number[] })  


---

#### getMultiLineReordered `static`

**getMultiLineReordered**(**levels**: number[], **lineBreaks**: number[]): number[]

**Parameters**

- **levels** (number[])  
- **lineBreaks** (number[])  

**Returns** number[]


---

#### getOrderedString `static`

**getOrderedString**(**input**: string, **newIndexes**: number[], **levels**: number[]): string

**Parameters**

- **input** (string)  
- **newIndexes** (number[])  
- **levels** (number[])  

**Returns** string


---

#### getParagraphEmbeddingLevel `static`

**getParagraphEmbeddingLevel**(**types**: number[], **matchingPDI**: number[], **si**: any, **ei**: any): number

**Parameters**

- **types** (number[])  
- **matchingPDI** (number[])  
- **si** (any)  
- **ei** (any)  

**Returns** number


---

#### getPartsIndexes `static`

**getPartsIndexes**(**input**: string, **rightToLeft**: boolean, **parts**: [StiBidiPartIndex](StiBidiPartIndex.md)[]): string

**Parameters**

- **input** (string)  
- **rightToLeft** (boolean)  
- **parts** ([StiBidiPartIndex](StiBidiPartIndex.md)[])  

**Returns** string


---

#### getReorderedIndexes `static`

**getReorderedIndexes**(**level**: number, **typesList**: number[], **levelsList**: number[], **lineBreaks**: number[], **refLevels**: { ref: number[] }): number[]

**Parameters**

- **level** (number)  
- **typesList** (number[])  
- **levelsList** (number[])  
- **lineBreaks** (number[])  
- **refLevels** ({ ref: number[] })  

**Returns** number[]


---

#### getRunForCharacter `static`

**getRunForCharacter**(**levelRuns**: number[][], **length**: number): number[]

**Parameters**

- **levelRuns** (number[][])  
- **length** (number)  

**Returns** number[]


---

#### getTextLevels `static`

**getTextLevels**(**paragraphEmbeddingLevel**: number, **typesList**: number[], **levelsList**: number[], **lineBreaks**: number[]): number[]

**Parameters**

- **paragraphEmbeddingLevel** (number)  
- **typesList** (number[])  
- **levelsList** (number[])  
- **lineBreaks** (number[])  

**Returns** number[]


---

#### getTypeForLevel `static`

**getTypeForLevel**(**level**: number): [BidiClass](BidiClass.md)

**Parameters**

- **level** (number)  

**Returns** [BidiClass](BidiClass.md)


---

#### isBidiControlChar `static`

**isBidiControlChar**(**ch**: number): boolean

**Parameters**

- **ch** (number)  

**Returns** boolean


---

#### isBracketTypeClose `static`

**isBracketTypeClose**(**ch**: string): boolean

**Parameters**

- **ch** (string)  

**Returns** boolean


---

#### isBracketTypeOpen `static`

**isBracketTypeOpen**(**ch**: string): boolean

**Parameters**

- **ch** (string)  

**Returns** boolean


---

#### isOdd `static`

**isOdd**(**n**: number): boolean

**Parameters**

- **n** (number)  

**Returns** boolean


---

#### leastGreaterEven `static`

**leastGreaterEven**(**l**: number): number

**Parameters**

- **l** (number)  

**Returns** number


---

#### leastGreaterOdd `static`

**leastGreaterOdd**(**l**: number): number

**Parameters**

- **l** (number)  

**Returns** number


---

#### logicalToVisual `static`

**logicalToVisual**(**input**: string, **rightToLeft**: boolean, **lineBreaks**: number[], **parts**: [StiBidiPartIndex](StiBidiPartIndex.md)[]): string

**Parameters**

- **input** (string)  
- **rightToLeft** (boolean)  
- **lineBreaks** (number[])  
- **parts** ([StiBidiPartIndex](StiBidiPartIndex.md)[])  

**Returns** string


---

#### makeMirrorChars `static`

**makeMirrorChars**(**input**: string): string

**Parameters**

- **input** (string)  

**Returns** string


---

#### removeX9Characters `static`

**removeX9Characters**(**refBuffer**: { ref: number[] }): void

**Parameters**

- **refBuffer** ({ ref: number[] })  


---

#### setLevels `static`

**setLevels**(**refLevels**: { ref: number[] }, **newLevel**: number): void

**Parameters**

- **refLevels** ({ ref: number[] })  
- **newLevel** (number)  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **alignWidth** | any |  |
| **cct** | any |  |
| **cct** | any |  |
| **cct** | any |  |
| **cct** | any |  |
| **cct** | any |  |
| **cct** | any |  |
| **cct** | any |  |
| **ch** | any |  |
| **ch** | any |  |
| **ch** | any |  |
| **ch** | any |  |
| **ch** | any |  |
| **ch** | any |  |
| **ch** | any |  |
| **ch** | any |  |
| **ch** | any |  |
| **ch** | any |  |
| **ch** | any |  |
| **ch** | any |  |
| **ct** | any |  |
| **currRunSequence** | any |  |
| **currentLevel** | any |  |
| **first** | any |  |
| **found** | any |  |
| **hasMatchingPDI** | any |  |
| **highestLevel** | any |  |
| **i** | any |  |
| **i** | any |  |
| **input** | any |  |
| **input** | any |  |
| **lastType** | any |  |
| **lastType** | any |  |
| **lowestOddLevel** | any |  |
| **nct** | any |  |
| **nct** | any |  |
| **newLevel** | any |  |
| **newLevel** | any |  |
| **output** | any |  |
| **overflowEmbeddingCount** | any |  |
| **overflowEmbeddingCount** | any |  |
| **overflowIsolateCount** | any |  |
| **start** | any |  |
| **start** | any |  |
| **t** | any |  |
| **t** | any |  |
| **t** | any |  |
| **t** | any |  |
| **t** | any |  |
| **tempSB** | any |  |
| **tempSB** | any |  |
| **validIsolateCount** | any |  |
