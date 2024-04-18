import * as viewTable from "./table.view.js";
import * as model from "../model.js";

model.getLocalStorage().forEach((item) => viewTable.renderListRequest(item)); // Вывод таблицы с заявками

viewTable.elementsTable.body.addEventListener("click", function d(e) {
  if (
    (e.target.textContent === "Все") |
    (e.target.textContent === "Все вместе") |
    (e.target.textContent === "Новые") |
    (e.target.textContent === "Новые ") |
    (e.target.textContent === "В работе") |
    (e.target.textContent === "Завершенные")
  ) {
    console.log(model.searchFilterStatus(e.target.textContent));
  }
});

// function setupEventListener(e) {
//   e.preventDefault();

//   // if () {

//     // }
// }
