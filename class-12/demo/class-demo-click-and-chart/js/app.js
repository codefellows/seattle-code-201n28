"use strict";

//--------------------GLOBAL VARIABLES/IMPORTS

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

let currentRound = 0;

//--------------------CONSTRUCTORS

// Product Constructor:
function Product(name) {
  this.name = name;
  this.clicked = 0;
}

//--------------------FUNCTIONS

// return a random index inside allProducts array
function randomImage() {
  // return a number between 0 - 6 (6 is the index of the last item in allProducts)
  return Math.floor(Math.random() * allProducts.length);
}

// render the chart AFTER 10 clicks
function renderChart() {
  let productNames = [];
  for (let i = 0; i < allProducts.length; i++) {
    productNames.push(allProducts[i].name);
  }

  let clicks = [];
  for (let i = 0; i < allProducts.length; i++) {
    clicks.push(allProducts[i].clicked);
  }

  const ctx = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: productNames,
      datasets: [
        {
          label: "# of Votes",
          data: clicks,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          bor
          derWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

//--------------------EVENT LISTENERS

// Event Listener Steps:
let button = document.getElementById("productButton");
button.addEventListener("click", showNewImage);

//--------------------EVENT HANDLERS

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
  if (currentRound === 25) {
    // Remove my event listener
    button.removeEventListener("click", showNewImage);
    renderChart();
  }
}

//--------------------FUNCTION CALLS

showNewImage();

//////////////////////////////////////////////////////////////////////

let strings = [
  "apple",
  "zeebra",
  "camel",
  "pear",
  "mouse",
  "car",
  "potato",
  "idk",
  "running out of random strings",
];
let uniqueNumbers = [];

function randomIndex(length) {
  return Math.floor(Math.random() * length);
}

while (uniqueNumbers.length < 6) {
  let index = randomIndex(strings.length);
  if (!uniqueNumbers.includes(strings[index])) {
    uniqueNumbers.push(strings[index]);
  }
}

uniqueNumbers.shift();
uniqueNumbers.shift();
uniqueNumbers.shift();

// Then render the shifted

while (uniqueNumbers.length < 6) {
  let index = randomIndex(strings.length);
  if (!uniqueNumbers.includes(strings[index])) {
    uniqueNumbers.push(strings[index]);
  }
}

console.log(uniqueNumbers);
