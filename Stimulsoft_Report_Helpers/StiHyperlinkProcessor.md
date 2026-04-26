---
title: "StiHyperlinkProcessor Class"
---

## StiHyperlinkProcessor Class

**Namespace:** `Stimulsoft.Report.Helpers`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **createFileName** `static` | string |  |
| **createResourceName** `static` | string |  |
| **createVariableName** `static` | string |  |
| **getBytes** `static` | number[] |  |
| **getDataColumnNameFromHyperlink** `static` | string |  |
| **getFileNameFromHyperlink** `static` | string |  |
| **getImage** `static` | [Image](../Stimulsoft_System_Drawing/Image.md) |  |
| **getRealDataColumnFromHyperlink** `static` | string | Returns real-existing column name from hyperlink. Otherwise its returns null. |
| **getResource** `static` | StiResource |  |
| **getResourceByHyperlink** `static` | StiResource |  |
| **getResourceNameFromHyperlink** `static` | string |  |
| **getServerNameFromHyperlink** `static` | string |  |
| **getString** `static` | string |  |
| **getVariableNameFromHyperlink** `static` | string |  |
| **hyperlinkToString** `static` | string |  |
| **isDataColumnHyperlink** `static` | boolean |  |
| **isFileHyperlink** `static` | boolean |  |
| **isResourceHyperlink** `static` | boolean |  |
| **isServerHyperlink** `static` | boolean |  |
| **isVariableHyperlink** `static` | boolean |  |

---

### Method Details

#### createFileName `static`

**createFileName**(**path**: string): string

**Parameters**

- **path** (string)  

**Returns** string


---

#### createResourceName `static`

**createResourceName**(**name**: string): string

**Parameters**

- **name** (string)  

**Returns** string


---

#### createVariableName `static`

**createVariableName**(**name**: string): string

**Parameters**

- **name** (string)  

**Returns** string


---

#### getBytes `static`

**getBytes**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **hyperlink**: string): number[]

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **hyperlink** (string)  

**Returns** number[]


---

#### getDataColumnNameFromHyperlink `static`

**getDataColumnNameFromHyperlink**(**hyperlink**: string): string

**Parameters**

- **hyperlink** (string)  

**Returns** string


---

#### getFileNameFromHyperlink `static`

**getFileNameFromHyperlink**(**hyperlink**: string): string

**Parameters**

- **hyperlink** (string)  

**Returns** string


---

#### getImage `static`

**getImage**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **hyperlink**: string): [Image](../Stimulsoft_System_Drawing/Image.md)

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **hyperlink** (string)  

**Returns** [Image](../Stimulsoft_System_Drawing/Image.md)


---

#### getRealDataColumnFromHyperlink `static`

**getRealDataColumnFromHyperlink**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **hyperlink**: string): string

Returns real-existing column name from hyperlink. Otherwise its returns null.

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **hyperlink** (string)  

**Returns** string


---

#### getResource `static`

**getResource**(**resources**: StiReport \| StiResourcesCollection, **resourceName**: string): StiResource

**Parameters**

- **resources** (StiReport \| StiResourcesCollection)  
- **resourceName** (string)  

**Returns** StiResource


---

#### getResourceByHyperlink `static`

**getResourceByHyperlink**(**resources**: StiReport \| StiResourcesCollection, **hyperlink**: string): StiResource

**Parameters**

- **resources** (StiReport \| StiResourcesCollection)  
- **hyperlink** (string)  

**Returns** StiResource


---

#### getResourceNameFromHyperlink `static`

**getResourceNameFromHyperlink**(**hyperlink**: string): string

**Parameters**

- **hyperlink** (string)  

**Returns** string


---

#### getServerNameFromHyperlink `static`

**getServerNameFromHyperlink**(**hyperlink**: string): string

**Parameters**

- **hyperlink** (string)  

**Returns** string


---

#### getString `static`

**getString**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **hyperlink**: string): string

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **hyperlink** (string)  

**Returns** string


---

#### getVariableNameFromHyperlink `static`

**getVariableNameFromHyperlink**(**hyperlink**: string): string

**Parameters**

- **hyperlink** (string)  

**Returns** string


---

#### hyperlinkToString `static`

**hyperlinkToString**(**hyperlink**: string): string

**Parameters**

- **hyperlink** (string)  

**Returns** string


---

#### isDataColumnHyperlink `static`

**isDataColumnHyperlink**(**hyperlink**: string): boolean

**Parameters**

- **hyperlink** (string)  

**Returns** boolean


---

#### isFileHyperlink `static`

**isFileHyperlink**(**hyperlink**: string): boolean

**Parameters**

- **hyperlink** (string)  

**Returns** boolean


---

#### isResourceHyperlink `static`

**isResourceHyperlink**(**hyperlink**: string): boolean

**Parameters**

- **hyperlink** (string)  

**Returns** boolean


---

#### isServerHyperlink `static`

**isServerHyperlink**(**hyperlink**: string): boolean

**Parameters**

- **hyperlink** (string)  

**Returns** boolean


---

#### isVariableHyperlink `static`

**isVariableHyperlink**(**hyperlink**: string): boolean

**Parameters**

- **hyperlink** (string)  

**Returns** boolean


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **resourceName** | any |  |
| **resources** | any |  |
| **variableName** | any |  |
