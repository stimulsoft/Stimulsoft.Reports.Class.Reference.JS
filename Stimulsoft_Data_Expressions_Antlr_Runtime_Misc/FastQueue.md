---
title: "FastQueue<T> Class"
---

## FastQueue<T> Class

**Namespace:** `Stimulsoft.Data.Expressions.Antlr.Runtime.Misc`

A queue that can dequeue and get(i) in O(1) and grow arbitrarily large.
 A linked list is fast at dequeue but slow at get(i).  An array is
 the reverse.  This is O(1) for both operations.
 List grows until you dequeue last element at end of buffer. Then
 it resets to start filling at 0 again.  If adds/removes are balanced, the
 buffer will not grow too large.
 No iterator stuff as that's not how we'll use it.

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **count** | number |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clear** | void |  |
| **dequeue** | T | Get and remove first element in queue |
| **enqueue** | void |  |
| **peek** | T |  |
| **toString** | void | Return string of current buffer contents; non-destructive |

---

### Method Details

#### clear

**clear**(): void


---

#### dequeue

**dequeue**(): T

Get and remove first element in queue

**Returns** T


---

#### enqueue

**enqueue**(**o**: T): void

**Parameters**

- **o** (T)  


---

#### peek

**peek**(): T

**Returns** T


---

#### toString

**toString**(): void

Return string of current buffer contents; non-destructive


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **_data** | T[] | dynamically-sized buffer of elements |
| **_p** | any | index of next element to fill |
| **range** | any | How deep have we gone? |
