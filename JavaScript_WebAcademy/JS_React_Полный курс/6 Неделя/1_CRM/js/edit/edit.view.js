const elementsTable = {
  form: document.querySelector("#form"),
  number: document.querySelector("#number"),
  id: document.querySelector("#id"),
  date: document.querySelector("#date"),
  product: document.querySelector("#product"),
  name: document.querySelector("#name"),
  email: document.querySelector("#email"),
  phone: document.querySelector("#phone"),
  status: document.querySelector("#status"),
  saveEdit: document.querySelector("#saveEdit"),
  // col: document.querySelectorAll(".col"),
  // coll: document.querySelectorAll('[data-attr="collArr"]'),
};

function renderResultRequst(requst) {
  elementsTable.id.innerText = requst.id;
  elementsTable.number.innerText = requst.id;
  elementsTable.date.innerText = requst.date;
  elementsTable.product.value = requst.product;
  elementsTable.name.value = requst.name;
  elementsTable.email.value = requst.email;
  elementsTable.phone.value = requst.phone;
  elementsTable.status.value = requst.status;
}

function getFormInput() {
  return new FormData(elementsTable.form);
  // return {
  //   id: elementsTable.id.value,
  //   name: elementsTable.name,
  //   email: elementsTable.email,
  //   phone: elementsTable.phone,
  //   product: elementsTable.product,
  //   status: elementsTable.status,
  // };
}

// //Этот код вывода на страницу, шел тяжелым путем, тк не мог вывести value input — выводился underfined. Оптимизация кода в функции renderResultRequst()
//   const qw = Array.from(elementsTable.coll);
//   console.log(qw);
//   const w = qw.forEach(function (item) {
//     console.log(item.textContent)
//   });

//   for (let i = 0; i < qw.length; i++) {
//     console.log(qw[i].childNodes[0].parentNode)

//   }
//   Выводим на страницу редактирования указанную заявку
//   function renderResultRequst(itemSearch) {
//     const idHTML = `<div class="col">Заявка №<span id="number"> ${itemSearch[0].id}</span></div>`;
//     elementsTable.numberID.insertAdjacentHTML("beforebegin", idHTML);

//     const dateHTML = `<div class="col" id="date">${itemSearch[0].date}</div> `;
//     elementsTable.date.insertAdjacentHTML("afterend", dateHTML);

//     function rendSelectOptionsProduct() {
//       const as = elementsTable.product.getElementsByTagName("option");
//       for (let i = 0; i < as.length; i++) {
//         if (as[i].value === itemSearch[0].product) {
//           as[i].selected = itemSearch[0].product;
//         }
//       }
//     }
//     rendSelectOptionsProduct();

//     const nameHTML = `<input type="text" class="form-control" id="name" value=${itemSearch[0].name} name="name"/>`;
//     elementsTable.name.insertAdjacentHTML("afterbegin", nameHTML);

//     const emailHTML = `<input type="text" class="form-control" value="${itemSearch[0].email}" id="email" name="email"/>`;
//     elementsTable.email.insertAdjacentHTML("afterbegin", emailHTML);

//     const phoneHTML = `<input type="text" class="form-control" value="${itemSearch[0].phone}" id="phone" name="phone"/>`;
//     elementsTable.phone.insertAdjacentHTML("afterbegin", phoneHTML);

//     function rendSelectOptionsStatus() {
//       const as = elementsTable.status.getElementsByTagName("option");
//       for (let i = 0; i < as.length; i++) {
//         if (as[i].value === itemSearch[0].status) {
//           as[i].selected = itemSearch[0].status;
//         }
//       }
//     }
//     rendSelectOptionsStatus();
//   }

export { elementsTable, renderResultRequst, getFormInput };
