// -------------------------------------------------------
// Rest параметры.
// Принимает одиночные аргументы функции и трансформирует их в массив
// -------------------------------------------------------

/*
// ES5
function isFullAgeES5(){
    console.log(arguments);
    var argsArray = Array.prototype.slice.call(arguments);
    console.log(argsArray);

    argsArray.forEach(function(item){
        console.log(2020 - item >= 18);
    })

}
isFullAgeES5(1990, 1999, 1965);
isFullAgeES5(1990, 1999, 1965, 2016, 1987);
*/
 
/*
// ES6
function isFullAgeES6 (...years){
    console.log(years);
    years.forEach(item=>console.log(2020 - item >= 18))
}

isFullAgeES6(1990, 1999, 1965);
isFullAgeES6(1990, 1999, 1965, 2016, 1987);
*/

// Пример 02. Массив и отдельные аргументы  -----------------------

/*
// ES5
function isFullAgeES5(limit) {
    console.log(arguments);
    var argsArray = Array.prototype.slice.call(arguments, 1);
    console.log(argsArray);

    argsArray.forEach(function (item) {
        console.log(2020 - item >= limit);
    })

}
isFullAgeES5(18, 1990, 1999, 1965);
*/

// ES6
function isFullAgeES6(limit, ...years) {
    console.log(years);
    years.forEach(item => console.log(2020 - item >= limit))
}

isFullAgeES6(24, 1990, 1999, 1965);
