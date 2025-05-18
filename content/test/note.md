---
title: Title of the page
description: Description of the page used for link previews.
permalink: "note.md"
aliases: ["nnnn"]
tags: ["tag1", "tag2"]
draft: false
date: 2025-05-01
---


``` frontmatter
title: Title of the page
description: Description of the page used for link previews.
permalink: "note.md"
aliases: ["nnnn"]
tags: ["tag1", "tag2"]
tags:
    -tag1
    -tag2
draft: true
date: 2025-05-01
```
# Callout
> [!note]
---
> [!info]

> [!todo]
---
> [!abstract]

> [!summary]

> [!tldr]
---
> [!tip]

> [!hint]

> [!important]
---
> [!success]

> [!check]

> [!done]
---
> [!question]

> [!help]

> [!faq]
---
> [!warning]

> [!caution]

> [!attention]
---
> [!failure]

> [!fail]

> [!missing]
---
> [!danger]

> [!error]
---
> [!bug]
---
> [!example]
---
> [!quote]

> [!cite]

# AnuPpuccin task
- [ ] `Unchecked`  `- [ ]`
- [x] `Checked`  `- [x]`
- [-] `Cancelled` `- [-]`
- [>] `Rescheduled` `- [>]`
- [<] `Scheduled` `- [<]`
- [!] `Important` `- [!]`
- [/] `In Progress` `- [/]`
- [?] `Question` `- [?]`
- [*] `Star` `- [*]`
- [n] `Note` `- [n]`
- [l] `Location` `- [l]`
- [i] `Information` `- [i]`
- [I] `Idea` `- [I]`
- [S] `Amount` `- [S]`
- [p] `Pro` `- [p]`
- [c] `Con` `- [c]`
- [b] `Bookmark` `- [b]`
- ["] `Quote` `- ["]`
- [0] `Speech bubble 0`
- [1] `Speech bubble 1`
- [2] `Speech bubble 2`
- [3] `Speech bubble 3`
- [4] `Speech bubble 4`
- [5] `Speech bubble 5`
- [6] `Speech bubble 6`
- [7] `Speech bubble 7`
- [8] `Speech bubble 8`
- [9] `Speech bubble 9`

---



# This is a heading 1
## This is a heading 2
### This is a heading 3
#### This is a heading 4
##### This is a heading 5
###### This is a heading 6

| Style                  | Syntax                 | Example                                  | Output                                 |
| ---------------------- | ---------------------- | ---------------------------------------- | -------------------------------------- |
| Bold                   | `** **` or `__ __`     | `**Bold text**`                          | **Bold text**                          |
| Italic                 | `* *` or `_ _`         | `*Italic text*`                          | _Italic text_                          |
| Strikethrough          | `~~ ~~`                | `~~Striked out text~~`                   | ~~Striked out text~~                   |
| Highlight              | *== ==*                | *== Highlighted text ==*                 | ==Highlighted text==                   |
| Bold and nested italic | `** **` and `_ _`      | `**Bold text and _nested italic_ text**` | **Bold text and _nested italic_ text** |
| Bold and italic        | `*** ***` or `___ ___` | `***Bold and italic text***`             | **_Bold and italic text_**             |

> Quotes


- Wikilink: `[[file]]` [[- Guideline]]
- Markdown: `[name](file)`
1. First list item
	1. Ordered nested list item
2. Second list item
	- Unordered nested list item
---
- [ ] Task item 1
	- [ ] Subtask 1
- [ ] Task item 2
	- [ ] Subtask 1

```
***
****
* * *
---
----
- - -
___
____
_ _ _
```
---
`inline code`

```cpp
/* codeblock */

#include <iostream>

int main() {
    std::cout << "Hello World!";
    return 0;
}
```
---
This is a simple footnote[^1].[^1][^1]
[^2]
[^note]

```
This is a simple footnote[^1].[^1][^1]
[^2]
[^note]

[^1]: This is the referenced text.
[^2]: Add 2 spaces at the start of each new line.
  This lets you write footnotes that span multiple lines.
[^note]: Named footnotes still appear as numbers, but can make it easier to identify and link references.
```

You can also use inline footnotes. ^[This is an inline footnote.]
```
You can also use inline footnotes. ^[This is an inline footnote.]
```



[^1]: This is the referenced text.

[^2]:   Add 2 spaces at the start of each new line.
  This lets you write footnotes that span multiple lines.

[^note]: Named footnotes still appear as numbers, but can make it easier to identify and link references.


