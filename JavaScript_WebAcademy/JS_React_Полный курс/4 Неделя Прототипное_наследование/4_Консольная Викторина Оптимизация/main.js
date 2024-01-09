(function printArr() {
  var Question = function (question, answers, right_answer) {
    this.question = question;
    this.answers = answers;
    this.right_answer = right_answer;
  };

  var questionsArray = [
    // в один массив
    (quest1 = new Question(
      "Тернарный оператор это ...?",
      ["Условие if/else", "Работа с циклом", "Объект"],
      0
    )),
    (quest2 = new Question(
      "Выбрать основную функцию IIFE:",
      [
        "Скрытие от внешней области видимости.",
        "Создание собственной области видимости.",
        "Cкрытие от внешней области видимости и создание собственной области видимостикт.",
      ],
      2
    )),
    (quest3 = new Question(
      "Для чего используется паттерн-модуль ?",
      [
        "Для ограничения области видимости переменных.",
        "Для соединения с глобальной облости видимости.",
        "Для ограничения области видимости переменных и объединения кода в единный модуль.",
      ],
      2
    )),
    (quest4 = new Question(
      "Верно ли следующее утверждение и к чему это приводит: Каждый объект в JS имеет свойство Prototype",
      [
        "Неверно.",
        "Верно, это не обеспечивает наследование в JS.",
        "Верно, это обеспечивает наследование в JS.",
      ],
      2
    )),
  ];

  Question.prototype.renderQuestion = function (numberQuestion) {
    console.log(
      "\n" + "%c" + (numberQuestion + 1) + " Вопрос: " + this.question,
      "background: #424242; color: #FAFAFA"
    );     // Вывод вопроса
    this.answers.forEach((el, index) => {
      console.log(`${index + 1}. ${el}`);    // Вывод ответов на вопрос
    });
  };

  Question.prototype.checkAnswer = function (answerUser, callback) {
    if (answerUser == this.right_answer + 1) {
      console.log(
        "\n" + "%c" + "Правильный ответ! Ваш счёт: " + callback(true),
        "background: #66BB6A; color: #FAFAFA" + "\n"
      );

      // printArr(questionsArray); // Грубая ошибка, ты выводишь всю функцию заново и также все вопросы выводишь заново counter будет всегда 0
    } else {
      console.log(
        "\n" + "%c" + "Правильный ответ! Ваш счёт: " + callback(false),
        "background: #ef5350; color: #FAFAFA" + "\n"
      );
      // printArr(questionsArray); // Грубая ошибка, ты выводишь всю функцию заново и также все вопросы выводишь заново counter будет всегда 0
    }
  };
  function counterFn() {  // Для счетчика
    var counter = 0;
    return function (i) {
      if (i) {
        counter++;
      }
      return counter;
    };
  }
  var numbCounter = counterFn();

  function ifs() {
    var randomIndex = Math.floor(Math.random() * questionsArray.length); // рандомное число
    const randomQuestion = questionsArray[randomIndex];

    randomQuestion.renderQuestion(randomIndex + 1);
    var answerUser = prompt("Введите номер верного ответа:");

    if (answerUser === null || answerUser.toLowerCase() === "exit") {
      return console.log("Выход из приложения");
    }
    randomQuestion.checkAnswer(answerUser, numbCounter);
    setTimeout(ifs, 800);
  }
  setTimeout(ifs, 800);
})();
