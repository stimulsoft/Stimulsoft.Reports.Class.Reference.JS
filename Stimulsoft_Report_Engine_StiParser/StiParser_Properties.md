---
title: "StiParser_Properties Class"
---

## StiParser_Properties Class

**Namespace:** `Stimulsoft.Report.Engine.StiParser`

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **componentsList** | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md) |  |
| **constantsList** | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md) |  |
| **functionsList** `static` | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md) |  |
| **keywordsList** `static` | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md) |  |
| **methodsHash** `static` | Map<[StiFunctionType](../Stimulsoft_Report_Engine/StiFunctionType.md), [StiParserMethodInfo](StiParserMethodInfo.md)[]> |  |
| **methodsList** `static` | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md) |  |
| **namespacesList** `static` | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md) |  |
| **operatorsList** | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md) |  |
| **parametersList** `static` | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md) |  |
| **propertiesList** `static` | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md) |  |
| **systemVariablesList** `static` | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md) |  |
| **typesList** `static` | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md) |  |
| **userFunctionsList** | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md) |  |
| **variablesList** | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md) |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **check_constantsList** `static` | void |  |
| **check_operatorsList** `static` | void |  |
| **get_category** | [StiParserDataType](../Stimulsoft_Report_Engine/StiParserDataType.md) |  |

---

### Method Details

#### check_constantsList `static`

**check_constantsList**(): void


---

#### check_operatorsList `static`

**check_operatorsList**(): void


---

#### get_category

**get_category**(**par**: any): [StiParserDataType](../Stimulsoft_Report_Engine/StiParserDataType.md)

**Parameters**

- **par** (any)  

**Returns** [StiParserDataType](../Stimulsoft_Report_Engine/StiParserDataType.md)


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **checkSyntaxMode** | any |  |
| **expressionPosition** | any |  |
| **list** | any |  |
| **list** | any |  |
| **namespaceObj** | any |  |
| **report** | [StiReport](../Stimulsoft_Report/StiReport.md) |  |
| **syntaxCaseSensitive** | any |  |
