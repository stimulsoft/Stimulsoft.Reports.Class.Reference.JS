---
title: "StiWatermark Class"
---

## StiWatermark Class

**Namespace:** `Stimulsoft.Report.Components`

### Inheritance

Implements: [ICloneable](../../Stimulsoft_System/ICloneable.md), [IStiJsonReportObject](../../Stimulsoft_Base/JsonReportObject/IStiJsonReportObject.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([StiBrush](../../Stimulsoft_Base/Drawing/StiBrush.md) textBrush, any text, any angle, [Font](../../Stimulsoft_Base/Dashboard/Font.md) font, any showBehind, any enabled, any aspectRatio, any rightToLeft) |  |

**constructor**(**textBrush**: [StiBrush](../../Stimulsoft_Base/Drawing/StiBrush.md), **text**: any, **angle**: any, **font**: [Font](../../Stimulsoft_Base/Dashboard/Font.md), **showBehind**: any, **enabled**: any, **aspectRatio**: any, **rightToLeft**: any)

**Parameters**

- **textBrush** ([StiBrush](../../Stimulsoft_Base/Drawing/StiBrush.md))  
- **text** (any)  
- **angle** (any)  
- **font** ([Font](../../Stimulsoft_Base/Dashboard/Font.md))  
- **showBehind** (any)  
- **enabled** (any)  
- **aspectRatio** (any)  
- **rightToLeft** (any)  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **image** | [Image](../../Stimulsoft_System/Drawing/Image.md) |  |
| **imageHyperlink** | string |  |
| **imageTransparency** | number |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | [StiWatermark](StiWatermark.md) |  |
| **getImage** | [Image](../../Stimulsoft_System/Drawing/Image.md) |  |
| **implements** | any[] |  |
| **loadFromJsonObject** | void |  |
| **loadFromXml** | void |  |
| **meta** | [StiMeta](../../Stimulsoft_Base/Meta/StiMeta.md)[] |  |
| **resetImage** | void |  |
| **saveToJsonObject** | [StiJson](../../Stimulsoft_Base/StiJson.md) |  |

---

### Method Details

#### clone

**clone**(): [StiWatermark](StiWatermark.md)

**Returns** [StiWatermark](StiWatermark.md)


---

#### getImage

**getImage**(**report**: [StiReport](../StiReport.md)): [Image](../../Stimulsoft_System/Drawing/Image.md)

**Parameters**

- **report** ([StiReport](../StiReport.md))  

**Returns** [Image](../../Stimulsoft_System/Drawing/Image.md)


---

#### implements

**implements**(): any[]

**Returns** any[]


---

#### loadFromJsonObject

**loadFromJsonObject**(**jObject**: [StiJson](../../Stimulsoft_Base/StiJson.md)): void

**Parameters**

- **jObject** ([StiJson](../../Stimulsoft_Base/StiJson.md))  


---

#### loadFromXml

**loadFromXml**(**xmlNode**: [XmlNode](../../Stimulsoft_System/Xml/XmlNode.md)): void

**Parameters**

- **xmlNode** ([XmlNode](../../Stimulsoft_System/Xml/XmlNode.md))  


---

#### meta

**meta**(): [StiMeta](../../Stimulsoft_Base/Meta/StiMeta.md)[]

**Returns** [StiMeta](../../Stimulsoft_Base/Meta/StiMeta.md)[]


---

#### resetImage

**resetImage**(): void


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
