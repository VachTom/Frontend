const input = document.getElementById("input");
const btnPlus = document.getElementById("btnPlus");
const btnMinus = document.getElementById("btnMinus");
const btnReset = document.getElementById("btnReset");

let counter = 0; // MODEL
input.value = counter; // VIEW


// CONTROLLER
btnPlus.addEventListener("click", function () { 
  counter++; // MODEL
  input.value = counter; // VIEW
});

btnMinus.addEventListener("click", function () {
  counter--;
  input.value = counter;
});

btnReset.addEventListener("click", function () {
  counter = 0;
  input.value = counter;
});
