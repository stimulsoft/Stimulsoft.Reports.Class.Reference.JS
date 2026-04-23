---
title: "Enumerable<T> Class"
---

## Enumerable<T> Class

**Namespace:** `Stimulsoft.System.Collections`

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **list** | [Stimulsoft.System.Collections.Generic.List](Generic/List.md)<T> |  |
| **source** | Iterable<T> |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **aggregate** | T |  |
| **aggregate2** | T |  |
| **all** | boolean |  |
| **any** | boolean |  |
| **average** | number |  |
| **cast** | LinqHelper<S> |  |
| **concat** | LinqHelper<T> |  |
| **contains** | boolean |  |
| **count2** | number |  |
| **defaultIfEmpty** | LinqHelper<T> |  |
| **distinct** | LinqHelper<T> |  |
| **except** | LinqHelper<T> |  |
| **first** | T |  |
| **firstOrDefault** | T |  |
| **groupBy** | [Stimulsoft.System.Collections.Generic.List](Generic/List.md)<Grouping<K, T>> |  |
| **lastOrDefault** | T |  |
| **max** | S |  |
| **min** | S |  |
| **orderBy** | LinqHelper<T> |  |
| **orderByDescending** | LinqHelper<T> |  |
| **repeat** `static` | LinqHelper<T> |  |
| **select** | LinqHelper<S> |  |
| **selectMany** | LinqHelper<S> |  |
| **selectMany2** | LinqHelper<V> |  |
| **sequenceEqual** | boolean |  |
| **skip** | LinqHelper<T> |  |
| **sum** | number |  |
| **take** | LinqHelper<T> |  |
| **toArray** | T[] |  |
| **toDictionary** | Stimulsoft.System.Collections.Dictionary<K, V> |  |
| **toList** | [Stimulsoft.System.Collections.Generic.List](Generic/List.md)<T> |  |
| **toLookup** | [Stimulsoft.System.Collections.Hashtable](Hashtable.md) |  |
| **union** | LinqHelper<T> |  |
| **where** | LinqHelper<T> |  |
| **zip** | LinqHelper<R> |  |

---

### Method Details

#### aggregate

**aggregate**(**func**: (av: T, **e**: T)): T

**Parameters**

- **func** ((av: T)  
- **e** (T))  

**Returns** T


---

#### aggregate2

**aggregate2**(**seed**: T, **func**: (av: T, **e**: T)): T

**Parameters**

- **seed** (T)  
- **func** ((av: T)  
- **e** (T))  

**Returns** T


---

#### all

**all**(**predicate**: (value: T)): boolean

**Parameters**

- **predicate** ((value: T))  

**Returns** boolean


---

#### any

**any**(**predicate**: (value: T)): boolean

**Parameters**

- **predicate** ((value: T))  

**Returns** boolean


---

#### average

**average**(**selector**: (value: T)): number

**Parameters**

- **selector** ((value: T))  

**Returns** number


---

#### cast

**cast**(): LinqHelper<S>

**Returns** LinqHelper<S>


---

#### concat

**concat**(**second**: Iterable<T>): LinqHelper<T>

**Parameters**

- **second** (Iterable<T>)  

**Returns** LinqHelper<T>


---

#### contains

**contains**(**item**: T): boolean

**Parameters**

- **item** (T)  

**Returns** boolean


---

#### count2

**count2**(**selector**: (value: T)): number

**Parameters**

- **selector** ((value: T))  

**Returns** number


---

#### defaultIfEmpty

**defaultIfEmpty**(): LinqHelper<T>

**Returns** LinqHelper<T>


---

#### distinct

**distinct**(): LinqHelper<T>

**Returns** LinqHelper<T>


---

#### except

**except**(**second**: Iterable<T>): LinqHelper<T>

**Parameters**

- **second** (Iterable<T>)  

**Returns** LinqHelper<T>


---

#### first

**first**(**selector**: (value: T)): T

**Parameters**

- **selector** ((value: T))  

**Returns** T


---

#### firstOrDefault

**firstOrDefault**(**predicate**: (value: T)): T

**Parameters**

- **predicate** ((value: T))  

**Returns** T


---

#### groupBy

**groupBy**(**keySelector**: (value: T)): [Stimulsoft.System.Collections.Generic.List](Generic/List.md)<Grouping<K, T>>

**Parameters**

- **keySelector** ((value: T))  

**Returns** [Stimulsoft.System.Collections.Generic.List](Generic/List.md)<Grouping<K, T>>


---

#### lastOrDefault

**lastOrDefault**(): T

**Returns** T


---

#### max

**max**(**selector**: (value: T)): S

**Parameters**

- **selector** ((value: T))  

**Returns** S


---

#### min

**min**(**selector**: (value: T)): S

**Parameters**

- **selector** ((value: T))  

**Returns** S


---

#### orderBy

**orderBy**(**keySelector**: (value: T)): LinqHelper<T>

**Parameters**

- **keySelector** ((value: T))  

**Returns** LinqHelper<T>


---

#### orderByDescending

**orderByDescending**(**keySelector**: (value: T)): LinqHelper<T>

**Parameters**

- **keySelector** ((value: T))  

**Returns** LinqHelper<T>


---

#### repeat `static`

**repeat**(**element**: T, **count**: number): LinqHelper<T>

**Parameters**

- **element** (T)  
- **count** (number)  

**Returns** LinqHelper<T>


---

#### select

**select**(**selector**: (value: T)): LinqHelper<S>

**Parameters**

- **selector** ((value: T))  

**Returns** LinqHelper<S>


---

#### selectMany

**selectMany**(**selector**: (value: T)): LinqHelper<S>

**Parameters**

- **selector** ((value: T))  

**Returns** LinqHelper<S>


---

#### selectMany2

**selectMany2**(**collectionSelector**: (value: T)): LinqHelper<V>

**Parameters**

- **collectionSelector** ((value: T))  

**Returns** LinqHelper<V>


---

#### sequenceEqual

**sequenceEqual**(**second**: Iterable<T>): boolean

**Parameters**

- **second** (Iterable<T>)  

**Returns** boolean


---

#### skip

**skip**(**count**: number): LinqHelper<T>

**Parameters**

- **count** (number)  

**Returns** LinqHelper<T>


---

#### sum

**sum**(**selector**: (value: T)): number

**Parameters**

- **selector** ((value: T))  

**Returns** number


---

#### take

**take**(**count**: number): LinqHelper<T>

**Parameters**

- **count** (number)  

**Returns** LinqHelper<T>


---

#### toArray

**toArray**(): T[]

**Returns** T[]


---

#### toDictionary

**toDictionary**(**keySelector**: (item: T)): Stimulsoft.System.Collections.Dictionary<K, V>

**Parameters**

- **keySelector** ((item: T))  

**Returns** Stimulsoft.System.Collections.Dictionary<K, V>


---

#### toList

**toList**(): [Stimulsoft.System.Collections.Generic.List](Generic/List.md)<T>

**Returns** [Stimulsoft.System.Collections.Generic.List](Generic/List.md)<T>


---

#### toLookup

**toLookup**(**keySelector**: (value: T)): [Stimulsoft.System.Collections.Hashtable](Hashtable.md)

**Parameters**

- **keySelector** ((value: T))  

**Returns** [Stimulsoft.System.Collections.Hashtable](Hashtable.md)


---

#### union

**union**(**second**: Iterable<T>): LinqHelper<T>

**Parameters**

- **second** (Iterable<T>)  

**Returns** LinqHelper<T>


---

#### where

**where**(**predicate**: (value: T, **index**: number)): LinqHelper<T>

**Parameters**

- **predicate** ((value: T)  
- **index** (number))  

**Returns** LinqHelper<T>


---

#### zip

**zip**(**second**: Iterable<S>, **resultSelector**: (first: T, **second**: S)): LinqHelper<R>

**Parameters**

- **second** (Iterable<S>)  
- **resultSelector** ((first: T)  
- **second** (S))  

**Returns** LinqHelper<R>

