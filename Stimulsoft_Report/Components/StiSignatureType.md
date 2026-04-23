---
title: "StiSignatureType Class"
---

## StiSignatureType Class

**Namespace:** `Stimulsoft.Report.Components`

### Inheritance

Implements: [IStiSignatureType](IStiSignatureType.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(string fullName, string initials, [StiSignatureStyle](../../Stimulsoft_Base/SignatureFonts/StiSignatureStyle.md) style) |  |

**constructor**(**fullName**: string, **initials**: string, **style**: [StiSignatureStyle](../../Stimulsoft_Base/SignatureFonts/StiSignatureStyle.md))

**Parameters**

- **fullName** (string)  
- **initials** (string)  
- **style** ([StiSignatureStyle](../../Stimulsoft_Base/SignatureFonts/StiSignatureStyle.md))  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | any |  |
| **createFromJsonObject** `static` | [StiSignatureType](StiSignatureType.md) |  |
| **createFromXml** `static` | [StiSignatureType](StiSignatureType.md) |  |
| **isDefault** | boolean |  |
| **loadFromJsonObject** | void |  |
| **loadFromXml** | void |  |
| **meta** | [StiMeta](../../Stimulsoft_Base/Meta/StiMeta.md)[] |  |
| **saveToJsonObject** | [StiJson](../../Stimulsoft_Base/StiJson.md) |  |

---

### Method Details

#### clone

**clone**(): any

**Returns** any


---

#### createFromJsonObject `static`

**createFromJsonObject**(**j**: [StiJson](../../Stimulsoft_Base/StiJson.md)): [StiSignatureType](StiSignatureType.md)

**Parameters**

- **j** ([StiJson](../../Stimulsoft_Base/StiJson.md))  

**Returns** [StiSignatureType](StiSignatureType.md)


---

#### createFromXml `static`

**createFromXml**(**xmlNode**: [XmlNode](../../Stimulsoft_System/Xml/XmlNode.md)): [StiSignatureType](StiSignatureType.md)

**Parameters**

- **xmlNode** ([XmlNode](../../Stimulsoft_System/Xml/XmlNode.md))  

**Returns** [StiSignatureType](StiSignatureType.md)


---

#### isDefault

**isDefault**(): boolean

**Returns** boolean


---

#### loadFromJsonObject

**loadFromJsonObject**(**j**: [StiJson](../../Stimulsoft_Base/StiJson.md)): void

**Parameters**

- **j** ([StiJson](../../Stimulsoft_Base/StiJson.md))  


---

#### loadFromXml

**loadFromXml**(**xn**: [XmlNode](../../Stimulsoft_System/Xml/XmlNode.md)): void

**Parameters**

- **xn** ([XmlNode](../../Stimulsoft_System/Xml/XmlNode.md))  


---

#### meta

**meta**(): [StiMeta](../../Stimulsoft_Base/Meta/StiMeta.md)[]

**Returns** [StiMeta](../../Stimulsoft_Base/Meta/StiMeta.md)[]


---

#### saveToJsonObject

**saveToJsonObject**(**mode**: [StiJsonSaveMode](../../Stimulsoft_Base/StiJsonSaveMode.md)): [StiJson](../../Stimulsoft_Base/StiJson.md)

**Parameters**

- **mode** ([StiJsonSaveMode](../../Stimulsoft_Base/StiJsonSaveMode.md))  

**Returns** [StiJson](../../Stimulsoft_Base/StiJson.md)


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **_hash** | [StiMeta](../../Stimulsoft_Base/Meta/StiMeta.md)[] |  |
