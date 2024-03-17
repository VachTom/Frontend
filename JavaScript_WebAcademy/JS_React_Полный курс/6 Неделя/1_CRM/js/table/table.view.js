// import * as view from "../form/form.view"

const elementsTable = {
  listRequst: document.getElementById("tbody"),
};

function renderListRequest(record) {
  const listHTML = `
 <tr>
  <th scope="row">${record.id}</th>
  <td>${record.data}</td>
  <td>${record.product}</td>
  <td>${record.name}</td>
  <td>${record.email}</td>
  <td>${record.phone}</td>
  <td>
   <div class="badge badge-pill badge-danger">Новый</div>
  </td>
  <td>
   <a href="edit.html">Редактировать</a>
  </td>
 <tr>`;
  // <div class="badge badge-pill badge-warning">В работе</div>
  // <div class="badge badge-pill badge-success">Завершенный</div>
  elementsTable.listRequst.insertAdjacentHTML("beforeend", listHTML);

  // ДЛЯ ПРИСВАИВАНИЯ СТАТУСА
}
export { elementsTable, renderListRequest };
