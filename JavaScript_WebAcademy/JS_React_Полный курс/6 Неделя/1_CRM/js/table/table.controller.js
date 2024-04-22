import * as viewTable from "./table.view.js";
import * as model from "../model.js";

model.getLocalStorage().forEach((item) => viewTable.renderListRequest(item)); // Вывод таблицы с заявками

viewTable.elementsTable.body.addEventListener("click", function d(e) {
  statusIf(e);
});




function statusIf(e) {
  (e.target.textContent === "Новые") |
  (e.target.textContent === "Новые ") |
  (e.target.textContent === "В работе") |
  (e.target.textContent === "Завершенные")
    ? viewTable.renderListRequest(model.searchFilterStatus(forStatusIf(e.target.textContent)))
    // console.log(model.searchFilterStatus(forStatusIf(e.target.textContent)))
    : "";

  (e.target.textContent === "Все") | (e.target.textContent === "Все вместе")
    ? console.log(model.requst)
    : "";

    function forStatusIf(text) {
      return text === "Новые"
        ? (text = "Новая")
        : text === "Новые "
        ? (text = "Новая")
        : text === "Завершенные"
        ? (text = "Завершена")
        : text === "В работе"
        ? (text = "В работе")
        : "";
      }
  }




// }

// function setupEventListener(e) {
//   e.preventDefault();

//   // if () {

//     // }
// }
