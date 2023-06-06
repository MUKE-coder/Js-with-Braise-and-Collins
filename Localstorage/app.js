const inputEl = document.querySelector("input");
const addTodoBtn = document.querySelector(".add-todo");

// initialise todos
//gettting todos from localstorage

const savedTodos = JSON.parse(localStorage.getItem("todos"));
let todos = savedTodos ? savedTodos : [];

// Add eventlistener to the btn
addTodoBtn.addEventListener("click", addTodo);

function addTodo() {
  const newTodo = {
    content: inputEl.value,
  };
  // check if the input has a value
  if (newTodo.content !== "") {
    //add a todo in the todos array
    todos.push(newTodo);
    // save the todos array in the localstorage
    localStorage.setItem("todos", JSON.stringify(todos));
    // clear the input
    inputEl.value = "";
    console.log(todos);
    // Update the UI
    displayTodos(todos);
  } else {
    alert("You need to write something");
  }
}

console.log(todos);

function displayTodos(todos) {
  const todoListContainer = document.querySelector(".todo-list");
  todoListContainer.innerHTML = "";
  todos.forEach((todo) => {
    console.log(todo);
    const todoTemp = `
    <p class="todo-item">${todo.content}</p>
    `;
    todoListContainer.insertAdjacentHTML("beforeend", todoTemp);
  });
}

displayTodos(todos);
