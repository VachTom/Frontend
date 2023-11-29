/* ---------------------------------- 1. Отслеживания события ----------------------------------  */

// ========= Функция которая запустится по клику =========
// function someFunc() {
//     alert("Клик по кнопке.");
// }
// function soFink() {
//     alert("Клик по кнопочке.")
// }
// КОГДА В РАЗМЕТКЕ ЕСТЬ ID, ПО УМОЛЧАНИЮ В ГЛОБАЛЬНОЙ ВИДИМОСТИ СОЗДАЕТСЯ ОТДЕЛЬНОЕ СВОЙСТВО
// console.log(button3) // МОЖНО ВЫВОДИТЬ ТАКИМ СПОСОБОМ, но не рекомендуется так используется есть несколько причин
// 1. Если нет данного ID то выдаст NULL и следом ошибку (через поиск, просто Null - это плохо)
// 2. Если ID два слова через пробел или -, найдется только через такую запись console.log(window["button-3"])

// Функция которая запустится по клику
// до 3 аргументов: 1) Тип события: Click, mouseHover, нажатие клавиатуры, Sibmit(при форме). 2) Новая либа старая функция которую можно добавить
// let btn3 = document.querySelector("#button3")
// btn3.addEventListener("click", function () {
//     alert("УРа, у ВАЧИКА ПОЛУЧИЛОСЬ!!!")
// })

// btn3.addEventListener("click", someFunc);

/* ---------------------------------- 2. Объект события event ---------------------------------- */

// var btn3 = document.querySelector("#button3");
// btn3.addEventListener("click", function (event) {
//   console.log("Fired"); // Запущено (перевод)
//   console.log(event);
//   console.log(event.target); // Получим разметку по клику, показывает именно ту кнопку/элемент по которой указана событие, а не весь блок
//   console.dir(event.target); // Получим свойства этой кнопки
//   console.log(event.target.id); // ID
//   console.log(event.target.className); // Вывод класса кнопки
//   console.log(event.target.dataset); // Вывод всех дата классов/атрибутов этой кнопки
//   console.log(event.type); // Тип прослушки - клик

/* ----- Mouse posittion on page ----- */
//   console.log(event.clientX); // Позиция мышки относительно всей СТРАНИЦЫ в момент прослушки, в данный момент по клику
//   console.log(event.clientY);

//   console.log(event.offsetX); // Позиция мышки относительно всей КНОПКИ в момент прослушки, в данный момент по клику
//   console.log(event.offsetY);

/* ----- Зажатые клавиши true/false ----- */
//   console.log("altKey =>", event.altKey); // с зажатой клавишей ALT получаем True
//   console.log("ctrlKey =>", event.ctrlKey); // с зажатой клавишей CTRL получаем True
//   console.log("shiftKey =>", event.shiftKey); // с зажатой клавишей SHIFT получаем True
// });

/* ----------------------------------
3. Всплытие события и его отмена
---------------------------------- */

// // Выбираем элемент на странице
// var outerContainer = document.querySelector(".block-container-1");
// // Вешаем на внешний контейнер прослушку события click
// // В ф-ю передаем параметр event, по которому внутри будет доступен объкт описывающий событие
// outerContainer.addEventListener("click", function(event) {
//     // Выводим alert
//     alert("Click on outerContainer");
//     // Распечатываем  в консоль event.target - HTML элемент на котороом произошло событие
//     console.dir(event.target);
// });

// var buttonInside = document.querySelector("#buttonInside");
// buttonInside.addEventListener("click", function(e) {
//     e.stopPropagation(); // останавливаем всплытие и передачу события вверх по DOM дереву, на родительские элементы
//     alert("Click on buttonInside");
// });

/* ---------------------------------- 4. События с курсором ---------------------------------- */
// Двойной клик
// forDoubleClick.addEventListener("dblclick", function() {
//   alert("Здрясьте");// при двойном клике всплывающее окно выдается
// });

// События курсора
// mouseTest.addEventListener("mousedown", function () {
//   alert("Добрый вечерок");
// });
/*  ТИПЫ СОБЫТИЙ: 
1) mousedown  - при нажатии; 
2) mouseup    - при отпускании; 
3) mouseenter - при наведении; 
4) mouseleave - при отведении; 
5) mouseover  - при наведении на любой тег, не на текст и соседние в том числе если внутри есть несколько дивов; 
6) mouseout   - при отведении на любой тег, не на текст и соседние в том числе если внутри есть несколько дивов;
7) mousemove  - при любом перемещении мышки; 
8) focuc      - при нажатии на input/форму;
9) blur       - при отведении с input/формы; */

// inputName.addEventListener('focus',function () {
// console.log('firied')})
// // События элементов
// inputName.addEventListener("blur", function () {
//     console.log("Fired!");
// });

// Фокус с фоном
// mouseTest.addEventListener("mousemove", function (event) {
//   document.querySelector("body").style.backgroundColor = (`rgb(200, ${event.offsetX}, ${event.offsetY}`);
// });

/* ----------------------------------  5. События с клавиатурой ---------------------------------- */

// inputName.addEventListener('keydown', function(event){
//     console.log("Fired!11");
//     console.log(event.key); // q Q
//     console.log(event.code); // KeyQ KeyQ
// });

// inputName.addEventListener('keyup', function (event) {
//     document.querySelector("#valueFromForm").innerText = this.value;
// });

/* ---------------------------------- 6. События с действиями копировать и вставить  ---------------------------------- */

// inputName.addEventListener('paste', function(event){
//     console.log("Fired!11");
// });

/* ---------------------------------- 7. Отмена стандартного действия ---------------------------------- */

// window.addEventListener('copy', function (event) {
//     console.log("Fired!");
//     event.preventDefault();
// });

// formSum.addEventListener("submit", function(event) // при отправки формы сабмит срабатывает{
//     console.log("Submited!");
//     event.preventDefault(); // отменяет submit
// });

/* ---------------------------------- 8. События с формами ---------------------------------- */

/*  ТИПЫ СОБЫТИЙ: 
1) reset  - сброс; 
2) input  - ввод/изменение значение формы (при малейшем изменении - срабатывается, кроме вставки); 
3) change - изменение значение формы, только после перехода фокуса на другой элемент, кроме встаки, вырезание срабатывает; 
4) submit - отправка; 

// formSum.addEventListener('change', function (event) {
//     console.log("Fired!");
// });

// formSum.addEventListener('paste', fired);
// formSum.addEventListener('input', fired);

// function fired(){
//     console.log("Fired!");
// }

/* ---------------------------------- 9. Калькулятор ---------------------------------- */

var calcForm = document.querySelector("#formSum");

calcForm.addEventListener("submit", function (event) {
  event.preventDefault(); // 1
  console.log("");
  var oneNumb, twoNumb, action, result;

  oneNumb = parseInt(calcForm.querySelector("#numberOne").value);
  twoNumb = parseInt(calcForm.querySelector("#numberTwo").value);
  action = formSum.querySelector("#calcAction").value;

  if (action == "plus") result = oneNumb + twoNumb;
  if (action === "minus") result = oneNumb - twoNumb;
  if (action == "multiply") result = oneNumb * twoNumb;
  if (action == "devide") result = oneNumb / twoNumb;

  console.log(`1 число = ${oneNumb}`);
  console.log(`2 число = ${twoNumb}`);
  console.log(`Действие = ${action}`);
  console.log(`Результат = ${result}`);
  calcResult.innerText = result;
});


calcForm.addEventListener("reset", function (event) {
   
    calcResult.innerText = "";
  });
// var calcForm = document.querySelector("#formSum");
// console.log("calcForm", calcForm);

// /*
// 1. Отловить событие submit
// 2. Отменить стандартную отправку формы
// 3. Получить значение число 1 и числа 2
// 4. Получить выбранное действие
// 5. Произвести операцию
// 6. Вывести полученный результат на страницу
// */

// // Обрабатываем отправку формы
// calcForm.addEventListener("submit", function(event) {
//     // Отменяем отправ ку по умолчанию
//     event.preventDefault();
//     console.log("Submit");

//     // Определяем переменные
//     var a, b, action, result, resultCell;

//     // Определяем число a
//     a = document.querySelector("#numberOne").value; // Получаем значение из формы
//     a = parseInt(a); // Из формы мы получили строку, преобразуем ее в число
//     console.log("a", a);

//     // Определяем число b
//     b = document.querySelector("#numberTwo").value; // Получаем значение из формы
//     b = parseInt(b); // Преобразуем в число
//     console.log("b", b);

//     // Опрелделяем действие
//     action = document.querySelector("#calcAction").value;
//     console.log("action", action);

//     // В зависимости от действия - выполняем его
//     switch (action) {
//         case "minus":
//             result = a - b;
//             break;
//         case "plus":
//             result = a + b;
//             break;
//         case "multiply":
//             result = a * b;
//             break;
//         case "devide":
//             result = a / b;
//             break;
//         default:
//             break;
//     }

//     // Выводим результат к консоль
//     console.log(result);

//     // Находим тег для вывода результата и записываем в него получившийся резщультат
//     resultCell = document.querySelector("#calcResult");
//     resultCell.innerText = result;
// });

// // Обрабатываем поведение формы по сборосу
// calcForm.addEventListener("reset", function() {
//     // Помимо сброса формы которые происходит стандартно, очищаем тег с результатом
//     var resultCell = document.querySelector("#calcResult");
//     resultCell.innerText = "";
// });
