const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");

addButton.addEventListener("click", function () {
  const todoText = todoInput.value;

  if (todoText === "") {
    alert("ToDoを入力してください");
    return;
  }

  const li = document.createElement("li");
  li.textContent = todoText;

  li.addEventListener("click", function () {
    li.remove();
  });

  todoList.appendChild(li);
  todoInput.value = "";
});
