---
title: "StiDialogInfo Class"
---

## StiDialogInfo Class

**Namespace:** `Stimulsoft.Report.Dictionary`

### Inheritance

Implements: [IStiJsonReportObject](../Stimulsoft_Base_JsonReportObject/IStiJsonReportObject.md), [ICloneable](../Stimulsoft_System/ICloneable.md)  

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **validationSettings** | [StiValidationSettings](StiValidationSettings.md) |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | [StiDialogInfo](StiDialogInfo.md) |  |
| **convert** `static` | string |  |
| **getDialogInfoItems** | [StiDialogInfoItem](../Stimulsoft_Report/StiDialogInfoItem.md)[] |  |
| **loadFromJsonObject** | void |  |
| **loadFromXml** | void |  |
| **meta** | [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[] |  |
| **orderBy** | [StiDialogInfoItem](../Stimulsoft_Report/StiDialogInfoItem.md)[] |  |
| **saveToJsonObject** | [StiJson](../Stimulsoft_Base/StiJson.md) |  |
| **setDialogInfoItems** | void |  |

---

### Method Details

#### clone

**clone**(): [StiDialogInfo](StiDialogInfo.md)

**Returns** [StiDialogInfo](StiDialogInfo.md)


---

#### convert `static`

**convert**(**value**: any): string

**Parameters**

- **value** (any)  

**Returns** string


---

#### getDialogInfoItems

**getDialogInfoItems**(**type**: [Stimulsoft.System.Type](../Stimulsoft_System/Type.md)): [StiDialogInfoItem](../Stimulsoft_Report/StiDialogInfoItem.md)[]

**Parameters**

- **type** ([Stimulsoft.System.Type](../Stimulsoft_System/Type.md))  

**Returns** [StiDialogInfoItem](../Stimulsoft_Report/StiDialogInfoItem.md)[]


---

#### loadFromJsonObject

**loadFromJsonObject**(**jObject**: [StiJson](../Stimulsoft_Base/StiJson.md), **report**: [StiReport](../Stimulsoft_Report/StiReport.md)): void

**Parameters**

- **jObject** ([StiJson](../Stimulsoft_Base/StiJson.md))  
- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  


---

#### loadFromXml

**loadFromXml**(**xmlNode**: [XmlNode](../Stimulsoft_System_Xml/XmlNode.md), **report**: [StiReport](../Stimulsoft_Report/StiReport.md)): void

**Parameters**

- **xmlNode** ([XmlNode](../Stimulsoft_System_Xml/XmlNode.md))  
- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  


---

#### meta

**meta**(): [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[]

**Returns** [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[]


---

#### orderBy

**orderBy**(**items**: [StiDialogInfoItem](../Stimulsoft_Report/StiDialogInfoItem.md)[]): [StiDialogInfoItem](../Stimulsoft_Report/StiDialogInfoItem.md)[]

**Parameters**

- **items** ([StiDialogInfoItem](../Stimulsoft_Report/StiDialogInfoItem.md)[])  

**Returns** [StiDialogInfoItem](../Stimulsoft_Report/StiDialogInfoItem.md)[]


---

#### saveToJsonObject

**saveToJsonObject**(**mode**: [StiJsonSaveMode](../Stimulsoft_Base/StiJsonSaveMode.md)): [StiJson](../Stimulsoft_Base/StiJson.md)

**Parameters**

- **mode** ([StiJsonSaveMode](../Stimulsoft_Base/StiJsonSaveMode.md))  

**Returns** [StiJson](../Stimulsoft_Base/StiJson.md)


---

#### setDialogInfoItems

**setDialogInfoItems**(**items**: [StiDialogInfoItem](../Stimulsoft_Report/StiDialogInfoItem.md)[], **type**: [Stimulsoft.System.Type](../Stimulsoft_System/Type.md)): void

**Parameters**

- **items** ([StiDialogInfoItem](../Stimulsoft_Report/StiDialogInfoItem.md)[])  
- **type** ([Stimulsoft.System.Type](../Stimulsoft_System/Type.md))  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **_hash** | [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[] |  |
| **allowUserValues** | any |  |
| **bindingValue** | any |  |
| **bindingValuesColumn** | any |  |
| **bindingVariable** | StiVariable |  |
| **checkedColumn** | any |  |
| **checkedStates** | boolean[] |  |
| **dateTimeType** | any |  |
| **filterExpression** | any |  |
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
| **itemsInitializationType** | any |  |
| **jsonLoadedBindingVariableName** | string |  |
| **keyObject** | any |  |
| **keyObject** | any |  |
| **keyObject** | any |  |
| **keyObject** | any |  |
| **keyObject** | any |  |
| **keyObject** | any |  |
| **keyObject** | any |  |
| **keyObject** | any |  |
| **keyObject** | any |  |
| **keyObject** | any |  |
| **keyObject** | any |  |
| **keyObject** | any |  |
| **keyObject** | any |  |
| **keyObject** | any |  |
| **keyObject** | any |  |
| **keyObject** | any |  |
| **keyObject** | any |  |
| **keyObject** | any |  |
| **keyObject** | any |  |
| **keyObject** | any |  |
| **keyObject** | any |  |
| **keyObject** | any |  |
| **keyObject** | any |  |
| **keyObject** | any |  |
| **keyObject** | any |  |
| **keyObject** | any |  |
| **keyObject** | any |  |
| **keyObject** | any |  |
| **keyObjectTo** | any |  |
| **keyObjectTo** | any |  |
| **keyObjectTo** | any |  |
| **keyObjectTo** | any |  |
| **keyObjectTo** | any |  |
| **keyObjectTo** | any |  |
| **keyObjectTo** | any |  |
| **keyObjectTo** | any |  |
| **keyObjectTo** | any |  |
| **keys** | string[] |  |
| **keysColumn** | any |  |
| **mask** | any |  |
| **rememberSelection** | any |  |
| **report** | [StiReport](../Stimulsoft_Report/StiReport.md) |  |
| **sortDirection** | any |  |
| **sortField** | any |  |
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
| **type** | any |  |
| **type** | any |  |
| **type** | any |  |
| **type** | any |  |
| **type** | any |  |
| **validation** | any |  |
| **values** | string[] |  |
| **valuesBindingList** | any[][] |  |
| **valuesColumn** | any |  |
| **xmlLoadedBindingVariable** | [XmlNode](../Stimulsoft_System_Xml/XmlNode.md) |  |
