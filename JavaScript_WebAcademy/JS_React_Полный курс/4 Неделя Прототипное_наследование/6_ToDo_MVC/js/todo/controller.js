import Module from "./model.js";
import View from "./view.js";

const model = new Module();
const view = new View(model.tasks);

// 1. Добавление задачи
view.elements.form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newTasks = model.addTask(view.elements.input.value);
  view.renderTask(newTasks);
  view.clearInput();
});

// 2. Нажали на чекбокс
view.elements.tasksList.addEventListener("click", function (e) {
  if (e.target.getAttribute("type") === "checkbox") {
    const id = e.target.closest(".todo-item").dataset.id;
    const task = model.findTask(id);
    model.doneTask(task)
  }
});

// model.addTask("d123123");
console.log(model.findTask(1));
// parentElement - поднимается на верх по разметке
// model.addTask("asdasd");
// // model.doneTask(model.tasks[0])
// // console.log(model)
// // view.renderTask(model.tasks[0])
// // view.renderTask(model.tasks[1])
// model.removeTask(model.tasks[2])
model.saveToLocalStorage();
