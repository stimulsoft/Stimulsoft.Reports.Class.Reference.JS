---
title: "StiPie3dQuadrilateral Class"
---

## StiPie3dQuadrilateral Class

**Namespace:** `Stimulsoft.Report.Chart`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([Rectangle](../Stimulsoft_System_Drawing/Rectangle.md) rectangle, [Point](../Stimulsoft_System_Drawing/Point.md) point1, [Point](../Stimulsoft_System_Drawing/Point.md) point2, [Point](../Stimulsoft_System_Drawing/Point.md) point3, [Point](../Stimulsoft_System_Drawing/Point.md) point4, boolean toClose, [StiAnimation](../Stimulsoft_Base_Context_Animation/StiAnimation.md) animation) |  |

**constructor**(**rectangle**: [Rectangle](../Stimulsoft_System_Drawing/Rectangle.md), **point1**: [Point](../Stimulsoft_System_Drawing/Point.md), **point2**: [Point](../Stimulsoft_System_Drawing/Point.md), **point3**: [Point](../Stimulsoft_System_Drawing/Point.md), **point4**: [Point](../Stimulsoft_System_Drawing/Point.md), **toClose**: boolean, **animation**: [StiAnimation](../Stimulsoft_Base_Context_Animation/StiAnimation.md))

**Parameters**

- **rectangle** ([Rectangle](../Stimulsoft_System_Drawing/Rectangle.md))  
- **point1** ([Point](../Stimulsoft_System_Drawing/Point.md))  
- **point2** ([Point](../Stimulsoft_System_Drawing/Point.md))  
- **point3** ([Point](../Stimulsoft_System_Drawing/Point.md))  
- **point4** ([Point](../Stimulsoft_System_Drawing/Point.md))  
- **toClose** (boolean)  
- **animation** ([StiAnimation](../Stimulsoft_Base_Context_Animation/StiAnimation.md))  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **draw** | void |  |
| **empty** `static` | [StiPie3dQuadrilateral](StiPie3dQuadrilateral.md) |  |

---

### Method Details

#### draw

**draw**(**context**: [StiContext](../Stimulsoft_Base_Context/StiContext.md), **pen**: StiPenGeom, **brush**: [StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md)): void

**Parameters**

- **context** ([StiContext](../Stimulsoft_Base_Context/StiContext.md))  
- **pen** (StiPenGeom)  
- **brush** ([StiBrush](../Stimulsoft_Base_Drawing/StiBrush.md))  


---

#### empty `static`

**empty**(): [StiPie3dQuadrilateral](StiPie3dQuadrilateral.md)

**Returns** [StiPie3dQuadrilateral](StiPie3dQuadrilateral.md)


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **animation** | [StiAnimation](../Stimulsoft_Base_Context_Animation/StiAnimation.md) |  |
| **point1** | [Point](../Stimulsoft_System_Drawing/Point.md) |  |
| **point2** | [Point](../Stimulsoft_System_Drawing/Point.md) |  |
| **point3** | [Point](../Stimulsoft_System_Drawing/Point.md) |  |
| **point4** | [Point](../Stimulsoft_System_Drawing/Point.md) |  |
| **rectangle** | [Rectangle](../Stimulsoft_System_Drawing/Rectangle.md) |  |
| **toClose** | boolean |  |
