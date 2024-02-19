// -------------------------------------------------------
// 1. ES6 Классы - Основы
// -------------------------------------------------------
/*
//ES5
function PersonES5(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

PersonES5.prototype.calculateAge = function(){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var johnES5 = new PersonES5("John", 1992, "Designer");
console.log(johnES5);
johnES5.calculateAge();

//ES6
class PersonES6 {
    constructor(name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    // без запятых и без ";"

    calculateAge(){
        const age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    static greeting(){
        console.log("Hello! How are you?");
    }
}

PersonES6.greeting();

const johnES6 = new PersonES6("John", 1992, "Designer");
console.log(johnES6);
johnES6.calculateAge();

// Для объявления классов не работает hoisting
// Классы могут содержать только методы, но не свойства
*/

// -------------------------------------------------------
// 2. ES6 Классы - Наследование
// -------------------------------------------------------

// Сделаем наследование.
// Создаем класс Person.
// Далее создаем класс Athlete и наследуем его от класса Person.
// Создаем объект с помощью класса Athelete.

// ------------------------- ES5 --------------------------

function PersonES5(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth= yearOfBirth;
    this.job = job;
}

PersonES5.prototype.calculateAge = function () {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log()
}


 









function AthleteES5(name, yearOfBirth, job, olympicGames, medals){
    // Вызываем конструктор родительского класса
    // чтобы он сработал для нового объекта класса Athlete,
    // а не для класса Person
    PersonES5.call(this, name, yearOfBirth, job);

    this.olympicGames = olympicGames;
    this.medals = medals;
}

// Чтобы создать корректную цепочку прототипирования,
// необходимо использовать Object.create()
// Object.create позволяет нам вручную задать протип
// для создаваемого объекта
// И нам нужно в прототипе у класса AthleteES5
// установить прототип класса PersonES5. Чтобы они были соединены.
AthleteES5.prototype = Object.create(PersonES5.prototype);

AthleteES5.prototype.wonMedal = function(){
    this.medals++;
    console.log(this.medals);
}

var johnAthleteES5 = new AthleteES5("John", 1992, "athlete", "swimming", 10);
console.log(johnAthleteES5);

johnAthleteES5.calculateAge();
johnAthleteES5.wonMedal();


// ------------------------- ES6 --------------------------

class PersonES6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge() {
        const age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class AthleteES6 extends PersonES6 {
    constructor(name, yearOfBirth, job, olympicGames, medals){
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthleteES6 = new AthleteES6("John", 1992, "athlete", "swimming", 10);
console.log(johnAthleteES6);

johnAthleteES6.calculateAge();
johnAthleteES6.wonMedal();