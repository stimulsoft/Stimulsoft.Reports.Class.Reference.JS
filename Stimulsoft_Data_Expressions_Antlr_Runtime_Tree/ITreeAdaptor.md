---
title: "ITreeAdaptor Interface"
---

## ITreeAdaptor Interface

**Namespace:** `Stimulsoft.Data.Expressions.Antlr.Runtime.Tree`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **addChild** | void | Add a child to the tree t. If child is a flat tree (a list), make all in list children of t. Warning: if t has no children, but child does and child isNil then you can decide it is ok to move children to t via t.children = child.children; i.e., without copying the array. Just make sure that this is consistent with have the user will build ASTs. Do nothing if t or child is null. |
| **becomeRoot** | any | Create a node for newRoot make it the root of oldRoot. If oldRoot is a nil root, just copy or move the children to newRoot. If not a nil root, make oldRoot a child of newRoot. |
| **create** | any | Create a tree node from Token object; for CommonTree type trees, then the token just becomes the payload. This is the most common create call. Override if you want another kind of node to be built. |
| **create2** | void | Same as create(tokenType,fromToken) except set the text too. This is invoked from an imaginary node ref on right side of a rewrite rule as IMAG[$tokenLabel, "IMAG"]. This should invoke createToken(Token). |
| **create3** | any | Same as create(fromToken) except set the text too. This is invoked when the <c>text</c> terminal option is set, as in IMAG&lt;text='IMAG'&gt;. This should invoke createToken(Token). |
| **create4** | any | Create a new node derived from a token, with a new token type. This is invoked from an imaginary node ref on right side of a rewrite rule as IMAG["IMAG"]. This should invoke createToken(int,String). |
| **deleteChild** | any | Remove ith child and shift children down from right. |
| **dupNode** | any |  |
| **dupNode2** | any | Duplicate a single tree node. Override if you want another kind of node to be built. |
| **dupTree** | any | Duplicate tree recursively, using dupNode() for each node |
| **errorNode** | any | Return a tree node representing an error. This node records the tokens consumed during error recovery. The start token indicates the input symbol at which the error was detected. The stop token indicates the last symbol consumed during recovery. You must specify the input stream so that the erroneous text can be packaged up in the error node. The exception could be useful to some applications; default implementation stores ptr to it in the CommonErrorNode. This only makes sense during token parsing, not tree parsing. Tree parsing should happen only when parsing and tree construction succeed. |
| **getChild** | any | Get a child 0..n-1 node |
| **getChildCount** | number | How many children? If 0, then this is a leaf node |
| **getChildIndex** | number | What index is this node in the child list? Range: 0..n-1 If your node type doesn't handle this, it's ok but the tree rewrites in tree parsers need this functionality. |
| **getParent** | any | Who is the parent node of this node; if null, implies node is root. If your node type doesn't handle this, it's ok but the tree rewrites in tree parsers need this functionality. |
| **getText** | string |  |
| **getToken** | [IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md) | Return the token object from which this node was created. Currently used only for printing an error message. The error display routine in BaseRecognizer needs to display where the input the error occurred. If your tree of limitation does not store information that can lead you to the token, you can create a token filled with the appropriate information and pass that back. See BaseRecognizer.getErrorMessage(). |
| **getTokenStartIndex** | number | Get the token start index for this subtree; return -1 if no such index |
| **getTokenStopIndex** | number | Get the token stop index for this subtree; return -1 if no such index |
| **getType** | number | For tree parsing, I need to know the token type of a node |
| **getUniqueID** | number | For identifying trees. How to identify nodes so we can say "add node to a prior node"? Even becomeRoot is an issue. Use System.identityHashCode(node) usually. |
| **isNil** | boolean | Is tree considered a nil node used to make lists of child nodes? |
| **nil** | any | Return a nil node (an empty but non-null node) that can hold a list of element as the children. If you want a flat tree (a list) use "t=adaptor.nil(); t.addChild(x); t.addChild(y);" |
| **replaceChildren** | void | Replace from start to stop child index of parent with t, which might be a list. Number of children may be different after this call. If parent is null, don't do anything; must be at root of overall tree. Can't replace whatever points to the parent externally. Do nothing. |
| **rulePostProcessing** | any | Given the root of the subtree created for this rule, post process it to do any simplifications or whatever you want. A required behavior is to convert ^(nil singleSubtree) to singleSubtree as the setting of start/stop indexes relies on a single non-nil root for non-flat trees. Flat trees such as for lists like "idlist : ID+ ;" are left alone unless there is only one ID. For a list, the start/stop indexes are set in the nil node. This method is executed after all rule tree construction and right before setTokenBoundaries(). |
| **setChild** | void | Set ith child (0..n-1) to t; t must be non-null and non-nil node |
| **setChildIndex** | void |  |
| **setParent** | void |  |
| **setText** | void | Node constructors can set the text of a node |
| **setTokenBoundaries** | void | Where are the bounds in the input token stream for this node and all children? Each rule that creates AST nodes will call this method right before returning. Flat trees (i.e., lists) will still usually have a nil root node just to hold the children list. That node would contain the start/stop indexes then. |
| **setType** | void | Node constructors can set the type of a node |

---

### Method Details

#### addChild

**addChild**(**t**: any, **child**: any): void

Add a child to the tree t.  If child is a flat tree (a list), make all
 in list children of t.  Warning: if t has no children, but child does
 and child isNil then you can decide it is ok to move children to t via
 t.children = child.children; i.e., without copying the array.  Just
 make sure that this is consistent with have the user will build
 ASTs.  Do nothing if t or child is null.

**Parameters**

- **t** (any)  
- **child** (any)  


---

#### becomeRoot

**becomeRoot**(**newRoot**: IToken \| any, **oldRoot**: any): any

Create a node for newRoot make it the root of oldRoot.
 If oldRoot is a nil root, just copy or move the children to newRoot.
 If not a nil root, make oldRoot a child of newRoot.

**Parameters**

- **newRoot** (IToken \| any)  
- **oldRoot** (any)  

**Returns** any — Return node created for newRoot.
 Be advised: when debugging ASTs, the DebugTreeAdaptor manually
 calls create(Token child) and then plain becomeRoot(node, node)
 because it needs to trap calls to create, but it can't since it delegates
 to not inherits from the TreeAdaptor.


---

#### create

**create**(**payload**: [IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md)): any

Create a tree node from Token object; for CommonTree type trees,
 then the token just becomes the payload.  This is the most
 common create call.
 Override if you want another kind of node to be built.

**Parameters**

- **payload** ([IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md))  

**Returns** any


---

#### create2

**create2**(**tokenType**: number, **fromToken**: [IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md), **text**: string): void

Same as create(tokenType,fromToken) except set the text too.
 This is invoked from an imaginary node ref on right side of a
 rewrite rule as IMAG[$tokenLabel, "IMAG"].
 This should invoke createToken(Token).

**Parameters**

- **tokenType** (number)  
- **fromToken** ([IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md))  
- **text** (string)  


---

#### create3

**create3**(**fromToken**: [IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md), **text**: string): any

Same as create(fromToken) except set the text too.
 This is invoked when the <c>text</c> terminal option is set, as in
 IMAG&lt;text='IMAG'&gt;.
 This should invoke createToken(Token).

**Parameters**

- **fromToken** ([IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md))  
- **text** (string)  

**Returns** any


---

#### create4

**create4**(**tokenType**: number, **text**: string): any

Create a new node derived from a token, with a new token type.
 This is invoked from an imaginary node ref on right side of a
 rewrite rule as IMAG["IMAG"].
 This should invoke createToken(int,String).

**Parameters**

- **tokenType** (number)  
- **text** (string)  

**Returns** any


---

#### deleteChild

**deleteChild**(**t**: any, **i**: number): any

Remove ith child and shift children down from right.

**Parameters**

- **t** (any)  
- **i** (number)  

**Returns** any


---

#### dupNode

**dupNode**(**type**: number, **treeNode**: any, **text**: string): any

**Parameters**

- **type** (number)  
- **treeNode** (any)  
- **text** (string)  

**Returns** any


---

#### dupNode2

**dupNode2**(**treeNode**: any): any

Duplicate a single tree node.
Override if you want another kind of node to be built.

**Parameters**

- **treeNode** (any)  

**Returns** any


---

#### dupTree

**dupTree**(**tree**: any): any

Duplicate tree recursively, using dupNode() for each node

**Parameters**

- **tree** (any)  

**Returns** any


---

#### errorNode

**errorNode**(**input**: ITokenStream, **start**: [IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md), **stop**: [IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md), **e**: RecognitionException): any

Return a tree node representing an error.  This node records the
 tokens consumed during error recovery.  The start token indicates the
 input symbol at which the error was detected.  The stop token indicates
 the last symbol consumed during recovery.
 You must specify the input stream so that the erroneous text can
 be packaged up in the error node.  The exception could be useful
 to some applications; default implementation stores ptr to it in
 the CommonErrorNode.
 This only makes sense during token parsing, not tree parsing.
 Tree parsing should happen only when parsing and tree construction
 succeed.

**Parameters**

- **input** (ITokenStream)  
- **start** ([IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md))  
- **stop** ([IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md))  
- **e** (RecognitionException)  

**Returns** any


---

#### getChild

**getChild**(**t**: any, **i**: number): any

Get a child 0..n-1 node

**Parameters**

- **t** (any)  
- **i** (number)  

**Returns** any


---

#### getChildCount

**getChildCount**(**t**: any): number

How many children?  If 0, then this is a leaf node

**Parameters**

- **t** (any)  

**Returns** number


---

#### getChildIndex

**getChildIndex**(**t**: any): number

What index is this node in the child list? Range: 0..n-1
 If your node type doesn't handle this, it's ok but the tree rewrites
 in tree parsers need this functionality.

**Parameters**

- **t** (any)  

**Returns** number


---

#### getParent

**getParent**(**t**: any): any

Who is the parent node of this node; if null, implies node is root.
 If your node type doesn't handle this, it's ok but the tree rewrites
 in tree parsers need this functionality.

**Parameters**

- **t** (any)  

**Returns** any


---

#### getText

**getText**(**t**: any): string

**Parameters**

- **t** (any)  

**Returns** string


---

#### getToken

**getToken**(**t**: any): [IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md)

Return the token object from which this node was created.
 Currently used only for printing an error message.
 The error display routine in BaseRecognizer needs to
 display where the input the error occurred. If your
 tree of limitation does not store information that can
 lead you to the token, you can create a token filled with
 the appropriate information and pass that back.  See
 BaseRecognizer.getErrorMessage().

**Parameters**

- **t** (any)  

**Returns** [IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md)


---

#### getTokenStartIndex

**getTokenStartIndex**(**t**: any): number

Get the token start index for this subtree; return -1 if no such index

**Parameters**

- **t** (any)  

**Returns** number


---

#### getTokenStopIndex

**getTokenStopIndex**(**t**: any): number

Get the token stop index for this subtree; return -1 if no such index

**Parameters**

- **t** (any)  

**Returns** number


---

#### getType

**getType**(**t**: any): number

For tree parsing, I need to know the token type of a node

**Parameters**

- **t** (any)  

**Returns** number


---

#### getUniqueID

**getUniqueID**(**node**: any): number

For identifying trees.
 How to identify nodes so we can say "add node to a prior node"?
 Even becomeRoot is an issue.  Use System.identityHashCode(node)
 usually.

**Parameters**

- **node** (any)  

**Returns** number


---

#### isNil

**isNil**(**tree**: any): boolean

Is tree considered a nil node used to make lists of child nodes?

**Parameters**

- **tree** (any)  

**Returns** boolean


---

#### nil

**nil**(): any

Return a nil node (an empty but non-null node) that can hold
 a list of element as the children.  If you want a flat tree (a list)
 use "t=adaptor.nil(); t.addChild(x); t.addChild(y);"

**Returns** any


---

#### replaceChildren

**replaceChildren**(**parent**: any, **startChildIndex**: number, **stopChildIndex**: number, **t**: any): void

Replace from start to stop child index of parent with t, which might
 be a list.  Number of children may be different after this call.
 If parent is null, don't do anything; must be at root of overall tree.
 Can't replace whatever points to the parent externally.  Do nothing.

**Parameters**

- **parent** (any)  
- **startChildIndex** (number)  
- **stopChildIndex** (number)  
- **t** (any)  


---

#### rulePostProcessing

**rulePostProcessing**(**root**: any): any

Given the root of the subtree created for this rule, post process
 it to do any simplifications or whatever you want.  A required
 behavior is to convert ^(nil singleSubtree) to singleSubtree
 as the setting of start/stop indexes relies on a single non-nil root
 for non-flat trees.
 Flat trees such as for lists like "idlist : ID+ ;" are left alone
 unless there is only one ID.  For a list, the start/stop indexes
 are set in the nil node.
 This method is executed after all rule tree construction and right
 before setTokenBoundaries().

**Parameters**

- **root** (any)  

**Returns** any


---

#### setChild

**setChild**(**t**: any, **i**: number, **child**: any): void

Set ith child (0..n-1) to t; t must be non-null and non-nil node

**Parameters**

- **t** (any)  
- **i** (number)  
- **child** (any)  


---

#### setChildIndex

**setChildIndex**(**t**: any, **index**: number): void

**Parameters**

- **t** (any)  
- **index** (number)  


---

#### setParent

**setParent**(**t**: any, **parent**: any): void

**Parameters**

- **t** (any)  
- **parent** (any)  


---

#### setText

**setText**(**t**: any, **text**: string): void

Node constructors can set the text of a node

**Parameters**

- **t** (any)  
- **text** (string)  


---

#### setTokenBoundaries

**setTokenBoundaries**(**t**: any, **startToken**: [IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md), **stopToken**: [IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md)): void

Where are the bounds in the input token stream for this node and
 all children?  Each rule that creates AST nodes will call this
 method right before returning.  Flat trees (i.e., lists) will
 still usually have a nil root node just to hold the children list.
 That node would contain the start/stop indexes then.

**Parameters**

- **t** (any)  
- **startToken** ([IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md))  
- **stopToken** ([IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md))  


---

#### setType

**setType**(**t**: any, **type**: number): void

Node constructors can set the type of a node

**Parameters**

- **t** (any)  
- **type** (number)  

