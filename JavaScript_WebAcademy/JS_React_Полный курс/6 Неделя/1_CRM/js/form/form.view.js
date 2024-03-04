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

function renderTestData(record) {
  // Отображаем Доход на странице
  
  // console.log(elementsForm.name);
  
  // console.log(record.name);
  
  // const d = elementsForm.name.value;
  // const s = record.name;

  // console.log(d);
  // console.log(s);

  // if (record.name === "name") {
  // const html = `${d}`;

  // elementsForm.name.insertAdjacentHTML("afterbegin", s);
}

export { elementsForm, getFormData, renderTestData };
