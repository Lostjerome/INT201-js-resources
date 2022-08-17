//Synchronus
function synchronus() {
  console.log("INT201");
  console.log("Vanila Javascript");
  console.log("Section 1");
  console.log("Goodbye");
}

//Asynchronus
function asynchronus() {
  console.log("INT201");
  console.log("Vanila Javascript");
  console.log("Section 1");
  setTimeout(function () {
    console.log("5 seconds passed");
  }, 5000);

  console.log("Goodbye");
}

// synchronus();
// asynchronus();

// ================================================================================================ //

//--------------------- 1. We can assign funciton to variable

// let number = increase(10, 20);
// console.log(`Using add(): ${number}`);
// number = decrease(number, 5);
// console.log(`Using decrase(): ${number}`);
// number = multiply(number, 2);
// console.log(`Using multiply(): ${number}`);
// number = divide(number, 5);
// console.log(`Using divide(): ${number}`);

// let sum = increase;
// console.log(sum);

//--------------------- 2. We can send function as parameter

// console.log(calculator(10, 50, increase));
// console.log(calculator(10, 50, decrease));
// console.log(calculator(10, 50, multiply));
// console.log(calculator(10, 50, divide));

//--------------------- 3. We can return function as result from another function
let result = doSomething()("Hello ", "Jerome");
console.log(result); // Goodmorning

function saySomething(msg = "Good morning") {
  return msg;
}

function saySomethingToSomeone(msg = "Good morning", name = "someone") {
  return msg + name;
}

function doSomething() {
  return saySomething;
}

const increase = (n1, n2) => n1 + n2;
const decrease = (n1, n2) => n1 - n2;
const multiply = (n1, n2) => n1 * n2;
const divide = (n1, n2) => n1 / n2;
const calculator = (n1, n2, func) => func(n1, n2);

// function increase(n1, n2) {
//   return n1 + n2;
// }
// i
// function decrease(n1, n2) {
//   return n1 - n2;
// }

// function multiply(n1, n2) {
//   return n1 * n2;
// }

// function divide(n1, n2) {
//   return n1 / n2;
// }

// function calculator(n1, n2, operator) {
//   return `${operator(n1, n2)}`;
// }
