---
title: "XmlTextWriter Class"
---

## XmlTextWriter Class

**Namespace:** `Stimulsoft.System.Xml`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([Encoding](../Text/Encoding.md) encoding, [MemoryStream](../IO/MemoryStream.md) w) |  |

**constructor**(**encoding**: [Encoding](../Text/Encoding.md), **w**: [MemoryStream](../IO/MemoryStream.md))

**Parameters**

- **encoding** ([Encoding](../Text/Encoding.md))  
- **w** ([MemoryStream](../IO/MemoryStream.md))  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **close** | void |  |
| **constructor_** | void |  |
| **flush** | void |  |
| **writeAttributeString** | void |  |
| **writeDocType** | void |  |
| **writeElementString** | void |  |
| **writeElementString2** | void |  |
| **writeElementString3** | void |  |
| **writeEndAttribute** | void |  |
| **writeEndDocument** | void |  |
| **writeEndElement** | void |  |
| **writeFullEndElement** | void |  |
| **writeName** | void |  |
| **writeQualifiedName** | void |  |
| **writeRaw** | void |  |
| **writeStartAttribute** | void |  |
| **writeStartDocument** | void |  |
| **writeStartElement** | void |  |
| **writeString** | void |  |

---

### Method Details

#### close

**close**(): void


---

#### constructor_

**constructor_**(**encoding**: [Encoding](../Text/Encoding.md), **w**: [MemoryStream](../IO/MemoryStream.md)): void

**Parameters**

- **encoding** ([Encoding](../Text/Encoding.md))  
- **w** ([MemoryStream](../IO/MemoryStream.md))  


---

#### flush

**flush**(): void


---

#### writeAttributeString

**writeAttributeString**(**localName**: string, **value**: string): void

**Parameters**

- **localName** (string)  
- **value** (string)  


---

#### writeDocType

**writeDocType**(**name**: string, **pubid**: string, **sysid**: string, **subset**: string): void

**Parameters**

- **name** (string)  
- **pubid** (string)  
- **sysid** (string)  
- **subset** (string)  


---

#### writeElementString

**writeElementString**(**localName**: string, **value**: string): void

**Parameters**

- **localName** (string)  
- **value** (string)  


---

#### writeElementString2

**writeElementString2**(**localName**: string, **ns**: string, **value**: string): void

**Parameters**

- **localName** (string)  
- **ns** (string)  
- **value** (string)  


---

#### writeElementString3

**writeElementString3**(**prefix**: string, **localName**: string, **ns**: string, **value**: string): void

**Parameters**

- **prefix** (string)  
- **localName** (string)  
- **ns** (string)  
- **value** (string)  


---

#### writeEndAttribute

**writeEndAttribute**(): void


---

#### writeEndDocument

**writeEndDocument**(): void


---

#### writeEndElement

**writeEndElement**(): void


---

#### writeFullEndElement

**writeFullEndElement**(): void


---

#### writeName

**writeName**(**name**: string): void

**Parameters**

- **name** (string)  


---

#### writeQualifiedName

**writeQualifiedName**(**localName**: string, **ns**: string): void

**Parameters**

- **localName** (string)  
- **ns** (string)  


---

#### writeRaw

**writeRaw**(**data**: string): void

**Parameters**

- **data** (string)  


---

#### writeStartAttribute

**writeStartAttribute**(**prefix**: string, **localName**: string, **ns**: string): void

**Parameters**

- **prefix** (string)  
- **localName** (string)  
- **ns** (string)  


---

#### writeStartDocument

**writeStartDocument**(**standalone**: boolean): void

**Parameters**

- **standalone** (boolean)  


---

#### writeStartElement

**writeStartElement**(**localName**: string): void

**Parameters**

- **localName** (string)  


---

#### writeString

**writeString**(**text**: string): void

**Parameters**

- **text** (string)  

