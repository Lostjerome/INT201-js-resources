// console.log("Hello World");

const rootNode = document;
console.log(rootNode.nodeValue);

const rootELement = document.documentElement;
console.log(rootELement.nodeValue);

//children element of html

//1. All types of children
const htmlChildren = rootELement.childNodes;
console.log(htmlChildren);

//2. Only element type of children
const htmlElementChildren = rootELement.children;
console.log(htmlElementChildren);

const divNode = document.body.children[1];
console.log(divNode.getAttribute("id"));

//get by id
const myApp = document.getElementById("myApp");
myApp.innerHTML = "Hello World";
console.log(myApp);

//get by className
const box = document.getElementsByClassName("box");
console.log(box);

//1. create new element node "p"
const pNewElementNode = document.createElement("p"); // <p></p>
const boldElementNode = document.createElement("b"); // <b></b>

//2.create a new attribute named "paraId"
const paraIdNode = document.createAttribute("paraId"); // paraId="1"
paraIdNode.value = "1";

//3. create text node with its value "INT201"
const newTextNode = document.createTextNode("INT201"); // INT201

//4. assign a paraId to <p> element
pNewElementNode.setAttributeNode(paraIdNode);

//5. assign a text node to <p> element
pNewElementNode.appendChild(newTextNode);
pNewElementNode.innerHTML = "<span style='color:green;'>JavaScript<span>";

boldElementNode.appendChild(pNewElementNode);

pNewElementNode.style.color = "red";

document.body.appendChild(boldElementNode);

function todos() {
  let currentID = 0;
  let todos = [];

  function addTodo(desc) {
    todos.push({ id: currentID++, description: desc });
  }
  function removeTodo(removeId) {
    todos = todos.filter((todo) => todo.id !== removeId);
  }
  function findTodo(searchId) {
    return todos.find((todo) => todo.id === searchId);
  }
  function getTodos() {
    return todos;
  }
  return { addTodo, removeTodo, findTodo, getTodos };
}

const myTodo = todos();
const todoElement = document.createElement("div");
todoElement.innerHTML = `<h1>Todo List</h1>`
document.body.appendChild(todoElement);


