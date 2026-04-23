---
title: "StiTitle Class"
---

## StiTitle Class

**Namespace:** `Stimulsoft.Dashboard.Components`

### Inheritance

Implements: [ICloneable](../../Stimulsoft_System/ICloneable.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(string text, [Color](../../Stimulsoft_System/Drawing/Color.md) foreColor, [Color](../../Stimulsoft_System/Drawing/Color.md) backColor, [Font](../../Stimulsoft_Base/Dashboard/Font.md) font, [StiHorAlignment](../../Stimulsoft_Base/Drawing/StiHorAlignment.md) alignment, boolean visible, [StiTextSizeMode](../../Stimulsoft_Report/Dashboard/StiTextSizeMode.md) sizeMode, [StiTitlePadding](../../Stimulsoft_Report/Dashboard/StiTitlePadding.md) padding) |  |

**constructor**(**text**: string, **foreColor**: [Color](../../Stimulsoft_System/Drawing/Color.md), **backColor**: [Color](../../Stimulsoft_System/Drawing/Color.md), **font**: [Font](../../Stimulsoft_Base/Dashboard/Font.md), **alignment**: [StiHorAlignment](../../Stimulsoft_Base/Drawing/StiHorAlignment.md), **visible**: boolean, **sizeMode**: [StiTextSizeMode](../../Stimulsoft_Report/Dashboard/StiTextSizeMode.md), **padding**: [StiTitlePadding](../../Stimulsoft_Report/Dashboard/StiTitlePadding.md))

**Parameters**

- **text** (string)  
- **foreColor** ([Color](../../Stimulsoft_System/Drawing/Color.md))  
- **backColor** ([Color](../../Stimulsoft_System/Drawing/Color.md))  
- **font** ([Font](../../Stimulsoft_Base/Dashboard/Font.md))  
- **alignment** ([StiHorAlignment](../../Stimulsoft_Base/Drawing/StiHorAlignment.md))  
- **visible** (boolean)  
- **sizeMode** ([StiTextSizeMode](../../Stimulsoft_Report/Dashboard/StiTextSizeMode.md))  
- **padding** ([StiTitlePadding](../../Stimulsoft_Report/Dashboard/StiTitlePadding.md))  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | any | Creates a new object that is a copy of the current instance. |
| **createFromJsonObject** `static` | [StiTitle](StiTitle.md) |  |
| **createFromXml** `static` | [StiTitle](StiTitle.md) |  |
| **implements** | any[] |  |
| **loadFromJsonObject** | void |  |
| **loadFromXml** | void |  |
| **meta** | [StiMeta](../../Stimulsoft_Base/Meta/StiMeta.md)[] |  |
| **saveToJsonObject** | [StiJson](../../Stimulsoft_Base/StiJson.md) |  |

---

### Method Details

#### clone

**clone**(): any

Creates a new  object that is a copy of the current instance.

**Returns** any — A new object that is a copy of this instance.


---

#### createFromJsonObject `static`

**createFromJsonObject**(**jObject**: [StiJson](../../Stimulsoft_Base/StiJson.md)): [StiTitle](StiTitle.md)

**Parameters**

- **jObject** ([StiJson](../../Stimulsoft_Base/StiJson.md))  

**Returns** [StiTitle](StiTitle.md)


---

#### createFromXml `static`

**createFromXml**(**xmlNode**: [XmlNode](../../Stimulsoft_System/Xml/XmlNode.md)): [StiTitle](StiTitle.md)

**Parameters**

- **xmlNode** ([XmlNode](../../Stimulsoft_System/Xml/XmlNode.md))  

**Returns** [StiTitle](StiTitle.md)


---

#### implements

**implements**(): any[]

**Returns** any[]


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
