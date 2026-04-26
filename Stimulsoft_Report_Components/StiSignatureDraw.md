---
title: "StiSignatureDraw Class"
---

## StiSignatureDraw Class

**Namespace:** `Stimulsoft.Report.Components`

### Inheritance

Implements: [IStiSignatureDraw](IStiSignatureDraw.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(number[] image, boolean aspectRatio, [StiHorAlignment](../Stimulsoft_Base_Drawing/StiHorAlignment.md) horAlignment, [StiVertAlignment](../Stimulsoft_Base_Drawing/StiVertAlignment.md) vertAlignment, boolean stretch) |  |

**constructor**(**image**: number[], **aspectRatio**: boolean, **horAlignment**: [StiHorAlignment](../Stimulsoft_Base_Drawing/StiHorAlignment.md), **vertAlignment**: [StiVertAlignment](../Stimulsoft_Base_Drawing/StiVertAlignment.md), **stretch**: boolean)

**Parameters**

- **image** (number[])  
- **aspectRatio** (boolean)  
- **horAlignment** ([StiHorAlignment](../Stimulsoft_Base_Drawing/StiHorAlignment.md))  
- **vertAlignment** ([StiVertAlignment](../Stimulsoft_Base_Drawing/StiVertAlignment.md))  
- **stretch** (boolean)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | any |  |
| **createFromJsonObject** `static` | [StiSignatureDraw](StiSignatureDraw.md) |  |
| **createFromXml** `static` | [StiSignatureDraw](StiSignatureDraw.md) |  |
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

**createFromJsonObject**(**j**: [StiJson](../Stimulsoft_Base/StiJson.md)): [StiSignatureDraw](StiSignatureDraw.md)

**Parameters**

- **j** ([StiJson](../Stimulsoft_Base/StiJson.md))  

**Returns** [StiSignatureDraw](StiSignatureDraw.md)


---

#### createFromXml `static`

**createFromXml**(**xmlNode**: [XmlNode](../Stimulsoft_System_Xml/XmlNode.md)): [StiSignatureDraw](StiSignatureDraw.md)

**Parameters**

- **xmlNode** ([XmlNode](../Stimulsoft_System_Xml/XmlNode.md))  

**Returns** [StiSignatureDraw](StiSignatureDraw.md)


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
| **aspectRatio** | any |  |
| **horAlignment** | any |  |
| **image** | number[] |  |
| **stretch** | any |  |
| **vertAlignment** | any |  |
