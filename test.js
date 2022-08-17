// console.log("Hello World");
// function displayMessage(msg) {
//   console.log("starting...function");
//   console.log(msg);
//   console.log("ending...function");
// }

// let greetingMsg = "Welcome to the world of Javascript";

// displayMessage(greetingMsg);
const searchInput = document.querySelector("input");

searchInput.addEventListener("input", getData);

async function getData(e) {
  const word = e.target.value;
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((res) => {
      if (!res.ok) {
        console.log("Response Error");
        return;
      }
      return res.json();
    })
    .then((data) => {
      data && console.log(data[0].meanings[0].definitions[0].definition);
    });
}
