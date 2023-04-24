function countNumberOfChar(str) {
  return str.length;
}
// const username = prompt("Enter your username");

// const count = countNumberOfChar(username);
// console.log(count);
// if (count < 3 || count > 8) {
//   console.log("The Username Must be btn 3 and 8 char");
// }

const str = "JavaScript";
console.log(str.slice(5));

function calculator(num1, num2, operation) {
  if (operation == "add") {
    return num1 + num2;
  } else if (operation == "subtract") {
    return num1 - num2;
  } else if (operation == "multiply") {
    return num1 * num2;
  } else if (operation == "divide") {
    return num1 / num2;
  } else {
    alert("Please enter a valid operation");
  }
}
const num1 = +prompt("Enter first number?");
const operation = prompt("Enter the operation").toLowerCase();
const num2 = +prompt("Enter second number?");
const result = calculator(num1, num2, operation);
console.log(result);
