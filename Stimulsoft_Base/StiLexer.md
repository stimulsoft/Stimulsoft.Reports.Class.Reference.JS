---
title: "StiLexer Class"
---

## StiLexer Class

**Namespace:** `Stimulsoft.Base`

Performs the lexical analysis.

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **text** | string | Gets or sets text for analys. |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getPosition** | [StiPosition](StiPosition.md) | Gets position of token in text. |
| **savePosToken** | void | Saves position of token in text. |
| **scanIdent** | [StiToken](../Stimulsoft_Report_Engine_StiParser/StiToken.md) | Scans the identifier. |
| **scanNumber** | [StiToken](../Stimulsoft_Report_Engine_StiParser/StiToken.md) | Scans the number. |
| **scanString** | [StiToken](../Stimulsoft_Report_Engine_StiParser/StiToken.md) | Scans the string. |
| **waitAssign2** | boolean | Wait the assign. |
| **waitComma2** | boolean | Wait the right bracket. |
| **waitLbrace2** | boolean | Wait the left brace. |
| **waitLparen2** | boolean | Wait the left paren. |
| **waitRbrace2** | boolean | Wait the right brace. |
| **waitRparen2** | boolean | Wait the right paren. |
| **waitSemicolon2** | boolean | Wait the semicolon. |

---

### Method Details

#### getPosition

**getPosition**(**positionInText**: number): [StiPosition](StiPosition.md)

Gets position of token in text.

**Parameters**

- **positionInText** (number) — Position in text.  

**Returns** [StiPosition](StiPosition.md) — Position of token in text.


---

#### savePosToken

**savePosToken**(): void

Saves position of token in text.


---

#### scanIdent

**scanIdent**(): [StiToken](../Stimulsoft_Report_Engine_StiParser/StiToken.md)

Scans the identifier.

**Returns** [StiToken](../Stimulsoft_Report_Engine_StiParser/StiToken.md) — Token containing identifier.


---

#### scanNumber

**scanNumber**(): [StiToken](../Stimulsoft_Report_Engine_StiParser/StiToken.md)

Scans the number.

**Returns** [StiToken](../Stimulsoft_Report_Engine_StiParser/StiToken.md) — Token containing number.


---

#### scanString

**scanString**(): [StiToken](../Stimulsoft_Report_Engine_StiParser/StiToken.md)

Scans the string.

**Returns** [StiToken](../Stimulsoft_Report_Engine_StiParser/StiToken.md) — Token containing string.


---

#### waitAssign2

**waitAssign2**(): boolean

Wait the assign.

**Returns** boolean


---

#### waitComma2

**waitComma2**(): boolean

Wait the right bracket.

**Returns** boolean


---

#### waitLbrace2

**waitLbrace2**(): boolean

Wait the left brace.

**Returns** boolean


---

#### waitLparen2

**waitLparen2**(): boolean

Wait the left paren.

**Returns** boolean


---

#### waitRbrace2

**waitRbrace2**(): boolean

Wait the right brace.

**Returns** boolean


---

#### waitRparen2

**waitRparen2**(): boolean

Wait the right paren.

**Returns** boolean


---

#### waitSemicolon2

**waitSemicolon2**(): boolean

Wait the semicolon.

**Returns** boolean


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **baseText** | string | Gets or sets text for analys. |
| **isDecimal** | any |  |
| **isDouble** | any |  |
| **isDouble** | any |  |
| **isFloat** | any |  |
| **isFrac** | any |  |
| **isLong** | any |  |
| **isScript** | any |  |
| **positionInText** | number | Gets or sets current position in text. |
