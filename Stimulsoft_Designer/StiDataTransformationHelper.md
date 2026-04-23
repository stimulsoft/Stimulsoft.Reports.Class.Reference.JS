---
title: "StiDataTransformationHelper Class"
---

## StiDataTransformationHelper Class

**Namespace:** `Stimulsoft.Designer`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **applyProperties** `static` | void |  |
| **columnItem** `static` |  |  |
| **createTransformationColumnFromDataColumn** `static` | StiDataTransformationColumn |  |
| **executeJSCommand** `static` | void |  |
| **getActionRuleFromJSActionRuleObject** `static` | StiDataActionRule |  |
| **getActionRules** `static` |  |  |
| **getColumnFromJSColumnObject** `static` | StiDataTransformationColumn |  |
| **getColumns** `static` |  |  |
| **getDataGridContent** `static` | Promise< |  |
| **getDataTransformationFromElement** `static` | Promise<StiDataTransformation> |  |
| **getFilterItemsHelper** `static` | any |  |
| **getFilterItemsHelper2** `static` | any |  |
| **getFilterRuleFromJSFilterRuleObject** `static` | StiDataFilterRule |  |
| **getFilterRules** `static` | any[] |  |
| **getSortRuleFromJSSortRuleObject** `static` | StiDataSortRule |  |
| **getSortRules** `static` |  |  |
| **getViewQueryContent** `static` | void |  |

---

### Method Details

#### applyProperties `static`

**applyProperties**(**dataTransformation**: StiDataTransformation, **dataSourceProps**: any, **report**: [StiReport](../Stimulsoft_Report/StiReport.md)): void

**Parameters**

- **dataTransformation** (StiDataTransformation)  
- **dataSourceProps** (any)  
- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  


---

#### columnItem `static`

**columnItem**(**column**: StiDataTransformationColumn, **dictionary**: StiDictionary, **originalType**: string): void

**Parameters**

- **column** (StiDataTransformationColumn)  
- **dictionary** (StiDictionary)  
- **originalType** (string)  


---

#### createTransformationColumnFromDataColumn `static`

**createTransformationColumnFromDataColumn**(**dataColumn**: StiDataColumn): StiDataTransformationColumn

**Parameters**

- **dataColumn** (StiDataColumn)  

**Returns** StiDataTransformationColumn


---

#### executeJSCommand `static`

**executeJSCommand**(**designer**: [StiDesigner](StiDesigner.md), **report**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any, **callbackResult**: any): void

**Parameters**

- **designer** ([StiDesigner](StiDesigner.md))  
- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  
- **callbackResult** (any)  


---

#### getActionRuleFromJSActionRuleObject `static`

**getActionRuleFromJSActionRuleObject**(**actionRuleObject**: any): StiDataActionRule

**Parameters**

- **actionRuleObject** (any)  

**Returns** StiDataActionRule


---

#### getActionRules `static`

**getActionRules**(**dataTransformation**: StiDataTransformation): void

**Parameters**

- **dataTransformation** (StiDataTransformation)  


---

#### getColumnFromJSColumnObject `static`

**getColumnFromJSColumnObject**(**columnObject**: any): StiDataTransformationColumn

**Parameters**

- **columnObject** (any)  

**Returns** StiDataTransformationColumn


---

#### getColumns `static`

**getColumns**(**dataTransformation**: StiDataTransformation): void

**Parameters**

- **dataTransformation** (StiDataTransformation)  


---

#### getDataGridContent `static`

**getDataGridContent**(**dataTransformation**: StiDataTransformation): Promise<

**Parameters**

- **dataTransformation** (StiDataTransformation)  

**Returns** Promise<


---

#### getDataTransformationFromElement `static`

**getDataTransformationFromElement**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any): Promise<StiDataTransformation>

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  

**Returns** Promise<StiDataTransformation>


---

#### getFilterItemsHelper `static`

**getFilterItemsHelper**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **parameters**: any): any

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **parameters** (any)  

**Returns** any


---

#### getFilterItemsHelper2 `static`

**getFilterItemsHelper2**(**dataTransformation**: StiDataTransformation, **parameters**: any): any

**Parameters**

- **dataTransformation** (StiDataTransformation)  
- **parameters** (any)  

**Returns** any


---

#### getFilterRuleFromJSFilterRuleObject `static`

**getFilterRuleFromJSFilterRuleObject**(**filterRuleObject**: any): StiDataFilterRule

**Parameters**

- **filterRuleObject** (any)  

**Returns** StiDataFilterRule


---

#### getFilterRules `static`

**getFilterRules**(**dataTransformation**: StiDataTransformation): any[]

**Parameters**

- **dataTransformation** (StiDataTransformation)  

**Returns** any[]


---

#### getSortRuleFromJSSortRuleObject `static`

**getSortRuleFromJSSortRuleObject**(**sortRuleObject**: any): StiDataSortRule

**Parameters**

- **sortRuleObject** (any)  

**Returns** StiDataSortRule


---

#### getSortRules `static`

**getSortRules**(**dataTransformation**: StiDataTransformation): void

**Parameters**

- **dataTransformation** (StiDataTransformation)  


---

#### getViewQueryContent `static`

**getViewQueryContent**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **param**: any, **callbackResult**: any): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **param** (any)  
- **callbackResult** (any)  

