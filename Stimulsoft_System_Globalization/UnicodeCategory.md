---
title: "UnicodeCategory Enum"
---

## UnicodeCategory Enum

**Namespace:** `Stimulsoft.System.Globalization`

### Members

| Member | Value | Description |
| --- | --- | --- |
| **UppercaseLetter** | 0 | Uppercase letter. Signified by the Unicode designation "Lu" (letter, uppercase). The value is 0. |
| **LowercaseLetter** | 1 | Lowercase letter. Signified by the Unicode designation "Ll" (letter, lowercase). The value is 1. |
| **TitlecaseLetter** | 2 | Titlecase letter. Signified by the Unicode designation "Lt" (letter, titlecase). The value is 2. |
| **ModifierLetter** | 3 | Modifier letter character, which is free-standing spacing character that indicates modifications of a preceding letter. Signified by the Unicode designation "Lm" (letter, modifier). The value is 3. |
| **OtherLetter** | 4 | Letter that is not an uppercase letter, a lowercase letter, a titlecase letter, or a modifier letter. Signified by the Unicode designation "Lo" (letter, other). The value is 4. |
| **NonSpacingMark** | 5 | Nonspacing character that indicates modifications of a base character. Signified by the Unicode designation "Mn" (mark, nonspacing). The value is 5. |
| **SpacingCombiningMark** | 6 | Spacing character that indicates modifications of a base character and affects the width of the glyph for that base character. Signified by the Unicode designation "Mc" (mark, spacing combining). The value is 6. |
| **EnclosingMark** | 7 | Enclosing mark character, which is a nonspacing combining character that surrounds all previous characters up to and including a base character. Signified by the Unicode designation "Me" (mark, enclosing). The value is 7. |
| **DecimalDigitNumber** | 8 | Decimal digit character, that is, a character in the range 0 through 9. Signified by the Unicode designation "Nd" (number, decimal digit). The value is 8. |
| **LetterNumber** | 9 | Number represented by a letter, instead of a decimal digit, for example, the Roman numeral for five, which is "V". The indicator is signified by the Unicode designation "Nl" (number, letter). The value is 9. |
| **OtherNumber** | 10 | Number that is neither a decimal digit nor a letter number, for example, the fraction 1/2. The indicator is signified by the Unicode designation "No" (number, other). The value is 10. |
| **SpaceSeparator** | 11 | Space character, which has no glyph but is not a control or format character. Signified by the Unicode designation "Zs" (separator, space). The value is 11. |
| **LineSeparator** | 12 | Character that is used to separate lines of text. Signified by the Unicode designation "Zl" (separator, line). The value is 12. |
| **ParagraphSeparator** | 13 | Character used to separate paragraphs. Signified by the Unicode designation "Zp" (separator, paragraph). The value is 13. |
| **Control** | 14 | Control code character, with a Unicode value of U+007F or in the range U+0000 through U+001F or U+0080 through U+009F. Signified by the Unicode designation "Cc" (other, control). The value is 14. |
| **Format** | 15 | Format character that affects the layout of text or the operation of text processes, but is not normally rendered. Signified by the Unicode designation "Cf" (other, format). The value is 15. |
| **Surrogate** | 16 | High surrogate or a low surrogate character. Surrogate code values are in the range U+D800 through U+DFFF. Signified by the Unicode designation "Cs" (other, surrogate). The value is 16. |
| **PrivateUse** | 17 | Private-use character, with a Unicode value in the range U+E000 through U+F8FF. Signified by the Unicode designation "Co" (other, private use). The value is 17. |
| **ConnectorPunctuation** | 18 | Connector punctuation character that connects two characters. Signified by the Unicode designation "Pc" (punctuation, connector). The value is 18. |
| **DashPunctuation** | 19 | Dash or hyphen character. Signified by the Unicode designation "Pd" (punctuation, dash). The value is 19. |
| **OpenPunctuation** | 20 | Opening character of one of the paired punctuation marks, such as parentheses, square brackets, and braces. Signified by the Unicode designation "Ps" (punctuation, open). The value is 20. |
| **ClosePunctuation** | 21 | Closing character of one of the paired punctuation marks, such as parentheses, square brackets, and braces. Signified by the Unicode designation "Pe" (punctuation, close). The value is 21. |
| **InitialQuotePunctuation** | 22 | Opening or initial quotation mark character. Signified by the Unicode designation "Pi" (punctuation, initial quote). The value is 22. |
| **FinalQuotePunctuation** | 23 | Closing or final quotation mark character. Signified by the Unicode designation "Pf" (punctuation, final quote). The value is 23. |
| **OtherPunctuation** | 24 | Punctuation character that is not a connector, a dash, open punctuation, close punctuation, an initial quote, or a final quote. Signified by the Unicode designation "Po" (punctuation, other). The value is 24. |
| **MathSymbol** | 25 | Mathematical symbol character, such as "+" or "= ". Signified by the Unicode designation "Sm" (symbol, math). The value is 25. |
| **CurrencySymbol** | 26 | Currency symbol character. Signified by the Unicode designation "Sc" (symbol, currency). The value is 26. |
| **ModifierSymbol** | 27 | Modifier symbol character, which indicates modifications of surrounding characters. For example, the fraction slash indicates that the number to the left is the numerator and the number to the right is the denominator. The indicator is signified by the Unicode designation "Sk" (symbol, modifier). The value is 27. |
| **OtherSymbol** | 28 | Symbol character that is not a mathematical symbol, a currency symbol or a modifier symbol. Signified by the Unicode designation "So" (symbol, other). The value is 28. |
| **OtherNotAssigned** | 29 | Character that is not assigned to any Unicode category. Signified by the Unicode designation "Cn" (other, not assigned). The value is 29. |
