---
title: "Sti3dOptions Class"
---

## Sti3dOptions Class

**Namespace:** `Stimulsoft.Report.Chart`

### Inheritance

Implements: [ISti3dOptions](../Stimulsoft_Report/Chart/ISti3dOptions.md)  

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **opacity** | number |  |
| **propName** | string |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **loadFromJsonObject** | void |  |
| **loadFromXml** | void |  |
| **meta** | [StiMeta](../Stimulsoft_Base/Meta/StiMeta.md)[] |  |
| **saveToJsonObject** | [StiJson](../Stimulsoft_Base/StiJson.md) |  |

---

### Method Details

#### loadFromJsonObject

**loadFromJsonObject**(**j**: [StiJson](../Stimulsoft_Base/StiJson.md)): void

**Parameters**

- **j** ([StiJson](../Stimulsoft_Base/StiJson.md))  


---

#### loadFromXml

**loadFromXml**(**xn**: [XmlNode](../Stimulsoft_System/Xml/XmlNode.md)): void

**Parameters**

- **xn** ([XmlNode](../Stimulsoft_System/Xml/XmlNode.md))  


---

#### meta

**meta**(): [StiMeta](../Stimulsoft_Base/Meta/StiMeta.md)[]

**Returns** [StiMeta](../Stimulsoft_Base/Meta/StiMeta.md)[]


---

#### saveToJsonObject

**saveToJsonObject**(**mode**: [StiJsonSaveMode](../Stimulsoft_Base/StiJsonSaveMode.md)): [StiJson](../Stimulsoft_Base/StiJson.md)

**Parameters**

- **mode** ([StiJsonSaveMode](../Stimulsoft_Base/StiJsonSaveMode.md))  

**Returns** [StiJson](../Stimulsoft_Base/StiJson.md)

