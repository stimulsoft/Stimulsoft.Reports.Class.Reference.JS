---
title: "Range Class"
---

## Range Class

**Namespace:** `Stimulsoft.Base.Drawing`

Structure describes the range.
Range describes the word or chain symbol in text.

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(string text, [Size](../Stimulsoft_System_Drawing/Size.md) size, boolean newLineForm) | Initializes a new instance of the Range class with the specified location and size. |

**constructor**(**text**: string, **size**: [Size](../Stimulsoft_System_Drawing/Size.md), **newLineForm**: boolean)

Initializes a new instance of the Range class with the specified location and size.

**Parameters**

- **text** (string)  
- **size** ([Size](../Stimulsoft_System_Drawing/Size.md))  
- **newLineForm** (boolean)  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **isEnd** | boolean | Is end range. |
| **isStart** | boolean | Is start range. |
| **newLineForm** | boolean | After this range, new line is starting. |
| **pos** | [Point](../Stimulsoft_System_Drawing/Point.md) | Position of range. |
| **size** | [Size](../Stimulsoft_System_Drawing/Size.md) | Size of range. |
| **text** | string | Contents of range. |
