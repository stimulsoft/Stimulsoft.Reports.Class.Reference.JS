---
title: "StiBorder Class"
---

## StiBorder Class

**Namespace:** `Stimulsoft.Base.Drawing`

### Inheritance

Implements: [ICloneable](../Stimulsoft_System/ICloneable.md), [IAsIs](../Stimulsoft_System/IAsIs.md)  

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **color** | [Color](../Stimulsoft_System_Drawing/Color.md) | Gets or sets a border color. |
| **dropShadow** | boolean | Gets or sets value which indicates drop shadow or not. |
| **isAllBorderSidesPresent** | boolean | Gets value which indicates that all sides of border is present. |
| **isBottomBorderSidePresent** | boolean | Gets value which indicates that bottom side of border is present. |
| **isLeftBorderSidePresent** | boolean | Gets value which indicates that left side of border is present. |
| **isRightBorderSidePresent** | boolean | Gets value which indicates that right side of border is present. |
| **isTopBorderSidePresent** | boolean | Gets value which indicates that top side of border is present. |
| **shadowBrush** | [StiBrush](StiBrush.md) | Gets or sets the border shadow brush. |
| **shadowSize** | number | Gets or sets Shadow Size. |
| **side** | [StiBorderSides](StiBorderSides.md) | Gets or sets frame borders. |
| **size** | number | Gets or sets a border size. |
| **style** | [StiPenStyle](StiPenStyle.md) | Gets or sets a border style. |
| **topmost** | boolean | Gets or sets value which indicates that border sides will be drawn on top of all components. |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | [StiBorder](StiBorder.md) | Creates a new object that is a copy of the current instance. |
| **draw** | void |  |
| **drawBorderShadow** | void |  |
| **equals** | boolean |  |
| **getHashCode** | number |  |
| **getSize** | number |  |
| **getSizeIncludingSide** | number |  |
| **getSizeOffset** | number |  |
| **implements** | any[] |  |
| **loadFromXml** `static` | [StiBorder](StiBorder.md) |  |

---

### Method Details

#### clone

**clone**(): [StiBorder](StiBorder.md)

Creates a new object that is a copy of the current instance.

**Returns** [StiBorder](StiBorder.md)


---

#### draw

**draw**(**g**: [Graphics](../Stimulsoft_System_Drawing/Graphics.md), **rect**: [Rectangle](../Stimulsoft_System_Drawing/Rectangle.md), **zoom**: number, **emptyColor**: [Color](../Stimulsoft_System_Drawing/Color.md), **drawBorderFormatting**: any, **drawBorderSides**: any): void

**Parameters**

- **g** ([Graphics](../Stimulsoft_System_Drawing/Graphics.md))  
- **rect** ([Rectangle](../Stimulsoft_System_Drawing/Rectangle.md))  
- **zoom** (number)  
- **emptyColor** ([Color](../Stimulsoft_System_Drawing/Color.md))  
- **drawBorderFormatting** (any)  
- **drawBorderSides** (any)  


---

#### drawBorderShadow

**drawBorderShadow**(**g**: [Graphics](../Stimulsoft_System_Drawing/Graphics.md), **rect**: [Rectangle](../Stimulsoft_System_Drawing/Rectangle.md), **zoom**: number): void

**Parameters**

- **g** ([Graphics](../Stimulsoft_System_Drawing/Graphics.md))  
- **rect** ([Rectangle](../Stimulsoft_System_Drawing/Rectangle.md))  
- **zoom** (number)  


---

#### equals

**equals**(**obj**: StiBorder \| any): boolean

**Parameters**

- **obj** (StiBorder \| any)  

**Returns** boolean


---

#### getHashCode

**getHashCode**(): number

**Returns** number


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

#### implements

**implements**(): any[]

**Returns** any[]


---

#### loadFromXml `static`

**loadFromXml**(**text**: string): [StiBorder](StiBorder.md)

**Parameters**

- **text** (string)  

**Returns** [StiBorder](StiBorder.md)


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **bottom** | any |  |
| **bottom** | any |  |
| **dropShadow** | any |  |
| **emptyPen** | any |  |
| **left** | any |  |
| **left** | any |  |
| **right** | any |  |
| **right** | any |  |
| **top** | any |  |
| **top** | any |  |
| **topmost** | any |  |
| **topmost** | any |  |
