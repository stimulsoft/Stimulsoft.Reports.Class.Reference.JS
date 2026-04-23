---
title: "Cff Class"
---

## Cff Class

**Namespace:** `Stimulsoft.Report.Export`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **cutUnusedSubr** | void |  |
| **getBaseTablesString** | string |  |
| **getCard16** | number |  |
| **getCard8** | number |  |
| **getInt16** | number |  |
| **getNewTablesString** | string |  |
| **getOffSize** | number |  |
| **getReal** | string |  |
| **getSize** | number |  |
| **getUInt16** | number |  |
| **getUInt32** | number |  |
| **getUInt8** | number |  |
| **read** | void |  |
| **save** | Uint8Array |  |
| **setOffset** | void |  |
| **setUInt16** | void |  |

---

### Method Details

#### cutUnusedSubr

**cutUnusedSubr**(): void


---

#### getBaseTablesString

**getBaseTablesString**(): string

**Returns** string


---

#### getCard16

**getCard16**(): number

**Returns** number


---

#### getCard8

**getCard8**(): number

**Returns** number


---

#### getInt16

**getInt16**(**buff**: Uint8Array, **pos**: number): number

**Parameters**

- **buff** (Uint8Array)  
- **pos** (number)  

**Returns** number


---

#### getNewTablesString

**getNewTablesString**(): string

**Returns** string


---

#### getOffSize

**getOffSize**(): number

**Returns** number


---

#### getReal

**getReal**(): string

**Returns** string


---

#### getSize

**getSize**(): number

**Returns** number


---

#### getUInt16

**getUInt16**(**buff**: Uint8Array, **pos**: number): number

**Parameters**

- **buff** (Uint8Array)  
- **pos** (number)  

**Returns** number


---

#### getUInt32

**getUInt32**(**buff**: Uint8Array, **pos**: number): number

**Parameters**

- **buff** (Uint8Array)  
- **pos** (number)  

**Returns** number


---

#### getUInt8

**getUInt8**(**buff**: Uint8Array, **pos**: number): number

**Parameters**

- **buff** (Uint8Array)  
- **pos** (number)  

**Returns** number


---

#### read

**read**(**fontBytes**: Uint8Array, **offset**: number, **length**: number): void

**Parameters**

- **fontBytes** (Uint8Array)  
- **offset** (number)  
- **length** (number)  


---

#### save

**save**(): Uint8Array

**Returns** Uint8Array


---

#### setOffset

**setOffset**(**buf**: Uint8Array, **offset**: number, **offSize**: number, **value**: number): void

**Parameters**

- **buf** (Uint8Array)  
- **offset** (number)  
- **offSize** (number)  
- **value** (number)  


---

#### setUInt16

**setUInt16**(**buff**: Uint8Array, **pos**: number, **value**: number): void

**Parameters**

- **buff** (Uint8Array)  
- **pos** (number)  
- **value** (number)  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **GlobalSubrIndex** | Cff_Index |  |
| **GlyphsNeed** | boolean[] |  |
| **Header** | Cff_Header |  |
| **NameIndex** | Cff_Index |  |
| **Offset** | any |  |
| **StringIndex** | StiStringIndex |  |
| **TablesList** | [Cff_Block](Cff_Block.md)[] |  |
| **TopDictIndex** | Cff_DictIndex |  |
