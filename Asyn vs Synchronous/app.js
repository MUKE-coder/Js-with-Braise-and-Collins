// Synchronous Behaviour

// console.log("Prayers");
// console.log("Eat breakfast");
// console.log("Write code");

// Async
const sweetAlert = document.querySelector(".sweet-alert");
sweetAlert.style.display = "none";
// console.log("Prayers");
// setTimeout(() => console.log("Eat Breakfast"), 3000);
console.log("Write Code");
setTimeout(() => {
  sweetAlert.style.display = "block";
}, 3000);
setTimeout(() => {
  window.location = "about.html";
}, 6000);
