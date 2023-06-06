// JS OBJECT FORMAT
const product = {
  id: 1,
  title: "Change title",
  price: 100,
  description:
    "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
  images: [
    "https://placeimg.com/640/480/any",
    "https://upload.wikimedia.org/wikipedia/fi/thumb/c/c3/Moomin_mug_blue_Moomins_painting.JPG/1920px-Moomin_mug_blue_Moomins_painting.JPG",
    "https://upload.wikimedia.org/wikipedia/fi/thumb/c/c3/Moomin_mug_blue_Moomins_painting.JPG/1920px-Moomin_mug_blue_Moomins_painting.JPG",
  ],
  creationAt: "2023-06-06T04:05:40.000Z",
  updatedAt: "2023-06-06T07:08:15.000Z",
  category: {
    id: 3,
    name: "Furniture",
    image: "https://picsum.photos/640/640?r=2661",
    creationAt: "2023-06-06T04:05:40.000Z",
    updatedAt: "2023-06-06T04:05:40.000Z",
  },
};

const productJSON = JSON.stringify(product);
const productParse = JSON.parse(productJSON);

const savedTodos = JSON.parse(localStorage.getItem("todos"));

let todos = savedTodos ? savedTodos : [];

const newTodo = {
  content: "Going to Church",
};
todos.push(newTodo);
localStorage.setItem("todos", JSON.stringify(todos));
// console.log(JSON.stringify(todos));

console.log(savedTodos);
