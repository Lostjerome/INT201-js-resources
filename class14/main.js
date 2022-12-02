import { students } from "./students.js";
import { lecturers } from "./lecturers.js";

const dataListDiv = document.getElementById("dataList");
const buttonPanelDiv = document.getElementById("buttonPanel");
const stdBtn = document.getElementById("stdBtn");
const lectBtn = document.getElementById("lectBtn");
const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");

const btnToDataList = {
  stdBtn: students,
  lectBtn: lecturers,
};

// console.log(students);
// console.log(lecturers);

const clickHandler = (e) => {
  const btn = e.target;
  const data = btnToDataList[btn.id];

  dataListDiv.textContent = "";

  const ul = document.createElement("ul");
  dataListDiv.appendChild(ul);

  data.forEach((item) => {
    const { id, name } = item;
    const li = document.createElement("li");
    li.textContent = `ID:${id} - ${name}`;
    ul.appendChild(li);
  });

  // alertEventHandler(e);
};

const keypressHandler = (e) => {
  const value = e.target.value;
  const display = () => {
    const p = document.createElement("p");
    p.textContent = value;
    outputText.appendChild(p);
  };

  e.key === "Enter" && 
  display()
  // (outputText.textContent = value);
};

const alertEventHandler = (e) => {
  const event = `Hello, 
  event.target: ${e.target}
  event.target id: ${e.target.id}
  event.type: ${e.type}
  event.currentTarget: ${e.currentTarget}
  event.phase: ${e.eventPhase}
  `;
  // alert(event)
  console.log(event);
};

stdBtn.addEventListener("click", clickHandler, true);
lectBtn.addEventListener("click", clickHandler, true);

// buttonPanelDiv.addEventListener("click", alertEventHandler, true);

inputText.addEventListener("keypress", keypressHandler, true);
