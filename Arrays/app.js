const fruits = ["mango", "ovacado", "kiwi"];
// length
const fruitsLength = fruits.length;
const firstFruit = fruits[0];
console.log(fruitsLength, firstFruit);
// add an element at the end of an array
fruits.push("guavas");
// add an element at the beginning
fruits.unshift("orange");
// modify tem at a specific index
fruits[3] = "Jack fruit";
console.log(fruits);
// Remove last item
console.log("------------AFTER pop----------");
fruits.pop();
console.log(fruits);
console.log("------------AFTER shift----------");
// Remove first item
fruits.shift();
console.log(fruits);
// destructuring
let fruits2 = ["🍅", "🍄", "🥕"];
let [tomato, mushroom, carrot] = ["🍅", "🍄", "🥕"];
console.log(tomato, mushroom, carrot);
let [one, two, three] = [1, 2, 3];

const even = [2, 4, 6, 8, 10];
const odd = [1, 3, 5, 7, 9];
const allNumbers = [...even, ...odd];
console.log(allNumbers);
const fruitsCopy = [...fruits];
console.log(fruitsCopy, fruits);
fruitsCopy.push("apple");
console.log(fruitsCopy, fruits);

const cartItemsString = prompt("Enter the items you want to buy eg sugar,salt");
cartItemsArray = cartItemsString.split(",");
console.log(cartItemsArray);

const menu = [];
const item1 = prompt("Enter item1");
menu.push(item1);
console.log(menu);
