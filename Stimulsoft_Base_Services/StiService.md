---
title: "StiService Class"
---

## StiService Class

**Namespace:** `Stimulsoft.Base.Services`

Describes an asbtract class that serves for services realization.

### Inheritance

Implements: [ICloneable](../Stimulsoft_System/ICloneable.md), [IAsIs](../Stimulsoft_System/IAsIs.md)  

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **properties** | [StiRepositoryItems](../Stimulsoft_Base/StiRepositoryItems.md) |  |
| **serviceCategory** | string | Gets a service category. |
| **serviceEnabled** | boolean | Gets or sets the value whether a service is enabled or not. |
| **serviceInfo** | string | Gets a service description. |
| **serviceName** | string | Gets a service name. |
| **serviceType** | [Stimulsoft.System.Type](../Stimulsoft_System/Type.md) | Gets a service type. |

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
| **meta** | [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[] |  |
| **saveToJsonObject** | [StiJson](../Stimulsoft_Base/StiJson.md) |  |

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

**loadFromJsonObject**(**jObject**: [StiJson](../Stimulsoft_Base/StiJson.md)): void

**Parameters**

- **jObject** ([StiJson](../Stimulsoft_Base/StiJson.md))  


---

#### loadFromXml

**loadFromXml**(**xmlNode**: [XmlNode](../Stimulsoft_System_Xml/XmlNode.md)): void

**Parameters**

- **xmlNode** ([XmlNode](../Stimulsoft_System_Xml/XmlNode.md))  


---

#### memberwiseClone

**memberwiseClone**(**base**: any): [StiService](StiService.md)

**Parameters**

- **base** (any)  

**Returns** [StiService](StiService.md)


---

#### meta

**meta**(): [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[]

**Returns** [StiMeta](../Stimulsoft_Base_Meta/StiMeta.md)[]


---

#### saveToJsonObject

**saveToJsonObject**(**mode**: [StiJsonSaveMode](../Stimulsoft_Base/StiJsonSaveMode.md)): [StiJson](../Stimulsoft_Base/StiJson.md)

**Parameters**

- **mode** ([StiJsonSaveMode](../Stimulsoft_Base/StiJsonSaveMode.md))  

**Returns** [StiJson](../Stimulsoft_Base/StiJson.md)

