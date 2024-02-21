var form = document.getElementById("addForm");
var itemsList = document.getElementById("items");
var filter = document.getElementById("filter");

form.addEventListener("submit", addItem);        // Добавление новой задачи прослушка события
itemsList.addEventListener("click", removeItem); // Удаление элемента - прослушка клика
filter.addEventListener("keyup", filterItems);   // Фильтрация списка дел - прослушка ввода

// Добавление новой задачи функция
function addItem(e) {
    e.preventDefault();    // Отменяем отправку формы

    // const s = localStorage.getItem(JSON.parse(15))


    var newItemInput = document.getElementById("newItemText"); // Находим инпут с текстом для новой задачи
    var newItemText = newItemInput.value;    // Получаем текст из инпута

    var newElement = document.createElement("li"); // Создаем элемент для новой задачи
    newElement.className = "list-group-item";


    var newTextNode = document.createTextNode(newItemText); // Добавим текст в новый элемент
    newElement.appendChild(newTextNode);

    // ============================== DOM ============================== 
    var deleteBtn = document.createElement("button");          // Создаем кнопку
    deleteBtn.appendChild(document.createTextNode("Удалить")); // Добавляем текст

    deleteBtn.className = "btn btn-light btn-sm float-right";  // Добавляем CSS class
    deleteBtn.dataset.action = "delete";                       // Добавляем data атрибут

    newElement.appendChild(deleteBtn);    // Помещаем кнопку внутрь тега li
    console.log("addItem -> newElement", newElement);

    // Добавляем новую задачу в список со всеми задачами
    itemsList.prepend(newElement);

    localStorage.setItem("15", JSON.stringify(newItemText))


    // Очистим поле добавления новой задачи
    newItemInput.value = "";
}

// Удаление элемента - ф-я
function removeItem(e) {
    if (
        e.target.hasAttribute("data-action") &&
        e.target.getAttribute("data-action") == "delete"
    ) {
        if (confirm("Удалить задачу?")) {
            e.target.parentNode.remove();
        }
    }
}

// Фильтрация списка дел ф-я
function filterItems(e) {
    // Получаем фразу для поиска и переводим ее в нижний регистр
    var searchedText = e.target.value.toLowerCase();

    // 1. Получаем списко всех задач
    var items = itemsList.querySelectorAll("li");

    // 2. Перебираем циклом все найденные теги li с задачами
    items.forEach(function(item) {
        // Получаем текст задачи из списка и переводим его в нижний регистр
        var itemText = item.firstChild.textContent.toLowerCase();

        // Проверяем вхождение искомой подстроки в текст задачи
        if (itemText.indexOf(searchedText) != -1) {
            // Если вхождение есть - показываем элемент с задачей
            item.style.display = "block";
        } else {
            // Если вхождения нет - скрываем элемент с задачей
            item.style.display = "none";
        }
    });
}
