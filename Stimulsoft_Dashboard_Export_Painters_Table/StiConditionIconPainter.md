---
title: "StiConditionIconPainter Class"
---

## StiConditionIconPainter Class

**Namespace:** `Stimulsoft.Dashboard.Export.Painters.Table`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **adjustCellContentRectWithIcon** `static` | RectangleD |  |
| **drawIcon** `static` | Promise<void> |  |
| **getImageWithConditionIcon** `static` | Promise<StiImage> |  |

---

### Method Details

#### adjustCellContentRectWithIcon `static`

**adjustCellContentRectWithIcon**(**rect**: RectangleD, **condition**: [IStiTableElementCondition](../Stimulsoft_Report_Dashboard/IStiTableElementCondition.md)): RectangleD

**Parameters**

- **rect** (RectangleD)  
- **condition** ([IStiTableElementCondition](../Stimulsoft_Report_Dashboard/IStiTableElementCondition.md))  

**Returns** RectangleD


---

#### drawIcon `static`

**drawIcon**(**g**: [StiSvgGeomWriter](../Stimulsoft_Report_Export/StiSvgGeomWriter.md), **condition**: [IStiTableElementCondition](../Stimulsoft_Report_Dashboard/IStiTableElementCondition.md), **rect**: RectangleD, **zoom**: number): Promise<void>

**Parameters**

- **g** ([StiSvgGeomWriter](../Stimulsoft_Report_Export/StiSvgGeomWriter.md))  
- **condition** ([IStiTableElementCondition](../Stimulsoft_Report_Dashboard/IStiTableElementCondition.md))  
- **rect** (RectangleD)  
- **zoom** (number)  

**Returns** Promise<void>


---

#### getImageWithConditionIcon `static`

**getImageWithConditionIcon**(**condition**: [IStiTableElementCondition](../Stimulsoft_Report_Dashboard/IStiTableElementCondition.md), **parentRect**: RectangleD, **tableName**: string): Promise<StiImage>

**Parameters**

- **condition** ([IStiTableElementCondition](../Stimulsoft_Report_Dashboard/IStiTableElementCondition.md))  
- **parentRect** (RectangleD)  
- **tableName** (string)  

**Returns** Promise<StiImage>


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **rectIcon** | any |  |
| **rectIcon** | any |  |
| **rectImage** | any |  |
| **rectImage** | any |  |
