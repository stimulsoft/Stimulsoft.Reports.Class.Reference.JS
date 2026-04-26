---
title: "StiJson Class"
---

## StiJson Class

**Namespace:** `Stimulsoft.Base`

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **count** | number |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **addPropertyBool** | void |  |
| **addPropertyDateTime** | void |  |
| **addPropertyEnum** | void |  |
| **addPropertyIdent** | void |  |
| **addPropertyJObject** | void |  |
| **addPropertyJObjectArray** | void |  |
| **addPropertyNumber** | void |  |
| **addPropertyNumberNoDefaultValue** | void |  |
| **addPropertyPoint** | void |  |
| **addPropertyString** | void |  |
| **addPropertyStringNullOrEmpty** | void |  |
| **addRawString** | void |  |
| **dateToJsonDate** `static` | string |  |
| **deserialize** | void |  |
| **jsonDateFormatToDate** `static` | [DateTime](../Stimulsoft_System/DateTime.md) |  |
| **properties** | [StiJson](StiJson.md)[] |  |
| **removeProperty** | void |  |
| **serialize** | string |  |

---

### Method Details

#### addPropertyBool

**addPropertyBool**(**propertyName**: string, **value**: boolean, **defaultValue**: any, **ignoreDefaultValues**: any): void

**Parameters**

- **propertyName** (string)  
- **value** (boolean)  
- **defaultValue** (any)  
- **ignoreDefaultValues** (any)  


---

#### addPropertyDateTime

**addPropertyDateTime**(**propertyName**: string, **value**: [DateTime](../Stimulsoft_System/DateTime.md)): void

**Parameters**

- **propertyName** (string)  
- **value** ([DateTime](../Stimulsoft_System/DateTime.md))  


---

#### addPropertyEnum

**addPropertyEnum**(**propertyName**: string, **enumType**: any, **value**: any, **defaultValue**: any): void

**Parameters**

- **propertyName** (string)  
- **enumType** (any)  
- **value** (any)  
- **defaultValue** (any)  


---

#### addPropertyIdent

**addPropertyIdent**(**propertyName**: string, **value**: string): void

**Parameters**

- **propertyName** (string)  
- **value** (string)  


---

#### addPropertyJObject

**addPropertyJObject**(**propertyName**: string, **value**: [StiJson](StiJson.md)): void

**Parameters**

- **propertyName** (string)  
- **value** ([StiJson](StiJson.md))  


---

#### addPropertyJObjectArray

**addPropertyJObjectArray**(**propertyName**: string, **values**: [StiJson](StiJson.md)[]): void

**Parameters**

- **propertyName** (string)  
- **values** ([StiJson](StiJson.md)[])  


---

#### addPropertyNumber

**addPropertyNumber**(**propertyName**: string, **value**: number, **defaultValue**: any): void

**Parameters**

- **propertyName** (string)  
- **value** (number)  
- **defaultValue** (any)  


---

#### addPropertyNumberNoDefaultValue

**addPropertyNumberNoDefaultValue**(**propertyName**: string, **value**: number): void

**Parameters**

- **propertyName** (string)  
- **value** (number)  


---

#### addPropertyPoint

**addPropertyPoint**(**propertyName**: string, **point**: [Point](../Stimulsoft_System_Drawing/Point.md)): void

**Parameters**

- **propertyName** (string)  
- **point** ([Point](../Stimulsoft_System_Drawing/Point.md))  


---

#### addPropertyString

**addPropertyString**(**propertyName**: string, **value**: string, **defaultValue**: string): void

**Parameters**

- **propertyName** (string)  
- **value** (string)  
- **defaultValue** (string)  


---

#### addPropertyStringNullOrEmpty

**addPropertyStringNullOrEmpty**(**propertyName**: string, **value**: string): void

**Parameters**

- **propertyName** (string)  
- **value** (string)  


---

#### addRawString

**addRawString**(**propertyName**: string, **value**: string): void

**Parameters**

- **propertyName** (string)  
- **value** (string)  


---

#### dateToJsonDate `static`

**dateToJsonDate**(**date**: [DateTime](../Stimulsoft_System/DateTime.md)): string

**Parameters**

- **date** ([DateTime](../Stimulsoft_System/DateTime.md))  

**Returns** string


---

#### deserialize

**deserialize**(**text**: any): void

**Parameters**

- **text** (any)  


---

#### jsonDateFormatToDate `static`

**jsonDateFormatToDate**(**jsonDate**: string): [DateTime](../Stimulsoft_System/DateTime.md)

**Parameters**

- **jsonDate** (string)  

**Returns** [DateTime](../Stimulsoft_System/DateTime.md)


---

#### properties

**properties**(): [StiJson](StiJson.md)[]

**Returns** [StiJson](StiJson.md)[]


---

#### removeProperty

**removeProperty**(**propertyName**: string): void

**Parameters**

- **propertyName** (string)  


---

#### serialize

**serialize**(**indent**: any): string

**Parameters**

- **indent** (any)  

**Returns** string


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **count** | any |  |
| **name** | string |  |
| **start** | any |  |
| **text** | any |  |
| **value** | any |  |
| **valueString** | any |  |
