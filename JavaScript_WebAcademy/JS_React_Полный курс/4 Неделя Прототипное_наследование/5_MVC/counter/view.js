// // По обычному
// const input = document.getElementById("input");

// function updateCountroler(counter) {
//   input.value = counter;
// }

// Как объект
export default{
  input: document.getElementById("input"),
  updateCountroler: function (counter) {
    this.input.value = counter;
  },
};
