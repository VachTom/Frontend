/* *************************
This
**************************** */

// "use strict";

var function1 = function(){
  console.log("function1", this);
}

function1();

// var function2 = function(){
//     function1();
// }

// function2();

// var object1 = {
//     name: "Object 1",
//     fun: function(){
//         console.log(this);

//         function function3 (){
//             console.log('function3', this);
//         }
//         function3();

//     }
// }

// object1.fun();

// var object2 = {
//     name: "Object 2",
//     fun2: object1.fun
// }

// object2.fun2();

// var function1 = function () {
//     console.log("function1", this);
// }

// function1();

// window.action = function1;
// window.action();

// setTimeout(function1, 1000);
// setTimeout(object1.fun, 1000);