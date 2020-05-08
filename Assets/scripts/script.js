$(document).on('scroll', function () {
    let perc = ($(this).scrollTop() / ($('#home-bg').height() - $('#home-bg').height() * 0.35)) * 100;
    perc = (perc > 100) ? 100 : perc;
    perc -= 100;
    perc = Math.abs(perc);
    $(".arrows").css('opacity', perc + "%")
    if ($(this).scrollTop() >= ($('#home-bg').offset().top + $('#home-bg').height()) - $("#home-navbar").height()) {
        $("#home-navbar").addClass("dark-bg")
    } else {
        $("#home-navbar").removeClass("dark-bg")
    }
})

$(document).ready(function () {
    $("#ApplyChef_btn").click(function () {
        $("#ChefModal").modal();
    });
});

$(document).ready(function () {
    $('#mycarousel').carousel({ interval: 5000 });
});
