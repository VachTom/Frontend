import model from "./model.js";
import view from "./view.js";

const btnPlus = document.getElementById("btnPlus");
const btnMinus = document.getElementById("btnMinus");
const btnReset = document.getElementById("btnReset");

// // По обычному

// updateCountroler(counter);
// btnPlus.addEventListener("click", function () {
//   increase();
//   updateCountroler(counter);
// });

// btnMinus.addEventListener("click", function () {
//  decrease();
//  updateCountroler(counter);
// });

// btnReset.addEventListener("click", function () {
//  reset();
//  updateCountroler(counter);
// });

// // Как объект

view.updateCountroler(model.counter);

btnPlus.addEventListener("click", function () {
  model.increase();
  view.updateCountroler(model.counter);
});

btnMinus.addEventListener("click", function () {
  model.decrease();
  view.updateCountroler(model.counter);
});

btnReset.addEventListener("click", function () {
  model.reset();
  view.updateCountroler(model.counter);
});
