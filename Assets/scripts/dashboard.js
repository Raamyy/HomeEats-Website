$('#saveChangesModalButton').click(function () {
    $('#saveAlert').show('fade');

    setTimeout(function () {
        $('#saveAlert').hide('fade');
    }, 3000);
});