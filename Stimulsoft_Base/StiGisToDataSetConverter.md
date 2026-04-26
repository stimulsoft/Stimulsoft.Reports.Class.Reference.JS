---
title: "StiGisToDataSetConverter Class"
---

## StiGisToDataSetConverter Class

**Namespace:** `Stimulsoft.Base`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getDataSetFromGeoJson** `static` | [DataSet](../Stimulsoft_System_Data/DataSet.md) |  |
| **getDataSetFromGeoJson2** `static` | [DataSet](../Stimulsoft_System_Data/DataSet.md) |  |
| **getDataSetFromWkt** `static` | [DataSet](../Stimulsoft_System_Data/DataSet.md) |  |

---

### Method Details

#### getDataSetFromGeoJson `static`

**getDataSetFromGeoJson**(**content**: number[] \| string \| Uint8Array, **maxDataRows**: number): [DataSet](../Stimulsoft_System_Data/DataSet.md)

**Parameters**

- **content** (number[] \| string \| Uint8Array)  
- **maxDataRows** (number)  

**Returns** [DataSet](../Stimulsoft_System_Data/DataSet.md)


---

#### getDataSetFromGeoJson2 `static`

**getDataSetFromGeoJson2**(**jObject**: {}, **maxDataRows**: number): [DataSet](../Stimulsoft_System_Data/DataSet.md)

**Parameters**

- **jObject** ({})  
- **maxDataRows** (number)  

**Returns** [DataSet](../Stimulsoft_System_Data/DataSet.md)


---

#### getDataSetFromWkt `static`

**getDataSetFromWkt**(**content**: number[] \| string \| Uint8Array, **separator**: string, **maxDataRows**: number): [DataSet](../Stimulsoft_System_Data/DataSet.md)

**Parameters**

- **content** (number[] \| string \| Uint8Array)  
- **separator** (string)  
- **maxDataRows** (number)  

**Returns** [DataSet](../Stimulsoft_System_Data/DataSet.md)


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **skipRow** | any |  |
