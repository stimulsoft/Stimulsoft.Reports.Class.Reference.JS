---
title: "ANTLRStringStream Class"
---

## ANTLRStringStream Class

**Namespace:** `Stimulsoft.Data.Expressions.Antlr.Runtime`

A pretty quick CharStream that pulls all data from an array
 directly.  Every method call counts in the lexer.  Java's
 strings aren't very good so I'm avoiding.

### Inheritance

Implements: ICharStream  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(string input, string[] data) | Copy data in string to a local char array |

**constructor**(**input**: string, **data**: string[])

Copy data in string to a local char array

**Parameters**

- **input** (string)  
- **data** (string[])  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **count** | number |  |
| **index** | number | Return the current input symbol index 0..n where n indicates the last symbol has been read. The index is the index of char to be returned from LA(1). |
| **sourceName** | string |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **consume** | void |  |
| **implements** | any[] |  |
| **la** | number |  |
| **lt** | number |  |
| **mark** | number |  |
| **release** | void |  |
| **reset** | void | Reset the stream so that it's in the same state it was when the object was created *except* the data array is not touched. |
| **rewind** | void |  |
| **seek** | void | consume() ahead until this.p==index; can't just set this.p=index as we must update this.line and this.charPositionInLine. |
| **substring** | string |  |
| **toString** | string |  |

---

### Method Details

#### consume

**consume**(): void


---

#### implements

**implements**(): any[]

**Returns** any[]


---

#### la

**la**(**i**: number): number

**Parameters**

- **i** (number)  

**Returns** number


---

#### lt

**lt**(**i**: number): number

**Parameters**

- **i** (number)  

**Returns** number


---

#### mark

**mark**(): number

**Returns** number


---

#### release

**release**(**marker**: number): void

**Parameters**

- **marker** (number)  


---

#### reset

**reset**(): void

Reset the stream so that it's in the same state it was
 when the object was created *except* the data array is not
 touched.


---

#### rewind

**rewind**(**m**: number): void

**Parameters**

- **m** (number)  


---

#### seek

**seek**(**index**: number): void

consume() ahead until this.p==index; can't just set this.p=index as we must
 update this.line and this.charPositionInLine.

**Parameters**

- **index** (number)  


---

#### substring

**substring**(**start**: number, **length**: number): string

**Parameters**

- **start** (number)  
- **length** (number)  

**Returns** string


---

#### toString

**toString**(): string

**Returns** string


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **data** | string[] | The data being scanned |
| **lastMarker** | number | Track the last mark() call result value for use in rewind(). |
| **markDepth** | any | tracks how deep mark() calls are nested |
| **markers** | [CharStreamState](CharStreamState.md)[] | A list of CharStreamState objects that tracks the stream state values this.line, this.charPositionInLine, and this.p that can change as you move through the input stream. Indexed from 1..markDepth. A null is kept @ index 0. Create upon first call to mark(). |
| **n** | number | How many characters are actually in the buffer |
| **p** | any | 0..n-1 index into string of next char |
