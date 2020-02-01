$(function() {
    $.ajax({
        url: "/web.dat",
        success: function(res) {
            $("body").append(res);
            alert({
                txt: "<div style=\"width: 100%; height: 50vh\"><div id=\"editor-md-1\" style=\"height: 100%\"><\/div><\/div>",
                cap: "发表评论",
                okTxt: "发&ensp;表",
                hasCancel: true,
                doShow: false
            });
            var editor = editormd("editor-md-1", {
				width: "100%",
				height: "100%",
				tex: true,
                path: "/static/editor.md/lib"
            });
        }
    });
});
