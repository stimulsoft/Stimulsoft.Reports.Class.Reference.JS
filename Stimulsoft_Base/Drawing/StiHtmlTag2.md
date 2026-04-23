---
title: "StiHtmlTag2 Class"
---

## StiHtmlTag2 Class

**Namespace:** `Stimulsoft.Base.Drawing`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([StiHtmlTag](StiHtmlTag.md) tag, [StiHtmlTag2State](StiHtmlTag2State.md) state) |  |

**constructor**(**tag**: [StiHtmlTag](StiHtmlTag.md), **state**: [StiHtmlTag2State](StiHtmlTag2State.md))

**Parameters**

- **tag** ([StiHtmlTag](StiHtmlTag.md))  
- **state** ([StiHtmlTag2State](StiHtmlTag2State.md))  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **isEmpty** | boolean |  |
| **isEnd** | boolean |  |
| **isStart** | boolean |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **equals** | boolean |  |
| **getAttribute** | string |  |
| **getAttributePair** | [TagPair](TagPair.md) |  |
| **hasAttribute** | boolean |  |
| **isEndTag** | boolean |  |
| **isStartTag** | boolean |  |
| **toString** | string |  |

---

### Method Details

#### equals

**equals**(**tag2**: [StiHtmlTag2](StiHtmlTag2.md)): boolean

**Parameters**

- **tag2** ([StiHtmlTag2](StiHtmlTag2.md))  

**Returns** boolean


---

#### getAttribute

**getAttribute**(**name**: string): string

**Parameters**

- **name** (string)  

**Returns** string


---

#### getAttributePair

**getAttributePair**(**name**: string): [TagPair](TagPair.md)

**Parameters**

- **name** (string)  

**Returns** [TagPair](TagPair.md)


---

#### hasAttribute

**hasAttribute**(**name**: string): boolean

**Parameters**

- **name** (string)  

**Returns** boolean


---

#### isEndTag

**isEndTag**(**tag**: [StiHtmlTag](StiHtmlTag.md)): boolean

**Parameters**

- **tag** ([StiHtmlTag](StiHtmlTag.md))  

**Returns** boolean


---

#### isStartTag

**isStartTag**(**tag**: [StiHtmlTag](StiHtmlTag.md)): boolean

**Parameters**

- **tag** ([StiHtmlTag](StiHtmlTag.md))  

**Returns** boolean


---

#### toString

**toString**(): string

**Returns** string

