---
title: "IronBlock Class"
---

## IronBlock Class

**Namespace:** `Stimulsoft.Blockly.Model`

### Inheritance

Implements: [IFragment](IFragment.md), [IAsIs](../Stimulsoft_System/IAsIs.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**() |  |

**constructor**()


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **evaluate** | any |  |
| **evaluateAsync** | Promise<any> |  |
| **implements** | any[] |  |

---

### Method Details

#### evaluate

**evaluate**(**context**: [Context](Context.md)): any

**Parameters**

- **context** ([Context](Context.md))  

**Returns** any


---

#### evaluateAsync

**evaluateAsync**(**context**: [Context](Context.md)): Promise<any>

**Parameters**

- **context** ([Context](Context.md))  

**Returns** Promise<any>


---

#### implements

**implements**(): any[]

**Returns** any[]


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **fields** | [Field](Field.md)[] |  |
| **id** | string |  |
| **inline** | boolean |  |
| **mutations** | [Mutation](Mutation.md)[] |  |
| **next** | [IronBlock](IronBlock.md) |  |
| **statements** | [Statement](Statement.md)[] |  |
| **type** | string |  |
| **values** | [Value](Value.md)[] |  |
