$(document).ready(function() {
    $("#pull").on("click", function() {
        $("#pull").fadeOut(400, function() {
            $("#showMessage").text("Printer dit nummer");
            $("#showMessage").css({border: "2px solid #a1a1a1"});
        });
        $("#pull").delay(5000).fadeIn(400, function() {
            $("#showMessage").fadeOut(400, function() {
                $("#showMessage").text("");
                $("#showMessage").css({border: "0px solid #a1a1a1"});
                $("#showMessage").fadeIn(400);
            });
        });
    });
});