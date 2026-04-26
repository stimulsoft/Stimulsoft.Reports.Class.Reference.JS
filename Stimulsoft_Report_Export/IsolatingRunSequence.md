---
title: "IsolatingRunSequence Class"
---

## IsolatingRunSequence Class

**Namespace:** `Stimulsoft.Report.Export`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(number paragraphEmbeddingLevel, number[] runIndexList, number[] types, number[] levels) |  |

**constructor**(**paragraphEmbeddingLevel**: number, **runIndexList**: number[], **types**: number[], **levels**: number[])

**Parameters**

- **paragraphEmbeddingLevel** (number)  
- **runIndexList** (number[])  
- **types** (number[])  
- **levels** (number[])  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **applyTypesAndLevels** | void |  |
| **computeIsolatingRunSequence** | void |  |
| **getRunLimit** | number |  |
| **resolveImplicit** | void |  |
| **resolveNeutrals** | void |  |
| **resolveWeaks** | void |  |
| **setRunTypes** | void |  |

---

### Method Details

#### applyTypesAndLevels

**applyTypesAndLevels**(**refTypesList**: { ref: number[] }, **refLevelsList**: { ref: number[] }): void

**Parameters**

- **refTypesList** ({ ref: number[] })  
- **refLevelsList** ({ ref: number[] })  


---

#### computeIsolatingRunSequence

**computeIsolatingRunSequence**(**pLevel**: number, **indexList**: number[], **typesList**: number[], **levels**: number[]): void

**Parameters**

- **pLevel** (number)  
- **indexList** (number[])  
- **typesList** (number[])  
- **levels** (number[])  


---

#### getRunLimit

**getRunLimit**(**index**: number, **limit**: number, **typesSet**: [BidiClass](BidiClass.md)[]): number

**Parameters**

- **index** (number)  
- **limit** (number)  
- **typesSet** ([BidiClass](BidiClass.md)[])  

**Returns** number


---

#### resolveImplicit

**resolveImplicit**(): void


---

#### resolveNeutrals

**resolveNeutrals**(**input**: string): void

**Parameters**

- **input** (string)  


---

#### resolveWeaks

**resolveWeaks**(): void


---

#### setRunTypes

**setRunTypes**(**start**: number, **limit**: number, **newType**: [BidiClass](BidiClass.md)): void

**Parameters**

- **start** (number)  
- **limit** (number)  
- **newType** ([BidiClass](BidiClass.md))  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **ct** | any |  |
| **ct** | any |  |
| **ct** | any |  |
| **ct** | any |  |
| **ct** | any |  |
| **ct** | any |  |
| **ct** | any |  |
| **eos** | [BidiClass](BidiClass.md) |  |
| **found** | any |  |
| **found** | any |  |
| **i** | any |  |
| **i** | any |  |
| **indexes** | number[] |  |
| **leadType** | any |  |
| **leadType** | any |  |
| **leadType** | any |  |
| **length** | number |  |
| **level** | number |  |
| **loop** | for ( |  |
| **prevStrong** | any |  |
| **prevType** | any |  |
| **prevType** | any |  |
| **prevType** | any |  |
| **prevType** | any |  |
| **prevType** | any |  |
| **resolvedLevels** | number[] |  |
| **sos** | [BidiClass](BidiClass.md) |  |
| **stackPointer** | any |  |
| **strongType** | any |  |
| **strongType** | any |  |
| **trailType** | any |  |
| **trailType** | any |  |
| **trailType** | any |  |
| **type** | any |  |
| **types** | number[] |  |
