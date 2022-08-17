// Number
let numberInt = 100;
let numberDecimal = 20.25;
let numberBigInt = 1n;

// console.log(typeof numberInt);
// console.log(typeof numberDecimal);
// console.log(typeof numberBigInt);

// String
let stringWithDoubleQuote = "Jerome";
let stringWithSingleQuote = "Jerome";
let stringWithBackTick = `Jerome ${numberInt}`;

// console.log(stringWithBackTick)

// Boolean
let isHoliday = true;
let absent = false;
// console.log(typeof isHoliday);
// console.log(typeof absent);

// Symbol
let symbol = Symbol("Jerome");
let symbol2 = Symbol("Jerome");
// console.log(symbol === symbol2);

// Null
let nullValue = null;
// console.log(typeof nullValue);
// console.log(nullValue);

// Undefined
let undefinedValue = undefined;
// console.log(typeof undefinedValue);
// console.log(undefinedValue);

// Object
let jerome = {
  name: "Jerome",
  age: 20,
};

let people = [
  { name: "Alice", age: 19 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 21 },
  { name: "David", age: 22 },
  { name: "Eve", age: 23 },
];

console.log(typeof people);
people.map((person) => console.log(`${person.name} is ${person.age} years old`));
