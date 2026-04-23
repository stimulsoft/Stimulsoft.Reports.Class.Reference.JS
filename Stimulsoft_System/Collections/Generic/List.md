---
title: "List<T> Class"
---

## List<T> Class

**Namespace:** `Stimulsoft.System.Collections.Generic`

### Inheritance

Inherits from: Array  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(T[] \| number items) |  |

**constructor**(**items**: T[] | number)

**Parameters**

- **items** (T[] | number)  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **countItems** | number |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **add** | void |  |
| **add2** `static` | [List](List.md)<any> |  |
| **addRange** | void |  |
| **aggregate** | T | Applies an accumulator function over a sequence. |
| **aggregate2** | T |  |
| **all** | boolean |  |
| **any** | boolean | Determines whether any element of a sequence satisfies a condition. |
| **average** | number | Computes the average of a sequence of System.Int64 values that are obtained by invoking a transform function on each element of the input sequence. |
| **bitwiseAnd** `static` | [List](List.md)<any> |  |
| **bitwiseOr** `static` | [List](List.md)<any> |  |
| **bitwiseXOr** `static` | [List](List.md)<any> |  |
| **cast** | [List](List.md)<S> | Converts the elements of an List to the specified type. |
| **clear** | void |  |
| **concat** | [List](List.md)<T> | Concatenates two sequences. |
| **contains** | boolean | Determines whether an element is in the List. |
| **copyTo** | void |  |
| **count2** | number |  |
| **create** `static` | [List](List.md)<T> |  |
| **defaultIfEmpty** | [List](List.md)<T> |  |
| **distinct** | [List](List.md)<T> | Returns distinct elements from a sequence by using the default equality comparer to compare values. |
| **div** `static` | [List](List.md)<any> |  |
| **except** | [List](List.md)<T> |  |
| **exists** | boolean |  |
| **findIndex2** | number |  |
| **findLastIndex2** | number |  |
| **first** | T |  |
| **firstOrDefault** | T |  |
| **firstOrDefaultAsDateTime** | [DateTime](../../DateTime.md) |  |
| **firstOrDefaultAsNullableDateTime** | DateTime | null |  |
| **firstOrDefaultAsNullableNumber** | number | null |  |
| **firstOrDefaultAsNumber** | number |  |
| **getArrayItem** | [List](List.md)<any[]> |  |
| **getByIndex** | T |  |
| **getKeys** | string[] |  |
| **getNamespace** `static` | string |  |
| **getRange** | [List](List.md)<T> |  |
| **getValueOrFirstOrDefault** `static` | any |  |
| **groupBy** | [List](List.md)<Grouping<K, T>> | Groups the elements of a sequence according to a specified key selector function and compares the keys by using a specified comparer. |
| **groupBy2** | [List](List.md)<Grouping<K, T>> | Groups the elements of a sequence according to a specified key selector function and compares the keys by using a specified comparer. |
| **insert** | void |  |
| **last** | T |  |
| **lastOrDefault** | T |  |
| **logicalAnd** `static` | [List](List.md)<any> |  |
| **logicalOr** `static` | [List](List.md)<any> |  |
| **max** | S | Invokes a transform function on each element of a sequence and returns the maximum value. |
| **min** | S | Invokes a transform function on each element of a sequence and returns the minimum value. |
| **mult** `static` | [List](List.md)<any> |  |
| **orderBy** | [List](List.md)<T> | Sorts the elements of a sequence in ascending order according to a key or by using a specified comparer. |
| **orderByDescending** | [List](List.md)<T> |  |
| **peek** | T |  |
| **remove** | void |  |
| **removeAt** | void |  |
| **removeByIndex** | [List](List.md)<T> |  |
| **removeRange** | void |  |
| **repeat** `static` | [List](List.md)<T> |  |
| **select** | [List](List.md)<S> |  |
| **selectAsync** | Promise<[List](List.md)<S>> |  |
| **selectMany** | [List](List.md)<S> |  |
| **selectMany2** | [List](List.md)<V> |  |
| **sequenceEqual** | boolean |  |
| **setByIndex** | void |  |
| **skip** | [List](List.md)<T> |  |
| **sort2** | void |  |
| **sub** `static` | [List](List.md)<any> |  |
| **sum** | number | Computes the sum of the sequence of System.Decimal values that are obtained by invoking a transform function on each element of the input sequence. |
| **take** | [List](List.md)<T> |  |
| **toDictionary** | Dictionary<K, V> |  |
| **toList** | [List](List.md)<T> |  |
| **toLookup** | [Hashtable](../Hashtable.md) | Creates a Lookup from an List according to a specified key selector function. |
| **toString2** `static` | string |  |
| **tryCastToBool** | [List](List.md)<boolean | null> |  |
| **tryCastToDateTime** | [List](List.md)<[DateTime](../../DateTime.md)> |  |
| **tryCastToNullableDateTime** | [List](List.md)<DateTime | null> |  |
| **tryCastToNullableNumber** | [List](List.md)<number | null> |  |
| **tryCastToNullableTimeSpan** | [List](List.md)<TimeSpan | null> |  |
| **tryCastToNumber** | [List](List.md)<number | null> |  |
| **tryCastToString** | [List](List.md)<string> |  |
| **tryCastToTimeSpan** | [List](List.md)<[TimeSpan](../../TimeSpan.md)> |  |
| **tryCastValueOrFirstDefaultToNullableNumber** | [List](List.md)<number | null> |  |
| **union** | [List](List.md)<T> |  |
| **where** | [List](List.md)<T> |  |
| **whereArrayItemEqualsTo** | [List](List.md)<any[]> |  |
| **whereArrayItemStringEqualsTo** | [List](List.md)<any[]> |  |
| **whereAsync** | Promise<[List](List.md)<T>> |  |
| **whereEqualsTo** | [List](List.md)<any[]> |  |
| **whereFirstOrDefaultArrayItemStringEqualsTo** | any[] |  |
| **zip** | [List](List.md)<R> |  |

---

### Method Details

#### add

**add**(**item**: T): void

**Parameters**

- **item** (T)  


---

#### add2 `static`

**add2**(**a**: any, **b**: any): [List](List.md)<any>

**Parameters**

- **a** (any)  
- **b** (any)  

**Returns** [List](List.md)<any>


---

#### addRange

**addRange**(**items**: List<T> | T[]): void

**Parameters**

- **items** (List<T> | T[])  


---

#### aggregate

**aggregate**(**func**: (av: T, **e**: T)): T

Applies an accumulator function over a sequence.

**Parameters**

- **func** ((av: T) — An accumulator function to be invoked on each element.  
- **e** (T))  

**Returns** T — The final accumulator value.


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

Determines whether any element of a sequence satisfies a condition.

**Parameters**

- **predicate** ((value: T)) — A function to test each element for a condition.  

**Returns** boolean — true if any elements in the source sequence pass the test in the specified predicate; otherwise, false.


---

#### average

**average**(**selector**: (value: T)): number

Computes the average of a sequence of System.Int64 values that are obtained by
invoking a transform function on each element of the input sequence.

**Parameters**

- **selector** ((value: T))  

**Returns** number — The average of the sequence of values.


---

#### bitwiseAnd `static`

**bitwiseAnd**(**a**: any, **b**: any): [List](List.md)<any>

**Parameters**

- **a** (any)  
- **b** (any)  

**Returns** [List](List.md)<any>


---

#### bitwiseOr `static`

**bitwiseOr**(**a**: any, **b**: any): [List](List.md)<any>

**Parameters**

- **a** (any)  
- **b** (any)  

**Returns** [List](List.md)<any>


---

#### bitwiseXOr `static`

**bitwiseXOr**(**a**: any, **b**: any): [List](List.md)<any>

**Parameters**

- **a** (any)  
- **b** (any)  

**Returns** [List](List.md)<any>


---

#### cast

**cast**(): [List](List.md)<S>

Converts the elements of an List to the specified type.

**Returns** [List](List.md)<S> — An List that contains each element of the source sequence converted to the specified type.


---

#### clear

**clear**(): void


---

#### concat

**concat**(**second**: [List](List.md)<T>): [List](List.md)<T>

Concatenates two sequences.

**Parameters**

- **second** ([List](List.md)<T>) — The sequence to concatenate to the first sequence.  

**Returns** [List](List.md)<T> — An List that contains the concatenated elements
of the two input sequences.


---

#### contains

**contains**(**item**: T): boolean

Determines whether an element is in the List.

**Parameters**

- **item** (T) — The object to locate in the List. The value can be null for reference types.  

**Returns** boolean — true if item is found in the List otherwise, false.


---

#### copyTo

**copyTo**(**array**: any[], **index**: any): void

**Parameters**

- **array** (any[])  
- **index** (any)  


---

#### count2

**count2**(**selector**: (value: T)): number

**Parameters**

- **selector** ((value: T))  

**Returns** number


---

#### create `static`

**create**(**t**: [Stimulsoft.System.Type](../../Type.md), **values**: any[]): [List](List.md)<T>

**Parameters**

- **t** ([Stimulsoft.System.Type](../../Type.md))  
- **values** (any[])  

**Returns** [List](List.md)<T>


---

#### defaultIfEmpty

**defaultIfEmpty**(): [List](List.md)<T>

**Returns** [List](List.md)<T>


---

#### distinct

**distinct**(): [List](List.md)<T>

Returns distinct elements from a sequence by using the default equality comparer to compare values.

**Returns** [List](List.md)<T> — An List that contains distinct elements from the source sequence.


---

#### div `static`

**div**(**a**: any, **b**: any): [List](List.md)<any>

**Parameters**

- **a** (any)  
- **b** (any)  

**Returns** [List](List.md)<any>


---

#### except

**except**(**second**: [List](List.md)<T>): [List](List.md)<T>

**Parameters**

- **second** ([List](List.md)<T>)  

**Returns** [List](List.md)<T>


---

#### exists

**exists**(**predicate**: (value: T)): boolean

**Parameters**

- **predicate** ((value: T))  

**Returns** boolean


---

#### findIndex2

**findIndex2**(**match**: (value: T)): number

**Parameters**

- **match** ((value: T))  

**Returns** number


---

#### findLastIndex2

**findLastIndex2**(**match**: (value: T)): number

**Parameters**

- **match** ((value: T))  

**Returns** number


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

#### firstOrDefaultAsDateTime

**firstOrDefaultAsDateTime**(): [DateTime](../../DateTime.md)

**Returns** [DateTime](../../DateTime.md)


---

#### firstOrDefaultAsNullableDateTime

**firstOrDefaultAsNullableDateTime**(): DateTime | null

**Returns** DateTime | null


---

#### firstOrDefaultAsNullableNumber

**firstOrDefaultAsNullableNumber**(): number | null

**Returns** number | null


---

#### firstOrDefaultAsNumber

**firstOrDefaultAsNumber**(): number

**Returns** number


---

#### getArrayItem

**getArrayItem**(**itemIndex**: number): [List](List.md)<any[]>

**Parameters**

- **itemIndex** (number)  

**Returns** [List](List.md)<any[]>


---

#### getByIndex

**getByIndex**(**index**: number, **keys**: string[]): T

**Parameters**

- **index** (number)  
- **keys** (string[])  

**Returns** T


---

#### getKeys

**getKeys**(): string[]

**Returns** string[]


---

#### getNamespace `static`

**getNamespace**(): string

**Returns** string


---

#### getRange

**getRange**(**index**: number, **count**: number): [List](List.md)<T>

**Parameters**

- **index** (number)  
- **count** (number)  

**Returns** [List](List.md)<T>


---

#### getValueOrFirstOrDefault `static`

**getValueOrFirstOrDefault**(**value**: any): any

**Parameters**

- **value** (any)  

**Returns** any


---

#### groupBy

**groupBy**(**keySelector**: (value: T)): [List](List.md)<Grouping<K, T>>

Groups the elements of a sequence according to a specified key selector function
and compares the keys by using a specified comparer.

**Parameters**

- **keySelector** ((value: T)) — A function to extract the key for each element.  

**Returns** [List](List.md)<Grouping<K, T>> — An IEnumerable<IGrouping<TKey, TSource>> in C# or IEnumerable(Of IGrouping(Of
TKey, TSource)) in Visual Basic where each System.Linq.IGrouping`2 object contains
a collection of objects and a key.


---

#### groupBy2

**groupBy2**(**keySelector**: (value: T)): [List](List.md)<Grouping<K, T>>

Groups the elements of a sequence according to a specified key selector function
and compares the keys by using a specified comparer.

**Parameters**

- **keySelector** ((value: T)) — A function to extract the key for each element.  

**Returns** [List](List.md)<Grouping<K, T>> — An IEnumerable<IGrouping<TKey, TSource>> in C# or IEnumerable(Of IGrouping(Of
TKey, TSource)) in Visual Basic where each System.Linq.IGrouping`2 object contains
a collection of objects and a key.


---

#### insert

**insert**(**index**: number, **item**: T): void

**Parameters**

- **index** (number)  
- **item** (T)  


---

#### last

**last**(): T

**Returns** T


---

#### lastOrDefault

**lastOrDefault**(): T

**Returns** T


---

#### logicalAnd `static`

**logicalAnd**(**a**: any, **b**: any): [List](List.md)<any>

**Parameters**

- **a** (any)  
- **b** (any)  

**Returns** [List](List.md)<any>


---

#### logicalOr `static`

**logicalOr**(**a**: any, **b**: any): [List](List.md)<any>

**Parameters**

- **a** (any)  
- **b** (any)  

**Returns** [List](List.md)<any>


---

#### max

**max**(**selector**: (value: T)): S

Invokes a transform function on each element of a sequence and returns the maximum value.

**Parameters**

- **selector** ((value: T)) — A transform function to apply to each element.  

**Returns** S — The maximum value in the sequence.


---

#### min

**min**(**selector**: (value: T)): S

Invokes a transform function on each element of a sequence and returns the minimum value.

**Parameters**

- **selector** ((value: T))  

**Returns** S — The minimum value in the sequence.


---

#### mult `static`

**mult**(**a**: any, **b**: any): [List](List.md)<any>

**Parameters**

- **a** (any)  
- **b** (any)  

**Returns** [List](List.md)<any>


---

#### orderBy

**orderBy**(**keySelector**: (value: T)): [List](List.md)<T>

Sorts the elements of a sequence in ascending order according to a key or by using a specified comparer.

**Parameters**

- **keySelector** ((value: T)) — A function to extract a key from an element.  

**Returns** [List](List.md)<T> — An System.Linq.IOrderedEnumerable`1 whose elements are sorted according to a key.


---

#### orderByDescending

**orderByDescending**(**keySelector**: (value: T)): [List](List.md)<T>

**Parameters**

- **keySelector** ((value: T))  

**Returns** [List](List.md)<T>


---

#### peek

**peek**(): T

**Returns** T


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

#### removeByIndex

**removeByIndex**(**index**: number): [List](List.md)<T>

**Parameters**

- **index** (number)  

**Returns** [List](List.md)<T>


---

#### removeRange

**removeRange**(**index**: number, **count**: number): void

**Parameters**

- **index** (number)  
- **count** (number)  


---

#### repeat `static`

**repeat**(**element**: T, **count**: number): [List](List.md)<T>

**Parameters**

- **element** (T)  
- **count** (number)  

**Returns** [List](List.md)<T>


---

#### select

**select**(**selector**: (value: T)): [List](List.md)<S>

**Parameters**

- **selector** ((value: T))  

**Returns** [List](List.md)<S>


---

#### selectAsync

**selectAsync**(**selector**: (value: T)): Promise<[List](List.md)<S>>

**Parameters**

- **selector** ((value: T))  

**Returns** Promise<[List](List.md)<S>>


---

#### selectMany

**selectMany**(**selector**: (value: T)): [List](List.md)<S>

**Parameters**

- **selector** ((value: T))  

**Returns** [List](List.md)<S>


---

#### selectMany2

**selectMany2**(**collectionSelector**: (value: T)): [List](List.md)<V>

**Parameters**

- **collectionSelector** ((value: T))  

**Returns** [List](List.md)<V>


---

#### sequenceEqual

**sequenceEqual**(**second**: [List](List.md)<T>): boolean

**Parameters**

- **second** ([List](List.md)<T>)  

**Returns** boolean


---

#### setByIndex

**setByIndex**(**index**: number, **item**: T, **keys**: string[]): void

**Parameters**

- **index** (number)  
- **item** (T)  
- **keys** (string[])  


---

#### skip

**skip**(**count**: number): [List](List.md)<T>

**Parameters**

- **count** (number)  

**Returns** [List](List.md)<T>


---

#### sort2

**sort2**(): void


---

#### sub `static`

**sub**(**a**: any, **b**: any): [List](List.md)<any>

**Parameters**

- **a** (any)  
- **b** (any)  

**Returns** [List](List.md)<any>


---

#### sum

**sum**(**selector**: (value: T)): number

Computes the sum of the sequence of System.Decimal values that are obtained by
invoking a transform function on each element of the input sequence.

**Parameters**

- **selector** ((value: T)) — A transform function to apply to each element.  

**Returns** number — The sum of the projected values.


---

#### take

**take**(**count**: number): [List](List.md)<T>

**Parameters**

- **count** (number)  

**Returns** [List](List.md)<T>


---

#### toDictionary

**toDictionary**(**keySelector**: (item: T)): Dictionary<K, V>

**Parameters**

- **keySelector** ((item: T))  

**Returns** Dictionary<K, V>


---

#### toList

**toList**(): [List](List.md)<T>

**Returns** [List](List.md)<T>


---

#### toLookup

**toLookup**(**keySelector**: (value: T)): [Hashtable](../Hashtable.md)

Creates a Lookup from an List
according to a specified key selector function.

**Parameters**

- **keySelector** ((value: T)) — A function to extract a key from each element.  

**Returns** [Hashtable](../Hashtable.md) — A Lookup that contains keys and values.


---

#### toString2 `static`

**toString2**(**value**: any): string

**Parameters**

- **value** (any)  

**Returns** string


---

#### tryCastToBool

**tryCastToBool**(): [List](List.md)<boolean | null>

**Returns** [List](List.md)<boolean | null>


---

#### tryCastToDateTime

**tryCastToDateTime**(): [List](List.md)<[DateTime](../../DateTime.md)>

**Returns** [List](List.md)<[DateTime](../../DateTime.md)>


---

#### tryCastToNullableDateTime

**tryCastToNullableDateTime**(): [List](List.md)<DateTime | null>

**Returns** [List](List.md)<DateTime | null>


---

#### tryCastToNullableNumber

**tryCastToNullableNumber**(): [List](List.md)<number | null>

**Returns** [List](List.md)<number | null>


---

#### tryCastToNullableTimeSpan

**tryCastToNullableTimeSpan**(): [List](List.md)<TimeSpan | null>

**Returns** [List](List.md)<TimeSpan | null>


---

#### tryCastToNumber

**tryCastToNumber**(): [List](List.md)<number | null>

**Returns** [List](List.md)<number | null>


---

#### tryCastToString

**tryCastToString**(): [List](List.md)<string>

**Returns** [List](List.md)<string>


---

#### tryCastToTimeSpan

**tryCastToTimeSpan**(): [List](List.md)<[TimeSpan](../../TimeSpan.md)>

**Returns** [List](List.md)<[TimeSpan](../../TimeSpan.md)>


---

#### tryCastValueOrFirstDefaultToNullableNumber

**tryCastValueOrFirstDefaultToNullableNumber**(): [List](List.md)<number | null>

**Returns** [List](List.md)<number | null>


---

#### union

**union**(**second**: [List](List.md)<T> | Array<T>): [List](List.md)<T>

**Parameters**

- **second** ([List](List.md)<T> | Array<T>)  

**Returns** [List](List.md)<T>


---

#### where

**where**(**predicate**: (value: T, **index**: number)): [List](List.md)<T>

**Parameters**

- **predicate** ((value: T)  
- **index** (number))  

**Returns** [List](List.md)<T>


---

#### whereArrayItemEqualsTo

**whereArrayItemEqualsTo**(**itemIndex**: number, **value**: any): [List](List.md)<any[]>

**Parameters**

- **itemIndex** (number)  
- **value** (any)  

**Returns** [List](List.md)<any[]>


---

#### whereArrayItemStringEqualsTo

**whereArrayItemStringEqualsTo**(**itemIndex**: number, **value**: string): [List](List.md)<any[]>

**Parameters**

- **itemIndex** (number)  
- **value** (string)  

**Returns** [List](List.md)<any[]>


---

#### whereAsync

**whereAsync**(**predicate**: (value: T, **index**: number)): Promise<[List](List.md)<T>>

**Parameters**

- **predicate** ((value: T)  
- **index** (number))  

**Returns** Promise<[List](List.md)<T>>


---

#### whereEqualsTo

**whereEqualsTo**(**values1**: any, **values2**: any): [List](List.md)<any[]>

**Parameters**

- **values1** (any)  
- **values2** (any)  

**Returns** [List](List.md)<any[]>


---

#### whereFirstOrDefaultArrayItemStringEqualsTo

**whereFirstOrDefaultArrayItemStringEqualsTo**(**itemIndex**: number, **value**: string): any[]

**Parameters**

- **itemIndex** (number)  
- **value** (string)  

**Returns** any[]


---

#### zip

**zip**(**second**: [List](List.md)<S>, **resultSelector**: (first: T, **second**: S)): [List](List.md)<R>

**Parameters**

- **second** ([List](List.md)<S>)  
- **resultSelector** ((first: T)  
- **second** (S))  

**Returns** [List](List.md)<R>

