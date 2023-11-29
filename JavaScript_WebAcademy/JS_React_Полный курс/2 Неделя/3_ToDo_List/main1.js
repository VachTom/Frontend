var form = document.getElementById("addForm");
var itemsList = document.getElementById("items");
var filter = document.getElementById("filter");

form.addEventListener("submit", addItem); // Добавление новой задачи ПРОСЛУШКА СОБЫТИЙ
itemsList.addEventListener("click", removeItem); 
filter.addEventListener("keyup", filterItem); // Фильтрация списка дел ПРОСЛУШКА СОБЫТИЙ




function addItem(e) {
  // Добавление новой задачи ФУНКЦИЯ
  e.preventDefault();

  var newItemInput = document.getElementById("newItemText"); // Находим инпут с текстом для новой задачи
  var newItemText = newItemInput.value; // без скобок, тк это свойство // Получаем текст из инпута

  var newElement = document.createElement("li"); // Создали элемент для новой задачи
  newElement.className = "list-group-item"; // Добавили класс

  var newTextNode = document.createTextNode(newItemText); // добавим текст в новый элемент
  newElement.appendChild(newTextNode);

  var delButn = document.createElement("button"); // Создаем кнопку
  delButn.appendChild(document.createTextNode("Удалить")); // Добавляем текст в кнопку
  delButn.className = "btn btn-light btn-sm float-right"; // Добавляем класс в кнопку, не хватает класса и атрибута
  delButn.dataset.action = "delete"; // Добавляем дата АТРИБУТ в кнопку

  newElement.appendChild(delButn); // Помещаем кнопку во внутрь тега li
  console.log("addItem -> newElement", newElement); // Выводим кнопку на экран

  // Мы создали виртуальный элемент, теперь его нужно внести в список со всеми задачи
  itemsList.prepend(newElement); // результат мы увидим на экране

  // ОЧистим поле добавление новой задачи
  newItemInput.value = "";
}

function removeItem(e) {
  // Удаление элемента - ФУНКЦИЯ
  if (
    e.target.hasAttribute("data-action") &&
    e.target.getAttribute("data-action") == "delete"
  ) {
    if (confirm("Удалить задачу ?")) {
      e.target.parentNode.remove();
    }
  }
}

function filterItem(e) {
  // Фильтрация списка дел Функция
  var searchText = e.target.value.toLowerCase(); // Получаем фразу для поиска и с помощью toLowerCase() - переводим весь текст в строчные буквы
  var items = itemsList.querySelectorAll("li"); // 1. Получаем список всех задач

  items.forEach(function (item) {
    // 2 Перебираем циклом все найденные теги li с задачами

    // Получаем текст задачи и списка и переводим его в нижний регистр
    var itemText = item.firstChild.textContent.toLowerCase();
    if (itemText.indexOf(searchText) != -1) { // Проверяем на вхождение искомой подстроки в текст задачи
      item.style.display = "block"; // если вхождение есть - показываем элемент с задачей
    } else {
      item.style.display = "none";  // если вхождение нет - скрываем элемент с задачей
    }
  });
}
