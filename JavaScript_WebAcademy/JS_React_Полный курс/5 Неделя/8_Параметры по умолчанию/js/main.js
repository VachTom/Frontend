// -------------------------------------------------------
// Default parameters. Параметры по умолчанию
// -------------------------------------------------------

// ES5
function SmithPersonES5(firstName, yearOfBirth, lastName, nationality) {
    if (lastName === undefined ){
        lastName = "Smith";
    }

    if (nationality === undefined) {
        nationality = "american";
    }

    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

var john = new SmithPersonES5("John", 1990);
var emily = new SmithPersonES5("Emily", 1990, "Diaz", "spanish");
console.log(john);
console.log(emily);

// ES6
function SmithPersonES6(firstName, yearOfBirth, lastName = "Smith", nationality = "american") {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}
var johnES6 = new SmithPersonES6("John", 1990);
var emilyES6 = new SmithPersonES6("Emily", 1990, "Diaz", "spanish");
console.log(johnES6);
console.log(emilyES6);

// ------ Обычная функция -----------

function sum(a = 10, b = 5){
    console.log(a + b);
}
sum(25);
