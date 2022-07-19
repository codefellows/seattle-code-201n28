"use strict";

// console.log("test");

var example = "this is the old way of declaring a variable";

// can't be reassigned
let dogs = ["shib", "golden", "labs"];

// console.log(dogs);

// let
let counter = 5;
const counter2 = 10;

counter += 1;

// can't do this:
// counter2 += 1;

// access first item
console.log(dogs[0]);

// add 'pitpull' with push
dogs.push("pitbull");
console.log(dogs);

// remove last item:
let dog = dogs.pop();
console.log(dogs);
console.log(dog);

// add item to beginning dogs array with shift:
dogs.unshift("pitbull");
console.log(dogs);

// shift removes item from beginning:
dogs.shift();
console.log(dogs);

// does dogs include "golden"? with .includes()
console.log(dogs.includes("golden"));

// for loop example to console log each dog in dogs:
//    start;      stop;          step;

for (let i = 0; i < dogs.length; i++) {
  // console.log(i);
  dog = dogs[i];
  console.log(dog);
}

// what is the length of dogs array?:
console.log(dogs.length);

let counter3 = 0;
let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < arrayOfNumbers.length; i++) {
  // counter3 += arrayOfNumbers[i];
  counter3 = counter3 + arrayOfNumbers[i];
  // console.log(counter3);
  // counter3 = arrayOfNumbers[i];
}
console.log(counter3);

// DONT DO THIS:
// while (true) {
//   console.log("this will crash");
// }

while (counter3 > 20) {
  counter3--;
  console.log(counter3);
}
