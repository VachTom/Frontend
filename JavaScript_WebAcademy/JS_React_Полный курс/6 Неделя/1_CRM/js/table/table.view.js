// import * as view from "../form/form.view"
const elementsTable = {
  body: document.querySelector("body"),
  listRequst: document.getElementById("tbody"),
  trList: document.getElementsByClassName("trList"),
  aEdit: document.getElementsByClassName("aEdit"),
};

function renderListRequest(record) {
  // console.log(elementsTable.topNavID)
  const listHTML = `
 <tr class="trList">
  <th class="idRow" scope="row">${record.id}</th>
  <td>${record.date}</td>
  <td>${record.product}</td>
  <td>${record.name}</td>
  <td>${record.email}</td>
  <td>${record.phone}</td>
  <td>
   <div class="badge badge-pill ${statusColor(record)}">${record.status}</div>
  </td>
  <td>
   <a href="edit.html?id=${record.id}" class="aEdit">Редактировать</a>
  </td>
 <tr>`;
  // <div class="badge badge-pill badge-warning">В работе</div>
  // <div class="badge badge-pill badge-success">Завершенный</div>
  elementsTable.listRequst.insertAdjacentHTML("beforeend", listHTML);
}
function statusColor(record) {
  if (record.status === "Новая") {
    return "badge-danger";
  } else if (record.status === "В работе") {
    return "badge-warning";
  } else if (record.status === "Завершена") {
    return "badge-success";
  }
}

function clearListRequest(record) {
  // Ставим класс none в зависимости от условии

  // record.forEach((item) => renderListRequest(item));

  elementsTable.listRequst.classList.add("none");
}

export { elementsTable, renderListRequest, clearListRequest };
