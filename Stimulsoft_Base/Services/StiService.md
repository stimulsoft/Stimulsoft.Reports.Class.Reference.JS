---
title: "StiService Class"
---

## StiService Class

**Namespace:** `Stimulsoft.Base.Services`

Describes an asbtract class that serves for services realization.

### Inheritance

Implements: [ICloneable](../../Stimulsoft_System/ICloneable.md), [IAsIs](../../Stimulsoft_System/IAsIs.md)  

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **properties** | [StiRepositoryItems](../StiRepositoryItems.md) |  |
| **serviceCategory** | string | Gets a service category. |
| **serviceEnabled** | boolean | Gets or sets the value whether a service is enabled or not. |
| **serviceInfo** | string | Gets a service description. |
| **serviceName** | string | Gets a service name. |
| **serviceType** | [Stimulsoft.System.Type](../../Stimulsoft_System/Type.md) | Gets a service type. |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | any | Creates a new object that is a copy of the current instance. |
| **implements** | any[] |  |
| **isPropertiesInitializedProtected** | boolean | Internal use only, for LoadDocument optimization. |
| **isPropertyPresent** | boolean |  |
| **loadFromJsonObject** | void |  |
| **loadFromXml** | void |  |
| **memberwiseClone** | [StiService](StiService.md) |  |
| **meta** | [StiMeta](../Meta/StiMeta.md)[] |  |
| **saveToJsonObject** | [StiJson](../StiJson.md) |  |

---

### Method Details

#### clone

**clone**(**cloneProperties**: any, **cloneComponents**: any, **base**: any): any

Creates a new object that is a copy of the current instance.

**Parameters**

- **cloneProperties** (any)  
- **cloneComponents** (any)  
- **base** (any)  

**Returns** any


---

#### implements

**implements**(): any[]

**Returns** any[]


---

#### isPropertiesInitializedProtected

**isPropertiesInitializedProtected**(): boolean

Internal use only, for LoadDocument optimization.

**Returns** boolean


---

#### isPropertyPresent

**isPropertyPresent**(**key**: any): boolean

**Parameters**

- **key** (any)  

**Returns** boolean


---

#### loadFromJsonObject

**loadFromJsonObject**(**jObject**: [StiJson](../StiJson.md)): void

**Parameters**

- **jObject** ([StiJson](../StiJson.md))  


---

#### loadFromXml

**loadFromXml**(**xmlNode**: [XmlNode](../../Stimulsoft_System/Xml/XmlNode.md)): void

**Parameters**

- **xmlNode** ([XmlNode](../../Stimulsoft_System/Xml/XmlNode.md))  


---

#### memberwiseClone

**memberwiseClone**(**base**: any): [StiService](StiService.md)

**Parameters**

- **base** (any)  

**Returns** [StiService](StiService.md)


---

#### meta

**meta**(): [StiMeta](../Meta/StiMeta.md)[]

**Returns** [StiMeta](../Meta/StiMeta.md)[]


---

#### saveToJsonObject

**saveToJsonObject**(**mode**: [StiJsonSaveMode](../StiJsonSaveMode.md)): [StiJson](../StiJson.md)

**Parameters**

- **mode** ([StiJsonSaveMode](../StiJsonSaveMode.md))  

**Returns** [StiJson](../StiJson.md)

