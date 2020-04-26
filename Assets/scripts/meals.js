$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function () {
    $("#login_btn").click(function () {
        $("#loginModal").modal();
    });
});