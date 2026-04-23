---
title: "StiMeter Class"
---

## StiMeter Class

**Namespace:** `Stimulsoft.Dashboard.Components`

### Inheritance

Implements: IStiMeter, [IStiLocalizedMeter](../../Stimulsoft_Base/Meters/IStiLocalizedMeter.md), [IStiJsonReportObject](../../Stimulsoft_Base/JsonReportObject/IStiJsonReportObject.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(string key, string expression, string label) |  |

**constructor**(**key**: string, **expression**: string, **label**: string)

**Parameters**

- **key** (string)  
- **expression** (string)  
- **label** (string)  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **localizedName** | string | Localized name of this component type. |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | any |  |
| **getUniqueCode** | number |  |
| **implements** | any[] |  |
| **isDefault** | boolean |  |
| **loadFromJsonObject** | void |  |
| **loadFromString** | void |  |
| **loadFromXml** | void |  |
| **meta** | [StiMeta](../../Stimulsoft_Base/Meta/StiMeta.md)[] |  |
| **saveToJsonObject** | [StiJson](../../Stimulsoft_Base/StiJson.md) |  |
| **saveToString** | string |  |
| **toString** | string |  |

---

### Method Details

#### clone

**clone**(**cloneProperties**: any, **cloneComponents**: any): any

**Parameters**

- **cloneProperties** (any)  
- **cloneComponents** (any)  

**Returns** any


---

#### getUniqueCode

**getUniqueCode**(): number

**Returns** number


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

**loadFromJsonObject**(**j**: [StiJson](../../Stimulsoft_Base/StiJson.md)): void

**Parameters**

- **j** ([StiJson](../../Stimulsoft_Base/StiJson.md))  


---

#### loadFromString

**loadFromString**(**str**: string): void

**Parameters**

- **str** (string)  


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


---

#### saveToString

**saveToString**(): string

**Returns** string


---

#### toString

**toString**(): string

**Returns** string


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **_hash** | [StiMeta](../../Stimulsoft_Base/Meta/StiMeta.md)[] |  |
