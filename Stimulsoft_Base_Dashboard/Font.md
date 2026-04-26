---
title: "Font Class"
---

## Font Class

**Namespace:** `Stimulsoft.Base.Dashboard`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(string name, number size, [Color](../Stimulsoft_System_Drawing/Color.md) color, any isBold) |  |

**constructor**(**name**: string, **size**: number, **color**: [Color](../Stimulsoft_System_Drawing/Color.md), **isBold**: any)

**Parameters**

- **name** (string)  
- **size** (number)  
- **color** ([Color](../Stimulsoft_System_Drawing/Color.md))  
- **isBold** (any)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getCachedGdiFont** | [Stimulsoft.System.Drawing.Font](../Stimulsoft_System_Drawing/Font.md) |  |
| **getGdiFont** | [Stimulsoft.System.Drawing.Font](../Stimulsoft_System_Drawing/Font.md) |  |

---

### Method Details

#### getCachedGdiFont

**getCachedGdiFont**(): [Stimulsoft.System.Drawing.Font](../Stimulsoft_System_Drawing/Font.md)

**Returns** [Stimulsoft.System.Drawing.Font](../Stimulsoft_System_Drawing/Font.md)


---

#### getGdiFont

**getGdiFont**(**zoom**: any, **fontSize**: number, **baseFont**: [Stimulsoft.System.Drawing.Font](../Stimulsoft_System_Drawing/Font.md)): [Stimulsoft.System.Drawing.Font](../Stimulsoft_System_Drawing/Font.md)

**Parameters**

- **zoom** (any)  
- **fontSize** (number)  
- **baseFont** ([Stimulsoft.System.Drawing.Font](../Stimulsoft_System_Drawing/Font.md))  

**Returns** [Stimulsoft.System.Drawing.Font](../Stimulsoft_System_Drawing/Font.md)


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **Color** | [Color](../Stimulsoft_System_Drawing/Color.md) |  |
| **IsBold** | boolean |  |
| **Name** | string |  |
| **SelectedColor** | any |  |
| **Size** | number |  |
