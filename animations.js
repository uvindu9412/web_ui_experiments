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
        document.getElementById("name").innerHTML=name;
        $(document).ready(function () {
            $(".textcontent").fadeOut(3000,function () {
                $(".valuename").fadeIn(3000);
            });
        });
    }
});

