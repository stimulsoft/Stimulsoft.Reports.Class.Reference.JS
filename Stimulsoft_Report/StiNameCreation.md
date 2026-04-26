---
title: "StiNameCreation Class"
---

## StiNameCreation Class

**Namespace:** `Stimulsoft.Report`

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **namingRule** `static` | [StiNamingRule](StiNamingRule.md) |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **checkName** `static` | boolean |  |
| **createColumnName** `static` | string |  |
| **createConnectionName** `static` | string |  |
| **createDataSourcesName** `static` | string |  |
| **createName** `static` | string |  |
| **createRelationName** `static` | string |  |
| **createResourceName** `static` | string |  |
| **createSimpleName** `static` | string |  |
| **exists** `static` | boolean |  |
| **generateName** `static` | string |  |
| **generateName1** `static` | string |  |
| **generateName2** `static` | string |  |
| **generateName4** `static` | string |  |
| **generateName5** `static` | string |  |
| **isColumnNameExists** `static` | boolean |  |
| **isConnectionNameExists** `static` | boolean |  |
| **isRelationExists** `static` | boolean |  |
| **isResourceNameExists** `static` | boolean |  |
| **isTableDataSourcesExists** `static` | boolean |  |
| **isValidName** `static` | boolean |  |

---

### Method Details

#### checkName `static`

**checkName**(**checkedObject**: any, **report**: [StiReport](StiReport.md), **name**: string, **messageBoxCaption**: string, **isValid**: any): boolean

**Parameters**

- **checkedObject** (any)  
- **report** ([StiReport](StiReport.md))  
- **name** (string)  
- **messageBoxCaption** (string)  
- **isValid** (any)  

**Returns** boolean


---

#### createColumnName `static`

**createColumnName**(**dataSource**: StiDataSource, **baseName**: string): string

**Parameters**

- **dataSource** (StiDataSource)  
- **baseName** (string)  

**Returns** string


---

#### createConnectionName `static`

**createConnectionName**(**report**: [StiReport](StiReport.md), **baseName**: string): string

**Parameters**

- **report** ([StiReport](StiReport.md))  
- **baseName** (string)  

**Returns** string


---

#### createDataSourcesName `static`

**createDataSourcesName**(**report**: [StiReport](StiReport.md), **baseName**: string): string

**Parameters**

- **report** ([StiReport](StiReport.md))  
- **baseName** (string)  

**Returns** string


---

#### createName `static`

**createName**(**report**: [StiReport](StiReport.md), **baseName**: string, **addOne**: any, **removeIncorrectSymbols**: any, **forceAdvancedNamingRule**: any): string

**Parameters**

- **report** ([StiReport](StiReport.md))  
- **baseName** (string)  
- **addOne** (any)  
- **removeIncorrectSymbols** (any)  
- **forceAdvancedNamingRule** (any)  

**Returns** string


---

#### createRelationName `static`

**createRelationName**(**report**: [StiReport](StiReport.md), **dataRelation**: StiDataRelation, **baseName**: string): string

**Parameters**

- **report** ([StiReport](StiReport.md))  
- **dataRelation** (StiDataRelation)  
- **baseName** (string)  

**Returns** string


---

#### createResourceName `static`

**createResourceName**(**report**: [StiReport](StiReport.md), **baseName**: string): string

**Parameters**

- **report** ([StiReport](StiReport.md))  
- **baseName** (string)  

**Returns** string


---

#### createSimpleName `static`

**createSimpleName**(**report**: [StiReport](StiReport.md), **baseName**: string): string

**Parameters**

- **report** ([StiReport](StiReport.md))  
- **baseName** (string)  

**Returns** string


---

#### exists `static`

**exists**(**checkedObject**: any, **report**: [StiReport](StiReport.md), **name**: string): boolean

**Parameters**

- **checkedObject** (any)  
- **report** ([StiReport](StiReport.md))  
- **name** (string)  

**Returns** boolean


---

#### generateName `static`

**generateName**(**component**: StiComponent): string

**Parameters**

- **component** (StiComponent)  

**Returns** string


---

#### generateName1 `static`

**generateName1**(**report**: [StiReport](StiReport.md), **localizedName**: string, **name**: string): string

**Parameters**

- **report** ([StiReport](StiReport.md))  
- **localizedName** (string)  
- **name** (string)  

**Returns** string


---

#### generateName2 `static`

**generateName2**(**report**: [StiReport](StiReport.md), **localizedName**: string, **type**: [Stimulsoft.System.Type](../Stimulsoft_System/Type.md)): string

**Parameters**

- **report** ([StiReport](StiReport.md))  
- **localizedName** (string)  
- **type** ([Stimulsoft.System.Type](../Stimulsoft_System/Type.md))  

**Returns** string


---

#### generateName4 `static`

**generateName4**(**relation**: StiDataRelation): string

**Parameters**

- **relation** (StiDataRelation)  

**Returns** string


---

#### generateName5 `static`

**generateName5**(**dataSource**: StiDataSource): string

**Parameters**

- **dataSource** (StiDataSource)  

**Returns** string


---

#### isColumnNameExists `static`

**isColumnNameExists**(**dataSource**: StiDataSource, **name**: string): boolean

**Parameters**

- **dataSource** (StiDataSource)  
- **name** (string)  

**Returns** boolean


---

#### isConnectionNameExists `static`

**isConnectionNameExists**(**report**: [StiReport](StiReport.md), **name**: string): boolean

**Parameters**

- **report** ([StiReport](StiReport.md))  
- **name** (string)  

**Returns** boolean


---

#### isRelationExists `static`

**isRelationExists**(**report**: [StiReport](StiReport.md), **dataRelation**: StiDataRelation, **name**: string): boolean

**Parameters**

- **report** ([StiReport](StiReport.md))  
- **dataRelation** (StiDataRelation)  
- **name** (string)  

**Returns** boolean


---

#### isResourceNameExists `static`

**isResourceNameExists**(**report**: [StiReport](StiReport.md), **name**: string): boolean

**Parameters**

- **report** ([StiReport](StiReport.md))  
- **name** (string)  

**Returns** boolean


---

#### isTableDataSourcesExists `static`

**isTableDataSourcesExists**(**report**: [StiReport](StiReport.md), **name**: string): boolean

**Parameters**

- **report** ([StiReport](StiReport.md))  
- **name** (string)  

**Returns** boolean


---

#### isValidName `static`

**isValidName**(**report**: [StiReport](StiReport.md), **name**: string): boolean

**Parameters**

- **report** ([StiReport](StiReport.md))  
- **name** (string)  

**Returns** boolean


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **baseName** | any |  |
| **baseName** | any |  |
| **baseName** | any |  |
| **baseName** | any |  |
| **baseName** | any |  |
| **baseName** | any |  |
| **baseName** | any |  |
| **baseName** | any |  |
| **componentName** | any |  |
| **name** | any |  |
| **name** | any |  |
| **name** | any |  |
| **name** | any |  |
| **name** | any |  |
