---
title: "StiValidationResult Class"
---

## StiValidationResult Class

**Namespace:** `Stimulsoft.Report.Dictionary`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **fail** `static` | [StiValidationResult](StiValidationResult.md) |  |
| **success** `static` | [StiValidationResult](StiValidationResult.md) |  |
| **warning** `static` | [StiValidationResult](StiValidationResult.md) |  |

---

### Method Details

#### fail `static`

**fail**(**message**: string, **level**: [StiValidationLevel](StiValidationLevel.md)): [StiValidationResult](StiValidationResult.md)

**Parameters**

- **message** (string)  
- **level** ([StiValidationLevel](StiValidationLevel.md))  

**Returns** [StiValidationResult](StiValidationResult.md)


---

#### success `static`

**success**(): [StiValidationResult](StiValidationResult.md)

**Returns** [StiValidationResult](StiValidationResult.md)


---

#### warning `static`

**warning**(**message**: string): [StiValidationResult](StiValidationResult.md)

**Parameters**

- **message** (string)  

**Returns** [StiValidationResult](StiValidationResult.md)


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **isValid** | any |  |
| **level** | [StiValidationLevel](StiValidationLevel.md) |  |
| **message** | any |  |
| **propertyName** | any |  |
