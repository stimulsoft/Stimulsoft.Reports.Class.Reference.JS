---
title: "StiVariableHelper Class"
---

## StiVariableHelper Class

**Namespace:** `Stimulsoft.Report.Engine`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **fillItemsOfVariable** `static` | boolean |  |
| **fillItemsOfVariables** `static` | boolean |  |
| **filter** `static` | void |  |
| **getDataSourcesWithRequestFromUserVariablesInCommand** `static` | string[] |  |
| **getElementIndex** `static` | number |  |
| **getVariableLabel** `static` | string |  |
| **setDefaultValueForRequestFromUserVariables** `static` | void |  |
| **setDefaultValueForRequestFromUserVariablesAsync** `static` | void |  |
| **setDefaultValueForRequestFromUserVariablesIfUserItems** `static` | void |  |
| **setVariableLabel** `static` | void |  |
| **setVariableLabel2** `static` | void |  |
| **setVariableValue** `static` | void |  |

---

### Method Details

#### fillItemsOfVariable `static`

**fillItemsOfVariable**(**variable**: StiVariable, **compiledReport**: [StiReport](../Stimulsoft_Report/StiReport.md), **REFmodified**: { ref: boolean }, **modeItems**: boolean): boolean

**Parameters**

- **variable** (StiVariable)  
- **compiledReport** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **REFmodified** ({ ref: boolean })  
- **modeItems** (boolean)  

**Returns** boolean


---

#### fillItemsOfVariables `static`

**fillItemsOfVariables**(**compiledReport**: [StiReport](../Stimulsoft_Report/StiReport.md), **modeItems**: boolean): boolean

**Parameters**

- **compiledReport** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **modeItems** (boolean)  

**Returns** boolean


---

#### filter `static`

**filter**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **info**: [StiDialogInfo](../Stimulsoft_Report_Dictionary/StiDialogInfo.md), **REFkeys**: { ref: any[] }, **REFvalues**: { ref: any[] }, **REFvaluesBinding**: { ref: any[] }, **REFcheckedStates**: { ref: boolean[] }): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **info** ([StiDialogInfo](../Stimulsoft_Report_Dictionary/StiDialogInfo.md))  
- **REFkeys** ({ ref: any[] })  
- **REFvalues** ({ ref: any[] })  
- **REFvaluesBinding** ({ ref: any[] })  
- **REFcheckedStates** ({ ref: boolean[] })  


---

#### getDataSourcesWithRequestFromUserVariablesInCommand `static`

**getDataSourcesWithRequestFromUserVariablesInCommand**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md)): string[]

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  

**Returns** string[]


---

#### getElementIndex `static`

**getElementIndex**(**info**: [StiDialogInfo](../Stimulsoft_Report_Dictionary/StiDialogInfo.md), **value**: any): number

**Parameters**

- **info** ([StiDialogInfo](../Stimulsoft_Report_Dictionary/StiDialogInfo.md))  
- **value** (any)  

**Returns** number


---

#### getVariableLabel `static`

**getVariableLabel**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **variableName**: string): string

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **variableName** (string)  

**Returns** string


---

#### setDefaultValueForRequestFromUserVariables `static`

**setDefaultValueForRequestFromUserVariables**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **haveVars**: boolean, **allowParseQuery**: any, **isConnectToDataV2**: any): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **haveVars** (boolean)  
- **allowParseQuery** (any)  
- **isConnectToDataV2** (any)  


---

#### setDefaultValueForRequestFromUserVariablesAsync `static`

**setDefaultValueForRequestFromUserVariablesAsync**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **haveVars**: boolean, **allowParseQuery**: any, **isConnectToDataV2**: any): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **haveVars** (boolean)  
- **allowParseQuery** (any)  
- **isConnectToDataV2** (any)  


---

#### setDefaultValueForRequestFromUserVariablesIfUserItems `static`

**setDefaultValueForRequestFromUserVariablesIfUserItems**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md)): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  


---

#### setVariableLabel `static`

**setVariableLabel**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **variable**: StiVariable, **label**: string): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **variable** (StiVariable)  
- **label** (string)  


---

#### setVariableLabel2 `static`

**setVariableLabel2**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **variable**: StiVariable, **info**: [StiDialogInfo](../Stimulsoft_Report_Dictionary/StiDialogInfo.md), **newValue**: object): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **variable** (StiVariable)  
- **info** ([StiDialogInfo](../Stimulsoft_Report_Dictionary/StiDialogInfo.md))  
- **newValue** (object)  


---

#### setVariableValue `static`

**setVariableValue**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **variable**: StiVariable, **variableValue**: any): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **variable** (StiVariable)  
- **variableValue** (any)  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **checkedStates** | any |  |
| **checkedStates** | any |  |
| **dataSource** | any |  |
| **dataSource** | any |  |
| **dataSource** | any |  |
| **dataSourcesToReconnect** | any |  |
| **dataSourcesToReconnect** | any |  |
| **expression** | any |  |
| **found** | any |  |
| **haveVars** | any |  |
| **haveVars** | any |  |
| **haveVars** | any |  |
| **haveVars** | any |  |
| **info** | any |  |
| **info** | any |  |
| **item** | any |  |
| **item** | any |  |
| **item** | any |  |
| **item** | any |  |
| **item** | any |  |
| **item** | any |  |
| **item** | any |  |
| **item** | any |  |
| **item** | any |  |
| **item** | any |  |
| **item** | any |  |
| **item** | any |  |
| **item** | any |  |
| **items** | any |  |
| **key** | any |  |
| **key** | any |  |
| **keys** | any |  |
| **keys** | any |  |
| **keys** | any |  |
| **label** | any |  |
| **list** | any |  |
| **modified** | any |  |
| **newValue** | any |  |
| **newValue** | any |  |
| **newValue** | any |  |
| **newValue** | any |  |
| **newValue** | any |  |
| **newValue** | any |  |
| **newValue** | any |  |
| **resultItem** | any |  |
| **tLength** | any |  |
| **tLength** | any |  |
| **tLength** | any |  |
| **type** | any |  |
| **type** | any |  |
| **type** | any |  |
| **type** | any |  |
| **type** | any |  |
| **type** | any |  |
| **type** | any |  |
| **type** | any |  |
| **type** | any |  |
| **type** | any |  |
| **type** | any |  |
| **type** | any |  |
| **type** | any |  |
| **type** | any |  |
| **type** | any |  |
| **type** | any |  |
| **type** | any |  |
| **type** | any |  |
| **type** | any |  |
| **type** | any |  |
| **type** | any |  |
| **type** | any |  |
| **type** | any |  |
| **type** | any |  |
| **type** | any |  |
| **type** | any |  |
| **type** | any |  |
| **type** | any |  |
| **type** | any |  |
| **type** | any |  |
| **type** | any |  |
| **type** | any |  |
| **type** | any |  |
| **type** | any |  |
| **type** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **values** | any |  |
| **values** | any |  |
| **valuesBinding** | any |  |
| **valuesBinding** | any |  |
| **varTypeName** | any |  |
| **varTypeName** | any |  |
| **varTypeName** | any |  |
| **varTypeName** | any |  |
| **varTypeName** | any |  |
| **varTypeName** | any |  |
| **varTypeName** | any |  |
| **varTypeName** | any |  |
| **varTypeName** | any |  |
| **varTypeName** | any |  |
| **varTypeName** | any |  |
| **varTypeName** | any |  |
| **varTypeName** | any |  |
| **varTypeName** | any |  |
| **varTypeName** | any |  |
| **varTypeName** | any |  |
| **varTypeName** | any |  |
| **varTypeName** | any |  |
| **varTypeName** | any |  |
| **varTypeName** | any |  |
| **varTypeName** | any |  |
| **varTypeName** | any |  |
| **varTypeName** | any |  |
