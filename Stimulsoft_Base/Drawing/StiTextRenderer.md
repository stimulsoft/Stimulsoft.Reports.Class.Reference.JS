---
title: "StiTextRenderer Class"
---

## StiTextRenderer Class

**Namespace:** `Stimulsoft.Base.Drawing`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **measureString** `static` | [Size](../../Stimulsoft_System/Drawing/Size.md) |  |
| **parseColor** `static` | [Color](../../Stimulsoft_System/Drawing/Color.md) |  |
| **parseHtmlToStates** `static` | [StiHtmlState](StiHtmlState.md)[] |  |
| **prepareStateText** `static` | [StringBuilder](../../Stimulsoft_System/Text/StringBuilder.md) |  |
| **stateToHtml** `static` | string |  |
| **toABC** `static` | string |  |

---

### Method Details

#### measureString `static`

**measureString**(**maxWidth**: number, **font**: [Font](../Dashboard/Font.md), **text**: string, **angle**: any, **allowHtmlTags**: any): [Size](../../Stimulsoft_System/Drawing/Size.md)

**Parameters**

- **maxWidth** (number)  
- **font** ([Font](../Dashboard/Font.md))  
- **text** (string)  
- **angle** (any)  
- **allowHtmlTags** (any)  

**Returns** [Size](../../Stimulsoft_System/Drawing/Size.md)


---

#### parseColor `static`

**parseColor**(**colorAttribute**: string, **inheritColor**: [Color](../../Stimulsoft_System/Drawing/Color.md)): [Color](../../Stimulsoft_System/Drawing/Color.md)

**Parameters**

- **colorAttribute** (string)  
- **inheritColor** ([Color](../../Stimulsoft_System/Drawing/Color.md))  

**Returns** [Color](../../Stimulsoft_System/Drawing/Color.md)


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

**prepareStateText**(**stateText**: [StringBuilder](../../Stimulsoft_System/Text/StringBuilder.md)): [StringBuilder](../../Stimulsoft_System/Text/StringBuilder.md)

**Parameters**

- **stateText** ([StringBuilder](../../Stimulsoft_System/Text/StringBuilder.md))  

**Returns** [StringBuilder](../../Stimulsoft_System/Text/StringBuilder.md)


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

