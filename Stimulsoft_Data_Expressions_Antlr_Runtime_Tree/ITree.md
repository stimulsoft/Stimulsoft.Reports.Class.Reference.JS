---
title: "ITree Interface"
---

## ITree Interface

**Namespace:** `Stimulsoft.Data.Expressions.Antlr.Runtime.Tree`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **addChild** | void | Add t as a child to this node. If t is null, do nothing. If t is nil, add all children of t to this' children. |
| **deleteChild** | any |  |
| **dupNode** | [ITree](ITree.md) |  |
| **freshenParentAndChildIndexes** | void | Set the parent and child index values for all children |
| **getAncestor** | [ITree](ITree.md) | Walk upwards and get first ancestor with this token type. |
| **getAncestors** | [ITree](ITree.md)[] | Return a list of all ancestors of this node. The first node of list is the root and the last is the parent of this node. |
| **getChild** | [ITree](ITree.md) |  |
| **hasAncestor** | boolean | Is there is a node above with token type ttype? |
| **replaceChildren** | void | Delete children from start to stop and replace with t even if t is a list (nil-root tree). num of children can increase or decrease. For huge child lists, inserting children can force walking rest of children to set their childindex; could be slow. |
| **setChild** | void | Set ith child (0..n-1) to t; t must be non-null and non-nil node |
| **toString** | string |  |
| **toStringTree** | string |  |

---

### Method Details

#### addChild

**addChild**(**t**: [ITree](ITree.md)): void

Add t as a child to this node.  If t is null, do nothing.  If t
 is nil, add all children of t to this' children.

**Parameters**

- **t** ([ITree](ITree.md))  


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

**freshenParentAndChildIndexes**(): void

Set the parent and child index values for all children


---

#### getAncestor

**getAncestor**(**ttype**: number): [ITree](ITree.md)

Walk upwards and get first ancestor with this token type.

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

#### hasAncestor

**hasAncestor**(**ttype**: number): boolean

Is there is a node above with token type ttype?

**Parameters**

- **ttype** (number)  

**Returns** boolean


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

#### setChild

**setChild**(**i**: number, **t**: [ITree](ITree.md)): void

Set ith child (0..n-1) to t; t must be non-null and non-nil node

**Parameters**

- **i** (number)  
- **t** ([ITree](ITree.md))  


---

#### toString

**toString**(): string

**Returns** string


---

#### toStringTree

**toStringTree**(): string

**Returns** string


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **charPositionInLine** | number |  |
| **childCount** | number |  |
| **childIndex** | number | This node is what child index? 0..n-1 |
| **isNil** | boolean | Indicates the node is a nil node but may still have children, meaning the tree is a flat list. |
| **line** | number | In case we don't have a token payload, what is the line for errors? |
| **parent** | [ITree](ITree.md) |  |
| **text** | string |  |
| **tokenStartIndex** | number | What is the smallest token index (indexing from 0) for this node and its children? |
| **tokenStopIndex** | number | What is the largest token index (indexing from 0) for this node and its children? |
| **type** | number | Return a token type; needed for tree parsing |
