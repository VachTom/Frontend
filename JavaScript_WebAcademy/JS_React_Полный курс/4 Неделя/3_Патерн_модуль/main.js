// САМОВЫЗЫВАЮЩАЯ ФУНКЦИЯ - IIFE
// Обозначаем функцию в круглые скобки, для того чтобы парсе JS принял это за выражение
// Далее вызываем её
var counterModule = (function () {
  var counter = 0;

  function increaseFunc() {
    counter++;
  }
  function decreaseFunc() {
    counter--;
  }

  function setCounterFunc(number) {
    if (Number.isInteger(number)) {
      if (number > 0) {
        counter = number;
      } else {
        alert('Введите число больше "0"!'); // Лайфхак: Прописать в выводе кавычки
      }
    } else {
      alert("Введите число!");
    }
  }
  function getCounterFunc() {
    console.log(counter);
  }
  return {
    increase: increaseFunc,
    decrease: decreaseFunc,
    getCounter: getCounterFunc,
    setCounter: setCounterFunc,
  };
})();

// console.log(counter); // Выдаст ошибку, тк данная переменная внутри анонимной обл видимости

/* 
Задание №2.

Написать модуль для калькулятора.

У него должны быть следующие методы: 

Сеттер для задания переменных a и b.
Метод sum, который будет вычислять сумму переменных a и b и записывать результат в переменную result. 
Метод difference, который будет вычислять разницу переменных a и b и записывать результат в переменную result.
Метод getresult, который будет выводить в консоль значение переменной result.

После реализации модуля, ниже, под ним запустите по очереди методы этого модуля. Установите стартовые значения через сеттер, после сделайте сумму и выведите результат в консоль через геттер. Далее сделайте вычитание и также выведите результат в консоль.

Пример:

calc.setValues(30, 20);
calc.sum();
calc.getResult(); // 50

calc.difference();
calc.getResult(); // 10


Задание повышенной сложности:

В сеттер для a и b, добавьте проверку на то, что это целые числа и на неотрицательное значение. В случае непрохождения проверки - выводите сообщение в консоль.


Когда задания выполнены,  необходимо приложить ссылки на CodePen в соответствующее поля. */

var calcModule = (function () {
  var counter1 = 0;
  var counter2 = 0;
  var result;

  function sumFunc() {
    result = counter1 + counter2;
  }
  function differenceFunc() {
    result = counter1 - counter2;
  }

  function setCounterFunc(number1, number2) {
    if (Number.isInteger(number1) & Number.isInteger(number2)) {
      if ((number1 > 0) & (number2 > 0)) {
        counter1 = number1;
        counter2 = number2;
      } else {
        console.error('Введите число больше "0"!'); // Лайфхак: Прописать в выводе кавычки
      }
    } else {
      console.error("Введите число!");
    }
  }
  function getCounterFunc() {
    console.log(`Результат: ${result}`);
  }
  return {
    sum: sumFunc,
    difference: differenceFunc,
    getCounter: getCounterFunc,
    setCounter: setCounterFunc,
  };
})();
calcModule.setCounter(5, 1);
calcModule.sum();
calcModule.getCounter();

calcModule.difference();
calcModule.getCounter();