---
title: "StiMapGdiPainter Class"
---

## StiMapGdiPainter Class

**Namespace:** `Stimulsoft.Report.Painters`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getImage** | Promise<string> |  |
| **imageAvailable** | boolean |  |
| **paintOnlineMap** | Promise<string> |  |

---

### Method Details

#### getImage

**getImage**(**map**: StiMap, **zoom**: number, **x**: number, **y**: number, **width**: number, **height**: number): Promise<string>

**Parameters**

- **map** (StiMap)  
- **zoom** (number)  
- **x** (number)  
- **y** (number)  
- **width** (number)  
- **height** (number)  

**Returns** Promise<string>


---

#### imageAvailable

**imageAvailable**(**mapImage**: any): boolean

**Parameters**

- **mapImage** (any)  

**Returns** boolean


---

#### paintOnlineMap

**paintOnlineMap**(**rect**: [Rectangle](../../Stimulsoft_System/Drawing/Rectangle.md), **map**: StiMap): Promise<string>

**Parameters**

- **rect** ([Rectangle](../../Stimulsoft_System/Drawing/Rectangle.md))  
- **map** (StiMap)  

**Returns** Promise<string>

