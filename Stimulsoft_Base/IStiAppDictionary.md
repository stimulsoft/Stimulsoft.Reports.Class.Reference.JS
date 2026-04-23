---
title: "IStiAppDictionary Interface"
---

## IStiAppDictionary Interface

**Namespace:** `Stimulsoft.Base`

Describes the interface to access base data dictionary functionality.

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **closeConnections** | void | Closes all specified connections. Closes all connections if none of them is specified. |
| **existsUserFunction** | boolean |  |
| **fetchDataRelations** | IStiAppDataRelation[] | Returns an enumeration of the data relations from this dictionary. |
| **fetchDataSources** | IStiAppDataSource[] | Returns an enumeration of the data source from this dictionary. |
| **fetchVariables** | IStiAppVariable[] | Returns an enumeration of the variables from this dictionary. |
| **getApp** | IStiApp | Returns reference to the app which contains this dictionary. |
| **getColumnByName** | IStiAppDataColumn | Returns data column from the data dictionary by its name. |
| **getDataSourceByName** | IStiAppDataSource | Returns datasource from the data dictionary by its name. |
| **getSystemVariableValue** | any | Returns value of a specified system variable. |
| **getVariableByName** | IStiAppVariable | Returns variable from the data dictionary by its name. |
| **getVariableValueByName** | any | Returns a value from the variable by its name. |
| **invokeUserFunction** | any |  |
| **isReadOnlyVariable** | boolean | Returns true if a specified variable is a read-only variable. |
| **isSystemVariable** | boolean | Returns true if a specified name is a name of a system variable. |
| **openConnections** | IStiAppConnection[] | Opens specified connections to the data. Opens all connections if none of them is specified. |
| **openConnectionsAsync** | Promise<IStiAppConnection[]> | Opens specified connections to the data. Opens all connections if none of them is specified. |

---

### Method Details

#### closeConnections

**closeConnections**(**connections**: IStiAppConnection[]): void

Closes all specified connections. Closes all connections if none of them is specified.

**Parameters**

- **connections** (IStiAppConnection[])  


---

#### existsUserFunction

**existsUserFunction**(**functionName**: string): boolean

**Parameters**

- **functionName** (string)  

**Returns** boolean


---

#### fetchDataRelations

**fetchDataRelations**(): IStiAppDataRelation[]

Returns an enumeration of the data relations from this dictionary.

**Returns** IStiAppDataRelation[] — The enumeration of the data relations.


---

#### fetchDataSources

**fetchDataSources**(): IStiAppDataSource[]

Returns an enumeration of the data source from this dictionary.

**Returns** IStiAppDataSource[] — The enumeration of the data source.


---

#### fetchVariables

**fetchVariables**(): IStiAppVariable[]

Returns an enumeration of the variables from this dictionary.

**Returns** IStiAppVariable[] — The enumeration of the variables


---

#### getApp

**getApp**(): IStiApp

Returns reference to the app which contains this dictionary.

**Returns** IStiApp — A reference to the app.


---

#### getColumnByName

**getColumnByName**(**name**: string): IStiAppDataColumn

Returns data column from the data dictionary by its name.

**Parameters**

- **name** (string) — A name of the data column.  

**Returns** IStiAppDataColumn — The data column from the data dictionary. Returns null, if data column with specified name is not exists.


---

#### getDataSourceByName

**getDataSourceByName**(**name**: string): IStiAppDataSource

Returns datasource from the data dictionary by its name.

**Parameters**

- **name** (string) — A name of the datasource.  

**Returns** IStiAppDataSource — The datasource from the data dictionary. Returns null, if datasource with specified name is not exists.


---

#### getSystemVariableValue

**getSystemVariableValue**(**name**: string): any

Returns value of a specified system variable.

**Parameters**

- **name** (string) — A name of the system variable.  

**Returns** any — The value of the specified system variable.


---

#### getVariableByName

**getVariableByName**(**name**: string): IStiAppVariable

Returns variable from the data dictionary by its name.

**Parameters**

- **name** (string) — A name of the variable.  

**Returns** IStiAppVariable — The variable from the data dictionary. Returns null, if variable with specified name is not exists.


---

#### getVariableValueByName

**getVariableValueByName**(**name**: string): any

Returns a value from the variable by its name.

**Parameters**

- **name** (string) — A name of the variable.  

**Returns** any — A value which contains in the variable.


---

#### invokeUserFunction

**invokeUserFunction**(**functionName**: string, **args**: any[]): any

**Parameters**

- **functionName** (string)  
- **args** (any[])  

**Returns** any


---

#### isReadOnlyVariable

**isReadOnlyVariable**(**name**: string): boolean

Returns true if a specified variable is a read-only variable.

**Parameters**

- **name** (string) — The name of the variable.  

**Returns** boolean — True, if the specified variable is a read-only variable.


---

#### isSystemVariable

**isSystemVariable**(**name**: string): boolean

Returns true if a specified name is a name of a system variable.

**Parameters**

- **name** (string) — The name of the system variable.  

**Returns** boolean — True, if the specified name is the name of system variable.


---

#### openConnections

**openConnections**(**connections**: IStiAppConnection[]): IStiAppConnection[]

Opens specified connections to the data. Opens all connections if none of them is specified.

**Parameters**

- **connections** (IStiAppConnection[])  

**Returns** IStiAppConnection[]


---

#### openConnectionsAsync

**openConnectionsAsync**(**connections**: IStiAppConnection[]): Promise<IStiAppConnection[]>

Opens specified connections to the data. Opens all connections if none of them is specified.

**Parameters**

- **connections** (IStiAppConnection[])  

**Returns** Promise<IStiAppConnection[]>

