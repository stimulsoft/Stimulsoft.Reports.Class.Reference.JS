---
title: "StiTitle Class"
---

## StiTitle Class

**Namespace:** `Stimulsoft.Dashboard.Components`

### Inheritance

Implements: [ICloneable](../Stimulsoft_System/ICloneable.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(string text, [Color](../Stimulsoft_System_Drawing/Color.md) foreColor, [Color](../Stimulsoft_System_Drawing/Color.md) backColor, [Font](../Stimulsoft_Base_Dashboard/Font.md) font, [StiHorAlignment](../Stimulsoft_Base_Drawing/StiHorAlignment.md) alignment, boolean visible, [StiTextSizeMode](../Stimulsoft_Report_Dashboard/StiTextSizeMode.md) sizeMode, [StiTitlePadding](../Stimulsoft_Report_Dashboard/StiTitlePadding.md) padding) |  |

**constructor**(**text**: string, **foreColor**: [Color](../Stimulsoft_System_Drawing/Color.md), **backColor**: [Color](../Stimulsoft_System_Drawing/Color.md), **font**: [Font](../Stimulsoft_Base_Dashboard/Font.md), **alignment**: [StiHorAlignment](../Stimulsoft_Base_Drawing/StiHorAlignment.md), **visible**: boolean, **sizeMode**: [StiTextSizeMode](../Stimulsoft_Report_Dashboard/StiTextSizeMode.md), **padding**: [StiTitlePadding](../Stimulsoft_Report_Dashboard/StiTitlePadding.md))

**Parameters**

- **text** (string)  
- **foreColor** ([Color](../Stimulsoft_System_Drawing/Color.md))  
- **backColor** ([Color](../Stimulsoft_System_Drawing/Color.md))  
- **font** ([Font](../Stimulsoft_Base_Dashboard/Font.md))  
- **alignment** ([StiHorAlignment](../Stimulsoft_Base_Drawing/StiHorAlignment.md))  
- **visible** (boolean)  
- **sizeMode** ([StiTextSizeMode](../Stimulsoft_Report_Dashboard/StiTextSizeMode.md))  
- **padding** ([StiTitlePadding](../Stimulsoft_Report_Dashboard/StiTitlePadding.md))  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | any | Creates a new object that is a copy of the current instance. |
| **createFromJsonObject** `static` | [StiTitle](StiTitle.md) |  |
| **createFromXml** `static` | [StiTitle](StiTitle.md) |  |
| **implements** | any[] |  |
| **loadFromJsonObject** | void |  |
| **loadFromXml** | void |  |
| **meta** | [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[] |  |
| **saveToJsonObject** | [StiJson](../Stimulsoft_Base/StiJson.md) |  |

---

### Method Details

#### clone

**clone**(): any

Creates a new  object that is a copy of the current instance.

**Returns** any — A new object that is a copy of this instance.


---

#### createFromJsonObject `static`

**createFromJsonObject**(**jObject**: [StiJson](../Stimulsoft_Base/StiJson.md)): [StiTitle](StiTitle.md)

**Parameters**

- **jObject** ([StiJson](../Stimulsoft_Base/StiJson.md))  

**Returns** [StiTitle](StiTitle.md)


---

#### createFromXml `static`

**createFromXml**(**xmlNode**: [XmlNode](../Stimulsoft_System_Xml/XmlNode.md)): [StiTitle](StiTitle.md)

**Parameters**

- **xmlNode** ([XmlNode](../Stimulsoft_System_Xml/XmlNode.md))  

**Returns** [StiTitle](StiTitle.md)


---

#### implements

**implements**(): any[]

**Returns** any[]


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
| **IStiTitlePadding** | any |  |
| **_hash** | [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[] |  |
| **backColor** | any | Gets or sets a back color. |
| **font** | any | Gets or set font which will be used for title drawing. |
| **foreColor** | any | Gets or sets font color for this element. |
| **horAlignment** | any | Gets or sets title text alignment. |
| **padding** | any | Specifies the interior spacing of the title. |
| **sizeMode** | any | Specifies how the text output in the component area depends on the text size. |
| **text** | any | Gets or sets title text. |
| **visible** | any | Gets or sets visibility of title. |
