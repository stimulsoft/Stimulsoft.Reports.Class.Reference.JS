---
title: "BufferedTokenStream Class"
---

## BufferedTokenStream Class

**Namespace:** `Stimulsoft.Data.Expressions.Antlr.Runtime`

Buffer all input tokens but do on-demand fetching of new tokens from
 lexer. Useful when the parser or lexer has to set context/mode info before
 proper lexing of future tokens. The ST template parser needs this,
 for example, because it has to constantly flip back and forth between
 inside/output templates. E.g., <c>&lt;names:{hi, &lt;it&gt;}&gt;</c> has to parse names
 as part of an expression but "hi, &lt;it&gt;" as a nested template.
 You can't use this stream if you pass whitespace or other off-channel
 tokens to the parser. The stream can't ignore off-channel tokens.
 (UnbufferedTokenStream is the same way.)
 This is not a subclass of UnbufferedTokenStream because I don't want
 to confuse small moving window of tokens it uses for the full buffer.

### Inheritance

Implements: ITokenStream, [ITokenStreamInformation](ITokenStreamInformation.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([ITokenSource](ITokenSource.md) tokenSource) |  |

**constructor**(**tokenSource**: [ITokenSource](ITokenSource.md))

**Parameters**

- **tokenSource** ([ITokenSource](ITokenSource.md))  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **count** | number |  |
| **index** | number |  |
| **lastRealToken** | [IToken](IToken.md) |  |
| **lastToken** | [IToken](IToken.md) |  |
| **sourceName** | string |  |
| **tokenSource** | [ITokenSource](ITokenSource.md) |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **consume** | void | Move the input pointer to the next incoming token. The stream must become active with LT(1) available. consume() simply moves the input pointer so that LT(1) points at the next input symbol. Consume at least one token. Walk past any token not on the channel the parser is listening to. |
| **fetch** | void | add n elements to buffer |
| **fill** | void |  |
| **getTokens** | [IToken](IToken.md)[] | Given a start and stop index, return a List of all tokens in the token type BitSet. Return null if no tokens were found. This method looks at both on and off channel tokens. |
| **implements** | any[] |  |
| **la** | number |  |
| **lb** | [IToken](IToken.md) |  |
| **lt** | [IToken](IToken.md) |  |
| **mark** | number |  |
| **release** | void |  |
| **reset** | void |  |
| **rewind** | void |  |
| **seek** | void |  |
| **setup** | void |  |
| **sync** | void | Make sure index i in tokens has a token. |
| **toString** | string |  |
| **toString2** | string |  |

---

### Method Details

#### consume

**consume**(): void

Move the input pointer to the next incoming token.  The stream
 must become active with LT(1) available.  consume() simply
 moves the input pointer so that LT(1) points at the next
 input symbol. Consume at least one token.
 Walk past any token not on the channel the parser is listening to.


---

#### fetch

**fetch**(**n**: number): void

add n elements to buffer

**Parameters**

- **n** (number)  


---

#### fill

**fill**(): void


---

#### getTokens

**getTokens**(**start**: number, **stop**: number, **types**: [BitSet](BitSet.md)): [IToken](IToken.md)[]

Given a start and stop index, return a List of all tokens in
 the token type BitSet.  Return null if no tokens were found.  This
 method looks at both on and off channel tokens.

**Parameters**

- **start** (number)  
- **stop** (number)  
- **types** ([BitSet](BitSet.md))  

**Returns** [IToken](IToken.md)[]


---

#### implements

**implements**(): any[]

**Returns** any[]


---

#### la

**la**(**i**: number): number

**Parameters**

- **i** (number)  

**Returns** number


---

#### lb

**lb**(**k**: number): [IToken](IToken.md)

**Parameters**

- **k** (number)  

**Returns** [IToken](IToken.md)


---

#### lt

**lt**(**k**: number): [IToken](IToken.md)

**Parameters**

- **k** (number)  

**Returns** [IToken](IToken.md)


---

#### mark

**mark**(): number

**Returns** number


---

#### release

**release**(**marker**: number): void

**Parameters**

- **marker** (number)  


---

#### reset

**reset**(): void


---

#### rewind

**rewind**(**marker**: number): void

**Parameters**

- **marker** (number)  


---

#### seek

**seek**(**index**: number): void

**Parameters**

- **index** (number)  


---

#### setup

**setup**(): void


---

#### sync

**sync**(**i**: number): void

Make sure index i in tokens has a token.

**Parameters**

- **i** (number)  


---

#### toString

**toString**(): string

**Returns** string


---

#### toString2

**toString2**(**start**: number, **stop**: number): string

**Parameters**

- **start** (number)  
- **stop** (number)  

**Returns** string


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **_p** | any | The index into the tokens list of the current token (next token to consume). tokens[p] should be LT(1). p=-1 indicates need to initialize with first token. The ctor doesn't get a token. First call to LT(1) or whatever gets the first token and sets p=0; |
