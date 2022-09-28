class Person {
  constructor(firstname = "N/A", lastname = "N/A", dateOfBirth = new Date(Date.now())) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.dateOfBirth = dateOfBirth;
  }

  getFullName() {
    return `${this.lastname}, ${this.firstname}`;
  }

  getAge() {
    let today = new Date();
    let age = today.getFullYear() - this.dateOfBirth.getFullYear();
    let m = today.getMonth() - this.dateOfBirth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < this.dateOfBirth.getDate())) {
      age--;
    }
    return age;
  }

  isEqual(anotherPerson) {
    const myFullName = this.firstname + " " + this.lastname;
    const anotherFullname = anotherPerson.firstname + " " + anotherPerson.lastname;
    return myFullName.toLowerCase === anotherFullname.toLowerCase;
  }

  toString() {
    return `Name: ${this.firstname} ${this.lastname}, Age: ${this.getAge()}`;
  }
}

const person1 = new Person("John", "Doe", new Date(1990, 10, 10));
const person2 = new Person("Jane", "Doe", new Date(1990, 10, 10));

console.log(person1.getFullName());
console.log(person1.getAge());
console.log(person1.isEqual(person2));
console.log(person1.toString());


