// import * as model from "../model.js";
import * as viewTable from "./table.view.js";

const getLStorage = JSON.parse(localStorage.getItem("requst"));
console.log(getLStorage);

function sda(arr) {
  arr.forEach(function (item) {
    viewTable.renderListRequest(item);
  });
}
sda(getLStorage);



const q = viewTable.elementsTable.aEdit.closest()
console.log(q)
viewTable.elementsTable.listRequst.addEventListener("click", function (e) {
  console.log(e.target);
  // if (e.target = viewTable.elementsTable.aEdit) {
   // viewTable.elementsTable.aEdit.click()
  // }

});

// viewTable.elementsTable.aEdit.addEventListener("click", function (e) {
//  console.log(e.target)
// })