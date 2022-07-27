"use strict";

console.log('proof of life');

let frankie = {
  name: "frankie",
  height: "6ft",
  favColor: "blue",
  getHeight: function () {
    console.log(this.height);
  },
  getSelf: function () {
    console.log(this);
  },
};

let tom = {
  name: "tom",
  height: "7ft",
  favColor: "pink",
  getHeight: function () {
    console.log(this.height);
  },
  getSelf: function () {
    console.log(this);
  },
};

console.log(frankie);
console.log(frankie.name);
console.log(frankie['height']);
frankie.getHeight();

frankie.getSelf();
tom.getSelf();

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min );
}

let random1 = getRandomNumber(5, 15);
console.log(random1);
console.log(Math.floor(Math.random() * 11 + 5));


// assigning/reassigning a property in an object literal

console.log(frankie.name);
frankie.name = "Franklin";
console.log(frankie.name);

frankie.favFood = 'pizza';
console.log(frankie.favFood);

console.log(frankie);

// assigning/reassigning a method


// DOM means Document Object Model
// How JS interacts with HTML pages


// DOM manipulation

// Select parent element
let list = document.getElementById('foods');


// create my li element
let li = document.createElement('li');
// assign text for li element
li.innerText = "Sushi";
// connect li 
list.appendChild(li); // look into .append() vs .appendChild()

// DOM Manipulation

// 0. Select parent element
// 1. Create element with document.createElement()
// 2. Fill it with text with element.innerText property
// 3. append/appendChild 

// Step 1
let li2 = document.createElement('li');
// Step 2
li2.innerText = "Pizza";
// Step 3
list.appendChild(li2);


let favFoods = ["apples", "oranges", "pears", "more pizza", "burger", "salmon cookies", "ice cream"];

// use a for loop to add favorites foods to our ul

for (let i = 0; i < favFoods.length; i++) {
    // Step 1
    let li1 = document.createElement('li');
    // Step 2
    li1.innerText = favFoods[i];
    // Step 3
    list.appendChild(li1);
}


