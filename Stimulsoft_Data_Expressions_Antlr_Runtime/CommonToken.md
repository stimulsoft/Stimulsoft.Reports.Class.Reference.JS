---
title: "CommonToken Class"
---

## CommonToken Class

**Namespace:** `Stimulsoft.Data.Expressions.Antlr.Runtime`

### Inheritance

Implements: [IToken](IToken.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**() |  |

**constructor**()


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **inputStream** | ICharStream |  |
| **startIndex** | number |  |
| **stopIndex** | number |  |
| **text** | string |  |
| **tokenIndex** | number |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **create1** `static` | [CommonToken](CommonToken.md) |  |
| **create2** `static` | [CommonToken](CommonToken.md) |  |
| **create3** `static` | [CommonToken](CommonToken.md) |  |
| **create4** `static` | [CommonToken](CommonToken.md) |  |
| **implements** | any[] |  |
| **toString** | string |  |

---

### Method Details

#### create1 `static`

**create1**(**type**: number): [CommonToken](CommonToken.md)

**Parameters**

- **type** (number)  

**Returns** [CommonToken](CommonToken.md)


---

#### create2 `static`

**create2**(**input**: ICharStream, **type**: number, **channel**: number, **start**: number, **stop**: number): [CommonToken](CommonToken.md)

**Parameters**

- **input** (ICharStream)  
- **type** (number)  
- **channel** (number)  
- **start** (number)  
- **stop** (number)  

**Returns** [CommonToken](CommonToken.md)


---

#### create3 `static`

**create3**(**type**: number, **text**: string): [CommonToken](CommonToken.md)

**Parameters**

- **type** (number)  
- **text** (string)  

**Returns** [CommonToken](CommonToken.md)


---

#### create4 `static`

**create4**(**oldToken**: [IToken](IToken.md)): [CommonToken](CommonToken.md)

**Parameters**

- **oldToken** ([IToken](IToken.md))  

**Returns** [CommonToken](CommonToken.md)


---

#### implements

**implements**(): any[]

**Returns** any[]


---

#### toString

**toString**(): string

**Returns** string


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **_text** | string | We need to be able to change the text once in a while. If this is non-null, then getText should return this. Note that start/stop are not affected by changing this. |
| **channel** | any |  |
| **channelStr** | any |  |
| **charPositionInLine** | any |  |
| **index** | any | What token number is this from 0..n-1 tokens; &lt; 0 implies invalid index |
| **input** | ICharStream |  |
| **line** | number |  |
| **start** | number | The char position into the input buffer where this token starts |
| **stop** | number | The char position into the input buffer where this token stops |
| **txt** | any |  |
| **txt** | any |  |
| **txt** | any |  |
| **txt** | any |  |
| **type** | number |  |
