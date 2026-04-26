---
title: "StiRadarGridLines Class"
---

## StiRadarGridLines Class

**Namespace:** `Stimulsoft.Report.Chart`

### Inheritance

Implements: [IStiJsonReportObject](../Stimulsoft_Base_JsonReportObject/IStiJsonReportObject.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([Color](../Stimulsoft_System_Drawing/Color.md) color, [StiPenStyle](../Stimulsoft_Base_Drawing/StiPenStyle.md) style, any visible, any allowApplyStyle) |  |

**constructor**(**color**: [Color](../Stimulsoft_System_Drawing/Color.md), **style**: [StiPenStyle](../Stimulsoft_Base_Drawing/StiPenStyle.md), **visible**: any, **allowApplyStyle**: any)

**Parameters**

- **color** ([Color](../Stimulsoft_System_Drawing/Color.md))  
- **style** ([StiPenStyle](../Stimulsoft_Base_Drawing/StiPenStyle.md))  
- **visible** (any)  
- **allowApplyStyle** (any)  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **allowApplyStyle** | boolean |  |
| **propName** | string |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | [StiRadarGridLines](StiRadarGridLines.md) |  |
| **implements** | any[] |  |
| **loadFromJsonObject** | void |  |
| **loadFromXml** | void |  |
| **meta** | [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[] |  |
| **saveToJsonObject** | [StiJson](../Stimulsoft_Base/StiJson.md) |  |

---

### Method Details

#### clone

**clone**(): [StiRadarGridLines](StiRadarGridLines.md)

**Returns** [StiRadarGridLines](StiRadarGridLines.md)


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
| **area** | IStiArea |  |
| **color** | any |  |
| **core** | StiRadarGridLinesCoreXF |  |
| **needSetAreaJsonPropertyInternal** | any |  |
| **style** | any |  |
| **visible** | any |  |
