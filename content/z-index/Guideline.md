---
description: 
created: 2023-12-01
modified: 2025-06-02
status:
  - 🗺️
tags:
  - guideline
title: "- Guideline"
comments: "false"
draft: "false"
aliases:
  - "- Guideline"
markmap: "colorFreezeLevel: 4"
---



# Workflow
- [[Workflow of My Note Taking]]
- [[Workflow of GTD]]
- [[Workflow of PARA]]
- [[Workflow of Zettelkasten]]

# Frontmatter
* status : 진행 상황
	* ✨ - backlog
	* 🚧 - wip
	* ☎️ - call
	* ✉️ - mail[]()
	* 🔍 - search
	* ⏳ - wait
	* 🚫 - cancelled
	* ⏸️ - pause
	* ✅ - done
	* 🗺️ - MOC

* note-type : 노트 종류
	* template
	* daily note
	* weekly note
	* monthly note
	* yearly note
	* ...

* ~~note-level~~ : 노트 요약 정도 -> (Z) ZettelKasten 폴더 하위로 이동
	* raw - (0) Zettel 📎/
	* **bold** - (1) Fleeting 🖋️/
	* ==highlight== - (2) Literature 🖍️/
	* summary - (3) Permanent 📌/

- note-stages : 노트 단계 정도 -> #stage 하위로 통합
	- facts / evidence notes #stage/facts
		- 정보 노트
	- opinions / analysis notes #stage/opinions 
		- 정보를 취합한 의견, 생각 정리 노트
	- Arguments / Conclusion notes #stage/arguments
		- 의견을 조합하여, 주장이나 논리를 전개한 노트
		- 5W1H 로 작성
	- MOC notes `#moc`
		- 종합된 노트
		- 인덱스 정리
	
* ~~contents-from~~ : 내용 출처 -> tags: #format 하위로 통합
	* 🧾 - manual #format/manual
	* 📚 - book #format/book #format/pdf #format/ebook
	* 📜 - thesis #format/pdf #format/paper
	* 📰 - article #format/article
	* 🎥 - video #format/video
	* 💡 - idea,  question #format/idea #format/question

* ~~field~~ : 내용 분야 -> tags : #field 하위로 통합
	* language #field/language 
	* philosophy #field/philosophy 
	* math #field/math
	* science #field/science
	* computer #field/computer 
	* ...

* category : 파일 분야
	* people
	* ...

# Quartz Frontmatter
``` frontmatter
title: Title of the page
description: Description of the page used for link previews.
date: 2025-05-01
permalink: "note.md"
aliases: ["nnnn"]
tags: ["tag1", "tag2"]
tags:
    -tag1
    -tag2
comments: false
draft: true
```


# This is a heading 1 
## This is a heading 2 
### This is a heading 3 
#### This is a heading 4 
##### This is a heading 5 
###### This is a heading 6

# Supported Markdown extensions

## Syntax
| Syntax          | Description                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `[[Link]]`      | [Internal links](https://help.obsidian.md/Linking+notes+and+files/Internal+links)                                         |
| `![[Link]]`     | [Embedding files](https://help.obsidian.md/Linking+notes+and+files/Embedding+files)                                       |
| `![[Link#^id]]` | [Block references](https://help.obsidian.md/Linking+notes+and+files/Internal+links#Link%20to%20a%20block%20in%20a%20note) |
| `^id`           | [Defining a block](https://help.obsidian.md/Linking+notes+and+files/Internal+links#Link%20to%20a%20block%20in%20a%20note) |
| `%%`            | [Comments](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax#Comments)                              |
| `<!-- \n -->`   | [Comments](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax#Comments)                              |
| `~~`            | [Strikethroughs](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax#Styling%20text)                  |
| ==              | [Highlights](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax#Styling%20text)                      |
| `**`            | Bold                                                                                                                      |
| `*`             | Italic                                                                                                                    |
| ` ``` `         | [Code blocks](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax#Code%20blocks)                      |
| `- [ ]`         | [Incomplete task](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax#Task%20lists)                   |
| `- [x]`         | [Completed task](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax#Task%20lists)                    |
| `> [!note]`     | [Callouts](https://help.obsidian.md/Editing+and+formatting/Callouts)                                                      |
| (see link)      | [Tables](https://help.obsidian.md/Editing+and+formatting/Advanced+formatting+syntax#Tables)                               |

## Inline search query
```query
task-todo: ee4
path: "@ Projects"
```

## Bold, italics, highlights

| Style                  | Syntax                 | Example                                  | Output                                 |
| ---------------------- | ---------------------- | ---------------------------------------- | -------------------------------------- |
| Bold                   | `** **` or `__ __`     | `**Bold text**`                          | **Bold text**                          |
| Italic                 | `* *` or `_ _`         | `*Italic text*`                          | _Italic text_                          |
| Strikethrough          | `~~ ~~`                | `~~Striked out text~~`                   | ~~Striked out text~~                   |
| Highlight              | *== ==*                | *== Highlighted text ==*                 | ==Highlighted text==                   |
| Bold and nested italic | `** **` and `_ _`      | `**Bold text and _nested italic_ text**` | **Bold text and _nested italic_ text** |
| Bold and italic        | `*** ***` or `___ ___` | `***Bold and italic text***`             | **_Bold and italic text_**             |


## Links
- Wikilink: `[[file]]`
	- [[- Guideline]]
	- [[- Guideline#iframe]]
- Markdown: `[name](file)` 

## Quotes
- > Quotes arsoietn arstein arsotien arsotien arsoietn arsotienarst arsn arosietnars toaiersnt arsotien arsotienrast arsoitne arsotien arsotienarsotien arsotienarstoien arst arsoientaroiensratoien arsotienarstoien asrotienarsotien arstoienarstoien
> test

## Lists
1. First list item 
	1. Ordered nested list item 
2. Second list item 
	- Unordered nested list item

## Task lists
- [ ] Task item 1
	- [ ] Subtask 1
- [ ] Task item 2
	- [ ] Subtask 1

## Horizontal rule
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

## Code
### Inline code
- `inline code`

### block code
```cpp
/* codeblock */

#include <iostream>

int main() {
    std::cout << "Hello World!";
    return 0;
}
```

## Footnotes
- This is a simple footnote[^1].[^1][^1]
[^2]
[^note]
- 
	```
	This is a simple footnote[^1].[^1][^1]
	[^2]
	[^note]
	
	[^1]: This is the referenced text. 
	[^2]: Add 2 spaces at the start of each new line. 
	  This lets you write footnotes that span multiple lines.
	[^note]: Named footnotes still appear as numbers, but can make it easier to identify and link references.
	```

- You can also use inline footnotes. ^[This is an inline footnote.]
- 
	```
	You can also use inline footnotes. ^[This is an inline footnote.]
	```

[^1]: This is the referenced text. 

[^2]:   Add 2 spaces at the start of each new line.
  This lets you write footnotes that span multiple lines. 

[^note]: Named footnotes still appear as numbers, but can make it easier to identify and link references.

# Callout
- > [!note]
	> note
- > [!info]
	> info line 1
	> info line 2
- > [!todo]
- > [!abstract] 
	- > [!summary]
		- > [!tldr]
- > [!tip]
	- > [!hint]
		- > [!important]
- > [!success]
	- > [!check]
		- > [!done]
- > [!question]
	- > [!help]
		- > [!faq]
- > [!warning]
	- > [!caution]
		- > [!attention]
- > [!failure]
	- > [!fail]
		- > [!missing]
- > [!danger]
	- > [!error]
		- > [!bug]
- > [!example]
- > [!quote]
	- > [!cite]

# MathJax
- [MathJax basic tutorial](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)
- [mathJax support extensions list](https://docs.mathjax.org/en/latest/input/tex/extensions/index.html)

# Files
## image
- png
	- ![[image-sample-png.png|100]]
	- [[image-sample-png.png|100]]
- jpg   
	- ![[image-sample-jpg.jpg|100x100]]   
	- [[image-sample-jpg.jpg|100x100]]   
- jpeg  
	- ![[image-sample-jpeg.jpeg#test]] 
	- [[image-sample-jpeg.jpeg#test]] 
- gif   
	- ![[image-sample-gif.gif|test]]   
	- [[image-sample-gif.gif|test]]   
- bmp   
	- ![[image-sample-bmp.bmp#test|100]]   
	- [[image-sample-bmp.bmp#test|100]]   
- svg   
	- ![[image-sample-svg.svg]]   
	- [[image-sample-svg.svg]]   
- webp  
	- ![[image-sample-webp.webp]] 
	- [[image-sample-webp.webp]] 

## video
- mp4 
	- ![[video-sample-mp4.mp4]]   
	- [[video-sample-mp4.mp4]]   
- webm
	- ![[video-sample-webm.webm]] 
	- [[video-sample-webm.webm]] 
- ogv 
	- ![[video-sample-ogv.ogv]]   
	- [[video-sample-ogv.ogv]]   
- mov 
	- ![[video-sample-mov.mov]]   
	- [[video-sample-mov.mov]]   
- mkv 
	- ![[video-sample-mkv.mkv]]   
	- [[video-sample-mkv.mkv]]   

## audio
- mp3  
	- ![[audio-sample-mp3.mp3]]   
	- [[audio-sample-mp3.mp3]]   
- m4a  
	- ![[audio-sample-m4a.m4a]]   
	- [[audio-sample-m4a.m4a]]   
- ogg  
	- ![[audio-sample-ogg.ogg]]   
	- [[audio-sample-ogg.ogg]]   
- 3gp  
	- ![[audio-sample-3gp.3gp]]   
	- [[audio-sample-3gp.3gp]]   
<!--
- wav  
	- ![[audio-sample-wav.wav]]   
	- [[audio-sample-wav.wav]]   
- flac 
	- ![[audio-sample-flac.flac]] 
	- [[audio-sample-flac.flac]] 
 -->
 
## iframe
- pdf
	- ![[iframe-sample-pdf.pdf]]
	- [[iframe-sample-pdf.pdf]]
- youtube
	- video
		- ![おぱんちゅうさぎソング - YouTube](https://www.youtube.com/watch?v=MsRmLnJjsy8)
		- [おぱんちゅうさぎソング - YouTube](https://www.youtube.com/watch?v=MsRmLnJjsy8)
	- playlists
		- ![Muzik - YouTube](https://youtube.com/playlist?list=PLXxoTrp1nCgOPKeso4cWGsKjLtUMgC1I6&si=cJcCTxty0r0enzJE)
		- [Muzik - YouTube](https://youtube.com/playlist?list=PLXxoTrp1nCgOPKeso4cWGsKjLtUMgC1I6&si=cJcCTxty0r0enzJE)