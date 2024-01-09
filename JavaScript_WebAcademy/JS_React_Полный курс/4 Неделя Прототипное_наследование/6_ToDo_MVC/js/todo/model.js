export default class Module {
  constructor() {
    this.tasks = [];
  }

  addTask(text) {
    this.tasks.push[text];
  }
  doneTask(task) {
    task.status = "done";
    const newTask = {
      text: text,
      status: "active",
    };
 this.tasks.push(newTask)
   }
}
// tasks = [
//   {
//     status: "active",
//     text: "Заверстать стартовый шаблон",
//   },
//   {},
//   {},
// ];
