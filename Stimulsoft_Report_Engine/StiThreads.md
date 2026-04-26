---
title: "StiThreads Class"
---

## StiThreads Class

**Namespace:** `Stimulsoft.Report.Engine`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([StiEngine](StiEngine.md) engine) |  |

**constructor**(**engine**: [StiEngine](StiEngine.md))

**Parameters**

- **engine** ([StiEngine](StiEngine.md))  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **createContainerEngine** | [StiEngine](StiEngine.md) |  |
| **createContainerEngineAsync** | Promise<[StiEngine](StiEngine.md)> | Creates a new engine sample to output in the specified container. |
| **getDestinationContainer** | StiContainer |  |
| **getTemplateContainer** | StiContainer |  |
| **newPage** | void |  |
| **newPageAsync** | void | Prepares a new page to output a container. A new page is not always a page |
| **selectThreadFromContainer** | void |  |
| **selectThreadFromContainerAsync** | void | Sets the stream to output the specified component. If the stream does not exist then it is created. |

---

### Method Details

#### createContainerEngine

**createContainerEngine**(**destinationName**: string, **report**: [StiReport](../Stimulsoft_Report/StiReport.md), **masterEngine**: [StiEngine](StiEngine.md), **indexOfStartRenderedPages**: number): [StiEngine](StiEngine.md)

**Parameters**

- **destinationName** (string)  
- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **masterEngine** ([StiEngine](StiEngine.md))  
- **indexOfStartRenderedPages** (number)  

**Returns** [StiEngine](StiEngine.md)


---

#### createContainerEngineAsync

**createContainerEngineAsync**(**destinationName**: string, **report**: [StiReport](../Stimulsoft_Report/StiReport.md), **masterEngine**: [StiEngine](StiEngine.md), **indexOfStartRenderedPages**: number): Promise<[StiEngine](StiEngine.md)>

Creates a new engine sample to output in the specified container.

**Parameters**

- **destinationName** (string)  
- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  
- **masterEngine** ([StiEngine](StiEngine.md))  
- **indexOfStartRenderedPages** (number)  

**Returns** Promise<[StiEngine](StiEngine.md)>


---

#### getDestinationContainer

**getDestinationContainer**(): StiContainer

**Returns** StiContainer


---

#### getTemplateContainer

**getTemplateContainer**(**template**: StiContainer, **name**: string): StiContainer

**Parameters**

- **template** (StiContainer)  
- **name** (string)  

**Returns** StiContainer


---

#### newPage

**newPage**(): void


---

#### newPageAsync

**newPageAsync**(): void

Prepares a new page to output a container. A new page is not always a page


---

#### selectThreadFromContainer

**selectThreadFromContainer**(**container**: StiContainer): void

**Parameters**

- **container** (StiContainer)  


---

#### selectThreadFromContainerAsync

**selectThreadFromContainerAsync**(**container**: StiContainer): void

Sets the stream to output the specified component. If the stream does not exist then it is created.

**Parameters**

- **container** (StiContainer)  


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **containerEngine** | any |  |
| **containerEngine** | any |  |
| **currentColumn** | any |  |
| **currentPage** | any |  |
| **destinationName** | string |  |
| **engine** | [StiEngine](StiEngine.md) |  |
| **isActive** | any |  |
| **name** | any |  |
| **name** | any |  |
| **page** | any |  |
| **page** | any |  |
