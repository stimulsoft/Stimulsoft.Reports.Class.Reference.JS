---
title: "StringBuilder Class"
---

## StringBuilder Class

**Namespace:** `Stimulsoft.System.Text`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(string value) |  |

**constructor**(**value**: string)

**Parameters**

- **value** (string)  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **isEmpty** | any |  |
| **length** | number |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **append** | [StringBuilder](StringBuilder.md) |  |
| **appendCount** | [StringBuilder](StringBuilder.md) |  |
| **appendFormat** | [StringBuilder](StringBuilder.md) |  |
| **appendLine** | [StringBuilder](StringBuilder.md) |  |
| **appendLines** | [StringBuilder](StringBuilder.md) |  |
| **appendThese** | [StringBuilder](StringBuilder.md) |  |
| **charAt** | string |  |
| **charCodeAt** | number |  |
| **clear** | void |  |
| **dispose** | void |  |
| **insert** | [StringBuilder](StringBuilder.md) |  |
| **join** | string |  |
| **remove** | [StringBuilder](StringBuilder.md) |  |
| **replace** | [StringBuilder](StringBuilder.md) |  |
| **setByIndex** | void |  |
| **toString** | string |  |

---

### Method Details

#### append

**append**(**items**: any[]): [StringBuilder](StringBuilder.md)

**Parameters**

- **items** (any[])  

**Returns** [StringBuilder](StringBuilder.md)


---

#### appendCount

**appendCount**(**item**: any, **count**: any): [StringBuilder](StringBuilder.md)

**Parameters**

- **item** (any)  
- **count** (any)  

**Returns** [StringBuilder](StringBuilder.md)


---

#### appendFormat

**appendFormat**(**str**: string, **values**: any[]): [StringBuilder](StringBuilder.md)

**Parameters**

- **str** (string)  
- **values** (any[])  

**Returns** [StringBuilder](StringBuilder.md)


---

#### appendLine

**appendLine**(**items**: any[]): [StringBuilder](StringBuilder.md)

**Parameters**

- **items** (any[])  

**Returns** [StringBuilder](StringBuilder.md)


---

#### appendLines

**appendLines**(**items**: any[]): [StringBuilder](StringBuilder.md)

**Parameters**

- **items** (any[])  

**Returns** [StringBuilder](StringBuilder.md)


---

#### appendThese

**appendThese**(**items**: any[]): [StringBuilder](StringBuilder.md)

**Parameters**

- **items** (any[])  

**Returns** [StringBuilder](StringBuilder.md)


---

#### charAt

**charAt**(**index**: number): string

**Parameters**

- **index** (number)  

**Returns** string


---

#### charCodeAt

**charCodeAt**(**index**: number): number

**Parameters**

- **index** (number)  

**Returns** number


---

#### clear

**clear**(): void


---

#### dispose

**dispose**(): void


---

#### insert

**insert**(**index**: number, **value**: string, **count**: any): [StringBuilder](StringBuilder.md)

**Parameters**

- **index** (number)  
- **value** (string)  
- **count** (any)  

**Returns** [StringBuilder](StringBuilder.md)


---

#### join

**join**(**delimiter**: string): string

**Parameters**

- **delimiter** (string)  

**Returns** string


---

#### remove

**remove**(**startIndex**: number, **length**: number): [StringBuilder](StringBuilder.md)

**Parameters**

- **startIndex** (number)  
- **length** (number)  

**Returns** [StringBuilder](StringBuilder.md)


---

#### replace

**replace**(**searchValue**: string, **replaceValue**: string): [StringBuilder](StringBuilder.md)

**Parameters**

- **searchValue** (string)  
- **replaceValue** (string)  

**Returns** [StringBuilder](StringBuilder.md)


---

#### setByIndex

**setByIndex**(**index**: number, **value**: string): void

**Parameters**

- **index** (number)  
- **value** (string)  


---

#### toString

**toString**(): string

**Returns** string


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **item** | any |  |
| **item** | any |  |
| **newString** | any |  |
