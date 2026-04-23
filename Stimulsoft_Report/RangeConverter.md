---
title: "RangeConverter Class"
---

## RangeConverter Class

**Namespace:** `Stimulsoft.Report`

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **getPropertiesSupported** | boolean |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **canConvertFrom** | boolean |  |
| **canConvertTo** | boolean |  |
| **convertFrom** | any |  |
| **convertTo** | any |  |
| **rangeToString** `static` | string |  |
| **stringToRange** `static` | [Range](../Stimulsoft_Base/Drawing/Range.md) |  |

---

### Method Details

#### canConvertFrom

**canConvertFrom**(**context**: any, **sourceType**: [Stimulsoft.System.Type](../Stimulsoft_System/Type.md)): boolean

**Parameters**

- **context** (any)  
- **sourceType** ([Stimulsoft.System.Type](../Stimulsoft_System/Type.md))  

**Returns** boolean


---

#### canConvertTo

**canConvertTo**(**context**: any, **destinationType**: [Stimulsoft.System.Type](../Stimulsoft_System/Type.md)): boolean

**Parameters**

- **context** (any)  
- **destinationType** ([Stimulsoft.System.Type](../Stimulsoft_System/Type.md))  

**Returns** boolean


---

#### convertFrom

**convertFrom**(**context**: any, **culture**: [CultureInfo](../Stimulsoft_System/Globalization/CultureInfo.md), **value**: any): any

**Parameters**

- **context** (any)  
- **culture** ([CultureInfo](../Stimulsoft_System/Globalization/CultureInfo.md))  
- **value** (any)  

**Returns** any


---

#### convertTo

**convertTo**(**context**: any, **culture**: [CultureInfo](../Stimulsoft_System/Globalization/CultureInfo.md), **value**: any, **destinationType**: [Stimulsoft.System.Type](../Stimulsoft_System/Type.md)): any

**Parameters**

- **context** (any)  
- **culture** ([CultureInfo](../Stimulsoft_System/Globalization/CultureInfo.md))  
- **value** (any)  
- **destinationType** ([Stimulsoft.System.Type](../Stimulsoft_System/Type.md))  

**Returns** any


---

#### rangeToString `static`

**rangeToString**(**range**: [Range](../Stimulsoft_Base/Drawing/Range.md)): string

**Parameters**

- **range** ([Range](../Stimulsoft_Base/Drawing/Range.md))  

**Returns** string


---

#### stringToRange `static`

**stringToRange**(**str**: string): [Range](../Stimulsoft_Base/Drawing/Range.md)

**Parameters**

- **str** (string)  

**Returns** [Range](../Stimulsoft_Base/Drawing/Range.md)

