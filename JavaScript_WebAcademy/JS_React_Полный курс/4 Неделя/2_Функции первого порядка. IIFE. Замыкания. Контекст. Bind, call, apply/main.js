/*
Функция - это сущность типа Объект
Функции - ведут себя как объекты
Мы можем записать функцию в переменную
Мы можем передать функцию в качестве аргумента в другую функцию
Мы можем вернуть фнукцию из другой функции
=
В JavaScript мы имеем функции первого класса

Если язык программирования имеет функции первого класса, то значит они трактуются как объекты, то есть могут быть переданы другим функциям и их можно вернуть из функций. Так же их можно присваивать переменным.
*/
/* ------------------------------------------------------
1. Передаем функции в качестве аргументов
------------------------------------------------------ */
/* 
var years = [1990, 2010, 1985, 1975, 2012, 1962];

// Функция для расчета
// Принимает в себя массив
// и функцию которая будет применяться к каждому элементу массива
// и выполнять расчет

function arrayCalc(arr, fn) {
  var newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(fn(arr[i]));
  }
  return newArray;
}

// Функция расчитывает возраст
function calcAge(item) {
  return 2020 - item;
}

// Рассчитаем возраст всех персон
// console.log(arrayCalc(years, calcAge)); // 1 способ вызова

var ages = arrayCalc(years, calcAge); // 2 способ вызова
console.log(ages);

// Ф-я которая определяет совершеннолетие
function isFullAge(item) {
  return item > 18;
}

// Расчитаем совершеннолетие, на основе полученного массива с возрастами
var fullAgesArray = arrayCalc(ages, isFullAge);
console.log(fullAgesArray);
 */
/* ------------------------------------------------------
2. Функции которые возвращают функции
------------------------------------------------------ */
/* 
function interviewQuestion(job) {
  if (job === "designer") {
    return function (name) {
      console.log(`Привет ${name}, расскажи что такое UX дизайн?`);
    };
  } else if (job === "teacher") {
    return function (name) {
      console.log(`Привет ${name}, расскажи какой предмет ты преподаешь?`);
    };
  } else {
    return function (name) {
      console.log(`Привет ${name}, расскажи чем ты занимаешься?`);
    };
  }
}


// Если мы напишем только так interviewQuestion("designer"), мы выведем это -
// - function (name) {console.log(`Привет ${name}, расскажи что такое UX дизайн?`)};
// поэтому мы сразу передаем туда через переменную название имени 


var designerQuestion = interviewQuestion("designer"); // 1 способ вызова
designerQuestion("Петр");

// КРАТКАЯ ЗАПИСЬ 
interviewQuestion("designer")("Егор"); // 2 способ вызова
 */

/* ------------------------------------------------------
3. IIFE - Imidietly invoked function expression
(немедленно) самовызывающиеся функции (функциональные выражения)
------------------------------------------------------ */
// 1. Global variant
// var score = Math.random() * 10; // 1 - 10
// console.log(score >= 5);

/* 2. Function variant */
// function game(){
//     var score = Math.random() * 10; // 1 - 10
//     console.log(score >= 5);
// }
// game();

// 3. IIFE  variant
// (function(name){
//     var score = Math.random() * 10; // 1 - 10
//     console.log(score >= 5);
//     console.log(name);
// })("John");

// IIFE - это не повторно используемый код

/* ------------------------------------------------------
4. Closures - замыкания
------------------------------------------------------ */
/*
Функция имеет доступ к переменным в области видимости где она была определена.
Даже если функция вызывается в другом месте.
Даже если функция была определена в друго родительской функции и родительсяка функция 
была выполнена и вернула значения. Контекст выполнения уходит, но остается VO (variable object) 
все равно остается в памяти, и описанная внутренняя функция имеет доступ к нему.

Scope Chain - это указатели на Variable Objects.

Внутренняя функция всегда имеет доступ к переменным и параметрам внешней функции. 
Даже когда внешняя функция выполнена и вернула значение.
*/

/*
function retirement(retirementAge) {
    var words = " лет осталось до пенсии";
    return function(yearOfBirth){
        var age = 2020 - yearOfBirth; // 2020 - 1990 = 30
        var left = retirementAge - age; // 65 - 30 = 35
        console.log(left + words); // 35 лет осталось до пенсии
    }
}

var retirementRussia = retirement(65);
retirementRussia(1990);

var retirementUSA = retirement(66);
retirementUSA(1985);

var retirementFrance = retirement(70);
retirementFrance(1992);
*/

/* ------------------------------------------------------
5. Bind, call, apply - привязка контекста
------------------------------------------------------ */

var john = {
  name: "Джон",
  age: 28,
  job: "дизайнер",
  sayHello: function (style, timeOfTheDay) {
    if (style === "formal") {
      console.log(
        `Добрый ${timeOfTheDay}. Меня зовут ${this.name}, моя професиия ${this.job}, мне ${this.age} лет.`
      );
    } else if (style === "friendle") {
      console.log(
        `Здорова, как дела? Я ${this.name}, я ${this.job}, мне ${this.age} лет. Хорошего тебе ${timeOfTheDay}`
      );
    }
  },
};

john.sayHello("formal", "утро");
john.sayHello("friendle", "вечера");

var mary = {
  name: "Мария",
  age: 30,
  job: "программист",
};

// Вызывается функция, в первый аргумент call становится её this
// остольные передаются "как есть"
john.sayHello.call(mary, "formal", "утро")
john.sayHello.call(mary, "friendle", "вечера")


// 
john.sayHello.apply(mary, ["formal", "утро"])

/*
var john = {
    name: "Джон",
    age: 28,
    job: "дизайнер",
    sayHello: function(style, timeOfTheDay) {

        if (style === "formal") {
            console.log(`Добрый ${timeOfTheDay}, дамы и господа. Меня зовут ${this.name}, моя профессия ${this.job}, мне ${this.age} лет.`);
        } else if (style === "friendly") {
            console.log(`Здарова! Как дела? Я ${this.name}, , я работаю ${this.job} и мне ${this.age} лет. Хорошего тебе ${timeOfTheDay}.`);
        }
    }
};

// john.sayHello("formal", "утро");
// john.sayHello("friendly", "вечера");

var mary = {
    name: "Мария",
    age: 30,
    job: "программист"
}

// Метод call()
// в первый аргумент call передается новый контекст для this,
// остальные аргументы передаются «как есть».
// john.sayHello.call(mary, "formal", "утро");
// john.sayHello.call(mary, "friendly", "дня");

// Аналогично методу call, но все аргумнеты передаются массивом.
// john.sayHello.apply(mary, ["friendly", "вечера"]);

// Метод bind создает копию функции,
// с привязкой к контексту и устанавливает значения для аргументов
var johnFriendly = john.sayHello.bind(mary, "friendly");
johnFriendly("вечера");

var maryFormal = john.sayHello.bind(mary, "formal");
maryFormal("вечер");
*/
