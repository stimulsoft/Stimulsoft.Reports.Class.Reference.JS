---
title: "XmlTextEncoder Class"
---

## XmlTextEncoder Class

**Namespace:** `Stimulsoft.System.Xml`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([TextWriter](../Stimulsoft_System_IO/TextWriter.md) textWriter) |  |

**constructor**(**textWriter**: [TextWriter](../Stimulsoft_System_IO/TextWriter.md))

**Parameters**

- **textWriter** ([TextWriter](../Stimulsoft_System_IO/TextWriter.md))  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **attributeValue** | string |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **endAttribute** | void |  |
| **startAttribute** | void |  |
| **write** | void |  |
| **writeRawWithSurrogateChecking** | void |  |

---

### Method Details

#### endAttribute

**endAttribute**(): void


---

#### startAttribute

**startAttribute**(**cacheAttrValue**: boolean): void

**Parameters**

- **cacheAttrValue** (boolean)  


---

#### write

**write**(**text**: string): void

**Parameters**

- **text** (string)  


---

#### writeRawWithSurrogateChecking

**writeRawWithSurrogateChecking**(**text**: string): void

**Parameters**

- **text** (string)  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **quoteChar** | string |  |
