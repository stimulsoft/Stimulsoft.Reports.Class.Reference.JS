---
title: "LegacyCommonTokenStream Class"
---

## LegacyCommonTokenStream Class

**Namespace:** `Stimulsoft.Data.Expressions.Antlr.Runtime`

The most common stream of this.tokens is one where every token is buffered up
 and this.tokens are prefiltered for a certain channel (the parser will only
 see these this.tokens and cannot change the filter channel number during the
 parse).
 TODO: how to access the full token stream?  How to track all this.tokens matched per rule?

### Inheritance

Implements: ITokenStream  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([ITokenSource](ITokenSource.md) tokenSource, number channel) |  |

**constructor**(**tokenSource**: [ITokenSource](ITokenSource.md), **channel**: number)

**Parameters**

- **tokenSource** ([ITokenSource](ITokenSource.md))  
- **channel** (number)  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **count** | number |  |
| **index** | number |  |
| **sourceName** | string |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **consume** | void | Move the input pointer to the next incoming token. The stream must become active with LT(1) available. consume() simply moves the input pointer so that LT(1) points at the next input symbol. Consume at least one token. Walk past any token not on the channel the parser is listening to. |
| **discardTokenType** | void |  |
| **fillBuffer** | void | Load all this.tokens from the token source and put in this.tokens. This is done upon first LT request because you might want to set some token type / channel overrides before filling buffer. |
| **getTokens** | [IToken](IToken.md)[] |  |
| **getTokens2** | [IToken](IToken.md)[] | Given a start and stop index, return a List of all this.tokens in the token type BitSet. Return null if no this.tokens were found. This method looks at both on and off channel this.tokens. |
| **implements** | any[] |  |
| **la** | number |  |
| **lb** | [IToken](IToken.md) | Look backwards k this.tokens on-channel this.tokens |
| **lt** | [IToken](IToken.md) | Get the ith token from the current position 1..n where k=1 is the first symbol of lookahead. |
| **mark** | number |  |
| **release** | void |  |
| **reset** | void |  |
| **rewind** | void |  |
| **seek** | void |  |
| **setDiscardOffChannelTokens** | void |  |
| **setTokenSource** | void | Reset this token stream by setting its token source. |
| **setTokenTypeChannel** | void | A simple filter mechanism whereby you can tell this token stream to force all this.tokens of type ttype to be on channel. For example, when interpreting, we cannot exec actions so we need to tell the stream to force all WS and NEWLINE to be a different, ignored channel. |
| **skipOffTokenChannels** | number | Given a starting index, return the index of the first on-channel token. |
| **skipOffTokenChannelsReverse** | number |  |
| **toString** | string |  |
| **toString2** | string |  |
| **toString3** | string |  |

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

#### discardTokenType

**discardTokenType**(**ttype**: number): void

**Parameters**

- **ttype** (number)  


---

#### fillBuffer

**fillBuffer**(): void

Load all this.tokens from the token source and put in this.tokens.
 This is done upon first LT request because you might want to
 set some token type / channel overrides before filling buffer.


---

#### getTokens

**getTokens**(): [IToken](IToken.md)[]

**Returns** [IToken](IToken.md)[]


---

#### getTokens2

**getTokens2**(**start**: number, **stop**: number, **types**: [BitSet](BitSet.md)): [IToken](IToken.md)[]

Given a start and stop index, return a List of all this.tokens in
 the token type BitSet.  Return null if no this.tokens were found.  This
 method looks at both on and off channel this.tokens.

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

Look backwards k this.tokens on-channel this.tokens

**Parameters**

- **k** (number)  

**Returns** [IToken](IToken.md)


---

#### lt

**lt**(**k**: number): [IToken](IToken.md)

Get the ith token from the current position 1..n where k=1 is the
 first symbol of lookahead.

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

#### setDiscardOffChannelTokens

**setDiscardOffChannelTokens**(**discardOffChannelTokens**: boolean): void

**Parameters**

- **discardOffChannelTokens** (boolean)  


---

#### setTokenSource

**setTokenSource**(**tokenSource**: [ITokenSource](ITokenSource.md)): void

Reset this token stream by setting its token source.

**Parameters**

- **tokenSource** ([ITokenSource](ITokenSource.md))  


---

#### setTokenTypeChannel

**setTokenTypeChannel**(**ttype**: number, **channel**: number): void

A simple filter mechanism whereby you can tell this token stream
 to force all this.tokens of type ttype to be on channel.  For example,
 when interpreting, we cannot exec actions so we need to tell
 the stream to force all WS and NEWLINE to be a different, ignored
 channel.

**Parameters**

- **ttype** (number)  
- **channel** (number)  


---

#### skipOffTokenChannels

**skipOffTokenChannels**(**i**: number): number

Given a starting index, return the index of the first on-channel token.

**Parameters**

- **i** (number)  

**Returns** number


---

#### skipOffTokenChannelsReverse

**skipOffTokenChannelsReverse**(**i**: number): number

**Parameters**

- **i** (number)  

**Returns** number


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


---

#### toString3

**toString3**(**start**: [IToken](IToken.md), **stop**: [IToken](IToken.md)): string

**Parameters**

- **start** ([IToken](IToken.md))  
- **stop** ([IToken](IToken.md))  

**Returns** string


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **_tokenSource** | [ITokenSource](ITokenSource.md) |  |
| **channel** | any | Skip tokens on any channel but this one; this is how we skip whitespace... |
| **channelOverrideMap** | Dictionary<number, number> | Map from token type to channel to override some Tokens' channel numbers |
| **discard** | any |  |
| **discard** | any |  |
| **discardOffChannelTokens** | any | By default, track all incoming this.tokens |
| **discardSet** | number[] | Set of token types; discard any this.tokens with this type |
| **filteredTokens** | any |  |
| **i** | any |  |
| **i** | any |  |
| **lastMarker** | number | Track the last mark() call result value for use in rewind(). |
| **p** | any | The index into the this.tokens list of the current token (next token to consume). p==-1 indicates that the this.tokens list is empty |
| **range** | any | How deep have we gone? |
| **start** | any |  |
| **stop** | any |  |
| **stop** | any |  |
| **t** | any |  |
| **tokenSource** | [ITokenSource](ITokenSource.md) |  |
| **tokens** | [IToken](IToken.md)[] | Record every single token pulled from the source so we can reproduce chunks of it later. |
