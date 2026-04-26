---
title: "StiRadarAxisLabels Class"
---

## StiRadarAxisLabels Class

**Namespace:** `Stimulsoft.Report.Chart`

### Inheritance

Implements: [IStiJsonReportObject](../Stimulsoft_Base_JsonReportObject/IStiJsonReportObject.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(any format, [Font](../Stimulsoft_Base_Dashboard/Font.md) font, any 8) |  |

**constructor**(**format**: any, **font**: [Font](../Stimulsoft_Base_Dashboard/Font.md), **8**: any)

**Parameters**

- **format** (any)  
- **font** ([Font](../Stimulsoft_Base_Dashboard/Font.md))  
- **8** (any)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | [StiRadarAxisLabels](StiRadarAxisLabels.md) |  |
| **implements** | any[] |  |
| **loadFromJsonObject** | void |  |
| **loadFromXml** | void |  |
| **meta** | [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[] |  |
| **saveToJsonObject** | [StiJson](../Stimulsoft_Base/StiJson.md) |  |

---

### Method Details

#### clone

**clone**(): [StiRadarAxisLabels](StiRadarAxisLabels.md)

**Returns** [StiRadarAxisLabels](StiRadarAxisLabels.md)


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
| **ICloneable** | any |  |
| **_hash** | [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[] |  |
| **allowApplyStyle** | any |  |
| **antialiasing** | any |  |
| **borderColor** | any |  |
| **brush** | [StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md) |  |
| **color** | any |  |
| **core** | StiRadarAxisLabelsCoreXF |  |
| **drawBorder** | any |  |
| **font** | any |  |
| **format** | any |  |
| **rotationLabels** | any |  |
| **textAfter** | any |  |
| **textBefore** | any |  |
| **width** | any |  |
| **wordWrap** | any |  |
