const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");

function addTodo() {
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
}

addButton.addEventListener("click", addTodo);

todoInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});
