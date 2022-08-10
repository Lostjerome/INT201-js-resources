console.log("Hello World");
function displayMessage(msg) {
  console.log("starting...function");
  console.log(msg);
  console.log("ending...function");
}

let greetingMsg = "Welcome to the world of Javascript";

displayMessage(greetingMsg);
async function getData() {
  const data = await fetch(
    "https://api.dictionaryapi.dev/api/v2/entries/en/family"
  );
  const json = await data.json();
  console.log(json[0].meanings[0].definitions[0].definition);
}

getData();