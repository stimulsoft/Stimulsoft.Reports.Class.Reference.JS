---
title: "StiGS1ApplicationIdentifiers Class"
---

## StiGS1ApplicationIdentifiers Class

**Namespace:** `Stimulsoft.Report.BarCodes`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getApplicationIdentifierItemByCode** `static` | [StiGS1ApplicationIdentifierItem](StiGS1ApplicationIdentifierItem.md) |  |
| **parseCode** `static` | string |  |

---

### Method Details

#### getApplicationIdentifierItemByCode `static`

**getApplicationIdentifierItemByCode**(**code**: string): [StiGS1ApplicationIdentifierItem](StiGS1ApplicationIdentifierItem.md)

**Parameters**

- **code** (string)  

**Returns** [StiGS1ApplicationIdentifierItem](StiGS1ApplicationIdentifierItem.md)


---

#### parseCode `static`

**parseCode**(**code**: string, **outputCode**: [StringBuilder](../Stimulsoft_System_Text/StringBuilder.md), **outputText**: [StringBuilder](../Stimulsoft_System_Text/StringBuilder.md), **fnc1**: string, **addLeadingFnc1**: boolean): string

**Parameters**

- **code** (string)  
- **outputCode** ([StringBuilder](../Stimulsoft_System_Text/StringBuilder.md))  
- **outputText** ([StringBuilder](../Stimulsoft_System_Text/StringBuilder.md))  
- **fnc1** (string)  
- **addLeadingFnc1** (boolean)  

**Returns** string


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **checkDigit** | any |  |
| **value** | any |  |
| **value** | any |  |
