---
title: "Stimulsoft.Data.Expressions.Antlr.Runtime.Tree Namespace"
---

## Stimulsoft.Data.Expressions.Antlr.Runtime.Tree Namespace

### Classes

| Name | Description |
| --- | --- |
| [AntlrRuntime_BaseTreeDebugView](AntlrRuntime_BaseTreeDebugView.md) |  |
| [BaseTree](BaseTree.md) | A generic tree implementation with no payload. You must subclass to actually have any user data. ANTLR v3 uses a list of children approach instead of the child-sibling approach in v2. A flat tree (a list) is an empty node whose children represent the list. An empty, but non-null node is called "nil". |
| [BaseTreeAdaptor](BaseTreeAdaptor.md) | A TreeAdaptor that works with any Tree implementation. |
| [BufferedTreeNodeStream](BufferedTreeNodeStream.md) | A buffered stream of tree nodes. Nodes can be from a tree of ANY kind. This node stream sucks all nodes out of the tree specified in the constructor during construction and makes pointers into the tree using an array of Object pointers. The stream necessarily includes pointers to DOWN and UP and EOF nodes. This stream knows how to mark/release for backtracking. This stream is most suitable for tree interpreters that need to jump around a lot or for tree parsers requiring speed (at cost of memory). There is some duplicated functionality here with UnBufferedTreeNodeStream but just in bookkeeping, not tree walking etc... TARGET DEVELOPERS: This is the old CommonTreeNodeStream that buffered up entire node stream. No need to implement really as new CommonTreeNodeStream is much better and covers what we need. |
| [DotTreeGenerator](DotTreeGenerator.md) | A utility class to generate DOT diagrams (graphviz) from arbitrary trees. You can pass in your own templates and can pass in any kind of tree or use Tree interface method. I wanted this separator so that you don't have to include ST just to use the org.antlr.runtime.tree.* package. This is a set of non-static methods so you can subclass to override. For example, here is an invocation: CharStream input = new ANTLRInputStream(System.in); TLexer lex = new TLexer(input); CommonTokenStream tokens = new CommonTokenStream(lex); TParser parser = new TParser(tokens); TParser.e_return r = parser.e(); Tree t = (Tree)r.tree; System.out.println(t.toStringTree()); DOTTreeGenerator gen = new DOTTreeGenerator(); StringTemplate st = gen.toDOT(t); System.out.println(st); |
| [FindTreeWizardContextVisitor](FindTreeWizardContextVisitor.md) |  |
| [RewriteRuleElementStream](RewriteRuleElementStream.md) | A generic list of elements tracked in an alternative to be used in a -> rewrite rule. We need to subclass to fill in the next() method, which returns either an AST node wrapped around a token payload or an existing subtree. Once you start next()ing, do not try to add more elements. It will break the cursor tracking I believe. TODO: add mechanism to detect/puke on modification after reading from stream <see cref="RewriteRuleSubtreeStream"/> <see cref="RewriteRuleTokenStream"/> |
| [TreePatternLexer](TreePatternLexer.md) |  |
| [TreePatternParser](TreePatternParser.md) |  |
| [TreeRuleReturnScope](TreeRuleReturnScope.md) | This is identical to the ParserRuleReturnScope except that the start property is a tree nodes not Token object when you are parsing trees. |
| [TreeVisitor](TreeVisitor.md) | Do a depth first walk of a tree, applying pre() and post() actions as we go. |
| [TreeVisitorAction](TreeVisitorAction.md) |  |
| [TreeWizard](TreeWizard.md) | Build and navigate trees with this object. Must know about the names of tokens so you have to pass in a map or array of token names (from which this class can build the map). I.e., Token DECL means nothing unless the class can translate it to a token type. In order to create nodes and navigate, this class needs a TreeAdaptor. This class can build a token type -> node index for repeated use or for iterating over the various nodes with a particular type. This class works in conjunction with the TreeAdaptor rather than moving all this functionality into the adaptor. An adaptor helps build and navigate trees using methods. This class helps you do it with string patterns like "(A B C)". You can create a tree from that pattern or match subtrees against it. |
| [VisitTreeWizardContextVisitor](VisitTreeWizardContextVisitor.md) |  |
| [Visitor](Visitor.md) |  |

### Interfaces

| Name | Description |
| --- | --- |
| [IContextVisitor](IContextVisitor.md) |  |
| [IPositionTrackingStream](IPositionTrackingStream.md) |  |
| [ITree](ITree.md) |  |
| [ITreeAdaptor](ITreeAdaptor.md) |  |
| [ITreeVisitorAction](ITreeVisitorAction.md) |  |
