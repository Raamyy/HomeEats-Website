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

$(function () {
    $('[data-toggle=popover]').popover({
        trigger: 'hover',
        html: true,
        placement: "top",
    })
});