import * as model from "../model.js";
import * as testData from "./form.test-data.js";
import * as view from "./form.view.js";

const s = testData.getTestData();
console.log(s);
// const sS = Array.prototype.slice.call(s)
// console.log(sS)
const testDataArr = Object.values(s);
testDataArr.forEach(function (item) {
  if (item === "Вачик Каренович") {
    console.log("УРА!");
  } else {
    console.log("НЕ УРА!");
  }
});

view.elementsForm.form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = view.getFormData();
  model.createRecord(formData);
});

const getLStorage = JSON.parse(localStorage.getItem("requst"));
model.getLocalStorage(getLStorage);
