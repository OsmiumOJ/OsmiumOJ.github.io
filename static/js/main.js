$(function() {
    $.ajax({
        url: "/web.dat",
        success: function(res) {
            $("body").append(res);
        }
    });
});
