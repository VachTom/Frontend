// ----------------------------------------------
// 1. Массивы. Array.from()
// ----------------------------------------------

// ----------------- 1 вариант с ES5-----------------
/*
const boxes = document.querySelectorAll(".box");
console.log(boxes);

// ES5
var boxesES5 = Array.prototype.slice.call(boxes);
console.log(boxesES5);

boxesES5.forEach(function(item){
    item.style.backgroundColor = "#00cec9";
})
*/

// ----------------- 2 вариант с ES6 -----------------
/*
const boxes = document.querySelectorAll(".box");
console.log(boxes);

// const boxesES6 = Array.from(boxes);
// console.log(boxesES6);
Array.from(boxes).forEach(item => item.style.backgroundColor = "#00cec9")
*/

// ----------------------- String example -----------------------
/*
var string = "Hello";
const arrayFromString = Array.from(string);
console.log(arrayFromString);

// Документация по методу Array.from()
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/from
*/

// ----------------------------------------------
// 2. Массивы. for ( of ) and breake and continue
// ----------------------------------------------

// Неет возможности использовать break and continue в .forEach() или .map() методах в ES5
// continue - пропустить текущую итерацию цикла и перейти к следующей
// break - прекращает цикл

// Имеем массив с годами рождения, выведем в консоль всех у кого возраст более 18 лет

/*
// ES5
var ages = [1995, 2010, 1980, 2002, 2004, 1988, 2012];
for (var i = 0; i < ages.length; i++) {
    if ( 2020 - ages[i] < 18) {
        continue;
    }
    console.log("Год рождения: " + ages[i], "Возраст " + (2020 - ages[i]));
    if (2020 - ages[i] === 18 ) {
        break;
    }
}
*/

// ES6
/*
var ages = [1995, 2010, 1980, 2002, 2004, 1988, 2012];
for ( const item of ages) {
    if (2020 - item < 18) {
        continue;
    }
    console.log(`Год рождения: ${item}. Возраст ${2020 - item}.`);
    if (2020 - item === 18) {
        break;
    }
}
*/

// ----------------------------------------------
// 3. Массивы. .findIndex() and .find()
// ----------------------------------------------

const ages = [12, 17, 21, 8, 14, 25];

// ES6 Метод .findIndex()
// возвращает индекс элемента удовлетворяющего условию

const itemIndex = ages.findIndex((item)=>{
    return item > 18
});
console.log(itemIndex);

// ES6 Метод .find()
// возвращает значение элемента удовлетворяющего условию

const itemValue = ages.find((item)=>{
    return item > 18;
});
console.log(itemValue);
