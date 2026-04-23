---
title: "StiTitlePadding Class"
---

## StiTitlePadding Class

**Namespace:** `Stimulsoft.Report.Dashboard`

Describes the class that realizes object padding.

### Inheritance

Implements: [ICloneable](../../Stimulsoft_System/ICloneable.md), [IStiJsonReportObject](../../Stimulsoft_Base/JsonReportObject/IStiJsonReportObject.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(number left, number top, number right, number bottom) | Creates a new object of the type StiTitlePadding. |

**constructor**(**left**: number, **top**: number, **right**: number, **bottom**: number)

Creates a new object of the type StiTitlePadding.

**Parameters**

- **left** (number) — Left padding size on the object.  
- **top** (number) — Top padding size on the object.  
- **right** (number) — Right padding size on the object.  
- **bottom** (number) — Bottom padding size on the object.  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **isEmpty** | boolean |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | any | Creates a new object that is a copy of the current instance. |
| **create** `static` | [StiTitlePadding](StiTitlePadding.md) | Creates a new object of the type StiTitlePadding. |
| **equals** | boolean | Tests to see whether the specified object is a SizeD with the same dimensions as this SizeD. |
| **loadFromJsonObject** | void |  |
| **loadFromXml** | void |  |
| **saveToJsonObject** | [StiJson](../../Stimulsoft_Base/StiJson.md) |  |

---

### Method Details

#### clone

**clone**(): any

Creates a new object that is a copy of the current instance.

**Returns** any — A new object that is a copy of this instance.


---

#### create `static`

**create**(**all**: any): [StiTitlePadding](StiTitlePadding.md)

Creates a new object of the type StiTitlePadding.

**Parameters**

- **all** (any) — The padding size for all sides of the object.  

**Returns** [StiTitlePadding](StiTitlePadding.md)


---

#### equals

**equals**(**obj**: any): boolean

Tests to see whether the specified object is a SizeD with the same dimensions as this SizeD.

**Parameters**

- **obj** (any) — The Object to test.  

**Returns** boolean — This method returns true if obj is a SizeD and has the same width and height as this SizeD; otherwise, false.


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

#### saveToJsonObject

**saveToJsonObject**(**defLeft**: any, **defTop**: any, **defRight**: any, **defBotttom**: any): [StiJson](../../Stimulsoft_Base/StiJson.md)

**Parameters**

- **defLeft** (any)  
- **defTop** (any)  
- **defRight** (any)  
- **defBotttom** (any)  

**Returns** [StiJson](../../Stimulsoft_Base/StiJson.md)

