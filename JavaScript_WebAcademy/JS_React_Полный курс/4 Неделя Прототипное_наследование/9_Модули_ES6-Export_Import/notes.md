# Экспорт по умолчанию

```js
export default User;
```

или

```js
export default class User {
    constructor(name, age){
        this.name = name
        this.age = age
    }
}
```

-----------------------------------------------------------

# Экспорт отдельных функций, или переменных

```js
export { printName, printAge}
```

или

```js
export function printName(user){
    console.log(`User's name is: ${user.name}.`)
}

export function printAge(user){
    console.log(`User's age is: ${user.age}.`)
}
```

-----------------------------------------------------------

# Импорт дефолтных значений

```js
import UserClass from "./user.js"
```

-----------------------------------------------------------

# Импорт отдельных функций

```js
import {printName, printAge} from "./user.js"
```

-----------------------------------------------------------

# Импорт отдельных под другими именами

```js
import {printName as printUserName, printAge} from "./user.js"
```

-----------------------------------------------------------

# Одновременный импорт и дефолта и функций

```js
import UserClass, {printName as printUserName, printAge} from "./user.js"
```
