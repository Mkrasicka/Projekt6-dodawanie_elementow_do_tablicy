
const btn = document.querySelector('button');
const div = document.querySelector('div');
// console.log(input);
// console.log(btn);
let names = [];

const addName = function(event) {
  event.preventDefault()
  const input = document.querySelector('input');
  const newName = input.value;

  if (input.value.length) {
    for (imie of names) {
      if (imie === newName) {
        alert("This name is already added.");
        return
      }
    }

    names.push(newName);

    div.textContent += newName + ",";

    input.value = "";
  }


}

btn.addEventListener("click", addName);
