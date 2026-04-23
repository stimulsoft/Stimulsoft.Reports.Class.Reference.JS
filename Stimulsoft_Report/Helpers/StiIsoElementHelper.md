---
title: "StiIsoElementHelper Class"
---

## StiIsoElementHelper Class

**Namespace:** `Stimulsoft.Report.Helpers`

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **brazilProvinces** `static` | [StiIsoCountry](StiIsoCountry.md)[] |  |
| **canadaProvinces** `static` | [StiIsoCountry](StiIsoCountry.md)[] |  |
| **countries** `static` | [StiIsoCountry](StiIsoCountry.md)[] |  |
| **usStates** `static` | [StiIsoCountry](StiIsoCountry.md)[] |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getCountryFromAlpha2** `static` | [StiIsoCountry](StiIsoCountry.md) | Obtain ISO3166-1 Country based on its alpha2 code. |
| **getCountryFromAlpha3** `static` | [StiIsoCountry](StiIsoCountry.md) | Gets ISO3166-1 Country based on its alpha3 code. |
| **getCountryFromName** `static` | [StiIsoCountry](StiIsoCountry.md) | Gets ISO3166-1 Country based on its alpha3 code. Returns null, if country is not recognized. |
| **getIsoAlpha2FromName** `static` | string | Gets ISO3166-1 Alpha2 code based on country name. Returns null, if country is not recognized. |
| **getIsoAlpha3FromName** `static` | string | Gets ISO3166-1 Alpha3 code based on country name. Returns null, if country is not recognized. |

---

### Method Details

#### getCountryFromAlpha2 `static`

**getCountryFromAlpha2**(**alpha2**: string, **mapId**: string): [StiIsoCountry](StiIsoCountry.md)

Obtain ISO3166-1 Country based on its alpha2 code.

**Parameters**

- **alpha2** (string)  
- **mapId** (string)  

**Returns** [StiIsoCountry](StiIsoCountry.md)


---

#### getCountryFromAlpha3 `static`

**getCountryFromAlpha3**(**alpha3**: string, **mapId**: string): [StiIsoCountry](StiIsoCountry.md)

Gets ISO3166-1 Country based on its alpha3 code.

**Parameters**

- **alpha3** (string)  
- **mapId** (string)  

**Returns** [StiIsoCountry](StiIsoCountry.md)


---

#### getCountryFromName `static`

**getCountryFromName**(**name**: string, **mapId**: string): [StiIsoCountry](StiIsoCountry.md)

Gets ISO3166-1 Country based on its alpha3 code. Returns null, if country is not recognized.

**Parameters**

- **name** (string)  
- **mapId** (string)  

**Returns** [StiIsoCountry](StiIsoCountry.md)


---

#### getIsoAlpha2FromName `static`

**getIsoAlpha2FromName**(**name**: string, **mapId**: string): string

Gets ISO3166-1 Alpha2 code based on country name. Returns null, if country is not recognized.

**Parameters**

- **name** (string)  
- **mapId** (string)  

**Returns** string


---

#### getIsoAlpha3FromName `static`

**getIsoAlpha3FromName**(**name**: string, **mapId**: string): string

Gets ISO3166-1 Alpha3 code based on country name. Returns null, if country is not recognized.

**Parameters**

- **name** (string)  
- **mapId** (string)  

**Returns** string

