---
title: "StiCID Class"
---

## StiCID Class

**Namespace:** `Stimulsoft.Base`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(string machineName, string machineAddress, string machineUserName, string machineGuid) |  |

**constructor**(**machineName**: string, **machineAddress**: string, **machineUserName**: string, **machineGuid**: string)

**Parameters**

- **machineName** (string)  
- **machineAddress** (string)  
- **machineUserName** (string)  
- **machineGuid** (string)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getDefault** `static` | string |  |
| **isCID** `static` | boolean |  |
| **loadFromJsonObject** | void |  |
| **loadFromString** | void |  |
| **saveToJsonObject** | [StiJson](StiJson.md) |  |
| **saveToString** | string |  |

---

### Method Details

#### getDefault `static`

**getDefault**(): string

**Returns** string


---

#### isCID `static`

**isCID**(**cid**: string): boolean

**Parameters**

- **cid** (string)  

**Returns** boolean


---

#### loadFromJsonObject

**loadFromJsonObject**(**jObject**: [StiJson](StiJson.md)): void

**Parameters**

- **jObject** ([StiJson](StiJson.md))  


---

#### loadFromString

**loadFromString**(**value**: string): void

**Parameters**

- **value** (string)  


---

#### saveToJsonObject

**saveToJsonObject**(): [StiJson](StiJson.md)

**Returns** [StiJson](StiJson.md)


---

#### saveToString

**saveToString**(): string

**Returns** string

