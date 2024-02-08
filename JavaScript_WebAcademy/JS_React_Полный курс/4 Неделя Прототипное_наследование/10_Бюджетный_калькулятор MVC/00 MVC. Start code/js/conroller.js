import * as model from "./model.js";
import * as view from "./view.js";

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
  view.renderTestData(randomData);
}

function calcBudget() {
  // Считаем общий доход
  const totalIncome = budget.reduce(function (total, element) {
    if (element.type === "inc") {
      return total + element.value;
    } else {
      return total;
    }
  }, 0);
  console.log("totalIncome", totalIncome);

  // Считаем общий расход
  const totalExpense = budget.reduce(function (total, element) {
    if (element.type === "exp") {
      return total + element.value;
    } else {
      return total;
    }
  }, 0);
  console.log("totalExpense", totalExpense);

  const totalBudget = totalIncome - totalExpense;
  console.log("totalBudget", totalBudget);

  let expensePercents = 0;
  if (totalIncome) {
    expensePercents = Math.round((totalExpense * 100) / totalIncome);
  }
  console.log("expensePercents", expensePercents);

  const budgetSummary = {
    totalIncome,
    totalExpense,
    totalBudget,
    expensePercents,
  };
  view.renderBudget(budgetSummary);
}

function displayMonth() {
  const now = new Date();
  const year = now.getFullYear(); // 2023

  const timeFormatter = new Intl.DateTimeFormat("ru-RU", { month: "long" });
  const month = timeFormatter.format(now);

  view.renderMonth(month, year);
}

// Actions
displayMonth();
insertTestData();
// calcBudget();

// Добавление
view.elements.form.addEventListener("submit", function (e) {
  e.preventDefault();

  const checkResult = view.checkEmptyFields();
  if (checkResult === false) return; // проверка условий функции проверки
  //   if (!view.checkEmptyFields()) return; // проверка условий функции проверки
  const formData = view.getFormData();
  const record = model.createRecord(formData);

  model.createRecord(formData);
  view.renderRecord(record);

  // Посчитать бюджет
  // calcBudget();

  view.clearForm();
  insertTestData();
});

// Удаление
document.body.addEventListener("click", function (e) {
  // Кнопка удалить
  if (e.target.closest("button.item__remove")) {
    const id = view.removeRecord(e);
    model.deleteRecord(id);
    // Посчитать бюджет
    // calcBudget();
  }
});
