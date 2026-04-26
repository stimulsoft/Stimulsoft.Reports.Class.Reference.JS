---
title: "StiHtmlTextWriter Class"
---

## StiHtmlTextWriter Class

**Namespace:** `Stimulsoft.Report.Export`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([TextWriter](../Stimulsoft_System_IO/TextWriter.md) baseStream) |  |

**constructor**(**baseStream**: [TextWriter](../Stimulsoft_System_IO/TextWriter.md))

**Parameters**

- **baseStream** ([TextWriter](../Stimulsoft_System_IO/TextWriter.md))  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **flush** | void |  |
| **getStream** | [TextWriter](../Stimulsoft_System_IO/TextWriter.md) |  |
| **write** | void |  |
| **writeAttribute** | void |  |
| **writeBeginTag** | void |  |
| **writeEndTag** | void |  |
| **writeFullBeginTag** | void |  |
| **writeFullEndTag** | void |  |
| **writeLine** | void |  |
| **writeStyleAttribute** | void |  |

---

### Method Details

#### flush

**flush**(): void


---

#### getStream

**getStream**(): [TextWriter](../Stimulsoft_System_IO/TextWriter.md)

**Returns** [TextWriter](../Stimulsoft_System_IO/TextWriter.md)


---

#### write

**write**(**st**: string): void

**Parameters**

- **st** (string)  


---

#### writeAttribute

**writeAttribute**(**attr**: string, **value**: string): void

**Parameters**

- **attr** (string)  
- **value** (string)  


---

#### writeBeginTag

**writeBeginTag**(**st**: string): void

**Parameters**

- **st** (string)  


---

#### writeEndTag

**writeEndTag**(**st**: string): void

**Parameters**

- **st** (string)  


---

#### writeFullBeginTag

**writeFullBeginTag**(**st**: string): void

**Parameters**

- **st** (string)  


---

#### writeFullEndTag

**writeFullEndTag**(**st**: string): void

**Parameters**

- **st** (string)  


---

#### writeLine

**writeLine**(**st**: string): void

**Parameters**

- **st** (string)  


---

#### writeStyleAttribute

**writeStyleAttribute**(**attr**: string, **value**: string): void

**Parameters**

- **attr** (string)  
- **value** (string)  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **indent** | any |  |
