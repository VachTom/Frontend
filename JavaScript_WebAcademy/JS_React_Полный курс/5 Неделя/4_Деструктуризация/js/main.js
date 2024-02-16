// ----------------------------------------------
// 1. Деструктуризация. Destructuring
// ----------------------------------------------
// Деструктуризация - разбиение массива или объекта на отдельные переменные.

/*
// ES5
var johnES5 = ["John", 26];
var nameES5 = johnES5[0];
var ageES5 = johnES5[1];
console.log(nameES5, ageES5);

// ES6
// const johnES6 = ["John", 26];
// const [nameES6, ageES6] = johnES6;

const [nameES6, ageES6] = ["John", 26];
console.log(nameES6, ageES6);
*/

// ----------------------- Object example -----------------------
/*
const obj = {
    firstName: "John",
    secondName: "Smith"
}
// const { firstName, secondName } = obj;
// console.log(firstName, secondName);

const { firstName: name, secondName: second } = obj;
console.log(name, second);
*/

// --------------------- Function example ---------------------
function isFullAgeFunc(yearOfBirth) {
    const age = 2020 - yearOfBirth; // 22
    const isFullAge = age >= 18; // true
    return [age, isFullAge];
}
const [age, isFullAge] = isFullAgeFunc(1992);
console.log(age, isFullAge);

// Выводы:
// 1) Деструктуризация позволяет быстро создать переменные на основе массива ил объекта
// 2) Для работы с массивом используем квадратные скобки [], для работы с объектом фигурные {}
// 3) При работе с объектом по умолчнию используем те же названия свойств что и в объекте
// 4) Если из объекта надо создать переменные с другими именами, то задаем их в виде { objectPropertyName: newVariableName }
