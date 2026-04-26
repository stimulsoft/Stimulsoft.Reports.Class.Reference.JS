---
title: "StiReportCache Class"
---

## StiReportCache Class

**Namespace:** `Stimulsoft.Report`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **createNewCache** `static` | string |  |
| **deleteCache** `static` | void |  |
| **getPageCacheName** `static` | string |  |
| **loadPage** `static` | string |  |
| **savePage** `static` | void |  |

---

### Method Details

#### createNewCache `static`

**createNewCache**(): string

**Returns** string


---

#### deleteCache `static`

**deleteCache**(**path**: string): void

**Parameters**

- **path** (string)  


---

#### getPageCacheName `static`

**getPageCacheName**(**cache**: string, **cachePageGuid**: string): string

**Parameters**

- **cache** (string)  
- **cachePageGuid** (string)  

**Returns** string


---

#### loadPage `static`

**loadPage**(**path**: string): string

**Parameters**

- **path** (string)  

**Returns** string


---

#### savePage `static`

**savePage**(**path**: string, **pageJsonString**: string): void

**Parameters**

- **path** (string)  
- **pageJsonString** (string)  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **temp** | any |  |
