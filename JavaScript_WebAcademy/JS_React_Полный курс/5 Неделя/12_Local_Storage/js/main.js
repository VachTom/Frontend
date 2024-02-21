// ----------------------------------------------
//  localStorage
// ----------------------------------------------

// localStorage.setItem()
// localStorage.getItem()
// localStorage.removeItem()
// localStorage.clear()

/*
localStorage.setItem("name", "John");
localStorage.setItem("age", 26);
localStorage.setItem("isMarried", true);

const person = {
    name: "John",
    age: 26,
    profesion: "Programmer",
    isMarried: true
}

const fruitsArray = ["apple", "banana", "plum", "cherry", "grape"];

localStorage.setItem("array", fruitsArray);
localStorage.setItem("objectPerson", person);
*/

// ----------------------------------------------
//  Примеры работы с localStorage
// ----------------------------------------------

// Как сохранять данные в localStorage
// Data => JSON.stringify() => localStorage
// localStorage => JSON.parse() => Data

/*
// Сохранение массива
const fruitsArray = ["apple", "banana", "plum", "cherry", "grape"];
localStorage.setItem("fruits", JSON.stringify(fruitsArray));

// Сохранение объекта
const person = {
    name: "John",
    age: 26,
    profesion: "Programmer",
    isMarried: true
}
localStorage.setItem("person", JSON.stringify(person));
*/

// Получение массива и объекта
// const jsonFromStorage = localStorage.getItem("fruits");
// const arrayFruits = JSON.parse(jsonFromStorage);
// console.log(arrayFruits);

// const arrayFruits = JSON.parse(localStorage.getItem("fruits"));
// console.log(arrayFruits);

// const personFromStorage = localStorage.getItem("person");

// if (personFromStorage) {
//     console.log(JSON.parse(personFromStorage));
// }

// localStorage.clear()