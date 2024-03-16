import * as model from "../model.js";
import * as testData from "./form.test-data.js";
import * as view from "./form.view.js";

view.renderTestData(testData.getTestData());

view.elementsForm.form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formDat = view.getFormData();
  const record = model.createRecord(formDat);

  view.clearForm();
  view.renderTestData(testData.getTestData());

});

const getLStorage = JSON.parse(localStorage.getItem("requst"));
model.getLocalStorage(getLStorage);
