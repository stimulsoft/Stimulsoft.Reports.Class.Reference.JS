---
title: "Parser Class"
---

## Parser Class

**Namespace:** `Stimulsoft.Blockly`

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **addBlock** | T |  |
| **addStandardBlocks** `static` | [Parser](Parser.md) |  |
| **addUserFunctionBlocks** | [Parser](Parser.md) |  |
| **parse** | [Workspace](../Stimulsoft_Blockly_Model/Workspace.md) |  |
| **parseBlock** | [IronBlock](../Stimulsoft_Blockly_Model/IronBlock.md) |  |
| **parseField** | void |  |
| **parseMutation** | void |  |
| **parseStatement** | void |  |
| **parseValue** | void |  |

---

### Method Details

#### addBlock

**addBlock**(**c**: { new(): T

**Parameters**

- **c** ({ new()  

**Returns** T


---

#### addStandardBlocks `static`

**addStandardBlocks**(**parser**: [Parser](Parser.md), **report**: [StiReport](../Stimulsoft_Report/StiReport.md)): [Parser](Parser.md)

**Parameters**

- **parser** ([Parser](Parser.md))  
- **report** ([StiReport](../Stimulsoft_Report/StiReport.md))  

**Returns** [Parser](Parser.md)


---

#### addUserFunctionBlocks

**addUserFunctionBlocks**(**userFunction**: [StiUserFunction](../Stimulsoft_Report_Dictionary/StiUserFunction.md)): [Parser](Parser.md)

**Parameters**

- **userFunction** ([StiUserFunction](../Stimulsoft_Report_Dictionary/StiUserFunction.md))  

**Returns** [Parser](Parser.md)


---

#### parse

**parse**(**xml**: string, **preserveWhitespace**: any): [Workspace](../Stimulsoft_Blockly_Model/Workspace.md)

**Parameters**

- **xml** (string)  
- **preserveWhitespace** (any)  

**Returns** [Workspace](../Stimulsoft_Blockly_Model/Workspace.md)


---

#### parseBlock

**parseBlock**(**node**: [XmlNode](../Stimulsoft_System_Xml/XmlNode.md)): [IronBlock](../Stimulsoft_Blockly_Model/IronBlock.md)

**Parameters**

- **node** ([XmlNode](../Stimulsoft_System_Xml/XmlNode.md))  

**Returns** [IronBlock](../Stimulsoft_Blockly_Model/IronBlock.md)


---

#### parseField

**parseField**(**fieldNode**: [XmlNode](../Stimulsoft_System_Xml/XmlNode.md), **block**: [IronBlock](../Stimulsoft_Blockly_Model/IronBlock.md)): void

**Parameters**

- **fieldNode** ([XmlNode](../Stimulsoft_System_Xml/XmlNode.md))  
- **block** ([IronBlock](../Stimulsoft_Blockly_Model/IronBlock.md))  


---

#### parseMutation

**parseMutation**(**mutationNode**: [XmlNode](../Stimulsoft_System_Xml/XmlNode.md), **block**: [IronBlock](../Stimulsoft_Blockly_Model/IronBlock.md)): void

**Parameters**

- **mutationNode** ([XmlNode](../Stimulsoft_System_Xml/XmlNode.md))  
- **block** ([IronBlock](../Stimulsoft_Blockly_Model/IronBlock.md))  


---

#### parseStatement

**parseStatement**(**statementNode**: [XmlNode](../Stimulsoft_System_Xml/XmlNode.md), **block**: [IronBlock](../Stimulsoft_Blockly_Model/IronBlock.md)): void

**Parameters**

- **statementNode** ([XmlNode](../Stimulsoft_System_Xml/XmlNode.md))  
- **block** ([IronBlock](../Stimulsoft_Blockly_Model/IronBlock.md))  


---

#### parseValue

**parseValue**(**valueNode**: [XmlNode](../Stimulsoft_System_Xml/XmlNode.md), **block**: [IronBlock](../Stimulsoft_Blockly_Model/IronBlock.md)): void

**Parameters**

- **valueNode** ([XmlNode](../Stimulsoft_System_Xml/XmlNode.md))  
- **block** ([IronBlock](../Stimulsoft_Blockly_Model/IronBlock.md))  

