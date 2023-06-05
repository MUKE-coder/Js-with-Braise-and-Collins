import { displayTodos, todos } from "./app.js";
const inputEl = document.querySelector("input");
export function addTodo() {
  const todo = inputEl.value;
  if (todo !== "") {
    todos.push(todo);
    // Updating the UI
    displayTodos(todos);
    console.log(todo);
    localStorage.setItem("todos", todos);
  } else {
    alert("Please Add Todo");
  }
}
