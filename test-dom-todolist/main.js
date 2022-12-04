import todoManagement from "./lib/todoManagement.js";
import todoUserInterface from "./UI/todoList.js";

// const todoUserInterface = require("./UI/todoList.js");
// const todoManagement = require("./lib/todoManagement.js");

console.log("Hello World!");

const { showTodoItem, showNumberOfDone, showNumberOfNotDone } =
  todoUserInterface();
const {
  addTodo,
  removeTodo,
  findTodo,
  getTodos,
  getNumberOfDone,
  getNumberOfNotDone,
} = todoManagement();

const addTodoButton = document.getElementById("addBtn");
const input = document.getElementsByTagName("input")[0];

// load todos from local storage if any
localStorage.getItem("todos") &&
  JSON.parse(localStorage.getItem("todos")).forEach((todo) => {
    const id = addTodo(todo.description, todo.done);
    showTodoItem(id, findTodo(id).description);
    initTodo(id);
    toggleTodo(document.getElementById(id), id);
  });

addTodoButton.addEventListener("click", () => {
  if (input.value) {
    let id = addTodo(input.value);
    showTodoItem(id, findTodo(id).description);
    initTodo(id);
  }
  input.value = "";

  refreshDoneCounter();
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTodoButton.click();
  }
});

// init counter
refreshDoneCounter();

// save to local storage before unload
window.addEventListener("beforeunload", () => {
  localStorage.setItem("todos", JSON.stringify(getTodos()));
});

function refreshDoneCounter() {
  showNumberOfDone(getNumberOfDone());
  showNumberOfNotDone(getNumberOfNotDone());
}

function initTodo(id) {
  const todoItem = document.getElementById(id);

  const doneBtn = todoItem.children[1];
  const removeBtn = todoItem.children[2];

  doneBtn.addEventListener("click", () => {
    findTodo(id).done = !findTodo(id).done;
    toggleTodo(todoItem, id);
    refreshDoneCounter();
  });

  removeBtn.addEventListener("click", () => {
    removeTodo(id);
    todoItem.remove();
    refreshDoneCounter();
  });

  toggleTodo(todoItem, id);
}

function toggleTodo(todoItem, id) {
  const todoItemDescription = todoItem.children[0];
  const doneBtn = todoItem.children[1];
  if (findTodo(id).done) {
    doneBtn.textContent = "Done";
    doneBtn.style = "color:white;background-color: green";
    todoItemDescription.style.textDecoration = "line-through";
    todoItemDescription.style.opacity = "0.3";
  } else {
    doneBtn.textContent = "Not Done";
    doneBtn.style = "color: black; background-color: white";
    todoItemDescription.style.textDecoration = "none";
    todoItemDescription.style.opacity = "1";
  }
}
