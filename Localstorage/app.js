import { addTodo } from "./functions.js";
const savedTodos = localStorage.getItem("todos");

export const todos = ["jump", "clap"];

//JSON.stringify() => Into a string
console.log(savedTodos, todos);

const addBtn = document.querySelector(".add-todo");
const inputEl = document.querySelector("input");
const todoListContainer = document.querySelector(".todo-list");
console.log(addBtn, inputEl);

addBtn.addEventListener("click", addTodo);

export function displayTodos(data) {
  data.forEach((todo) => {
    const todoTemplate = `
  <p class="todo-item">${todo}</p>
  `;
    todoListContainer.insertAdjacentHTML("beforeend", todoTemplate);
  });
}

displayTodos(todos);
