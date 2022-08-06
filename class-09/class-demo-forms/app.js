'use strict';

// console.log('proof of life');

//  Step 3: Add Event Listener - JS
let logForm = document.getElementById('logForm');
// .addEventListener('event', functionName)
logForm.addEventListener('submit', logUserInput);

// Step 4: Code the Event Handler
function logUserInput(event) {
    // console.log(event)
    // This prevents page reload:
    event.preventDefault();
    let form = event.target;
    // console.log(form);
    // Use dot notation to access the input value
    console.log(form.userText.value);
}


// Step 3:
let foodOrder = document.getElementById('foodOrder');
foodOrder.addEventListener('submit', logFoodOrder);

function logFoodOrder(event) {
    event.preventDefault();
    // event.target is the actual HTML of the form
    let form = event.target;
    // Now my goal is to console log the input values
    let name = form.name.value;
    let icecreamFlavor = form.icecreamFlavor.value;
    let seasonings = form.seasonings;
    let instructions = form.instructions.value;
    for (let i = 0; i < seasonings.length; i++) {
        let seasoning = seasonings[i];
        if (seasoning.checked) {
            console.log(seasoning.value);
        }
    }
    console.log(name, icecreamFlavor, instructions);
}
