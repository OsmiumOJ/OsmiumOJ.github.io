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
                path: "/static/editor.md/lib/"
            });
        }
    });
});
