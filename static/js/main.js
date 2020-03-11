const domain = document.domain;
const varDomain = domain.replace(/\./g, '-');
const uiData = {
	colors: [
		["#008080", "#00bcbc", "#00ffff"],
		["#ea0000", "#ea7500", "#ffc78e"],
		["#0000c6", "#0072e3", "#46a3ff"],
		["#8600ff", "#ff359a", "#ffa6ff"],
		["#ae8f00", "#eac100", "#ffe66f"],
		["#00a600", "#00db00", "#79ff79"],
		["#3c3c3c", "#7b7b7b", "#bebebe"]
	]
};
var changeStatus = false;
function Change() {
	if(changeStatus) {
		$(".change:not(.change-show)").fadeToggle(400);
		$(".change.change-show").delay(405).fadeToggle(400);
	} else {
		$(".change.change-show").fadeToggle(400);
		$(".change:not(.change-show)").delay(405).fadeToggle(400);
	}
	changeStatus = !changeStatus;
}
function setColor(index) {
	$(":root").css({cssText: "--color-0: " + uiData.colors[index][0] + "; --color-1: " + uiData.colors[index][1] + "; --color-2: " + uiData.colors[index][2]});
	localStorage.removeItem(varDomain + "-color");
	localStorage.setItem(varDomain + "-color", String(index));
}
$(function() {
	$.ajax({
		url: "/template.html",
		success: function(res) {
			$("body").append(res);
			var colorsIndex = Boolean(localStorage.getItem(varDomain + "-color")) ? Number(localStorage.getItem(varDomain + "-color")) : 0;
			var color = uiData.colors[colorsIndex % uiData.colors.length];
			$(":root").css({cssText: "--color-0: " + color[0] + "; --color-1: " + color[1] + "; --color-2: " + color[2]});
			for(var i = 0; i < uiData.colors.length; ++i) {
				$("#color-selector").append("<i class=\"fa fa fa-dot-circle-o grad-txt\" style=\"cursor: pointer; background-image: linear-gradient(to bottom right, " + uiData.colors[i][0] + ", " + uiData.colors[i][1] + ")\" onclick=\"setColor(" + String(i) + ")\"><\/i>");
			}
			alert({
				doShow: false,
				txt: "<div id=\"comment-editor\"><\/div>",
				cap: "发表评论",
				okTxt: "发&ensp;表",
				okDo: "postComment();",
				hasCancel: true,
				txtAlign: "left"
			});
			editormd("comment-editor", {
				width: "100%",
				height: "50vh",
				tex: true,
				placeholder: "输入 Markdown",
				path: "https://cdn.jsdelivr.net/npm/editor.md/lib/"
			});
		}
	});
});
function getStackedit() {
	const textarea = document.querySelector('textarea');
	const stackedit = new Stackedit();
	stackedit.openFile({content: {text: textarea.value}});
	stackedit.on('fileChange', (file) => {textarea.value = file.content.text});
}
function openBlankStackedit() {
	(new Stackedit()).openFile({});
}