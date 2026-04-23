---
title: "StiScriptHelper Class"
---

## StiScriptHelper Class

**Namespace:** `Stimulsoft.Report`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **checkExpression** `static` | any |  |
| **clearCache** `static` | void |  |
| **clearTokensCache** `static` | void |  |
| **clearTypesCache** `static` | void |  |
| **invokeEventScript** `static` | any |  |
| **invokeScript** `static` | any |  |
| **isAllowScriptsToRun** `static` | boolean |  |
| **isEventScript** `static` | boolean |  |
| **isScriptInExpression** `static` | boolean |  |
| **parseTextValue** `static` *(+3 overloads)* | any |  |
| **parseTextValue2** `static` | any |  |

---

### Method Details

#### checkExpression `static`

**checkExpression**(**expression**: string, **component**: StiComponent, **useAliases**: any, **returnType**: [Type](../Stimulsoft_System/Type.md), **constants**: Dictionary<string, any>): any

**Parameters**

- **expression** (string)  
- **component** (StiComponent)  
- **useAliases** (any)  
- **returnType** ([Type](../Stimulsoft_System/Type.md))  
- **constants** (Dictionary<string, any>)  

**Returns** any


---

#### clearCache `static`

**clearCache**(**report**: [StiReport](StiReport.md)): void

**Parameters**

- **report** ([StiReport](StiReport.md))  


---

#### clearTokensCache `static`

**clearTokensCache**(**report**: [StiReport](StiReport.md)): void

**Parameters**

- **report** ([StiReport](StiReport.md))  


---

#### clearTypesCache `static`

**clearTypesCache**(**report**: [StiReport](StiReport.md)): void

**Parameters**

- **report** ([StiReport](StiReport.md))  


---

#### invokeEventScript `static`

**invokeEventScript**(**report**: [StiReport](StiReport.md), **sender**: any, **ev**: [StiEvent](Events/StiEvent.md), **args**: [EventArgs](../Stimulsoft_System/EventArgs.md)): any

**Parameters**

- **report** ([StiReport](StiReport.md))  
- **sender** (any)  
- **ev** ([StiEvent](Events/StiEvent.md))  
- **args** ([EventArgs](../Stimulsoft_System/EventArgs.md))  

**Returns** any


---

#### invokeScript `static`

**invokeScript**(**report**: [StiReport](StiReport.md), **script**: string, **args**: Dictionary<string, any>, **options**: [StiCSharpScriptParserOptions](../Stimulsoft_Base/Parser/StiCSharpScriptParserOptions.md)): any

**Parameters**

- **report** ([StiReport](StiReport.md))  
- **script** (string)  
- **args** (Dictionary<string, any>)  
- **options** ([StiCSharpScriptParserOptions](../Stimulsoft_Base/Parser/StiCSharpScriptParserOptions.md))  

**Returns** any


---

#### isAllowScriptsToRun `static`

**isAllowScriptsToRun**(**report**: [StiReport](StiReport.md), **scriptLanguage**: any): boolean

**Parameters**

- **report** ([StiReport](StiReport.md))  
- **scriptLanguage** (any)  

**Returns** boolean


---

#### isEventScript `static`

**isEventScript**(**report**: [StiReport](StiReport.md), **ev**: [StiEvent](Events/StiEvent.md)): boolean

**Parameters**

- **report** ([StiReport](StiReport.md))  
- **ev** ([StiEvent](Events/StiEvent.md))  

**Returns** boolean


---

#### isScriptInExpression `static`

**isScriptInExpression**(**expression**: string, **component**: StiComponent | StiReport, **checkBraces**: any): boolean

**Parameters**

- **expression** (string)  
- **component** (StiComponent | StiReport)  
- **checkBraces** (any)  

**Returns** boolean


---

#### parseTextValue `static`

**parseTextValue**(**expression**: string, **component**: StiComponent): any

**Parameters**

- **expression** (string)  
- **component** (StiComponent)  

**Returns** any

---

**parseTextValue**(**expression**: string, **component**: StiComponent, **sender**: any): any

**Parameters**

- **expression** (string)  
- **component** (StiComponent)  
- **sender** (any)  

**Returns** any

---

**parseTextValue**(**expression**: string, **component**: StiComponent, **parameters**: [StiParserParameters](Engine/StiParserParameters.md)): any

**Parameters**

- **expression** (string)  
- **component** (StiComponent)  
- **parameters** ([StiParserParameters](Engine/StiParserParameters.md))  

**Returns** any

---

**parseTextValue**(**expression**: string, **component**: StiComponent, **sender_parameters**: any): any

**Parameters**

- **expression** (string)  
- **component** (StiComponent)  
- **sender_parameters** (any)  

**Returns** any


---

#### parseTextValue2 `static`

**parseTextValue2**(**expression**: string, **component**: StiComponent, **storeToPrint**: [IRefOut](../Stimulsoft_System/IRefOut.md)<boolean>, **executeIfStoreToPrint**: boolean, **returnAsmList**: boolean): any

**Parameters**

- **expression** (string)  
- **component** (StiComponent)  
- **storeToPrint** ([IRefOut](../Stimulsoft_System/IRefOut.md)<boolean>)  
- **executeIfStoreToPrint** (boolean)  
- **returnAsmList** (boolean)  

**Returns** any

