import * as model from "../model.js";
import * as testData from "./form.test-data.js";
import * as view from "./form.view.js";

// testData.getTestData()

const bud = [];

const record = {
 name: this.name,
};


view.elementsForm.formApplication.addEventListener("click", function (e) {
  e.preventDefault();

  function renderRecord(item) {
    bud.push(item);
  }
  renderRecord(testData.getTestData());
  console.log(bud);
});
