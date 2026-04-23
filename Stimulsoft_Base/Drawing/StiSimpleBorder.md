---
title: "StiSimpleBorder Class"
---

## StiSimpleBorder Class

**Namespace:** `Stimulsoft.Base.Drawing`

Class describes a border.

### Inheritance

Implements: [ICloneable](../../Stimulsoft_System/ICloneable.md), [IStiJsonReportObject](../JsonReportObject/IStiJsonReportObject.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([StiBorderSides](StiBorderSides.md) side, [Color](../../Stimulsoft_System/Drawing/Color.md) color, any size, [StiPenStyle](StiPenStyle.md) style) | Creates a new instance of the StiBorder class. |

**constructor**(**side**: [StiBorderSides](StiBorderSides.md), **color**: [Color](../../Stimulsoft_System/Drawing/Color.md), **size**: any, **style**: [StiPenStyle](StiPenStyle.md))

Creates a new instance of the StiBorder class.

**Parameters**

- **side** ([StiBorderSides](StiBorderSides.md)) — Border sides.  
- **color** ([Color](../../Stimulsoft_System/Drawing/Color.md)) — Border color.  
- **size** (any) — Border size.  
- **style** ([StiPenStyle](StiPenStyle.md)) — Border style.  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **isAllBorderSidesPresent** | boolean | Gets value which indicates that all sides of border is present. |
| **isBottomBorderSidePresent** | boolean | Gets value which indicates that bottom side of border is present. |
| **isLeftBorderSidePresent** | boolean | Gets value which indicates that left side of border is present. |
| **isRightBorderSidePresent** | boolean | Gets value which indicates that right side of border is present. |
| **isTopBorderSidePresent** | boolean | Gets value which indicates that top side of border is present. |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | any | Creates a new object that is a copy of the current instance. |
| **getBorder** | [StiBorder](StiBorder.md) |  |
| **getSize** | number |  |
| **getSizeIncludingSide** | number |  |
| **getSizeOffset** | number |  |
| **loadFromJsonObject** | void |  |
| **loadFromXml** | void |  |
| **saveToJsonObject** | [StiJson](../StiJson.md) |  |

---

### Method Details

#### clone

**clone**(): any

Creates a new object that is a copy of the current instance.

**Returns** any — A new object that is a copy of this instance.


---

#### getBorder

**getBorder**(): [StiBorder](StiBorder.md)

**Returns** [StiBorder](StiBorder.md)


---

#### getSize

**getSize**(): number

**Returns** number


---

#### getSizeIncludingSide

**getSizeIncludingSide**(): number

**Returns** number


---

#### getSizeOffset

**getSizeOffset**(): number

**Returns** number


---

#### loadFromJsonObject

**loadFromJsonObject**(**jObject**: [StiJson](../StiJson.md)): void

**Parameters**

- **jObject** ([StiJson](../StiJson.md))  


---

#### loadFromXml

**loadFromXml**(**xmlNode**: [XmlNode](../../Stimulsoft_System/Xml/XmlNode.md)): void

**Parameters**

- **xmlNode** ([XmlNode](../../Stimulsoft_System/Xml/XmlNode.md))  


---

#### saveToJsonObject

**saveToJsonObject**(**mode**: [StiJsonSaveMode](../StiJsonSaveMode.md)): [StiJson](../StiJson.md)

**Parameters**

- **mode** ([StiJsonSaveMode](../StiJsonSaveMode.md))  

**Returns** [StiJson](../StiJson.md)

