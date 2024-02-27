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
    product: elementsForm.product.value
  }
  return formData;
}


export { elementsForm, getFormData };


