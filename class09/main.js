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

myTodo.addTodo("Watch TV");
myTodo.addTodo("Go to the gym");
myTodo.addTodo("Go to the store");
myTodo.addTodo("Clean the house");
myTodo.addTodo("Read a book");

console.log(myTodo.getTodos());

myTodo.removeTodo(2);

console.log(myTodo.getTodos());

const { addTodo: myAdd, deleteTodo, getTodos } = myTodo;

myAdd("Was the car");

console.log(getTodos());
