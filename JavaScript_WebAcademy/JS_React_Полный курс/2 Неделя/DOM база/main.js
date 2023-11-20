/* ========= This ========= */

// "use strict";
// var function1 = function(){
//   console.log("function1", this);
// }
// function1();

// var function2 = function(){
//     function1();
// }

// function2();
// var object1 = {
//     name: "Object 1",
//     fun: function(){
//         console.log(this);

//         function function3 (){
//             console.log('function3', this);
//         }
//         function3();

//     }
// }

// object1.fun();

// var object2 = {
//     name: "Object 2",
//     fun2: object1.fun
// }

// object2.fun2();

// var function1 = function () {
//     console.log("function1", this);
// }

// function1();

// window.action = function1;
// window.action();

// setTimeout(function1, 1000);
// setTimeout(object1.fun, 1000);

/* ========= Работа с DOM ========= */

// 1 Способ
// document.addEventListener("DOMContentLoaded", function () {
//   var logo = document.querySelectorAll("#img01");
//   console.dir(logo);
// });

// 2 Способ
// document.addEventListener('DOMContentLoaded', init);
// function init() {
//   var logo = document.querySelectorAll("#img01");
//   console.dir(logo);
// }

/* ========= поиск по ID, Классу и Тегу */
// var header = document.getElementById("top-header");
// console.log(header);

// var classGreenElements = document.getElementsByClassName("green");
// console.log(classGreenElements);

// var paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs);
// console.log(paragraphs[1]); // первый параграф

/* ========= 2 ПОЛУЧЕНИЕ ЭЛЕМЕНТОВ ========= */
// var header1 = document.querySelectorAll("h1"); // Все теги h1
// var header1 = document.querySelector("h1"); // Первый тег h1

// var element = document.querySelectorAll("li.green");
// console.log(element);

// var element2 = document.querySelectorAll('img[alt="Photo 1"');
// console.log(element2);

/* Пройтись (через for и не только) по списку элементов из HTML коллекции и задать им новый класс или CSS свойство*/
/* 
var element3 = document.querySelectorAll("p.green");
console.log(element3, element3);
element3[1].style.border = "5px solid red";

for (let i = 0; i < element3.length; i++) {
  element3[i].style.border = "5px solid green";
}

element3.forEach(function (item) {
  console.log(item);
  item.style.border = "5px solid blue";
});
 */

/* ========= 3 ВНУТРЕННИЙ КОНТЕНТ ЭЛЕМЕНТОВ ========= */

// var element = document.querySelector("#top-header-2");
// console.log('element', element);

// console.log(element.textContent); // Показывает даже скрытый текст
// console.log(element.innerText);   // Не показывает скрытый текст

// console.log(element.innerHTML); // HTML код

// element.innerHTML = "<i>Новый контент</i>" // Перезапись

// document.querySelector("#top-header-2").innerHTML = "<i>Новый контент</i>" // одной строчкой

/* ========= 3 РАБОТА С АТРИБУТАМИ ========= */

var element = document.querySelector("#img01");
// if (element.getAttribute("alt")) {
//   // Проверка на наличие атрибута
//   console.log("YES");
// } else {
//   console.log("NO");
// }
// console.log(element.getAttribute("src")); //получили значени атрибута, если его нет то null

// element.setAttribute('alt', 'Nature')// как создать новый атрибут, так и изменить существующий
// console.log(element.alt)
// element.setAttribute('id', 'Imaggeeee')// меняет существующий
// console.log(element.id)

// console.log(element)
// element.removeAttribute("alt") // УДАЛИТЬ атрибут
// console.log(element)

// Работа с данными Data

/* 6 Изменение документа. Создание элементов, Вставка, Удаление, Клонирование========= */
var newElement = document.createElement("h1");
var newTextNode = document.createTextNode("Текст внутри ноды");

console.log(newElement);
console.log(newTextNode);

newElement.appendChild(newTextNode)
console.log(newElement);