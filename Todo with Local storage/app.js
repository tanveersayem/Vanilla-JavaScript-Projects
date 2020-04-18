const newTodo = document.querySelector(".form-control");
const todoButton = document.querySelector(".btn");
const todoList = document.querySelector(".list-group");
const markAllButton = document.querySelector(".marked");
const deleteButton = document.querySelector(".delete-all");

//Event Listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
markAllButton.addEventListener("click", markedAll);
deleteButton.addEventListener("click", deleteAll);
newTodo.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    document.querySelector(".btn").click();
  }
});
//Functions
function addTodo(event) {
  event.preventDefault();
  //Todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todos");
  //Creat Li
  const todo = document.createElement("li");
  todo.innerText = newTodo.value;
  todo.classList.add("list-group-item");
  todoDiv.appendChild(todo);
  //Add todo in local storage
  saveLocalTodos(newTodo.value);
  //Checked button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("check-btn", "btn", "btn-outline-secondary");
  todoDiv.appendChild(completedButton);
  //Trash Button
  const trashedButton = document.createElement("button");
  trashedButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashedButton.classList.add("btn", "btn-outline-secondary", "trash-btn");
  todoDiv.appendChild(trashedButton);
  //Append to list
  todoList.appendChild(todoDiv);
  //Clear the input value
  newTodo.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  //Delete Todo
  if (item.classList[2] === "trash-btn") {
    const todoItem = item.parentElement;
    todoItem.classList.add("fall");
    removeLocalTodos(todoItem);
    todoItem.addEventListener("transitionend", function () {
      todoItem.remove();
    });
  }

  // Check Mark
  if (item.classList[0] === "check-btn") {
    const todoItem = item.parentElement;
    todoItem.classList.toggle("completed");
  }
}
function markedAll(e) {
  todoList.classList.toggle("completed");
}

function deleteAll(e) {
  todoList.remove();
  removeDeleteAll(todoList);
  window.location.reload();
}

function saveLocalTodos(todo) {
  //Check if I have a previously saved
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  //Check if I have a previously saved
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach(function (todo) {
    //Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todos");
    //Creat Li
    const newtodo = document.createElement("li");
    newtodo.innerText = todo;
    newtodo.classList.add("list-group-item");
    todoDiv.appendChild(newtodo);
    //Checked button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("check-btn", "btn", "btn-outline-secondary");
    todoDiv.appendChild(completedButton);
    //Trash Button
    const trashedButton = document.createElement("button");
    trashedButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashedButton.classList.add("btn", "btn-outline-secondary", "trash-btn");
    todoDiv.appendChild(trashedButton);
    //Append to list
    todoList.appendChild(todoDiv);
  });
}

function removeLocalTodos(todoItem) {
  //Check if I have a previously saved
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todoItem.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function removeDeleteAll(todoList) {
  //Check if I have a previously saved
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    localStorage.clear();
    /*todos = JSON.parse(localStorage.getItem("todos"));*/
  }
}
