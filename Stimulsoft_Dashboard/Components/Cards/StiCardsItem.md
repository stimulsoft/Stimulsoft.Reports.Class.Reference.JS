---
title: "StiCardsItem Class"
---

## StiCardsItem Class

**Namespace:** `Stimulsoft.Dashboard.Components.Cards`

### Inheritance

Implements: [ICloneable](../../../Stimulsoft_System/ICloneable.md)  

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | any |  |
| **loadFromJsonObject** | void |  |
| **loadFromXml** | void |  |
| **meta** | [StiMeta](../../../Stimulsoft_Base/Meta/StiMeta.md)[] |  |
| **saveToJsonObject** | [StiJson](../../../Stimulsoft_Base/StiJson.md) |  |

---

### Method Details

#### clone

**clone**(): any

**Returns** any


---

#### loadFromJsonObject

**loadFromJsonObject**(**j**: [StiJson](../../../Stimulsoft_Base/StiJson.md)): void

**Parameters**

- **j** ([StiJson](../../../Stimulsoft_Base/StiJson.md))  


---

#### loadFromXml

**loadFromXml**(**xn**: [XmlNode](../../../Stimulsoft_System/Xml/XmlNode.md)): void

**Parameters**

- **xn** ([XmlNode](../../../Stimulsoft_System/Xml/XmlNode.md))  


---

#### meta

**meta**(): [StiMeta](../../../Stimulsoft_Base/Meta/StiMeta.md)[]

**Returns** [StiMeta](../../../Stimulsoft_Base/Meta/StiMeta.md)[]


---

#### saveToJsonObject

**saveToJsonObject**(**mode**: [StiJsonSaveMode](../../../Stimulsoft_Base/StiJsonSaveMode.md)): [StiJson](../../../Stimulsoft_Base/StiJson.md)

**Parameters**

- **mode** ([StiJsonSaveMode](../../../Stimulsoft_Base/StiJsonSaveMode.md))  

**Returns** [StiJson](../../../Stimulsoft_Base/StiJson.md)


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **_hash** | [StiMeta](../../../Stimulsoft_Base/Meta/StiMeta.md)[] |  |
