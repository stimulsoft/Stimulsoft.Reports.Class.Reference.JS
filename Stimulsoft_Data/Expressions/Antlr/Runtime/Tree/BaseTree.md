---
title: "BaseTree Class"
---

## BaseTree Class

**Namespace:** `Stimulsoft.Data.Expressions.Antlr.Runtime.Tree`

A generic tree implementation with no payload.  You must subclass to
 actually have any user data.  ANTLR v3 uses a list of children approach
 instead of the child-sibling approach in v2.  A flat tree (a list) is
 an empty node whose children represent the list.  An empty, but
 non-null node is called "nil".

### Inheritance

Implements: [ITree](ITree.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([ITree](ITree.md) node) | Create a new node from an existing node does nothing for BaseTree as there are no fields other than the children list, which cannot be copied as the children are not considered part of this node. |

**constructor**(**node**: [ITree](ITree.md))

Create a new node from an existing node does nothing for BaseTree
 as there are no fields other than the children list, which cannot
 be copied as the children are not considered part of this node.

**Parameters**

- **node** ([ITree](ITree.md))  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **childCount** | number |  |
| **isNil** | boolean |  |
| **text** | string |  |
| **tokenStartIndex** | number |  |
| **tokenStopIndex** | number |  |
| **type** | number |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **addChild** | void | > Add t as child of this node. Warning: if t has no children, but child does and child isNil then this routine moves children to t via t.children = child.children; i.e., without copying the array. |
| **addChildren** | void | Add all elements of kids list as children of this node |
| **createChildrenList** | [ITree](ITree.md)[] | Override in a subclass to change the impl of children list |
| **deleteChild** | any |  |
| **dupNode** | [ITree](ITree.md) |  |
| **freshenParentAndChildIndexes** | void |  |
| **freshenParentAndChildIndexesDeeply** | void |  |
| **getAncestor** | [ITree](ITree.md) | Walk upwards and get first ancestor with this token type.</summary> |
| **getAncestors** | [ITree](ITree.md)[] | Return a list of all ancestors of this node. The first node of list is the root and the last is the parent of this node. |
| **getChild** | [ITree](ITree.md) |  |
| **getFirstChildWithType** | [ITree](ITree.md) |  |
| **hasAncestor** | boolean | Walk upwards looking for ancestor with this token type.</summary> |
| **implements** | any[] |  |
| **insertChild** | void | Insert child t at child position i (0..n-1) by shifting children i+1..n-1 to the right one position. Set parent / indexes properly but does NOT collapse nil-rooted t's that come in here like addChild. |
| **replaceChildren** | void | Delete children from start to stop and replace with t even if t is a list (nil-root tree). num of children can increase or decrease. For huge child lists, inserting children can force walking rest of children to set their childindex; could be slow. |
| **sanityCheckParentAndChildIndexes** | void |  |
| **setChild** | void |  |
| **toString** | string | Override to say how a node (not a tree) should look as text |
| **toStringTree** | string | Print out a whole tree not just a node</summary> |

---

### Method Details

#### addChild

**addChild**(**t**: [ITree](ITree.md)): void

>
Add t as child of this node.
 Warning: if t has no children, but child does
 and child isNil then this routine moves children to t via
 t.children = child.children; i.e., without copying the array.

**Parameters**

- **t** ([ITree](ITree.md))  


---

#### addChildren

**addChildren**(**kids**: [ITree](ITree.md)[]): void

Add all elements of kids list as children of this node

**Parameters**

- **kids** ([ITree](ITree.md)[])  


---

#### createChildrenList

**createChildrenList**(): [ITree](ITree.md)[]

Override in a subclass to change the impl of children list

**Returns** [ITree](ITree.md)[]


---

#### deleteChild

**deleteChild**(**i**: number): any

**Parameters**

- **i** (number)  

**Returns** any


---

#### dupNode

**dupNode**(): [ITree](ITree.md)

**Returns** [ITree](ITree.md)


---

#### freshenParentAndChildIndexes

**freshenParentAndChildIndexes**(**offset**: any): void

**Parameters**

- **offset** (any)  


---

#### freshenParentAndChildIndexesDeeply

**freshenParentAndChildIndexesDeeply**(**offset**: any): void

**Parameters**

- **offset** (any)  


---

#### getAncestor

**getAncestor**(**ttype**: number): [ITree](ITree.md)

Walk upwards and get first ancestor with this token type.</summary>

**Parameters**

- **ttype** (number)  

**Returns** [ITree](ITree.md)


---

#### getAncestors

**getAncestors**(): [ITree](ITree.md)[]

Return a list of all ancestors of this node.  The first node of
 list is the root and the last is the parent of this node.

**Returns** [ITree](ITree.md)[]


---

#### getChild

**getChild**(**i**: number): [ITree](ITree.md)

**Parameters**

- **i** (number)  

**Returns** [ITree](ITree.md)


---

#### getFirstChildWithType

**getFirstChildWithType**(**type**: number): [ITree](ITree.md)

**Parameters**

- **type** (number)  

**Returns** [ITree](ITree.md)


---

#### hasAncestor

**hasAncestor**(**ttype**: number): boolean

Walk upwards looking for ancestor with this token type.</summary>

**Parameters**

- **ttype** (number)  

**Returns** boolean


---

#### implements

**implements**(): any[]

**Returns** any[]


---

#### insertChild

**insertChild**(**i**: number, **t**: [ITree](ITree.md)): void

Insert child t at child position i (0..n-1) by shifting children
 i+1..n-1 to the right one position. Set parent / indexes properly
 but does NOT collapse nil-rooted t's that come in here like addChild.

**Parameters**

- **i** (number)  
- **t** ([ITree](ITree.md))  


---

#### replaceChildren

**replaceChildren**(**startChildIndex**: number, **stopChildIndex**: number, **t**: any): void

Delete children from start to stop and replace with t even if t is
 a list (nil-root tree).  num of children can increase or decrease.
 For huge child lists, inserting children can force walking rest of
 children to set their childindex; could be slow.

**Parameters**

- **startChildIndex** (number)  
- **stopChildIndex** (number)  
- **t** (any)  


---

#### sanityCheckParentAndChildIndexes

**sanityCheckParentAndChildIndexes**(**parent**: [ITree](ITree.md), **i**: any): void

**Parameters**

- **parent** ([ITree](ITree.md))  
- **i** (any)  


---

#### setChild

**setChild**(**i**: number, **t**: [ITree](ITree.md)): void

**Parameters**

- **i** (number)  
- **t** ([ITree](ITree.md))  


---

#### toString

**toString**(): string

Override to say how a node (not a tree) should look as text

**Returns** string


---

#### toStringTree

**toStringTree**(): string

Print out a whole tree not just a node</summary>

**Returns** string


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **_text** | string |  |
| **_tokenStartIndex** | number |  |
| **_tokenStopIndex** | number |  |
| **_type** | number |  |
