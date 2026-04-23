---
title: "Stimulsoft.Data.Expressions.Antlr.Runtime.Misc Namespace"
---

## Stimulsoft.Data.Expressions.Antlr.Runtime.Misc Namespace

### Classes

| Name | Description |
| --- | --- |
| [Action](Action.md) |  |
| [FastQueue](FastQueue.md) | A queue that can dequeue and get(i) in O(1) and grow arbitrarily large. A linked list is fast at dequeue but slow at get(i). An array is the reverse. This is O(1) for both operations. List grows until you dequeue last element at end of buffer. Then it resets to start filling at 0 again. If adds/removes are balanced, the buffer will not grow too large. No iterator stuff as that's not how we'll use it. |
| [ListStack](ListStack.md) |  |
| [RegexOptionsHelper](RegexOptionsHelper.md) |  |
