function todoUserInterface() {
  function showTodoItem(newId, newDescription) {
    const listTodo = document.getElementById("listTodo");

    const newTodo = document.createElement("div");
    newTodo.setAttribute("id", newId);
    newTodo.setAttribute("class", "todoItem");

    const newP = document.createElement("p");
    newP.innerText = newDescription;

    const doneBtn = document.createElement("button");
    doneBtn.setAttribute("id", "doneBtn" + newId);
    doneBtn.innerText = "done";

    const removeBtn = document.createElement("button");
    removeBtn.setAttribute("id", "removeBtn" + newId);
    removeBtn.innerText = "remove";

    newTodo.appendChild(newP);
    newTodo.appendChild(doneBtn);
    newTodo.appendChild(removeBtn);

    listTodo.appendChild(newTodo);
  }
  function showNumberOfDone(numberOfDone) {
    const numberOfDoneSpan = document.getElementById("done");
    numberOfDoneSpan.innerText = "Number of Done:" + numberOfDone;
  }
  function showNumberOfNotDone(numberOfNotDone) {
    const numberOfNotDoneSpan = document.getElementById("notDone");
    numberOfNotDoneSpan.innerText = "Number of Not Done:" + numberOfNotDone;
  }
  return { showTodoItem, showNumberOfDone, showNumberOfNotDone };
}
// module.exports = todoUserInterface
export default todoUserInterface;
