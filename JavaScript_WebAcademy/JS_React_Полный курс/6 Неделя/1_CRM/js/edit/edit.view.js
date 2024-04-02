const elementsTable = {
  numberID: document.getElementById("id"),
  date: document.getElementById("dateStrong"),
  product: document.getElementById("product"),
  name: document.getElementById("nameHTML"),
  email: document.getElementById("emailHTML"),
  phone: document.getElementById("phoneHTML"),
  status: document.getElementById("status"),
  saveEdit: document.getElementById("saveEdit"),
  col: document.querySelectorAll(".col"),
  coll: document.querySelectorAll('[data-attr="collArr"]'),

};
const qw = Array.from(elementsTable.coll)
// console.log(qw)

qw.forEach(el => console.log(el))

function renderResultRequst(itemSearch) {
  const idHTML = `<div class="col">Заявка №<span id="number"> ${itemSearch[0].id}</span></div>`;
  elementsTable.numberID.insertAdjacentHTML("beforebegin", idHTML);

  const dateHTML = `<div class="col" id="date">${itemSearch[0].date}</div> `;
  elementsTable.date.insertAdjacentHTML("afterend", dateHTML);

  function rendSelectOptionsProduct() {
    const as = elementsTable.product.getElementsByTagName("option");
    for (let i = 0; i < as.length; i++) {
      if (as[i].value === itemSearch[0].product) {
        as[i].selected = itemSearch[0].product;
      }
    }
  }
  rendSelectOptionsProduct();

  const nameHTML = `<input type="text" class="form-control" value="${itemSearch[0].name}" id="name" name="name"/>`;
  elementsTable.name.insertAdjacentHTML("afterbegin", nameHTML);

  const emailHTML = `<input type="text" class="form-control" value="${itemSearch[0].email}" id="email" name="email"/>`;
  elementsTable.email.insertAdjacentHTML("afterbegin", emailHTML);

  const phoneHTML = `<input type="text" class="form-control" value="${itemSearch[0].phone}" id="phone" name="phone"/>`;
  elementsTable.phone.insertAdjacentHTML("afterbegin", phoneHTML);

  function rendSelectOptionsStatus() {
    const as = elementsTable.status.getElementsByTagName("option");
    for (let i = 0; i < as.length; i++) {
      if (as[i].value === itemSearch[0].status) {
        as[i].selected = itemSearch[0].status;
      }
    }
  }
  rendSelectOptionsStatus();
}

export { elementsTable, renderResultRequst };
