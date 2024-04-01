import * as editView from "./edit.view.js";

function init() {
  return getRequstId();
}

function getRequstId() {
  const params = new URLSearchParams(window.location.search);
  const idReq = parseInt(params.get("id"));

  const req = JSON.parse(localStorage.getItem("requst"));

  const resultRequst = req.filter((item) => item.id === idReq);
  console.log("Вроде это", resultRequst);

  function renderResultRequst(itemSearch) {
    const idHTML = `<div class="col">Заявка №<span id="number"> ${itemSearch[0].id}</span></div>`;
    editView.elementsTable.numberID.insertAdjacentHTML("beforebegin", idHTML);

    const dateHTML = `<div class="col" id="date">${itemSearch[0].date}</div> `;
    editView.elementsTable.date.insertAdjacentHTML("afterend", dateHTML);


    function rendSelectOptionsProduct() {
      const as = editView.elementsTable.product.getElementsByTagName("option");
      for (let i = 0; i < as.length; i++) {
        if (as[i].value === itemSearch[0].product) {
          as[i].selected = itemSearch[0].product;
        }
      }
    }
    rendSelectOptionsProduct();
    

    const nameHTML = `<input type="text" class="form-control" value="${itemSearch[0].name}" id="name" name="name"/>`;
    editView.elementsTable.name.insertAdjacentHTML("afterbegin", nameHTML);
                          
    const emailHTML = `<input type="text" class="form-control" value="${itemSearch[0].email}" id="email" name="email"/>`;
    editView.elementsTable.email.insertAdjacentHTML("afterbegin", emailHTML);
  
    const phoneHTML = `<input type="text" class="form-control" value="${itemSearch[0].phone}" id="phone" name="phone"/>`;
    editView.elementsTable.phone.insertAdjacentHTML("afterbegin", phoneHTML);
  

    
    function rendSelectOptionsStatus() {
      const as = editView.elementsTable.status.getElementsByTagName("option");
      for (let i = 0; i < as.length; i++) {
        if (as[i].value === itemSearch[0].status) {
          as[i].selected = itemSearch[0].status;
        }
      }
    }
    rendSelectOptionsStatus();

  }

  renderResultRequst(resultRequst);
}
init();
