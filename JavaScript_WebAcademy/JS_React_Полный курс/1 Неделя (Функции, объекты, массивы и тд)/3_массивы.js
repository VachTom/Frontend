/* 
========== Задача №1 ==========

Создайте 1 массив с книгами ( или фильмами, фруктами, блюдами) Наполните его 5-ю элементами.
Распечатайте каждый элемент массива через циклfor (). Выведите индекс каждого элемента и его содержимое.
Распечатайте каждый элемент массива через метод forEach().
Выведите индекс каждого элемента и его содержимое.


========== Задача №2 ==========

Создайте массив array1 из 5-ти фруктов. 
Добавьте в начало массива новый элемент с овощем. 
Добавьте в конец массива 2 элемента с овощами. 
Создайте новый массив array2, на основе массива array1, скопировав из него только фрукты. (2, 3, 4, 5, 6 - элементы) 
Распечатайте в консоль оба массива. Используйте console.log() для вывода переменной с массивом. */


console.log("==================== Задача №1 ====================");

console.log("\nЧерез for:");
var foodsArr = ["Толма", "хаш", "борщ", "люля", "Солянка", "Жаркое"];
for (var i = 0; i < foodsArr.length; i++) {
  console.log(foodsArr[i], i);
}

console.log("\nЧерез forEach:");
foodsArr.forEach(function (item, index) {
  console.log(index, item);
});







console.log("\n\n==================== Задача №2 ====================");
function printArr(arra) {
  for (let i = 0; i < arra.length; i++) {
    console.log(i, arra[i]);
  }
}
var arr1 = ['Банан', 'Манго', 'Маракуйя', 'Апельсин', 'Яблоко'];
console.log('\nМассив:');
printArr(arr1);


console.log("\n1. Добавили в начало массива новый элемент с овощем: ");
arr1.unshift("Помидор");
printArr(arr1);

console.log("\n2. Добавьте в конец массива 2 элемента с овощами: ");

arr1.push("Огурец", "Капуста");
printArr(arr1);


console.log("\n3. Создайте новый массив array2, на основе массива array1, скопировав из него только фрукты. \n4. Распечатайте в консоль оба массива. Используйте console.log() для вывода переменной с массивом:");
var arr2 = arr1.slice(1,6);
console.log('\nМассив array1:');
printArr(arr1);

console.log('\nМассив array1 (Только фрукты):');
printArr(arr2);
