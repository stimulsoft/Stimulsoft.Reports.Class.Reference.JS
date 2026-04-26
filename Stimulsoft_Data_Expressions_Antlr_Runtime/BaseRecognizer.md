---
title: "BaseRecognizer Class"
---

## BaseRecognizer Class

**Namespace:** `Stimulsoft.Data.Expressions.Antlr.Runtime`

A generic recognizer that can handle recognizers generated from
 lexer, parser, and tree grammars.  This is all the parsing
 support code essentially; most of it is error recovery stuff and
 backtracking.

### Constructors

| Constructor | Description |
| --- | --- |
| **constructor**([RecognizerSharedState](RecognizerSharedState.md) state) |  |

**constructor**(**state**: [RecognizerSharedState](RecognizerSharedState.md))

**Parameters**

- **state** ([RecognizerSharedState](RecognizerSharedState.md))  


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **backtrackingLevel** | number |  |
| **failed** | boolean | Return whether or not a backtracking attempt failed. |
| **numberOfSyntaxErrors** | number | Get number of recognition errors (lexer, parser, tree parser). Each recognizer tracks its own number. So parser and lexer each have separate count. Does not count the spurious errors found between an error and next valid token match <seealso cref="ReportError(RecognitionException)"/> |
| **sourceName** | string |  |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| **alreadyParsedRule** | boolean | Has this rule already parsed input at the current index in the input stream? Return the stop token index or MEMO_RULE_UNKNOWN. If we attempted but failed to parse properly before, return MEMO_RULE_FAILED. This method has a side-effect: if we have seen this input for this rule and successfully parsed before, then seek ahead to 1 past the stop token matched for this rule last time. |
| **beginResync** | void | A hook to listen in on the token consumption during error recovery. The DebugParser subclasses this to fire events to the listenter. |
| **combineFollows** | [BitSet](BitSet.md) | what is exact? it seems to only add sets from above on stack if EOR is in set i. When it sees a set w/o EOR, it stops adding. Why would we ever want them all? Maybe no viable alt instead of mismatched token? |
| **computeContextSensitiveRuleFOLLOW** | [BitSet](BitSet.md) | Compute the context-sensitive FOLLOW set for current rule. This is set of token types that can follow a specific rule reference given a specific call chain. You get the set of viable tokens that can possibly come next (lookahead depth 1) given the current call chain. Contrast this with the definition of plain FOLLOW for rule r: FOLLOW(r)={x \| S=>*alpha r beta in G and x in FIRST(beta)} where x in T* and alpha, beta in V*; T is set of terminals and V is the set of terminals and nonterminals. In other words, FOLLOW(r) is the set of all tokens that can possibly follow references to r in *any* sentential form (context). At runtime, however, we know precisely which context applies as we have the call chain. We may compute the exact (rather than covering superset) set of following tokens. For example, consider grammar: stat : ID '=' expr ';' // FOLLOW(stat)=={EOF} \| "return" expr '.' ; expr : atom ('+' atom)* ; // FOLLOW(expr)=={';','.',')'} atom : INT // FOLLOW(atom)=={'+',')',';','.'} \| '(' expr ')' ; The FOLLOW sets are all inclusive whereas context-sensitive FOLLOW sets are precisely what could follow a rule reference. For input input "i=(3);", here is the derivation: stat => ID '=' expr ';' => ID '=' atom ('+' atom)* ';' => ID '=' '(' expr ')' ('+' atom)* ';' => ID '=' '(' atom ')' ('+' atom)* ';' => ID '=' '(' INT ')' ('+' atom)* ';' => ID '=' '(' INT ')' ';' At the "3" token, you'd have a call chain of stat -> expr -> atom -> expr -> atom What can follow that specific nested ref to atom? Exactly ')' as you can see by looking at the derivation of this specific input. Contrast this with the FOLLOW(atom)={'+',')',';','.'}. You want the exact viable token set when recovering from a token mismatch. Upon token mismatch, if LA(1) is member of the viable next token set, then you know there is most likely a missing token in the input stream. "Insert" one by just not throwing an exception. |
| **computeErrorRecoverySet** | [BitSet](BitSet.md) | Compute the error recovery set for the current rule. During rule invocation, the parser pushes the set of tokens that can follow that rule reference on the stack; this amounts to computing FIRST of what follows the rule reference in the enclosing rule. This local follow set only includes tokens from within the rule; i.e., the FIRST computation done by ANTLR stops at the end of a rule. EXAMPLE When you find a "no viable alt exception", the input is not consistent with any of the alternatives for rule r. The best thing to do is to consume tokens until you see something that can legally follow a call to r *or* any rule that called r. You don't want the exact set of viable next tokens because the input might just be missing a token--you might consume the rest of the input looking for one of the missing tokens. Consider grammar: a : '[' b ']' \| '(' b ')' ; b : c '^' INT ; c : ID \| INT ; At each rule invocation, the set of tokens that could follow that rule is pushed on a stack. Here are the various "local" follow sets: FOLLOW(b1_in_a) = FIRST(']') = ']' FOLLOW(b2_in_a) = FIRST(')') = ')' FOLLOW(c_in_b) = FIRST('^') = '^' Upon erroneous input "[]", the call chain is a -> b -> c and, hence, the follow context stack is: depth local follow set after call to rule 0 <EOF> a (from main()) 1 ']' b 3 '^' c Notice that ')' is not included, because b would have to have been called from a different context in rule a for ')' to be included. For error recovery, we cannot consider FOLLOW(c) (context-sensitive or otherwise). We need the combined set of all context-sensitive FOLLOW sets--the set of all tokens that could follow any reference in the call chain. We need to resync to one of those tokens. Note that FOLLOW(c)='^' and if we resync'd to that token, we'd consume until EOF. We need to sync to context-sensitive FOLLOWs for a, b, and c: {']','^'}. In this case, for input "[]", LA(1) is in this set so we would not consume anything and after printing an error rule c would return normally. It would not find the required '^' though. At this point, it gets a mismatched token error and throws an exception (since LA(1) is not in the viable following token set). The rule exception handler tries to recover, but finds the same recovery set and doesn't consume anything. Rule b exits normally returning to rule a. Now it finds the ']' (and with the successful match exits errorRecovery mode). So, you cna see that the parser walks up call chain looking for the token that was a member of the recovery set. Errors are not generated in errorRecovery mode. ANTLR's error recovery mechanism is based upon original ideas: "Algorithms + Data Structures = Programs" by Niklaus Wirth and "A note on error recovery in recursive descent parsers": http://portal.acm.org/citation.cfm?id=947902.947905 Later, Josef Grosch had some good ideas: "Efficient and Comfortable Error Recovery in Recursive Descent Parsers": ftp://www.cocolab.com/products/cocktail/doca4.ps/ell.ps.zip Like Grosch I implemented local FOLLOW sets that are combined at run-time upon error to avoid overhead during parsing. |
| **consumeUntil** | void |  |
| **consumeUntil2** | void | Consume tokens until one matches the given token set |
| **emitErrorMessage** | void | Override this method to change where error messages go |
| **endResync** | void |  |
| **getCurrentInputSymbol** | any | Match needs to return the current input symbol, which gets put into the label for the associated token ref; e.g., x=ID. Token and tree parsers need to return different objects. Rather than test for input stream type or change the IntStream interface, I use a simple method to ask the recognizer to tell me what the current input symbol is. This is ignored for lexers. |
| **getErrorHeader** | string | What is the error header, normally line/character position information? |
| **getErrorMessage** | string | What error message should be generated for the various exception types? Not very object-oriented code, but I like having all error message generation within one method rather than spread among all of the exception classes. This also makes it much easier for the exception handling because the exception classes do not have to have pointers back to this object to access utility routines and so on. Also, changing the message for an exception type would be difficult because you would have to subclassing exception, but then somehow get ANTLR to make those kinds of exception objects instead of the default. This looks weird, but trust me--it makes the most sense in terms of flexibility. For grammar debugging, you will want to override this to add more information such as the stack frame with getRuleInvocationStack(e, this.getClass().getName()) and, for no viable alts, the decision description and this.state etc... Override this to change the message generated for one or more exception types. |
| **getRuleMemoization** | number | Given a rule number and a start token index number, return MEMO_RULE_UNKNOWN if the rule has not parsed input starting from start index. If this rule has parsed input starting from the start index before, then return where the rule stopped parsing. It returns the index of the last token matched by the rule. For now we use a hashtable and just the slow Object-based one. Later, we can make a special one for ints and also one that tosses out data after we commit past input position i. |
| **getRuleMemoizationCacheSize** | number | return how many rule/input-index pairs there are in total. TODO: this includes synpreds. :( |
| **getTokenErrorDisplay** | string | How should a token be displayed in an error message? The default is to display just the text, but during development you might want to have a lot of information spit out. Override in that case to use t.ToString() (which, for CommonToken, dumps everything about the token). This is better than forcing you to override a method in your token objects because you don't have to go modify your lexer so that it creates a new Java type. |
| **initDFAs** | void |  |
| **match** | any | Match current input symbol against ttype. Attempt single token insertion or deletion error recovery. If that fails, throw MismatchedTokenException. To turn off single token insertion or deletion error recovery, override recoverFromMismatchedToken() and have it throw an exception. See TreeParser.recoverFromMismatchedToken(). This way any error in a rule will cause an exception and immediate exit from rule. Rule would recover by resynchronizing to the set of symbols that can follow rule ref. |
| **matchAny** | void | Match the wildcard: in a symbol |
| **mismatchIsMissingToken** | boolean |  |
| **mismatchIsUnwantedToken** | boolean |  |
| **popFollow** | void |  |
| **pushFollow** | void | Push a rule's follow set using our own hardcoded stack |
| **recover** | void | Recover from an error found on the input stream. This is for NoViableAlt and mismatched symbol exceptions. If you enable single token insertion and deletion, this will usually not handle mismatched symbol exceptions but there could be a mismatched token that the match() routine could not recover from. |
| **recoverFromMismatchedToken** | any | Attempt to recover from a single missing or extra token. EXTRA TOKEN LA(1) is not what we are looking for. If LA(2) has the right token, however, then assume LA(1) is some extra spurious token. Delete it and LA(2) as if we were doing a normal match(), which advances the input. MISSING TOKEN If current token is consistent with what could come after ttype then it is ok to "insert" the missing token, else throw exception For example, Input "i=(3;" is clearly missing the ')'. When the parser returns from the nested call to expr, it will have call chain: stat -> expr -> atom and it will be trying to match the ')' at this point in the derivation: => ID '=' '(' INT ')' ('+' atom)* ';' ^ match() will see that ';' doesn't match ')' and report a mismatched token error. To recover, it sees that LA(1)==';' is in the set of tokens that can follow the ')' token reference in rule atom. It can assume that you forgot the ')'. |
| **reportError** | void | Report a recognition problem. This method sets errorRecovery to indicate the parser is recovering not parsing. Once in recovery mode, no errors are generated. To get out of recovery mode, the parser must successfully match a token (after a resync). So it will go: 1. error occurs 2. enter recovery mode, report error 3. consume until token found in resynch set 4. try to resume parsing 5. next match() will reset errorRecovery mode If you override, make sure to update syntaxErrors if you care about that. |
| **reset** | void | reset the parser's this.state; subclasses must rewinds the input stream |
| **setState** | void |  |
| **toStrings** | string[] | A convenience method for use most often with template rewrites. Convert a list of <see cref="IToken"/> to a list of <see cref="string"/>. |

---

### Method Details

#### alreadyParsedRule

**alreadyParsedRule**(**input**: [IIntStream](IIntStream.md), **ruleIndex**: number): boolean

Has this rule already parsed input at the current index in the
 input stream?  Return the stop token index or MEMO_RULE_UNKNOWN.
 If we attempted but failed to parse properly before, return
 MEMO_RULE_FAILED.
 This method has a side-effect: if we have seen this input for
 this rule and successfully parsed before, then seek ahead to
 1 past the stop token matched for this rule last time.

**Parameters**

- **input** ([IIntStream](IIntStream.md))  
- **ruleIndex** (number)  

**Returns** boolean


---

#### beginResync

**beginResync**(): void

A hook to listen in on the token consumption during error recovery.
 The DebugParser subclasses this to fire events to the listenter.


---

#### combineFollows

**combineFollows**(**exact**: boolean): [BitSet](BitSet.md)

what is exact? it seems to only add sets from above on stack
if EOR is in set i.  When it sees a set w/o EOR, it stops adding.
Why would we ever want them all?  Maybe no viable alt instead of
mismatched token?

**Parameters**

- **exact** (boolean)  

**Returns** [BitSet](BitSet.md)


---

#### computeContextSensitiveRuleFOLLOW

**computeContextSensitiveRuleFOLLOW**(): [BitSet](BitSet.md)

Compute the context-sensitive FOLLOW set for current rule.
 This is set of token types that can follow a specific rule
 reference given a specific call chain.  You get the set of
 viable tokens that can possibly come next (lookahead depth 1)
 given the current call chain.  Contrast this with the
 definition of plain FOLLOW for rule r:
  FOLLOW(r)={x | S=>*alpha r beta in G and x in FIRST(beta)}
 where x in T* and alpha, beta in V*; T is set of terminals and
 V is the set of terminals and nonterminals.  In other words,
 FOLLOW(r) is the set of all tokens that can possibly follow
 references to r in *any* sentential form (context).  At
 runtime, however, we know precisely which context applies as
 we have the call chain.  We may compute the exact (rather
 than covering superset) set of following tokens.
 For example, consider grammar:
 stat : ID '=' expr ';'      // FOLLOW(stat)=={EOF}
      | "return" expr '.'
      ;
 expr : atom ('+' atom)* ;   // FOLLOW(expr)=={';','.',')'}
 atom : INT                  // FOLLOW(atom)=={'+',')',';','.'}
      | '(' expr ')'
      ;
 The FOLLOW sets are all inclusive whereas context-sensitive
 FOLLOW sets are precisely what could follow a rule reference.
 For input input "i=(3);", here is the derivation:
 stat => ID '=' expr ';'
      => ID '=' atom ('+' atom)* ';'
      => ID '=' '(' expr ')' ('+' atom)* ';'
      => ID '=' '(' atom ')' ('+' atom)* ';'
      => ID '=' '(' INT ')' ('+' atom)* ';'
      => ID '=' '(' INT ')' ';'
 At the "3" token, you'd have a call chain of
   stat -> expr -> atom -> expr -> atom
 What can follow that specific nested ref to atom?  Exactly ')'
 as you can see by looking at the derivation of this specific
 input.  Contrast this with the FOLLOW(atom)={'+',')',';','.'}.
 You want the exact viable token set when recovering from a
 token mismatch.  Upon token mismatch, if LA(1) is member of
 the viable next token set, then you know there is most likely
 a missing token in the input stream.  "Insert" one by just not
 throwing an exception.

**Returns** [BitSet](BitSet.md)


---

#### computeErrorRecoverySet

**computeErrorRecoverySet**(): [BitSet](BitSet.md)

Compute the error recovery set for the current rule.  During
 rule invocation, the parser pushes the set of tokens that can
 follow that rule reference on the stack; this amounts to
 computing FIRST of what follows the rule reference in the
 enclosing rule. This local follow set only includes tokens
 from within the rule; i.e., the FIRST computation done by
 ANTLR stops at the end of a rule.
 EXAMPLE
 When you find a "no viable alt exception", the input is not
 consistent with any of the alternatives for rule r.  The best
 thing to do is to consume tokens until you see something that
 can legally follow a call to r *or* any rule that called r.
 You don't want the exact set of viable next tokens because the
 input might just be missing a token--you might consume the
 rest of the input looking for one of the missing tokens.
 Consider grammar:
 a : '[' b ']'
   | '(' b ')'
   ;
 b : c '^' INT ;
 c : ID
   | INT
   ;
 At each rule invocation, the set of tokens that could follow
 that rule is pushed on a stack.  Here are the various "local"
 follow sets:
 FOLLOW(b1_in_a) = FIRST(']') = ']'
 FOLLOW(b2_in_a) = FIRST(')') = ')'
 FOLLOW(c_in_b) = FIRST('^') = '^'
 Upon erroneous input "[]", the call chain is
 a -> b -> c
 and, hence, the follow context stack is:
 depth  local follow set     after call to rule
   0         <EOF>                    a (from main())
   1          ']'                     b
   3          '^'                     c
 Notice that ')' is not included, because b would have to have
 been called from a different context in rule a for ')' to be
 included.
 For error recovery, we cannot consider FOLLOW(c)
 (context-sensitive or otherwise).  We need the combined set of
 all context-sensitive FOLLOW sets--the set of all tokens that
 could follow any reference in the call chain.  We need to
 resync to one of those tokens.  Note that FOLLOW(c)='^' and if
 we resync'd to that token, we'd consume until EOF.  We need to
 sync to context-sensitive FOLLOWs for a, b, and c: {']','^'}.
 In this case, for input "[]", LA(1) is in this set so we would
 not consume anything and after printing an error rule c would
 return normally.  It would not find the required '^' though.
 At this point, it gets a mismatched token error and throws an
 exception (since LA(1) is not in the viable following token
 set).  The rule exception handler tries to recover, but finds
 the same recovery set and doesn't consume anything.  Rule b
 exits normally returning to rule a.  Now it finds the ']' (and
 with the successful match exits errorRecovery mode).
 So, you cna see that the parser walks up call chain looking
 for the token that was a member of the recovery set.
 Errors are not generated in errorRecovery mode.
 ANTLR's error recovery mechanism is based upon original ideas:
 "Algorithms + Data Structures = Programs" by Niklaus Wirth
 and
 "A note on error recovery in recursive descent parsers":
 http://portal.acm.org/citation.cfm?id=947902.947905
 Later, Josef Grosch had some good ideas:
 "Efficient and Comfortable Error Recovery in Recursive Descent
 Parsers":
 ftp://www.cocolab.com/products/cocktail/doca4.ps/ell.ps.zip
 Like Grosch I implemented local FOLLOW sets that are combined
 at run-time upon error to avoid overhead during parsing.

**Returns** [BitSet](BitSet.md)


---

#### consumeUntil

**consumeUntil**(**input**: [IIntStream](IIntStream.md), **tokenType**: number): void

**Parameters**

- **input** ([IIntStream](IIntStream.md))  
- **tokenType** (number)  


---

#### consumeUntil2

**consumeUntil2**(**input**: [IIntStream](IIntStream.md), **set**: [BitSet](BitSet.md)): void

Consume tokens until one matches the given token set

**Parameters**

- **input** ([IIntStream](IIntStream.md))  
- **set** ([BitSet](BitSet.md))  


---

#### emitErrorMessage

**emitErrorMessage**(**msg**: string): void

Override this method to change where error messages go

**Parameters**

- **msg** (string)  


---

#### endResync

**endResync**(): void


---

#### getCurrentInputSymbol

**getCurrentInputSymbol**(**input**: [IIntStream](IIntStream.md)): any

Match needs to return the current input symbol, which gets put
 into the label for the associated token ref; e.g., x=ID.  Token
 and tree parsers need to return different objects. Rather than test
 for input stream type or change the IntStream interface, I use
 a simple method to ask the recognizer to tell me what the current
 input symbol is.
 This is ignored for lexers.

**Parameters**

- **input** ([IIntStream](IIntStream.md))  

**Returns** any


---

#### getErrorHeader

**getErrorHeader**(**e**: RecognitionException): string

What is the error header, normally line/character position information?

**Parameters**

- **e** (RecognitionException)  

**Returns** string


---

#### getErrorMessage

**getErrorMessage**(**e**: RecognitionException, **tokenNames**: string[]): string

What error message should be generated for the various exception types?
 Not very object-oriented code, but I like having all error message
 generation within one method rather than spread among all of the
 exception classes. This also makes it much easier for the exception
 handling because the exception classes do not have to have pointers back
 to this object to access utility routines and so on. Also, changing
 the message for an exception type would be difficult because you
 would have to subclassing exception, but then somehow get ANTLR
 to make those kinds of exception objects instead of the default.
 This looks weird, but trust me--it makes the most sense in terms
 of flexibility.
 For grammar debugging, you will want to override this to add
 more information such as the stack frame with
 getRuleInvocationStack(e, this.getClass().getName()) and,
 for no viable alts, the decision description and this.state etc...
 Override this to change the message generated for one or more
 exception types.

**Parameters**

- **e** (RecognitionException)  
- **tokenNames** (string[])  

**Returns** string


---

#### getRuleMemoization

**getRuleMemoization**(**ruleIndex**: number, **ruleStartIndex**: number): number

Given a rule number and a start token index number, return
 MEMO_RULE_UNKNOWN if the rule has not parsed input starting from
 start index.  If this rule has parsed input starting from the
 start index before, then return where the rule stopped parsing.
 It returns the index of the last token matched by the rule.
 For now we use a hashtable and just the slow Object-based one.
 Later, we can make a special one for ints and also one that
 tosses out data after we commit past input position i.

**Parameters**

- **ruleIndex** (number)  
- **ruleStartIndex** (number)  

**Returns** number


---

#### getRuleMemoizationCacheSize

**getRuleMemoizationCacheSize**(): number

return how many rule/input-index pairs there are in total.
 TODO: this includes synpreds. :(

**Returns** number


---

#### getTokenErrorDisplay

**getTokenErrorDisplay**(**t**: [IToken](IToken.md)): string

How should a token be displayed in an error message? The default
 is to display just the text, but during development you might
 want to have a lot of information spit out.  Override in that case
 to use t.ToString() (which, for CommonToken, dumps everything about
 the token). This is better than forcing you to override a method in
 your token objects because you don't have to go modify your lexer
 so that it creates a new Java type.

**Parameters**

- **t** ([IToken](IToken.md))  

**Returns** string


---

#### initDFAs

**initDFAs**(): void


---

#### match

**match**(**input**: [IIntStream](IIntStream.md), **ttype**: number, **follow**: [BitSet](BitSet.md)): any

Match current input symbol against ttype.  Attempt
 single token insertion or deletion error recovery.  If
 that fails, throw MismatchedTokenException.
 To turn off single token insertion or deletion error
 recovery, override recoverFromMismatchedToken() and have it
 throw an exception. See TreeParser.recoverFromMismatchedToken().
 This way any error in a rule will cause an exception and
 immediate exit from rule.  Rule would recover by resynchronizing
 to the set of symbols that can follow rule ref.

**Parameters**

- **input** ([IIntStream](IIntStream.md))  
- **ttype** (number)  
- **follow** ([BitSet](BitSet.md))  

**Returns** any


---

#### matchAny

**matchAny**(**input**: [IIntStream](IIntStream.md)): void

Match the wildcard: in a symbol

**Parameters**

- **input** ([IIntStream](IIntStream.md))  


---

#### mismatchIsMissingToken

**mismatchIsMissingToken**(**input**: [IIntStream](IIntStream.md), **follow**: [BitSet](BitSet.md)): boolean

**Parameters**

- **input** ([IIntStream](IIntStream.md))  
- **follow** ([BitSet](BitSet.md))  

**Returns** boolean


---

#### mismatchIsUnwantedToken

**mismatchIsUnwantedToken**(**input**: [IIntStream](IIntStream.md), **ttype**: number): boolean

**Parameters**

- **input** ([IIntStream](IIntStream.md))  
- **ttype** (number)  

**Returns** boolean


---

#### popFollow

**popFollow**(): void


---

#### pushFollow

**pushFollow**(**fset**: [BitSet](BitSet.md)): void

Push a rule's follow set using our own hardcoded stack

**Parameters**

- **fset** ([BitSet](BitSet.md))  


---

#### recover

**recover**(**input**: [IIntStream](IIntStream.md), **re**: RecognitionException): void

Recover from an error found on the input stream.  This is
 for NoViableAlt and mismatched symbol exceptions.  If you enable
 single token insertion and deletion, this will usually not
 handle mismatched symbol exceptions but there could be a mismatched
 token that the match() routine could not recover from.

**Parameters**

- **input** ([IIntStream](IIntStream.md))  
- **re** (RecognitionException)  


---

#### recoverFromMismatchedToken

**recoverFromMismatchedToken**(**input**: [IIntStream](IIntStream.md), **ttype**: number, **follow**: [BitSet](BitSet.md)): any

Attempt to recover from a single missing or extra token.
 EXTRA TOKEN
 LA(1) is not what we are looking for.  If LA(2) has the right token,
 however, then assume LA(1) is some extra spurious token.  Delete it
 and LA(2) as if we were doing a normal match(), which advances the
 input.
 MISSING TOKEN
 If current token is consistent with what could come after
 ttype then it is ok to "insert" the missing token, else throw
 exception For example, Input "i=(3;" is clearly missing the
 ')'.  When the parser returns from the nested call to expr, it
 will have call chain:
   stat -> expr -> atom
 and it will be trying to match the ')' at this point in the
 derivation:
      => ID '=' '(' INT ')' ('+' atom)* ';'
                         ^
 match() will see that ';' doesn't match ')' and report a
 mismatched token error.  To recover, it sees that LA(1)==';'
 is in the set of tokens that can follow the ')' token
 reference in rule atom.  It can assume that you forgot the ')'.

**Parameters**

- **input** ([IIntStream](IIntStream.md))  
- **ttype** (number)  
- **follow** ([BitSet](BitSet.md))  

**Returns** any


---

#### reportError

**reportError**(**e**: RecognitionException): void

Report a recognition problem.
 This method sets errorRecovery to indicate the parser is recovering
 not parsing.  Once in recovery mode, no errors are generated.
 To get out of recovery mode, the parser must successfully match
 a token (after a resync).  So it will go:
		1. error occurs
		2. enter recovery mode, report error
		3. consume until token found in resynch set
		4. try to resume parsing
		5. next match() will reset errorRecovery mode
 If you override, make sure to update syntaxErrors if you care about that.

**Parameters**

- **e** (RecognitionException)  


---

#### reset

**reset**(): void

reset the parser's this.state; subclasses must rewinds the input stream


---

#### setState

**setState**(**value**: [RecognizerSharedState](RecognizerSharedState.md)): void

**Parameters**

- **value** ([RecognizerSharedState](RecognizerSharedState.md))  


---

#### toStrings

**toStrings**(**tokens**: [IToken](IToken.md)[]): string[]

A convenience method for use most often with template rewrites.
 Convert a list of <see cref="IToken"/> to a list of <see cref="string"/>.

**Parameters**

- **tokens** ([IToken](IToken.md)[])  

**Returns** string[]


### Fields

| Field | Type | Description |
| --- | --- | --- |
| **defaultTokenChannel** | any |  |
| **e** | RecognitionException) |  |
| **e** | any |  |
| **e** | any |  |
| **e** | any |  |
| **follow** | any |  |
| **grammarFileName** | string | For debugging and other purposes, might want the grammar name. Have ANTLR generate an implementation for this method. |
| **hidden** | any |  |
| **matchedSymbol** | any |  |
| **memoRuleFailed** | any |  |
| **memoRuleUnknown** | any |  |
| **msg** | any |  |
| **msg** | any |  |
| **msg** | any |  |
| **msg** | any |  |
| **msg** | any |  |
| **msg** | any |  |
| **msg** | any |  |
| **msg** | any |  |
| **msg** | any |  |
| **nextTokenRuleName** | any |  |
| **ruleStartIndex** | number) |  |
| **s** | any |  |
| **s** | any |  |
| **s** | any |  |
| **s** | any |  |
| **s** | any |  |
| **state** | [RecognizerSharedState](RecognizerSharedState.md) | State of a lexer, parser, or tree parser are collected into a this.state object so the this.state can be shared. This sharing is needed to have one grammar import others and share same error variables and other this.state variables. It's a kind of explicit multiple inheritance via delegation of methods and shared this.state. |
| **state** | any |  |
| **tokenName** | any |  |
| **tokenName** | any |  |
| **tokenName** | any |  |
| **tokenName** | any |  |
| **tokenName** | any |  |
| **tokenName** | any |  |
| **tokenName** | any |  |
| **tokenName** | any |  |
| **tokenNames** | string[] | Used to print out token names like ID during debugging and error reporting. The generated parsers implement a method that overrides this to point to their String[] tokenNames. |
| **ttype** | any |  |
| **ttype** | any |  |
