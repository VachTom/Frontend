// import * as view from "../form/form.view"
const elementsTable = {
  body: document.querySelector("body"),
  listRequst: document.getElementById("tbody"),
  trList: document.getElementsByClassName("trList"),
  aEdit: document.getElementsByClassName("aEdit"),

};

function renderListRequest(record) {
  const listHTML = `
 <tr class="trList">
  <th class="idRow" scope="row">${record.id}</th>
  <td>${record.date}</td>
  <td>${record.product}</td>
  <td>${record.name}</td>
  <td>${record.email}</td>
  <td>${record.phone}</td>
  <td>
   <div class="badge badge-pill badge-danger">Новый</div>
  </td>
  <td>
   <a href="edit.html?id=${record.id}" class="aEdit">Редактировать</a>
  </td>
 <tr>`;
  // <div class="badge badge-pill badge-warning">В работе</div>
  // <div class="badge badge-pill badge-success">Завершенный</div>
  elementsTable.listRequst.insertAdjacentHTML("beforeend", listHTML);

  // ДЛЯ ПРИСВАИВАНИЯ СТАТУСА
}
export { elementsTable, renderListRequest };



/* Здесь селектор атрибута используется для возврата списка элементов списка, 
содержащихся в список, идентификатор которого имеет атрибут со значением : 
"userlist""data-active""1"

const container = document.querySelector("#userlist");
const matches = container.querySelectorAll("li[data-active='1']"); */