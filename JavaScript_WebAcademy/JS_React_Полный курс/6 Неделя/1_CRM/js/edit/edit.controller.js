import * as editView from "./edit.view.js";
import * as model from "../model.js";


function init() {
  return getRequstId();
}

function getRequstId() {
  const params = new URLSearchParams(window.location.search);
  const idReq = parseInt(params.get("id"));

  const req = JSON.parse(localStorage.getItem("requst"));

  const resultRequst = req.filter(item => item.id === idReq);
  console.log("Вроде это", resultRequst);

  editView.renderResultRequst(resultRequst);
}
init();



editView.elementsTable.form.addEventListener("click", function (e) {
  e.preventDefault()
  const data = editView.getFormData()
  console.log(data)
})