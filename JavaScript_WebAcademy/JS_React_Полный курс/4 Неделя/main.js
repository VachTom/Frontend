/* ------------------------------------------------------
1. Создание объектов: Функция конструктор.
   Прототипы. Цепочка прототипов.
------------------------------------------------------ */

// var john = {
//     name: "John",
//     year: 1990,
//     job: "teacher"
// }
// console.log(john)

// var Person = function (name, year, job) {
//   // Когда название функции начинается с Заглавной буквы это означает что работаем с Конструктором
//   this.name = name;
//   this.year = year;
//   this.job = job;
// };

// Person.prototype.calculateAge = function () {
//   // присвоено у каждого обьекта, сделали протатип для облегчения
//   var age = 2020 - this.year;
//   console.log(age);
// };

// Person.prototype.city = "Moscow";

// var john = new Person("John", 1990, "teacher");
// var jane = new Person("Jane", 1992, "designer");
// var mark = new Person("mark", 1994, "programmer");

// console.log(john);
// console.log(jane);
// console.log(mark);

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

/* ------------------------------------------------------
2.  Цепочка прототипов на примере массива
------------------------------------------------------ */
/*
var x = [1, 2, 3];
console.log(x);
console.log(x.length);
*/

/* ------------------------------------------------------
3. Создание объекта с помощью метода Object.create()
------------------------------------------------------ */




// var Person = function (name, year, job) {
//     this.name = name;
//     this.year = year;
//     this.job = job;
// }

// Person.prototype.calculateAge = function () {
//     var age = 2020 - this.year;
//     console.log(age);
// }

// var john = new Person("John", 1990, "teacher");
// console.log(john);





var personProto = {
    calculateAge: function(){
        var age = 2020 - this.year;
        console.log(age);
    }
}

var john = Object.create(personProto);
john.name = "John";
john.year = 1990;
john.job = "teacher";
console.log(john);

var mark = Object.create(personProto, {
    name: { value: "Mark" },
    year: { value: 1988 },
    job: { value: "programmer" },
});
console.log(mark);


/* ------------------------------------------------------
4. Примитивы и объекты
------------------------------------------------------ */

/*
Примитивы - содержат в себе значения

Объекты - не содержат в себе значения,
они содержат в себе ссылку на место в памяти
где расположен данный объект.
*/

// Пример с примитивами
// var a = 20;
// var b = a; // 20
// a = 50; // 50

// console.log(b);

// Пример с объектами
// var object1 = {
//     name: "John",
//     age: 25
// }

// var object2 = object1;

// object1.age = 30;

// console.log(object2.age);

// object2.name = "Mark";
// console.log(object1.name);

// Пример с функциями
// var number = 30;
// var object = {
//     name: "John",
//     city: "Moscow"
// }

// function change (a,b){
//     a = 50;
//     b.city = "Kiev"
// }

// change(number, object);
// console.log(number);
// console.log(object.city);

// Пример с массивами
// var arr1 = [1, 2, 3];

// var arr2 = arr1;
// arr2[2] = 10;

// console.log(arr1);
