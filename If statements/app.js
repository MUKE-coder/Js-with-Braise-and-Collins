// console.log(x + y);
/*
FUNCTION
1) Function declaration
*/
//1. Create the function
function add(x, y) {
  const sum = x + y;
  console.log(sum);
}
// 2. Invoke (Call the function)
add(30, 16);

// defined the function
function calAge(currentYear, bornYear) {
  const age = currentYear - bornYear;
  console.log(age);
}
calAge(2023, 2000);

function findMax(x, y) {
  let maxNum;
  // const maxNum = x > y ? x : y;
  if (x > y) {
    maxNum = x;
  } else {
    maxNum = y;
  }
  console.log(maxNum);
}
findMax(3, 5);
