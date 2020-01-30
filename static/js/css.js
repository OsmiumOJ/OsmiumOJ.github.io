/* Css js */
"use strict";
$(function() {
    var webHeight = Math.max(
        $("main.main-part").height(),
        $("main.full-part").height(),
        $("div.ext-part").height()
    );
    $("main.main-part").height(webHeight);
    $("main.full-part").height(webHeight);
    $("div.ext-part").height(webHeight);
});