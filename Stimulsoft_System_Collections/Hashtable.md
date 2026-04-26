---
title: "Hashtable<K, V> Class"
---

## Hashtable<K, V> Class

**Namespace:** `Stimulsoft.System.Collections`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**({ ignoreCase?: boolean options, boolean } checkType, false } checkType) |  |

**constructor**(**options**: { ignoreCase?: boolean, **checkType**: boolean }, **checkType**: false })

**Parameters**

- **options** ({ ignoreCase?: boolean)  
- **checkType** (boolean })  
- **checkType** (false })  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **count** | number | Gets the number of key/value pairs contained in the Hashtable. |
| **keys** | any |  |
| **values** | any |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **add** | void | Adds an element with the specified key and value into the Hashtable. |
| **clear** | void | Removes all elements from the Hashtable. |
| **clone** | [Hashtable](Hashtable.md)<K, V> |  |
| **contains** | boolean | Determines whether the Hashtable contains a specific key. |
| **containsKey** | boolean | Determines whether the Hashtable contains a specific key. |
| **containsValue** | boolean | Determines whether the Hashtable contains a specific value. |
| **copyTo** | void | Copies the Hashtable elements to a one-dimensional Array instance at the specified index. |
| **getActualKey** | void |  |
| **getByIndex** | V |  |
| **getRawValueByKey** | void |  |
| **indexOfKey** | number |  |
| **remove** | void | Removes the element with the specified key from the Hashtable. |

---

### Method Details

#### add

**add**(**key**: K, **value**: V): void

Adds an element with the specified key and value into the Hashtable.

**Parameters**

- **key** (K)  
- **value** (V)  


---

#### clear

**clear**(): void

Removes all elements from the Hashtable.


---

#### clone

**clone**(): [Hashtable](Hashtable.md)<K, V>

**Returns** [Hashtable](Hashtable.md)<K, V>


---

#### contains

**contains**(**key**: K): boolean

Determines whether the Hashtable contains a specific key.

**Parameters**

- **key** (K)  

**Returns** boolean


---

#### containsKey

**containsKey**(**key**: K): boolean

Determines whether the Hashtable contains a specific key.

**Parameters**

- **key** (K)  

**Returns** boolean


---

#### containsValue

**containsValue**(**value**: V): boolean

Determines whether the Hashtable contains a specific value.

**Parameters**

- **value** (V)  

**Returns** boolean


---

#### copyTo

**copyTo**(**array**: V[], **arrayIndex**: number): void

Copies the Hashtable elements to a one-dimensional Array instance at the specified index.

**Parameters**

- **array** (V[])  
- **arrayIndex** (number)  


---

#### getActualKey

**getActualKey**(**key**: K): void

**Parameters**

- **key** (K)  


---

#### getByIndex

**getByIndex**(**index**: number): V

**Parameters**

- **index** (number)  

**Returns** V


---

#### getRawValueByKey

**getRawValueByKey**(**key**: K): void

**Parameters**

- **key** (K)  


---

#### indexOfKey

**indexOfKey**(**key**: K): number

**Parameters**

- **key** (K)  

**Returns** number


---

#### remove

**remove**(**key**: K): void

Removes the element with the specified key from the Hashtable.

**Parameters**

- **key** (K)  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **entries** | any |  |
