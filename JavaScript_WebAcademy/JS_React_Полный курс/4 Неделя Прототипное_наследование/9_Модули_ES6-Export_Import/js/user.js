// 3. Дефолтный экспорт сразу при определении класса (функции / переменной)
export default class User {
    constructor (name, age){
        this.name = name;
        this.age = age;
    }
}

// 4.1 Обычный экспорт сразу при определении функции / переменной / ...
export function printName(user){
    console.log(`User's name is: ${user.name}`);
}

// 4.2 Обычный экспорт сразу при определении функции / переменной / ...
export function printAge(user) {
    console.log(`User's age is: ${user.age}`);
}

// 1. Экспорт по умолчанию
// export default User;

// 2. Экспорт дополнительных данных
// export { printName, printAge }