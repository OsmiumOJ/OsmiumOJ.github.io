var changeStatus = false;
function Change() {
    if(changeStatus) {
        $(".change:not(.change-show)").fadeToggle(400);
        $(".change.change-show").delay(400).fadeToggle(400);
    } else {
        $(".change.change-show").fadeToggle(400);
        $(".change:not(.change-show)").delay(400).fadeToggle(400);
    }
    changeStatus = !changeStatus;
}
$(function() {
    $.ajax({
        url: "/template.html",
        success: function(res) {
            $("body").append(res);
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
    const uiData = {
        colors: [
            ["#d94600", "#ea7500", "#ffa042"],
            ["#008080", "#00bcbc", "#00ffff"],
            ["#d94600", "#ea7500", "#ffa042"]
        ]
    }
    var colorsIndex = Boolean($.cookie("oojColor")) ? Number($.cookie("oojColor")) : 0;
    console.log(colorsIndex);
    var color = UiData.colors[colorsIndex % UiData.colors.length];
    $(":root").css({cssText: "--color-0: " + color[0] + "; --color-1: " + color[1] + "; --color-2: " + color[2]});
});
