---
title: "CharacterSetECI Class"
---

## CharacterSetECI Class

**Namespace:** `Stimulsoft.Report.BarCodes`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(number value, string encodingName, number codepage) |  |

**constructor**(**value**: number, **encodingName**: string, **codepage**: number)

**Parameters**

- **value** (number)  
- **encodingName** (string)  
- **codepage** (number)  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **NAME_TO_ECI** `static` | [Hashtable](../../Stimulsoft_System/Collections/Hashtable.md) |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getCharacterSetECIByCodepage** `static` | [CharacterSetECI](CharacterSetECI.md) |  |
| **getCharacterSetECIByName** `static` | [CharacterSetECI](CharacterSetECI.md) |  |
| **getCodepage** | number |  |
| **getEncodingCodePageByNumber** `static` | number |  |
| **getEncodingName** | string |  |
| **getValue** | number |  |

---

### Method Details

#### getCharacterSetECIByCodepage `static`

**getCharacterSetECIByCodepage**(**codepage**: number): [CharacterSetECI](CharacterSetECI.md)

**Parameters**

- **codepage** (number)  

**Returns** [CharacterSetECI](CharacterSetECI.md)


---

#### getCharacterSetECIByName `static`

**getCharacterSetECIByName**(**name**: string): [CharacterSetECI](CharacterSetECI.md)

**Parameters**

- **name** (string)  

**Returns** [CharacterSetECI](CharacterSetECI.md)


---

#### getCodepage

**getCodepage**(): number

**Returns** number


---

#### getEncodingCodePageByNumber `static`

**getEncodingCodePageByNumber**(**encodingNumber**: number, **defaultEncoding**: number): number

**Parameters**

- **encodingNumber** (number)  
- **defaultEncoding** (number)  

**Returns** number


---

#### getEncodingName

**getEncodingName**(): string

**Returns** string


---

#### getValue

**getValue**(): number

**Returns** number

