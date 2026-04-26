---
title: "StiDashboardElementViewHelper Class"
---

## StiDashboardElementViewHelper Class

**Namespace:** `Stimulsoft.Viewer.Helpers.Dashboards`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **applyComponentStyleToElement** `static` | void |  |
| **applyElementClickEvent** `static` | void |  |
| **format** `static` | string |  |
| **getActionColors** `static` | KeyObjectType |  |
| **getBackColor** `static` | string |  |
| **getBingMapScript** `static` | Promise<string> |  |
| **getBorder** `static` | any |  |
| **getBorderJson** `static` | KeyObjectType |  |
| **getClickEvent** `static` | string |  |
| **getConstants** `static` | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md) |  |
| **getControlElementSettings** `static` | KeyObjectType |  |
| **getCornerRadius** `static` | any |  |
| **getDashboardInteractionAsync** `static` | Promise<KeyObjectType> |  |
| **getDashboardWatermark** `static` | any |  |
| **getElementContentAttributesAsync** `static` | Promise<KeyObjectType> |  |
| **getFont** `static` | any |  |
| **getFontJson** `static` | KeyObjectType |  |
| **getForeColor** `static` | string |  |
| **getLayout** `static` | KeyObjectType |  |
| **getShadow** `static` | any |  |
| **getTitle** `static` | Promise<KeyObjectType> |  |
| **parseDashboardDrillDownParameters** `static` | void |  |

---

### Method Details

#### applyComponentStyleToElement `static`

**applyComponentStyleToElement**(**element**: IStiElement): void

**Parameters**

- **element** (IStiElement)  


---

#### applyElementClickEvent `static`

**applyElementClickEvent**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **parameters**: any): void

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **parameters** (any)  


---

#### format `static`

**format**(**element**: IStiControlElement, **value**: any): string

**Parameters**

- **element** (IStiControlElement)  
- **value** (any)  

**Returns** string


---

#### getActionColors `static`

**getActionColors**(**element**: IStiElement): KeyObjectType

**Parameters**

- **element** (IStiElement)  

**Returns** KeyObjectType


---

#### getBackColor `static`

**getBackColor**(**element**: IStiElement): string

**Parameters**

- **element** (IStiElement)  

**Returns** string


---

#### getBingMapScript `static`

**getBingMapScript**(**element**: IStiElement, **showTitle**: boolean): Promise<string>

**Parameters**

- **element** (IStiElement)  
- **showTitle** (boolean)  

**Returns** Promise<string>


---

#### getBorder `static`

**getBorder**(**element**: IStiElement): any

**Parameters**

- **element** (IStiElement)  

**Returns** any


---

#### getBorderJson `static`

**getBorderJson**(**border**: [StiSimpleBorder](../Stimulsoft_Base_Drawing/StiSimpleBorder.md)): KeyObjectType

**Parameters**

- **border** ([StiSimpleBorder](../Stimulsoft_Base_Drawing/StiSimpleBorder.md))  

**Returns** KeyObjectType


---

#### getClickEvent `static`

**getClickEvent**(**element**: any): string

**Parameters**

- **element** (any)  

**Returns** string


---

#### getConstants `static`

**getConstants**(**value**: string, **cells**: any): [Hashtable](../Stimulsoft_System_Collections/Hashtable.md)

**Parameters**

- **value** (string)  
- **cells** (any)  

**Returns** [Hashtable](../Stimulsoft_System_Collections/Hashtable.md)


---

#### getControlElementSettings `static`

**getControlElementSettings**(**element**: IStiElement): KeyObjectType

**Parameters**

- **element** (IStiElement)  

**Returns** KeyObjectType


---

#### getCornerRadius `static`

**getCornerRadius**(**cornerRadius**: StiCornerRadius): any

**Parameters**

- **cornerRadius** (StiCornerRadius)  

**Returns** any


---

#### getDashboardInteractionAsync `static`

**getDashboardInteractionAsync**(**element**: any): Promise<KeyObjectType>

**Parameters**

- **element** (any)  

**Returns** Promise<KeyObjectType>


---

#### getDashboardWatermark `static`

**getDashboardWatermark**(**element**: IStiElement): any

**Parameters**

- **element** (IStiElement)  

**Returns** any


---

#### getElementContentAttributesAsync `static`

**getElementContentAttributesAsync**(**element**: IStiElement, **scaleX**: number, **scaleY**: number, **requestParams**: any): Promise<KeyObjectType>

**Parameters**

- **element** (IStiElement)  
- **scaleX** (number)  
- **scaleY** (number)  
- **requestParams** (any)  

**Returns** Promise<KeyObjectType>


---

#### getFont `static`

**getFont**(**element**: IStiElement): any

**Parameters**

- **element** (IStiElement)  

**Returns** any


---

#### getFontJson `static`

**getFontJson**(**font**: [Font](../Stimulsoft_Base_Dashboard/Font.md)): KeyObjectType

**Parameters**

- **font** ([Font](../Stimulsoft_Base_Dashboard/Font.md))  

**Returns** KeyObjectType


---

#### getForeColor `static`

**getForeColor**(**element**: IStiElement): string

**Parameters**

- **element** (IStiElement)  

**Returns** string


---

#### getLayout `static`

**getLayout**(**element**: IStiElement): KeyObjectType

**Parameters**

- **element** (IStiElement)  

**Returns** KeyObjectType


---

#### getShadow `static`

**getShadow**(**element**: IStiElement): any

**Parameters**

- **element** (IStiElement)  

**Returns** any


---

#### getTitle `static`

**getTitle**(**element**: IStiElement): Promise<KeyObjectType>

**Parameters**

- **element** (IStiElement)  

**Returns** Promise<KeyObjectType>


---

#### parseDashboardDrillDownParameters `static`

**parseDashboardDrillDownParameters**(**drillDownParameters**: any[], **report**: [StiReport](../Stimulsoft_Report/StiReport.md)): void

**Parameters**

- **drillDownParameters** (any[])  
- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **content** | any |  |
| **url** | any |  |
| **url** | any |  |
| **url** | any |  |
