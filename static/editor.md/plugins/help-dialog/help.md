## Markdown 语法教程 (Markdown syntax tutorial)
 
### Markdown 语法教程（简体中文）

> Markdown是一种轻量级标记语言，创始人为约翰·格鲁伯（英语：John Gruber）。它允许人们“使用易读易写的纯文本格式编写文档，然后转换成有效的XHTML（或者HTML）文档”。这种语言吸收了很多在电子邮件中已有的纯文本标记的特性。  

> 由于Markdown的轻量化、易读易写特性，并且对于图片，图表、数学式都有支持，当前许多网站都广泛使用 Markdown 来撰写帮助文档或是用于论坛上发表消息。例如：GitHub、reddit、Diaspora、Stack Exchange、OpenStreetMap 、SourceForge等。甚至Markdown能被使用来撰写电子书。

> ——摘自中文维基

#### 标题

Markdown 有 6 级标题，它们分别是：

1. 1 级标题（`<h1>`）
2. 2 级标题（`<h2>`）
3. 3 级标题（`<h3>`）
4. 4 级标题（`<h4>`）
5. 5 级标题（`<h5>`）
6. 6 级标题（`<h6>`）

它们的语法是这样的：

```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

---

#### 文字效果

Markdown 可以把文字变为粗体、斜体或删除线。

粗体有以下两种语法：

```markdown
**我是粗体**

__我也是粗体__
```

**我是粗体**

__我也是粗体__

---

斜体有以下两种语法：

```markdown
*我是斜体*

_我也是斜体_
```

*我是斜体*

_我也是斜体_

---

删除线只有一种语法：

```markdown
~~我有删除线~~
```

~~我有删除线~~

---

如果我们想要对一个文字使用多种效果呢？

粗体+斜体有以下 6 种语法：

```markdown
***粗体+斜体1***

___粗体+斜体2___

**_粗体+斜体3_**

_**粗体+斜体4**_

__*粗体+斜体5*__

*__粗体+斜体6__*
```

***粗体+斜体1***

___粗体+斜体2___

**_粗体+斜体3_**

_**粗体+斜体4**_

__*粗体+斜体5*__

*__粗体+斜体6__*

---

粗体+删除线有以下 4 种语法：

```markdown
~~**粗体+删除线1**~~

**~~粗体+删除线2~~**

~~__粗体+删除线3__~~

__~~粗体+删除线4~~__
```

~~**粗体+删除线1**~~

**~~粗体+删除线2~~**

~~__粗体+删除线3__~~

__~~粗体+删除线4~~__

---

斜体+删除线也有以下 4 种语法：

```markdown
~~*斜体+删除线1*~~

*~~斜体+删除线2~~*

~~_斜体+删除线3_~~

_~~斜体+删除线4~~_
```

~~*斜体+删除线1*~~

*~~斜体+删除线2~~*

~~_斜体+删除线3_~~

_~~斜体+删除线4~~_

---

粗体+斜体+删除线有以下 12 种语法：

```markdown
***~~粗体+斜体+删除线1~~***

___~~粗体+斜体+删除线2~~___

**_~~粗体+斜体+删除线3~~_**

_**~~粗体+斜体+删除线4~~**_

__*~~粗体+斜体+删除线5~~*__

*__~~粗体+斜体+删除线6~~__*

~~***粗体+斜体+删除线7***~~

~~___粗体+斜体+删除线8___~~

~~**_粗体+斜体+删除线9_**~~

~~_**粗体+斜体+删除线10**_~~

~~__*粗体+斜体+删除线11*__~~

~~*__粗体+斜体+删除线12__*~~
```

***~~粗体+斜体+删除线1~~***

___~~粗体+斜体+删除线2~~___

**_~~粗体+斜体+删除线3~~_**

_**~~粗体+斜体+删除线4~~**_

__*~~粗体+斜体+删除线5~~*__

*__~~粗体+斜体+删除线6~~__*

~~***粗体+斜体+删除线7***~~

~~___粗体+斜体+删除线8___~~

~~**_粗体+斜体+删除线9_**~~

~~_**粗体+斜体+删除线10**_~~

~~__*粗体+斜体+删除线11*__~~

~~*__粗体+斜体+删除线12__*~~

### 列表

Markdown 有两种列表，有序列表和无序列表。

有序列表的语法：

```markdown
1. A
2. B
3. C
```

1. A
2. B
3. C

事实上，只要你的格式是 `数字+点+空格`，Markdown 就会认为这是列表。不一定必须要从 1 开始，比如：

```markdown
19260817. A
998244353. B
1234567890. C
```

19260817. A
998244353. B
1234567890. C

无序列表的语法：

```markdown
- A
- B
- C
```

- A
- B
- C

或者：

```markdown
* a
* b
* c
```

* a
* b
* c

当然，你可以嵌套列表：

```markdown
* a
* * b
* * * c
* * * * d
```

* a
* * b
* * * c
* * * * d

```markdown
1. a
2. 1. b
3. 2. 1. c
4. 3. 2. 1. d
```

1. a
2. 1. b
3. 2. 1. c
4. 3. 2. 1. d

甚至更疯狂的，无序列表与有序列表混合嵌套：

```markdown
1. a
3. - b
4. - 2. c
```

1. a
3. - b
4. - 2. c

#### 换行符

Markdown 换行分为两种：段内换行和分段换行。

这是分段换行（注意第一行的后面有两个空格）：

```markdown
段内换行  
我和上面是一段
```

段内换行  
我和上面是一段

---

这是分段换行（注意要空一行）：

```markdown
分段换行

上面那句谁啊？跟我不是一段
```

分段换行

上面那句谁啊？跟我不是一段

### Markdown 语法参考 (Markdown syntax reference)

- [Mastering Markdown](https://guides.github.com/features/mastering-markdown/ "Mastering Markdown")
- [Markdown Basics](https://help.github.com/articles/markdown-basics/ "Markdown Basics")
- [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown/ "GitHub Flavored Markdown")
- [Markdown 语法说明（简体中文）](http://www.markdown.cn/ "Markdown 语法说明（简体中文）")
- [Markdown 語法說明（繁體中文）](http://markdown.tw/ "Markdown 語法說明（繁體中文）")

## 键盘快捷键 (Keyboard shortcuts)

> If Editor.md code editor is on focus, you can use keyboard shortcuts.

> 如果 Editor.md 的 Markdown 编辑器获得了焦点，那你可以使用键盘快捷键来控制 Editor.md。

| Keyboard shortcuts (键盘快捷键)                 |   说明                            | Description                                        |
| :---------------------------------------------- |:--------------------------------- | :------------------------------------------------- |
| F9                                              | 切换实时预览                      | Switch watch/unwatch                               |
| F10                                             | 全屏HTML预览(按 Shift + ESC 退出) | Full preview HTML (Press Shift + ESC exit)         |
| F11                                             | 切换全屏状态                      | Switch fullscreen (Press ESC exit)                 |
| Ctrl + 1~6 / Command + 1~6                      | 插入标题1~6                       | Insert heading 1~6                                 |
| Ctrl + A / Command + A                          | 全选                              | Select all                                         |
| Ctrl + B / Command + B                          | 插入粗体                          | Insert bold                                        |
| Ctrl + D / Command + D                          | 插入日期时间                      | Insert datetime                                    |
| Ctrl + E / Command + E                          | 插入Emoji符号                     | Insert &#58;emoji&#58;                             |
| Ctrl + F / Command + F                          | 查找/搜索                         | Start searching                                    |
| Ctrl + G / Command + G                          | 切换到下一个搜索结果项            | Find next search results                           |
| Ctrl + H / Command + H                          | 插入水平线                        | Insert horizontal rule                             |
| Ctrl + I / Command + I                          | 插入斜体                          | Insert italic                                      |
| Ctrl + K / Command + K                          | 插入行内代码                      | Insert inline code                                 |
| Ctrl + L / Command + L                          | 插入链接                          | Insert link                                        |
| Ctrl + U / Command + U                          | 插入无序列表                      | Insert unordered list                              |
| Ctrl + Q                                        | 代码折叠切换                      | Switch code fold                                   |
| Ctrl + Z / Command + Z                          | 撤销                              | Undo                                               |
| Ctrl + Y / Command + Y                          | 重做                              | Redo                                               |
| Ctrl + Shift + A                                | 插入@链接                         | Insert &#64;link                                   |
| Ctrl + Shift + C                                | 插入行内代码                      | Insert inline code                                 |
| Ctrl + Shift + E                                | 打开插入Emoji表情对话框           | Open emoji dialog                                  |
| Ctrl + Shift + F / Command + Option + F         | 替换                              | Replace                                            |
| Ctrl + Shift + G / Shift + Command + G          | 切换到上一个搜索结果项            | Find previous search results                       |
| Ctrl + Shift + H                                | 打开HTML实体字符对话框            | Open HTML Entities dialog                          |
| Ctrl + Shift + I                                | 插入图片                          | Insert image &#33;[]&#40;&#41;                     |
| Ctrl + Shift + K                                | 插入TeX(KaTeX)公式符号            | Insert TeX(KaTeX) symbol &#36;&#36;TeX&#36;&#36;   |
| Ctrl + Shift + L                                | 打开插入链接对话框                | Open link dialog                                   |
| Ctrl + Shift + O                                | 插入有序列表                      | Insert ordered list                                |
| Ctrl + Shift + P                                | 打开插入PRE对话框                 | Open Preformatted text dialog                      |
| Ctrl + Shift + Q                                | 插入引用                          | Insert blockquotes                                 |
| Ctrl + Shift + R / Shift + Command + Option + F | 全部替换                          | Replace all                                        |
| Ctrl + Shift + S                                | 插入删除线                        | Insert strikethrough                               |
| Ctrl + Shift + T                                | 打开插入表格对话框                | Open table dialog                                  |
| Ctrl + Shift + U                                | 将所选文字转成大写                | Selection text convert to uppercase                |
| Shift + Alt + C                                 | 插入```代码                       | Insert code blocks (```)                           |
| Shift + Alt + H                                 | 打开使用帮助对话框                | Open help dialog                                   |
| Shift + Alt + L                                 | 将所选文本转成小写                | Selection text convert to lowercase                |
| Shift + Alt + P                                 | 插入分页符                        | Insert page break                                  |
| Alt + L                                         | 将所选文本转成小写                | Selection text convert to lowercase                |
| Shift + Alt + U                                 | 将所选的每个单词的首字母转成大写  | Selection words first letter convert to Uppercase  |
| Ctrl + Shift + Alt + C                          | 打开插入代码块对话框层            | Open code blocks dialog                            |
| Ctrl + Shift + Alt + I                          | 打开插入图片对话框层              | Open image dialog                                  |
| Ctrl + Shift + Alt + U                          | 将所选文本的第一个首字母转成大写  | Selection text first letter convert to uppercase   |
| Ctrl + Alt + G                                  | 跳转到指定的行                    | Goto line                                          |

## Emoji表情参考 (Emoji reference)

- [Github emoji](http://www.emoji-cheat-sheet.com/ "Github emoji")
- [Twitter Emoji \(Twemoji\)](http://twitter.github.io/twemoji/preview.html "Twitter Emoji \(Twemoji\)")
- [FontAwesome icons emoji](http://fortawesome.github.io/Font-Awesome/icons/ "FontAwesome icons emoji")

## 流程图参考 (Flowchart reference)

[http://adrai.github.io/flowchart.js/](http://adrai.github.io/flowchart.js/)

## 时序图参考 (SequenceDiagram reference)

[http://bramp.github.io/js-sequence-diagrams/](http://bramp.github.io/js-sequence-diagrams/)

## Tex/LaTex 参考 (TeX/LaTeX reference)

[http://meta.wikimedia.org/wiki/Help:Formula](http://meta.wikimedia.org/wiki/Help:Formula)

