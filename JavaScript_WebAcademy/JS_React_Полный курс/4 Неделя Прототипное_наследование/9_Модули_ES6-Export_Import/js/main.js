// 1. Дефолтный импорт, задаем свое внутренне имя
// import UserClass from './user.js' // импорт дефолтного экспорта

// 2. Обычный импорт с переименованием
// import { printName as printUserNameFunc, printAge as printAgeFunc } from './user.js'

// 3. Дефолтный и обычный импорт одной строкой
import UserClass, { printName as printUserNameFunc, printAge as printAgeFunc } from './user.js'

const userBob = new UserClass("Bob", 28);
console.log(userBob);

printUserNameFunc(userBob);

printAgeFunc(userBob);