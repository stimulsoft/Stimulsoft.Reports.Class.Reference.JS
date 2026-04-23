---
title: "StiTrendLineCoreXF Class"
---

## StiTrendLineCoreXF Class

**Namespace:** `Stimulsoft.Report.Chart`

### Inheritance

Implements: [ICloneable](../Stimulsoft_System/ICloneable.md), [IStiTrendLineCoreXF](../Stimulsoft_Report/Chart/IStiTrendLineCoreXF.md)  

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(IStiTrendLine trendLine) |  |

**constructor**(**trendLine**: IStiTrendLine)

**Parameters**

- **trendLine** (IStiTrendLine)  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **localizedName** | string |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **clone** | [StiTrendLineCoreXF](StiTrendLineCoreXF.md) |  |
| **implements** | any[] |  |
| **renderTrendLine** | void |  |
| **sum** | number |  |
| **sumLn** | number |  |
| **sumProductions** | number |  |
| **sumProductionsXLogY** | number |  |
| **sumSqr** | number |  |

---

### Method Details

#### clone

**clone**(): [StiTrendLineCoreXF](StiTrendLineCoreXF.md)

**Returns** [StiTrendLineCoreXF](StiTrendLineCoreXF.md)


---

#### implements

**implements**(): any[]

**Returns** any[]


---

#### renderTrendLine

**renderTrendLine**(**geom**: StiAreaGeom, **points**: PointD[], **posY**: number): void

**Parameters**

- **geom** (StiAreaGeom)  
- **points** (PointD[])  
- **posY** (number)  


---

#### sum

**sum**(**values**: number[]): number

**Parameters**

- **values** (number[])  

**Returns** number


---

#### sumLn

**sumLn**(**values**: number[]): number

**Parameters**

- **values** (number[])  

**Returns** number


---

#### sumProductions

**sumProductions**(**valuesX**: number[], **valuesY**: number[]): number

**Parameters**

- **valuesX** (number[])  
- **valuesY** (number[])  

**Returns** number


---

#### sumProductionsXLogY

**sumProductionsXLogY**(**valuesX**: number[], **valuesY**: number[]): number

**Parameters**

- **valuesX** (number[])  
- **valuesY** (number[])  

**Returns** number


---

#### sumSqr

**sumSqr**(**values**: number[]): number

**Parameters**

- **values** (number[])  

**Returns** number

