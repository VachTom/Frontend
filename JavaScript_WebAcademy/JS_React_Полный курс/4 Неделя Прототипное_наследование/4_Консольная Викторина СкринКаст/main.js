// 1. Создайте конструктор
function Question(question, answers, correct) {
  this.question = question;
  this.answers = answers;
  this.correct = correct;
}


  // 4.2 Опишем метод displayQuestion который будет выводить вопрос и ответы
  // Записываем его в прототип класса Question, чтобы все объекты этого класса могли его использовать
  // и он был описан только 1 раз
  Question.prototype.displayQuestion = function () {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ". " + this.answers[i]);
    }
  };

//   // 2. Создайте 3-4 вопроса, используя конструктор
var q1 = new Question(
  "JavaScript самый лучший язык программирования?",
  ["Да", "Нет"],
  0
);

var q2 = new Question(
  "this внутри метода всегда ссылается на:",
  ["Window", "Document", "Объект"],
  2
);

var q3 = new Question(
  "Что такое scope в JavaScript:",
  [
    "Документ с разметкой",
    "все методы внутри объекта",
    "Движок JS",
    "Область видимости",
  ],
  3
);

// 3. Поместите все вопросы в массив
var questions = [q1, q2, q3];

// 4. Выберите один случайный вопрос
// 4.1 Найти случайное число

var n = Math.floor(Math.random() * questions.length);


// 1. Создайте конструктор
// function Question(question, answers, correct) {
//  this.question = question;
//  this.answers = answers;
//  this.correct = correct;
// }
//   // 4.2 Опишем метод displayQuestion который будет выводить вопрос и ответы
//   // Записываем его в прототип класса Question, чтобы все объекты этого класса могли его использовать
//   // и он был описан только 1 раз
//   Question.prototype.displayQuestion = function () {
//     console.log(this.question);
//     for (var i = 0; i < this.answers.length; i++) {
//       console.log(i + ". " + this.answers[i]);
//     }
//   };

//   // 6.1 Метод для проверки корректного ответа
//   Question.prototype.checkAnswer = function (answer) {
//     if (answer === this.correct) {
//       console.log("Правильный ответ!");
//     } else {
//       console.log("Неверный ответ. Попробуйте еще раз.");
//     }
//   };

//   // 2. Создайте 3-4 вопроса, используя конструктор
// var q1 = new Question(
//  "JavaScript самый лучший язык программирования?",
//  ["Да", "Нет"],
//  0
// );

// var q2 = new Question(
//  "this внутри метода всегда ссылается на:",
//  ["Window", "Document", "Объект"],
//  2
// );

// var q3 = new Question(
//  "Что такое scope в JavaScript:",
//  [
//    "Документ с разметкой",
//    "все методы внутри объекта",
//    "Движок JS",
//    "Область видимости",
//  ],
//  3
// );

// // 3. Поместите все вопросы в массив
// var questions = [q1, q2, q3];

//   // 4. Выберите один случайный вопрос
//   // 4.1 Найти случайное число
//   var n = Math.floor(Math.random() * questions.length);

//   // 4.3 Распечатываем в консоль случайны вопрос с вариантами ответов
//   questions[n].displayQuestion();

//   // 5. Используйте функцию prompt для запроса ответа от пользователя.
//   var answer = parseInt(prompt("Введите номер верного ответа:"));

//   // 6. Проверьте, является ли введенный ответ корректным
//   // 6.2 Проверка ответа с помощью метода checkAnswer
//   questions[n].checkAnswer(answer);
// })();
