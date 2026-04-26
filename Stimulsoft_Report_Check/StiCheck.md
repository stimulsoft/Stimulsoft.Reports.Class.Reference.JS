---
title: "StiCheck Class"
---

## StiCheck Class

**Namespace:** `Stimulsoft.Report.Check`

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **elementName** | string |  |
| **enabled** | boolean |  |
| **longMessage** | string |  |
| **previewVisible** | boolean |  |
| **shortMessage** | string |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **createPreviewImage** | void |  |
| **processCheck** | any |  |

---

### Method Details

#### createPreviewImage

**createPreviewImage**(**refElementImage**: any, **refHighlightedElementImage**: { ref: string }): void

**Parameters**

- **refElementImage** (any)  
- **refHighlightedElementImage** ({ ref: string })  


---

#### processCheck

**processCheck**(**report**: [StiReport](../Stimulsoft_Report/StiReport.md), **obj**: any): any

**Parameters**

- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **obj** (any)  

**Returns** any


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **actions** | [StiAction](StiAction.md)[] |  |
| **defaultStateEnabled** | any |  |
| **element** | any |  |
| **objectType** | [StiCheckObjectType](StiCheckObjectType.md) |  |
| **status** | [StiCheckStatus](StiCheckStatus.md) |  |
