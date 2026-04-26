---
title: "StiSignatureIcon Class"
---

## StiSignatureIcon Class

**Namespace:** `Stimulsoft.Report.Components`

### Inheritance

Implements: [IStiSignatureIcon](IStiSignatureIcon.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(boolean visible, [Color](../Stimulsoft_System_Drawing/Color.md) background, [Color](../Stimulsoft_System_Drawing/Color.md) foreground) |  |

**constructor**(**visible**: boolean, **background**: [Color](../Stimulsoft_System_Drawing/Color.md), **foreground**: [Color](../Stimulsoft_System_Drawing/Color.md))

**Parameters**

- **visible** (boolean)  
- **background** ([Color](../Stimulsoft_System_Drawing/Color.md))  
- **foreground** ([Color](../Stimulsoft_System_Drawing/Color.md))  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | any |  |
| **createFromJsonObject** `static` | [StiSignatureIcon](StiSignatureIcon.md) |  |
| **createFromXml** `static` | [StiSignatureIcon](StiSignatureIcon.md) |  |
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

**createFromJsonObject**(**j**: [StiJson](../Stimulsoft_Base/StiJson.md)): [StiSignatureIcon](StiSignatureIcon.md)

**Parameters**

- **j** ([StiJson](../Stimulsoft_Base/StiJson.md))  

**Returns** [StiSignatureIcon](StiSignatureIcon.md)


---

#### createFromXml `static`

**createFromXml**(**xmlNode**: [XmlNode](../Stimulsoft_System_Xml/XmlNode.md)): [StiSignatureIcon](StiSignatureIcon.md)

**Parameters**

- **xmlNode** ([XmlNode](../Stimulsoft_System_Xml/XmlNode.md))  

**Returns** [StiSignatureIcon](StiSignatureIcon.md)


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
| **background** | any |  |
| **foreground** | any |  |
| **visible** | any |  |
