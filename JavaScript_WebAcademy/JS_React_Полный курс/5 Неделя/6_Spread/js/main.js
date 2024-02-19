// ----------------------------------------------
// Оператор spread
// ----------------------------------------------

// Преобразует массив с значениями в аргументы, в вызове функции.

// ----------------------------- ES5 -----------------------------
/*
// Есть массив с числами, надо посчитать сумму всех элементов массива
var numbers = [18, 30, 12, 21];

// Есть функция которая принимает 4 значения и возвращает их сумму
function calcSum(a, b, c, d) {
    return a + b + c + d;
}

// Как запустить функцию calcSum() для массива numbers
// ES5
var sumES5 = calcSum.apply(null, numbers);
console.log(sumES5); // 81
*/
// ----------------------------- ES6 -----------------------------
/*
var numbers = [18, 30, 12, 21];
function calcSum(a, b, c, d) {
    return a + b + c + d;
}

const sumES6 = calcSum(...numbers);
console.log(sumES6); // 81
*/

// ---------------- Spread - объединение массивов ----------------
/*
const familySmith = ["John", "Jane", "Mark"];
const familyMiller = ["Mary", "Bob", "Ann"];
const bigFamily = [...familySmith, "Emily", ...familyMiller];
console.log(bigFamily);
*/

// ----------------------- Пример с нодами -----------------------
/*
const header = document.querySelector("h1");
const boxes = document.querySelectorAll(".box");
const allElements = [header, ...boxes];
console.log(allElements);
*/