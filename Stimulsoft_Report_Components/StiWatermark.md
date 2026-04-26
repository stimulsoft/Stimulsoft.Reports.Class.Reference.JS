---
title: "StiWatermark Class"
---

## StiWatermark Class

**Namespace:** `Stimulsoft.Report.Components`

### Inheritance

Implements: [ICloneable](../Stimulsoft_System/ICloneable.md), [IStiJsonReportObject](../Stimulsoft_Base_JsonReportObject/IStiJsonReportObject.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md) textBrush, any text, any angle, [Font](../Stimulsoft_Base_Dashboard/Font.md) font, any showBehind, any enabled, any aspectRatio, any rightToLeft) |  |

**constructor**(**textBrush**: [StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md), **text**: any, **angle**: any, **font**: [Font](../Stimulsoft_Base_Dashboard/Font.md), **showBehind**: any, **enabled**: any, **aspectRatio**: any, **rightToLeft**: any)

**Parameters**

- **textBrush** ([StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md))  
- **text** (any)  
- **angle** (any)  
- **font** ([Font](../Stimulsoft_Base_Dashboard/Font.md))  
- **showBehind** (any)  
- **enabled** (any)  
- **aspectRatio** (any)  
- **rightToLeft** (any)  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **image** | [Image](../Stimulsoft_System_Drawing/Image.md) |  |
| **imageHyperlink** | string |  |
| **imageTransparency** | number |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | [StiWatermark](StiWatermark.md) |  |
| **getImage** | [Image](../Stimulsoft_System_Drawing/Image.md) |  |
| **implements** | any[] |  |
| **loadFromJsonObject** | void |  |
| **loadFromXml** | void |  |
| **meta** | [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[] |  |
| **resetImage** | void |  |
| **saveToJsonObject** | [StiJson](../Stimulsoft_Base/StiJson.md) |  |

---

### Method Details

#### clone

**clone**(): [StiWatermark](StiWatermark.md)

**Returns** [StiWatermark](StiWatermark.md)


---

#### getImage

**getImage**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md)): [Image](../Stimulsoft_System_Drawing/Image.md)

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  

**Returns** [Image](../Stimulsoft_System_Drawing/Image.md)


---

#### implements

**implements**(): any[]

**Returns** any[]


---

#### loadFromJsonObject

**loadFromJsonObject**(**jObject**: [StiJson](../Stimulsoft_Base/StiJson.md)): void

**Parameters**

- **jObject** ([StiJson](../Stimulsoft_Base/StiJson.md))  


---

#### loadFromXml

**loadFromXml**(**xmlNode**: [XmlNode](../Stimulsoft_System_Xml/XmlNode.md)): void

**Parameters**

- **xmlNode** ([XmlNode](../Stimulsoft_System_Xml/XmlNode.md))  


---

#### meta

**meta**(): [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[]

**Returns** [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[]


---

#### resetImage

**resetImage**(): void


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
| **angle** | any |  |
| **aspectRatio** | any |  |
| **enabled** | any |  |
| **enabledExpression** | any |  |
| **font** | any |  |
| **imageAlignment** | any |  |
| **imageMultipleFactor** | any |  |
| **imageStretch** | any |  |
| **imageTiling** | any |  |
| **rightToLeft** | any |  |
| **showBehind** | any |  |
| **showImageBehind** | any |  |
| **text** | any |  |
| **textBrush** | [StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md) |  |
| **value** | any |  |
