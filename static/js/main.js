$(function() {
    $.ajax({
        url: "/web.dat",
        success: function(res) {
            $("body").append(res);
            alert({
                txt: "<iframe src=\"\/editormd\" style=\"width: 100%; height: 50vh\" frameborder=\"0\" name=\"editor-md\"><\/iframe>",
                cap: "发表评论",
                okTxt: "发&ensp;表",
                hasCancel: true,
                doShow: false,
                txtAlign: "left"
            });
        }
    });
});
