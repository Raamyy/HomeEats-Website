$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$(function () {
    let params = new URLSearchParams(window.location.search);
    let accountType = params.get('accountType')
    if (accountType == "foodMaker") {
        $("#inputFoodMakerRadio").prop("checked", true)
    }
    else if (accountType == "deliveryBoy") {
        $("#inputDeliveryBoyRadio").prop("checked", true)
    }
    else {
        $("#inputFoodBuyerRadio").prop("checked", true)
    }
})