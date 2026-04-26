---
title: "StiExportUtils Class"
---

## StiExportUtils Class

**Namespace:** `Stimulsoft.Report.Export`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **checkBoxToTextBox** `static` | StiComponent |  |
| **checkPassive** `static` | void |  |
| **convertDigitsToArabic** `static` | string |  |
| **getAdditionalData2** `static` | [Image](../Stimulsoft_System_Drawing/Image.md) |  |
| **getNegativePattern** `static` | string |  |
| **getPositivePattern** `static` | string |  |
| **getReportVersion** `static` | string |  |
| **makePdfDeflateStream** `static` | [Stimulsoft.System.IO.MemoryStream](../Stimulsoft_System_IO/MemoryStream.md) |  |
| **saveComponentToString** `static` | string |  |
| **splitString** `static` | string[] |  |
| **stringToUrl** `static` | string |  |
| **toHex** `static` | string |  |
| **trimEndWhiteSpace** `static` | string |  |
| **trimEndWhiteSpace2** `static` | string |  |

---

### Method Details

#### checkBoxToTextBox `static`

**checkBoxToTextBox**(**component**: StiComponent): StiComponent

**Parameters**

- **component** (StiComponent)  

**Returns** StiComponent


---

#### checkPassive `static`

**checkPassive**(**pages**: StiPagesCollection): void

**Parameters**

- **pages** (StiPagesCollection)  


---

#### convertDigitsToArabic `static`

**convertDigitsToArabic**(**inputString**: string, **digitsType**: [StiArabicDigitsType](../Stimulsoft_Report/StiArabicDigitsType.md)): string

**Parameters**

- **inputString** (string)  
- **digitsType** ([StiArabicDigitsType](../Stimulsoft_Report/StiArabicDigitsType.md))  

**Returns** string


---

#### getAdditionalData2 `static`

**getAdditionalData2**(**opacity**: number): [Image](../Stimulsoft_System_Drawing/Image.md)

**Parameters**

- **opacity** (number)  

**Returns** [Image](../Stimulsoft_System_Drawing/Image.md)


---

#### getNegativePattern `static`

**getNegativePattern**(**patternIndex**: number): string

**Parameters**

- **patternIndex** (number)  

**Returns** string


---

#### getPositivePattern `static`

**getPositivePattern**(**patternIndex**: number): string

**Parameters**

- **patternIndex** (number)  

**Returns** string


---

#### getReportVersion `static`

**getReportVersion**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md)): string

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  

**Returns** string


---

#### makePdfDeflateStream `static`

**makePdfDeflateStream**(**data**: Uint8Array \| number[] \| string): [Stimulsoft.System.IO.MemoryStream](../Stimulsoft_System_IO/MemoryStream.md)

**Parameters**

- **data** (Uint8Array \| number[] \| string)  

**Returns** [Stimulsoft.System.IO.MemoryStream](../Stimulsoft_System_IO/MemoryStream.md)


---

#### saveComponentToString `static`

**saveComponentToString**(**component**: StiComponent, **imageFormat**: [ImageFormat](../Stimulsoft_Report/ImageFormat.md), **imageQuality**: any, **imageResolution**: any): string

**Parameters**

- **component** (StiComponent)  
- **imageFormat** ([ImageFormat](../Stimulsoft_Report/ImageFormat.md))  
- **imageQuality** (any)  
- **imageResolution** (any)  

**Returns** string


---

#### splitString `static`

**splitString**(**inputString**: string, **removeControl**: boolean): string[]

**Parameters**

- **inputString** (string)  
- **removeControl** (boolean)  

**Returns** string[]


---

#### stringToUrl `static`

**stringToUrl**(**input**: string): string

**Parameters**

- **input** (string)  

**Returns** string


---

#### toHex `static`

**toHex**(**num**: number): string

**Parameters**

- **num** (number)  

**Returns** string


---

#### trimEndWhiteSpace `static`

**trimEndWhiteSpace**(**inputString**: string): string

**Parameters**

- **inputString** (string)  

**Returns** string


---

#### trimEndWhiteSpace2 `static`

**trimEndWhiteSpace2**(**inputString**: string, **removeControl**: boolean): string

**Parameters**

- **inputString** (string)  
- **removeControl** (boolean)  

**Returns** string


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **checkBoxValue** | any |  |
| **isDashboards** | any |  |
| **outputString** | any |  |
| **outputString** | any |  |
| **selectedFontFamily** | any |  |
| **selectedFontFamily** | any |  |
| **selectedFontFamily** | any |  |
| **selectedFontFamily** | any |  |
| **selectedFontFamily** | any |  |
| **selectedFontFamily** | any |  |
| **selectedFontFamily** | any |  |
| **selectedFontFamily** | any |  |
| **selectedFontFamily** | any |  |
| **st** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
| **value** | any |  |
