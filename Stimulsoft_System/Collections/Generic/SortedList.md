---
title: "SortedList<K, V> Class"
---

## SortedList<K, V> Class

**Namespace:** `Stimulsoft.System.Collections.Generic`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**((a: K comparer, K b) |  |

**constructor**(**comparer**: (a: K, **b**: K)

**Parameters**

- **comparer** ((a: K)  
- **b** (K)  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **count** | number |  |
| **keys** | K[] |  |
| **values** | V[] |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **add** | void |  |
| **clear** | void |  |
| **containsKey** | boolean |  |
| **containsValue** | boolean |  |
| **getByIndex** |  |  |
| **getKey** | K | undefined |  |
| **getNamespace** `static` | string |  |
| **getSorted** |  |  |
| **getValue** | V |  |
| **indexOfKey** | number |  |
| **indexOfValue** | number |  |
| **remove** | boolean |  |
| **removeAt** | void |  |
| **tryGetValue** | V |  |

---

### Method Details

#### add

**add**(**key**: K, **value**: V): void

**Parameters**

- **key** (K)  
- **value** (V)  


---

#### clear

**clear**(): void


---

#### containsKey

**containsKey**(**key**: K): boolean

**Parameters**

- **key** (K)  

**Returns** boolean


---

#### containsValue

**containsValue**(**value**: V): boolean

**Parameters**

- **value** (V)  

**Returns** boolean


---

#### getByIndex

**getByIndex**(**index**: number): void

**Parameters**

- **index** (number)  


---

#### getKey

**getKey**(**index**: number): K | undefined

**Parameters**

- **index** (number)  

**Returns** K | undefined


---

#### getNamespace `static`

**getNamespace**(): string

**Returns** string


---

#### getSorted

**getSorted**(): void


---

#### getValue

**getValue**(**key**: K): V

**Parameters**

- **key** (K)  

**Returns** V


---

#### indexOfKey

**indexOfKey**(**key**: K): number

**Parameters**

- **key** (K)  

**Returns** number


---

#### indexOfValue

**indexOfValue**(**value**: V): number

**Parameters**

- **value** (V)  

**Returns** number


---

#### remove

**remove**(**key**: K): boolean

**Parameters**

- **key** (K)  

**Returns** boolean


---

#### removeAt

**removeAt**(**index**: number): void

**Parameters**

- **index** (number)  


---

#### tryGetValue

**tryGetValue**(**key**: K): V

**Parameters**

- **key** (K)  

**Returns** V

