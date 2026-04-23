---
title: "StiGlobalizationContainer Class"
---

## StiGlobalizationContainer Class

**Namespace:** `Stimulsoft.Report`

### Inheritance

Implements: [IStiJsonReportObject](../Stimulsoft_Base/JsonReportObject/IStiJsonReportObject.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(any cultureName) |  |

**constructor**(**cultureName**: any)

**Parameters**

- **cultureName** (any)  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **items** | StiGlobalizationItemCollection |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **fillItemsFromReport** | void |  |
| **getAllStringsForReport** | [Hashtable](../Stimulsoft_System/Collections/Hashtable.md) |  |
| **loadFromJsonObject** | void |  |
| **loadFromXmlObject** | void |  |
| **localizeReport** | void |  |
| **removeUnlocalizedItemsFromReport** | void |  |
| **saveToJsonObject** | [StiJson](../Stimulsoft_Base/StiJson.md) |  |

---

### Method Details

#### fillItemsFromReport

**fillItemsFromReport**(**report**: [StiReport](StiReport.md)): void

**Parameters**

- **report** ([StiReport](StiReport.md))  


---

#### getAllStringsForReport

**getAllStringsForReport**(**report**: [StiReport](StiReport.md)): [Hashtable](../Stimulsoft_System/Collections/Hashtable.md)

**Parameters**

- **report** ([StiReport](StiReport.md))  

**Returns** [Hashtable](../Stimulsoft_System/Collections/Hashtable.md)


---

#### loadFromJsonObject

**loadFromJsonObject**(**jObject**: [StiJson](../Stimulsoft_Base/StiJson.md)): void

**Parameters**

- **jObject** ([StiJson](../Stimulsoft_Base/StiJson.md))  


---

#### loadFromXmlObject

**loadFromXmlObject**(**xmlNode**: [XmlNode](../Stimulsoft_System/Xml/XmlNode.md)): void

**Parameters**

- **xmlNode** ([XmlNode](../Stimulsoft_System/Xml/XmlNode.md))  


---

#### localizeReport

**localizeReport**(**report**: [StiReport](StiReport.md)): void

**Parameters**

- **report** ([StiReport](StiReport.md))  


---

#### removeUnlocalizedItemsFromReport

**removeUnlocalizedItemsFromReport**(**report**: [StiReport](StiReport.md)): void

**Parameters**

- **report** ([StiReport](StiReport.md))  


---

#### saveToJsonObject

**saveToJsonObject**(**mode**: [StiJsonSaveMode](../Stimulsoft_Base/StiJsonSaveMode.md)): [StiJson](../Stimulsoft_Base/StiJson.md)

**Parameters**

- **mode** ([StiJsonSaveMode](../Stimulsoft_Base/StiJsonSaveMode.md))  

**Returns** [StiJson](../Stimulsoft_Base/StiJson.md)

