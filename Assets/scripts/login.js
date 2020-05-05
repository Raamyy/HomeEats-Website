$(document).ready(function () {
    $("#wrongPasswordAlert").hide();
});

$("#loginForm").on('submit', function (event) {
    event.preventDefault()
    firebase.auth().signInWithEmailAndPassword($("#inputEmail").val(), $("#inputPassword").val())
        .then(function (user) {
            $("#wrongPasswordAlert").hide();
            $(location).attr('href', 'dashboard.html')
        })
        .catch(function (error) {
            console.log(error);
            $("#wrongPasswordAlert").show();
        });

})