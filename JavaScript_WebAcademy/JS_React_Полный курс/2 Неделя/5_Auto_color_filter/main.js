/*
Задание:
Сделать рабочий фильтр цветов.
При нажатии на один из цветов, круг с цветом - мы видим автомобиль, соответствующего цвета.
А активный цвет выделяется, за счет дополнительного CSS класса ".colorItem--active".

Работу сдать через CodePen.

Другие изображения автомобиля:
https://webcademy.ru/files/js2020/solaris/black.png
https://webcademy.ru/files/js2020/solaris/blue.png
https://webcademy.ru/files/js2020/solaris/graphite.png
https://webcademy.ru/files/js2020/solaris/orange.png
https://webcademy.ru/files/js2020/solaris/red.png
https://webcademy.ru/files/js2020/solaris/white.png
https://webcademy.ru/files/js2020/solaris/white-pure.png
*/

var img = document.querySelector("#imgSrc");
var btnColorAuto = document.querySelectorAll(".colorItem");

btnColorAuto.forEach(function (event) {
  // console.log(event)
  event.addEventListener("click", function filterColors(e) {
    document.querySelector(".colorItem--active").classList.remove("colorItem--active");
    e.target.classList.toggle("colorItem--active");

    img.setAttribute("src", "https://webcademy.ru/files/js2020/solaris/" + e.target.getAttribute("data-color"))

  });
});





var cards = document.querySelector(".plate")
cards[0].classList.add("visible")
window.addEventListener("click", function (e) {
  console.log(e.target)
})