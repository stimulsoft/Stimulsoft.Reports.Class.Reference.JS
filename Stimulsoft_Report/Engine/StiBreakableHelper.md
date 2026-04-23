---
title: "StiBreakableHelper Class"
---

## StiBreakableHelper Class

**Namespace:** `Stimulsoft.Report.Engine`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([StiEngine](StiEngine.md) engine) |  |

**constructor**(**engine**: [StiEngine](StiEngine.md))

**Parameters**

- **engine** ([StiEngine](StiEngine.md))  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **breakAsync** | Promise<StiContainer> |  |
| **isCanBreak** | boolean |  |
| **isNeedBreak** | boolean |  |
| **processBreakable** | StiContainer |  |
| **processBreakableAsync** | Promise<StiContainer> |  |
| **setCanBreak** | void |  |

---

### Method Details

#### breakAsync

**breakAsync**(**originalContainer**: StiContainer): Promise<StiContainer>

**Parameters**

- **originalContainer** (StiContainer)  

**Returns** Promise<StiContainer>


---

#### isCanBreak

**isCanBreak**(**container**: StiContainer): boolean

**Parameters**

- **container** (StiContainer)  

**Returns** boolean


---

#### isNeedBreak

**isNeedBreak**(**container**: StiContainer): boolean

**Parameters**

- **container** (StiContainer)  

**Returns** boolean


---

#### processBreakable

**processBreakable**(**container**: StiContainer): StiContainer

**Parameters**

- **container** (StiContainer)  

**Returns** StiContainer


---

#### processBreakableAsync

**processBreakableAsync**(**container**: StiContainer): Promise<StiContainer>

**Parameters**

- **container** (StiContainer)  

**Returns** Promise<StiContainer>


---

#### setCanBreak

**setCanBreak**(**container**: StiContainer): void

**Parameters**

- **container** (StiContainer)  

