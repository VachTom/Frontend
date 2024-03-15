const elementsForm = {
  form: document.getElementById("form"),
  name: document.getElementById("name"),
  phone: document.getElementById("phone"),
  email: document.getElementById("email"),
  product: document.getElementById("product"),
  formApplication: document.getElementById("formApplication"),
  inputs: document.querySelector(".inputs"),
  formControl: document.getElementsByClassName("form-control"),
};

function getFormData() {
  const formData = {
    name: elementsForm.name,
    phone: elementsForm.phone,
    email: elementsForm.email,
    product: elementsForm.product,
  };
  console.log(formData.email);
  return formData;
}

// Передаем Массив с обьектами и вытаскиваем по if имя и выводим в соответсвующее поле
function renderTestData(record) {
  elementsForm.name.value = record.name;
  elementsForm.email.value = record.email;
  elementsForm.phone.value = record.phone;

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

function clearForm() {
  elementsForm.name.value = "";
  elementsForm.email.value = "";
  elementsForm.phone.value = "";
}

export { elementsForm, getFormData, renderTestData, clearForm };
