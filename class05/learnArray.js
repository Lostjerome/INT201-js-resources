// let a = [];

// console.log(typeof a);

// deconstructing array

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let [, , , ...rest] = array;
let [first, second] = array;
console.log(rest);
console.log(first);
console.log(second);

let text = [..."Hello World"];
for (let [index, char] of text.entries()) {
  console.log(`index: ${index}, char: ${char}`);
}
