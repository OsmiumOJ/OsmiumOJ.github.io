"use strict";
// import Stackedit from 'stackedit-js';
const stackedit = new Stackedit();

function callMarkdownEditor() {
	stackedit.openfile({
		content: {
			text:
`
普通文字  
**粗体**  
*斜体*  
__粗体2__  
_斜体2__  
***粗体+斜体***
~~删除线~~  
==标记==  
还能~下标~  
也能^上标^

# H1
## H2
### H3
#### H4
##### H5
###### H6
`
		}
	});
}