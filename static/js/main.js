$(function() {
    $.ajax({
        url: "/web.dat",
        success: function(res) {
            $("body").append(res);
        }
    });
    var editor = editormd("editor-md-1", {
        path: "/static/editor.md/lib"
    });
});
