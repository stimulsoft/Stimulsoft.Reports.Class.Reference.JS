---
title: "BaseTreeAdaptor Class"
---

## BaseTreeAdaptor Class

**Namespace:** `Stimulsoft.Data.Expressions.Antlr.Runtime.Tree`

A TreeAdaptor that works with any Tree implementation.

### Inheritance

Implements: [ITreeAdaptor](ITreeAdaptor.md)  

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **addChild** | void | Add a child to the tree t. If child is a flat tree (a list), make all in list children of t. Warning: if t has no children, but child does and child isNil then you can decide it is ok to move children to t via t.children = child.children; i.e., without copying the array. Just make sure that this is consistent with have the user will build ASTs. |
| **becomeRoot** | any | If oldRoot is a nil root, just copy or move the children to newRoot. If not a nil root, make oldRoot a child of newRoot. old=^(nil a b c), new=r yields ^(r a b c) old=^(a b c), new=r yields ^(r ^(a b c)) If newRoot is a nil-rooted single child tree, use the single child as the new root node. old=^(nil a b c), new=^(nil r) yields ^(r a b c) old=^(a b c), new=^(nil r) yields ^(r ^(a b c)) If oldRoot was null, it's ok, just return newRoot (even if isNil). old=null, new=r yields r old=null, new=^(nil r) yields ^(nil r) Return newRoot. Throw an exception if newRoot is not a simple node or nil root with a single child node--it must be a root node. If newRoot is ^(nil x) return x as newRoot. Be advised that it's ok for newRoot to point at oldRoot's children; i.e., you don't have to copy the list. We are constructing these nodes so we should have this control for efficiency. |
| **becomeRoot2** | any |  |
| **create** | any |  |
| **create2** | any |  |
| **create3** | any |  |
| **create4** | any |  |
| **create5** | any |  |
| **createToken** | [IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md) | Tell me how to create a token for use with imaginary token nodes. For example, there is probably no input symbol associated with imaginary token DECL, but you need to create it as a payload or whatever for the DECL node as in ^(DECL type ID). This is a variant of createToken where the new token is derived from an actual real input token. Typically this is for converting '{' tokens to BLOCK etc... You'll see r : lc='{' ID+ '}' -> ^(BLOCK[$lc] ID+) ; If you care what the token payload objects' type is, you should override this method and any other createToken variant. |
| **createToken2** | [IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md) | Tell me how to create a token for use with imaginary token nodes. For example, there is probably no input symbol associated with imaginary token DECL, but you need to create it as a payload or whatever for the DECL node as in ^(DECL type ID). If you care what the token payload objects' type is, you should override this method and any other createToken variant. |
| **deleteChild** | any |  |
| **dupNode** | any |  |
| **dupNode2** | any | Duplicate a node. This is part of the factory; override if you want another kind of node to be built. I could use reflection to prevent having to override this but reflection is slow. |
| **dupTree** | any | This is generic in the sense that it will work with any kind of tree (not just ITree interface). It invokes the adaptor routines not the tree node routines to do the construction. |
| **getChild** | any |  |
| **getChildCount** | number |  |
| **getChildIndex** | number |  |
| **getParent** | any |  |
| **getText** | string |  |
| **getToken** | [IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md) |  |
| **getTokenStartIndex** | number |  |
| **getTokenStopIndex** | number |  |
| **getTree** | [ITree](ITree.md) |  |
| **getType** | number |  |
| **getUniqueID** | number |  |
| **implements** | any[] |  |
| **isNil** | boolean |  |
| **nil** | any |  |
| **replaceChildren** | void |  |
| **rulePostProcessing** | any | Transform ^(nil x) to x and nil to null |
| **setChild** | void |  |
| **setChildIndex** | void |  |
| **setParent** | any |  |
| **setText** | void |  |
| **setTokenBoundaries** | void | Track start/stop token for subtree root created for a rule. Only works with Tree nodes. For rules that match nothing, seems like this will yield start=i and stop=i-1 in a nil node. Might be useful info so I'll not force to be i..i. |
| **setType** | void |  |

---

### Method Details

#### addChild

**addChild**(**t**: any, **child**: any): void

Add a child to the tree t.  If child is a flat tree (a list), make all
 in list children of t.  Warning: if t has no children, but child does
 and child isNil then you can decide it is ok to move children to t via
 t.children = child.children; i.e., without copying the array.  Just
 make sure that this is consistent with have the user will build
 ASTs.

**Parameters**

- **t** (any)  
- **child** (any)  


---

#### becomeRoot

**becomeRoot**(**newRoot**: any, **oldRoot**: any): any

If oldRoot is a nil root, just copy or move the children to newRoot.
 If not a nil root, make oldRoot a child of newRoot.
   old=^(nil a b c), new=r yields ^(r a b c)
   old=^(a b c), new=r yields ^(r ^(a b c))
 If newRoot is a nil-rooted single child tree, use the single
 child as the new root node.
   old=^(nil a b c), new=^(nil r) yields ^(r a b c)
   old=^(a b c), new=^(nil r) yields ^(r ^(a b c))
 If oldRoot was null, it's ok, just return newRoot (even if isNil).
   old=null, new=r yields r
   old=null, new=^(nil r) yields ^(nil r)
 Return newRoot.  Throw an exception if newRoot is not a
 simple node or nil root with a single child node--it must be a root
 node.  If newRoot is ^(nil x) return x as newRoot.
 Be advised that it's ok for newRoot to point at oldRoot's
 children; i.e., you don't have to copy the list.  We are
 constructing these nodes so we should have this control for
 efficiency.

**Parameters**

- **newRoot** (any)  
- **oldRoot** (any)  

**Returns** any


---

#### becomeRoot2

**becomeRoot2**(**newRoot**: [IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md), **oldRoot**: any): any

**Parameters**

- **newRoot** ([IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md))  
- **oldRoot** (any)  

**Returns** any


---

#### create

**create**(**payload**: [IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md)): any

**Parameters**

- **payload** ([IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md))  

**Returns** any


---

#### create2

**create2**(**tokenType**: number, **fromToken**: [IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md), **text**: string): any

**Parameters**

- **tokenType** (number)  
- **fromToken** ([IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md))  
- **text** (string)  

**Returns** any


---

#### create3

**create3**(**fromToken**: [IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md), **text**: string): any

**Parameters**

- **fromToken** ([IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md))  
- **text** (string)  

**Returns** any


---

#### create4

**create4**(**tokenType**: number, **text**: string): any

**Parameters**

- **tokenType** (number)  
- **text** (string)  

**Returns** any


---

#### create5

**create5**(**tokenType**: number, **fromToken**: [IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md)): any

**Parameters**

- **tokenType** (number)  
- **fromToken** ([IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md))  

**Returns** any


---

#### createToken

**createToken**(**fromToken**: [IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md)): [IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md)

Tell me how to create a token for use with imaginary token nodes.
 For example, there is probably no input symbol associated with imaginary
 token DECL, but you need to create it as a payload or whatever for
 the DECL node as in ^(DECL type ID).
 This is a variant of createToken where the new token is derived from
 an actual real input token.  Typically this is for converting '{'
 tokens to BLOCK etc...  You'll see
   r : lc='{' ID+ '}' -> ^(BLOCK[$lc] ID+) ;
 If you care what the token payload objects' type is, you should
 override this method and any other createToken variant.

**Parameters**

- **fromToken** ([IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md))  

**Returns** [IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md)


---

#### createToken2

**createToken2**(**tokenType**: number, **text**: string): [IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md)

Tell me how to create a token for use with imaginary token nodes.
 For example, there is probably no input symbol associated with imaginary
 token DECL, but you need to create it as a payload or whatever for
 the DECL node as in ^(DECL type ID).
 If you care what the token payload objects' type is, you should
 override this method and any other createToken variant.

**Parameters**

- **tokenType** (number)  
- **text** (string)  

**Returns** [IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md)


---

#### deleteChild

**deleteChild**(**t**: any, **i**: number): any

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

Duplicate a node.  This is part of the factory;
 override if you want another kind of node to be built.
 I could use reflection to prevent having to override this
 but reflection is slow.

**Parameters**

- **treeNode** (any)  

**Returns** any


---

#### dupTree

**dupTree**(**t**: any, **parent**: any): any

This is generic in the sense that it will work with any kind of
 tree (not just ITree interface).  It invokes the adaptor routines
 not the tree node routines to do the construction.

**Parameters**

- **t** (any)  
- **parent** (any)  

**Returns** any


---

#### getChild

**getChild**(**t**: any, **i**: number): any

**Parameters**

- **t** (any)  
- **i** (number)  

**Returns** any


---

#### getChildCount

**getChildCount**(**t**: any): number

**Parameters**

- **t** (any)  

**Returns** number


---

#### getChildIndex

**getChildIndex**(**t**: any): number

**Parameters**

- **t** (any)  

**Returns** number


---

#### getParent

**getParent**(**t**: any): any

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

**Parameters**

- **t** (any)  

**Returns** [IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md)


---

#### getTokenStartIndex

**getTokenStartIndex**(**t**: any): number

**Parameters**

- **t** (any)  

**Returns** number


---

#### getTokenStopIndex

**getTokenStopIndex**(**t**: any): number

**Parameters**

- **t** (any)  

**Returns** number


---

#### getTree

**getTree**(**t**: any): [ITree](ITree.md)

**Parameters**

- **t** (any)  

**Returns** [ITree](ITree.md)


---

#### getType

**getType**(**t**: number): number

**Parameters**

- **t** (number)  

**Returns** number


---

#### getUniqueID

**getUniqueID**(**node**: any): number

**Parameters**

- **node** (any)  

**Returns** number


---

#### implements

**implements**(): any[]

**Returns** any[]


---

#### isNil

**isNil**(**tree**: any): boolean

**Parameters**

- **tree** (any)  

**Returns** boolean


---

#### nil

**nil**(): any

**Returns** any


---

#### replaceChildren

**replaceChildren**(**parent**: any, **startChildIndex**: number, **stopChildIndex**: number, **t**: any): void

**Parameters**

- **parent** (any)  
- **startChildIndex** (number)  
- **stopChildIndex** (number)  
- **t** (any)  


---

#### rulePostProcessing

**rulePostProcessing**(**root**: any): any

Transform ^(nil x) to x and nil to null

**Parameters**

- **root** (any)  

**Returns** any


---

#### setChild

**setChild**(**t**: any, **i**: number, **child**: any): void

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

**setParent**(**t**: any, **parent**: any): any

**Parameters**

- **t** (any)  
- **parent** (any)  

**Returns** any


---

#### setText

**setText**(**t**: any, **text**: string): void

**Parameters**

- **t** (any)  
- **text** (string)  


---

#### setTokenBoundaries

**setTokenBoundaries**(**t**: any, **startToken**: [IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md), **stopToken**: [IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md)): void

Track start/stop token for subtree root created for a rule.
 Only works with Tree nodes.  For rules that match nothing,
 seems like this will yield start=i and stop=i-1 in a nil node.
 Might be useful info so I'll not force to be i..i.

**Parameters**

- **t** (any)  
- **startToken** ([IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md))  
- **stopToken** ([IToken](../Stimulsoft_Data_Expressions_Antlr_Runtime/IToken.md))  


---

#### setType

**setType**(**t**: any, **type**: number): void

**Parameters**

- **t** (any)  
- **type** (number)  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **fromToken** | any |  |
| **fromToken** | any |  |
| **fromToken** | any |  |
| **newRootTree** | any |  |
| **r** | any |  |
| **r** | any |  |
| **start** | any |  |
| **stop** | any |  |
| **treeToUniqueIDMap** | Dictionary<any, number> | System.identityHashCode() is not always unique; we have to track ourselves. That's ok, it's only for debugging, though it's expensive: we have to create a hashtable with all tree nodes in it. |
| **uniqueNodeID** | any |  |
