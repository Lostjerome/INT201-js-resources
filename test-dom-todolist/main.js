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

    const todoItem = document.getElementById(id);

    const doneBtn = todoItem.children[1];
    const removeBtn = todoItem.children[2];
    removeBtn.addEventListener("click", () => {
      removeTodo(id);
      todoItem.remove();
      refreshDoneCounter();
    });

    doneBtn.addEventListener("click", () => {
      findTodo(id).done = !findTodo(id).done;
      const todoItemDescription = todoItem.children[0];
      if (findTodo(id).done) {
        doneBtn.textContent = "undone";
        todoItemDescription.style.textDecoration = "line-through";
        todoItemDescription.style.opacity = "0.3";
      } else {
        doneBtn.textContent = "done";
        todoItemDescription.style.textDecoration = "none";
        todoItemDescription.style.opacity = "1";
      }

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
