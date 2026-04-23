---
title: "StiMeterCreator Class"
---

## StiMeterCreator Class

**Namespace:** `Stimulsoft.Dashboard.Components.Helpers`

Class helps in creation new  object of the StiMeter type.

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **neww** `static` | [StiMeter](../StiMeter.md) | Creates new meter object with help of its identification type name. |
| **neww2** `static` | [StiMeter](../StiMeter.md) | Creates new meter object with help of it identification type. |

---

### Method Details

#### neww `static`

**neww**(**identName**: string): [StiMeter](../StiMeter.md)

Creates new  meter object with help of its identification type name.

**Parameters**

- **identName** (string) — A name of the identification type which is used for the meter creation.  

**Returns** [StiMeter](../StiMeter.md) — Created meter object.


---

#### neww2 `static`

**neww2**(**ident**: [StiMeterIdent](../StiMeterIdent.md)): [StiMeter](../StiMeter.md)

Creates new  meter object with help of it identification type.

**Parameters**

- **ident** ([StiMeterIdent](../StiMeterIdent.md)) — An idendification type of the meter.  

**Returns** [StiMeter](../StiMeter.md) — Created meter object.

