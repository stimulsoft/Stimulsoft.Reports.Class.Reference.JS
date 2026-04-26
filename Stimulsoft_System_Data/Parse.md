---
title: "Parse Class"
---

## Parse Class

**Namespace:** `Stimulsoft.System.Data`

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**(string text) |  |

**constructor**(**text**: string)

**Parameters**

- **text** (string)  


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **getTokenPrecedence** | number |  |
| **parseArgs** | [ExprAST](ExprAST.md)[] |  |
| **parseBinOpRHS** | [ExprAST](ExprAST.md) |  |
| **parseExpression** | [ExprAST](ExprAST.md) |  |
| **parseIdentifierExpr** | [ExprAST](ExprAST.md) |  |
| **parseParenExpr** | [ExprAST](ExprAST.md) |  |
| **parsePrimary** | [ExprAST](ExprAST.md) |  |

---

### Method Details

#### getTokenPrecedence

**getTokenPrecedence**(): number

**Returns** number


---

#### parseArgs

**parseArgs**(): [ExprAST](ExprAST.md)[]

**Returns** [ExprAST](ExprAST.md)[]


---

#### parseBinOpRHS

**parseBinOpRHS**(**exprPrecedence**: number, **lhs**: [ExprAST](ExprAST.md)): [ExprAST](ExprAST.md)

**Parameters**

- **exprPrecedence** (number)  
- **lhs** ([ExprAST](ExprAST.md))  

**Returns** [ExprAST](ExprAST.md)


---

#### parseExpression

**parseExpression**(): [ExprAST](ExprAST.md)

**Returns** [ExprAST](ExprAST.md)


---

#### parseIdentifierExpr

**parseIdentifierExpr**(): [ExprAST](ExprAST.md)

**Returns** [ExprAST](ExprAST.md)


---

#### parseParenExpr

**parseParenExpr**(): [ExprAST](ExprAST.md)

**Returns** [ExprAST](ExprAST.md)


---

#### parsePrimary

**parsePrimary**(): [ExprAST](ExprAST.md)

**Returns** [ExprAST](ExprAST.md)


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **args** | any |  |
| **lhs** | any |  |
| **rhs** | any |  |
| **rhs** | any |  |
| **rhs** | any |  |
