"use strict";

console.log("test");

// Product Constructor:
function Product(name) {
    this.name = name;
    this.clicked = 0;
}

// Products Category
let allProducts = [
    new Product("bag"),
    new Product("banana"),
    new Product("bathroom"),
    new Product("boots"),
    new Product("breakfast"),
    new Product("bubblegum"),
    new Product("chair"),
];

let currentRound = 0

// // Instead of a for loop, I want to use a random number generator
// for (let i = 0; i < allProducts.length; i++) {
    // let product = allProducts[i];
    // // Step 1. create element
    // // - Done in html, line 11
    // // Step 2. fill with content
    // let img = document.getElementById("productImage");
    // console.log(img);
    // img.src = `assets/${product.name}.jpg`
    // // Step 3. append child
// }

// return a random index inside allProducts array
function randomImage() {
    // return a number between 0 - 6 (6 is the index of the last item in allProducts)
    return Math.floor(Math.random() * allProducts.length) 
}


// DOM Manipulation
// let product = allProducts[randomImage()];
// let img = document.getElementById("productImage");
// img.src = `assets/${product.name}.jpg`;


// Event Listener Steps:
let button = document.getElementById("productButton");
button.addEventListener('click', showNewImage);

// This is the event handler that gets invoked when we click the button
function showNewImage() {
    // Get a random product
    let product = allProducts[randomImage()];
    // Select the img
    let img = document.getElementById("productImage");
    // Make the img the product
    img.src = `assets/${product.name}.jpg`;
    img.alt = product.name;
    img.title = product.name;
    // Increments shown product's .clicked property
    product.clicked++;
    console.log(product);
    currentRound++;
    // Logic for when voting rounds have completed:
    if (currentRound === 10) {
        // Remove my event listener
        button.removeEventListener('click', showNewImage);
    }
}

showNewImage();


// HINT: use Array.includes(<target item>) array method to generate 3 uniquely random images




