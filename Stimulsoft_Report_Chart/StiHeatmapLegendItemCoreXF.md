---
title: "StiHeatmapLegendItemCoreXF Class"
---

## StiHeatmapLegendItemCoreXF Class

**Namespace:** `Stimulsoft.Report.Chart`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(string text, IStiSeries series, [Color](../Stimulsoft_System_Drawing/Color.md) color) |  |

**constructor**(**text**: string, **series**: IStiSeries, **color**: [Color](../Stimulsoft_System_Drawing/Color.md))

**Parameters**

- **text** (string)  
- **series** (IStiSeries)  
- **color** ([Color](../Stimulsoft_System_Drawing/Color.md))  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getText** | string |  |
| **measureString** | [Size](../Stimulsoft_System_Drawing/Size.md) |  |

---

### Method Details

#### getText

**getText**(**context**: [StiContext](../Stimulsoft_Base_Context/StiContext.md), **font**: StiFontGeom): string

**Parameters**

- **context** ([StiContext](../Stimulsoft_Base_Context/StiContext.md))  
- **font** (StiFontGeom)  

**Returns** string


---

#### measureString

**measureString**(**context**: [StiContext](../Stimulsoft_Base_Context/StiContext.md), **font**: StiFontGeom): [Size](../Stimulsoft_System_Drawing/Size.md)

**Parameters**

- **context** ([StiContext](../Stimulsoft_Base_Context/StiContext.md))  
- **font** (StiFontGeom)  

**Returns** [Size](../Stimulsoft_System_Drawing/Size.md)


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **color** | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **series** | IStiSeries |  |
| **text** | string |  |
