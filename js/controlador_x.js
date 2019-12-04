'use strict';

window.onload = function() {
    $.get("xfooter.html", function(data) {
        $("#xfooter").html(data);
    })
    $.get("xaside.html", function(data) {
        $("#xaside").html(data);
    })
};