var COFFEE_ORDER_FORM = "[data-coffee-order]";

function setUpFormListener() {
    var theForm = document.querySelector(COFFEE_ORDER_FORM);
    theForm.addEventListener('submit', function (event) {
        event.preventDefault();
        console.log(theForm.elements);
        console.log(theForm.elements.coffeeOrder.value);
        console.log(theForm.elements.emailInput.value);
        console.log(theForm.elements.size.value);
        console.log(theForm.elements.flavorShot.value);
        console.log(theForm.elements.strength.value);
        // console.log(theForm.elements.)
    })
}

// now you need to take those values and add them to localStorage
// which is built into the browser

setUpFormListener();

// function getOrderName () {
//     var orderName = document.getElementById("coffeeOrder");
//     return orderName;
// }

// console.log(getOrderName());

// var formInputArray = document.getElementsByClassName()

// function submitEventHandler() {
//     var buddin = document.querySelector(SUBMIT_SELECTOR);
//     event.preventDefault();
//     buddin.addEventListener('click', document.forms["[data-coffee-order='form'"].submit);
// }