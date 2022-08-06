"use strict";

// Here we create 3 potato objects "the old way", using object literals
let potato1 = {
  variety: "yukon",
  color: "brown",
  expiration: 30,
};

let potato2 = {
  variety: "murasaki",
  color: "purple",
  expiration: 42,
};

let potato3 = {
  variety: "russet",
  color: "yellow",
  expiration: 7,
};

// NEW MINDBLOWING IDEA!!! a function that does the heavy lifting for us, called a constructor
// Potato constructor or a "Potato object factory"
function Potato(variety, color, expiration) {
	// all potatoes created with the Potato constructor have these properties
  this.variety = variety;
  this.color = color;
  this.expiration = expiration;

	// all potatoes created with the Potato constructor have these methods
  this.printColor = function () {
    console.log(this.color);
  };
  this.printExpiration = function () {
    console.log(this.expiration);
  };
}

// use the "new" keyword when invoking the Potato constructor (or any constructor, really)
// the arguments become the properties of the declared potato objects
let potato4 = new Potato("russet", "yellow", 7);
let potato5 = new Potato("test", "green", 70);
let potato6 = new Potato("blah", "pink", 10);
let potato7 = new Potato("doo-da", "chartreuse", 37);
let potato8 = new Potato("apple", "maroon", 24);


console.log(potato1, potato2, potato3);
// notice that when we console.log objects created by a constructor that they have the constructor name logged as well
console.log(potato4, potato5, potato6, potato7, potato8);

// Syntax to add a method to a constructor. Constructors are functions that have a .prototype property that we can assign methods to
Potato.prototype.printSelf = function () {
  console.log(this);
};

// Invoke methods with ()!!
potato4.printSelf();
potato5.printSelf();
console.log(potato4.printSelf);
potato5.printColor();

// example of reassigning potato3
potato3 = new Potato('yukon', 'brown', 30);
// if we don't reassign potato3, the old potato3 object does NOT have the .printExpiration() method
potato3.printExpiration();


Potato.prototype.render = function () {
	let tableBody = document.getElementById('table-body');
	// 3 Steps of DOM Element Creation:
	// 1. Create Element
	// 2. Fill with text 
	// 3. Append
	let tableRow = document.createElement('tr'); // this creates the table row element

	let varietyData = document.createElement('td'); // this creates a table data element for variety
	let colorData = document.createElement('td'); // this creates a table data element for color
	let expirationData = document.createElement('td'); // this creates a table data element for expiration
	varietyData.innerText = this.variety; 
	colorData.innerText = this.color;
	expirationData.innerText = this.expiration;

	// append the 3 tds
	tableRow.appendChild(varietyData);
	tableRow.appendChild(colorData);
	tableRow.appendChild(expirationData);

	// THEN we append the tr to tbody
	tableBody.appendChild(tableRow);
}

// we TEST! invoke
potato4.render();
potato5.render();
potato6.render();
potato7.render();
potato8.render();


///////////////////////
// New form code:
///////////////////////

// Step 3:
let potatoForm = document.getElementById('potatoForm');
potatoForm.addEventListener('submit', addPotato);

// Step 4:
function addPotato(event) {
	event.preventDefault();
	let form = event.target;
	let variety = form.variety.value;
	let color = form.color.value;
	let expiration = form.expiration.value;
	// console.log(variety, color, expiration);
	let potato = new Potato(variety, color, expiration);
	console.log(potato);
	potato.render();
}