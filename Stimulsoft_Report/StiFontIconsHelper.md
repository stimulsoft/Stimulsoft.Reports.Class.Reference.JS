---
title: "StiFontIconsHelper Class"
---

## StiFontIconsHelper Class

**Namespace:** `Stimulsoft.Report`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **convertFontIconToImage** `static` | [Image](../Stimulsoft_System_Drawing/Image.md) |  |
| **convertFontIconToImageAsync** `static` | Promise<[Image](../Stimulsoft_System_Drawing/Image.md)> |  |
| **drawDirectionIcons** `static` | void |  |
| **drawFillIcons** `static` | void |  |
| **getContent** `static` | string |  |
| **getFontIcons** `static` | [StiFontIcons](../Stimulsoft_Report_Helpers/StiFontIcons.md)[] |  |
| **getFontIcons1** `static` | [StiFontIcons](../Stimulsoft_Report_Helpers/StiFontIcons.md)[] |  |
| **getIconFontSize** `static` | number |  |
| **getIconPadding** `static` | number[] |  |
| **getIsonSetContent** `static` | string |  |
| **writeFontIconImage** `static` | void |  |

---

### Method Details

#### convertFontIconToImage `static`

**convertFontIconToImage**(**icon**: [StiFontIcons](../Stimulsoft_Report_Helpers/StiFontIcons.md), **color**: [Color](../Stimulsoft_System_Drawing/Color.md), **width**: number, **height**: number, **dy**: string): [Image](../Stimulsoft_System_Drawing/Image.md)

**Parameters**

- **icon** ([StiFontIcons](../Stimulsoft_Report_Helpers/StiFontIcons.md))  
- **color** ([Color](../Stimulsoft_System_Drawing/Color.md))  
- **width** (number)  
- **height** (number)  
- **dy** (string)  

**Returns** [Image](../Stimulsoft_System_Drawing/Image.md)


---

#### convertFontIconToImageAsync `static`

**convertFontIconToImageAsync**(**icon**: [StiFontIcons](../Stimulsoft_Report_Helpers/StiFontIcons.md), **color**: [Color](../Stimulsoft_System_Drawing/Color.md), **width**: number, **height**: number, **dy**: string, **horAlign**: [StiHorAlignment](../Stimulsoft_Base_Drawing/StiHorAlignment.md)): Promise<[Image](../Stimulsoft_System_Drawing/Image.md)>

**Parameters**

- **icon** ([StiFontIcons](../Stimulsoft_Report_Helpers/StiFontIcons.md))  
- **color** ([Color](../Stimulsoft_System_Drawing/Color.md))  
- **width** (number)  
- **height** (number)  
- **dy** (string)  
- **horAlign** ([StiHorAlignment](../Stimulsoft_Base_Drawing/StiHorAlignment.md))  

**Returns** Promise<[Image](../Stimulsoft_System_Drawing/Image.md)>


---

#### drawDirectionIcons `static`

**drawDirectionIcons**(**context**: [StiContext](../Stimulsoft_Base_Context/StiContext.md), **brush**: object, **rect**: [Rectangle](../Stimulsoft_System_Drawing/Rectangle.md), **singleSize**: [Size](../Stimulsoft_System_Drawing/Size.md), **icon**: [StiFontIcons](../Stimulsoft_Report_Helpers/StiFontIcons.md), **toolTip**: string, **interaction**: [StiInteractionDataGeom](../Stimulsoft_Base_Context/StiInteractionDataGeom.md), **verticalDirection**: boolean, **roundValues**: any): void

**Parameters**

- **context** ([StiContext](../Stimulsoft_Base_Context/StiContext.md))  
- **brush** (object)  
- **rect** ([Rectangle](../Stimulsoft_System_Drawing/Rectangle.md))  
- **singleSize** ([Size](../Stimulsoft_System_Drawing/Size.md))  
- **icon** ([StiFontIcons](../Stimulsoft_Report_Helpers/StiFontIcons.md))  
- **toolTip** (string)  
- **interaction** ([StiInteractionDataGeom](../Stimulsoft_Base_Context/StiInteractionDataGeom.md))  
- **verticalDirection** (boolean)  
- **roundValues** (any)  


---

#### drawFillIcons `static`

**drawFillIcons**(**context**: [StiContext](../Stimulsoft_Base_Context/StiContext.md), **brush**: object, **rect**: [Rectangle](../Stimulsoft_System_Drawing/Rectangle.md), **singleSize**: [Size](../Stimulsoft_System_Drawing/Size.md), **icon**: [StiFontIcons](../Stimulsoft_Report_Helpers/StiFontIcons.md), **toolTip**: string): void

**Parameters**

- **context** ([StiContext](../Stimulsoft_Base_Context/StiContext.md))  
- **brush** (object)  
- **rect** ([Rectangle](../Stimulsoft_System_Drawing/Rectangle.md))  
- **singleSize** ([Size](../Stimulsoft_System_Drawing/Size.md))  
- **icon** ([StiFontIcons](../Stimulsoft_Report_Helpers/StiFontIcons.md))  
- **toolTip** (string)  


---

#### getContent `static`

**getContent**(**fontIcons**: [StiFontIcons](../Stimulsoft_Report_Helpers/StiFontIcons.md)): string

**Parameters**

- **fontIcons** ([StiFontIcons](../Stimulsoft_Report_Helpers/StiFontIcons.md))  

**Returns** string


---

#### getFontIcons `static`

**getFontIcons**(**iconSet**: [StiFontIconSet](../Stimulsoft_Report_Helpers/StiFontIconSet.md)): [StiFontIcons](../Stimulsoft_Report_Helpers/StiFontIcons.md)[]

**Parameters**

- **iconSet** ([StiFontIconSet](../Stimulsoft_Report_Helpers/StiFontIconSet.md))  

**Returns** [StiFontIcons](../Stimulsoft_Report_Helpers/StiFontIcons.md)[]


---

#### getFontIcons1 `static`

**getFontIcons1**(**iconGroup**: [StiFontIconGroup](../Stimulsoft_Report_Helpers/StiFontIconGroup.md)): [StiFontIcons](../Stimulsoft_Report_Helpers/StiFontIcons.md)[]

**Parameters**

- **iconGroup** ([StiFontIconGroup](../Stimulsoft_Report_Helpers/StiFontIconGroup.md))  

**Returns** [StiFontIcons](../Stimulsoft_Report_Helpers/StiFontIcons.md)[]


---

#### getIconFontSize `static`

**getIconFontSize**(**context**: [StiContext](../Stimulsoft_Base_Context/StiContext.md), **size**: [Size](../Stimulsoft_System_Drawing/Size.md), **text**: string): number

**Parameters**

- **context** ([StiContext](../Stimulsoft_Base_Context/StiContext.md))  
- **size** ([Size](../Stimulsoft_System_Drawing/Size.md))  
- **text** (string)  

**Returns** number


---

#### getIconPadding `static`

**getIconPadding**(**fontIcons**: [StiFontIcons](../Stimulsoft_Report_Helpers/StiFontIcons.md)): number[]

**Parameters**

- **fontIcons** ([StiFontIcons](../Stimulsoft_Report_Helpers/StiFontIcons.md))  

**Returns** number[]


---

#### getIsonSetContent `static`

**getIsonSetContent**(**iconSet**: [StiFontIconSet](../Stimulsoft_Report_Helpers/StiFontIconSet.md)): string

**Parameters**

- **iconSet** ([StiFontIconSet](../Stimulsoft_Report_Helpers/StiFontIconSet.md))  

**Returns** string


---

#### writeFontIconImage `static`

**writeFontIconImage**(**writer**: [XmlTextWriter](../Stimulsoft_System_Xml/XmlTextWriter.md), **color**: [Color](../Stimulsoft_System_Drawing/Color.md), **icon**: [StiFontIcons](../Stimulsoft_Report_Helpers/StiFontIcons.md), **width**: number, **height**: number, **dy**: string, **x**: number, **y**: number, **horAlignment**: [StiHorAlignment](../Stimulsoft_Base_Drawing/StiHorAlignment.md), **vertAlignment**: [StiVertAlignment](../Stimulsoft_Base_Drawing/StiVertAlignment.md)): void

**Parameters**

- **writer** ([XmlTextWriter](../Stimulsoft_System_Xml/XmlTextWriter.md))  
- **color** ([Color](../Stimulsoft_System_Drawing/Color.md))  
- **icon** ([StiFontIcons](../Stimulsoft_Report_Helpers/StiFontIcons.md))  
- **width** (number)  
- **height** (number)  
- **dy** (string)  
- **x** (number)  
- **y** (number)  
- **horAlignment** ([StiHorAlignment](../Stimulsoft_Base_Drawing/StiHorAlignment.md))  
- **vertAlignment** ([StiVertAlignment](../Stimulsoft_Base_Drawing/StiVertAlignment.md))  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **alignmentBaseline** | any |  |
| **alignmentBaseline** | any |  |
| **alignmentBaseline** | any |  |
| **firstDrawIcon** | any |  |
| **firstDrawIcon** | any |  |
| **styleText** | any |  |
| **styleText** | any |  |
| **textAnchor** | any |  |
| **textAnchor** | any |  |
| **textAnchor** | any |  |
| **x** | any |  |
| **xPos** | any |  |
| **xPos** | any |  |
| **xPos** | any |  |
| **yPos** | any |  |
| **yPos** | any |  |
| **yPos** | any |  |
