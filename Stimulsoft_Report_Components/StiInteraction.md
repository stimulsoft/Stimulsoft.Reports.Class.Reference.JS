---
title: "StiInteraction Class"
---

## StiInteraction Class

**Namespace:** `Stimulsoft.Report.Components`

### Inheritance

Implements: [ICloneable](../Stimulsoft_System/ICloneable.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**() |  |

**constructor**()


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **bookmark** | string |  |
| **drillDownPage** | StiPage |  |
| **drillDownParameter1** | [StiDrillDownParameter](StiDrillDownParameter.md) |  |
| **drillDownParameter10** | [StiDrillDownParameter](StiDrillDownParameter.md) |  |
| **drillDownParameter2** | [StiDrillDownParameter](StiDrillDownParameter.md) |  |
| **drillDownParameter3** | [StiDrillDownParameter](StiDrillDownParameter.md) |  |
| **drillDownParameter4** | [StiDrillDownParameter](StiDrillDownParameter.md) |  |
| **drillDownParameter5** | [StiDrillDownParameter](StiDrillDownParameter.md) |  |
| **drillDownParameter6** | [StiDrillDownParameter](StiDrillDownParameter.md) |  |
| **drillDownParameter7** | [StiDrillDownParameter](StiDrillDownParameter.md) |  |
| **drillDownParameter8** | [StiDrillDownParameter](StiDrillDownParameter.md) |  |
| **drillDownParameter9** | [StiDrillDownParameter](StiDrillDownParameter.md) |  |
| **hyperlink** | string |  |
| **tag** | string |  |
| **toolTip** | string |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | [StiInteraction](StiInteraction.md) |  |
| **getReport** | any |  |
| **getSortColumns** | string[] |  |
| **getSortColumnsString** | string |  |
| **getSortDataBandName** | string |  |
| **implements** | any[] |  |
| **isDefault** | boolean |  |
| **loadFromJsonObject** | void |  |
| **loadFromXml** | void |  |
| **loadInteractionFromJsonObject** `static` | [StiInteraction](StiInteraction.md) |  |
| **loadInteractionFromXml** `static` | [Stimulsoft.Report.Components.StiInteraction](StiInteraction.md) |  |
| **meta** | [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[] |  |
| **saveToJsonObject** | [StiJson](../Stimulsoft_Base/StiJson.md) |  |

---

### Method Details

#### clone

**clone**(): [StiInteraction](StiInteraction.md)

**Returns** [StiInteraction](StiInteraction.md)


---

#### getReport

**getReport**(): any

**Returns** any


---

#### getSortColumns

**getSortColumns**(): string[]

**Returns** string[]


---

#### getSortColumnsString

**getSortColumnsString**(): string

**Returns** string


---

#### getSortDataBandName

**getSortDataBandName**(): string

**Returns** string


---

#### implements

**implements**(): any[]

**Returns** any[]


---

#### isDefault

**isDefault**(): boolean

**Returns** boolean


---

#### loadFromJsonObject

**loadFromJsonObject**(**jObject**: [StiJson](../Stimulsoft_Base/StiJson.md)): void

**Parameters**

- **jObject** ([StiJson](../Stimulsoft_Base/StiJson.md))  


---

#### loadFromXml

**loadFromXml**(**xmlNode**: [XmlNode](../Stimulsoft_System_Xml/XmlNode.md)): void

**Parameters**

- **xmlNode** ([XmlNode](../Stimulsoft_System_Xml/XmlNode.md))  


---

#### loadInteractionFromJsonObject `static`

**loadInteractionFromJsonObject**(**jObject**: [StiJson](../Stimulsoft_Base/StiJson.md)): [StiInteraction](StiInteraction.md)

**Parameters**

- **jObject** ([StiJson](../Stimulsoft_Base/StiJson.md))  

**Returns** [StiInteraction](StiInteraction.md)


---

#### loadInteractionFromXml `static`

**loadInteractionFromXml**(**xmlNode**: [XmlNode](../Stimulsoft_System_Xml/XmlNode.md)): [Stimulsoft.Report.Components.StiInteraction](StiInteraction.md)

**Parameters**

- **xmlNode** ([XmlNode](../Stimulsoft_System_Xml/XmlNode.md))  

**Returns** [Stimulsoft.Report.Components.StiInteraction](StiInteraction.md)


---

#### meta

**meta**(): [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[]

**Returns** [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[]


---

#### saveToJsonObject

**saveToJsonObject**(**mode**: [StiJsonSaveMode](../Stimulsoft_Base/StiJsonSaveMode.md)): [StiJson](../Stimulsoft_Base/StiJson.md)

**Parameters**

- **mode** ([StiJsonSaveMode](../Stimulsoft_Base/StiJsonSaveMode.md))  

**Returns** [StiJson](../Stimulsoft_Base/StiJson.md)


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **IAsIs** | any |  |
| **_hash** | [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[] |  |
| **drillDownEnabled** | any |  |
| **drillDownMode** | [StiDrillDownMode](StiDrillDownMode.md) |  |
| **drillDownPageGuid** | string |  |
| **drillDownReport** | any |  |
| **parentComponent** | StiComponent |  |
| **sortingColumn** | any |  |
| **sortingDirection** | [StiInteractionSortDirection](StiInteractionSortDirection.md) |  |
| **sortingEnabled** | any |  |
| **sortingIndex** | any |  |
