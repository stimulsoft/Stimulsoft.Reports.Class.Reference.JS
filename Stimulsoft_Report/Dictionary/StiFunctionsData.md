---
title: "StiFunctionsData Class"
---

## StiFunctionsData Class

**Namespace:** `Stimulsoft.Report.Dictionary`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **coalesce** `static` | object |  |
| **coalesceStr** `static` | string |  |
| **create** `static` | void |  |
| **getCrossTabColumnValue** `static` | string |  |
| **getCrossTabRowValue** `static` | string |  |
| **getRealPageNumber** `static` | number |  |
| **isAllDataRowNullOrEmpty** `static` | boolean |  |
| **isDataEmpty** `static` | boolean |  |
| **isNull** `static` | boolean |  |
| **isNullOrEmpty** `static` | boolean |  |
| **isNullOrEmpty2** `static` | boolean |  |
| **isNullOrWhiteSpace** `static` | boolean |  |
| **isNullOrWhiteSpace2** `static` | boolean |  |
| **isNumeric** `static` | boolean |  |
| **joinColumnContent** `static` | string |  |
| **next** `static` | any |  |
| **nextIsNull** `static` | any |  |
| **previous** `static` | any |  |
| **previousIsNull** `static` | any |  |
| **toQueryString** `static` | string |  |
| **vLookup** `static` | any |  |
| **vLookupStr** `static` | any |  |

---

### Method Details

#### coalesce `static`

**coalesce**(**args**: any): object

**Parameters**

- **args** (any)  

**Returns** object


---

#### coalesceStr `static`

**coalesceStr**(**args**: any): string

**Parameters**

- **args** (any)  

**Returns** string


---

#### create `static`

**create**(): void


---

#### getCrossTabColumnValue `static`

**getCrossTabColumnValue**(**sender**: object): string

**Parameters**

- **sender** (object)  

**Returns** string


---

#### getCrossTabRowValue `static`

**getCrossTabRowValue**(**sender**: object): string

**Parameters**

- **sender** (object)  

**Returns** string


---

#### getRealPageNumber `static`

**getRealPageNumber**(**sender**: object): number

**Parameters**

- **sender** (object)  

**Returns** number


---

#### isAllDataRowNullOrEmpty `static`

**isAllDataRowNullOrEmpty**(**dataSource**: any, **dataColumn**: string): boolean

**Parameters**

- **dataSource** (any)  
- **dataColumn** (string)  

**Returns** boolean


---

#### isDataEmpty `static`

**isDataEmpty**(**dataSource**: any): boolean

**Parameters**

- **dataSource** (any)  

**Returns** boolean


---

#### isNull `static`

**isNull**(**dataSource**: any, **dataColumn**: string): boolean

**Parameters**

- **dataSource** (any)  
- **dataColumn** (string)  

**Returns** boolean


---

#### isNullOrEmpty `static`

**isNullOrEmpty**(**value**: any): boolean

**Parameters**

- **value** (any)  

**Returns** boolean


---

#### isNullOrEmpty2 `static`

**isNullOrEmpty2**(**dataSource**: any, **dataColumn**: string): boolean

**Parameters**

- **dataSource** (any)  
- **dataColumn** (string)  

**Returns** boolean


---

#### isNullOrWhiteSpace `static`

**isNullOrWhiteSpace**(**value**: any): boolean

**Parameters**

- **value** (any)  

**Returns** boolean


---

#### isNullOrWhiteSpace2 `static`

**isNullOrWhiteSpace2**(**dataSource**: any, **dataColumn**: string): boolean

**Parameters**

- **dataSource** (any)  
- **dataColumn** (string)  

**Returns** boolean


---

#### isNumeric `static`

**isNumeric**(**value**: any): boolean

**Parameters**

- **value** (any)  

**Returns** boolean


---

#### joinColumnContent `static`

**joinColumnContent**(**dataSource**: StiBusinessObject | StiDataSource, **dataColumn**: string, **delimiter**: string, **distinct**: any): string

**Parameters**

- **dataSource** (StiBusinessObject | StiDataSource)  
- **dataColumn** (string)  
- **delimiter** (string)  
- **distinct** (any)  

**Returns** string


---

#### next `static`

**next**(**dataSource**: any, **dataColumn**: string): any

**Parameters**

- **dataSource** (any)  
- **dataColumn** (string)  

**Returns** any


---

#### nextIsNull `static`

**nextIsNull**(**dataSource**: any, **dataColumn**: string): any

**Parameters**

- **dataSource** (any)  
- **dataColumn** (string)  

**Returns** any


---

#### previous `static`

**previous**(**dataSource**: any, **dataColumn**: string): any

**Parameters**

- **dataSource** (any)  
- **dataColumn** (string)  

**Returns** any


---

#### previousIsNull `static`

**previousIsNull**(**dataSource**: any, **dataColumn**: string): any

**Parameters**

- **dataSource** (any)  
- **dataColumn** (string)  

**Returns** any


---

#### toQueryString `static`

**toQueryString**(**list**: T[], **quotationMark**: string, **dateTimeFormat**: string, **needEscape**: any): string

**Parameters**

- **list** (T[])  
- **quotationMark** (string)  
- **dateTimeFormat** (string)  
- **needEscape** (any)  

**Returns** string


---

#### vLookup `static`

**vLookup**(**value**: any, **dataObject**: any, **dataColumnToLook**: string, **dataColumnToReturn**: string, **asString**: any, **exactMatch**: any): any

**Parameters**

- **value** (any)  
- **dataObject** (any)  
- **dataColumnToLook** (string)  
- **dataColumnToReturn** (string)  
- **asString** (any)  
- **exactMatch** (any)  

**Returns** any


---

#### vLookupStr `static`

**vLookupStr**(**value**: any, **dataObject**: any, **dataColumnToLook**: string, **dataColumnToReturn**: string, **exactMatch**: boolean): any

**Parameters**

- **value** (any)  
- **dataObject** (any)  
- **dataColumnToLook** (string)  
- **dataColumnToReturn** (string)  
- **exactMatch** (boolean)  

**Returns** any

