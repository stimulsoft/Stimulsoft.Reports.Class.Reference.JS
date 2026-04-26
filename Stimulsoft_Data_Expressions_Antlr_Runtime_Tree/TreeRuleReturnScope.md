---
title: "TreeRuleReturnScope<TTree> Class"
---

## TreeRuleReturnScope<TTree> Class

**Namespace:** `Stimulsoft.Data.Expressions.Antlr.Runtime.Tree`

This is identical to the ParserRuleReturnScope except that
 the start property is a tree nodes not Token object
 when you are parsing trees.

### Inheritance

Implements: [IRuleReturnScope](../Stimulsoft_Data_Expressions_Antlr_Runtime/IRuleReturnScope.md)  

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **implements** | any[] |  |

---

### Method Details

#### implements

**implements**(): any[]

**Returns** any[]


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **start** | TTree | Gets the first node or root node of tree matched for this rule. |
| **stop** | TTree |  |
