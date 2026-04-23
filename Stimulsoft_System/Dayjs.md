---
title: "Dayjs Class"
---

## Dayjs Class

**Namespace:** ``

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(ConfigType config) |  |

**constructor**(**config**: ConfigType)

**Parameters**

- **config** (ConfigType)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **add** *(+1 overloads)* | [Dayjs](Dayjs.md) |  |
| **clone** | [Dayjs](Dayjs.md) |  |
| **date** *(+1 overloads)* | number |  |
| **day** *(+1 overloads)* | number |  |
| **daysInMonth** | number |  |
| **diff** | number |  |
| **endOf** *(+1 overloads)* | [Dayjs](Dayjs.md) |  |
| **format** | string |  |
| **hour** *(+1 overloads)* | number |  |
| **isAfter** *(+1 overloads)* | boolean |  |
| **isBefore** *(+1 overloads)* | boolean |  |
| **isSame** *(+1 overloads)* | boolean |  |
| **isValid** | boolean |  |
| **locale** *(+1 overloads)* | string |  |
| **millisecond** *(+1 overloads)* | number |  |
| **minute** *(+1 overloads)* | number |  |
| **month** *(+1 overloads)* | number |  |
| **quarter** *(+1 overloads)* | number |  |
| **second** *(+1 overloads)* | number |  |
| **startOf** *(+1 overloads)* | [Dayjs](Dayjs.md) |  |
| **subtract** *(+1 overloads)* | [Dayjs](Dayjs.md) |  |
| **toDate** | Date |  |
| **toISOString** | string |  |
| **toJSON** | string |  |
| **toString** | string |  |
| **unix** | number |  |
| **utc** | [Dayjs](Dayjs.md) |  |
| **utcOffset** | number |  |
| **valueOf** | number |  |
| **year** *(+1 overloads)* | number |  |

---

### Method Details

#### add

**add**(**value**: number, **unit**: ManipulateType): [Dayjs](Dayjs.md)

**Parameters**

- **value** (number)  
- **unit** (ManipulateType)  

**Returns** [Dayjs](Dayjs.md)

---

**add**(**value**: number, **unit**: QUnitType): [Dayjs](Dayjs.md)

**Parameters**

- **value** (number)  
- **unit** (QUnitType)  

**Returns** [Dayjs](Dayjs.md)


---

#### clone

**clone**(): [Dayjs](Dayjs.md)

**Returns** [Dayjs](Dayjs.md)


---

#### date

**date**(): number

**Returns** number

---

**date**(**value**: number): [Dayjs](Dayjs.md)

**Parameters**

- **value** (number)  

**Returns** [Dayjs](Dayjs.md)


---

#### day

**day**(): number

**Returns** number

---

**day**(**value**: number): [Dayjs](Dayjs.md)

**Parameters**

- **value** (number)  

**Returns** [Dayjs](Dayjs.md)


---

#### daysInMonth

**daysInMonth**(): number

**Returns** number


---

#### diff

**diff**(**date**: ConfigType, **unit**: QUnitType | OpUnitType, **float**: boolean): number

**Parameters**

- **date** (ConfigType)  
- **unit** (QUnitType | OpUnitType)  
- **float** (boolean)  

**Returns** number


---

#### endOf

**endOf**(**unit**: OpUnitType): [Dayjs](Dayjs.md)

**Parameters**

- **unit** (OpUnitType)  

**Returns** [Dayjs](Dayjs.md)

---

**endOf**(**unit**: QUnitType): [Dayjs](Dayjs.md)

**Parameters**

- **unit** (QUnitType)  

**Returns** [Dayjs](Dayjs.md)


---

#### format

**format**(**template**: string): string

**Parameters**

- **template** (string)  

**Returns** string


---

#### hour

**hour**(): number

**Returns** number

---

**hour**(**value**: number): [Dayjs](Dayjs.md)

**Parameters**

- **value** (number)  

**Returns** [Dayjs](Dayjs.md)


---

#### isAfter

**isAfter**(**date**: ConfigType, **unit**: OpUnitType): boolean

**Parameters**

- **date** (ConfigType)  
- **unit** (OpUnitType)  

**Returns** boolean

---

**isAfter**(**date**: ConfigType, **unit**: QUnitType): boolean

**Parameters**

- **date** (ConfigType)  
- **unit** (QUnitType)  

**Returns** boolean


---

#### isBefore

**isBefore**(**date**: ConfigType, **unit**: OpUnitType): boolean

**Parameters**

- **date** (ConfigType)  
- **unit** (OpUnitType)  

**Returns** boolean

---

**isBefore**(**date**: ConfigType, **unit**: QUnitType): boolean

**Parameters**

- **date** (ConfigType)  
- **unit** (QUnitType)  

**Returns** boolean


---

#### isSame

**isSame**(**date**: ConfigType, **unit**: OpUnitType): boolean

**Parameters**

- **date** (ConfigType)  
- **unit** (OpUnitType)  

**Returns** boolean

---

**isSame**(**date**: ConfigType, **unit**: QUnitType): boolean

**Parameters**

- **date** (ConfigType)  
- **unit** (QUnitType)  

**Returns** boolean


---

#### isValid

**isValid**(): boolean

**Returns** boolean


---

#### locale

**locale**(): string

**Returns** string

---

**locale**(**preset**: string | ILocale, **object**: Partial<ILocale>): [Dayjs](Dayjs.md)

**Parameters**

- **preset** (string | ILocale)  
- **object** (Partial<ILocale>)  

**Returns** [Dayjs](Dayjs.md)


---

#### millisecond

**millisecond**(): number

**Returns** number

---

**millisecond**(**value**: number): [Dayjs](Dayjs.md)

**Parameters**

- **value** (number)  

**Returns** [Dayjs](Dayjs.md)


---

#### minute

**minute**(): number

**Returns** number

---

**minute**(**value**: number): [Dayjs](Dayjs.md)

**Parameters**

- **value** (number)  

**Returns** [Dayjs](Dayjs.md)


---

#### month

**month**(): number

**Returns** number

---

**month**(**value**: number): [Dayjs](Dayjs.md)

**Parameters**

- **value** (number)  

**Returns** [Dayjs](Dayjs.md)


---

#### quarter

**quarter**(): number

**Returns** number

---

**quarter**(**quarter**: number): [Dayjs](Dayjs.md)

**Parameters**

- **quarter** (number)  

**Returns** [Dayjs](Dayjs.md)


---

#### second

**second**(): number

**Returns** number

---

**second**(**value**: number): [Dayjs](Dayjs.md)

**Parameters**

- **value** (number)  

**Returns** [Dayjs](Dayjs.md)


---

#### startOf

**startOf**(**unit**: OpUnitType): [Dayjs](Dayjs.md)

**Parameters**

- **unit** (OpUnitType)  

**Returns** [Dayjs](Dayjs.md)

---

**startOf**(**unit**: QUnitType): [Dayjs](Dayjs.md)

**Parameters**

- **unit** (QUnitType)  

**Returns** [Dayjs](Dayjs.md)


---

#### subtract

**subtract**(**value**: number, **unit**: ManipulateType): [Dayjs](Dayjs.md)

**Parameters**

- **value** (number)  
- **unit** (ManipulateType)  

**Returns** [Dayjs](Dayjs.md)

---

**subtract**(**value**: number, **unit**: QUnitType): [Dayjs](Dayjs.md)

**Parameters**

- **value** (number)  
- **unit** (QUnitType)  

**Returns** [Dayjs](Dayjs.md)


---

#### toDate

**toDate**(): Date

**Returns** Date


---

#### toISOString

**toISOString**(): string

**Returns** string


---

#### toJSON

**toJSON**(): string

**Returns** string


---

#### toString

**toString**(): string

**Returns** string


---

#### unix

**unix**(): number

**Returns** number


---

#### utc

**utc**(**keepLocalTime**: boolean): [Dayjs](Dayjs.md)

**Parameters**

- **keepLocalTime** (boolean)  

**Returns** [Dayjs](Dayjs.md)


---

#### utcOffset

**utcOffset**(): number

**Returns** number


---

#### valueOf

**valueOf**(): number

**Returns** number


---

#### year

**year**(): number

**Returns** number

---

**year**(**value**: number): [Dayjs](Dayjs.md)

**Parameters**

- **value** (number)  

**Returns** [Dayjs](Dayjs.md)

