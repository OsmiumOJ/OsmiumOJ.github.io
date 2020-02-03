$(function() {
    $.ajax({
        url: "/web.dat",
        success: function(res) {
            $("body").append(res);
            alert({
                txt: "<div style=\"width: 100%; height: 50vh\"><textarea id=\"simpleMde-1\"><\/textarea><\/div>",
                cap: "发表评论",
                okTxt: "发&ensp;表",
                hasCancel: true,
                doShow: false,
                txtAlign: "left"
            });
            var simplemde = new SimpleMDE({element: $("#simpleMde-1")[0]});
        }
    });
});
