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
function showNewImage(e) {
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
    if (currentRound >= 10) {
        // Remove my event listener
        button.removeEventListener('click', showNewImage);
    }
    // Invoke the setItems function here
    setItems("allProducts", allProducts);
    setItems("round", currentRound);
}

function onPageLoad() {
    // Get a random product
    let product = allProducts[randomImage()];
    // Select the img
    let img = document.getElementById("productImage");
    // Make the img the product
    img.src = `assets/${product.name}.jpg`;
    img.alt = product.name;
    img.title = product.name;
    
    // Invoke the getItems function here, BUT check if it exists first
    if (getItems("allProducts")) {
        allProducts = getItems("allProducts");
    }

    if (getItems("round")) {
        currentRound = getItems("round");
    }
    console.log(allProducts);
    console.log(currentRound);

    if (currentRound >= 10) {
        // Remove my event listener
        button.removeEventListener('click', showNewImage);
        localStorage.removeItem("allProducts");
        localStorage.removeItem("round");
    }
}

onPageLoad();


// function setItems()
function setItems(key, value) {
    // Step 1a
    let stringifyVersion = JSON.stringify(value);
    // Step 1b
    localStorage.setItem(key, stringifyVersion);
}


// function getItems()
function getItems(key) {
    // Step 2a
    let stringifyVersion = localStorage.getItem(key);
    // Step 2b
    let parsedVersion = JSON.parse(stringifyVersion);

    return parsedVersion;
}


