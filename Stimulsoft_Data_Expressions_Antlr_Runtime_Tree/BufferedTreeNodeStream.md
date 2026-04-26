---
title: "BufferedTreeNodeStream Class"
---

## BufferedTreeNodeStream Class

**Namespace:** `Stimulsoft.Data.Expressions.Antlr.Runtime.Tree`

A buffered stream of tree nodes.  Nodes can be from a tree of ANY kind.
 This node stream sucks all nodes out of the tree specified in
 the constructor during construction and makes pointers into
 the tree using an array of Object pointers. The stream necessarily
 includes pointers to DOWN and UP and EOF nodes.
 This stream knows how to mark/release for backtracking.
 This stream is most suitable for tree interpreters that need to
 jump around a lot or for tree parsers requiring speed (at cost of memory).
 There is some duplicated functionality here with UnBufferedTreeNodeStream
 but just in bookkeeping, not tree walking etc...
 TARGET DEVELOPERS:
 This is the old CommonTreeNodeStream that buffered up entire node stream.
 No need to implement really as new CommonTreeNodeStream is much better
 and covers what we need.

### Inheritance

Implements: ITreeNodeStream, [ITokenStreamInformation](../Stimulsoft_Data_Expressions_Antlr_Runtime/ITokenStreamInformation.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([ITreeAdaptor](ITreeAdaptor.md) adaptor, any tree, number initialBufferSize) |  |

**constructor**(**adaptor**: [ITreeAdaptor](ITreeAdaptor.md), **tree**: any, **initialBufferSize**: number)

**Parameters**

- **adaptor** ([ITreeAdaptor](ITreeAdaptor.md))  
- **tree** (any)  
- **initialBufferSize** (number)  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **count** | number |  |
| **index** | number |  |
| **lastRealToken** | [IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md) |  |
| **lastToken** | [IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md) |  |
| **sourceName** | string |  |
| **tokenStream** | ITokenStream |  |
| **treeAdaptor** | [ITreeAdaptor](ITreeAdaptor.md) |  |
| **treeSource** | any |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **addNavigationNode** | void | As we flatten the tree, we use UP, DOWN nodes to represent the tree structure. When debugging we need unique nodes so instantiate new ones when uniqueNavigationNodes is true. |
| **consume** | void |  |
| **fillBuffer** | void | Walk tree with depth-first-search and fill nodes buffer. Don't do DOWN, UP nodes if its a list (t is isNil). |
| **fillBuffer2** | void |  |
| **getCurrentSymbol** | any |  |
| **getNodeIndex** | number | What is the stream index for node? 0..n-1 Return -1 if node not found. |
| **implements** | any[] |  |
| **iterator** | any[] |  |
| **la** | number |  |
| **lb** | void | Look backwards k nodes |
| **lt** | any |  |
| **mark** | number |  |
| **pop** | number | Seek back to previous index saved during last push() call. Return top of stack (return index). |
| **push** | void | Make stream jump to a new location, saving old location. Switch back with pop(). |
| **release** | void |  |
| **replaceChildren** | void |  |
| **reset** | void |  |
| **rewind** | void |  |
| **rewind2** | void |  |
| **seek** | void |  |
| **toString** | string |  |
| **toTokenString** | string |  |
| **toTokenTypeString** | string | Used for testing, just return the token type stream |

---

### Method Details

#### addNavigationNode

**addNavigationNode**(**ttype**: number): void

As we flatten the tree, we use UP, DOWN nodes to represent
 the tree structure.  When debugging we need unique nodes
 so instantiate new ones when uniqueNavigationNodes is true.

**Parameters**

- **ttype** (number)  


---

#### consume

**consume**(): void


---

#### fillBuffer

**fillBuffer**(): void

Walk tree with depth-first-search and fill nodes buffer.
 Don't do DOWN, UP nodes if its a list (t is isNil).


---

#### fillBuffer2

**fillBuffer2**(**t**: any): void

**Parameters**

- **t** (any)  


---

#### getCurrentSymbol

**getCurrentSymbol**(): any

**Returns** any


---

#### getNodeIndex

**getNodeIndex**(**node**: any): number

What is the stream index for node? 0..n-1
 Return -1 if node not found.

**Parameters**

- **node** (any)  

**Returns** number


---

#### implements

**implements**(): any[]

**Returns** any[]


---

#### iterator

**iterator**(): any[]

**Returns** any[]


---

#### la

**la**(**i**: number): number

**Parameters**

- **i** (number)  

**Returns** number


---

#### lb

**lb**(**k**: number): void

Look backwards k nodes

**Parameters**

- **k** (number)  


---

#### lt

**lt**(**k**: number): any

**Parameters**

- **k** (number)  

**Returns** any


---

#### mark

**mark**(): number

**Returns** number


---

#### pop

**pop**(): number

Seek back to previous index saved during last push() call.
 Return top of stack (return index).

**Returns** number


---

#### push

**push**(**index**: number): void

Make stream jump to a new location, saving old location.
 Switch back with pop().

**Parameters**

- **index** (number)  


---

#### release

**release**(**marker**: number): void

**Parameters**

- **marker** (number)  


---

#### replaceChildren

**replaceChildren**(**parent**: any, **startChildIndex**: number, **stopChildIndex**: number, **t**: any): void

**Parameters**

- **parent** (any)  
- **startChildIndex** (number)  
- **stopChildIndex** (number)  
- **t** (any)  


---

#### reset

**reset**(): void


---

#### rewind

**rewind**(): void


---

#### rewind2

**rewind2**(**marker**: number): void

**Parameters**

- **marker** (number)  


---

#### seek

**seek**(**index**: number): void

**Parameters**

- **index** (number)  


---

#### toString

**toString**(**start**: any, **stop**: any): string

**Parameters**

- **start** (any)  
- **stop** (any)  

**Returns** string


---

#### toTokenString

**toTokenString**(**start**: number, **stop**: number): string

**Parameters**

- **start** (number)  
- **stop** (number)  

**Returns** string


---

#### toTokenTypeString

**toTokenTypeString**(): string

Used for testing, just return the token type stream

**Returns** string


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **DEFAULT_INITIAL_BUFFER_SIZE** | any |  |
| **INITIAL_CALL_STACK_SIZE** | any |  |
| **adaptor** | [ITreeAdaptor](ITreeAdaptor.md) | What tree adaptor was used to build these trees |
| **calls** | [Stack](../Stimulsoft_System_Collections_Generic/Stack.md)<number> | Stack of indexes used for push/pop calls |
| **down** | any |  |
| **endTokenIndex** | any |  |
| **endTokenIndex** | any |  |
| **eof** | any |  |
| **lastMarker** | number | Track the last mark() call result value for use in rewind(). |
| **maxLookBehind** | any |  |
| **navNode** | any |  |
| **navNode** | any |  |
| **navNode** | any |  |
| **navNode** | any |  |
| **nodes** | any[] | The complete mapping from stream index to tree node. This buffer includes pointers to DOWN, UP, and EOF nodes. It is built upon ctor invocation. The elements are type Object as we don't what the trees look like. Load upon first need of the buffer so we can set token types of interest for reverseIndexing. Slows us down a wee bit to do all of the if p==-1 testing everywhere though. |
| **p** | any | The index into the nodes list of the current node (next node to consume). If -1, nodes array not filled yet. |
| **root** | any | Pull nodes from which tree? |
| **t** | any |  |
| **t** | any |  |
| **t** | any |  |
| **text** | any |  |
| **text2** | any |  |
| **token** | any |  |
| **tokens** | ITokenStream | IF this tree (root) was created from a token stream, track it. |
| **uniqueNavigationNodes** | any | Reuse same DOWN, UP navigation nodes unless this is true |
| **up** | any |  |
