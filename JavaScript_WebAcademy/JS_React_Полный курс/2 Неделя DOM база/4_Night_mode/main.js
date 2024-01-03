/* Сделать чтобы при нажатии на кнопку в верхнем правом углу срабатывал 
ночной режим на странице.
Для ночного режима предусмотрен специальный CSS класс night,
 который надо применить к тегу <body>


*/

var btnNight = document.querySelector("button"); // Поиск элемента
btnNight.className = "night-mode-btn"; // Присваивание класса

var bodyS = document.querySelector("body"); // Поиск элемента

btnNight.addEventListener("click", btnClick); // Прослушка событий по клику

function btnClick(item) {
  if (bodyS.classList.contains("night") == 0) {
    bodyS.className = "night";
    btnNight.textContent = "Выключить ночной режим";
  } else {
    bodyS.className = "";
    btnNight.textContent = "Включить ночной режим";
  }
}
