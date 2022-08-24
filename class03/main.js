let unKnowVar;
// console.log(unKnowVar);
// console.log(typeof unKnowVar);
if (typeof unKnowVar === "undefined") {
  //   console.log("unKnowVar is undefined type");
}

if (unKnowVar === undefined) {
  //   console.log("unKnowVar is undefined ");
}
// console.log(typeof null);
// typeof null === "object" && console.log("Null is an object");

let product = {
  id: "p1",
  name: "iphone",
  price: 1000,
  discount: 0.1,
  getPrice: function () {
    return this.price * (1 - this.discount);
  },
};
// console.log(product.id, product.getPrice());
let stock = [
  product,
  { id: "p2", name: "ipad", price: 2000, discount: 0.2 },
  { id: "p3", name: "macbook", price: 3000, discount: 0.3 },
];
let stock2 = [...stock, { id: "p4", name: "imac", price: 4000, discount: 0.4 }];
const last = (arr) => arr[arr.length - 1];
// console.log(last(stock2));

const immutable = "immutable";
let mutable = "mutable";
// immutable = immutable.toLocaleUpperCase(); // immutable is immutable ToT
mutable = mutable.toLocaleUpperCase(); // mutable is mutable :D

// console.log(immutable.toLocaleUpperCase());
// console.log(immutable);
// console.log(mutable);
// console.log(mutable.toLocaleUpperCase());

// if (true) console.log("true");

let codepoint = String.fromCodePoint(0x1f622);
console.log(codepoint);
