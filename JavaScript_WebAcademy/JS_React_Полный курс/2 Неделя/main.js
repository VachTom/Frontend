//  ПРИВЕДЕНИЕ к числу
console.log("ПРИВЕДЕНИЕ к числу")
console.log("Через +"); // Самый быстрый способ 
console.log(+"500");
console.log(+"500.123");

console.log("\nparseInt:");
console.log(parseInt("500"));
console.log(parseInt("500.123"));
console.log(parseInt("500A"));
console.log(parseInt("A500"));

console.log("\nNumber:");
console.log(Number("500"));
console.log(Number("500.123"));
console.log(Number("500A"));
console.log(Number("A500"));


// ПРИВЕДЕНИЕ К ЛОГИЧЕСКОМУ ТИПУ 
console.log("\nПРИВЕДЕНИЕ К ЛОГИЧЕСКОМУ ТИПУ")
console.log(Boolean("abc"));     // воспринято как true
console.log(Boolean(""));        // воспринято как false

console.log(Boolean(500));       // воспринято как true, любое чтсло кроме нуля
console.log(Boolean(0)); 

console.log(Boolean(null));      // воспринято как false
console.log(Boolean(undefined)); // воспринято как false

console.log(Boolean({}));        // воспринято как true
console.log(Boolean([]));        // воспринято как true


console.log("Hello, " + 'world'); // конкатенация 

console.log('\nК числам:');
console.log('10' + 5);
console.log(5 + '10');
console.log(5 + '');

console.log('\nК null:');
console.log(null + 'a');
console.log('a' + null);
console.log(null + 5); // null воспринимается как 0
console.log(5 + null);

console.log('\nК undefined:');
console.log(undefined + 'a');
console.log('a' + undefined);
console.log(undefined + 5); // null воспринимается как 0
console.log(5 + undefined);
