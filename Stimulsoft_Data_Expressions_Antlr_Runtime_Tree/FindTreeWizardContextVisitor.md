---
title: "FindTreeWizardContextVisitor Class"
---

## FindTreeWizardContextVisitor Class

**Namespace:** `Stimulsoft.Data.Expressions.Antlr.Runtime.Tree`

### Inheritance

Implements: [IContextVisitor](IContextVisitor.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([TreeWizard](TreeWizard.md) outer, TreePattern tpattern, any[] subtrees) |  |

**constructor**(**outer**: [TreeWizard](TreeWizard.md), **tpattern**: TreePattern, **subtrees**: any[])

**Parameters**

- **outer** ([TreeWizard](TreeWizard.md))  
- **tpattern** (TreePattern)  
- **subtrees** (any[])  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **implements** | any[] |  |
| **visit** | void |  |

---

### Method Details

#### implements

**implements**(): any[]

**Returns** any[]


---

#### visit

**visit**(**t**: any, **parent**: any, **childIndex**: number, **labels**: Dictionary<string, any>): void

**Parameters**

- **t** (any)  
- **parent** (any)  
- **childIndex** (number)  
- **labels** (Dictionary<string, any>)  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **_outer** | [TreeWizard](TreeWizard.md) |  |
| **_subtrees** | any[] |  |
| **_tpattern** | TreePattern |  |
