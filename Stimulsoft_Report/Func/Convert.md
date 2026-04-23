---
title: "Convert Class"
---

## Convert Class

**Namespace:** `Stimulsoft.Report.Func`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **toABC** `static` | string | Converts the number to A B C D representation for numbering of the list. |
| **toABCNumeric** `static` | string | Converts the number to A B C D representation for numbering of the list. |
| **toABCRu** `static` | string | Converts the number to ¿ ¡ ¬ representation for numbering of the list in russian. |
| **toArabic** `static` | string | Converts all digits in the string to the arabic representation. |
| **toRoman** `static` | string | Converts Arabic numerals to Roman. |

---

### Method Details

#### toABC `static`

**toABC**(**value**: number): string

Converts the number to A B C D representation for numbering of the list.

**Parameters**

- **value** (number) — A number for converting into the A B C representation.  

**Returns** string — String representation of the value in A B C D format.


---

#### toABCNumeric `static`

**toABCNumeric**(**value**: number): string

Converts the number to A B C D representation for numbering of the list.

**Parameters**

- **value** (number) — A number for converting into the A B C representation.  

**Returns** string — String representation of the value in A B C D format.


---

#### toABCRu `static`

**toABCRu**(**value**: number): string

Converts the number to ¿ ¡ ¬ representation for numbering of the list in russian.

**Parameters**

- **value** (number) — A number for converting into the ¿ ¡ ¬ representation.  

**Returns** string — String representation of the value in ¿ ¡ ¬ format.


---

#### toArabic `static`

**toArabic**(**value**: number | string, **useEasternDigits**: boolean): string

Converts all digits in the string to the arabic representation.

**Parameters**

- **value** (number | string) — A string or number for converting into the arabic representation.  
- **useEasternDigits** (boolean) — Use eastern or standard arabic digits.  

**Returns** string — String with arabic digits.


---

#### toRoman `static`

**toRoman**(**value**: number): string

Converts Arabic numerals to Roman.

**Parameters**

- **value** (number) — Arabic numerals for converting to the Roman format.  

**Returns** string — Returns Arabics numerals in Roman.

