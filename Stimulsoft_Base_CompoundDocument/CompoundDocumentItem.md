---
title: "CompoundDocumentItem Class"
---

## CompoundDocumentItem Class

**Namespace:** `Stimulsoft.Base.CompoundDocument`

### Inheritance

Implements: [IComparable](../Stimulsoft_System/IComparable.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**() |  |

**constructor**()


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **compareTo** | number |  |
| **implements** | any[] |  |
| **write** | void |  |

---

### Method Details

#### compareTo

**compareTo**(**other**: [CompoundDocumentItem](CompoundDocumentItem.md)): number

**Parameters**

- **other** ([CompoundDocumentItem](CompoundDocumentItem.md))  

**Returns** number


---

#### implements

**implements**(): any[]

**Returns** any[]


---

#### write

**write**(**bw**: BinaryWriter): void

**Parameters**

- **bw** (BinaryWriter)  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **_handled** | any |  |
| **childID** | number |  |
| **children** | [CompoundDocumentItem](CompoundDocumentItem.md)[] |  |
| **clsID** | [Stimulsoft.System.Guid](../Stimulsoft_System/Guid.md) |  |
| **creationTime** | number |  |
| **leftSibling** | number |  |
| **modifiedTime** | number |  |
| **parent** | [CompoundDocumentItem](CompoundDocumentItem.md) |  |
| **rightSibling** | number |  |
| **startingSectorLocation** | number |  |
| **statBits** | number |  |
| **stream** | number[] |  |
| **streamSize** | number |  |
