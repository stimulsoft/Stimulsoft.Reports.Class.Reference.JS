---
title: "StiObject Class"
---

## StiObject Class

**Namespace:** `Stimulsoft.System`

### Inheritance

Implements: [IAsIs](IAsIs.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(any value) |  |

**constructor**(**value**: any)

**Parameters**

- **value** (any)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **addEvent** `static` | void |  |
| **addRange** | void |  |
| **clear** | void |  |
| **clone** | any |  |
| **compareTo** `static` *(+2 overloads)* | number |  |
| **concat** `static` | string |  |
| **contains** | boolean |  |
| **copyTo** | void |  |
| **create** `static` | T[] |  |
| **create1** `static` | T[] |  |
| **create2** `static` | T[][] |  |
| **create3** `static` | T[][][] |  |
| **customFormat** `static` | string |  |
| **disableAllEnumerable** `static` | void |  |
| **distinct** *(+1 overloads)* | T[] | Returns distinct elements from a sequence by using the default equality comparer to compare values. |
| **equals** *(+1 overloads)* | boolean |  |
| **fill** `static` | string |  |
| **filterAsync** | Promise<T[]> |  |
| **format** `static` | string |  |
| **format1** `static` | string |  |
| **fromBytesArray** `static` | string |  |
| **fromUnicodeString** | string |  |
| **getArrayItem** | T[][] |  |
| **getByIndex** | any |  |
| **getFullTypeName** *(+2 overloads)* | string |  |
| **getHashCode** *(+2 overloads)* | number |  |
| **getKeys** | string[] |  |
| **getLength** | number |  |
| **getMethods** | string[] |  |
| **getNamespace** *(+1 overloads)* | string |  |
| **getOwnPropertyNames** `static` | void |  |
| **getOwnPropertyNamesWithInherited** `static` | string[] |  |
| **getType** *(+3 overloads)* | [Stimulsoft.System.Type](Type.md) |  |
| **getTypeName** *(+3 overloads)* | string |  |
| **indexOfAny** *(+1 overloads)* | number |  |
| **insert** | void |  |
| **is** *(+1 overloads)* | this is T |  |
| **isArray** `static` | data is Array<T> |  |
| **isDateTimeArray** | boolean |  |
| **isNullOrEmpty** `static` | boolean |  |
| **isNullOrWhiteSpace** `static` | boolean |  |
| **join** `static` | string |  |
| **keys** `static` | string[] |  |
| **max** | S | Invokes a transform function on each element of a sequence and returns the maximum value. |
| **memberwiseClone** *(+1 overloads)* | any |  |
| **min** | S | Invokes a transform function on each element of a sequence and returns the minimum value. |
| **orderBy** | T[] | Sorts the elements of a sequence in ascending order according to a key or by using a specified comparer. |
| **orderByDescending** | T[] |  |
| **parse** `static` | boolean |  |
| **parseFormatString** `static` | string |  |
| **peek** | any |  |
| **referenceEquals** `static` | boolean |  |
| **regexIndexOf** | void |  |
| **regexLastIndexOf** | void |  |
| **remove** | void |  |
| **removeAt** | void |  |
| **removeRange** | void |  |
| **repeat** `static` | string |  |
| **revoker** | void |  |
| **saveAs** `static` | void |  |
| **setTimeout** | void |  |
| **sort2** | any[] |  |
| **sort3** `static` | void |  |
| **split** | string[] |  |
| **subarray** | T[] |  |
| **sum** | number | Computes the sum of the sequence of System.Decimal values that are obtained by invoking a transform function on each element of the input sequence. |
| **throw_outside** | void |  |
| **toArray** | any[] |  |
| **toBoolean** | boolean |  |
| **toBytesArray** | number[] |  |
| **toDictionary** | Stimulsoft.System.Collections.Dictionary<K, V> |  |
| **toList** | [Stimulsoft.System.Collections.Generic.List](../Stimulsoft_System_Collections_Generic/List.md)<T> |  |
| **toLower** | string |  |
| **toLowerFirst** | string |  |
| **toNumber** *(+2 overloads)* | number |  |
| **toString** *(+2 overloads)* | string |  |
| **toUnicodeString** | string |  |
| **toUpper** | string |  |
| **union** | T[] |  |

---

### Method Details

#### addEvent `static`

**addEvent**(**element**: any, **eventName**: string, **fn**: Function): void

**Parameters**

- **element** (any)  
- **eventName** (string)  
- **fn** (Function)  


---

#### addRange

**addRange**(**items**: any[]): void

**Parameters**

- **items** (any[])  


---

#### clear

**clear**(): void


---

#### clone

**clone**(): any

**Returns** any


---

#### compareTo `static`

**compareTo**(**a**: any, **b**: any): number

**Parameters**

- **a** (any)  
- **b** (any)  

**Returns** number

---

**compareTo**(**object**: any): number

**Parameters**

- **object** (any)  

**Returns** number

---

**compareTo**(**object**: boolean): number

**Parameters**

- **object** (boolean)  

**Returns** number


---

#### concat `static`

**concat**(**strA**: string, **strB**: string): string

**Parameters**

- **strA** (string)  
- **strB** (string)  

**Returns** string


---

#### contains

**contains**(**item**: any): boolean

**Parameters**

- **item** (any)  

**Returns** boolean


---

#### copyTo

**copyTo**(**array**: any[], **index**: any): void

**Parameters**

- **array** (any[])  
- **index** (any)  


---

#### create `static`

**create**(**t**: [Stimulsoft.System.Type](Type.md), **count**: number, **isStructure**: any): T[]

**Parameters**

- **t** ([Stimulsoft.System.Type](Type.md))  
- **count** (number)  
- **isStructure** (any)  

**Returns** T[]


---

#### create1 `static`

**create1**(**t**: [Stimulsoft.System.Type](Type.md), **values**: any[]): T[]

**Parameters**

- **t** ([Stimulsoft.System.Type](Type.md))  
- **values** (any[])  

**Returns** T[]


---

#### create2 `static`

**create2**(**t**: [Stimulsoft.System.Type](Type.md), **count1**: number, **count2**: number, **isStructure**: any): T[][]

**Parameters**

- **t** ([Stimulsoft.System.Type](Type.md))  
- **count1** (number)  
- **count2** (number)  
- **isStructure** (any)  

**Returns** T[][]


---

#### create3 `static`

**create3**(**t**: [Stimulsoft.System.Type](Type.md), **count1**: number, **count2**: number, **count3**: number, **isStructure**: any): T[][][]

**Parameters**

- **t** ([Stimulsoft.System.Type](Type.md))  
- **count1** (number)  
- **count2** (number)  
- **count3** (number)  
- **isStructure** (any)  

**Returns** T[][][]


---

#### customFormat `static`

**customFormat**(**arg**: any, **format**: string): string

**Parameters**

- **arg** (any)  
- **format** (string)  

**Returns** string


---

#### disableAllEnumerable `static`

**disableAllEnumerable**(**prototype**: any, **obj**: any): void

**Parameters**

- **prototype** (any)  
- **obj** (any)  


---

#### distinct

**distinct**(): T[]

Returns distinct elements from a sequence by using the default equality comparer to compare values.

**Returns** T[] — An List that contains distinct elements from the source sequence.

---

**distinct**(**array**: T[]): T[]

**Parameters**

- **array** (T[])  

**Returns** T[]


---

#### equals

**equals**(**args**: any): boolean

**Parameters**

- **args** (any)  

**Returns** boolean

---

**equals**(**objA**: any, **objB**: any): boolean

**Parameters**

- **objA** (any)  
- **objB** (any)  

**Returns** boolean


---

#### fill `static`

**fill**(**value**: string, **count**: number): string

**Parameters**

- **value** (string)  
- **count** (number)  

**Returns** string


---

#### filterAsync

**filterAsync**(**predicate**: (value: T, **index**: number)): Promise<T[]>

**Parameters**

- **predicate** ((value: T)  
- **index** (number))  

**Returns** Promise<T[]>


---

#### format `static`

**format**(**str**: string, **values**: any[]): string

**Parameters**

- **str** (string)  
- **values** (any[])  

**Returns** string


---

#### format1 `static`

**format1**(**str**: string, **values**: any[]): string

**Parameters**

- **str** (string)  
- **values** (any[])  

**Returns** string


---

#### fromBytesArray `static`

**fromBytesArray**(**bytes**: number[]): string

**Parameters**

- **bytes** (number[])  

**Returns** string


---

#### fromUnicodeString

**fromUnicodeString**(): string

**Returns** string


---

#### getArrayItem

**getArrayItem**(**itemIndex**: number): T[][]

**Parameters**

- **itemIndex** (number)  

**Returns** T[][]


---

#### getByIndex

**getByIndex**(**index**: number, **keys**: string[]): any

**Parameters**

- **index** (number)  
- **keys** (string[])  

**Returns** any


---

#### getFullTypeName

**getFullTypeName**(): string

**Returns** string — Full .NET type name, including namespace.

---

**getFullTypeName**(): string

**Returns** string

---

**getFullTypeName**(): string

**Returns** string


---

#### getHashCode

**getHashCode**(**args**: any): number

**Parameters**

- **args** (any)  

**Returns** number

---

**getHashCode**(**args**: any): number

**Parameters**

- **args** (any)  

**Returns** number

---

**getHashCode**(): number

**Returns** number


---

#### getKeys

**getKeys**(): string[]

**Returns** string[]


---

#### getLength

**getLength**(**dimension**: number): number

**Parameters**

- **dimension** (number)  

**Returns** number


---

#### getMethods

**getMethods**(**bindingAttr**: [BindingFlags](../Stimulsoft_System_Reflection/BindingFlags.md)): string[]

**Parameters**

- **bindingAttr** ([BindingFlags](../Stimulsoft_System_Reflection/BindingFlags.md))  

**Returns** string[]


---

#### getNamespace

**getNamespace**(): string

**Returns** string — Full namespace, without name.

---

**getNamespace**(): string

**Returns** string


---

#### getOwnPropertyNames `static`

**getOwnPropertyNames**(**obj**: any): void

**Parameters**

- **obj** (any)  


---

#### getOwnPropertyNamesWithInherited `static`

**getOwnPropertyNamesWithInherited**(**obj**: any, **excludeGetSet**: any): string[]

**Parameters**

- **obj** (any)  
- **excludeGetSet** (any)  

**Returns** string[]


---

#### getType

**getType**(): [Stimulsoft.System.Type](Type.md)

**Returns** [Stimulsoft.System.Type](Type.md)

---

**getType**(): [Stimulsoft.System.Type](Type.md)

**Returns** [Stimulsoft.System.Type](Type.md)

---

**getType**(): [Stimulsoft.System.Type](Type.md)

**Returns** [Stimulsoft.System.Type](Type.md)

---

**getType**(): [Stimulsoft.System.Type](Type.md)

**Returns** [Stimulsoft.System.Type](Type.md)


---

#### getTypeName

**getTypeName**(): string

**Returns** string — Short .NET type name, without namespace.

---

**getTypeName**(): string

**Returns** string

---

**getTypeName**(): string

**Returns** string

---

**getTypeName**(): string

**Returns** string


---

#### indexOfAny

**indexOfAny**(**values**: string[]): number

**Parameters**

- **values** (string[])  

**Returns** number

---

**indexOfAny**(**str**: string, **searchChars**: string[]): number

**Parameters**

- **str** (string)  
- **searchChars** (string[])  

**Returns** number


---

#### insert

**insert**(**index**: number, **item**: any): void

**Parameters**

- **index** (number)  
- **item** (any)  


---

#### is

**is**(**type**: any): this is T

**Parameters**

- **type** (any)  

**Returns** this is T

---

**is**(**type**: any): this is T

**Parameters**

- **type** (any)  

**Returns** this is T


---

#### isArray `static`

**isArray**(**data**: any): data is Array<T>

**Parameters**

- **data** (any)  

**Returns** data is Array<T>


---

#### isDateTimeArray

**isDateTimeArray**(): boolean

**Returns** boolean


---

#### isNullOrEmpty `static`

**isNullOrEmpty**(**value**: string): boolean

**Parameters**

- **value** (string)  

**Returns** boolean


---

#### isNullOrWhiteSpace `static`

**isNullOrWhiteSpace**(**value**: string): boolean

**Parameters**

- **value** (string)  

**Returns** boolean


---

#### join `static`

**join**(**separator**: string, **value**: string[]): string

**Parameters**

- **separator** (string)  
- **value** (string[])  

**Returns** string


---

#### keys `static`

**keys**(**obj**: any): string[]

**Parameters**

- **obj** (any)  

**Returns** string[]


---

#### max

**max**(**selector**: (value: T)): S

Invokes a transform function on each element of a sequence and returns the maximum value.

**Parameters**

- **selector** ((value: T)) — A transform function to apply to each element.  

**Returns** S — The maximum value in the sequence.


---

#### memberwiseClone

**memberwiseClone**(**isBase**: any): any

**Parameters**

- **isBase** (any)  

**Returns** any

---

**memberwiseClone**(**isBase**: any): any

**Parameters**

- **isBase** (any)  

**Returns** any


---

#### min

**min**(**selector**: (value: T)): S

Invokes a transform function on each element of a sequence and returns the minimum value.

**Parameters**

- **selector** ((value: T))  

**Returns** S — The minimum value in the sequence.


---

#### orderBy

**orderBy**(**keySelector**: (value: T)): T[]

Sorts the elements of a sequence in ascending order according to a key or by using a specified comparer.

**Parameters**

- **keySelector** ((value: T)) — A function to extract a key from an element.  

**Returns** T[] — An System.Linq.IOrderedEnumerable`1 whose elements are sorted according to a key.


---

#### orderByDescending

**orderByDescending**(**keySelector**: (value: T)): T[]

**Parameters**

- **keySelector** ((value: T))  

**Returns** T[]


---

#### parse `static`

**parse**(**value**: string): boolean

**Parameters**

- **value** (string)  

**Returns** boolean


---

#### parseFormatString `static`

**parseFormatString**(**formatString**: string, **values**: any[]): string

**Parameters**

- **formatString** (string)  
- **values** (any[])  

**Returns** string


---

#### peek

**peek**(): any

**Returns** any


---

#### referenceEquals `static`

**referenceEquals**(**objA**: any, **objB**: any): boolean

**Parameters**

- **objA** (any)  
- **objB** (any)  

**Returns** boolean


---

#### regexIndexOf

**regexIndexOf**(**regex**: RegExp, **startpos**: number): void

**Parameters**

- **regex** (RegExp)  
- **startpos** (number)  


---

#### regexLastIndexOf

**regexLastIndexOf**(**regex**: RegExp, **startpos**: number): void

**Parameters**

- **regex** (RegExp)  
- **startpos** (number)  


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

#### removeRange

**removeRange**(**index**: number, **count**: number): void

**Parameters**

- **index** (number)  
- **count** (number)  


---

#### repeat `static`

**repeat**(**value**: string, **n**: number): string

**Parameters**

- **value** (string)  
- **n** (number)  

**Returns** string


---

#### revoker

**revoker**(): void


---

#### saveAs `static`

**saveAs**(**data**: any, **fileName**: string, **type**: any): void

**Parameters**

- **data** (any)  
- **fileName** (string)  
- **type** (any)  


---

#### setTimeout

**setTimeout**(**revoker**: any, **arbitrary_revoke_timeout**: any): void

**Parameters**

- **revoker** (any)  
- **arbitrary_revoke_timeout** (any)  


---

#### sort2

**sort2**(**comparer**: [Stimulsoft.System.Collections.IComparer](../Stimulsoft_System_Collections/IComparer.md)<any>): any[]

**Parameters**

- **comparer** ([Stimulsoft.System.Collections.IComparer](../Stimulsoft_System_Collections/IComparer.md)<any>)  

**Returns** any[]


---

#### sort3 `static`

**sort3**(**keys**: number[], **items**: any[]): void

**Parameters**

- **keys** (number[])  
- **items** (any[])  


---

#### split

**split**(**separators**: string[]): string[]

**Parameters**

- **separators** (string[])  

**Returns** string[]


---

#### subarray

**subarray**(**start**: number, **end**: number): T[]

**Parameters**

- **start** (number)  
- **end** (number)  

**Returns** T[]


---

#### sum

**sum**(**selector**: (value: T)): number

Computes the sum of the sequence of System.Decimal values that are obtained by
invoking a transform function on each element of the input sequence.

**Parameters**

- **selector** ((value: T)) — A transform function to apply to each element.  

**Returns** number — The sum of the projected values.


---

#### throw_outside

**throw_outside**(**ex**: any): void

**Parameters**

- **ex** (any)  


---

#### toArray

**toArray**(): any[]

**Returns** any[]


---

#### toBoolean

**toBoolean**(): boolean

**Returns** boolean


---

#### toBytesArray

**toBytesArray**(): number[]

**Returns** number[]


---

#### toDictionary

**toDictionary**(**keySelector**: (item: T)): Stimulsoft.System.Collections.Dictionary<K, V>

**Parameters**

- **keySelector** ((item: T))  

**Returns** Stimulsoft.System.Collections.Dictionary<K, V>


---

#### toList

**toList**(): [Stimulsoft.System.Collections.Generic.List](../Stimulsoft_System_Collections_Generic/List.md)<T>

**Returns** [Stimulsoft.System.Collections.Generic.List](../Stimulsoft_System_Collections_Generic/List.md)<T>


---

#### toLower

**toLower**(): string

**Returns** string


---

#### toLowerFirst

**toLowerFirst**(): string

**Returns** string


---

#### toNumber

**toNumber**(**float**: any): number

**Parameters**

- **float** (any)  

**Returns** number

---

**toNumber**(**float**: any): number

**Parameters**

- **float** (any)  

**Returns** number

---

**toNumber**(**float**: any): number

**Parameters**

- **float** (any)  

**Returns** number


---

#### toString

**toString**(): string

**Returns** string

---

**toString**(): string

**Returns** string

---

**toString**(): string

**Returns** string


---

#### toUnicodeString

**toUnicodeString**(): string

**Returns** string


---

#### toUpper

**toUpper**(): string

**Returns** string


---

#### union

**union**(**second**: T[]): T[]

**Parameters**

- **second** (T[])  

**Returns** T[]


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **0xffffffff** | any |  |
| **acc** | any |  |
| **acc** | any |  |
| **acc** | any |  |
| **acc** | any |  |
| **acc** | any |  |
| **acc** | any |  |
| **acc** | any |  |
| **acc** | any |  |
| **acc** | any |  |
| **acc** | any |  |
| **acc** | any |  |
| **acc** | any |  |
| **acc** | any |  |
| **acc** | any |  |
| **c** | any |  |
| **c2** | any |  |
| **c2** | any |  |
| **c3** | any |  |
| **current** | any |  |
| **event_types** | any |  |
| **hashCode** | any |  |
| **lane** | any |  |
| **lastIndexOf** | any |  |
| **max** | any |  |
| **methods** | any |  |
| **methods** | any |  |
| **min** | any |  |
| **regex** | any |  |
| **result** | any |  |
| **result** | any |  |
| **result** | any |  |
| **startpos** | any |  |
| **startpos** | any |  |
| **value** | any |  |
| **value** | (view |  |
| **value** | any |  |
| **value** | any |  |
