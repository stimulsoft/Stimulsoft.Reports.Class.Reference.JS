---
title: "StiDataAnalyzer Class"
---

## StiDataAnalyzer Class

**Namespace:** `Stimulsoft.Data.Engine`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **analyze** `static` | Promise<[StiDataTable](StiDataTable.md)> | Analyzes the data based on the provided options and returns a resulting <see cref="StiDataTable"/>. |

---

### Method Details

#### analyze `static`

**analyze**(**options**: [StiDataAnalyzerOptions](StiDataAnalyzerOptions.md)): Promise<[StiDataTable](StiDataTable.md)>

Analyzes the data based on the provided options and returns a resulting <see cref="StiDataTable"/>.

**Parameters**

- **options** ([StiDataAnalyzerOptions](StiDataAnalyzerOptions.md))  

**Returns** Promise<[StiDataTable](StiDataTable.md)> — A StiDataTable containing the analyzed data. If no meters are provided or no tables are fetched,

