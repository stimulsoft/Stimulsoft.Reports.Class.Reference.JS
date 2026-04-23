---
title: "RSAKey Class"
---

## RSAKey Class

**Namespace:** `Stimulsoft.System.Crypt`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**() |  |

**constructor**()


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **decrypt** | string |  |
| **doPublic** | [BigInteger](BigInteger.md) |  |
| **encrypt** | string |  |
| **generate** | void |  |
| **setPrivate** | void |  |
| **setPrivateEx** | void |  |
| **setPublic** | void |  |
| **verifyString** | void |  |

---

### Method Details

#### decrypt

**decrypt**(**ctext**: string): string

**Parameters**

- **ctext** (string)  

**Returns** string


---

#### doPublic

**doPublic**(**x**: [BigInteger](BigInteger.md)): [BigInteger](BigInteger.md)

**Parameters**

- **x** ([BigInteger](BigInteger.md))  

**Returns** [BigInteger](BigInteger.md)


---

#### encrypt

**encrypt**(**text**: string): string

**Parameters**

- **text** (string)  

**Returns** string


---

#### generate

**generate**(**B**: number, **E**: string): void

**Parameters**

- **B** (number)  
- **E** (string)  


---

#### setPrivate

**setPrivate**(**N**: string, **E**: string, **D**: string): void

**Parameters**

- **N** (string)  
- **E** (string)  
- **D** (string)  


---

#### setPrivateEx

**setPrivateEx**(**N**: string, **E**: string, **D**: string, **P**: string, **Q**: string, **DP**: string, **DQ**: string, **C**: string): void

**Parameters**

- **N** (string)  
- **E** (string)  
- **D** (string)  
- **P** (string)  
- **Q** (string)  
- **DP** (string)  
- **DQ** (string)  
- **C** (string)  


---

#### setPublic

**setPublic**(**N**: string, **E**: string): void

**Parameters**

- **N** (string)  
- **E** (string)  


---

#### verifyString

**verifyString**(**message**: string, **signature**: string): void

**Parameters**

- **message** (string)  
- **signature** (string)  

