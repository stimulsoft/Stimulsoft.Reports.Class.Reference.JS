---
title: "StiRuntimeVariables Class"
---

## StiRuntimeVariables Class

**Namespace:** `Stimulsoft.Report`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([StiReport](StiReport.md) report) |  |

**constructor**(**report**: [StiReport](StiReport.md))

**Parameters**

- **report** ([StiReport](StiReport.md))  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **currentPrintPage** | number |  |
| **pageIndex** | number |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | [StiRuntimeVariables](StiRuntimeVariables.md) |  |
| **setVariables** | void |  |

---

### Method Details

#### clone

**clone**(): [StiRuntimeVariables](StiRuntimeVariables.md)

**Returns** [StiRuntimeVariables](StiRuntimeVariables.md)


---

#### setVariables

**setVariables**(**report**: [StiReport](StiReport.md)): void

**Parameters**

- **report** ([StiReport](StiReport.md))  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **column** | number |  |
| **dataSourcesPosition** | [Hashtable](../Stimulsoft_System_Collections/Hashtable.md) |  |
| **line** | number |  |
| **lineThrough** | number |  |
| **page** | StiPage |  |
| **textBox** | StiSimpleText |  |
