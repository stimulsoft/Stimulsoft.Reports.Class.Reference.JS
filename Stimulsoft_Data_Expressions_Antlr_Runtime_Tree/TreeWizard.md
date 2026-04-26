---
title: "TreeWizard Class"
---

## TreeWizard Class

**Namespace:** `Stimulsoft.Data.Expressions.Antlr.Runtime.Tree`

Build and navigate trees with this object.  Must know about the names
 of tokens so you have to pass in a map or array of token names (from which
 this class can build the map).  I.e., Token DECL means nothing unless the
 class can translate it to a token type.
 In order to create nodes and navigate, this class needs a TreeAdaptor.
 This class can build a token type -> node index for repeated use or for
 iterating over the various nodes with a particular type.
 This class works in conjunction with the TreeAdaptor rather than moving
 all this functionality into the adaptor.  An adaptor helps build and
 navigate trees using methods.  This class helps you do it with string
 patterns like "(A B C)".  You can create a tree from that pattern or
 match subtrees against it.

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **computeTokenTypes** | Dictionary<string, number> | Compute a Map&lt;String, Integer&gt; that is an inverted index of tokenNames (which maps int token types to names). |
| **create** | any | Create a tree or node from the indicated tree pattern that closely follows ANTLR tree grammar tree element syntax: (root child1 ... child2). You can also just pass in a node: ID Any node can have a text argument: ID[foo] (notice there are no quotes around foo--it's clear it's a string). nil is a special name meaning "give me a nil node". Useful for making lists: (nil A B C) is a list of A B C. |
| **equals** `static` | boolean | Compare t1 and t2; return true if token types/text, structure match exactly. The trees are examined in their entirety so that (A B) does not match (A B C) nor (A (B C)). TODO: allow them to pass in a comparator TODO: have a version that is nonstatic so it can use instance adaptor I cannot rely on the tree node's equals() implementation as I make no constraints at all on the node types nor interface etc... |
| **equalsCore** `static` | boolean |  |
| **find** | any[] | Return a List of tree nodes with token type ttype |
| **find2** | any[] | Return a List of subtrees matching pattern. |
| **findFirst** | any |  |
| **findFirst2** | any |  |
| **getTokenType** | number | Using the map of token names to token types, return the type. |
| **index** | Dictionary<number, any[]> | Walk the entire tree and make a node name to nodes mapping. For now, use recursion but later nonrecursive version may be more efficient. Returns Map&lt;Integer, List&gt; where the List is of your AST node type. The Integer is the token type of the node. TODO: save this index so that find and visit are faster |
| **indexCore** | void | Do the work for index |
| **parse** | boolean | Given a pattern like (ASSIGN %lhs:ID %rhs:.) with optional labels on the various nodes and '.' (dot) as the node/subtree wildcard, return true if the pattern matches and fill the labels Map with the labels pointing at the appropriate nodes. Return false if the pattern is malformed or the tree does not match. If a node specifies a text arg in pattern, then that must match for that node in t. TODO: what's a better way to indicate bad pattern? Exceptions are a hassle |
| **parse2** | boolean |  |
| **parseCore** | boolean | Do the work for parse. Check to see if the t2 pattern fits the structure and token types in t1. Check text if the pattern has text arguments on nodes. Fill labels map with pointers to nodes in tree matched against nodes in pattern with labels. |
| **visit** | void | Visit every ttype node in t, invoking the visitor. This is a quicker version of the general visit(t, pattern) method. The labels arg of the visitor action method is never set (it's null) since using a token type rather than a pattern doesn't let us set a label. |
| **visit2** | void |  |
| **visit3** | void | For all subtrees that match the pattern, execute the visit action. The implementation uses the root node of the pattern in combination with visit(t, ttype, visitor) so nil-rooted patterns are not allowed. Patterns with wildcard roots are also not allowed. |
| **visitCore** | void | Do the recursive work for visit |

---

### Method Details

#### computeTokenTypes

**computeTokenTypes**(**tokenNames**: string[]): Dictionary<string, number>

Compute a Map&lt;String, Integer&gt; that is an inverted index of
 tokenNames (which maps int token types to names).

**Parameters**

- **tokenNames** (string[])  

**Returns** Dictionary<string, number>


---

#### create

**create**(**pattern**: string): any

Create a tree or node from the indicated tree pattern that closely
 follows ANTLR tree grammar tree element syntax:
     (root child1 ... child2).
 You can also just pass in a node: ID
 Any node can have a text argument: ID[foo]
 (notice there are no quotes around foo--it's clear it's a string).
 nil is a special name meaning "give me a nil node".  Useful for
 making lists: (nil A B C) is a list of A B C.

**Parameters**

- **pattern** (string)  

**Returns** any


---

#### equals `static`

**equals**(**t1**: any, **t2**: any, **adaptor**: [ITreeAdaptor](ITreeAdaptor.md)): boolean

Compare t1 and t2; return true if token types/text, structure match exactly.
 The trees are examined in their entirety so that (A B) does not match
 (A B C) nor (A (B C)).
 TODO: allow them to pass in a comparator
 TODO: have a version that is nonstatic so it can use instance adaptor
 I cannot rely on the tree node's equals() implementation as I make
 no constraints at all on the node types nor interface etc...

**Parameters**

- **t1** (any)  
- **t2** (any)  
- **adaptor** ([ITreeAdaptor](ITreeAdaptor.md))  

**Returns** boolean


---

#### equalsCore `static`

**equalsCore**(**t1**: any, **t2**: any, **adaptor**: [ITreeAdaptor](ITreeAdaptor.md)): boolean

**Parameters**

- **t1** (any)  
- **t2** (any)  
- **adaptor** ([ITreeAdaptor](ITreeAdaptor.md))  

**Returns** boolean


---

#### find

**find**(**t**: any, **ttype**: number): any[]

Return a List of tree nodes with token type ttype

**Parameters**

- **t** (any)  
- **ttype** (number)  

**Returns** any[]


---

#### find2

**find2**(**t**: any, **pattern**: string): any[]

Return a List of subtrees matching pattern.

**Parameters**

- **t** (any)  
- **pattern** (string)  

**Returns** any[]


---

#### findFirst

**findFirst**(**t**: any, **ttype**: number): any

**Parameters**

- **t** (any)  
- **ttype** (number)  

**Returns** any


---

#### findFirst2

**findFirst2**(**t**: any, **pattern**: string): any

**Parameters**

- **t** (any)  
- **pattern** (string)  

**Returns** any


---

#### getTokenType

**getTokenType**(**tokenName**: string): number

Using the map of token names to token types, return the type.

**Parameters**

- **tokenName** (string)  

**Returns** number


---

#### index

**index**(**t**: any): Dictionary<number, any[]>

Walk the entire tree and make a node name to nodes mapping.
 For now, use recursion but later nonrecursive version may be
 more efficient.  Returns Map&lt;Integer, List&gt; where the List is
 of your AST node type.  The Integer is the token type of the node.
 TODO: save this index so that find and visit are faster

**Parameters**

- **t** (any)  

**Returns** Dictionary<number, any[]>


---

#### indexCore

**indexCore**(**t**: any, **m**: Dictionary<number, any[]>): void

Do the work for index

**Parameters**

- **t** (any)  
- **m** (Dictionary<number, any[]>)  


---

#### parse

**parse**(**t**: any, **pattern**: string, **labels**: Dictionary<string, any>): boolean

Given a pattern like (ASSIGN %lhs:ID %rhs:.) with optional labels
 on the various nodes and '.' (dot) as the node/subtree wildcard,
 return true if the pattern matches and fill the labels Map with
 the labels pointing at the appropriate nodes.  Return false if
 the pattern is malformed or the tree does not match.
 If a node specifies a text arg in pattern, then that must match
 for that node in t.
 TODO: what's a better way to indicate bad pattern? Exceptions are a hassle

**Parameters**

- **t** (any)  
- **pattern** (string)  
- **labels** (Dictionary<string, any>)  

**Returns** boolean


---

#### parse2

**parse2**(**t**: any, **pattern**: string): boolean

**Parameters**

- **t** (any)  
- **pattern** (string)  

**Returns** boolean


---

#### parseCore

**parseCore**(**t1**: any, **tpattern**: TreePattern, **labels**: Dictionary<string, any>): boolean

Do the work for parse. Check to see if the t2 pattern fits the
 structure and token types in t1.  Check text if the pattern has
 text arguments on nodes.  Fill labels map with pointers to nodes
 in tree matched against nodes in pattern with labels.

**Parameters**

- **t1** (any)  
- **tpattern** (TreePattern)  
- **labels** (Dictionary<string, any>)  

**Returns** boolean


---

#### visit

**visit**(**t**: any, **ttype**: number, **visitor**: [IContextVisitor](IContextVisitor.md)): void

Visit every ttype node in t, invoking the visitor.  This is a quicker
 version of the general visit(t, pattern) method.  The labels arg
 of the visitor action method is never set (it's null) since using
 a token type rather than a pattern doesn't let us set a label.

**Parameters**

- **t** (any)  
- **ttype** (number)  
- **visitor** ([IContextVisitor](IContextVisitor.md))  


---

#### visit2

**visit2**(**t**: any, **ttype**: number, **action**: [Action](../Stimulsoft_Data_Expressions_Antlr_Runtime_Misc/Action.md)): void

**Parameters**

- **t** (any)  
- **ttype** (number)  
- **action** ([Action](../Stimulsoft_Data_Expressions_Antlr_Runtime_Misc/Action.md))  


---

#### visit3

**visit3**(**t**: any, **pattern**: string, **visitor**: [IContextVisitor](IContextVisitor.md)): void

For all subtrees that match the pattern, execute the visit action.
 The implementation uses the root node of the pattern in combination
 with visit(t, ttype, visitor) so nil-rooted patterns are not allowed.
 Patterns with wildcard roots are also not allowed.

**Parameters**

- **t** (any)  
- **pattern** (string)  
- **visitor** ([IContextVisitor](IContextVisitor.md))  


---

#### visitCore

**visitCore**(**t**: any, **parent**: any, **childIndex**: number, **ttype**: number, **visitor**: [IContextVisitor](IContextVisitor.md)): void

Do the recursive work for visit

**Parameters**

- **t** (any)  
- **parent** (any)  
- **childIndex** (number)  
- **ttype** (number)  
- **visitor** ([IContextVisitor](IContextVisitor.md))  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **adaptor** | [ITreeAdaptor](ITreeAdaptor.md) |  |
| **tokenNameToTypeMap** | Dictionary<string, number> |  |
