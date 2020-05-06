$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

/*$(document).ready(function () {
    // executes when HTML-Document is loaded and DOM is ready
    console.log("document is ready");


    $(".card").hover(
        function () {
            $(this).addClass('shadow-lg').css('cursor', 'pointer');
        }, function () {
            $(this).removeClass('shadow-lg');
        }
    );

    // document ready  
});*/
$(function () {
    $('[data-toggle="popover"]').popover({
        trigger: 'foucs',
    });
});

$(document).ready(function () {
    console.log($("#content"))
    $("#content").hide()
    setTimeout(function () {
        $("#loader").hide();
        $("#content").show();
    }, 2000)
})
