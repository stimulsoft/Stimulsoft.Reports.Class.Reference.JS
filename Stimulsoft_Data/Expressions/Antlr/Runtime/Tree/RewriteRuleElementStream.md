---
title: "RewriteRuleElementStream Class"
---

## RewriteRuleElementStream Class

**Namespace:** `Stimulsoft.Data.Expressions.Antlr.Runtime.Tree`

A generic list of elements tracked in an alternative to be used in
 a -> rewrite rule.  We need to subclass to fill in the next() method,
 which returns either an AST node wrapped around a token payload or
 an existing subtree.
 Once you start next()ing, do not try to add more elements.  It will
 break the cursor tracking I believe.
 TODO: add mechanism to detect/puke on modification after reading from stream
 <see cref="RewriteRuleSubtreeStream"/>
 <see cref="RewriteRuleTokenStream"/>

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([ITreeAdaptor](ITreeAdaptor.md) adaptor, string elementDescription, any oneElement, any[] elements) |  |

**constructor**(**adaptor**: [ITreeAdaptor](ITreeAdaptor.md), **elementDescription**: string, **oneElement**: any, **elements**: any[])

**Parameters**

- **adaptor** ([ITreeAdaptor](ITreeAdaptor.md))  
- **elementDescription** (string)  
- **oneElement** (any)  
- **elements** (any[])  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **count** | number |  |
| **description** | string |  |
| **hasNext** | boolean |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **add** | void |  |
| **dup** | any | When constructing trees, sometimes we need to dup a token or AST subtree. Dup'ing a token means just creating another AST node around it. For trees, you must call the adaptor.dupTree() unless the element is for a tree root; then it must be a node dup. |
| **nextCore** | any | Do the work of getting the next element, making sure that it's a tree node or subtree. Deal with the optimization of single- element list versus list of size > 1. Throw an exception if the stream is empty or we're out of elements and size>1. protected so you can override in a subclass if necessary. |
| **nextTree** | any | Return the next element in the stream. If out of elements, throw an exception unless size()==1. If size is 1, then return elements[0]. Return a duplicate node/subtree if stream is out of elements and size==1. If we've already used the element, dup (dirty bit set). |
| **reset** | void | Reset the condition of this stream so that it appears we have not consumed any of its elements. Elements themselves are untouched. Once we reset the stream, any future use will need duplicates. Set the dirty bit. |
| **toTree** | any | Ensure stream emits trees; tokens must be converted to AST nodes. AST nodes can be passed through unmolested. |

---

### Method Details

#### add

**add**(**el**: any): void

**Parameters**

- **el** (any)  


---

#### dup

**dup**(**el**: any): any

When constructing trees, sometimes we need to dup a token or AST
	subtree.  Dup'ing a token means just creating another AST node
 around it.  For trees, you must call the adaptor.dupTree() unless
 the element is for a tree root; then it must be a node dup.

**Parameters**

- **el** (any)  

**Returns** any


---

#### nextCore

**nextCore**(): any

Do the work of getting the next element, making sure that it's
 a tree node or subtree.  Deal with the optimization of single-
 element list versus list of size > 1.  Throw an exception
 if the stream is empty or we're out of elements and size>1.
 protected so you can override in a subclass if necessary.

**Returns** any


---

#### nextTree

**nextTree**(): any

Return the next element in the stream.  If out of elements, throw
 an exception unless size()==1.  If size is 1, then return elements[0].
 Return a duplicate node/subtree if stream is out of elements and
 size==1.  If we've already used the element, dup (dirty bit set).

**Returns** any


---

#### reset

**reset**(): void

Reset the condition of this stream so that it appears we have
 not consumed any of its elements.  Elements themselves are untouched.
 Once we reset the stream, any future use will need duplicates.  Set
 the dirty bit.


---

#### toTree

**toTree**(**el**: any): any

Ensure stream emits trees; tokens must be converted to AST nodes.
 AST nodes can be passed through unmolested.

**Parameters**

- **el** (any)  

**Returns** any


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **adaptor** | [ITreeAdaptor](ITreeAdaptor.md) |  |
| **cursor** | any | Cursor 0..n-1. If singleElement!=null, cursor is 0 until you next(), which bumps it to 1 meaning no more elements. |
| **dirty** | any | Once a node / subtree has been used in a stream, it must be dup'd from then on. Streams are reset after subrules so that the streams can be reused in future subrules. So, reset must set a dirty bit. If dirty, then next() always returns a dup. |
| **elementDescription** | string | The element or stream description; usually has name of the token or rule reference that this list tracks. Can include rulename too, but the exception would track that info. |
| **elements** | any[] | The list of tokens or subtrees we are tracking |
| **singleElement** | any | Track single elements w/o creating a list. Upon 2nd add, alloc list |
