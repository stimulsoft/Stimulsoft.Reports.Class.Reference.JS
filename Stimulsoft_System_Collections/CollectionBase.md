---
title: "CollectionBase<T> Class"
---

## CollectionBase<T> Class

**Namespace:** `Stimulsoft.System.Collections`

### Inheritance

Implements: [ICollection](ICollection.md)  

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **count** | number | Gets the number of elements contained in the CollectionBase instance. |
| **length** | number |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **add** | void |  |
| **addRange** | void |  |
| **clear** | void | Removes all objects from the CollectionBase instance. |
| **contains** | boolean |  |
| **getByIndex** | T |  |
| **indexOf** | number |  |
| **insert** | void |  |
| **push** | void |  |
| **remove** | void |  |
| **removeAt** | void |  |
| **setByIndex** | void |  |
| **toCast** | C[] |  |
| **toList** | [List](../Stimulsoft_System_Collections_Generic/List.md)<T> |  |

---

### Method Details

#### add

**add**(**value**: T): void

**Parameters**

- **value** (T)  


---

#### addRange

**addRange**(**data**: T[] \| CollectionBase<T>): void

**Parameters**

- **data** (T[] \| CollectionBase<T>)  


---

#### clear

**clear**(): void

Removes all objects from the CollectionBase instance.


---

#### contains

**contains**(**item**: T \| any): boolean

**Parameters**

- **item** (T \| any)  

**Returns** boolean


---

#### getByIndex

**getByIndex**(**index**: number): T

**Parameters**

- **index** (number)  

**Returns** T


---

#### indexOf

**indexOf**(**item**: T): number

**Parameters**

- **item** (T)  

**Returns** number


---

#### insert

**insert**(**index**: number, **value**: T): void

**Parameters**

- **index** (number)  
- **value** (T)  


---

#### push

**push**(**value**: T): void

**Parameters**

- **value** (T)  


---

#### remove

**remove**(**item**: T): void

**Parameters**

- **item** (T)  


---

#### removeAt

**removeAt**(**index**: number): void

**Parameters**

- **index** (number)  


---

#### setByIndex

**setByIndex**(**index**: number, **value**: T): void

**Parameters**

- **index** (number)  
- **value** (T)  


---

#### toCast

**toCast**(): C[]

**Returns** C[]


---

#### toList

**toList**(): [List](../Stimulsoft_System_Collections_Generic/List.md)<T>

**Returns** [List](../Stimulsoft_System_Collections_Generic/List.md)<T>


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **list** | T[] |  |
