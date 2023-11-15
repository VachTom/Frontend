/* 
1. Создайте нового робота в виде объекта, дав ему имя robot.
Дайте ему имя и следующие свойства:
Свойство которое показывает его максимальный уровень энергии, 100 единиц.
Свойство которое показывает текущий заряд энергии. На старте равно максимальному уровню.*/

function Robots(name, yearProduction, country, energyFull) {
  this.name = name;
  this.yearProduction = yearProduction;
  this.country = country;
  this.energyFull = energyFull;

  this.energy = 100;
  (this.actions = [
    { nameAction: "уборка", price: 20 },
    { nameAction: "завтрак", price: 5 },
    { nameAction: "обед", price: 15 },
    { nameAction: "ужин", price: 10 },
    { nameAction: "покупки", price: 60 },
  ]),
    (this.age = 2023 - yearProduction);

  this.acquaintance = function () {
    console.warn(
      `Доброго времени суток, я робот по имени ${name}!\nПроизведен в стране: ${this.country}.\nГод выпуска: ${this.yearProduction}, возраст: ${this.age}.\nТекущий заряд: ${this.energyFull}%.\n\n`
    );
  };

  this.makeAction = function (action) {
    const currentAction = this.actions.find(function (item) {
      if (action === item.nameAction) return true;
    });
    if (!currentAction) {
      console.log(
        `Не могу выполнить "${action}". Такой задачи нет в моем списке.`
      );
      return;
    }

    if (this.energy >= currentAction.price) {
      this.energy = this.energy - currentAction.price;
      console.log(
        `Выполнил действие ${currentAction.nameAction}, осталось ${this.energy}% заряда.`
      );
    } else {
      console.error(
        `Недостаточно энергии для выполнения действия "${currentAction.nameAction}". Требуется ${currentAction.price}% энергии, осталось ${this.energy}%.`
      );
    }
  };
  this.makeCharge = function () {
    this.energy = 100;
    console.warn("Заряд завершен. Уровень энергии 100%.")
  };
}

var robotChappy = new Robots("Chappy", 1998, "Армения", 100);
console.log(robotChappy);
robotChappy.acquaintance();


robotChappy.makeAction("обед");
robotChappy.makeAction("ужин");

robotChappy.makeCharge();


robotChappy.makeAction("ужин");
robotChappy.makeAction("покупки");
robotChappy.makeAction("покупки");

robotChappy.makeAction("ужин");
robotChappy.makeAction("ужинdasda");
