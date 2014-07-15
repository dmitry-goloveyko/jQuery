$(function () {
    $("#target").click(function () {
        var array = ['This', 'Is', 'Plugin'];

        if ($("#panel").css('display') == 'none') {
            for (var i = 0; i < array.length; i++) {
                $("#panel").append("<div class='dropdown-value'><a>" + array[i] + "</a></div>")
            }
        } else {
            $("#panel div").remove();
        }

        $("#panel").slideToggle("fast");
        $('#panel').css("width", $("#target").width() + "px")

        return false;
    });
});

$(document).click(function (e) {
    var container = $("#panel div");

    if (!container.is(e.target)) {
        container.remove();
    }
});