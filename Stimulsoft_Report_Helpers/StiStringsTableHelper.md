---
title: "StiStringsTableHelper Class"
---

## StiStringsTableHelper Class

**Namespace:** `Stimulsoft.Report.Helpers`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **loadColumnsAndStringRowsFromCache** `static` | string[][] |  |
| **loadColumnsAndStringRowsFromPackedString** `static` | string[][] |  |
| **loadColumnsAndStringRowsFromString** `static` | string[][] |  |
| **loadDataTableFromPackedString** `static` | [DataTable](../Stimulsoft_System_Data/DataTable.md) |  |
| **loadDataTableFromString** `static` | [DataTable](../Stimulsoft_System_Data/DataTable.md) |  |
| **loadDataTableFromStringRows** `static` | [DataTable](../Stimulsoft_System_Data/DataTable.md) |  |
| **loadStringRowsFromCache** `static` | string[][] |  |
| **loadStringRowsFromPackedString** `static` | string[][] |  |
| **loadStringRowsFromString** `static` | string[][] |  |
| **removeFromCache** `static` | void |  |
| **saveColumnsAndStringRowsToCache** `static` | void |  |
| **saveDataTableToCache** `static` | void |  |
| **saveDataTableToPackedString** `static` | string |  |
| **saveDataTableToString** `static` | string |  |
| **saveDataTableToStringRows** `static` | string[][] |  |
| **saveStringRowsToCache** `static` | void |  |

---

### Method Details

#### loadColumnsAndStringRowsFromCache `static`

**loadColumnsAndStringRowsFromCache**(**element**: IStiElement, **refColumns**: { ref: string[] }): string[][]

**Parameters**

- **element** (IStiElement)  
- **refColumns** ({ ref: string[] })  

**Returns** string[][]


---

#### loadColumnsAndStringRowsFromPackedString `static`

**loadColumnsAndStringRowsFromPackedString**(**content**: string, **refColumns**: { ref: string[] }): string[][]

**Parameters**

- **content** (string)  
- **refColumns** ({ ref: string[] })  

**Returns** string[][]


---

#### loadColumnsAndStringRowsFromString `static`

**loadColumnsAndStringRowsFromString**(**content**: string, **refColumns**: { ref: string[] }): string[][]

**Parameters**

- **content** (string)  
- **refColumns** ({ ref: string[] })  

**Returns** string[][]


---

#### loadDataTableFromPackedString `static`

**loadDataTableFromPackedString**(**content**: string, **columns**: string[]): [DataTable](../Stimulsoft_System_Data/DataTable.md)

**Parameters**

- **content** (string)  
- **columns** (string[])  

**Returns** [DataTable](../Stimulsoft_System_Data/DataTable.md)


---

#### loadDataTableFromString `static`

**loadDataTableFromString**(**content**: string, **columns**: string[]): [DataTable](../Stimulsoft_System_Data/DataTable.md)

**Parameters**

- **content** (string)  
- **columns** (string[])  

**Returns** [DataTable](../Stimulsoft_System_Data/DataTable.md)


---

#### loadDataTableFromStringRows `static`

**loadDataTableFromStringRows**(**rows**: string[][], **columns**: string[]): [DataTable](../Stimulsoft_System_Data/DataTable.md)

**Parameters**

- **rows** (string[][])  
- **columns** (string[])  

**Returns** [DataTable](../Stimulsoft_System_Data/DataTable.md)


---

#### loadStringRowsFromCache `static`

**loadStringRowsFromCache**(**element**: IStiElement): string[][]

**Parameters**

- **element** (IStiElement)  

**Returns** string[][]


---

#### loadStringRowsFromPackedString `static`

**loadStringRowsFromPackedString**(**content**: string, **columns**: string[]): string[][]

**Parameters**

- **content** (string)  
- **columns** (string[])  

**Returns** string[][]


---

#### loadStringRowsFromString `static`

**loadStringRowsFromString**(**content**: string, **columns**: string[]): string[][]

**Parameters**

- **content** (string)  
- **columns** (string[])  

**Returns** string[][]


---

#### removeFromCache `static`

**removeFromCache**(**element**: IStiElement): void

**Parameters**

- **element** (IStiElement)  


---

#### saveColumnsAndStringRowsToCache `static`

**saveColumnsAndStringRowsToCache**(**element**: IStiElement, **columns**: string[], **rows**: string[][]): void

**Parameters**

- **element** (IStiElement)  
- **columns** (string[])  
- **rows** (string[][])  


---

#### saveDataTableToCache `static`

**saveDataTableToCache**(**element**: IStiElement, **table**: [DataTable](../Stimulsoft_System_Data/DataTable.md), **saveHeaders**: any): void

**Parameters**

- **element** (IStiElement)  
- **table** ([DataTable](../Stimulsoft_System_Data/DataTable.md))  
- **saveHeaders** (any)  


---

#### saveDataTableToPackedString `static`

**saveDataTableToPackedString**(**table**: [DataTable](../Stimulsoft_System_Data/DataTable.md)): string

**Parameters**

- **table** ([DataTable](../Stimulsoft_System_Data/DataTable.md))  

**Returns** string


---

#### saveDataTableToString `static`

**saveDataTableToString**(**table**: [DataTable](../Stimulsoft_System_Data/DataTable.md)): string

**Parameters**

- **table** ([DataTable](../Stimulsoft_System_Data/DataTable.md))  

**Returns** string


---

#### saveDataTableToStringRows `static`

**saveDataTableToStringRows**(**table**: [DataTable](../Stimulsoft_System_Data/DataTable.md), **saveHeaders**: any): string[][]

**Parameters**

- **table** ([DataTable](../Stimulsoft_System_Data/DataTable.md))  
- **saveHeaders** (any)  

**Returns** string[][]


---

#### saveStringRowsToCache `static`

**saveStringRowsToCache**(**element**: IStiElement, **rows**: string[][]): void

**Parameters**

- **element** (IStiElement)  
- **rows** (string[][])  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **content** | any |  |
| **content** | any |  |
| **content** | any |  |
| **rows** | any |  |
