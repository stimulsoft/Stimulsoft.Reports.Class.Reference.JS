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

**fillItemsOfVariable**(**variable**: StiVariable, **compiledReport**: [StiReport](../StiReport.md), **REFmodified**: { ref: boolean }, **modeItems**: boolean): boolean

**Parameters**

- **variable** (StiVariable)  
- **compiledReport** ([StiReport](../StiReport.md))  
- **REFmodified** ({ ref: boolean })  
- **modeItems** (boolean)  

**Returns** boolean


---

#### fillItemsOfVariables `static`

**fillItemsOfVariables**(**compiledReport**: [StiReport](../StiReport.md), **modeItems**: boolean): boolean

**Parameters**

- **compiledReport** ([StiReport](../StiReport.md))  
- **modeItems** (boolean)  

**Returns** boolean


---

#### filter `static`

**filter**(**report**: [StiReport](../StiReport.md), **info**: [StiDialogInfo](../Dictionary/StiDialogInfo.md), **REFkeys**: { ref: any[] }, **REFvalues**: { ref: any[] }, **REFvaluesBinding**: { ref: any[] }, **REFcheckedStates**: { ref: boolean[] }): void

**Parameters**

- **report** ([StiReport](../StiReport.md))  
- **info** ([StiDialogInfo](../Dictionary/StiDialogInfo.md))  
- **REFkeys** ({ ref: any[] })  
- **REFvalues** ({ ref: any[] })  
- **REFvaluesBinding** ({ ref: any[] })  
- **REFcheckedStates** ({ ref: boolean[] })  


---

#### getDataSourcesWithRequestFromUserVariablesInCommand `static`

**getDataSourcesWithRequestFromUserVariablesInCommand**(**report**: [StiReport](../StiReport.md)): string[]

**Parameters**

- **report** ([StiReport](../StiReport.md))  

**Returns** string[]


---

#### getElementIndex `static`

**getElementIndex**(**info**: [StiDialogInfo](../Dictionary/StiDialogInfo.md), **value**: any): number

**Parameters**

- **info** ([StiDialogInfo](../Dictionary/StiDialogInfo.md))  
- **value** (any)  

**Returns** number


---

#### getVariableLabel `static`

**getVariableLabel**(**report**: [StiReport](../StiReport.md), **variableName**: string): string

**Parameters**

- **report** ([StiReport](../StiReport.md))  
- **variableName** (string)  

**Returns** string


---

#### setDefaultValueForRequestFromUserVariables `static`

**setDefaultValueForRequestFromUserVariables**(**report**: [StiReport](../StiReport.md), **haveVars**: boolean, **allowParseQuery**: any, **isConnectToDataV2**: any): void

**Parameters**

- **report** ([StiReport](../StiReport.md))  
- **haveVars** (boolean)  
- **allowParseQuery** (any)  
- **isConnectToDataV2** (any)  


---

#### setDefaultValueForRequestFromUserVariablesAsync `static`

**setDefaultValueForRequestFromUserVariablesAsync**(**report**: [StiReport](../StiReport.md), **haveVars**: boolean, **allowParseQuery**: any, **isConnectToDataV2**: any): void

**Parameters**

- **report** ([StiReport](../StiReport.md))  
- **haveVars** (boolean)  
- **allowParseQuery** (any)  
- **isConnectToDataV2** (any)  


---

#### setDefaultValueForRequestFromUserVariablesIfUserItems `static`

**setDefaultValueForRequestFromUserVariablesIfUserItems**(**report**: [StiReport](../StiReport.md)): void

**Parameters**

- **report** ([StiReport](../StiReport.md))  


---

#### setVariableLabel `static`

**setVariableLabel**(**report**: [StiReport](../StiReport.md), **variable**: StiVariable, **label**: string): void

**Parameters**

- **report** ([StiReport](../StiReport.md))  
- **variable** (StiVariable)  
- **label** (string)  


---

#### setVariableLabel2 `static`

**setVariableLabel2**(**report**: [StiReport](../StiReport.md), **variable**: StiVariable, **info**: [StiDialogInfo](../Dictionary/StiDialogInfo.md), **newValue**: object): void

**Parameters**

- **report** ([StiReport](../StiReport.md))  
- **variable** (StiVariable)  
- **info** ([StiDialogInfo](../Dictionary/StiDialogInfo.md))  
- **newValue** (object)  


---

#### setVariableValue `static`

**setVariableValue**(**report**: [StiReport](../StiReport.md), **variable**: StiVariable, **variableValue**: any): void

**Parameters**

- **report** ([StiReport](../StiReport.md))  
- **variable** (StiVariable)  
- **variableValue** (any)  

