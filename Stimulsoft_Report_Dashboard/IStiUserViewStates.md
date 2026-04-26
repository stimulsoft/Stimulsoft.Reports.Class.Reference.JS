---
title: "IStiUserViewStates Interface"
---

## IStiUserViewStates Interface

**Namespace:** `Stimulsoft.Report.Dashboard`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **loadFromJsonForViewState** | void |  |
| **saveToJsonForViewState** | [StiJson](../Stimulsoft_Base/StiJson.md) |  |
| **switchSelectedViewState** | void |  |

---

### Method Details

#### loadFromJsonForViewState

**loadFromJsonForViewState**(**jObject**: [StiJson](../Stimulsoft_Base/StiJson.md)): void

**Parameters**

- **jObject** ([StiJson](../Stimulsoft_Base/StiJson.md))  


---

#### saveToJsonForViewState

**saveToJsonForViewState**(): [StiJson](../Stimulsoft_Base/StiJson.md)

**Returns** [StiJson](../Stimulsoft_Base/StiJson.md)


---

#### switchSelectedViewState

**switchSelectedViewState**(**newKey**: string): void

**Parameters**

- **newKey** (string)  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **selectedViewStateKey** | string |  |
| **userViewStates** | StiUserViewState[] |  |
