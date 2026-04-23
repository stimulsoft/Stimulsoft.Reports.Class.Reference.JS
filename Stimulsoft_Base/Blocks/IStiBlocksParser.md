---
title: "IStiBlocksParser Interface"
---

## IStiBlocksParser Interface

**Namespace:** `Stimulsoft.Base.Blocks`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **evaluate** | void |  |
| **evaluateAsync** | void |  |
| **evaluateUserFunction** | void |  |

---

### Method Details

#### evaluate

**evaluate**(**report**: IStiReport, **sender**: any, **xml**: string, **args**: [EventArgs](../../Stimulsoft_System/EventArgs.md)): void

**Parameters**

- **report** (IStiReport)  
- **sender** (any)  
- **xml** (string)  
- **args** ([EventArgs](../../Stimulsoft_System/EventArgs.md))  


---

#### evaluateAsync

**evaluateAsync**(**report**: IStiReport, **sender**: any, **xml**: string, **args**: [EventArgs](../../Stimulsoft_System/EventArgs.md)): void

**Parameters**

- **report** (IStiReport)  
- **sender** (any)  
- **xml** (string)  
- **args** ([EventArgs](../../Stimulsoft_System/EventArgs.md))  


---

#### evaluateUserFunction

**evaluateUserFunction**(**report**: IStiReport, **functionObj**: object, **args**: Dictionary<string, any>): void

**Parameters**

- **report** (IStiReport)  
- **functionObj** (object)  
- **args** (Dictionary<string, any>)  

