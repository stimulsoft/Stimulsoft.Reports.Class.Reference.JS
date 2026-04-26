---
title: "StiChartUserViewStatesHelper Class"
---

## StiChartUserViewStatesHelper Class

**Namespace:** `Stimulsoft.Dashboard.Components.Chart`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clearVisualState** `static` | void |  |
| **loadFromJsonObject** `static` | void |  |
| **loadVisualState** `static` | void |  |
| **saveToJsonObject** `static` | [StiJson](../Stimulsoft_Base/StiJson.md) |  |
| **saveVisualState** `static` | void |  |
| **switchSelectedViewState** `static` | void |  |

---

### Method Details

#### clearVisualState `static`

**clearVisualState**(**chart**: StiChartElement): void

**Parameters**

- **chart** (StiChartElement)  


---

#### loadFromJsonObject `static`

**loadFromJsonObject**(**chart**: StiChartElement, **jObject**: [StiJson](../Stimulsoft_Base/StiJson.md)): void

**Parameters**

- **chart** (StiChartElement)  
- **jObject** ([StiJson](../Stimulsoft_Base/StiJson.md))  


---

#### loadVisualState `static`

**loadVisualState**(**chart**: StiChartElement, **key**: string): void

**Parameters**

- **chart** (StiChartElement)  
- **key** (string)  


---

#### saveToJsonObject `static`

**saveToJsonObject**(**chart**: StiChartElement): [StiJson](../Stimulsoft_Base/StiJson.md)

**Parameters**

- **chart** (StiChartElement)  

**Returns** [StiJson](../Stimulsoft_Base/StiJson.md)


---

#### saveVisualState `static`

**saveVisualState**(**chart**: StiChartElement, **key**: string): void

**Parameters**

- **chart** (StiChartElement)  
- **key** (string)  


---

#### switchSelectedViewState `static`

**switchSelectedViewState**(**chart**: StiChartElement, **newKey**: string): void

**Parameters**

- **chart** (StiChartElement)  
- **newKey** (string)  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **oldKey** | any |  |
