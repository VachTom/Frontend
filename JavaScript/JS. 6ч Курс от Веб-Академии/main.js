/* • • • • • • • • • • • • • • • • • Содержание • • • • • • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
• • • • • • • • • • • JavaScript необходимые основы для начинающих • • • • • • •
• • • • • • • • • • • • • • • • • • практический курс • • • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
Код к уроку: https://webcademy.ru/blog/867/

00:00 Введение и содержание
02:24 Настройка окружения
04:55 Подключение JS файла

Основы

09:28 Переменные
13:00 Типы переменных let const var
20:15 Область видимости
23:41 Типы данных. Строки, числа, логические, BigInt, Symbol
38:30 Условия, операторы сравнения, логические операторы
47:50 Тернарный оператор
54:56 Конкатенация строк и шаблонные строки

Функции

1:00:36 Создание функций
1:04:02 Function expression и function declaration
1:12:41 Параметры и аргументы для функции
1:16:17 return
1:22:05 Функция как аргумент
1:31:30 Самовызывающаяся функция IIFE
1:39:22 Стрелочные функции

Массивы

1:48:16 Определение массивов
1:57:38 Методы массивов
2:06:44 Цикл for. Обход массива циклом for
2:18:37 Цикл for ( of ). Обход массива циклом for ( of )
2:21:20 Метод .forEach() для обхода массивов

Объекты

2:29:42 Объекты. Свойства объектов
2:39:00 Методы в объектах
2:42:50 Ключевое слово this
2:46:33 Обход свойств объекта через цикл for ( in )
2:50:17 Нюанс с const и изменением объекта или массива
2:52:43 Классы. Конструкторы объектов
3:02:30 Лайфхак работы с VS Code

Работа с DOM

3:04:30 Выбор DOM элементов
3:12:20 Выбор коллекции элементов
3:20:50 ES5 методы для выбора элементов
3:23:27 Работа с CSS классами
3:32:10 Атрибуты
3:42:07 Прослушка событий. Клик. addEventListener и onclick
3:49:53 Прослушка событий. Ввод текста
3:57:37 Объект event
4:03:21 Работа c HTML элементами. Создание. Копирование.
4:16:05 Список задач на JS [практика]

Асинхронность

4:40:51 Интервал setInterval. clearInterval
4:43:33 Таймер setTimeout
4:48:20 Секундомер [практика]

Внимание! Дальнейшие темы будут сложны для понимания. Здесь как в математике,
доказание теоремы всегда сложнее чем ее использование. Поэтому можно вначале ознакомиться 
с примером на 6:28:10 и уже после перейти к изучению "мат части".

5:03:45 Callback hell
5:11:09 Callback hell. Пример с отпуском. [осторожно, взрыв мозга!]
5:29:32 Callback hell. Итоги

5:33:22 Promise. Создание и потребление промисов
5:41:44 Promise. Цепочки then
5:43:44 Promise. Цепочки then c асинхронными действиями [осторожно, взрыв мозга!]
5:53:00 Promise. Пример с отпуском

6:11:33 Асинхронные функции
6:19:09 Асинхронные функции. Пример с отпуском

6:28:10 Курс валют [практика]
6:45:00 Важная информация*/

// ============== 1 день =================================================================================================
/* // =========================== 0. Настройка окружения =================================================

- Установка редактора
- Установка плагина liveServer
- Моя тема Ayu
- Создание проекта
*/

/* // =========================== 1. Подключение =========================================================
- index.html
- файл main.js
- тег <script src></script>
- Запуск в liveServer
- команда console.log для вывода информации в консоль браузера
- комментарии

// console.log("Hello");*/

// ================================= Основы ====================================================================
/* // ===== 09:28 ===== 2. Переменные ====================================================================
 let username = 'Марк'
//  Let - может менять значение во время работы программы, видна только в блочной видимости []
//  Const - не может менять значение (дата рождение, пароль)
const yearOfBirth = 1900
console.log(yearOfBirth)
// var это аналог let, видна в глобальной видимости программы, не зависит от блочной []. Скорее всего из за этого требует много доп. памяти 
*/
/* // ===== 13:00 ===== 2.1 Типы переменных ==============================================================
 function sum() {
 // В JS любая переменная видна только внутри функции, за ее пределами она не видна. В Java это плюшка доступна
} */
//    ===== 20:15 ===== Область видимости ================================================================
//    ===== 23:41 ===== 2.2 Типы данных ==================================================================
/*    =====       ===== Динамическая типизация
// Присутствует динамическая типизация, как в Python также не обезательно ставить точку с запятой=================================
let someVaruable = "Some value"
someVaruable = 50
someVaruable = "Мария"

// значение null - значение "ничего", "пусто" или "значение неизвестно"
let age = 23;
age = null;

// значение underfiend - означает что "значение не было присвоено". Если переменная обьявлена, но ей не присвоено никакого значения
let username1; // underfiend 
console.log(username1)

//BigInt
console.log(Number.MAX_SAFE_INTEGER)
console.log(87979879878979879879879798798789n) 

// Итоги Тип данных 
// (Постоянная будем работать)
//  • Number
//  • String
//  • Boolean
//  • null
//  • underfeind
//  • Object
//  • Array
   
// (Редко будем работать, специфические задачи):
//  • Symbol
//  • BigInt */
//    ===== 38:30 ===== 3. Условия, операторы сравнения, логические операторы=============================
/* // ===== 47:50 ===== 4. Тернарный оператор ============================================================
let greeting;
let time = 10;
if (time < 12) {
  greeting = "Доброе утро";
}
else{
 greeting = "Добрый день"
}

let time = 50;
let greeting = time < 12 ? "Доброе утро" : "Добрый день";
console.log(greeting); */
/* // ===== 54:56 ===== 5. Конкатенация строк и шаблонные строки==========================================
 // let greeting1 = "Привет Марк"
// let howAreYou = "Как твои дела"
// let sayHi = greeting1 + howAreYou
// console.log(greeting1 +howAreYou)

// const username2 = "Марк"
// console.log("Привет, " + username2 + "! Как твои дела?")

// Итнерполяция 
// console.log(`Привет ${username2}! Как твои дела?`) */

//    ================================ Функции =================================================================
//    ===== 1:00:36 ===== Создание функций ===============================================================
/* // ===== 1:12:41 ===== Параметры и аргументы для функции===============================================

console.log();
function sayHi(name) {
  // Когда мы описываем функцию, мы передаем ПАРАМЕТР
  console.log(`Привет, ${name}! Как твои дела ?`);
}
sayHi("Юрий")// Когда мы описываем функцию, мы передаем АРГУМЕНТ */
/* // ===== 1:04:02 ===== Function expression и function declaration =====================================
function DECLARATION когда вызываем вначале, а если хотим развернуть спускаемся ниже и разворачиваемся
function EXPRESSION когда фунткцию вызываем через переменную и вызываем только после самой функции
const sayHi = function () {
 console.log("Привет")
} */
/* // ===== 1:16:17 ===== 6.1 return =====================================================================
function sayHi(name) {
  console.log(`Привет, ${name}! Как твои дела ?`);
}

function summ(a, b) {
  return a + b;
}
function dif(a, b) {
  return a - b;
}
function diSomerhing(func) {
  let result = func(10, 15);
  console.log(result);
}
diSomerhing(summ);
diSomerhing(dif); */
/* // ===== 1:31:30 ===== 6.2 Самовызывающая функция IIFE ================================================
(function () {
  console.log("Привет дорогой пользователь!");
})();

let res = (function (a, b) {
  return a + b;
})(10, 17);
console.log(res); */
/* // ===== 1:39:22 ===== 6.3 Стрелочные функции =========================================================
Варианты написания ниже:
function sayHi1(name) {
  console.log(`Привет, ${name}! Как твои дела ?`);
}
sayHi1("Марк1");

const sayHi2 = function (name) {
  console.log(`Привет, ${name}! Как твои дела ?`);
};
sayHi2("Марк2");

const sayHi3 = (name) => {
  console.log(`Привет, ${name}! Как твои дела ?`);
};
sayHi3("Марк3");

const sayHi4 = (name) => console.log(`Привет, ${name}! Как твои дела ?`);
sayHi4("Марк4");

const sayHi5 = (a, b) => a + b;
// const res = sayHi5(10, 6)
console.log(sayHi5(10, 6)) */

// ================ 2 день ===============================================================================================
/* // ===== 1:48:16 ===== 7. Массивы =====================================================================

const autoBrand1 = "Audi"
const autoBrand2 = "BMW"
const autoBrand3 = "Mazda"
const autoBrand4 = "Toyota"

const autoBrands = ["Audi", "BMW", "Mazda", "Toyota", ["Honda", "Subaru"]]
console.log(autoBrands)
console.log(autoBrands[4])
console.log(autoBrands.length) */
/* // ===== 1:57:38 ===== 7.1 Методы массивов ============================================================

.push(value) - Добавитьб элемент в конец массива
arr.pop() - Удалить элемент из конца массива
arr.shift() - Удалить элемент из начала массива
arr.unshift(value) - Добавить элемент в начало массива
arr.splice([start], [deleteCount, newElements]) - Удалить конкретный элемент в массиве 
arr.slice([start], [deleteCount] - вырезать часть массива и вовзращать его 
includes(value) - 

const autoBrands1 = ["Audi", "BMW", "Mazda", "Toyota", ["Honda", "Subaru"]]
console.log(autoBrands1)
autoBrands1.push("Nissan")
console.log(autoBrands1) */
/* // ===== 2:18:37 ===== For i - Обход обьектов. For of - Обход массивов */
/* // ===== 2:21:20 ===== Метод .forEach() для обхода массивов============================================
const autoBrands2 = ["Audi", "BMW", "Mazda", "Toyota", ["Honda", "Subaru"]];
autoBrands2.forEach(function (brand, i) {
  console.log(`${brand}. ${i}`);
});

autoBrands2.forEach(printBrand)

function printBrand(brand, i) {
  console.log(`${brand}. ${i}`);
}

autoBrands2.forEach((brand, i) => console.log(`${brand}. ${i}`)); */

/* // ===== 2:29:42 ===== 12. Объекты. Свойства объектов =================================================
let userNme = "Аврелий"
let age = 30
let isMarried = false

const person = {
userNme: "Аврелий", // свойства
age: 30, // свойства
isMarried: false // свойства
}
console.log(person)
console.log(person.userNme)
console.log(person['age'])

person.profession = 'JS develoner'
console.log(person) //Так работает JS. Не смотря на то что в при первом вызове person нет пунтка профессии он не должен вызываться но при нажатии на консоле треуголник запуска из за ссылки показывает последний объект (с профессией)
delete person.age
console.log(person) */
/* // ===== 2:39:00 ===== 13. Методы в объектах===========================================================
const person = {
  userNme: "Аврелий", // свойства
  age: 30, // свойства
  isMarried: false, // свойства
  sayHi: function () {
    // метод объекта
    console.log("Привет!");
  },
};
person.sayHi();
console.log(person);
console.log(person.userNme);
console.log(person["age"]);

person.profession = "JS develoner";
console.log(person); //Так работает JS. Не смотря на то что в при первом вызове person нет пунтка профессии он не должен вызываться но при нажатии на консоле треуголник запуска из за ссылки показывает последний объект (с профессией)
delete person.age;
console.log(person); */
/* // ===== 2:42:50 ===== 14. Ключевое слово this ========================================================
const person = {
  userNme: "Аврелий", // свойства
  age: 30, // свойства
  isMarried: false, // свойства
  sayHi: function (name) {
    // метод объекта
    console.log(`Привет, ${name}! Меня зовут ${this.userNme}`); // зачем обращатся заново к person, если есть this
  },
};
person.sayHi("Вачик"); */
/* // ===== 2:46:33 ===== Обход свойств объекта через цикл for ( in ) ====================================
const person = {
  userNme: "Аврелий", // свойства
  age: 30, // свойства
  isMarried: false, // свойства
  sayHi: function (name) {
    // метод объекта
    console.log(`Привет, ${name}! Меня зовут ${this.userNme}`); // зачем обращатся заново к person, если есть this
  },
};
for (let key in person) {
  // обходим объект
  console.log(key, ":", person[key]);
} */
/* // ===== 2:50:17 ===== Нюанс с const и изменением объекта или массива =================================
const person = {
  userNme: "Аврелий", // свойства
  age: 30, // свойства
  isMarried: false, // свойства
  sayHi: function (name) {
    // метод объекта
    console.log(`Привет, ${name}! Меня зовут ${this.userNme}`); // зачем обращатся заново к person, если есть this
  },
};
person.proff = "Desinger";
person = {
  // в этом случае будет ошибка тк мы переопределяемя сам объект
  userName: "Ник",
}; */
/* // ===== 2:52:43 ===== КЛАССЫ. Конструкторы объектов ==================================================
// const person1 = {
//   userNme: "Аврелий", // свойства
//   age: 30, // свойства
//   isMarried: false, // свойства
//   sayHi: function (name) {
//     // метод объекта
//     console.log(`Привет, ${name}! Меня зовут ${this.userNme}`); // зачем обращатся заново к person, если есть this
//   },
// };
// const person2 = {
//   userNme: "Мария", // свойства
//   age: 25, // свойства
//   isMarried: true, // свойства
//   sayHi: function (name) {
//     // метод объекта
//     console.log(`Привет, ${name}! Меня зовут ${this.userNme}`); // зачем обращатся заново к person, если есть this
//   },
// };
// Опишем класс, это как чертеж для всех будущих обьъектов person которые будут создаваться на его основае
class Person {
  constructor(userNme, age, isMarried) {
    this.userNme = userNme;
    this.age = age;
    this.isMarried = isMarried;
   }
   sayHi(name){
    console.log(`Привет, ${name}! Меня зовут ${this.userNme}`); 
   }
}
const person_1 = new Person("Марк", 32, false);
const person_2 = new Person("Павел", 32, false);
console.log(person_1)
person_1.sayHi("Vach")
console.log(person_2) */
/* // ===== 3:02:30 ===== Лайфхак работы с VS Code =======================================================
// Ctrl + L; Ctrl + 0 */

// ================================================ Работа с DOM =========================================
/* // ===== 3:04:30 ===== Выбор DOM элементов ============================================================
// Выбор одного элемента DOM по селектору
document.querySelector('selector')
const header = document.querySelector('h2')
console.log(header)

document.querySelector('h2').classList.add('red')
console.log(header)

const header2 = document.querySelector('h2') // аналогичная запись
header2.classList.add('red') // аналогичная запись
document.querySelector(".heading-3").classList.add("green");
 */
/* // ===== 3:12:20 ===== Выбор коллекции элементов ======================================================
const headings = document.querySelectorAll("h2");
console.log(headings);

// headings.classList.add('red-text')

for (const item of headings) {
  // console.log(item)
  item.classList.add("red-text");
}

const paragraphs = document.querySelectorAll("p"); // новая коллекция всех параграфов
// for (let p of paragraphs){
//  p.classList.add('green-text')
// }
paragraphs.forEach(function (item) {
  item.classList.add("green-text");
});
// =================== ЭТА РАБОТА С FOR БУДЕТ ПОСТОЯННО, НУЖНО ХОРОШО ИЗУЧИТЬ ЕЁ ===================================*/
/* // ===== 3:20:50 ===== ES5 методы для выбора элементов ================================================
// Также есть след методы 
document.getElementsByClassName('link'); // Выбор Коллекции элементов по CSS классу, без точки
document.getElementsByTagName('h2'); // Выбор Коллекции по Тегу 'p', по классу не получится (.фывфыв)
document.getElementById(header); // Выбор одного элемента по ID, не пишем #, мы уже подразумеваем что там будет название ID
 */

// ================ 3 день =============================================================
/* // ===== 3:23:27 ===== Работа с CSS классами ==========================================================
// ================== ВАЖНО! Мы не ставим точку в скобках, при работе с classList уже подразумевает работу с классами. Переходим и смотри есть ли style.css данный класс

// element.classList.add()
// .add()
// heading.classList.add()
// console.log(heading)
// .remove() // удаляет 

// .toggle() - перееключает, добавляет если класса не было или убирает если он был
// heading.classList.toggle('green') 
// если прописать эту команду в консоле на сайте редактора кода, мы увидим закономерность если toggle добавил что то он выведет true, если удалит то false
// это очень удобная вещь и с помощью этого можно решать много задач. Поместить в переменную и потом через условие решить что либо 
// const va = heading.classList.toggle('green') 
// if (va == true) {} else{}


// .contains() - возвращает true или false в зависимости от того есть такой класс у данного тега или нет
// const heading = document.querySelector('h2')
// heading.classList.contains('red')
// if (heading.classList.contains('green')) {} else{}
 */
/* // ===== 3:32:10 ===== Атрибуты =======================================================================
// зачастую вы будете использовать данные 

// 1. getAttribute(attrName) - возвращает значение указанного атрибута  
const img = document.querySelector('#logo')
const srcValue = img.getAttribute('src')
console.log(srcValue)

// 2. setAttribute(name, value) - добавляет указанный атрибут и его значение к элементу
// img.setAttribute('src','./img/php.png')
// img.setAttribute('width','200')

const button = document.querySelector("#button");
button.setAttribute("value", "Кнопочка");
button.value = "Текст для кнопки"; // аналог верхнего легче намного 

// 3. hasAttribute(attrName) - возвращает true при наличии у элемента указанного атрибута. Также работа с IF
// 4. removeAttribute(attrName) - удаляет указанный атрибут

// toggleAttribute(name, force) - добавляет новый атрибут при отсутствии или удаляет существующий атрибут.
// hasAttributes() - возвращает true, если у элемента имеются какие либо атрибуты
// getAttributes() - возвращает названия атрибутов жлемента */
/* // ===== 3:42:07 ===== Прослушка событий. Клик. addEventListener и onclick ============================

const button = document.querySelector("#button");
const img = document.querySelector("#logo");
button.value = "Удалить";

button.addEventListener("click", function () {
  console.log("ckick");
  img.remove();
});
button.addEventListener("click", function () {
  console.log("ckick");
  img.remove();
});
button.addEventListener("click", function () {
  console.log("ckick");
  img.remove();
});

// Разница: верхний метод написания делает множество разных дейтсвий одновременно, нижний метод написания перезасывает то что делаешь с первого раза

button.onclick = function () {
  console.log("Click");
};
button.onclick = function () {
  console.log("Click");
}; 

// повторение кода
// const val = document.querySelector("#logo");
// val.setAttribute("src", "./img/php.png");
// val.setAttribute("width", "100");

// const button = document.querySelector("#button");
// button.value = "УДалить";
// const img = document.querySelector("#logo");
// button.addEventListener("click", function () {
//   img.remove();
// }); */
/* // ===== 3:49:53 ===== Прослушка событий. Ввод текста =================================================
// const inputText = document.querySelector("#input-text");
// const textBlock = document.querySelector("#text-block");
// inputText.addEventListener("input", function () {// анонимная функция. Ниже описан метод с вызовом функции
//   console.log(inputText.value);
//   textBlock.innerText = inputText.value; // innerText отвечает за знач внутри блока 
// });

// inputText.addEventListener("input", inputHandler); //разница лишнь в том что если внутри функции много кода, можно этот код свернуть и в случае чего развернуть посмотреть 
// function inputHandler () { // р
//     console.log(inputText.value);
//     textBlock.innerText = inputText.value; // innerText отвечает за знач внутри блока 
//   };*/
/* // ===== 3:57:37 ===== Объект event ПОСМОТРИ В ИНТЕРНЕТЕ ПОБОЛЬШЕ ========================================================================
// Как по мне Event отвечает за то что бы углубится еще в один уровень вниз, то есть по какому элементу человек кликнул 
const list = document.querySelector("#list");
list.addEventListener("click", function (event) {
  console.log(this);
  console.log(event);
  console.log(event.target); //какая цель блок по которому мы кликнули (возвращает код из HTML)
  
}); */
/* // ===== 4:03:21 ===== Работа c HTML элементами. Создание. Копирование =====================================
// Создать элемент
// document.createElement('tag-name')
// Изменить HTML содержимое внутри жоемента
// Element.innerHTML = ''
// Изменить Текстовое содержимое внутри элемента
// Node.innerHTML = ''

// Выбор контейнера
// const container = document.querySelector("#elementsContainer");
// Создание контейнера
// const newHeader = document.createElement("h1");
// newHeader.innerText = "Новый заголовок";
// container.append(newHeader)



// Клонирование элемента
// Клонирование шапки
// Node.cloneNode() // true c внутренним содержимым (текст и теги), false - без внутреннего содержимого
// const mainHeader = document.querySelector('header')

// const headerCopy = mainHeader.cloneNode(true)
// container.append(headerCopy)

// Вставить разметку через строки
// const htmlExample = '<h2>Ещё один заголовок</h2>'
// container.insertAdjacentHTML('beforeend', htmlExample)

// Вставить разметки через шаблонные строки
// const title = 'Текст заголовка'
// const htmlExample = `<h2>${title}</h2>`
// container.insertAdjacentHTML("beforeend", htmlExample)
// Element.append(nodesOrDomStrings)
// Удалить элемент
// Element.remove() */

// ================ 4-5 день по часу-полтора =============================================================
/* // ===== 4:16:05 ===== Список задач на JS [практика] =======================================================

const toDolist = document.querySelector("#todo-list");
const button = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-input");

button.addEventListener("submit", FormHandler); // Прослушка событий

function FormHandler(event) {
  //   // Стандартная форма поведения страницы по "submit" - отправка в form action="" и последующее обновление/перезапуск стр
  event.preventDefault(); // У ОБЪЕКТА event есть МЕТОД preventDefault - эта команда отменяет отправку записии и последующее обновление страницы
  //   // toDolist.insertAdjacentHTML("beforeend", `<li>${toDoInput.value}</li>`); // мой код еще до просмотра решения

  const taskText = toDoInput.value; // => Получаем название задачи из инпута

  // // 1 способ препода (пошагово), через шаблонные строки и разметку HTML// const li = `<li>${taskText}</li>`// => создать тег <li> и поместить в него taskText
  // // toDolist.insertAdjacentHTML('beforeend', li)// => вставить в список

  // // 2 способ препода (через создание элемента).
  // // Создаем тег li с помощью создания элемента

  const newTask = document.createElement("li");
  newTask.innerText = taskText;

  // Создаем кнопку удалить с помощью создания элемента
  const deleteBt = document.createElement("button");
  deleteBt.setAttribute("role", "button"); // что отвечает за Set ?
  deleteBt.innerText = "Удалить";
  deleteBt.style["margin-left"] = "15px";
  newTask.append(deleteBt);

  // Добавляем элемент на страницу
  toDolist.append(newTask);

  deleteBt.addEventListener("click", (e) => e.target.closest("li").remove()); // строчный вариант

  toDoInput.value = ""; // очищаем поле вода
  toDoInput.focus(); // Фокус на поле вода}
} */

// ================================================ Асинхронность =========================================
// ================ 6 день =============================================================
/* // ===== 4:40:51 ===== Интервал setInterval. clearInterval =================================================
const timerIntervalID = setInterval(function (params) { // SetInterval возвращает айдишник, если поместить в переменную и потом вывести покажет его ID
  console.log("Йоу")  
}, 1000) // каждую сек делает что то
console.log(timerIntervalID)

// clearInterval(timerIntervalID) // Останавливает счетчик*/

/* // ===== 4:43:33 ===== Таймер setTimeout ===================================================================
const timerId = setTimeout(function () {
  console.log('setTimeout Fired!')
}, 3000) // через 3 сек делает что то 

clearInterval(timerId)
 



const setInt = setInterval(function () {
  console.log("setInterval Far");
}, 1000);
const v = setTimeout(function () {
  clearInterval(setInt);
}, 5000);
*/
/* // ===== 4:48:20 ===== Секундомер [практика] ===============================================================
const counterElement = document.querySelector("#counter");
const startElement = document.querySelector("#start");
const pauseElement = document.querySelector("#pause");
const stopElement = document.querySelector("#reset");

let counter = 0;
let timerId;

startElement.onclick = function () {
  timerId = setInterval(function () {
    counter++;
    counterElement.innerText = counter;
  }, 1000);
};
pauseElement.onclick = function () {
  clearInterval(timerId);
};

stopElement.onclick = function () {
  // clearTimeout(timerId)
  counter = 0;
  counterElement.innerText = counter;
  clearInterval(timerId);
}; */

// Внимание! Дальнейшие темы будут сложны для понимания. Здесь как в математике,
// доказание теоремы всегда сложнее чем ее использование. Поэтому можно вначале ознакомиться
// с примером на 6:28:10 и уже после перейти к изучению "мат части".

/* // ===== 5:03:45 ===== Callback hell =======================================================================
setTimeout(function () {
  console.log("Step 1");
  setTimeout(function () {
    console.log("Step 2");
    setTimeout(function () {
      console.log("Step 3");
    }, 1000);
  }, 1500);
}, 2000); */
/* // ===== 5:11:09 ===== Callback hell. Пример с отпуском. [осторожно, взрыв мозга!] =========================
function checkRooms() {
  setTimeout(function () {
    console.log("Проверяем номера в отеле...");
    const availableRooms = true;

    if (availableRooms) console.log("Номера есть!");
    else console.log("Номеров нет(");
  }, 1000);
}

checkRooms()
 */

// ===== 5:29:32 ===== Callback hell. Итоги ================================================================
/* // ===== 5:33:22 ===== Promise. Создание и потребление промисов ============================================
const myPromise = new Promise(function (resolve, reject) {
  // Promise - Обещание
  console.log("Promise created");
  setTimeout(function () {
    // -- запрос на сервер
    const response = true;
    if (response) {
      let message = "SUCCESS";
      resolve(message);
    } else {
      let message = "FAILED";
      reject(message);
    }
  }, 1000);
});
myPromise // Promise важнее и приоритетнее чем then, и если мы хотим записать сначала что то потом почереодность написания кода не поможет, нужно создать внутри новый Promise
  .then(function (data) {
    // аргумент вводим данные
    console.log("Then 1");
    console.log(data);
    return "Data from then 1";
  }, 1500)
  .then(function (data) {
    // аргумент вводим данные
    console.log("Then 2");
    console.log(data);
  }, 1000)
  .then(function (data) {
    // аргумент вводим данные
    console.log("Then 3");
    console.log(data);
  }, 500)
  .catch(function (data) {
    // в случие неудачи
    console.log("Catch");
    console.log(data);
  });
 */
// ===== 5:41:44 ===== Promise. Цепочки then ===============================================================
// ===== 5:43:44 ===== Promise. Цепочки then c асинхронными действиями [осторожно, взрыв мозга!] ===========

// ================ 4 день =============================================================
/* // ===== 5:53:00 ===== Promise. Пример с отпуском ==========================================================
// const checkRooms = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Проверяем номера в отеле...");
//     const availableRooms = true;
//     if (availableRooms) {
//       resolve("Номера есть!");
//     } else {
//       reject("Номеров нет.");
//     }
//   }, 1500);
// });
// console.log("---- then 1 ----");
// console.log("Ответ на предыдущем шаге: ", data);
// console.log("Едем в отпуск!");
// checkRooms
//   .then(function (data) {
//     // если checkRooms запустился с ДА, то запускается then
//     return new Promise(function (resolve, reject) {
//       setTimeout(() => {
//         console.log("------- then 1 ---------");
//         console.log("Ответ на предыдущем шаге: ", data);
//         console.log("Проверяем авиабилеты...");
//         const availableTickets = true;
//         if (availableTickets) {
//           let message = "Билеты есть!";
//           resolve(message);
//         } else {
//           let message = "Билетов нет..";
//           reject(message);
//         }
//       }, 1000);
//     });
//   })
//   .then(function (data) {
//     console.log("------- then 2 ---------");
//     console.log("Ответ на предыдущем шаге: ", data);
//     console.log("Едем в отпуск!");
//   })
//   .catch(function (data) {
//     // если checkRooms запустился с НЕТ, то запускается cath
//     console.log("---- catch 1 ----");
//     console.log("Ответ на предыдущем шаге: ", data);
//     console.log("Отпуск отменяется");
//   }); */

/* // ===== УЛУЧШЕННЫЙ КОД. Отдельные функции ===== Promise. Пример с отпуском =================================================================

checkRooms().then(checkTicets).then(succsess).catch(filed);

function checkRooms(data) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Проверяем номера в отеле...");
      const availableRooms = true;
      if (availableRooms) {
        resolve("Номера есть!");
      } else {
        reject("Номеров нет.");
      }
    }, 1500);
  });
}
function checkTicets(data) {
  // если checkRooms запустился с ДА, то запускается then
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("------- then 1 ---------");
      console.log("Ответ на предыдущем шаге: ", data);
      console.log("Проверяем авиабилеты...");
      const availableTickets = false;
      if (availableTickets) {
        let message = "Билеты есть!";
        resolve(message);
      } else {
        let message = "Билетов нет..";
        reject(message);
      }
    }, 1000);
  });
}
function succsess(data) {
  // если checkRooms запустился с НЕТ, то запускается cath
  console.log("---- succsess ----");
  console.log("Ответ на предыдущем шаге: ", data);
  console.log("Едем в отпуск!");
}
function filed(data) {
  // если checkRooms запустился с НЕТ, то запускается cath
  console.log("---- filed ----");
  console.log("Ответ на предыдущем шаге: ", data);
  console.log("Отпуск отменяется(");
} */
/* // ===== 6:11:33 ===== Асинхронные функции =================================================================
function promiseFunction() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const res = false;
      if (res) {
        resolve("DONE!");
      } else {
        reject("FALL!");
      }
    }, 500);
  });
}

// если допустим на этом этапе запустить console.log(promiseFunction()) он не выдаст res, тут два варианта запуска Promise через // promiseFunction().then().catch(), либо через асинхронные функции

async function startPromise() {
  try {
    const result = await promiseFunction();
    console.log(result);
  } catch (r) {
    console.log(r);
  }
}
startPromise(); */
/* // ===== 6:19:09 ===== Асинхронные функции. Пример с отпуском ==============================================

function checkRooms() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Проверяем номера в отеле...");
      let availableRooms = false;
      if (availableRooms) {
        resolve("Есть номера");
      } else {
        reject("Номеров нет..");
      }
    }, 1500);
  });
}
function checkTickets(data) {
  // checkTickets в аргументе есть data данные которые принимает от checkRooms. То есть сначала запускается checkRooms а потом уже
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Ответ в предыдущем шаге", data);

      console.log("------- checkTickets ------");
      console.log("Проверяем билеты...");
      let availableTickets = true;
      if (availableTickets) {
        console.log("Билеты есть");
      } else {
        console.log("Билетов нет....");
      }
    }, 1000);
  });
}
function submitVacation(data) {
  // если checkRooms запустился с ДА, то запускается then
  console.log("---- submitVacation ----");
  console.log("Ответ на предыдущем шаге: ", data);
  console.log("Едем в отпуск!");
}
function cancelVacation(data) {
  // если checkRooms запустился с НЕТ, то запускается cath
  console.log("---- cancelVacation ----");
  console.log("Ответ на предыдущем шаге: ", data);
  console.log("Отпуск отменяется(");
}

async function checkVacation() {
  // if (ticketsResults) {// вариант через if не будет работать. Нужно применять try.catch
  //   submitVacation(ticketsResults);
  // } else {
  //   cancelVacation(ticketsResults);
  // }

  try {
    const roomsResults = await checkRooms(); // когда мы используем await он четко использует по последовательности (несмотря на то что в checkRooms задержка в 1 сек, а в checkTickets задержка в 1,5 сек)
    const ticketsResults = await checkTickets(roomsResults);
    submitVacation(ticketsResults);
  } catch (r) {
    cancelVacation(r);
  }
}
checkVacation(); */
// ===== 6:28:10 ===== Курс валют [практика] ===============================================================
// https://www.cbr-xml-daily.ru/daily_json.js
// 1. Получить данные с сервера
// fetch("https://www.cbr-xml-daily.ru/daily_json.js") // это промис, доказать можете если поместите в переменную
// Метод через then
// .then(function (data) {
//   return data.json();
// })
// .then(function (data) {
//   console.log(data)
// })
// .catch('Курсы валют недоступны обратитесь к администратору')

async function getCurrencies() {
  const response = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
  const data = await response.json();

  const usdRate = data.Valute.USD.Value.toFixed(2)
  const eurRate = data.Valute.EUR.Value.toFixed(2)
  // 2. Отобразить эти данные на странице 
  const usdElement = document.querySelector('#usd')
  const eurElement = document.querySelector('#eur')
  
  usdElement.innerText = usdRate
  eurElement.innerText = eurRate

  
}
getCurrencies();
// ===== 6:45:00 ===== Важная информация ===================================================================
