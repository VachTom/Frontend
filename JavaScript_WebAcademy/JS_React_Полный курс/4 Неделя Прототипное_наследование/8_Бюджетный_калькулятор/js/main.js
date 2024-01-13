// ========= MODEL =========
var budget = []; // Data

const form = document.querySelector("#form");

var title = document.querySelector("#title");
var type = document.querySelector("#type");
var value = document.querySelector("#value");

var incomesList = document.querySelector("#incomes-list");
var expensesList = document.querySelector("#expenses-list");

// var date = new Date();
// var month = document.querySelector("#month");
// var year = document.querySelector("#year");
// var s = date.getMonth();
// month.append(s);
// ========= VIEW =========

// ========= CONTROLLER =========
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (title.value === 0) {
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

  var id = budget.length > 0 ? budget[budget.length - 1].id + 1 : 0; // Расчет ID
  var record =
    // Формируем запись массива
    {
      id: id,
      type: type.value,
      title: title.value.trim(),
      value: value.value,
    };
  if (record.type === "inc") {
    const calcHTML = `<li data-id="${record.id}"class="budget-list__item item item--income">
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
    incomesList.insertAdjacentHTML("afterbegin", calcHTML);
  }

  if (record.type === "exp") {
    const calcHTML = `<li data-id="${record.id}"class="budget-list__item item item--expense">
                      <div class="item__title">${record.title}</div>
                      <div class="item__right">
                          <div class="item__amount">- ${record.value}</div>
                          <button class="item__remove">
                              <img
                                  src="./img/circle-red.svg"
                                  alt="delete"
                              />
                          </button>
                      </div>
                    </li>`;
    expensesList.insertAdjacentHTML("afterbegin", calcHTML);
  }
});

// Function
function insertTestData() {
  const testData = [
    { type: "inc", title: "Фриланс", value: "500" },
    { type: "inc", title: "Зарплата", value: "1500" },
    { type: "inc", title: "Рента", value: "2000" },
    { type: "inc", title: "Бизнес", value: "3000" },
    { type: "exp", title: "Кафе", value: "5000" },
    { type: "exp", title: "Продукты", value: "300" },
    { type: "exp", title: "Квартира", value: "200" },
    { type: "exp", title: "Транспорт", value: "100" },
  ];
  function getRandomInt(maxLength) {
    return Math.floor(Math.random() * maxLength);
  }
  const randArr = getRandomInt(testData.length);
  console.log(randArr, testData[randArr]);

  type = testData[randArr]["type"];
  title = testData[randArr]["title"];
  value = testData[randArr]["value"];
}
insertTestData();
// Общие доходы/расходы
// total-income
// total-expense

// var f = function calculation() {};
// Таблица доходы/расходы
// incomes-list
// expenses-list
