---
title: "XmlNode Class"
---

## XmlNode Class

**Namespace:** `Stimulsoft.System.Xml`

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **firstChild** | [XmlNode](XmlNode.md) |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getAttribute** | string |  |
| **getNodeByName** | [XmlNode](XmlNode.md) |  |
| **getNodesByName** | [XmlNode](XmlNode.md)[] |  |
| **item** | [XmlNode](XmlNode.md) |  |
| **setParentNode** | void |  |

---

### Method Details

#### getAttribute

**getAttribute**(**name**: string): string

**Parameters**

- **name** (string)  

**Returns** string


---

#### getNodeByName

**getNodeByName**(**name**: string): [XmlNode](XmlNode.md)

**Parameters**

- **name** (string)  

**Returns** [XmlNode](XmlNode.md)


---

#### getNodesByName

**getNodesByName**(**name**: string): [XmlNode](XmlNode.md)[]

**Parameters**

- **name** (string)  

**Returns** [XmlNode](XmlNode.md)[]


---

#### item

**item**(**index**: number): [XmlNode](XmlNode.md)

**Parameters**

- **index** (number)  

**Returns** [XmlNode](XmlNode.md)


---

#### setParentNode

**setParentNode**(**node**: [XmlNode](XmlNode.md)): void

**Parameters**

- **node** ([XmlNode](XmlNode.md))  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **attributes** | any |  |
| **childNodes** | [XmlNode](XmlNode.md)[] |  |
| **localName** | any |  |
| **nodeName** | any |  |
| **nodeType** | [XmlNodeType](XmlNodeType.md) |  |
| **parentNode** | [XmlNode](XmlNode.md) |  |
| **textContent** | any |  |
