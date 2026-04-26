---
title: "Encoding Class"
---

## Encoding Class

**Namespace:** `Stimulsoft.System.Text`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(string name, number codepage, string webName) |  |

**constructor**(**name**: string, **codepage**: number, **webName**: string)

**Parameters**

- **name** (string)  
- **codepage** (number)  
- **webName** (string)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getBytes** | number[] |  |
| **getEncoding** `static` | [Encoding](Encoding.md) |  |
| **getString** | string |  |
| **getSupportedEncodings** `static` |  |  |

---

### Method Details

#### getBytes

**getBytes**(**str**: string): number[]

**Parameters**

- **str** (string)  

**Returns** number[]


---

#### getEncoding `static`

**getEncoding**(**codepage**: number): [Encoding](Encoding.md)

**Parameters**

- **codepage** (number)  

**Returns** [Encoding](Encoding.md)


---

#### getString

**getString**(**bytes**: number[] \| Uint8Array): string

**Parameters**

- **bytes** (number[] \| Uint8Array)  

**Returns** string


---

#### getSupportedEncodings `static`

**getSupportedEncodings**(): void


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **codepage** | number |  |
| **encodingName** | string |  |
| **str** | any |  |
| **webName** | any |  |
