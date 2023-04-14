let x = 100;
let y = 30;
let maxNumber;
if (y > x) {
  maxNumber = y;
} else {
  maxNumber = x;
}
console.log(maxNumber);
// TERNARY OPERATOR
maxNumber = y > x ? y : x;

const age = 18;
let message;
// if(age>18){
//  message ="Your eligible to Vote";
// }else{
//   message="Your NOT allowed to Vote";
// }
message = age >= 18 ? "Your eligible to Vote" : "Your NOT allowed to Vote";
console.log(message);
