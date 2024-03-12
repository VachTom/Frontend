const elementsForm = {
  form: document.getElementById("form"),

  name: document.getElementById("name"),
  phone: document.getElementById("phone"),
  email: document.getElementById("email"),
  product: document.getElementById("product"),
  formApplication: document.getElementById("formApplication"),
};
// function renderGetData(elem) {
//   elementsForm.product.value = elem.product;
//   elementsForm.name.value = elem.name;
//   elementsForm.email.value = elem.email;
// }

function getFormData() {
  const formData = {
    name: elementsForm.name.value,
    phone: elementsForm.phone.value,
    email: elementsForm.email.value,
    product: elementsForm.product.value,
  };
  return formData;
}

// Передаем Массив с обьектами и вытаскиваем по if имя и выводим в соответсвующее поле
function renderTestData(record) {
  const htmlName = `<div class="form-group">
                      <input 
                        value="${record.name}"
                        id="name"
                        type="text"
                        name="name"
                        autocomplete="on"
                        class="form-control"
                        placeholder="Имя и Фамилия"
                        required
                      />
                    </div>`;

  const htmlEmail = `<div class="form-group">
                        <input
                          value="${record.email}"
                          id="email"
                          type="email"
                          name="email"
                          autocomplete="on"
                          class="form-control"
                          placeholder="Email"
                          required
                         />
                     </div>`;

  const htmlPhone = `<div class="form-group">
                       <input
                         value="${record.phone}"
                         id="phone"
                         type="text"
                         name="phone"
                         autocomplete="on"
                         class="form-control"
                         placeholder="Телефон"
                       />
                      </div>`;

  function rendData(data) {
    elementsForm.form.firstElementChild.insertAdjacentHTML("afterend", data);
  }
  rendData(htmlName + htmlPhone + htmlEmail);

  
  function rendSelectOptions() {
    const as = elementsForm.product.getElementsByTagName("option");
    for (let i = 0; i < as.length; i++) {
      if (as[i].value === record.product) {
        as[i].selected = record.product;
      }
    }
  }
  rendSelectOptions();
}

export { elementsForm, getFormData, renderTestData };
