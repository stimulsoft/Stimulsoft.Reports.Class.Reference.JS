---
title: "StiPadding Class"
---

## StiPadding Class

**Namespace:** `Stimulsoft.Report.Dashboard`

Describes the class that realizes object padding.

### Inheritance

Implements: [ICloneable](../Stimulsoft_System/ICloneable.md), [IStiJsonReportObject](../Stimulsoft_Base_JsonReportObject/IStiJsonReportObject.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(number left, number top, number right, number bottom) | Creates a new object of the type StiPadding. |

**constructor**(**left**: number, **top**: number, **right**: number, **bottom**: number)

Creates a new object of the type StiPadding.

**Parameters**

- **left** (number) — Left padding size on the object.  
- **top** (number) — Top padding size on the object.  
- **right** (number) — Right padding size on the object.  
- **bottom** (number) — Bottom padding size on the object.  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **empty** `static` | any |  |
| **isEmpty** | boolean |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | any | Creates a new object that is a copy of the current instance. |
| **create** `static` | [StiPadding](StiPadding.md) | Creates a new object of the type StiPadding. |
| **equals** | boolean | Tests to see whether the specified object is a SizeD with the same dimensions as this SizeD. |
| **loadFromJsonObject** | void |  |
| **loadFromXml** | void |  |
| **saveToJsonObject** | [StiJson](../Stimulsoft_Base/StiJson.md) |  |

---

### Method Details

#### clone

**clone**(): any

Creates a new object that is a copy of the current instance.

**Returns** any — A new object that is a copy of this instance.


---

#### create `static`

**create**(**all**: any): [StiPadding](StiPadding.md)

Creates a new object of the type StiPadding.

**Parameters**

- **all** (any) — The padding size for all sides of the object.  

**Returns** [StiPadding](StiPadding.md)


---

#### equals

**equals**(**obj**: any): boolean

Tests to see whether the specified object is a SizeD with the same dimensions as this SizeD.

**Parameters**

- **obj** (any) — The Object to test.  

**Returns** boolean — This method returns true if obj is a SizeD and has the same width and height as this SizeD; otherwise, false.


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

#### saveToJsonObject

**saveToJsonObject**(**defLeft**: any, **defTop**: any, **defRight**: any, **defBotttom**: any): [StiJson](../Stimulsoft_Base/StiJson.md)

**Parameters**

- **defLeft** (any)  
- **defTop** (any)  
- **defRight** (any)  
- **defBotttom** (any)  

**Returns** [StiJson](../Stimulsoft_Base/StiJson.md)


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **bottom** | any | Gets or sets bottom padding size on the object. |
| **left** | any | Gets or sets left padding size on the object. |
| **right** | any | Gets or sets right padding size on the object. |
| **top** | any | Gets or sets top padding size on the object. |
