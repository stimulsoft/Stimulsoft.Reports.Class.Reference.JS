---
title: "StiTextRenderer Class"
---

## StiTextRenderer Class

**Namespace:** `Stimulsoft.Base.Drawing`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **measureString** `static` | [Size](../Stimulsoft_System_Drawing/Size.md) |  |
| **parseColor** `static` | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **parseHtmlToStates** `static` | [StiHtmlState](StiHtmlState.md)[] |  |
| **prepareStateText** `static` | [StringBuilder](../Stimulsoft_System_Text/StringBuilder.md) |  |
| **stateToHtml** `static` | string |  |
| **toABC** `static` | string |  |

---

### Method Details

#### measureString `static`

**measureString**(**maxWidth**: number, **font**: [Font](../Stimulsoft_Base_Dashboard/Font.md), **text**: string, **angle**: any, **allowHtmlTags**: any): [Size](../Stimulsoft_System_Drawing/Size.md)

**Parameters**

- **maxWidth** (number)  
- **font** ([Font](../Stimulsoft_Base_Dashboard/Font.md))  
- **text** (string)  
- **angle** (any)  
- **allowHtmlTags** (any)  

**Returns** [Size](../Stimulsoft_System_Drawing/Size.md)


---

#### parseColor `static`

**parseColor**(**colorAttribute**: string, **inheritColor**: [Color](../Stimulsoft_System_Drawing/Color.md)): [Color](../Stimulsoft_System_Drawing/Color.md)

**Parameters**

- **colorAttribute** (string)  
- **inheritColor** ([Color](../Stimulsoft_System_Drawing/Color.md))  

**Returns** [Color](../Stimulsoft_System_Drawing/Color.md)


---

#### parseHtmlToStates `static`

**parseHtmlToStates**(**inputHtml**: string, **baseState**: [StiHtmlState](StiHtmlState.md), **storeStack**: any): [StiHtmlState](StiHtmlState.md)[]

**Parameters**

- **inputHtml** (string)  
- **baseState** ([StiHtmlState](StiHtmlState.md))  
- **storeStack** (any)  

**Returns** [StiHtmlState](StiHtmlState.md)[]


---

#### prepareStateText `static`

**prepareStateText**(**stateText**: [StringBuilder](../Stimulsoft_System_Text/StringBuilder.md)): [StringBuilder](../Stimulsoft_System_Text/StringBuilder.md)

**Parameters**

- **stateText** ([StringBuilder](../Stimulsoft_System_Text/StringBuilder.md))  

**Returns** [StringBuilder](../Stimulsoft_System_Text/StringBuilder.md)


---

#### stateToHtml `static`

**stateToHtml**(**state**: [StiHtmlState](StiHtmlState.md), **state2**: [StiHtmlState](StiHtmlState.md), **text**: string, **lineInfoIndent**: number, **onlyState**: any): string

**Parameters**

- **state** ([StiHtmlState](StiHtmlState.md))  
- **state2** ([StiHtmlState](StiHtmlState.md))  
- **text** (string)  
- **lineInfoIndent** (number)  
- **onlyState** (any)  

**Returns** string


---

#### toABC `static`

**toABC**(**value**: number): string

**Parameters**

- **value** (number)  

**Returns** string


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **align** | any |  |
| **align** | any |  |
| **align** | any |  |
| **ch** | any |  |
| **color** | any |  |
| **color** | any |  |
| **color** | any |  |
| **colorSt** | any |  |
| **colorSt** | any |  |
| **ffontSize** | any |  |
| **ffontSize** | any |  |
| **ffontSize** | any |  |
| **ffontSize** | any |  |
| **ffontSize** | any |  |
| **ffontSize** | any |  |
| **ffontSize** | any |  |
| **flag** | any |  |
| **flag** | any |  |
| **flag** | any |  |
| **flag** | any |  |
| **fontIndex** | any |  |
| **fontIndex2** | any |  |
| **fontSizeAttribute** | any |  |
| **indexChar** | any |  |
| **indexChar** | any |  |
| **indexChar** | any |  |
| **inputName** | any |  |
| **isFirstListItem** | any |  |
| **isListItem** | any |  |
| **isListItem** | any |  |
| **isListItem** | any |  |
| **isListItem** | any |  |
| **isPreviousEndLine** | any |  |
| **isPreviousEndLine** | any |  |
| **lastCR** | any |  |
| **lastState** | any |  |
| **lastSymIsSpace** | any |  |
| **lastSymIsSpace** | any |  |
| **lastSymIsSpace** | any |  |
| **lastSymIsSpace** | any |  |
| **lastSymIsSpace** | any |  |
| **lastSymIsSpace** | any |  |
| **lastSymIsSpace** | any |  |
| **lastSymIsSpace** | any |  |
| **lastSymIsSpace** | any |  |
| **lastSymIsSpace** | any |  |
| **lastSymIsSpace** | any |  |
| **lastSymIsSpace** | any |  |
| **lastTextIndex** | any |  |
| **lastTextIndex** | any |  |
| **letterSpacing** | any |  |
| **lineHeight** | any |  |
| **lineHeight** | any |  |
| **lines** | any |  |
| **marker** | any |  |
| **marker** | any |  |
| **marker** | any |  |
| **marker** | any |  |
| **paragraphLineHeight** | any |  |
| **pos** | any |  |
| **pos** | any |  |
| **pos** | any |  |
| **pos** | any |  |
| **pos2** | any |  |
| **pos2** | any |  |
| **position** | any |  |
| **position** | any |  |
| **scaling** | any |  |
| **scaling** | any |  |
| **scaling** | any |  |
| **scaling** | any |  |
| **scaling** | any |  |
| **scaling** | any |  |
| **st** | any |  |
| **st** | any |  |
| **state** | any |  |
| **state** | any |  |
| **state** | any |  |
| **state** | any |  |
| **state** | any |  |
| **state** | any |  |
| **state** | any |  |
| **state** | any |  |
| **state** | any |  |
| **state** | any |  |
| **state** | any |  |
| **state** | any |  |
| **state** | any |  |
| **state** | any |  |
| **state** | any |  |
| **state** | any |  |
| **state** | any |  |
| **state** | any |  |
| **state** | any |  |
| **state** | any |  |
| **state** | any |  |
| **state** | any |  |
| **state** | any |  |
| **state** | any |  |
| **state** | any |  |
| **state** | any |  |
| **state** | any |  |
| **state** | any |  |
| **state** | any |  |
| **state** | any |  |
| **state** | any |  |
| **state** | any |  |
| **stateFont** | any |  |
| **stateFont** | any |  |
| **tDistanceBetweenTabs** | any |  |
| **tFirstTabOffset** | any |  |
| **tag** | any |  |
| **tempValue** | any |  |
| **text** | any |  |
| **text** | any |  |
| **unit** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **wordSpacing** | any |  |
