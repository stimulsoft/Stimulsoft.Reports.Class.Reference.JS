---
title: "StiInterlacing Class"
---

## StiInterlacing Class

**Namespace:** `Stimulsoft.Report.Chart`

### Inheritance

Implements: IStiInterlacing  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md) interlacedBrush) |  |

**constructor**(**interlacedBrush**: [StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md))

**Parameters**

- **interlacedBrush** ([StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md))  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **allowApplyStyle** | boolean |  |
| **propName** | string |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | [StiInterlacing](StiInterlacing.md) |  |
| **implements** | any[] |  |
| **loadFromJsonObject** | void |  |
| **loadFromXml** | void |  |
| **meta** | [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[] |  |
| **saveToJsonObject** | [StiJson](../Stimulsoft_Base/StiJson.md) |  |

---

### Method Details

#### clone

**clone**(): [StiInterlacing](StiInterlacing.md)

**Returns** [StiInterlacing](StiInterlacing.md)


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
| **IStiJsonReportObject** | any |  |
| **_hash** | [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[] |  |
| **area** | IStiArea |  |
| **core** | StiInterlacingCoreXF |  |
| **interlacedBrush** | [StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md) |  |
| **needSetAreaJsonPropertyInternal** | any |  |
| **visible** | any |  |
