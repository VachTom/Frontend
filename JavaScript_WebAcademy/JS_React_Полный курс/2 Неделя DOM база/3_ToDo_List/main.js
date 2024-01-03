var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

// прослушки событий
form.addEventListener("submit", addform); // Добавление новой задачи ПРОСЛУШКА СОБЫТИЙ
itemList.addEventListener("click", removeItem);// Удаление элемента - ПРОСЛУШКА СОБЫТИЙ
filter.addEventListener("keyup", filterItem);// Фильтрация списка дел ПРОСЛУШКА СОБЫТИЙ


function addform(e) { // Добавление новой задачи ФУНКЦИЯ
  e.preventDefault();
  var newItemInput = document.getElementById("newItemText");
  var newItemText = newItemInput.value;

  var newElement = document.createElement("li");
  newElement.className = "list-group-item";

  newElement.prepend(newItemText);
  // Сделал без дополнительных переменных
  newElement.insertAdjacentElement(
    "beforeend",
    document.createElement("button")
  ).dataset.action = "delete";
  newElement.querySelector("button").className =
    "btn btn-light btn-sm float-right";
  newElement.querySelector("button").prepend("Удалить");

  itemList.prepend(newElement);
  newItemInput.value = "";
}

function removeItem(e) {
  if (
    e.target.hasAttribute("data-action") &&
    e.target.getAttribute("data-action") == "delete"
  ) {
    e.target.parentNode.remove();
  }
}

function filterItem(e) {
  var searchText = e.target.value.toLowerCase();
  var itemLists = itemList.querySelectorAll("li");
  itemLists.forEach(function (item) {
    var itemFilter = item.firstChild.textContent.toLowerCase();
    if (itemFilter.indexOf(searchText) == -1) {
      item.style.display = "none";
    } else {
      item.style.display = "block";
    }
  });
}
