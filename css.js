/**
 * Created by UVINDU on 4/9/2017.
 */
$(document).ready(function () {
    $(".fadein1").fadeIn(3000);
});
$(document).ready(function () {
    $(".fadein2").fadeIn(4500);
});
$(document).keypress(function(e) {
    if(e.which == 13) {
        var name = document.getElementById("namevalue").value;
        $(document).ready(function () {
            $("#body").css("background-color",name);
            $(".textbox").css("background-color",name);
        });
    }
});

