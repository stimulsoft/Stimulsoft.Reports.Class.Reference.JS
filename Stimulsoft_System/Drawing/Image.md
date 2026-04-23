---
title: "Image Class"
---

## Image Class

**Namespace:** `Stimulsoft.System.Drawing`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(number width, number height) |  |

**constructor**(**width**: number, **height**: number)

**Parameters**

- **width** (number)  
- **height** (number)  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **base64** | string |  |
| **bytes** | number[] |  |
| **height** | number |  |
| **horizontalResolution** | number |  |
| **svg** | string |  |
| **verticalResolution** | number |  |
| **width** | number |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | [Image](Image.md) |  |
| **dispose** | void |  |
| **fromBase64** `static` | [Image](Image.md) |  |
| **fromBytes** `static` | [Image](Image.md) |  |
| **fromFile** `static` | [Image](Image.md) |  |
| **reject** *(+1 overloads)* | void |  |
| **resolve** | void |  |
| **tryConvertSync** | boolean |  |

---

### Method Details

#### clone

**clone**(): [Image](Image.md)

**Returns** [Image](Image.md)


---

#### dispose

**dispose**(): void


---

#### fromBase64 `static`

**fromBase64**(**base64**: string): [Image](Image.md)

**Parameters**

- **base64** (string)  

**Returns** [Image](Image.md)


---

#### fromBytes `static`

**fromBytes**(**bytes**: number[]): [Image](Image.md)

**Parameters**

- **bytes** (number[])  

**Returns** [Image](Image.md)


---

#### fromFile `static`

**fromFile**(**path**: string, **headers**: [Header](../Header.md)[]): [Image](Image.md)

**Parameters**

- **path** (string)  
- **headers** ([Header](../Header.md)[])  

**Returns** [Image](Image.md)


---

#### reject

**reject**(): void

---

**reject**(): void


---

#### resolve

**resolve**(): void


---

#### tryConvertSync

**tryConvertSync**(**imageFormat**: [ImageFormat](../../Stimulsoft_Report/ImageFormat.md)): boolean

**Parameters**

- **imageFormat** ([ImageFormat](../../Stimulsoft_Report/ImageFormat.md))  

**Returns** boolean

