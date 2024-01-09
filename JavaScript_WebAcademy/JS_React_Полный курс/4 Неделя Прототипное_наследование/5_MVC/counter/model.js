// // По обычному
// let counter = 0;
// function increase() {
//   counter++;
// }

// function decrease() {
//   counter--;
// }

// function reset() {
//   counter = 0;
// }

// Как объект
export default{
  counter: 0,

  increase: function () {
    this.counter++;
  },

  decrease: function () {
    this.counter--;
  },

  reset: function () {
    this.counter = 0;
  },
};
