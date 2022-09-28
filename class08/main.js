let profile = {
  id: 123,
  interest: ["music", "skiing"],
};

// profile.interest[1] = "reading";
profile.interest[profile.interest.findIndex((item) => item === "skiing")] =
  "reading";

// console.log(profile);

//----------------

const book = {
  isbn: 123456789,
  title: "JavaScript",
  author: {
    firstname: "Umaporn",
    lastname: "Sup",
  },
};

book.author.firstname = "Naronkrach";
book.author.lastname = "Tanajarusawas";
// console.log(book);

//----------------

class Person {
  constructor(firstname = "John", lastname = "Doe") {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  get fullname() {
    return this.firstname + " " + this.lastname;
  }

  set fullname(name) {
    let parts = name.split(" ");
    this.firstname = parts[0];
    this.lastname = parts[1];
  }
}

let p1 = new Person("Umaporn", "Sup");
// console.log(p1.fullname);
p1.fullname = "Naronkrach Tanajarusawas";
// console.log(p1.fullname);

let p2 = new Person();
// console.log(p2.fullname);

//----------------

// console.log(Object.keys(book));
// console.log(Object.values(book));
// console.log(Object.entries(book));
// console.log(Object.prototype.isPrototypeOf(book));
// console.log(book.hasOwnProperty("isbn"));

//----------------
const subject = {
  id: 123,
  name: "Subject 1",
  description: "Description 1",
};

const javaScript = Object.create(subject);

// console.log(subject);
// console.log(javaScript);

//----------------

function Subject(name = "Subject 1", description = "Description 1") {
  this.name = name;
  this.description = description;
}

function subjectToString() {
  return `${this.name}: ${this.description}`;
}

const int100 = new Subject("INT100", "Introduction to Programming");

int100.subjectToString = subjectToString;

// console.log(int100.subjectToString());

//----------------

class Area {
  constructor(length = 0, width = 0) {
    this.length = length;
    this.width = width;
  }

  compareTo(other) {
    return this.width === other.width && this.length === other.length;
  }
}

let area1 = new Area(10, 20);
let area2 = new Area(10, 20);

console.log(area1.compareTo(area2));
