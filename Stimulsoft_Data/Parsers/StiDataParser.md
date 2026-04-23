---
title: "StiDataParser Class"
---

## StiDataParser Class

**Namespace:** `Stimulsoft.Data.Parsers`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([IStiAppDictionary](../../Stimulsoft_Base/IStiAppDictionary.md) dictionary, [DataTable](../../Stimulsoft_System/Data/DataTable.md) table, IStiMeter[] meters) |  |

**constructor**(**dictionary**: [IStiAppDictionary](../../Stimulsoft_Base/IStiAppDictionary.md), **table**: [DataTable](../../Stimulsoft_System/Data/DataTable.md), **meters**: IStiMeter[])

**Parameters**

- **dictionary** ([IStiAppDictionary](../../Stimulsoft_Base/IStiAppDictionary.md))  
- **table** ([DataTable](../../Stimulsoft_System/Data/DataTable.md))  
- **meters** (IStiMeter[])  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getDataColumnIndex** | number |  |
| **getDimensionIndex** | number |  |
| **getSystemVariableValue** | any |  |
| **getVariableValue** | any |  |
| **isSystemVariable** | any |  |
| **isVariable** | boolean |  |
| **runFunction** | any |  |

---

### Method Details

#### getDataColumnIndex

**getDataColumnIndex**(**columnName**: string): number

**Parameters**

- **columnName** (string)  

**Returns** number


---

#### getDimensionIndex

**getDimensionIndex**(**dimension**: IStiDimensionMeter): number

**Parameters**

- **dimension** (IStiDimensionMeter)  

**Returns** number


---

#### getSystemVariableValue

**getSystemVariableValue**(**name**: string): any

**Parameters**

- **name** (string)  

**Returns** any


---

#### getVariableValue

**getVariableValue**(**name**: string): any

**Parameters**

- **name** (string)  

**Returns** any


---

#### isSystemVariable

**isSystemVariable**(**name**: string): any

**Parameters**

- **name** (string)  

**Returns** any


---

#### isVariable

**isVariable**(**name**: string): boolean

**Parameters**

- **name** (string)  

**Returns** boolean


---

#### runFunction

**runFunction**(**funcName**: string, **args**: FunctionArgs): any

**Parameters**

- **funcName** (string)  
- **args** (FunctionArgs)  

**Returns** any

