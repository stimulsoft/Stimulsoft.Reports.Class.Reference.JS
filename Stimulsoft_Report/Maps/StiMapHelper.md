---
title: "StiMapHelper Class"
---

## StiMapHelper Class

**Namespace:** `Stimulsoft.Report.Maps`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **addToCahe** `static` | string |  |
| **allow3D** `static` | boolean |  |
| **allow3D2** `static` | boolean |  |
| **getColors** `static` | [Color](../../Stimulsoft_System/Drawing/Color.md)[] |  |
| **getLangOriginalName** `static` | string |  |
| **getMapLanguagesInfos** `static` | any |  |
| **getMapSample** `static` | StiMap |  |
| **getStates** `static` | string[] |  |
| **isAfrica** `static` | boolean |  |
| **isAsia** `static` | boolean |  |
| **isEU** `static` | boolean |  |
| **isNorthAmerica** `static` | boolean |  |
| **isOceania** `static` | boolean |  |
| **isSouthAmerica** `static` | boolean |  |
| **isWorld** `static` | boolean |  |
| **prepareIsoCode** `static` | string |  |
| **renderOnlineMap** `static` | Promise<string> |  |

---

### Method Details

#### addToCahe `static`

**addToCahe**(**map**: StiMap, **x**: number, **y**: number, **width**: number, **height**: number, **wrappedSvg**: string): string

**Parameters**

- **map** (StiMap)  
- **x** (number)  
- **y** (number)  
- **width** (number)  
- **height** (number)  
- **wrappedSvg** (string)  

**Returns** string


---

#### allow3D `static`

**allow3D**(**mapID**: string): boolean

**Parameters**

- **mapID** (string)  

**Returns** boolean


---

#### allow3D2 `static`

**allow3D2**(**mapID**: [StiMapID](StiMapID.md)): boolean

**Parameters**

- **mapID** ([StiMapID](StiMapID.md))  

**Returns** boolean


---

#### getColors `static`

**getColors**(): [Color](../../Stimulsoft_System/Drawing/Color.md)[]

**Returns** [Color](../../Stimulsoft_System/Drawing/Color.md)[]


---

#### getLangOriginalName `static`

**getLangOriginalName**(**id**: string): string

**Parameters**

- **id** (string)  

**Returns** string


---

#### getMapLanguagesInfos `static`

**getMapLanguagesInfos**(): any

**Returns** any


---

#### getMapSample `static`

**getMapSample**(): StiMap

**Returns** StiMap


---

#### getStates `static`

**getStates**(**report**: [StiReport](../StiReport.md), **id**: [StiMapID](StiMapID.md), **lang**: string): string[]

**Parameters**

- **report** ([StiReport](../StiReport.md))  
- **id** ([StiMapID](StiMapID.md))  
- **lang** (string)  

**Returns** string[]


---

#### isAfrica `static`

**isAfrica**(**id**: [StiMapID](StiMapID.md)): boolean

**Parameters**

- **id** ([StiMapID](StiMapID.md))  

**Returns** boolean


---

#### isAsia `static`

**isAsia**(**id**: [StiMapID](StiMapID.md)): boolean

**Parameters**

- **id** ([StiMapID](StiMapID.md))  

**Returns** boolean


---

#### isEU `static`

**isEU**(**id**: [StiMapID](StiMapID.md)): boolean

**Parameters**

- **id** ([StiMapID](StiMapID.md))  

**Returns** boolean


---

#### isNorthAmerica `static`

**isNorthAmerica**(**id**: [StiMapID](StiMapID.md)): boolean

**Parameters**

- **id** ([StiMapID](StiMapID.md))  

**Returns** boolean


---

#### isOceania `static`

**isOceania**(**id**: [StiMapID](StiMapID.md)): boolean

**Parameters**

- **id** ([StiMapID](StiMapID.md))  

**Returns** boolean


---

#### isSouthAmerica `static`

**isSouthAmerica**(**id**: [StiMapID](StiMapID.md)): boolean

**Parameters**

- **id** ([StiMapID](StiMapID.md))  

**Returns** boolean


---

#### isWorld `static`

**isWorld**(**id**: [StiMapID](StiMapID.md)): boolean

**Parameters**

- **id** ([StiMapID](StiMapID.md))  

**Returns** boolean


---

#### prepareIsoCode `static`

**prepareIsoCode**(**text**: string): string

**Parameters**

- **text** (string)  

**Returns** string


---

#### renderOnlineMap `static`

**renderOnlineMap**(**str**: string): Promise<string>

**Parameters**

- **str** (string)  

**Returns** Promise<string>

