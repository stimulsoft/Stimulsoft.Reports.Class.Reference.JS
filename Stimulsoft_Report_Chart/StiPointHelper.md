---
title: "StiPointHelper Class"
---

## StiPointHelper Class

**Namespace:** `Stimulsoft.Report.Chart`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getLineOffsetRectangle** `static` | PointD[] |  |
| **isLineContainsPoint** `static` | boolean |  |
| **isPointInPolygon** `static` | boolean |  |
| **isPointInTriangle** `static` | boolean |  |
| **optimizePoints** `static` | PointD[] |  |

---

### Method Details

#### getLineOffsetRectangle `static`

**getLineOffsetRectangle**(**point1**: PointD, **point2**: PointD, **offset**: number): PointD[]

**Parameters**

- **point1** (PointD)  
- **point2** (PointD)  
- **offset** (number)  

**Returns** PointD[]


---

#### isLineContainsPoint `static`

**isLineContainsPoint**(**startPoint**: PointD, **endPoint**: PointD, **offset**: number, **point**: PointD): boolean

**Parameters**

- **startPoint** (PointD)  
- **endPoint** (PointD)  
- **offset** (number)  
- **point** (PointD)  

**Returns** boolean


---

#### isPointInPolygon `static`

**isPointInPolygon**(**p**: PointD, **points**: PointD[]): boolean

**Parameters**

- **p** (PointD)  
- **points** (PointD[])  

**Returns** boolean


---

#### isPointInTriangle `static`

**isPointInTriangle**(**p**: PointD, **a**: PointD, **b**: PointD, **c**: PointD): boolean

**Parameters**

- **p** (PointD)  
- **a** (PointD)  
- **b** (PointD)  
- **c** (PointD)  

**Returns** boolean


---

#### optimizePoints `static`

**optimizePoints**(**points**: PointD[]): PointD[]

**Parameters**

- **points** (PointD[])  

**Returns** PointD[]

