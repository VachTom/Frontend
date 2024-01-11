export default class Module {
  constructor() {
    this.tasks = [];
    this.loadFromLocalStorage();
  }

  loadFromLocalStorage() {
    const data = localStorage.getItem("tasks");
    if (data) {
      this.tasks = JSON.parse(data);
    }
  }

  // Для сохранения в базе(хранилище) данных JSON, при каждом обновлении стр - добавляется в базу данные
  saveToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks)); // сохранение и перенос в локалСторадж
  }

  addTask(text) {
    let id = 1;
    if (this.tasks.length > 0) {
      id = this.tasks[this.tasks.length - 1]["id"] + 1;
    }

    const newTask = {
      id: id,
      status: "active",
      text: text,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  findTask(id) {
    const task = this.tasks.find(function (task) {
      if (task.id === parseInt(id)) {
        return true;
      }
    });
    return task;
  }

  doneTask(task) {
    task.status = "done";
  }
  removeTask(task) {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }
}
