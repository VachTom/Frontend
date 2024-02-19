// -------------------------------------------------------
// Map
// -------------------------------------------------------

// Map новая структура данных в JavaScript, формата "ключ - значение"

const quiz = new Map();
quiz.set("вопрос", "Что означает JS?");
quiz.set(1, "Journey Start")
quiz.set(2, "Journey Script")
quiz.set(3, "Java Script")
quiz.set(4, "Java Slim")
quiz.set("correct", 3);
quiz.set(true, "Правильный ответ!")
quiz.set(false, "Неверный ответ!")

// -------------- Примеры работы с объектом типа Map --------------

// if ( quiz.has(4) ) {
//     console.log("Item with index 4 is here");
// } else {
//     console.log("There is no such element with index 4");
// }

// console.log(quiz.size);
// quiz.delete(4)
// console.log(quiz.size);

// console.log(quiz);
// quiz.clear();
// console.log(quiz);

// quiz.forEach((value, key)=>{
//     console.log(`${key} => ${value}`);
// })


// -------- Пример викторины на основе созданного объекта --------

const question = quiz.get("вопрос");
console.log(question);

for ([key, val] of quiz) {
    if (typeof (key) === "number") {
        console.log(key + " => " + val);
    }
}

const answer = parseInt(prompt("Введите номер ответа:"));
console.log(answer);

// if (quiz.get("correct") === answer) {
//     console.log(quiz.get(true));
// } else {
//     console.log(quiz.get(false));
// }

console.log(quiz.get(quiz.get("correct") === answer));

// ---------------------------- Выводы ----------------------------
// Map новая структура данных в JavaScript, формата "ключ - значение"
// Методы и свойства для map объекта:
// .set(key, value)
// .get(key)
// .has(key)
// .size
// .delete(key)
