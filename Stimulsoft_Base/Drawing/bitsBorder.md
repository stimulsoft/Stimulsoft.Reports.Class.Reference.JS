---
title: "bitsBorder Class"
---

## bitsBorder Class

**Namespace:** `Stimulsoft.Base.Drawing`

### Inheritance

Implements: [ICloneable](../../Stimulsoft_System/ICloneable.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([StiBorderSides](StiBorderSides.md) side, [Color](../../Stimulsoft_System/Drawing/Color.md) color, number size, [StiPenStyle](StiPenStyle.md) style, number shadowSize, boolean dropShadow, boolean topmost) |  |

**constructor**(**side**: [StiBorderSides](StiBorderSides.md), **color**: [Color](../../Stimulsoft_System/Drawing/Color.md), **size**: number, **style**: [StiPenStyle](StiPenStyle.md), **shadowSize**: number, **dropShadow**: boolean, **topmost**: boolean)

**Parameters**

- **side** ([StiBorderSides](StiBorderSides.md))  
- **color** ([Color](../../Stimulsoft_System/Drawing/Color.md))  
- **size** (number)  
- **style** ([StiPenStyle](StiPenStyle.md))  
- **shadowSize** (number)  
- **dropShadow** (boolean)  
- **topmost** (boolean)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | [bitsBorder](bitsBorder.md) |  |
| **equals** | boolean |  |
| **getHashCode** | number |  |
| **isDefault** `static` | boolean |  |

---

### Method Details

#### clone

**clone**(): [bitsBorder](bitsBorder.md)

**Returns** [bitsBorder](bitsBorder.md)


---

#### equals

**equals**(**obj**: bitsBorder | any): boolean

**Parameters**

- **obj** (bitsBorder | any)  

**Returns** boolean


---

#### getHashCode

**getHashCode**(): number

**Returns** number


---

#### isDefault `static`

**isDefault**(**side**: [StiBorderSides](StiBorderSides.md), **color**: [Color](../../Stimulsoft_System/Drawing/Color.md), **size**: number, **style**: [StiPenStyle](StiPenStyle.md), **dropShadow**: boolean, **shadowSize**: number, **topmost**: boolean): boolean

**Parameters**

- **side** ([StiBorderSides](StiBorderSides.md))  
- **color** ([Color](../../Stimulsoft_System/Drawing/Color.md))  
- **size** (number)  
- **style** ([StiPenStyle](StiPenStyle.md))  
- **dropShadow** (boolean)  
- **shadowSize** (number)  
- **topmost** (boolean)  

**Returns** boolean

