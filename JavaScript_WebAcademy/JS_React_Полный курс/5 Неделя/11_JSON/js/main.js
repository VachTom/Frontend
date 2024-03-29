// ----------------------------------------------
//  6. Задание
// ----------------------------------------------

// Создать JSON строку, в которой описать объект.
// Далее перевести ее в объект с помощью одного из методов объекта JSON.
// В качестве примера можно исопльзовать любой сайт.
// P.S. Смотрите пример к ДЗ в конце урока.
// ДЗ сдавать через CodePen.

// const jsonString = '{"siteName":"WebCademy", "courses": {"free": [ { "title": "Создай свой первый сайт на HTML5 и CSS3", "days": 7, "techs": "html" } ], "payed": [{"title": "Курс по созданию и верстке сайтов.","days": 42,"techs": "html" },{ "title": "Продвинутая верстка. Командная работа","days": 28,"techs": ["gulp", "scss", "pug", "git", "github"]}]}}';

// const newObj = JSON.parse(jsonString);
// console.log(newObj);

const objJS = {
  name: "David",
  school: 571,
  class: 11,
  yearsBirth: 2006,
  calcOfBirth: function () {
    return 2024 - this.yearsBirth;
  },
  examEГЭ: {
    overriding: ["mathematics", "russianLang", "informatics"],
    secondary: ["physics", "biology"],
  },
};


console.log(objJS);

const objJSON = JSON.stringify(objJS)
console.log(objJSON);
