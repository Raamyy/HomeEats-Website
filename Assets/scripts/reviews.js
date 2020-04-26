$(document).ready(function () {
    console.log("ready")
    setTimeout(function () {
        $("#loader").hide();
        $("#content").show();
    }, 2000)
})

$(document).ready(function () {
    $("#login_btn").click(function () {
        $("#loginModal").modal();
    });
});