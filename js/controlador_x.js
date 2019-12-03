window.onload = function() {
    $.get("xnav.html", function(data) {
        $("#xnav").html(data);
    })
    $.get("xfooter.html", function(data) {
        $("#xfooter").html(data);
    })
    $.get("xaside.html", function(data) {
        $("#xaside").html(data);
    })
};