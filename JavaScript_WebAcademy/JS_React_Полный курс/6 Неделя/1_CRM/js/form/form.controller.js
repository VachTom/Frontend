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


view.renderTestData(testData.getTestData())


view.elementsForm.form.addEventListener("submit", function (e) {
  e.preventDefault();

  const getTestData = testData.getTestData();
  // console.log("Тесттттттттттффффффффф", getTestData);


  const l = view.elementsForm.name;
  if (!model.checkEmpty(l)) {
    model.createRecord(getTestData);
    console.log("Тест", getTestData);
  } 
  if (model.checkEmpty(l)) {
    model.createRecord(getTestData);
    console.log("Тест", getTestData);
  } 
  // if (model.checkEmpty(l)) {
  //   const formData = view.getFormData();
  //   model.createRecord(formData);
  //   console.log("Инпутик", formData);
  // }


  view.renderDataReplace()
  view.renderDataReplace()
  view.renderDataReplace()
view.renderTestData(getTestData)


  // console.log(l);
  // const sad = checkEmpty(l);
  // console.log(sad)
  // view.renderTestData(record)

  // view.renderTestData(getTestData)
});

const getLStorage = JSON.parse(localStorage.getItem("requst"));
model.getLocalStorage(getLStorage);
