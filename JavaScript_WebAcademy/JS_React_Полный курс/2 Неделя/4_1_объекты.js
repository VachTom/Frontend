/* Создайте объект который будет описывать робота. 

У робота есть имя, год выпуска, страна производства. 
Робот умеет делать три команды: Здороваться, называя свое имя. 
Рассказывать откуда он (в какой стране произведен).

Называть свой год выпуска и сколько ему лет. Для этого ему придется сообщить текущий год, 
чтобы робот посчитал свой возраст. 

Создайте конструктор который будет создавать таких роботов. 
С помощью конструктора создайте 2-х роботов. Сделайте чтобы каждый созданный робот представился,
рассказал откуда он и назал свой возраст и год выпуска */

function Robots(name, yearProduction, country) {
  this.name = name;
  this.yearProduction = yearProduction;
  this.country = country;
  this.age = 2023 - yearProduction;
  this.acquaintance  = function () {
    console.log(`Доброго времени суток, меня зовут ${this.name}!`);
    console.log(`Произведен в стране: ${this.country}.`);
    console.log(`Год выпуска: ${this.yearProduction}, возраст: ${this.age}.`);
   };
}

var robotChappy = new Robots('Chappy', 1989, "Армения");
console.log(robotChappy);
robotChappy.acquaintance();

var robotFranklin = new Robots('Франклин', 1923, "Германия");
console.log(robotFranklin);
robotFranklin.acquaintance();

