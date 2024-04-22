/* Реализовать работу формы для добавления заявок.
1. Все добавленные заявки должны попадать в модель.
2. Данные хранятся в localStorage.
3. При обновлении страницы и добавлении новых заявок, старые заявки должны оставаться в localStorage и дополняться новыми, а не перезаписываться.
4. Пример: Открыли страницу, добавили 3 заявки. Обновили страницу, добавили еще 2 заявки. В localStorage по итогу должно быть 5 заявок.
5. Реализовать модуль для быстрого добавления тестовых данных в форму. Аналогично тому как делали для проекта "Бюджетный калькулятор".
6. Для обозначения переменных используем let и const. Без var.*/

const requst = getLocalStorage();

function dateFull() {
  const now = new Date();
  const year =
    now.getUTCDate() + ".0" + now.getUTCMonth() + "." + now.getUTCFullYear();
  return year;
}

function createRecord(formData) {
  let id = 0;
  if (requst.length > 0) {
    const lastElement = requst[requst.length - 1];
    const lastElID = lastElement.id;
    id = lastElID + 1;
  }
  const record = {
    id: id,
    date: dateFull(),
    name: formData.name,
    phone: formData.phone,
    email: formData.email,
    product: formData.product,
    status: formData.status,
  };
  requst.push(record);
  console.log("Массив: ", requst);
  setLocalStorage();
  return record;
}

function setLocalStorage() {
  localStorage.setItem("requst", JSON.stringify(requst));
}

function getLocalStorage(requst) {
  return localStorage.getItem(requst)
    ? JSON.parse(localStorage.getItem(requst))
    : [];

  // Как я делал раньше, код выше оптимизация
  // if (getLStorage != null) {
  //   getLStorage.forEach(function (item) {
  //     if (getLStorage) {
  //       requst.push(item);
  //       localStorage.setItem("requst", JSON.stringify(requst));
  //     }
  //   });
  // }
}

function checkEmpty(formInput) {
  if (formInput != "") {
    return true;
  }
}

function searchRequst(idReq) {
  return requst.find((item) => item.id == idReq); // ВАЖНО: Обращай внимание на способ поиска элемента find, filter, for каждый по своему влияет на последующие шаги, а кокнретнее с выводом результата на страницу
}

function searchFilterStatus(filterStatus) {
  return requst.filter((item) => item.status == filterStatus);

}

function searchFilterProduct(filterProduct) {
  return requst.filter((item) => item.product == filterProduct);
}

function updateRequst(formData) {
  const requsts = searchRequst(formData.id);

  requsts.name = formData.name.value;
  requsts.phone = formData.phone.value;
  requsts.email = formData.email.value;
  requsts.product = formData.product.value;
  requsts.status = formData.status.value;

  setLocalStorage();
}



export {
  requst,
  createRecord,
  dateFull,
  setLocalStorage,
  getLocalStorage,
  checkEmpty,
  searchRequst,
  updateRequst,
  searchFilterStatus,
  searchFilterProduct
};
