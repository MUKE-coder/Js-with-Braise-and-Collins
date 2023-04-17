// Function declaration
function add(a, b) {
  const sum = a + b;
  console.log(sum);
}
add(1, 2);
// Function expression
const subtract = function (a, b) {
  const result = a - b;
  console.log(a - b);
};
subtract(15, 2);
// Arrow function
const multiply = (a, b) => console.log(a * b);
multiply(10, 5);
const isEven = (n) => {
  if (n % 2 == 0) {
    console.log("Number is even");
  } else {
    console.log("Number is odd");
  }
};
isEven(11);

const calcArea = (r) => {
  const area = 3.14 * r * r;
  return area;
};
console.log(calcArea(10));

// STRINGS
const text = "johnbaptist";
console.log(text.length);
