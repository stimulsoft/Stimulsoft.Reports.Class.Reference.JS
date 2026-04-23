---
title: "StiPromise<T> Class"
---

## StiPromise<T> Class

**Namespace:** `Stimulsoft.System`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**() |  |

**constructor**()


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **abort** | [StiPromise](StiPromise.md)<T> |  |
| **callCatch** | [StiPromise](StiPromise.md)<T> |  |
| **callTimeout** | void |  |
| **callTry** | [StiPromise](StiPromise.md)<T> |  |
| **clearTimeout** *(+2 overloads)* | void |  |
| **lock** `static` | void |  |
| **onAbort** | void |  |
| **onBehindFunction** | void |  |
| **promise** | Promise<T> |  |
| **timeout** | [StiPromise](StiPromise.md)<T> |  |
| **unlock** `static` | void |  |

---

### Method Details

#### abort

**abort**(**previusPromise**: [StiPromise](StiPromise.md)<any>): [StiPromise](StiPromise.md)<T>

**Parameters**

- **previusPromise** ([StiPromise](StiPromise.md)<any>)  

**Returns** [StiPromise](StiPromise.md)<T>


---

#### callCatch

**callCatch**(**catchArgument**: any): [StiPromise](StiPromise.md)<T>

**Parameters**

- **catchArgument** (any)  

**Returns** [StiPromise](StiPromise.md)<T>


---

#### callTimeout

**callTimeout**(): void


---

#### callTry

**callTry**(**returnValue**: T): [StiPromise](StiPromise.md)<T>

**Parameters**

- **returnValue** (T)  

**Returns** [StiPromise](StiPromise.md)<T>


---

#### clearTimeout

**clearTimeout**(): void

---

**clearTimeout**(): void

---

**clearTimeout**(): void


---

#### lock `static`

**lock**(**lockObject**: any): void

**Parameters**

- **lockObject** (any)  


---

#### onAbort

**onAbort**(**abortFunction**: Function): void

**Parameters**

- **abortFunction** (Function)  


---

#### onBehindFunction

**onBehindFunction**(**behindFunction**: Function): void

**Parameters**

- **behindFunction** (Function)  


---

#### promise

**promise**(): Promise<T>

**Returns** Promise<T>


---

#### timeout

**timeout**(**timeout**: number): [StiPromise](StiPromise.md)<T>

**Parameters**

- **timeout** (number)  

**Returns** [StiPromise](StiPromise.md)<T>


---

#### unlock `static`

**unlock**(**lockObject**: any): void

**Parameters**

- **lockObject** (any)  

