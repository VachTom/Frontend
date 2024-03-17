// import * as model from "../model.js";
import * as viewTable from "./table.view.js";

console.log(viewTable.elementsTable.listRequst);



const getLStorage = JSON.parse(localStorage.getItem("requst"));
console.log(getLStorage);

function sda(arr) {
 arr.forEach(function (item) {
  viewTable.renderListRequest(item)
 })
}
sda(getLStorage)
