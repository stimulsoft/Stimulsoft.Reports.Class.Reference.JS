---
title: "StiGridLines Class"
---

## StiGridLines Class

**Namespace:** `Stimulsoft.Report.Chart`

### Inheritance

Implements: [IStiJsonReportObject](../Stimulsoft_Base/JsonReportObject/IStiJsonReportObject.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([Color](../Stimulsoft_System/Drawing/Color.md) color, [StiPenStyle](../Stimulsoft_Base/Drawing/StiPenStyle.md) style, any visible, [Color](../Stimulsoft_System/Drawing/Color.md) minorColor, [StiPenStyle](../Stimulsoft_Base/Drawing/StiPenStyle.md) minorStyle, any minorVisible, any minorCount, any allowApplyStyle) |  |

**constructor**(**color**: [Color](../Stimulsoft_System/Drawing/Color.md), **style**: [StiPenStyle](../Stimulsoft_Base/Drawing/StiPenStyle.md), **visible**: any, **minorColor**: [Color](../Stimulsoft_System/Drawing/Color.md), **minorStyle**: [StiPenStyle](../Stimulsoft_Base/Drawing/StiPenStyle.md), **minorVisible**: any, **minorCount**: any, **allowApplyStyle**: any)

**Parameters**

- **color** ([Color](../Stimulsoft_System/Drawing/Color.md))  
- **style** ([StiPenStyle](../Stimulsoft_Base/Drawing/StiPenStyle.md))  
- **visible** (any)  
- **minorColor** ([Color](../Stimulsoft_System/Drawing/Color.md))  
- **minorStyle** ([StiPenStyle](../Stimulsoft_Base/Drawing/StiPenStyle.md))  
- **minorVisible** (any)  
- **minorCount** (any)  
- **allowApplyStyle** (any)  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **allowApplyStyle** | boolean |  |
| **minorCount** | number |  |
| **propName** | string |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | [StiGridLines](StiGridLines.md) |  |
| **implements** | any[] |  |
| **loadFromJsonObject** | void |  |
| **loadFromXml** | void |  |
| **meta** | [StiMeta](../Stimulsoft_Base/Meta/StiMeta.md)[] |  |
| **saveToJsonObject** | [StiJson](../Stimulsoft_Base/StiJson.md) |  |

---

### Method Details

#### clone

**clone**(): [StiGridLines](StiGridLines.md)

**Returns** [StiGridLines](StiGridLines.md)


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

**loadFromXml**(**xn**: [XmlNode](../Stimulsoft_System/Xml/XmlNode.md)): void

**Parameters**

- **xn** ([XmlNode](../Stimulsoft_System/Xml/XmlNode.md))  


---

#### meta

**meta**(): [StiMeta](../Stimulsoft_Base/Meta/StiMeta.md)[]

**Returns** [StiMeta](../Stimulsoft_Base/Meta/StiMeta.md)[]


---

#### saveToJsonObject

**saveToJsonObject**(**mode**: [StiJsonSaveMode](../Stimulsoft_Base/StiJsonSaveMode.md)): [StiJson](../Stimulsoft_Base/StiJson.md)

**Parameters**

- **mode** ([StiJsonSaveMode](../Stimulsoft_Base/StiJsonSaveMode.md))  

**Returns** [StiJson](../Stimulsoft_Base/StiJson.md)


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **_hash** | [StiMeta](../Stimulsoft_Base/Meta/StiMeta.md)[] |  |
