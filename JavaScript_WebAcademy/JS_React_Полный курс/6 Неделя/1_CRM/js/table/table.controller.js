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

const actionNumber = viewTable.elementsTable.listRequst.addEventListener("click", function (e) {
  e.preventDefault();
  const eTarget = e.target;

  return eTarget.closest(".trList").firstChild.nextElementSibling.innerText;
});

export { actionNumber };
