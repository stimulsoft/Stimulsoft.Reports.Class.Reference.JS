---
title: "StiFontIconsHelper Class"
---

## StiFontIconsHelper Class

**Namespace:** `Stimulsoft.Report`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **convertFontIconToImage** `static` | [Image](../Stimulsoft_System/Drawing/Image.md) |  |
| **convertFontIconToImageAsync** `static` | Promise<[Image](../Stimulsoft_System/Drawing/Image.md)> |  |
| **drawDirectionIcons** `static` | void |  |
| **drawFillIcons** `static` | void |  |
| **getContent** `static` | string |  |
| **getFontIcons** `static` | [StiFontIcons](../Stimulsoft_Base/Stimulsoft/Report/Helpers/StiFontIcons.md)[] |  |
| **getFontIcons1** `static` | [StiFontIcons](../Stimulsoft_Base/Stimulsoft/Report/Helpers/StiFontIcons.md)[] |  |
| **getIconFontSize** `static` | number |  |
| **getIconPadding** `static` | number[] |  |
| **getIsonSetContent** `static` | string |  |
| **writeFontIconImage** `static` | void |  |

---

### Method Details

#### convertFontIconToImage `static`

**convertFontIconToImage**(**icon**: [StiFontIcons](../Stimulsoft_Base/Stimulsoft/Report/Helpers/StiFontIcons.md), **color**: [Color](../Stimulsoft_System/Drawing/Color.md), **width**: number, **height**: number, **dy**: string): [Image](../Stimulsoft_System/Drawing/Image.md)

**Parameters**

- **icon** ([StiFontIcons](../Stimulsoft_Base/Stimulsoft/Report/Helpers/StiFontIcons.md))  
- **color** ([Color](../Stimulsoft_System/Drawing/Color.md))  
- **width** (number)  
- **height** (number)  
- **dy** (string)  

**Returns** [Image](../Stimulsoft_System/Drawing/Image.md)


---

#### convertFontIconToImageAsync `static`

**convertFontIconToImageAsync**(**icon**: [StiFontIcons](../Stimulsoft_Base/Stimulsoft/Report/Helpers/StiFontIcons.md), **color**: [Color](../Stimulsoft_System/Drawing/Color.md), **width**: number, **height**: number, **dy**: string, **horAlign**: [StiHorAlignment](../Stimulsoft_Base/Drawing/StiHorAlignment.md)): Promise<[Image](../Stimulsoft_System/Drawing/Image.md)>

**Parameters**

- **icon** ([StiFontIcons](../Stimulsoft_Base/Stimulsoft/Report/Helpers/StiFontIcons.md))  
- **color** ([Color](../Stimulsoft_System/Drawing/Color.md))  
- **width** (number)  
- **height** (number)  
- **dy** (string)  
- **horAlign** ([StiHorAlignment](../Stimulsoft_Base/Drawing/StiHorAlignment.md))  

**Returns** Promise<[Image](../Stimulsoft_System/Drawing/Image.md)>


---

#### drawDirectionIcons `static`

**drawDirectionIcons**(**context**: [StiContext](Stimulsoft/Base/Context/StiContext.md), **brush**: object, **rect**: [Rectangle](../Stimulsoft_System/Drawing/Rectangle.md), **singleSize**: [Size](../Stimulsoft_System/Drawing/Size.md), **icon**: [StiFontIcons](../Stimulsoft_Base/Stimulsoft/Report/Helpers/StiFontIcons.md), **toolTip**: string, **interaction**: [StiInteractionDataGeom](Stimulsoft/Base/Context/StiInteractionDataGeom.md), **verticalDirection**: boolean, **roundValues**: any): void

**Parameters**

- **context** ([StiContext](Stimulsoft/Base/Context/StiContext.md))  
- **brush** (object)  
- **rect** ([Rectangle](../Stimulsoft_System/Drawing/Rectangle.md))  
- **singleSize** ([Size](../Stimulsoft_System/Drawing/Size.md))  
- **icon** ([StiFontIcons](../Stimulsoft_Base/Stimulsoft/Report/Helpers/StiFontIcons.md))  
- **toolTip** (string)  
- **interaction** ([StiInteractionDataGeom](Stimulsoft/Base/Context/StiInteractionDataGeom.md))  
- **verticalDirection** (boolean)  
- **roundValues** (any)  


---

#### drawFillIcons `static`

**drawFillIcons**(**context**: [StiContext](Stimulsoft/Base/Context/StiContext.md), **brush**: object, **rect**: [Rectangle](../Stimulsoft_System/Drawing/Rectangle.md), **singleSize**: [Size](../Stimulsoft_System/Drawing/Size.md), **icon**: [StiFontIcons](../Stimulsoft_Base/Stimulsoft/Report/Helpers/StiFontIcons.md), **toolTip**: string): void

**Parameters**

- **context** ([StiContext](Stimulsoft/Base/Context/StiContext.md))  
- **brush** (object)  
- **rect** ([Rectangle](../Stimulsoft_System/Drawing/Rectangle.md))  
- **singleSize** ([Size](../Stimulsoft_System/Drawing/Size.md))  
- **icon** ([StiFontIcons](../Stimulsoft_Base/Stimulsoft/Report/Helpers/StiFontIcons.md))  
- **toolTip** (string)  


---

#### getContent `static`

**getContent**(**fontIcons**: [StiFontIcons](../Stimulsoft_Base/Stimulsoft/Report/Helpers/StiFontIcons.md)): string

**Parameters**

- **fontIcons** ([StiFontIcons](../Stimulsoft_Base/Stimulsoft/Report/Helpers/StiFontIcons.md))  

**Returns** string


---

#### getFontIcons `static`

**getFontIcons**(**iconSet**: [StiFontIconSet](../Stimulsoft_Base/Stimulsoft/Report/Helpers/StiFontIconSet.md)): [StiFontIcons](../Stimulsoft_Base/Stimulsoft/Report/Helpers/StiFontIcons.md)[]

**Parameters**

- **iconSet** ([StiFontIconSet](../Stimulsoft_Base/Stimulsoft/Report/Helpers/StiFontIconSet.md))  

**Returns** [StiFontIcons](../Stimulsoft_Base/Stimulsoft/Report/Helpers/StiFontIcons.md)[]


---

#### getFontIcons1 `static`

**getFontIcons1**(**iconGroup**: [StiFontIconGroup](../Stimulsoft_Base/Stimulsoft/Report/Helpers/StiFontIconGroup.md)): [StiFontIcons](../Stimulsoft_Base/Stimulsoft/Report/Helpers/StiFontIcons.md)[]

**Parameters**

- **iconGroup** ([StiFontIconGroup](../Stimulsoft_Base/Stimulsoft/Report/Helpers/StiFontIconGroup.md))  

**Returns** [StiFontIcons](../Stimulsoft_Base/Stimulsoft/Report/Helpers/StiFontIcons.md)[]


---

#### getIconFontSize `static`

**getIconFontSize**(**context**: [StiContext](Stimulsoft/Base/Context/StiContext.md), **size**: [Size](../Stimulsoft_System/Drawing/Size.md), **text**: string): number

**Parameters**

- **context** ([StiContext](Stimulsoft/Base/Context/StiContext.md))  
- **size** ([Size](../Stimulsoft_System/Drawing/Size.md))  
- **text** (string)  

**Returns** number


---

#### getIconPadding `static`

**getIconPadding**(**fontIcons**: [StiFontIcons](../Stimulsoft_Base/Stimulsoft/Report/Helpers/StiFontIcons.md)): number[]

**Parameters**

- **fontIcons** ([StiFontIcons](../Stimulsoft_Base/Stimulsoft/Report/Helpers/StiFontIcons.md))  

**Returns** number[]


---

#### getIsonSetContent `static`

**getIsonSetContent**(**iconSet**: [StiFontIconSet](../Stimulsoft_Base/Stimulsoft/Report/Helpers/StiFontIconSet.md)): string

**Parameters**

- **iconSet** ([StiFontIconSet](../Stimulsoft_Base/Stimulsoft/Report/Helpers/StiFontIconSet.md))  

**Returns** string


---

#### writeFontIconImage `static`

**writeFontIconImage**(**writer**: [XmlTextWriter](../Stimulsoft_System/Xml/XmlTextWriter.md), **color**: [Color](../Stimulsoft_System/Drawing/Color.md), **icon**: [StiFontIcons](../Stimulsoft_Base/Stimulsoft/Report/Helpers/StiFontIcons.md), **width**: number, **height**: number, **dy**: string, **x**: number, **y**: number, **horAlignment**: [StiHorAlignment](../Stimulsoft_Base/Drawing/StiHorAlignment.md), **vertAlignment**: [StiVertAlignment](../Stimulsoft_Base/Drawing/StiVertAlignment.md)): void

**Parameters**

- **writer** ([XmlTextWriter](../Stimulsoft_System/Xml/XmlTextWriter.md))  
- **color** ([Color](../Stimulsoft_System/Drawing/Color.md))  
- **icon** ([StiFontIcons](../Stimulsoft_Base/Stimulsoft/Report/Helpers/StiFontIcons.md))  
- **width** (number)  
- **height** (number)  
- **dy** (string)  
- **x** (number)  
- **y** (number)  
- **horAlignment** ([StiHorAlignment](../Stimulsoft_Base/Drawing/StiHorAlignment.md))  
- **vertAlignment** ([StiVertAlignment](../Stimulsoft_Base/Drawing/StiVertAlignment.md))  

