$(document).ready(function () {
    console.log("ready")
    $("#content").hide()
    setTimeout(function () {
        $("#loader").hide();
        $("#content").show();
    }, 2000)
})


$(function () {
    $('[data-toggle=popover]').popover({
        trigger: 'hover',
        html: true,
        placement: "top",
    })
});