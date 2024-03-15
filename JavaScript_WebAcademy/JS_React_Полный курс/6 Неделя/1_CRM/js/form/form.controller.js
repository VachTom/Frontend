import * as model from "../model.js";
import * as testData from "./form.test-data.js";
import * as view from "./form.view.js";

function asdF() {
  const s = testData.getTestData();
  view.renderTestData(s);
  model.createRecord(s)
}
asdF()

// model.createRecord(s);
// view.renderDataReplace();

view.elementsForm.form.addEventListener("submit", function (e) {
  e.preventDefault();

  var isResizeble = false;

if(!isResizeble) {
 // Ваша ф-ция которая что то делает, отработает 1 раз и все

isRezeble = true;
}

  view.clearForm()
const testik = testData.getTestData()
  view.renderTestData(testik)
  model.createRecord(testik);

  // const s = view.getFormData()
  // asdF();

  // model.createRecord()
  // view.renderDataReplace();

  // const formD = view.getFormData();
  // console.log("formD",formD)
  // const record = model.createRecord(formD);
  // console.log("record",record)
  // view.renderDataReplace();

  // console.log(formDattt)
  // let d = testData.getTestData();
  // view.renderTestData(d);
  // model.createRecord(d);
});

// const getLStorage = JSON.parse(localStorage.getItem("requst"));
// model.getLocalStorage(getLStorage);
