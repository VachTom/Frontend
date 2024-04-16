import * as editView from "./edit.view.js";
import * as model from "../model.js";

function init() {
  const id = getRequstId();
  const requst = model.searchRequst(id);
  console.log("Основа", requst);

  editView.renderResultRequst(requst); // Выводим на стр Редактирования
  setupEventListener();
}

function getRequstId() {
  const params = new URLSearchParams(window.location.search); // вытаскиваем id с сыллки со стр
  return parseInt(params.get("id"));
}

function setupEventListener() {
  editView.elementsTable.form.addEventListener("submit", forSetupEventListener);
}

function forSetupEventListener(e) {
  e.preventDefault();
  const formData = editView.getFormInput();
  model.updateRequst(formData);
  window.location = "./table.html"
}

init();
