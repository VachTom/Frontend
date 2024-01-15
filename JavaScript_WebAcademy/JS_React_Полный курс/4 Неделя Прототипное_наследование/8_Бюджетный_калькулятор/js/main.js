// DATA
const budget = [];

// DOM
const form = document.querySelector("#form");
const type = document.querySelector("#type");
const title = document.querySelector("#title");
const value = document.querySelector("#value");
const incomesList = document.querySelector("#incomes-list");
const expensesList = document.querySelector("#expenses-list");
const totalInc = document.querySelector("#total-income");
const totalExp = document.querySelector("#total-expense");

// Functions
function insertTestData() {
  const testData = [
    { type: "inc", title: "Фриланс", value: 1500 },
    { type: "inc", title: "Зарплата", value: 2000 },
    { type: "inc", title: "Бизнес", value: 2000 },
    { type: "inc", title: "Рента", value: 1000 },
    { type: "exp", title: "Продукты", value: 300 },
    { type: "exp", title: "Кафе", value: 200 },
    { type: "exp", title: "Транспорт", value: 200 },
    { type: "exp", title: "Квартира", value: 500 },
  ];

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const randomIndex = getRandomInt(testData.length);
  const randomData = testData[randomIndex];

  type.value = randomData.type;
  title.value = randomData.title;
  value.value = randomData.value;
}

function clearForm() {
  form.reset();
}
function totalCalcBudget() {
  let totalIncom = budget.reduce(function (prev, item) {
    if (item.type === "inc") {
      return prev + item.value;
    } else {
      return prev;
    }
  }, 0);
  console.log("TotalInc:", totalIncom);

  let totalExpen = budget.reduce(function (prev, item) {
    if (item.type === "exp") {
      return prev + item.value;
    } else {
      return prev;
    }
  }, 0);
  console.log("TotalExp:", totalExpen);
}
// Actions
insertTestData();
totalCalcBudget();
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // Проверка формы на заполненность
  if (title.value.trim() === "") {
    title.classList.add("form__input--error");
    return;
  } else {
    title.classList.remove("form__input--error");
  }

  if (value.value.trim() === "" || +value.value <= 0) {
    value.classList.add("form__input--error");
    return;
  } else {
    value.classList.remove("form__input--error");
  }

  // Расчет id
  let id = 1;
  if (budget.length > 0) {
    const lastElement = budget[budget.length - 1];
    const lastElID = lastElement.id;
    id = lastElID + 1;
  }

  // Формируем запись
  const record = {
    id: id,
    type: type.value,
    title: title.value.trim(),
    value: +value.value,
  };
  console.log(record);

  // Добавляем запись в данные
  budget.push(record);

  // Отображаем Доход на странице
  if (record.type === "inc") {
    const html = `<li data-id="${record.id}" class="budget-list__item item item--income">
                        <div class="item__title">${record.title}</div>
                        <div class="item__right">
                            <div class="item__amount">+ ${record.value}</div>
                            <button class="item__remove">
                                <img
                                    src="./img/circle-green.svg"
                                    alt="delete"
                                />
                            </button>
                        </div>
                    </li>`;

    incomesList.insertAdjacentHTML("afterbegin", html);
  }

  // Отображаем Расход на странице
  if (record.type === "exp") {
    const html = `<li data-id="${record.id}" class="budget-list__item item item--expense">
                        <div class="item__title">${record.title}</div>
                        <div class="item__right">
                            <div class="item__amount">
                                - ${record.value}
                            </div>
                            <button class="item__remove">
                                <img src="./img/circle-red.svg" alt="delete" />
                            </button>
                        </div>
                    </li>`;

    expensesList.insertAdjacentHTML("afterbegin", html);
  }

  console.log(budget);
  clearForm();
  insertTestData();
  totalCalcBudget();
});
// УДАЛЕНИЕ НОВОЙ ЗАПИСИ
document.body.addEventListener("click", function (e) {
  if (e.target.closest("button.item__remove")) {
    // console.log("До удаления", budget);
    const recordElement = e.target.closest("li.budget-list__item");
    // console.log(recordElement);
    const id = +recordElement.dataset.id;
    // console.log("DELETE!!!!", "Индекс - ", id);
    const ind = budget.findIndex(function (item) {
      if (item.id === id) return true;
    });
    budget.splice(ind, 1);
    // console.log("ПОСЛЕ удаления", budget);
    recordElement.remove();
    totalCalcBudget();
  }
});
