---
title: "DotTreeGenerator Class"
---

## DotTreeGenerator Class

**Namespace:** `Stimulsoft.Data.Expressions.Antlr.Runtime.Tree`

A utility class to generate DOT diagrams (graphviz) from
 arbitrary trees.  You can pass in your own templates and
 can pass in any kind of tree or use Tree interface method.
 I wanted this separator so that you don't have to include
 ST just to use the org.antlr.runtime.tree.* package.
 This is a set of non-static methods so you can subclass
 to override.  For example, here is an invocation:
     CharStream input = new ANTLRInputStream(System.in);
     TLexer lex = new TLexer(input);
     CommonTokenStream tokens = new CommonTokenStream(lex);
     TParser parser = new TParser(tokens);
     TParser.e_return r = parser.e();
     Tree t = (Tree)r.tree;
     System.out.println(t.toStringTree());
     DOTTreeGenerator gen = new DOTTreeGenerator();
     StringTemplate st = gen.toDOT(t);
     System.out.println(st);

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **defineEdges** | string[] |  |
| **defineNodes** | string[] |  |
| **fixString** | string |  |
| **getNodeNumber** | number |  |
| **getNodeText** | string |  |
| **toDot** | string |  |
| **toDot2** | string | Generate DOT (graphviz) for a whole tree not just a node. For example, 3+4*5 should generate: digraph { node [shape=plaintext, fixedsize=true, fontsize=11, fontname="Courier", width=.4, height=.2]; edge [arrowsize=.7] "+"->3 "+"->"*" "*"->4 "*"->5 } Takes a Tree interface object. |

---

### Method Details

#### defineEdges

**defineEdges**(**tree**: any, **adaptor**: [ITreeAdaptor](ITreeAdaptor.md)): string[]

**Parameters**

- **tree** (any)  
- **adaptor** ([ITreeAdaptor](ITreeAdaptor.md))  

**Returns** string[]


---

#### defineNodes

**defineNodes**(**tree**: any, **adaptor**: [ITreeAdaptor](ITreeAdaptor.md)): string[]

**Parameters**

- **tree** (any)  
- **adaptor** ([ITreeAdaptor](ITreeAdaptor.md))  

**Returns** string[]


---

#### fixString

**fixString**(**text**: string): string

**Parameters**

- **text** (string)  

**Returns** string


---

#### getNodeNumber

**getNodeNumber**(**t**: any): number

**Parameters**

- **t** (any)  

**Returns** number


---

#### getNodeText

**getNodeText**(**adaptor**: [ITreeAdaptor](ITreeAdaptor.md), **t**: any): string

**Parameters**

- **adaptor** ([ITreeAdaptor](ITreeAdaptor.md))  
- **t** (any)  

**Returns** string


---

#### toDot

**toDot**(**tree**: [ITree](ITree.md)): string

**Parameters**

- **tree** ([ITree](ITree.md))  

**Returns** string


---

#### toDot2

**toDot2**(**tree**: any, **adaptor**: [ITreeAdaptor](ITreeAdaptor.md)): string

Generate DOT (graphviz) for a whole tree not just a node.
 For example, 3+4*5 should generate:
digraph {
  node [shape=plaintext, fixedsize=true, fontsize=11, fontname="Courier",
        width=.4, height=.2];
  edge [arrowsize=.7]
  "+"->3
  "+"->"*"
  "*"->4
  "*"->5
}
Takes a Tree interface object.

**Parameters**

- **tree** (any)  
- **adaptor** ([ITreeAdaptor](ITreeAdaptor.md))  

**Returns** string

