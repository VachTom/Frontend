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

// viewTable.elementsTable.listRequst.addEventListener("onclick", function (e) {
//   e.preventDefault();

//   const eTarget = e.target;

//   if (eTarget.tagName === "A") {
//     localStorage.setItem(
//       "id",
//       eTarget.closest(".trList").firstChild.nextElementSibling.innerText
//     );
//   }
// });

