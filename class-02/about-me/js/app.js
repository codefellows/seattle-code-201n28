/* eslint-disable indent */
"use strict";

let answer1 = prompt("What is my favorite movie?");
console.log(answer1);

answer1 = answer1.toLowerCase();
console.log(answer1);
if (answer1 === "layer cake") {
  alert("Correct! I love the movie Layer Cake!");
} else {
  alert("I don't like that movie as much as Layer Cake");
}

let answer2 = prompt("Do I like sushi?");
console.log(answer2);

answer2 = answer2.toLowerCase();
if (answer2 === "yes" || answer2 === "y") {
  alert("Correct! Sushi is awesome");
} else if (answer2 === "no" || answer2 === "n") {
  alert("Incorrect");
} else {
  alert("Sushi is a Japanese food.");
}

switch (answer2) {
  case "idk":
    alert("think about it more");
    break;
  case "i like pizza":
    alert("pizza is good too I guess");
    break;
  case "3":
    alert("3 is a number not a food");
    break;
  default:
    alert("you entered something unexpected");
}
