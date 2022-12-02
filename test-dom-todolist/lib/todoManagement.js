const Todo = require("./todo.js");

// import Todo from "./todo.js";

function todoManagement() {
  let todos = [];
  function addTodo(desc) {
    const newTodo = new Todo(desc);
    todos.push(newTodo);
    return newTodo.id;
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
  function getNumberOfDone() {
    return todos.filter((todo) => todo.done).length;
  }
  function getNumberOfNotDone() {
    return todos.filter((todo) => !todo.done).length;
  }

  return {
    addTodo,
    removeTodo,
    findTodo,
    getTodos,
    getNumberOfDone,
    getNumberOfNotDone,
  };
}
module.exports = todoManagement;
// export default todoManagement;
