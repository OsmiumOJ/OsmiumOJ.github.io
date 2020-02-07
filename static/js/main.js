$(function() {
    $.ajax({
        url: "/web.dat",
        success: function(res) {
            $("body").append(res);
            var xhr = new XMLHttpRequest();
            xhr.open('get', 'https://v1.hitokoto.cn?c=a&c=b&c=c&c=d');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    var data = JSON.parse(xhr.responseText);
                    $("#hitokoto-hitokoto").text(data.hitokoto);
                    $("#hitokoto-from").text('——' + data.from);
                    var webHeight = Math.max(
                        $("main.main-part").height(),
                        $("main.full-part").height(),
                        $("div.ext-part").height()
                    );
                    $("main.main-part").height(webHeight);
                    $("main.full-part").height(webHeight);
                    $("div.ext-part").height(webHeight);
                }
            }
            xhr.send();
            alert({
                txt: "<iframe style=\"width: 100%; height: 50vh\" src=\"\/editormd\" frameborder=\"0\" name=\"editor-md\"><\/iframe>",
                cap: "发表评论",
                okTxt: "发&ensp;表",
                hasCancel: true,
                doShow: false,
                txtAlign: "left"
            });
        }
    });
});
