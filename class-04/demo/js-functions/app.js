"use strict";

// code goes here
console.log("Hello");

function hello() {
  console.log("Hello");
  // return "Hello";
}

hello();
hello();

for (let i = 0; i < 5; i++) {
  hello();
}

console.log(hello());

let sum1 = addTwoNumbers(7, 4);
let sum2 = addTwoNumbers(1, 84);

function addTwoNumbers(a, b) {
  return a + b;
}

let a = 7;
let b = 4;

console.log(addTwoNumbers(7, 4));

console.log(sum1);
console.log(sum2);

// Let's write a function that asks the user if they like icecream, and have a custom message depending on
// yes or no

function question1() {
  let answer = prompt("Do you like icecream?").toLowerCase();
  if (answer === "y" || answer === "yes") {
    alert("Awesome! I also like icecream");
    return;
  }
  alert("Booo you are no fun");
}

question1();

function questionPrompt(message, correct1, correct2) {
  let answer = prompt(message).toLowerCase();
  if (answer === correct1 || answer === correct2) {
    alert("Correct! Good job");
    return;
  }
  alert("Sorry you got this one wrong");
}

questionPrompt("Do I like bananas?", "n", "no");
questionPrompt("Is blue my favorite color?", "y", "yes");
questionPrompt("Is Canada north?", "y", "yes");
