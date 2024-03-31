import * as editView from "./edit.view.js";

function init() {
  const id = getRequstId();
}

function getRequstId() {
  const params = new URLSearchParams(window.location.search);
  const idReq = parseInt(params.get("id"));

  const req = JSON.parse(localStorage.getItem("requst"));

  const resultRequst = req.filter((item) => item.id === idReq);
  console.log("Вроде это", resultRequst);



  const q = `<div class="col">Заявка №<span id="number"> ${idReq}</span></div>`;

  editView.elementsTable.numberID.insertAdjacentHTML("beforebegin", q);
}
init();
