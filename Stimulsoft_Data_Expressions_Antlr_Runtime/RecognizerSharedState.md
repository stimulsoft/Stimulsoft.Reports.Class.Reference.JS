---
title: "RecognizerSharedState Class"
---

## RecognizerSharedState Class

**Namespace:** `Stimulsoft.Data.Expressions.Antlr.Runtime`

The set of fields needed by an abstract recognizer to recognize input
 and recover from errors etc...  As a separate state object, it can be
 shared among multiple grammars; e.g., when one grammar imports another.
 These fields are publically visible but the actual state pointer per
 parser is protected.

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**() |  |

**constructor**()


### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **recognizerSharedState** `static` | [RecognizerSharedState](RecognizerSharedState.md) |  |

---

### Method Details

#### recognizerSharedState `static`

**recognizerSharedState**(**state**: [RecognizerSharedState](RecognizerSharedState.md)): [RecognizerSharedState](RecognizerSharedState.md)

**Parameters**

- **state** ([RecognizerSharedState](RecognizerSharedState.md))  

**Returns** [RecognizerSharedState](RecognizerSharedState.md)


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **_fsp** | number |  |
| **backtracking** | number | If 0, no backtracking is going on. Safe to exec actions etc... If >0 then it's the level of backtracking. |
| **channel** | number | The channel number for the current token |
| **errorRecovery** | boolean | This is true when we see an error and before having successfully matched a token. Prevents generation of more than one error message per error. |
| **failed** | boolean | In lieu of a return value, this indicates that a rule or token has failed to match. Reset to false upon valid token match. |
| **following** | [BitSet](BitSet.md)[] |  |
| **lastErrorIndex** | number | The index into the input stream where the last error occurred. This is used to prevent infinite loops where an error is found but no token is consumed during recovery...another error is found, ad naseum. This is a failsafe mechanism to guarantee that at least one token/tree node is consumed for two errors. |
| **ruleMemo** | Array<Dictionary<number, number>> | An array[size num rules] of dictionaries that tracks the stop token index for each rule. ruleMemo[ruleIndex] is the memoization table for ruleIndex. For key ruleStartIndex, you get back the stop token for associated rule or MEMO_RULE_FAILED. This is only used if rule memoization is on (which it is by default). |
| **syntaxErrors** | number | Did the recognizer encounter a syntax error? Track how many. |
| **text** | string | You can set the text for the current token to override what is in the input char buffer. Use setText() or can set this instance var. |
| **token** | [IToken](IToken.md) | The goal of all lexer rules/methods is to create a token object. This is an instance variable as multiple rules may collaborate to create a single token. nextToken will return this object after matching lexer rule(s). If you subclass to allow multiple token emissions, then set this to the last token to be matched or something nonnull so that the auto token emit mechanism will not emit another token. |
| **tokenStartCharIndex** | number | What character index in the stream did the current token start at? Needed, for example, to get the text for current token. Set at the start of nextToken. |
| **tokenStartCharPositionInLine** | number | The character position of first character within the line |
| **tokenStartLine** | number | The line on which the first character of the token resides |
| **type** | number | The token type for the current token |
