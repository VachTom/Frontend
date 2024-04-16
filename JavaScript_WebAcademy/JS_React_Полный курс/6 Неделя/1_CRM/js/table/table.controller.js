import * as viewTable from "./table.view.js";

const getLStorage = JSON.parse(localStorage.getItem("requst"));
console.log(getLStorage);

function sda(arr) {
  arr.forEach(function (item) {
    viewTable.renderListRequest(item);
  });
}
sda(getLStorage);
