import * as model from "../model.js";
import * as testData from "./form.test-data.js";
import * as view from "./form.view.js";

// const sS = Array.prototype.slice.call(s)
// console.log(sS)

// const testDataArr = Object.values(s);
// testDataArr.forEach(function (item) {
//   if (item === "Курс по JavaScript") {
//     console.log("УРА!");
//   } else {
//     console.log("НЕ УРА...");
//   }
// });



view.elementsForm.form.addEventListener("submit", function (e) {
  e.preventDefault();

  const l = view.elementsForm.name.value;
  if (!model.checkEmpty(l)) {
    const s = testData.getTestData();
    model.createRecord(s);
    console.log("Тест", s);
  } 
  if (model.checkEmpty(l)) {
    const formData = view.getFormData();
    model.createRecord(formData);
    console.log("Инпутик", formData);
  }

  // console.log(l);
  // const sad = checkEmpty(l);
  // console.log(sad)
  // view.renderTestData(record)
});

const getLStorage = JSON.parse(localStorage.getItem("requst"));
model.getLocalStorage(getLStorage);
