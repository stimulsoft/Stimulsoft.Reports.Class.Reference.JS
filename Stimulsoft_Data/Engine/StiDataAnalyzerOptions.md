---
title: "StiDataAnalyzerOptions Class"
---

## StiDataAnalyzerOptions Class

**Namespace:** `Stimulsoft.Data.Engine`

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **dictionary** | [IStiAppDictionary](../../Stimulsoft_Base/IStiAppDictionary.md) |  |
| **group** | string |  |
| **report** | IStiReport |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getFilters** | StiDataFilterRule[] |  |
| **getNames** | string[] |  |
| **initializeHash** | void |  |
| **updateHashCode** | void |  |
| **updateHashCode2** | void |  |

---

### Method Details

#### getFilters

**getFilters**(): StiDataFilterRule[]

**Returns** StiDataFilterRule[]


---

#### getNames

**getNames**(): string[]

**Returns** string[]


---

#### initializeHash

**initializeHash**(): void


---

#### updateHashCode

**updateHashCode**(**rules**: [StiDataRule](StiDataRule.md)[]): void

**Parameters**

- **rules** ([StiDataRule](StiDataRule.md)[])  


---

#### updateHashCode2

**updateHashCode2**(**meters**: IStiMeter[]): void

**Parameters**

- **meters** (IStiMeter[])  

