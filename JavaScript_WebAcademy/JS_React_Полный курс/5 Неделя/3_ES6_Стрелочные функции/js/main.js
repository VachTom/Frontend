// ================================================================
// 1. Стрелочные функции - Синтаксис
// ================================================================

// ES5
// var calcAgeES5 = function (yearOfBirth){
//     return 2020 - yearOfBirth;
// }

// console.log(calcAgeES5(1980));

/* ------------- Полный синтаксис () => {}; ------------- */
// var calcAgeES6 = (yearOfBirth) => {
//     return 2020 - yearOfBirth;
// }
// console.log(calcAgeES6(1980));

/* ------------- Сокращенный синтаксис () => ; ------------- */
// var calcAgeES6 = (yearOfBirth) => 2020 - yearOfBirth;
// console.log(calcAgeES6(1980));

// ================================================================
// 2. Стрелочные функции - Пример использования
// ================================================================

// const years = [1990, 1975, 1965];

// ES5
// var agesES5 = years.map(function (item) {
//     return 2020 - item;
// });
// console.log(agesES5);

// ES6
// const agesES6 = years.map((item) => {
//     return 2020 - item;
// })
// const agesES6 = years.map((item) => 2020 - item);
// console.log(agesES6);

/*
ВЫВОДЫ:
1) Запись в виде стрелочной функции удобно использовать для определения callback функций
*/

// ================================================================
// 3. Стрелочные функции и ключевое слово this
// ================================================================

/* ------------------------- ES5 ----------------------------------*/
// var objectOne = {
//     objectName: "Object One",
//     sayHi: function(){
//         console.log(this);
//         console.log(this.objectName); // Object One
//         console.log("-----------------");

//         function printToConsole(){
//             console.log(this); // Window, но если эта была бы стрелочная функция она бы ссылалась на объект, тк она поднимается в поисках окружения нормальной функции
//             console.log(this.objectName); // underfined
//         }
//        printToConsole()
//     }
// }

// objectOne.sayHi();

/* ------------------------- ES6 ----------------------------------*/

// var objectOne = {
//     objectName: "Object One",
//     sayHi: function () {
//         console.log("-----------------");
//         console.log(this);
//         console.log(this.objectName); // Object One, но если была бы стрелочная функция, то был бы underfined, тк она поднимается наверх, а там обьект, который в глобальной области видимости 
//         console.log("-----------------");

//         const printToConsole = () => {
//             console.log("-----------------");
//             console.log(this);
//             console.log(this.objectName); // Object One
//             console.log("-----------------");
//         }

//         printToConsole();

//     }
// }

// objectOne.sayHi();

// var objN = {

// -------------------------------------------------------------------------------------

// var n = {
//     obJ: "ObJect names",
//     arrr: [10, 35, 86],
//     value: 100,
//     incr: function () {
//         var that = this
//         this.arrr.forEach(function(item) {
//             console.log(item + that.value)
//         })
//     },
// }
// // console.log(n.value)
// n.incr()

// var outObject = {
//   masArr: [55, 1000, 654],
//   value: 10,
//   func: function () {
//     this.masArr.forEach(() => {
//       console.log(this);
//     });
//   },
// };
// outObject.func()

/*
Стрелочные функции особенные:
У  них нет своего «собственного» this. 
Если мы используем this внутри стрелочной функции, то его значение берётся из внешней «нормальной» функции.

Внутри стрелочной функции нет своего this.
this в стрелочной функции - делит this с окружением первой нормальной родительской функции.

1. Идем вверх до первой нормальной функции (метода или объекта)
2. Смотрим в каком окружении находится эта функция (метод или объект)
3. this "ссылается" на это окружение

*/

/* --------------------------- Пример 1 ----------------------------- */

// var objectOne = {
//     objectName: "Object One",
//     sayHi: () => {
//         console.log(this); // Window
//         console.log(this.objectName); // undefined
//     }
// }

// objectOne.sayHi();

/* --------------------------- Пример 2 ----------------------------- */
/*
var objectOuter = {
    objectName: "Outer object",
    someAction: function(){

        console.log(this); // objectOuter

        var objectOne = {
            objectName: "Object One",
            sayHi: () => {
                console.log(this); // objectOuter
                console.log(this.objectName); // "Outer object"
            }
        }
        objectOne.sayHi();

    }
}
objectOuter.someAction();
*/
/*
1. Идем вверх до первой нормальной функции (метода или объекта)
2. Смотрим в каком окружении находится эта функция (метод или объект)
3. this "ссылается" на это окружение
*/

/* ------------------------- Пример из реальной жизни --------------------------- */

// Проблема. this внутри функции callback ссылается на window,
// а не на объект который нам нужен

// var obj = {
//     objName: "Object with array",
//     numbers: [10, 15, 25, 05],
//     value: 100,
//     increaseArrayOnValue: function () {
//         this.numbers.forEach(function (item) {
//             console.log(this); // Window
//             console.log(item); // 15
//             console.log(this.value); // undefined
//             console.log(item + this.value); // NaN
//         })
//     }

// }
// obj.increaseArrayOnValue();

/* -------------------- 1-й вариант решения: Сохраняем this в that --------------- */

// var obj = {
//     objName: "Object with array",
//     numbers: [10, 15, 25, 05],
//     value: 100,
//     increaseArrayOnValue: function(){
//         var that = this;
//         this.numbers.forEach(function(item){
//             console.log(that);
//             console.log(item); // 15
//             console.log(that.value); // undefined
//             console.log(item + that.value); // NaN
//         })
//     }

// }
// obj.increaseArrayOnValue();

/* ------------- 2-й вариант решения: Привязка контекста через bind() ----------- */

// var obj = {
//     objName: "Object with array",
//     numbers: [10, 15, 25, 05],
//     value: 100,
//     increaseArrayOnValue: function () {

//         this.numbers.forEach(function (item) {
//             console.log(this); // Window
//             console.log(item); // 15
//             console.log(this.value); // undefined
//             console.log(item + this.value); // NaN
//         }.bind(this))

//     }

// }
// obj.increaseArrayOnValue();

/* ------------- 3-й вариант решения:  Стрелочной функция ----------- */
/*
var obj = {
    objName: "Object with array",
    numbers: [10, 15, 25, 05],
    value: 100,
    increaseArrayOnValue: function () {
        this.numbers.forEach((item)=>{
            console.log(this); // obj
            console.log(item); // 15
            console.log(this.value); // 100
            console.log(item + this.value); // 115
        })
    }
}
obj.increaseArrayOnValue();
*/
/*
Выводы:
1) Синтаксис стрелочной функции:
() => {}

2) Сокращенный синтаксис стрелочной функции:
() => return value or expression;

3) Стрелочная функция не имеет своего this, а заимствует его из окружения первой нормальной функции, метода или объекта в котором находится.

4) Алгоритм поиска определения this для стрелочной функции:

1. Идем вверх до первой нормальной функции (метода или объекта)
2. Смотрим в каком окружении находится эта функция (метод или объект)
3. this "ссылается" на это окружение

*/

// let user = [
//   {
//     name: "John",
//     age: 30,
//     s: 5,
//   },
//   {
//     name: "Bob",
//     age: 21,
//     s: 8,
//   },
//   {
//     name: "Anna",
//     age: 19,
//     s: 1,
//   },
//   {
//     name: "Mark",
//     age: 35,
//   },
// ];

// Задание 1
// Получите из этого массива объект, где name == "Bob" и сохраните это в какой-либо переменной.

// user.findIndex(function (item) {
//     if (item.name == "Bob") {
//         return console.log(item)
//     }
// })

// user.find((item) => {
//   if (item.name === "Bob") console.log(item);
// });


// Задание 2
// Удалите из массива объектов (задание 2) объект с name == "Anna".

// var removeIndex = user.findIndex((item) => {
//     if (item.name === "Anna") return item
// })
// user.splice(removeIndex, 1)
// console.log(user)

// Задание 3
// Отсортируйте массив объектов в пункте 2 по свойству age в порядке возрастания.

// user.sort(function (a, b) {
//     if (a.age > b.age) {
//       return 1;
//     }
//     if (a.age < b.age) {
//       return -1;
//     }
//     // a должно быть равным b
//     return 0;
//   });
// console.log(user)



// const obj = {
//     id: 5,
//     token: 12343423
// };
// obj.