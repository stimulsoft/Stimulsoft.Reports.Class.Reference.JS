---
title: "StiChartTableHeader Class"
---

## StiChartTableHeader Class

**Namespace:** `Stimulsoft.Report.Chart`

### Inheritance

Implements: [IStiJsonReportObject](../Stimulsoft_Base_JsonReportObject/IStiJsonReportObject.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(any textAfter, [StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md) brush) |  |

**constructor**(**textAfter**: any, **brush**: [StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md))

**Parameters**

- **textAfter** (any)  
- **brush** ([StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md))  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | [StiChartTableHeader](StiChartTableHeader.md) |  |
| **implements** | any[] |  |
| **loadFromJsonObject** | void |  |
| **loadFromXml** | void |  |
| **meta** | [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[] |  |
| **saveToJsonObject** | [StiJson](../Stimulsoft_Base/StiJson.md) |  |

---

### Method Details

#### clone

**clone**(): [StiChartTableHeader](StiChartTableHeader.md)

**Returns** [StiChartTableHeader](StiChartTableHeader.md)


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

**saveToJsonObject**(**m**: [StiJsonSaveMode](../Stimulsoft_Base/StiJsonSaveMode.md)): [StiJson](../Stimulsoft_Base/StiJson.md)

**Parameters**

- **m** ([StiJsonSaveMode](../Stimulsoft_Base/StiJsonSaveMode.md))  

**Returns** [StiJson](../Stimulsoft_Base/StiJson.md)


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **ICloneable** | any |  |
| **_hash** | [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[] |  |
| **brush** | [StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md) |  |
| **font** | [Font](../Stimulsoft_Base_Dashboard/Font.md) |  |
| **format** | string |  |
| **textAfter** | any |  |
| **textColor** | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **wordWrap** | any |  |
