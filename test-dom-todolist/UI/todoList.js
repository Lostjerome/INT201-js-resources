function todoUserInterface() {
  function showTodoItem(newId, newDescription) {
    const listTodo = document.getElementById("listTodo");

    const newTodo = document.createElement("div");
    newTodo.setAttribute("id", newId);
    newTodo.setAttribute("class", "todoItem");

    const newP = document.createElement("P");
    newP.innerText = newDescription;

    const doneBtn = document.createElement("button");
    doneBtn.innerText = "Not Done";

    const removeBtn = document.createElement("button");
    removeBtn.innerText = "remove";
    listTodo.appendChild(newTodo);

    newTodo.appendChild(newP);
    newTodo.appendChild(doneBtn);
    newTodo.appendChild(removeBtn);
  }
  function showNumberOfDone(numberOfDone) {
    const numberOfDoneSpan = document.getElementById("done");
    numberOfDoneSpan.textContent = "Number of Done:" + numberOfDone;
  }
  function showNumberOfNotDone(numberOfNotDone) {
    const numberOfNotDoneSpan = document.getElementById("notDone");
    numberOfNotDoneSpan.textContent = "Number of Not Done:" + numberOfNotDone;
  }
  return { showTodoItem, showNumberOfDone, showNumberOfNotDone };
}
module.exports = todoUserInterface;
// export default todoUserInterface;
