---
title: "StiUnit Class"
---

## StiUnit Class

**Namespace:** `Stimulsoft.Report.Units`

### Inheritance

Implements: [IAsIs](../../Stimulsoft_System/IAsIs.md)  

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **Centimeters** `static` | StiCentimetersUnit |  |
| **HundredthsOfInch** `static` | StiHundredthsOfInchUnit |  |
| **Inches** `static` | StiInchesUnit |  |
| **Millimeters** `static` | StiMillimetersUnit |  |
| **factor** | number |  |
| **name** | string |  |
| **rulerStep** | number |  |
| **shortName** | string |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **convertFromHInches** | number |  |
| **convertRectangleFromHInches** | [Rectangle](../../Stimulsoft_System/Drawing/Rectangle.md) |  |
| **convertRectangleToHInches** | [Rectangle](../../Stimulsoft_System/Drawing/Rectangle.md) |  |
| **convertSizeFromHInches** | [Size](../../Stimulsoft_System/Drawing/Size.md) |  |
| **convertSizeToHInches** | [Size](../../Stimulsoft_System/Drawing/Size.md) |  |
| **convertToHInches** | number |  |
| **getUnitFromReportUnit** `static` | [StiUnit](StiUnit.md) |  |
| **loadFromJsonObject** `static` | [StiUnit](StiUnit.md) |  |
| **loadFromXml** `static` | [StiUnit](StiUnit.md) |  |
| **saveToJsonObject** `static` | [StiJson](../../Stimulsoft_Base/StiJson.md) |  |

---

### Method Details

#### convertFromHInches

**convertFromHInches**(**value**: number): number

**Parameters**

- **value** (number)  

**Returns** number


---

#### convertRectangleFromHInches

**convertRectangleFromHInches**(**rect**: [Rectangle](../../Stimulsoft_System/Drawing/Rectangle.md)): [Rectangle](../../Stimulsoft_System/Drawing/Rectangle.md)

**Parameters**

- **rect** ([Rectangle](../../Stimulsoft_System/Drawing/Rectangle.md))  

**Returns** [Rectangle](../../Stimulsoft_System/Drawing/Rectangle.md)


---

#### convertRectangleToHInches

**convertRectangleToHInches**(**rect**: [Rectangle](../../Stimulsoft_System/Drawing/Rectangle.md)): [Rectangle](../../Stimulsoft_System/Drawing/Rectangle.md)

**Parameters**

- **rect** ([Rectangle](../../Stimulsoft_System/Drawing/Rectangle.md))  

**Returns** [Rectangle](../../Stimulsoft_System/Drawing/Rectangle.md)


---

#### convertSizeFromHInches

**convertSizeFromHInches**(**size**: [Size](../../Stimulsoft_System/Drawing/Size.md)): [Size](../../Stimulsoft_System/Drawing/Size.md)

**Parameters**

- **size** ([Size](../../Stimulsoft_System/Drawing/Size.md))  

**Returns** [Size](../../Stimulsoft_System/Drawing/Size.md)


---

#### convertSizeToHInches

**convertSizeToHInches**(**size**: [Size](../../Stimulsoft_System/Drawing/Size.md)): [Size](../../Stimulsoft_System/Drawing/Size.md)

**Parameters**

- **size** ([Size](../../Stimulsoft_System/Drawing/Size.md))  

**Returns** [Size](../../Stimulsoft_System/Drawing/Size.md)


---

#### convertToHInches

**convertToHInches**(**value**: number): number

**Parameters**

- **value** (number)  

**Returns** number


---

#### getUnitFromReportUnit `static`

**getUnitFromReportUnit**(**reportUnit**: [StiReportUnitType](../StiReportUnitType.md)): [StiUnit](StiUnit.md)

**Parameters**

- **reportUnit** ([StiReportUnitType](../StiReportUnitType.md))  

**Returns** [StiUnit](StiUnit.md)


---

#### loadFromJsonObject `static`

**loadFromJsonObject**(**jObject**: [StiJson](../../Stimulsoft_Base/StiJson.md)): [StiUnit](StiUnit.md)

**Parameters**

- **jObject** ([StiJson](../../Stimulsoft_Base/StiJson.md))  

**Returns** [StiUnit](StiUnit.md)


---

#### loadFromXml `static`

**loadFromXml**(**xmlNode**: [XmlNode](../../Stimulsoft_System/Xml/XmlNode.md)): [StiUnit](StiUnit.md)

**Parameters**

- **xmlNode** ([XmlNode](../../Stimulsoft_System/Xml/XmlNode.md))  

**Returns** [StiUnit](StiUnit.md)


---

#### saveToJsonObject `static`

**saveToJsonObject**(**unit**: [StiUnit](StiUnit.md)): [StiJson](../../Stimulsoft_Base/StiJson.md)

**Parameters**

- **unit** ([StiUnit](StiUnit.md))  

**Returns** [StiJson](../../Stimulsoft_Base/StiJson.md)

