---
title: "StiSignatureText Class"
---

## StiSignatureText Class

**Namespace:** `Stimulsoft.Report.Components`

### Inheritance

Implements: [IStiSignatureText](IStiSignatureText.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(string text, [StiTextHorAlignment](../Stimulsoft_Base_Drawing/StiTextHorAlignment.md) horAlignment, [StiVertAlignment](../Stimulsoft_Base_Drawing/StiVertAlignment.md) vertAlignment, [Font](../Stimulsoft_Base_Dashboard/Font.md) font, [Color](../Stimulsoft_System_Drawing/Color.md) color) |  |

**constructor**(**text**: string, **horAlignment**: [StiTextHorAlignment](../Stimulsoft_Base_Drawing/StiTextHorAlignment.md), **vertAlignment**: [StiVertAlignment](../Stimulsoft_Base_Drawing/StiVertAlignment.md), **font**: [Font](../Stimulsoft_Base_Dashboard/Font.md), **color**: [Color](../Stimulsoft_System_Drawing/Color.md))

**Parameters**

- **text** (string)  
- **horAlignment** ([StiTextHorAlignment](../Stimulsoft_Base_Drawing/StiTextHorAlignment.md))  
- **vertAlignment** ([StiVertAlignment](../Stimulsoft_Base_Drawing/StiVertAlignment.md))  
- **font** ([Font](../Stimulsoft_Base_Dashboard/Font.md))  
- **color** ([Color](../Stimulsoft_System_Drawing/Color.md))  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | any |  |
| **createFromJsonObject** `static` | [StiSignatureText](StiSignatureText.md) |  |
| **createFromXml** `static` | [StiSignatureText](StiSignatureText.md) |  |
| **isDefault** | boolean |  |
| **loadFromJsonObject** | void |  |
| **loadFromXml** | void |  |
| **meta** | [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[] |  |
| **saveToJsonObject** | [StiJson](../Stimulsoft_Base/StiJson.md) |  |

---

### Method Details

#### clone

**clone**(): any

**Returns** any


---

#### createFromJsonObject `static`

**createFromJsonObject**(**j**: [StiJson](../Stimulsoft_Base/StiJson.md)): [StiSignatureText](StiSignatureText.md)

**Parameters**

- **j** ([StiJson](../Stimulsoft_Base/StiJson.md))  

**Returns** [StiSignatureText](StiSignatureText.md)


---

#### createFromXml `static`

**createFromXml**(**xmlNode**: [XmlNode](../Stimulsoft_System_Xml/XmlNode.md)): [StiSignatureText](StiSignatureText.md)

**Parameters**

- **xmlNode** ([XmlNode](../Stimulsoft_System_Xml/XmlNode.md))  

**Returns** [StiSignatureText](StiSignatureText.md)


---

#### isDefault

**isDefault**(): boolean

**Returns** boolean


---

#### loadFromJsonObject

**loadFromJsonObject**(**j**: [StiJson](../Stimulsoft_Base/StiJson.md)): void

**Parameters**

- **j** ([StiJson](../Stimulsoft_Base/StiJson.md))  


---

#### loadFromXml

**loadFromXml**(**xn**: [XmlNode](../Stimulsoft_System_Xml/XmlNode.md)): void

**Parameters**

- **xn** ([XmlNode](../Stimulsoft_System_Xml/XmlNode.md))  


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
| **_hash** | [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[] |  |
| **color** | any |  |
| **font** | any |  |
| **horAlignment** | any |  |
| **text** | any |  |
| **vertAlignment** | any |  |
