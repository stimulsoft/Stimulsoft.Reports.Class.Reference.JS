---
title: "StiMargins Class"
---

## StiMargins Class

**Namespace:** `Stimulsoft.Report.Components`

### Inheritance

Implements: [IStiJsonReportObject](../Stimulsoft_Base_JsonReportObject/IStiJsonReportObject.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(any left, any right, any top, any bottom) |  |

**constructor**(**left**: any, **right**: any, **top**: any, **bottom**: any)

**Parameters**

- **left** (any)  
- **right** (any)  
- **top** (any)  
- **bottom** (any)  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **empty** `static` | any |  |
| **isEmpty** | boolean |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | any |  |
| **create** `static` | void |  |
| **equals** | boolean |  |
| **implements** | any[] |  |
| **loadFromJsonObject** | void |  |
| **loadFromText** `static` | void |  |
| **loadFromXml** `static` | void |  |
| **saveToJsonObject** | [StiJson](../Stimulsoft_Base/StiJson.md) |  |

---

### Method Details

#### clone

**clone**(): any

**Returns** any


---

#### create `static`

**create**(**all**: any): void

**Parameters**

- **all** (any)  


---

#### equals

**equals**(**obj**: any): boolean

**Parameters**

- **obj** (any)  

**Returns** boolean


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

#### loadFromText `static`

**loadFromText**(**text**: string): void

**Parameters**

- **text** (string)  


---

#### loadFromXml `static`

**loadFromXml**(**xmlNode**: [XmlNode](../Stimulsoft_System_Xml/XmlNode.md)): void

**Parameters**

- **xmlNode** ([XmlNode](../Stimulsoft_System_Xml/XmlNode.md))  


---

#### saveToJsonObject

**saveToJsonObject**(**mode**: [StiJsonSaveMode](../Stimulsoft_Base/StiJsonSaveMode.md), **defLeft**: any, **defRight**: any, **defTop**: any, **defBotttom**: any): [StiJson](../Stimulsoft_Base/StiJson.md)

**Parameters**

- **mode** ([StiJsonSaveMode](../Stimulsoft_Base/StiJsonSaveMode.md))  
- **defLeft** (any)  
- **defRight** (any)  
- **defTop** (any)  
- **defBotttom** (any)  

**Returns** [StiJson](../Stimulsoft_Base/StiJson.md)


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **bottom** | number |  |
| **left** | number |  |
| **right** | number |  |
| **top** | number |  |
