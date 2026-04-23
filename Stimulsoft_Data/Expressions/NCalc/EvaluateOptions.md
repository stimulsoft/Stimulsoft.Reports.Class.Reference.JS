---
title: "EvaluateOptions Enum"
---

## EvaluateOptions Enum

**Namespace:** `Stimulsoft.Data.Expressions.NCalc`

Provides enumerated values to use to set evaluation options.

### Members

| Member | Value | Description |
| --- | --- | --- |
| **None** | 1 | Specifies that no options are set. |
| **IgnoreCase** | 2 | Specifies case-insensitive matching. |
| **NoCache** | 4 | No-cache mode. Ingores any pre-compiled expression in the cache. |
| **IterateParameters** | 8 | Treats parameters as arrays and result a set of results. |
| **RoundAwayFromZero** | 16 | When using Round(), if a number is halfway between two others, it is rounded toward the nearest number that is away from zero. |
