---
title: "Http Class"
---

## Http Class

**Namespace:** `Stimulsoft.System.IO`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **callback** *(+4 overloads)* | void |  |
| **getFile** `static` | any |  |
| **getFileAsync** `static` | void |  |
| **getUrlParameters** `static` |  |  |
| **send** `static` | void |  |
| **sendAsync** `static` | void |  |

---

### Method Details

#### callback

**callback**(**null**: any): void

**Parameters**

- **null** (any)  

---

**callback**(**ui8a**: any): void

**Parameters**

- **ui8a** (any)  

---

**callback**(**bufView**: any): void

**Parameters**

- **bufView** (any)  

---

**callback**(): void

---

**callback**(**null**: any): void

**Parameters**

- **null** (any)  


---

#### getFile `static`

**getFile**(**filePath**: string, **binary**: any, **contentType**: any, **headers**: [Header](../Header.md)[], **disableCache**: boolean, **withCredentials**: boolean, **allowException**: any): any

**Parameters**

- **filePath** (string)  
- **binary** (any)  
- **contentType** (any)  
- **headers** ([Header](../Header.md)[])  
- **disableCache** (boolean)  
- **withCredentials** (boolean)  
- **allowException** (any)  

**Returns** any


---

#### getFileAsync `static`

**getFileAsync**(**callback**: Function, **filePath**: string, **binary**: any, **contentType**: any, **headers**: [Header](../Header.md)[], **disableCache**: any, **withCredentials**: boolean, **allowException**: any): void

**Parameters**

- **callback** (Function)  
- **filePath** (string)  
- **binary** (any)  
- **contentType** (any)  
- **headers** ([Header](../Header.md)[])  
- **disableCache** (any)  
- **withCredentials** (boolean)  
- **allowException** (any)  


---

#### getUrlParameters `static`

**getUrlParameters**(): void


---

#### send `static`

**send**(**method**: string, **url**: string, **body**: any, **headers**: [Header](../Header.md)[], **disableCache**: boolean, **withCredentials**: boolean): void

**Parameters**

- **method** (string)  
- **url** (string)  
- **body** (any)  
- **headers** ([Header](../Header.md)[])  
- **disableCache** (boolean)  
- **withCredentials** (boolean)  


---

#### sendAsync `static`

**sendAsync**(**method**: string, **url**: string, **body**: any, **headers**: [Header](../Header.md)[], **timeout**: any, **disableCache**: boolean, **withCredentials**: boolean): void

**Parameters**

- **method** (string)  
- **url** (string)  
- **body** (any)  
- **headers** ([Header](../Header.md)[])  
- **timeout** (any)  
- **disableCache** (boolean)  
- **withCredentials** (boolean)  

