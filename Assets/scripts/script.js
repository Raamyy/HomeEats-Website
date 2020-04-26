$(document).on('scroll', function () {
    if ($(this).scrollTop() >= ($('#home-bg').offset().top + $('#home-bg').height()) - $("#home-navbar").height()) {
        $("#home-navbar").addClass("dark-bg")
    } else {
        $("#home-navbar").removeClass("dark-bg")
    }
})

$(document).ready(function () {
    $("#login_btn").click(function () {
        $("#loginModal").modal();
    });
});

$(document).ready(function () {
    $("#ApplyChef_btn").click(function () {
        $("#ChefModal").modal();
    });
});

$(document).ready(function () {
    $('#mycarousel').carousel({ interval: 5000 });
});