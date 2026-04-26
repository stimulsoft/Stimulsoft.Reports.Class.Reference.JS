---
title: "Color Class"
---

## Color Class

**Namespace:** `Stimulsoft.System.Drawing`

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **isNamedColor** | boolean |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **changeAlpha** | [Color](Color.md) |  |
| **equals** | boolean |  |
| **fromArgb** `static` *(+3 overloads)* | [Color](Color.md) |  |
| **fromArgb2** `static` | [Color](Color.md) |  |
| **fromArgb3** `static` | [Color](Color.md) |  |
| **fromName** `static` | [Color](Color.md) |  |
| **getBrightness** | number |  |
| **getHashCode** | number |  |
| **is** | this is Color |  |
| **is2** | void |  |
| **over** | [Color](Color.md) |  |
| **toArgb** | number |  |
| **toHtml** | string |  |
| **toString** | string |  |

---

### Method Details

#### changeAlpha

**changeAlpha**(**alpha**: number): [Color](Color.md)

**Parameters**

- **alpha** (number)  

**Returns** [Color](Color.md)


---

#### equals

**equals**(**color**: [Color](Color.md)): boolean

**Parameters**

- **color** ([Color](Color.md))  

**Returns** boolean


---

#### fromArgb `static`

**fromArgb**(**alpha**: number, **red**: number, **green**: number, **blue**: number): [Color](Color.md)

**Parameters**

- **alpha** (number)  
- **red** (number)  
- **green** (number)  
- **blue** (number)  

**Returns** [Color](Color.md)

---

**fromArgb**(**red**: number, **green**: number, **blue**: number): [Color](Color.md)

**Parameters**

- **red** (number)  
- **green** (number)  
- **blue** (number)  

**Returns** [Color](Color.md)

---

**fromArgb**(**alpha**: number, **color**: [Color](Color.md)): [Color](Color.md)

**Parameters**

- **alpha** (number)  
- **color** ([Color](Color.md))  

**Returns** [Color](Color.md)

---

**fromArgb**(**alpha_red**: number, **red_green_color**: number \| Color, **green_blue**: number, **blue**: number): [Color](Color.md)

**Parameters**

- **alpha_red** (number)  
- **red_green_color** (number \| Color)  
- **green_blue** (number)  
- **blue** (number)  

**Returns** [Color](Color.md)


---

#### fromArgb2 `static`

**fromArgb2**(**red**: number, **green**: number, **blue**: number): [Color](Color.md)

**Parameters**

- **red** (number)  
- **green** (number)  
- **blue** (number)  

**Returns** [Color](Color.md)


---

#### fromArgb3 `static`

**fromArgb3**(**alpha**: number, **color**: [Color](Color.md)): [Color](Color.md)

**Parameters**

- **alpha** (number)  
- **color** ([Color](Color.md))  

**Returns** [Color](Color.md)


---

#### fromName `static`

**fromName**(**name**: string): [Color](Color.md)

**Parameters**

- **name** (string)  

**Returns** [Color](Color.md)


---

#### getBrightness

**getBrightness**(): number

**Returns** number


---

#### getHashCode

**getHashCode**(): number

**Returns** number


---

#### is

**is**(**type**: any): this is Color

**Parameters**

- **type** (any)  

**Returns** this is Color


---

#### is2

**is2**(**type**: any): void

**Parameters**

- **type** (any)  


---

#### over

**over**(**other**: [Color](Color.md)): [Color](Color.md)

**Parameters**

- **other** ([Color](Color.md))  

**Returns** [Color](Color.md)


---

#### toArgb

**toArgb**(): number

**Returns** number


---

#### toHtml

**toHtml**(): string

**Returns** string


---

#### toString

**toString**(): string

**Returns** string


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **alpha** | any |  |
| **alpha** | any |  |
| **alpha** | any |  |
| **blue** | any |  |
| **blue** | any |  |
| **blue** | any |  |
| **color** | any |  |
| **green** | any |  |
| **green** | any |  |
| **green** | any |  |
| **name** | any |  |
| **name** | any |  |
| **num4** | any |  |
| **num4** | any |  |
| **num5** | any |  |
| **num5** | any |  |
| **red** | any |  |
| **red** | any |  |
| **red** | any |  |
