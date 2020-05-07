$('.collapse').collapse();

$(function () {
    $('[data-toggle=popover]').popover({
        trigger: 'hover',
        html: true,
        placement: "top",
    })
});