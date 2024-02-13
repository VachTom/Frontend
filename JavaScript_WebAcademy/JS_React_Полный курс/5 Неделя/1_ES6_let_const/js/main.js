// ================================================================
// 1. Объявление переменных с помощью let и const
// ================================================================

// Переменная типа let может изменять свое значение
// let name = "Jane Smith";
// name = "Jane Miller";

// Переменная типа const не может менять значение.
// const yearOfBirth = 1980;
// yearOfBirth = 1920; // Error Assignment to constant variable.

/*
ВЫВОДЫ:
1) Вместо var используем let или const.
2) По умолчанию используем const.
Если мы сразу видим что переменная будет изменяться тогда используем let. Если сразу этого не можем предвидеть, тогда используем const и в случае возникновения ошибки из-за изменения переменной - проверим где это происходит, и если так и нужно - тогда меняем определение переменной на let.
https://habr.com/ru/post/482892/
*/



// ================================================================
// 2. Область видимости для let и const в отличие от var
// ================================================================

// ES5. function scope: function(){}

// function examResult(passedTest){
//     if (passedTest) {
//         var name = "Юрий";
//         var message = name + " Поздравляю! Вы успешно сдали экзамен!";
//         console.log(message); // +
//     }
//     console.log(message); // +
// }
// console.log(message); // Error:  message is not defined
// examResult(true);

// ES6. block scope: {}

// function examResult(passedTest){
//     if (passedTest) {
//         let name = "Юрий";
//         let message = name + " Поздравляю! Вы успешно сдали экзамен!";
//         console.log(message); // +
//     }
//     console.log(message); // Error:  message is not defined
// }

// function examResult(passedTest) {
//     let name, message;
//     if (passedTest) {
//         name = "Юрий";
//         message = name + " Поздравляю! Вы успешно сдали экзамен!";
//     }
//     console.log(message); // +
// }

// examResult(true);

// ------------- Пример с циклом и var -------------

// var i = 25;
// console.log(i); // 25

// for (var i = 0; i < 5; i++){
//     console.log(i);
// }

// console.log(i); // 5

// ------------- Пример с циклом и let -------------

// let n = 25;
// console.log(n); // 25

// for (let n = 0; n < 5; n++) {
//     console.log(n);
// }

// console.log(n);

// --------------- Hoisting для let и const - "не работает" ---------------

// function examResult(passedTest) {
//     if (passedTest) {
//         let name = "Юрий";
//         let message = name + " Поздравляю! Вы успешно сдали экзамен!";
//     }
//     console.log(message); // +
// }

// examResult(true);

/*
ВЫВОДЫ:
1) let и const имеют блочную область видимости в рамках фигурных скобок {}
2) При объявлении const должна быть сразу инициализирована значением.
3) По умолчанию используем const. https://habr.com/ru/post/482892/
4) Для let и const не работает hoisting.
*/




// ================================================================
// 3. Блоки и IIFE. Приватность.
// ================================================================

// ES5 - Облоасть видимости IIFE
// (function(){
//     var userName = "Джон До";
//     console.log(userName); // переменная видна внутри
// })();
// console.log(userName); // и не вилна снаружи

// ES6 - Блочная область видимости {}
{
    const userName = "Джон До";
    console.log(userName);  // переменная видна внутри
}
// console.log(userName);  // и не видна снаружи

/*
ВЫВОДЫ:
1) Если вам нужна приватность для let и const, то можно использовать block scope
*/