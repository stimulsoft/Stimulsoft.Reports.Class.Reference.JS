---
title: "File Class"
---

## File Class

**Namespace:** `Stimulsoft.System.IO`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getFile** `static` | any |  |
| **getFileAsync** `static` | void |  |
| **getFilesNames** `static` | string[] |  |
| **saveFile** `static` | void |  |

---

### Method Details

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

**getFileAsync**(**callback**: Function, **filePath**: string, **binary**: any, **contentType**: any, **headers**: [Header](../Header.md)[], **disableCache**: boolean, **withCredentials**: boolean, **allowException**: any): void

**Parameters**

- **callback** (Function)  
- **filePath** (string)  
- **binary** (any)  
- **contentType** (any)  
- **headers** ([Header](../Header.md)[])  
- **disableCache** (boolean)  
- **withCredentials** (boolean)  
- **allowException** (any)  


---

#### getFilesNames `static`

**getFilesNames**(**filePath**: string): string[]

**Parameters**

- **filePath** (string)  

**Returns** string[]


---

#### saveFile `static`

**saveFile**(**filePath**: string, **fileData**: string | number[]): void

**Parameters**

- **filePath** (string)  
- **fileData** (string | number[])  

