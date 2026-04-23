---
title: "StiColumnSize Class"
---

## StiColumnSize Class

**Namespace:** `Stimulsoft.Report.Components.Table`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(number size) |  |

**constructor**(**size**: number)

**Parameters**

- **size** (number)  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **length** | number |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **add** | void |  |
| **addLastNotFixed** | void |  |
| **fitColumnsIntoSlotByAdjustingAllColumns** | void | Difference between { |
| **getCountNotFixedColumn** | number |  |
| **getCountNotFixedColumnAndNotMinSize** | number |  |
| **getCountNotFixedColumnAndWidth** | number |  |
| **getFixed** | void |  |
| **getWidth** | number |  |
| **normalize** | void |  |
| **setFixedColumn** | void |  |
| **setMinWidths** | void |  |
| **setWidth** | void |  |
| **subtract** | void |  |

---

### Method Details

#### add

**add**(**indexCol**: number, **width**: number): void

**Parameters**

- **indexCol** (number)  
- **width** (number)  


---

#### addLastNotFixed

**addLastNotFixed**(**width**: number): void

**Parameters**

- **width** (number)  


---

#### fitColumnsIntoSlotByAdjustingAllColumns

**fitColumnsIntoSlotByAdjustingAllColumns**(**slotWidth**: number): void

Difference between {

**Parameters**

- **slotWidth** (number)  


---

#### getCountNotFixedColumn

**getCountNotFixedColumn**(): number

**Returns** number


---

#### getCountNotFixedColumnAndNotMinSize

**getCountNotFixedColumnAndNotMinSize**(): number

**Returns** number


---

#### getCountNotFixedColumnAndWidth

**getCountNotFixedColumnAndWidth**(): number

**Returns** number


---

#### getFixed

**getFixed**(**index**: number): void

**Parameters**

- **index** (number)  


---

#### getWidth

**getWidth**(**indexCol**: number): number

**Parameters**

- **indexCol** (number)  

**Returns** number


---

#### normalize

**normalize**(): void


---

#### setFixedColumn

**setFixedColumn**(**indexCol**: number, **width**: number): void

**Parameters**

- **indexCol** (number)  
- **width** (number)  


---

#### setMinWidths

**setMinWidths**(**indexCol**: number, **minWidth**: number): void

**Parameters**

- **indexCol** (number)  
- **minWidth** (number)  


---

#### setWidth

**setWidth**(**indexCol**: number, **width**: number): void

**Parameters**

- **indexCol** (number)  
- **width** (number)  


---

#### subtract

**subtract**(**indexCol**: number, **width**: number, **checkMin**: any): void

**Parameters**

- **indexCol** (number)  
- **width** (number)  
- **checkMin** (any)  

