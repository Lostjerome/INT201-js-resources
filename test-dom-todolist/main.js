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

addTodoButton.addEventListener("click", () => {
  const input = document.getElementsByTagName("input")[0];
  if (input.value) {
    let id = addTodo(input.value);
    showTodoItem(id, findTodo(id).description);

    const removeBtn = document.getElementById("removeBtn" + id);
    removeBtn.addEventListener("click", () => {
      removeTodo(id);
      const todoItem = document.getElementById(id);
      todoItem.remove();
      console.log("remove todo with id: " + id);

      refreshDoneCounter();
    });

    const doneBtn = document.getElementById("doneBtn" + id);
    doneBtn.addEventListener("click", () => {
      findTodo(id).done = !findTodo(id).done;
      const todoItem = document.getElementById(id).children[0];
      if (findTodo(id).done) {
        doneBtn.innerHTML = "undone";
        todoItem.style.textDecoration = "line-through";
        todoItem.style.opacity = "0.3";
      } else {
        doneBtn.innerHTML = "done";
        todoItem.style.textDecoration = "none";
        todoItem.style.opacity = "1";
      }
      // console.log("done todo with id: " + id);

      refreshDoneCounter();
    });
  }
  input.value = "";

  refreshDoneCounter();
});

refreshDoneCounter();

function refreshDoneCounter() {
  showNumberOfDone(getNumberOfDone());
  showNumberOfNotDone(getNumberOfNotDone());
}
